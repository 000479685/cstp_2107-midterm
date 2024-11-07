import React from "react";
import CartContext from "../context/CartContext";
import { Button, AppBar, Box, Card, CardContent, CardHeader, Typography} from '@mui/material'
import { useNavigate, useParams } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'

function Checkout()
{
    const {cartData} = useContext(CartContext)
    let total = 0

    const navigate = useNavigate();
    return (
      <Box>
      <AppBar>
          
      <Button onClick={() => navigate(`/`)} color="#000000">Back</Button>
                          <Button onClick={() => navigate(`/Checkout`)} color="#000000">Purchase</Button>
      </AppBar>      
          {
              cartData.map((product, index) =>
              {                    
                  total += product.price                               
              })
          }
      
      <Box>
          Your total is : {total}
      </Box>
      <Button onClick={() => {while(cartData.length > 0) {cartData.pop()}
        navigate(`/`)}}>
          Purchase
          </Button>
      </Box>
    )
}

export default Checkout