import React from 'react';
import { Container } from 'react-bootstrap';
import img from '../../images/sir.jpg';
import img2 from '../../images/medam.jpg';
import './Contact.css';

const Contact = () => {
    return (
        <Container>
            <div className="contact mt-5 pt-5">
                <div className="w-50">
                    <h1><span className="text-success">GET</span> IN TOUCH</h1>
                    <div>
                        <div className="form">
                            <input type="text" placeholder="Name" />
                            <input type="text" placeholder="Email" />

                        </div>
                        <div>
                            <textarea name="" id="" cols="50" rows="5" placeholder="Massage" className="text-area fw-bold"></textarea>
                            <button className="btn btn-success mt-4 ms-4 px-4">Send</button>
                        </div>
                    </div>
                </div>
                <div className="w-50 ps-5">
                    <h1><span className="text-success">OUR</span> TEACHERS</h1>
                    <div className="teacher pt-5">
                        <img src={img} alt="" className="img-teacher" />
                        <div className="ps-5">
                            <h3><i>English Teacher</i></h3>
                            <h3>Mahbub Ullah</h3>
                        </div>
                    </div>
                    <div className="teacher pt-5">
                        <img src={img2} alt="" className="img-teacher" />
                        <div className="ps-5 mt-5">
                            <h3><i>IELTS Specialist</i></h3>
                            <h3>Mubasshira Khanom</h3>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Contact;