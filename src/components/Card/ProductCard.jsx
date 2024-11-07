import { Button, Avatar, Box, Card, CardContent, CardHeader, Typography} from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import CartContext from '../../context/CartContext'

// const addToCart = () =>
// {
//     console.log("Adding to cart", product.title)
// }
const ProductCard = ({product}) =>
{
    const {cartData} = useContext(CartContext)
    const navigate = useNavigate();

    const addToCart = () =>
        {                              
            let temp = cartData
            // console.log(cartData)
            temp.push(product)                        
        }

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
                <Box alignSelf="flex-center" marginTop="auto">
                    <Button  color='#424242' onClick={addToCart}>
                        Add
                    </Button>
                </Box>
            </Box>
        </Card>
    )
}

export default ProductCard