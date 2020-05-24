import React from "react";
import Skill from "./Skill";
import me from "../images/picture.jpg";
import css from "../images/css.svg";
import html from "../images/html.svg";
import react from "../images/react.svg";
import js from "../images/js.svg";
import xd from "../images/xd.svg";
import ai from "../images/ai.svg";
import ScrollAnimation from "react-animate-on-scroll";
import MediaQuery from "react-responsive";

const About = () => {
    return (
        <section id="about" className="about">
            <div className="about-head-wrapper">
                <h2 className="about-head heading">About Me</h2>
            </div>
            <MediaQuery minDeviceWidth={1001}>
                <div className="about-container">
                    <div className="about-bio">
                        <ScrollAnimation
                            animateIn="fadeInLeft"
                            animateOnce="true"
                            duration="1.5">
                            <img src={me} alt="" />
                            <p>
                                I'm a current undergraduate student at Biola
                                University (La Mirada, CA) pursuing a B.S. in
                                Computer Science. While being highly
                                self-motivated and creative, I am passionate
                                about learning and practicing the skills
                                necessary to become either a UX/UI Engineer or
                                Frontend Developer. I love design, aesthetics,
                                and web animation, so I always aim to make
                                beautiful work.
                            </p>
                        </ScrollAnimation>
                    </div>

                    <div className="about-splitter"></div>
                    <div className="about-skills">
                        <ScrollAnimation
                            animateIn="fadeInRight"
                            animateOnce="true"
                            duration="1.5">
                            <h3 className="about-skills-head heading">
                                Skills
                            </h3>
                            <div className="about-skills-container">
                                {skills.map((skill) => {
                                    return (
                                        <Skill skill={skill} key={skill.name} />
                                    );
                                })}
                            </div>
                        </ScrollAnimation>
                    </div>
                </div>
            </MediaQuery>
            <MediaQuery maxDeviceWidth={1000}>
                <div className="about-container">
                    <div className="about-bio">
                        <img src={me} alt="" />
                        <p>
                            I'm a current undergraduate student at Biola
                            University (La Mirada, CA) pursuing a B.S. in
                            Computer Science. While being highly self-motivated
                            and creative, I am passionate about learning and
                            practicing the skills necessary to become either a
                            UX/UI Engineer or Frontend Developer. I love design,
                            aesthetics, and web animation, so I always aim to
                            make beautiful work.
                        </p>
                    </div>

                    <div className="about-splitter"></div>
                    <div className="about-skills">
                        <h3 className="about-skills-head heading">Skills</h3>
                        <div className="about-skills-container">
                            {skills.map((skill) => {
                                return <Skill skill={skill} key={skill.name} />;
                            })}
                        </div>
                    </div>
                </div>
            </MediaQuery>
        </section>
    );
};

const skills = [
    {
        name: "CSS",
        percent: 90,
        icon: css,
    },
    {
        name: "HTML",
        percent: 80,
        icon: html,
    },
    {
        name: "React",
        percent: 70,
        icon: react,
    },
    {
        name: "JavaScript",
        percent: 70,
        icon: js,
    },
    {
        name: "Adobe XD",
        percent: 50,
        icon: xd,
    },
    {
        name: "Adobe Illustrator",
        percent: 50,
        icon: ai,
    },
];

export default About;
