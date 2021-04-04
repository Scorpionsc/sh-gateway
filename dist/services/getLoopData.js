const getLoopData = async (client) => {
    let result = {};
    try {
        await client.connect();
        const database = client.db('sugar-colector');
        const deviceStatus = database.collection('devicestatus');
        const items = await deviceStatus.find().sort({ $natural: -1 }).limit(1);
        const status = await items.toArray();
        result = {
            cob: status[0].loop.cob.cob,
            iob: status[0].loop.iob.iob
        };
    }
    finally {
        await client.close();
    }
    return result;
};
export default getLoopData;
//# sourceMappingURL=getLoopData.js.map