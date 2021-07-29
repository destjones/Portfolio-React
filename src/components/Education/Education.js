import React, { Component } from 'react';
import classes from './Education.module.css';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";
import { MdSchool } from 'react-icons/md';
import { MdWork } from 'react-icons/md';
import { FaSchool } from 'react-icons/fa';

class Education extends Component {
    render() {
        return (
                <div className={classes.box} id="education">
                    <ScrollAnimation offset="0" animateIn="fadeInLeft" duration='2' animateOnce="true" initiallyVisible ={true}>
                     <span  className={classes.head}>MY JOURNEY</span>
                    <section className={classes.container}>
                        <div className={classes.container_content}>
                            <div className={classes.row}>
                                <div className={classes.row_md_12}>
                                    <div className={classes.timeline_centered}>
                                        <ScrollAnimation offset="0" animateIn="fadeInLeft" duration='2.4' animateOnce="true" initiallyVisible ={true}>
                                            <article className={classes.timeline_entry}>
                                                <div className={`${classes.timeline_icon} ${classes.timeline_icon_2}`} >
                                                    <FaSchool />     
                                                </div>
                                                <div className={classes.label}>
                                                <h2 >Higher Education  <span>2017-2021</span></h2>
                                                <p>I went to Imperial High School and graduated in 2017. It was there that I did a career technical course and became a licensed pharmacy technician under the state of California. </p>
                                                </div>
                                            </article>
                                        </ScrollAnimation>
                                       <ScrollAnimation offset="0" animateIn="fadeInLeft" duration='2.4' animateOnce="true" initiallyVisible ={true}>
                                            <article className={classes.timeline_entry}>
                                                <div className={classes.timeline_icon} >
                                                <MdSchool />
                                                </div>
                                                <div className={classes.label}>
                                                <h2 >Imperial Valley College to Trilogy<span>2017-Present</span></h2>
                                                <p>I started this adventure at Imperial Valley College where I received my Associates in Administration of Justice, Sociology, and University Studies. However I knew that I wanted a change. I joined the Trilogy Coding Bootcamp at University of California's extended campus and graduated in May 2021. Now I am a full stack web developer thanks to <a href='https://www.trilogyed.com/'>TRILOGY</a>. </p>
                                                </div>
                                            </article>
                                        </ScrollAnimation>
                                        <ScrollAnimation offset="0" animateIn="fadeInLeft" duration='2.4' animateOnce="true" initiallyVisible ={true}>
                                            <article>
                                                <div className={`${classes.timeline_icon} ${classes.timeline_icon_4}`} >
                                                    <MdWork />     
                                                </div>
                                                <div className={classes.label}>
                                                <h2 >Externship</h2>
                                                <p>Completed one month Externship in pharmacy at El Centro Pharmacy</p>
                                                </div>
                                                <div className={classes.timeline_entry_inner}><div  className={classes.timeline_icon_3||classes.color_none}></div></div>
                                            </article>
                                        </ScrollAnimation>
                </div>
     </div>
     </div>
     </div>
     </section>
     </ScrollAnimation>
     </div>
        )
        }
    }

export default Education;
