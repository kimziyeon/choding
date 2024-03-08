//src/lib/mongodb.ts
const { MongoClient } = require('mongodb');
const uri = process.env.NEXT_APP_MONGO_URI;
const client = new MongoClient(uri);

export const connectToDB = async (type: string, body: any, colName: string | null, idx: number | null) => {
    let db, collection, data;


    await client.connect(); // 접속
    db = client.db('choding2');
    collection = db.collection(colName);

    console.log('db접속', type, body, colName, idx)

    if (colName == 'LoginData' && body) { // 로그인 이메일 중복 방지
        console.log(body)
        let aaa = await collection.find({ email: body.email }).toArray();
        if (aaa.length) return;
    }

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

        case 'delete':
            data = await collection.deleteOne(body);
            break;

            {/*
    case 'put':
            data = await collection.updateOne({ postId: idx }, { $push: { title: body.title } });
            break;  
        */}

        case 'put':
            const updateQuery = { [body.updateKey]: body.updateValue };
            let updateOperation = {};

            if (body.updateType === 'push') {
                updateOperation.$push = { [body.field]: body.value };
            } else if (body.updateType === 'set') {
                updateOperation.$set = { [body.field]: body.value };
            } else {
                updateOperation.$set = body;
            }

            data = await collection.updateOne(updateQuery, updateOperation);
            break;
    }

    if (type != 'detail') data = await collection.find({}).toArray();

    return data;
}