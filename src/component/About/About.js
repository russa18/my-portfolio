import React from 'react'
import "./About.css";
import scholar from "./scholar.png";
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Resume from "../../RushikeshSawantMandrekarResume.pdf";

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

                    <div className="content_img">
                        <p className='cert-img'>Masters</p>
                        <ListGroup.Item as="li" className="abt-list-details d-flex justify-content-between align-items-start">
                            <div className="ms-2 me-auto">
                                <div className="fw-bold">MASTER OF COMPUTER APPLICATION</div>
                                <div> Goa University , Goa</div>
                                <div></div>
                                <div>2019 - 2022</div>

                            </div>
                        </ListGroup.Item>
                    </div>
                    <div className="content_img">
                        <p className='cert-img'>Bachelors</p>
                        <ListGroup.Item as="li" className="abt-list-details d-flex justify-content-between align-items-start">
                            <div className="ms-2 me-auto">
                                <div className="fw-bold">BACHELOR OF COMPUTER SCIENCE</div>
                                <div>Dynanprassarak Mandal's College and Research Center , Goa</div>
                                <div>84%</div>
                                <div>2016 - 2019</div>

                            </div>
                        </ListGroup.Item>
                    </div>
                    <div className="content_img">
                        <p className='cert-img'>HSSC</p>
                        <ListGroup.Item as="li" className="abt-list-details d-flex justify-content-between align-items-start">
                            <div className="ms-2 me-auto">
                                <div className="fw-bold">HIGHER SECONDARY SCHOOL</div>
                                <div>Dnyanprassarak Mandal's HSS , Goa</div>
                                <div>72%</div>
                                <div>2014 - 2016</div>
                            </div>
                        </ListGroup.Item>
                    </div>
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
