import React from 'react'
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { useGlobalContext } from './ContextApi'
import { BsBookmarkHeart } from "react-icons/bs";
import { AiFillHome } from 'react-icons/ai';

const DescCard = () => {
    const {descCard,moveToHome} = useGlobalContext();
    console.log(descCard);
  return (
   <>
    <AiFillHome onClick={moveToHome} className="home_icon" />
     <Container className="w-100 d-flex justify-content-center align-items-center mt-4 ">
        <Row className='d-flex' >
          {(
            descCard && descCard.map((x, i) => {
              return (
                <Col
                  className="d-flex justify-content-center align-items-center mb-4"
                  key={i} 
                >
                  <Card className='d-flex flex-row desc_card '  >
                  <Col>
                  <Card.Img
                      variant="top"
                      className=" h-100  img"
                      src={x.images.jpg.image_url}
                    />

                  </Col>
                    <Col>
                    <Card.Body>
                      <Row className="w-100 h-25 card_title">
                        <Col>
                          <Card.Title>
                           <span className='desc_span' >Title</span> : {x.title}
                          </Card.Title>
                          <Card.Text>
                          <span className='desc_span' >Episodes</span>: {x.episodes}
                          </Card.Text>
                         
                          <Card.Text>
                          <span className='desc_span' > Year</span>: {x.year}
                          </Card.Text>
                          <Card.Text>
                          <span className='desc_span' >Duration</span> : {x.duration}
                          </Card.Text>
                          <Card.Text>
                          <span className='desc_span' >Trailer</span>: <a href={x.trailer.url} ></a> 
                          </Card.Text>
                           <Card.Text className='mb-2' >
                           <span className='desc_span' >Synopsis</span> : {x.synopsis.substring(0,120)}...
                          </Card.Text>
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <BsBookmarkHeart
                            className="wishlist"
                            
                          />
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
                    </Col>
                  
                  </Card>
                </Col>
              );
            })
          )}
        </Row>
      </Container>
      
   </>
  )
}

export default DescCard