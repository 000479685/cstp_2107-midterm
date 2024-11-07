import axios from 'axios'
import DataContext from '../context/DataContext'
import { useState, useEffect, useContext } from 'react'
import '../App.css'
import { AppBar, Box, Button } from '@mui/material'
import {useNavigate} from "react-router-dom"
import CardList from '../components/CardList/CardList'
import { API_URL } from '../constant'
import SearchBar from '../components/Navigation/Searchbar'
// import CartContext from '../context/CartContext'

function Home() {
  const [productData, setProductData] = useState([]);
  const [currentQuery, setCurrentQuery] = useState('');  
  // const cartData = useContext(CartContext)

  const productInfo = async() => {
    const {data} = await axios.get(`${API_URL}`);
    {console.log("Using this data : ", data)}
    // {console.log(data.data)}
    setProductData(data);
    // console.log(productData)    
  }

  const handleSearchClick = () =>
  {
    searchInfo();
  }

  const searchInfo = () =>
  {
    if(currentQuery == '')
    {
      productInfo();
      return;
    }

    setProductData(productData.filter((product, index) =>
      {
      const queryRegex = `.*${currentQuery.toLowerCase()}.*`
      console.log(queryRegex)
      console.log(`${product.title}`)
      if(product.title.toLowerCase().match(queryRegex))
      {      
        return true;
      }
      return false;
    }))
  }
  
  useEffect(() =>
  {
    const onStartDataFetch = async() =>
    {
      const {data} = await axios.get(`${API_URL}`);      
      setProductData(data);
    }
    onStartDataFetch();
  }, [])

const navigate = useNavigate();

  return (
    <>
    <DataContext.Provider value={{productData, setProductData}}>      
      <AppBar>        
        <Box display='flex' flexDirection='row'>
          <Button color='#424242' onClick={() => navigate('/')}>Home</Button>
          <Button color='#424242'onClick={() => navigate('/Cart')}>Cart</Button>
          <Button color='#424242' onClick={() => navigate('/Checkout')}>Checkout</Button>        
          <Box marginLeft="auto">Aiden Wu - Midterm</Box>
        </Box>
        <SearchBar currentQuery={currentQuery} handleSearchClick={handleSearchClick} setCurrentQuery={setCurrentQuery}/>
      </AppBar>

      <Box marginTop="100px"></Box>
      <CardList></CardList>      
    </DataContext.Provider>
    </>
  )
}

export default Home

