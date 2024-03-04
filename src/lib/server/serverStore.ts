import axios, { AxiosResponse } from "axios";

export default async function serverStore(type: string, colName: string, postData?: any, idx?: any) {
    let res: AxiosResponse | null = null;
    
    console.log(type, colName, idx)
    switch (type) {
        case 'get' :
            res = await axios.get(`/api/mongodb?colName=${colName}`);
            break;
        case 'detail' :
            res = await axios.get(`/api/mongodb/${idx}`, {
                params: { colName }
            });
            break;
        case 'post':
            res = await axios.post(`/api/mongodb?colName=${colName}`, postData);
            break;
        case 'delete':
            res = await axios.delete(`/api/mongodb/${idx}?colName=${colName}`);
            break;
        case 'put':
            res = await axios.put(`/api/mongodb/${idx}?colName=${colName}`, postData);
            break;
    }

    return res;
}
