import React, { useState, useEffect } from 'react';
import { Row } from 'react-bootstrap';
import { useHistory } from 'react-router';
import img from '../../images/background.jpg'
import HomeCourse from '../HomeCourse/HomeCourse';
import './Home.css';


const Home = () => {
    const [courses, setCourses] = useState([]);
    const history = useHistory();
    useEffect(() => {
        fetch('./courses.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    })

    // handle course all course direction path
    const handleSeeCourse = () => {
        history.push('./courses')
    }
    return (
        <div>
            <div className="head-banner">
                <p className="head-para">Our language center offers group and personal <br /> lessons in English and other modern languages <br /> for all ages and levels of knowledge.</p>
                <div className="head-title">
                    <h1><span>IMPROVE YOUR</span></h1>
                    <h1>ENGLISH <span>SKILLS</span></h1>
                </div>
            </div>
            <div className="img-cover">
                <img src={img} alt="" />
            </div>
            <div className="d-flex m-5">
                <h1><span className="text-success">COURSES</span> WE OFFER</h1>
                <button onClick={handleSeeCourse} className="btn btn-success mx-5 py-0">See All</button>
            </div>
            <div className="course-form-container m-5">
                <div className="w-75">
                    <Row xs={1} md={2} className="g-4">
                        {
                            courses.map(course => course.id < 5 && <HomeCourse
                                key={course.id}
                                course={course}
                            ></HomeCourse>)
                        }
                    </Row>
                </div>
                <div className="form w-50">
                    <input type="text" placeholder="NAME" />
                    <br />
                    <input type="phone" placeholder="PHONE" />
                    <br />
                    <input type="email" placeholder="EMAIL" />
                    <br />
                    <button className="btn btn-success w-100 mt-3 p-4 fs-4">Book Now</button>
                </div>
            </div>
        </div>
    );
};

export default Home;