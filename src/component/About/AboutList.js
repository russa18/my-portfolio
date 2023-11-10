import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup';
import "./About.css";


export default function AboutList(props) {
    const { title, desc, address, marks, year } = props;
    return (
        <div className="content_img">
            <p className='cert-img'>{title}</p>
            <ListGroup.Item as="li" className="abt-list-details d-flex justify-content-between align-items-start">
                <ul className="ms-2 me-auto">
                    <li className="fw-bold">{desc}</li>
                    <li>{address}</li>
                    <li>{marks}</li>
                    <li>{year}</li>
                </ul>
            </ListGroup.Item>
        </div>)
}
