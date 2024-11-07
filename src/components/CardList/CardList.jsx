import React, {useContext} from 'react'
import ProductCard from '../Card/ProductCard'
import DataContext from '../../context/DataContext'
import {Box} from '@mui/material'

const CardList = ({}) =>
{
    const {productData} = useContext(DataContext)

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