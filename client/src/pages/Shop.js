import React, {useContext, useEffect} from 'react';
import {Container} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TypeBar from "../components/TypeBar";
import BrandBar from "../components/BrandBar";
import DeviceList from "../components/DeviceList";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {fetchBrands, fetchDevices, fetchTypes} from "../http/deviceAPI";
import Pages from "../components/Pages";
import testPic from '../assets/123.png';
import testPic2 from '../assets/1234.png';
import {Button, Card, Image} from "react-bootstrap";



const Shop = observer(() => {
    const {device} = useContext(Context)


    useEffect(() => {
        fetchTypes().then(data => device.setTypes(data))
        fetchBrands().then(data => device.setBrands(data))
        fetchDevices(null, null, 1, 2).then(data => {
            device.setDevices(data.rows)
            device.setTotalCount(data.count)
        })
    }, [])

    useEffect(() => {
        fetchDevices(device.selectedType.id, device.selectedBrand.id, device.page, 4).then(data => {
            device.setDevices(data.rows)
            device.setTotalCount(data.count)
        })
    }, [device.page, device.selectedType, device.selectedBrand,])

    return (
        <div style={{width:'100%', overflowX: 'hidden'}}>
     <img className='image' width={400} height={250} src={testPic}/>
     <img className='image1' width={400} height={250} src={testPic2}/>
            <Row className="mt-2">
                <Col md={4} style={{padding: '10px' , textAlign: 'center'}}>
                    <TypeBar/>
                </Col>
                <Col md={8}>
                    <BrandBar/>
                    <DeviceList/>
                    <Pages/>
                </Col>
            </Row>
        </div>
       
    );
});

export default Shop;