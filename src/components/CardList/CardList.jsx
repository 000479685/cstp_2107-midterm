import React, {useContext} from 'react'
import ProductCard from '../Card/ProductCard'
import DataContext from '../../context/DataContext'
import {Box} from '@mui/material'
// import CartContext from '../../context/CartContext'

const CardList = () =>
{
    const {productData} = useContext(DataContext)
    // const {cartData} = useContext(CartContext)

    return (
        <Box display="grid" gridTemplateColumns="33% 33% 33%" gap="10px">
            {
                productData.map((product, index) =>
                {
                    return <ProductCard product={product} key={index}/>
                })
            }
        </Box>
    )
}

export default CardList