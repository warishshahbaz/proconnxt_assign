import React from 'react'
import { Outlet } from 'react-router-dom'
import Filter from './Filter'
import Home from './Home'
import Pagination from './Pagination'
import Search from './Search'

const Outlets = () => {
  return (
    <>
    <Search/>
    <Filter/>
    <Home/>
    <Pagination/>
     
    </>
  )
}

export default Outlets