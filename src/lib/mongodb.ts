//src/lib/mongodb.ts
const { MongoClient } = require('mongodb');
const uri = process.env.NEXT_APP_MONGO_URI;
const client = new MongoClient(uri);

export const connectToDB = async (type: string, body: any, colName: string) => {
    let db, collection, data;

    await client.connect(); // 접속
    db = client.db('choding');
    collection = db.collection(colName);

    switch (type) {
        case 'post': await collection.insertOne(body);
            break;

        case 'detail': data = await collection.find(body).toArray();
            break;

        case 'delete': data = await collection.deleteOne(body);
            break;

        case 'put': data = await collection.updateOne({ id: body.postId }, { $set: { title: body.title } });
            break;
    }

    if (type != 'detail') data = await collection.find({}).sort({ _id: -1 }).toArray();

    return data;
}