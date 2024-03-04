//src/lib/mongodb.ts
const { MongoClient } = require('mongodb');
const uri = process.env.NEXT_APP_MONGO_URI;
const client = new MongoClient(uri);

export const connectToDB = async (type: string, body: any, colName: string | null) => {
    let db, collection, data;


    await client.connect(); // 접속
    db = client.db('choding');
    collection = db.collection(colName);

    console.log('db접속', type, body, colName)

    switch (type) {
        case 'post': await collection.insertOne(body);
            break;

        case 'detail':
            const query = { postId: Number(body.postId) };
            data = await collection.findOne(query);
            if (data === null) {
                console.log(`문서를 찾을 수 없음: ${JSON.stringify(query)}`);
            }
            break;

        case 'delete': data = await collection.deleteOne(body);
            break;

        case 'put': data = await collection.updateOne({ id: body.postId }, { $set: { title: body.title } });
            break;
    }

    if (type != 'detail') data = await collection.find({}).toArray();

    return data;
}