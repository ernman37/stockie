import axios from 'axios';

const SERVER_ADDR:string = 'http://0.0.0.0:8000/';

export interface APIResponse<T> {
    data: T;
    status: number;
    message: string;
}

export async function makeRequest<T>(path: string): Promise<APIResponse<T> | null>{
    try{
        const response = await axios.get(SERVER_ADDR + path);
        const data: APIResponse<T> = {
            data: response.data,
            status: response.status,
            message: response.statusText
        };
        return data;
    }catch(error){
        return null;
    }
}