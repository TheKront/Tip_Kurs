import React, {useEffect, useState} from 'react';
import {Button, Card, Col, Container, Image, Row} from "react-bootstrap";
import bigStar from '../assets/bigStar.png'
import {useHistory, useParams} from 'react-router-dom'
import {fetchOneDevice} from "../http/deviceAPI";
import testPic from '../assets/123.png'
import {BASKET_ROUTE} from "../utils/consts";


const DevicePage = () => {
    
const [device, setDevice] = useState({info: []})
    const {id} = useParams()
    const history = useHistory()
    useEffect(() => {
        fetchOneDevice(id).then(data => setDevice(data))
    }, [])

    return (
        <div style={{width: '100%' , overflowX: 'hidden'}}>
                 <img className='image' width={1000} height={1300} src={testPic}/>
            <Row>
                <Col md={4}>
                    <Image className='image3' width={400} height={250} src={process.env.REACT_APP_API_URL + device.img}/>
                </Col>
                <Col md={4}>
                    <div
                        className="d-flex flex-column align-items-center justify-content-around"
                        style={{width: 300, height: 300, fontSize: 32}}
                    >
                        <h2>Цена на товар:</h2>
                        <h4>Со скидкой {device.price} руб.</h4>
                        <h4>Без скидки {device.price+70} руб.</h4>
                        <Button onClick={() => history.push(BASKET_ROUTE + '/' + device.id)} variant={"outline-info"}>Добавить в корзину</Button>
                    </div>
                </Col>
            </Row>
            <Row className="d-flex flex-column m-3">
                <Col md={6}>
                <h1>Характеристики товара</h1>
                {device.info.map((info, index) =>
                    <Card key={info.id}
                          style={{background: index % 2 === 0 ? 'lightblue' : 'transparent', padding: 10}}>
                        {info.title}: {info.description}
                    </Card>
                )}
                </Col>
            </Row>
        </div>
    );
};

export default DevicePage;