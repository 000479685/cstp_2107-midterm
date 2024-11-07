import { Button, Avatar, Box, Card, CardContent, CardHeader, Typography} from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import CartContext from '../../context/CartContext'

// const addToCart = () =>
// {
//     console.log("Adding to cart", product.title)
// }
const ProductCard = ({product, cartDetails, setCartDetails}) =>
{
    const {cartData} = useContext(CartContext)
    const navigate = useNavigate();

    const addToCart = () =>
        {                              
            let temp = cartData
            temp.push(product)            
            setCartDetails(temp)
        }

    return (
        <Card >
            <Box display="flex" flexDirection="column">
                <CardHeader>
                    <Box>
                        {product.title}
                    </Box>
                </CardHeader>

                
                <Avatar src={product.image} alt="Product Image" />
                
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