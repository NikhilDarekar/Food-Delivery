import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import PromotionImage from "../assets/promotion/pro.png"

function Section4() {
  return (
    <>
        <section className='promotion_section'>
            <Container>
                <Row className='align-items-center'>
                    <Col lg={6} className='text-center mb-5 mb-lg-0'>
                        <img src={PromotionImage} className='img-fluid' alt='Promotion' />
                    </Col>
                    <Col lg={6} className='px-5'>
                        <h2>Nothing brings people together like a good burger</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus doloribus dolores id deserunt autem velit delectus, ipsa inventore voluptatem tempora, consequuntur reprehenderit et, voluptatum iusto?</p>
                        <ul>
                            <li>
                                <p>lorem epsenm inlienl like a good burger oi l i jokes ghlasss</p>
                            </li>
                            <li>
                                <p>burger is very good here once we eat then next timw for sure you are going for us only the best taste in teh world</p>
                            </li>
                            <li>
                                <p>Quaerat sodales sapien euismod purus blandit</p>
                            </li>
                           
                        </ul>
                    </Col>
                </Row>
            </Container>
        </section>

        {/* parallax */}
        <section className='bg_parallax_scroll'></section>

    </>
  )
}

export default Section4