import React from 'react'

const Card = ({product}) =>
{
    return (
        <div>
            <div>
                <h2>
                    {product.title}
                </h2>
            </div>

            <div>
                <img src={product.image} alt="Product Image" />
            </div>

            <div>
                <p>{product.description}</p>                
            </div>

            <div>
                {product.price}
            </div>
        </div>
    )
}

export default Card