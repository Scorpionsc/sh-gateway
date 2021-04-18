import mongodb from 'mongodb';

interface LoopData {
    cob?: { timestamp:string; cob: number };
    iob?: { timestamp:string; cob: number };
}
interface Entry {
    sgv: number;
    direction: string;
    date: number;
}

const { MongoClient } = mongodb;

const singleton = Symbol('singleton');
const singletonEnforcer = Symbol('singletonEnforcer');

class SugarCollector {
  constructor (enforcer) {
    if (enforcer !== singletonEnforcer) {
      throw new Error('Cannot construct singleton');
    }
  }

  static get instance () {
    if (!this[singleton]) {
      this[singleton] = new SugarCollector(singletonEnforcer);
    }

    return this[singleton];
  }

    public getLoopData: () => Promise<LoopData> = async () => {
      const client = new MongoClient(process.env.MONGODB_SC_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
      });
      let result:LoopData = {};

      try {
        await client.connect();
        const database = client.db('sugar-colector');
        const deviceStatus = database.collection('devicestatus');
        const items = await deviceStatus.find().sort({ $natural: -1 }).limit(1);
        const status = await items.toArray();
        result = {
          cob: status[0].loop.cob || { cob: 0, timestamp: new Date(Date.now()).toUTCString() },
          iob: status[0].loop.iob || { iob: 0, timestamp: new Date(Date.now()).toUTCString() }
        };
      } finally {
        await client.close();
      }

      return result;
    }

    public getLastEntry:() => Promise<Entry> = async () => {
      const client = new MongoClient(process.env.MONGODB_SC_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
      });
      let result = {
        sgv: 0,
        direction: '',
        date: 0
      };

      try {
        await client.connect();
        const database = client.db('sugar-colector');
        const deviceStatus = database.collection('entries');
        const items = await deviceStatus.find().sort({ $natural: -1 }).limit(1);
        const status = await items.toArray();
        result = {
          sgv: status[0].sgv,
          direction: status[0].direction,
          date: status[0].date
        };
      } finally {
        await client.close();
      }

      return result;
    }
}

export default SugarCollector;
