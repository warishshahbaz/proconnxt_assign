import React, { useState } from "react";
import { Button, Card, Col, Container, NavLink, Row } from "react-bootstrap";
import { AiFillHome } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { useGlobalContext } from "./ContextApi";

let getDataFromLocal = () => {
  let item = localStorage.getItem("wishList");
  if (item) {
    return JSON.parse(item);
  } else {
    return [];
  }
};
const CardDetail = () => {
  const { setWishData, wishData } = useGlobalContext();
  const [cardData, setCardData] = useState(getDataFromLocal());
  const navigate = useNavigate();
 

  const moveToHome = () => {
    navigate("/");
  };

  return (
    <>
      <Container className="mt-3 d-flex justify-content-center align-item-center flex-column text-center cardDetails ">
        <h3>Watch Later Lists</h3>
        <AiFillHome onClick={moveToHome} className="home_icon" />
        <Row className="d-flex justify-content-center align-item-center">
          {cardData.length == 0 ? (
            <h4 style={{ color: "red" }}>No Card list Available</h4>
          ) : (
            cardData &&
            cardData.map((val, i) => {
              return (
                <Col className="mb-3" key={i}>
                  <Card className="card ">
                    <Row className="d-flex justify-content-center align-items-center ">
                      <Col>
                        <img
                          src={val[0].images.jpg.image_url}
                          className="card_img"
                          alt="logo"
                        />
                      </Col>
                      <Col>
                        <Card.Text>{val[0].title}</Card.Text>
                      </Col>
                      <Col>
                        <Col>
                          {" "}
                          <a href={val[0].url}> More Details </a>{" "}
                        </Col>
                      </Col>
                    </Row>
                  </Card>
                </Col>
              );
            })
          )}
        </Row>
      </Container>
    </>
  );
};

export default CardDetail;
