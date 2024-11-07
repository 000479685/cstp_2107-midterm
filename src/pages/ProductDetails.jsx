import axios from 'axios'
import { Button, Avatar, Box, Card, CardContent, CardHeader, Typography} from '@mui/material'
import { useNavigate, useParams } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'
import { API_URL } from '../constant'
import React from 'react'
import CartContext from '../context/CartContext'

function ProductDetails()
{
    const {cartData} = useContext(CartContext)
    const {product } = useParams()
    const [productData, setProductData] = useState({})
    const navigate = useNavigate()

    useEffect(() =>
    {
        const getProductInfo = async () => 
            {
                const data = await axios.get(`${API_URL}${product}`)
                // console.log(data)     
                // console.log(data.data)           
                setProductData(data.data)
            }
        getProductInfo();
    }
    , [])
    

    // const addToCart = () =>
    // {
    //     let temp = cartData
    //     console.log(cartData)
    //     temp.push(productData)      
    // }


    return (        
        <Box display="flex" flexDirection="column">
            <Button onClick={() => navigate('/')}>Back</Button>
            <CardHeader>
                <Box fontWeight="bolder">
                    {productData.title}
                </Box>
            </CardHeader>

            
            <img src={productData.image} alt="Product Image" />
            

            <CardContent>
                <Box>
                    <Typography>{productData.description}</Typography>                
                </Box>

                <Typography>
                    ${productData.price}
                </Typography>
            </CardContent>
            <Box alignSelf="flex-center" marginTop="auto">
                <Button  color='#424242' onClick={() => {
                            let temp = cartData
                            console.log(cartData)
                            temp.push(productData)    }}>
                    Add
                </Button>
            </Box>
        </Box>
    )
}

export default ProductDetails