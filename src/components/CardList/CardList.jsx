import React from 'react'
import card from '../Card/Card'

const CardList = ({productData}) =>
{
    return (
        <div className=''>
            {
                productData.map((product, index) =>
                {
                    return <Card product={product} key={index}/>
                })
            }
        </div>
    )
}