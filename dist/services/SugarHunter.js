import mongodb from 'mongodb';
const { MongoClient } = mongodb;
const singleton = Symbol('singleton');
const singletonEnforcer = Symbol('singletonEnforcer');
class SugarHunter {
    constructor(enforcer) {
        this.getProducts = async () => {
            const client = new MongoClient(process.env.MONGODB_SH_URI, {
                useNewUrlParser: true,
                useUnifiedTopology: true
            });
            let result = [];
            try {
                await client.connect();
                const db = client.db('sh');
                const products = db.collection('products');
                const cursor = await products.find({}).sort({ name: -1 });
                result = await cursor.toArray();
            }
            finally {
                await client.close();
            }
            return result;
        };
        this.getDishes = async () => {
            const client = new MongoClient(process.env.MONGODB_SH_URI, {
                useNewUrlParser: true,
                useUnifiedTopology: true
            });
            let result = [];
            try {
                await client.connect();
                const db = client.db('sh');
                const dishes = db.collection('dishes');
                const cursor = await dishes.find({}).sort({ name: -1 });
                result = await cursor.toArray();
            }
            finally {
                await client.close();
            }
            return result;
        };
        this.updateDish = async (newDish) => {
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
            }
            finally {
                await client.close();
            }
            return result === 1;
        };
        this.deleteDish = async (id) => {
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
            }
            finally {
                await client.close();
            }
            return result === 1;
        };
        if (enforcer !== singletonEnforcer) {
            throw new Error('Cannot construct singleton');
        }
    }
    static get instance() {
        if (!this[singleton]) {
            this[singleton] = new SugarHunter(singletonEnforcer);
        }
        return this[singleton];
    }
}
export default SugarHunter;
//# sourceMappingURL=SugarHunter.js.map