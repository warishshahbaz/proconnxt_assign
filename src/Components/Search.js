import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useGlobalContext } from "./ContextApi";
import {useNavigate} from 'react-router-dom';

const Search = () => {
  const{listData,setListData,getListData} = useGlobalContext();
  const navigate = useNavigate();

  const searchTitle = (e) =>{
    let input = e.target.value;
    if(input){
      let res =  listData.filter((val,i)=>{
        return  val.title.toLowerCase().includes(input.toLowerCase());
      })
      setListData(res);
    }else{
      getListData();
    }
   
  }

  const moveToWatchLater = () =>{
    navigate('/cards')
  }
  return (
    <>
      <Container className="mt-4 d-flex justify-content-center align-items-center " >
        <Row>
          <Col md={12} xs={6}  >
            <Form.Control type="text" placeholder="Search..." onChange={searchTitle}  />
          </Col>
        </Row>
        <Button onClick={moveToWatchLater} className="watch_later" >Watch Later</Button>
      </Container>
    </>
  );
};

export default Search;
