import { useState } from 'react'
import './App.css'
import data from 'https://fakestoreapi.com/products/'
import CardList from './components/CardList/CardList'

function App() {
  const [productData, setPRoductData] = useState(data);
  return (
    <div>
      <h1>Midterm - Aiden Wu</h1>
      {console.log("Using this data : ", productData)}
      {console.log(productData.data)}
      <CardList productData={productData.data}></CardList>
    </div>
  )
}