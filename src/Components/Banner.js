import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import {Data} from "./datas"

const Banner = () => {


    const [current,setCurrent] = useState(0)

    let isNew = (data) => {
            if(data.new === true)
            return data.id
    }



    // const nextProd = () =>{
    //    let value =  Data.filter((data)=>{
    //         data.new?
    //    })
    // }

    useEffect(() => {
        // let interval = setInterval(()=>{
        //     nextProd()
        // }, 3*1000)
        // return () => {
        //     clearInterval(interval)
        //   }
        let  wow = Data.filter(isNew(Data))
        console.log(wow)
    }, [])





    return (
        <div>
        {Data.map((data)=>{
        return data.new? (<div key={data.id} style={{backgroundColor:"#0E0E0E", color:"white"}}>
        <Container>
        <Row>
        <Col>
            <p>NEW PRODUCT</p>
            {/* <h2>XX99 Mark II
Headphones</h2> */}
<h2>{data.name}</h2>
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
    </div>) : ""} 
        )}
        </div>
        
    )
}

export default Banner
