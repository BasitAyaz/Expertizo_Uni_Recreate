import { useEffect, useState } from "react"
import { apiGet } from "../config/apimethods"
import { Box, Grid } from "@mui/material"
import { Link, useNavigate } from "react-router-dom"

export default function Products() {
    const [products, setProducts] = useState<any>([])

    const getData = () => {
        apiGet('products').then((res: any) => {
            setProducts([...res.data])
        }).catch(err => {
            console.log(err)
        })
    }

    const navigate = useNavigate()

    useEffect(() => {
        getData()
    }, [])

    return <>
        <h1>Products</h1>
        <Link to={'/dashboard/pg3'}>PG3</Link>
        <Grid container>
            {products && products.length > 0 ? products.map((x: any, i: any) => <Grid key={i} item md={3} xs={12} sm={6}>
                <Box onClick={() => {
                    navigate(`/singleProduct/${x.id}`)
                }} className='p-2 m-2 bg-white rounded shadow h-100'>
                    <img src={x.image} width={'100%'} alt="" />
                    <Box className='p-2'>
                        <h3>{x.title}</h3>
                        <h2>Price {x.price}</h2>
                    </Box>
                </Box>
            </Grid>) : null}
        </Grid>
    </>
}