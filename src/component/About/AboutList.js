import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup';
import "./About.css";


export default function AboutList(props) {
    const { title, desc, address, marks, year } = props;
    return (
        <div className="content_img">
            <p className='cert-img'>{title}</p>
            <ListGroup.Item as="li" className="abt-list-details d-flex justify-content-between align-items-start">
                <div className="ms-2 me-auto">
                    <div className="fw-bold">{desc}</div>
                    <div>{address}</div>
                    <div>{marks}</div>
                    <div>{year}</div>
                </div>
            </ListGroup.Item>
        </div>)
}
