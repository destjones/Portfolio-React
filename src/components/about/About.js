import React, { Component } from 'react'
import classes from './About.module.css';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css"; 

class About extends Component {
    render() {
        return (
            <div className={classes.box} id="about">
                <ScrollAnimation offset="0" animateIn="fadeInLeft" duration='2.4' animateOnce="true" initiallyVisible ={true}>
                    <span  className={classes.head}>ABOUT ME</span>
                    <h2 className={classes.heading}>Who Am I?</h2>
                    <div className={classes.About}>
                        <p> My name is Destiny Jones and I am currently a graduate of the Trilogy Coding and Software Development Bootcamp at University of San Diego's extension campus. I am continuing to pursue more skills and education in the tech world. On the side, I am also a Licensed Pharmacy Technician and I have my associates in Sociology and Administration of Justice. </p>
                         <p className={classes.br}>Developing and extending my knowledge is something I enjoy doing.
 </p>
                    </div>
                </ScrollAnimation>
            </div>
        )
    }
}

export default About;