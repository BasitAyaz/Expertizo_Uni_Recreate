import axios from "axios";
import BAButton from "../components/BAButton";
import { apiGet } from "../config/apimethods";
import { useEffect, useState } from "react";

export default function APIHandling() {
    let apiUrl = 'https://jsonplaceholder.typicode.com/posts'
    const [count, setCount] = useState(0)

    const get = () => {
        apiGet('posts').then((res) => {
            console.log(res.data)
        })
    }
    const apiPost = () => {
        axios.post(apiUrl, {
            body: "ABC Body",
            title: "ABC Title",
            userId: 1
        })
    }
    const apiPut = () => {
        axios.put(`${apiUrl}/1`, {
            body: 'xyz',
            title: 'xyz title',
            userId: 100,
            id: 1
        }).then((res) => {
            console.log(res.data)
        }).catch((err) => {
            console.log(err)
        })
    }
    const apiDelete = (id: any) => {
        axios.delete(`${apiUrl}/${id}`).then(() => {
            console.log("Data Deleted Successfully")
        }).catch((err) => {
            console.log(err)
        })
    }


    useEffect(() => {
        get()
    }, [])


    return <>

        <BAButton onClick={get} label='Get' />
        <BAButton onClick={apiPost} label='Post' />
        <BAButton onClick={apiPut} label='Put' />
        <BAButton onClick={apiDelete} label='Delete' />
    </>
}