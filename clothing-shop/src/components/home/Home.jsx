import React from 'react'
import { Navbar } from '../navbar/Navbar'
import { Product } from '../Product'
import "./Home.module.css"

export const Home = () => {
  return (
    <div className='wrapper'>
        <Navbar/>
        <Product/>
    </div>
  )
}
