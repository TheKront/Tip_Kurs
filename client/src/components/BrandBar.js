import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Card, Row} from "react-bootstrap";

const BrandBar = observer(() => {
    const {device} = useContext(Context)

    return (
        <Row className="d-flex my">
            {device.brands.map(brand =>
                <Card
                    style={{cursor:'pointer', border:'1px solid black' }}
                    key={brand.id}
                    className="p-2 m-2"
                    onClick={() => device.setSelectedBrand(brand)}
                    border={brand.id === device.selectedBrand.id ? 'danger' : ''}
                >
                    {brand.name}
                </Card>
            )}
        </Row>
    );
});

export default BrandBar;