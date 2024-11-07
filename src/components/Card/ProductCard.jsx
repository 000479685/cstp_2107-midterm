import { Button, Avatar, Box, Card, CardContent, CardHeader, Typography} from '@mui/material'
import React from 'react'

// const addToCart = () =>
// {
//     console.log("Adding to cart", product.title)
// }

const ProductCard = ({product}) =>
{

    return (
        <Card >
            <Box display="flex" flexDirection="column">
                <CardHeader>
                    <Box>
                        {product.title}
                    </Box>
                </CardHeader>

                
                <Avatar src={product.image} alt="Product Image" />
                

                <CardContent>
                    <Box>
                        <Typography>{product.description}</Typography>                
                    </Box>

                    <Typography>
                        ${product.price}
                    </Typography>
                </CardContent>
                <Box alignSelf="flex-center" marginTop="auto">
                    <Button color='#424242'>
                        Add
                    </Button>
                </Box>
            </Box>
        </Card>
    )
}

export default ProductCard