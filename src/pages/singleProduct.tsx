import { useParams } from "react-router-dom"
import { apiGet } from "../config/apimethods"
import { useEffect, useState } from "react"
import { Box, Grid } from "@mui/material"

export default function SingleProduct() {
    const params = useParams()
    console.log(params)
    const [model, setModel] = useState<any>({})


    const getDataById = (id: any) => {
        apiGet(`products/${id ? id : ''}`).then((res: any) => {
            console.log(res.data)
            setModel({ ...res.data })
        }).catch((err) => {
            console.log(err)
        })
    }

    useEffect(() => {
        if (params.id) {
            getDataById(params.id)
        }
    }, [])

    return <>
        <Box className='container'>
            <Grid container>
                <Grid item md={12}>
                    <Box className='p-2'>
                        <h1>Product</h1>
                    </Box>
                </Grid>
                <Grid item md={6} sm={6} xs={12}>
                    <Box className='p-2'>
                        <img src={model.image} width={'100%'} alt="" />
                    </Box>
                </Grid>
                <Grid item md={6} sm={6} xs={12}>
                    <Box className='p-2'>
                        <h1>{model.title}</h1>
                        <h3>{model.description}</h3>
                        <h2>Price {model.price}</h2>
                        <h2>{model.category}</h2>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    </>
}