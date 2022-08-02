import React from 'react'
import "./About.css";
import scholar from "./scholar.png";
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Resume from "../../RushikeshSawantMandrekarResume.pdf";
import AboutList from './AboutList';
import qual from "./Qualification.js";

export default function About() {
    return (
        <div className='about'>
            <div className='about-left'>
                <div className='ab-left-content'>
                    <h1 className='qual'>Qualifications</h1>
                    <img src={scholar} alt="scholar" className='scholar-img' />
                    <a href={Resume} className="about-resume" target='_blank' rel="noreferrer" style={{ marginLeft: "10px" }}>
                        <Button variant="primary">Resume</Button>{' '}
                    </a>
                </div>
            </div>
            <div className='about-right'>
                <div className='edu'>
                    <h2 className='q-heads'>EDUCATION</h2>
                    {qual.map((data, key) => {
                        return <div key={key}>
                            <AboutList key={key} title={data.title} desc={data.description} address={data.address} marks={data.marks} year={data.year} />
                        </div>
                    })}

                </div>
                <div className='certi'>
                    <h2 className='q-heads'>CERTIFICATE</h2>
                    <div className="content_img">
                        <p className='cert-img'>Udemy</p>
                        <ListGroup.Item as="li" className="abt-list-details d-flex justify-content-between align-items-start">
                            <div className="ms-2 me-auto">
                                <div className="fw-bold">The Complete 2020 Web Development Bootcamp</div>
                                <div>Udemy</div>
                                <div></div>
                                <div>2020</div>
                            </div>
                        </ListGroup.Item>
                    </div>
                </div>
            </div>

        </div>
    )
}
