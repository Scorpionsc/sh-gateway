import mongodb from 'mongodb';
const { MongoClient } = mongodb;
const singleton = Symbol('singleton');
const singletonEnforcer = Symbol('singletonEnforcer');
class SugarCollector {
    constructor(enforcer) {
        this.getLoopData = async () => {
            const client = new MongoClient(process.env.MONGODB_SC_URI, {
                useNewUrlParser: true,
                useUnifiedTopology: true
            });
            let result = {};
            try {
                await client.connect();
                const database = client.db('sugar-colector');
                const deviceStatus = database.collection('devicestatus');
                const items = await deviceStatus.find().sort({ $natural: -1 }).limit(1);
                const status = await items.toArray();
                result = {
                    cob: status[0].loop.cob,
                    iob: status[0].loop.iob
                };
            }
            finally {
                await client.close();
            }
            return result;
        };
        this.getLastEntry = async () => {
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
            }
            finally {
                await client.close();
            }
            return result;
        };
        if (enforcer !== singletonEnforcer) {
            throw new Error('Cannot construct singleton');
        }
    }
    static get instance() {
        if (!this[singleton]) {
            this[singleton] = new SugarCollector(singletonEnforcer);
        }
        return this[singleton];
    }
}
export default SugarCollector;
//# sourceMappingURL=SugarCollector.js.map