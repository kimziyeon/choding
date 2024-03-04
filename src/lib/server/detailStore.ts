import axios, { AxiosResponse } from "axios";

export default async function serverStore(type: string, colName: string, postData?: any, idx?: any) {
    let res: AxiosResponse | null = null;

    console.log(type, colName, idx)

    switch (type) {
        case 'get':
            res = await axios.get(`/api/mongodb/${idx}`, {
                params: { colName }
            });
            break;

        case 'post':
            res = await axios.get(`/api/mongodb/${idx}`, {
                params: { colName }
            });
            break;

        case 'delete':
            console.log('진입~~')
            res = await axios.get(`/api/mongodb/${idx}`, {
                params: { colName }
            });
            break;

        case 'put':
            console.log('진입~~')
            res = await axios.get(`/api/mongodb/${idx}`, {
                params: { colName }
            });
            break;
    }

    return res;
}
