import {useRoutes} from 'react-router-dom'
import Cart from "./pages/Cart"
import Checkout from "./pages/Checkout"
import Home from "./pages/Home"
import ProductDetails from "./pages/ProductDetails"
import NotFoundPage from './pages/NotFoundPage'
import CartContext from './context/CartContext'
import { useState } from 'react'

function App()
{
    const [cartData, setCartData] = useState([])
    let element = useRoutes(
        [      
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/Home',
                element: <Home />
            },
            {
                path: '/cart/',
                element: <Cart />
            },
            {
                path: '/checkout/',
                element: <Checkout />
            },
            {
                path: '/productDetails/:product',
                element: <ProductDetails />
            },
            {
                path: '*',
                element: <NotFoundPage />
            }
    ]
  )
  return (
    <CartContext.Provider value={{cartData, setCartData}}>
        {element}
    </CartContext.Provider>
)
}

export default App