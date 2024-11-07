import React from "react";
import CartContext from "../context/CartContext";
import { Button, AppBar, Box, Card, CardContent, CardHeader, Typography} from '@mui/material'
import { useNavigate, useParams } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'

function Cart()
{
    const {cartData} = useContext(CartContext)
    let total = 0

    const navigate = useNavigate();
    // const addTotal = (value) => {setTotal(total + value)}    
    return (
        <Box>
        <AppBar>
            
        <Button onClick={() => navigate(`/`)} color="#000000">Back</Button>
                            <Button onClick={() => navigate(`/Checkout`)} color="#000000">Purchase</Button>
        </AppBar>
        <Box display="grid" gridTemplateColumns="33% 33% 33%" gap="10px" marginTop="50px">
            {
                cartData.map((product, index) =>
                {                    
                    total += product.price
                    return (                                                
                        <Card >
                        <Box display="flex" flexDirection="column">
                            <CardHeader>
                                <Box>
                                    {product.title}
                                </Box>
                            </CardHeader>
            
                            <Box alignContent="center" justifyContent="center" component="img" maxHeight="150px" maxWidth="150px" src={product.image} alt="Product Image">
                                {/* <Avatar src={product.image} alt="Product Image" /> */}
                            </Box>
                            <Button onClick={() => navigate(`/ProductDetails/${product.id}`)}>See More</Button>
            
                            <CardContent>
                                <Typography>
                                    ${product.price}
                                </Typography>
                            </CardContent>                            
                        </Box>
                    </Card>                    
                    )
                })
            }
        </Box>
        <Box>
            Your total is : {total}
        </Box>
        </Box>
    )
}

export default Cart