import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'

const Banner = () => {
    return (
        
        <div style={{backgroundColor:"#0E0E0E"}}>
            <Container>
            <Row>
            <Col>
                <p>NEW PRODUCT</p>
                <h2>XX99 Mark II
Headphones</h2>
            <p>Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
            <Button>
                SEE PRODUCT
            </Button>
            </Col>
            <Col>
                <div className="banner-image">

                </div>
            </Col>
            </Row>
            </Container>
        </div>
        
    )
}

export default Banner
