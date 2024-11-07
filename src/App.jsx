import axios from 'axios'
import DataContext from './context/DataContext'
import { useState, useEffect } from 'react'
import './App.css'
import { AppBar, IconButton, MenuIcon } from '@mui/material'
import CardList from './components/CardList/CardList'
import { API_URL } from './constant'
import SearchBar from './components/Navigation/Searchbar'


function App() {
  const [productData, setProductData] = useState([]);
  const [currentQuery, setCurrentQuery] = useState('');  

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

  return (
    <>
    <DataContext.Provider value={{productData, setProductData}}>
      <AppBar>
      <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
        <h3>Midterm - Aiden Wu</h3>
        <SearchBar currentQuery={currentQuery} handleSearchClick={handleSearchClick} setCurrentQuery={setCurrentQuery}/>
      </AppBar>

      <CardList></CardList>
    </DataContext.Provider>
    </>
  )
}

export default App

