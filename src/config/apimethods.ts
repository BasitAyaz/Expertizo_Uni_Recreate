import axios from "axios";

let apiHandle = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
})


export const apiGet = (endpoint: string) => {
    return apiHandle.get(endpoint)
}
const apiPost = () => { }
const apiPut = () => { }
const apiDelete = () => { }