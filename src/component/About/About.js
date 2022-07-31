import React from 'react'
import "./About.css";
import scholar from "./scholar.png";
import ListGroup from 'react-bootstrap/ListGroup';

export default function About() {
    return (
        <div className='about'>

            <div className='about-left'>
                <div className='ab-left-content'>
                    <h1 className='qual'>Qualifications</h1>
                    <img src={scholar} alt="scholar" className='scholar-img' />
                </div>
            </div>
            <div className='about-right'>
                <div className='edu'>
                    <h2 className='q-heads'>Education</h2>
                    <div className=' edu-list'>
                        <ListGroup>
                            <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start">
                                <div className="ms-2 me-auto">
                                    <div className="fw-bold">MASTER OF COMPUTER APPLICATION</div>
                                    <div> Goa University , Goa</div>
                                    <div></div>
                                    <div>2019 - 2022</div>

                                </div>
                            </ListGroup.Item>
                            <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start">
                                <div className="ms-2 me-auto">
                                    <div className="fw-bold">BACHELOR OF COMPUTER SCIENCE</div>
                                    <div>Dynanprassarak Mandal's College and Research Center , Goa</div>
                                    <div>84%</div>
                                    <div>2016 - 2019</div>

                                </div>
                            </ListGroup.Item>
                            <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start">
                                <div className="ms-2 me-auto">
                                    <div className="fw-bold">HIGHER SECONDARY SCHOOL</div>
                                    <div>Dnyanprassarak Mandal's HSS , Goa</div>
                                    <div>72%</div>
                                    <div>2014 - 2016</div>
                                </div>
                            </ListGroup.Item>
                        </ListGroup>
                    </div>
                </div>
                <div className='certi'>
                    <h2 className='q-heads'>Ceritificate</h2>
                    <div className=' edu-list'>
                        <ListGroup >
                            <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start">
                                <div className="ms-2 me-auto">
                                    <div className="fw-bold">The Complete 2020 Web Development Bootcamp</div>
                                    <div>Udemy</div>
                                    <div></div>
                                    <div>2020</div>
                                </div>
                            </ListGroup.Item>
                        </ListGroup>
                    </div>
                </div>
            </div>

        </div>
    )
}
