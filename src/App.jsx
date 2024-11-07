import {useRoutes} from 'react-router-dom'
import Cart from "./pages/Cart"
import Checkout from "./pages/Checkout"
import Home from "./pages/Home"
import ProductDetails from "./pages/ProductDetails"
import NotFoundPage from './pages/NotFoundPage'


function App()
{

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
  return element
}

export default App