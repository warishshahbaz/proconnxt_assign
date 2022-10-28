import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row, Tooltip } from "react-bootstrap";
import { BsBookmarkHeart } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "./ContextApi";
import ReactTooltip from "react-tooltip";
//import 'bootstrap/dist/css/bootstrap.css';
// import Tooltip from 'react-bootstrap/Tooltip';
// import Button from 'react-bootstrap/Button';
//import OverlayTrigger from 'react-bootstrap/OverlayTrigger'

const Home = () => {
  const {
    listData,
    currentState,
    setWishData,
    wishData,
    setDescCard,
    descCard,
  } = useGlobalContext();
  const navigate = useNavigate();

  /*** Watch Later  ****/
  const wishListData = (id) => {
    let res = listData.filter((val, i) => {
      return val.mal_id === id;
    });
    res = Object.assign({}, res);

    setWishData([...wishData, res]);
  };

  useEffect(() => {
    localStorage.setItem("wishList", JSON.stringify(wishData));
  }, [wishData]);

  /****  card description page ****/
  const cardDescription = (id) => {
    let res = listData.filter((val) => {
      return val.mal_id === id;
    });

    console.log(descCard);
    setDescCard(res);
    navigate("/desc");
  };

  return (
    <>
      <Container className="w-100 d-flex justify-content-center align-items-center mt-4 ">
        <Row>
          {listData.length == 0 ? (
            <h2 style={{ color: "red" }}>No Data Availble</h2>
          ) : (
            listData && listData.map((x, i) => {
              return (
                <Col
                  className="d-flex justify-content-center align-items-center mb-4"
                  key={i}
                >
                  <Card style={{ width: "18rem" }}>
                    <Card.Img
                      variant="top"
                      className="img"
                      src={x.images.jpg.image_url}
                      onClick={() => cardDescription(x.mal_id)}
                    />

                    <Card.Body>
                      <Row className="w-100 h-25 card_title">
                        <Col>
                          <Card.Title>
                            {x.title.length > 10
                              ? `${x.title.substring(0, 17)}...`
                              : x.title}
                          </Card.Title>
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <span data-tip="Add WishList"
                                data-place="bottom"
                                data-text-color="white"
                                data-background-color="grey"
                                data-effect="float"
                                
                          >
                            <BsBookmarkHeart
                              className="wishlist"
                              onClick={() => wishListData(x.mal_id)}
                            />
                          </span>
                          <ReactTooltip />
                        </Col>
                        <Col>
                          <Card.Text style={{ color: "grey" }}>
                            {" "}
                            <span style={{ color: "pink" }}> Rating:</span>{" "}
                            {x.rating}
                          </Card.Text>
                        </Col>
                      </Row>
                    </Card.Body>
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

export default Home;
