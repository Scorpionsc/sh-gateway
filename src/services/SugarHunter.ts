import mongodb from 'mongodb';

const { MongoClient } = mongodb;

const singleton = Symbol('singleton');
const singletonEnforcer = Symbol('singletonEnforcer');

class SugarHunter {
  constructor (enforcer) {
    if (enforcer !== singletonEnforcer) {
      throw new Error('Cannot construct singleton');
    }
  }

  static get instance () {
    if (!this[singleton]) {
      this[singleton] = new SugarHunter(singletonEnforcer);
    }

    return this[singleton];
  }

  public getProducts: () => Promise<any> = async (
  ) => {
    const client = new MongoClient(process.env.MONGODB_SH_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    let result:any[] = [];

    try {
      await client.connect();
      const db = client.db('sh');
      const products = db.collection('products');
      const cursor = await products.find({}).sort({ name: -1 });
      result = await cursor.toArray();
    } finally {
      await client.close();
    }

    return result;
  }

  public getDishes: () => Promise<any> = async (
  ) => {
    const client = new MongoClient(process.env.MONGODB_SH_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    let result:any[] = [];

    try {
      await client.connect();
      const db = client.db('sh');
      const dishes = db.collection('dishes');
      const cursor = await dishes.find({}).sort({ name: -1 });
      result = await cursor.toArray();
    } finally {
      await client.close();
    }

    return result;
  }

  public updateDish: (newDish:any) => Promise<boolean> = async (newDish) => {
    const { _id: id, ...newObj } = newDish;

    const client = new MongoClient(process.env.MONGODB_SH_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    let result = 0;

    try {
      await client.connect();
      const db = client.db('sh');
      const dishes = db.collection('dishes');
      const res = await dishes.replaceOne({ _id: id }, newObj);
      result = res.modifiedCount;
    } finally {
      await client.close();
    }

    return result === 1;
  }

  public deleteDish: (id: any) => Promise<boolean> = async (id) => {
    const client = new MongoClient(process.env.MONGODB_SH_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    let result = 0;

    try {
      await client.connect();
      const db = client.db('sh');
      const dishes = db.collection('dishes');
      const res = await dishes.deleteOne({ _id: id });

      result = res.deletedCount;
    } finally {
      await client.close();
    }

    return result === 1;
  }
}

export default SugarHunter;
