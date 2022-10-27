import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { useGlobalContext } from './ContextApi'

const Filter = () => {
  const {listData,setListData,getListData,mystrerySearch,comedySearch,advantureSearch,actionSearch} = useGlobalContext();

  

  

  const allData = () =>{
    getListData();
  }
  console.log(listData);

  return (
    <Container className='mt-4' >
      <Row>
      <Col  ><Button variant='light' onClick={allData} >All</Button></Col>
        <Col  ><Button variant='light' onClick={actionSearch} >Comedy</Button></Col>
        <Col  ><Button variant='light' onClick={comedySearch} >Action</Button></Col>
        <Col  ><Button variant='light' onClick={advantureSearch} >Advanture</Button></Col>
        <Col  ><Button variant='light' onClick={mystrerySearch} >Mystery</Button></Col>
      </Row>
    </Container>
  )
}

export default Filter