import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './Course.css';

const Course = (props) => {
    console.log(props)
    const { name, price, img } = props.course;
    return (
        <div className="course">
            <Col>
                <Card>
                    <Card.Img variant="top" src={img} className="img-card" />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            Price: ${price}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Course;