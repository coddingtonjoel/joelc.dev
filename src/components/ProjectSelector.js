import React, { Fragment, useState } from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import { LazyLoadImage } from "react-lazy-load-image-component";

const ProjectSelector = (props) => {
    const [open, setOpen] = useState(false);

    const closeModal = () => {
        setOpen(false);
    };

    const openModal = () => {
        setOpen(true);
    };

    return (
        <Fragment>
            <a href="#!" onClick={openModal} className="project-selector">
                <img src={props.logo} alt="" />
                <div>
                    <p className="project-selector-title">{props.title}</p>
                    <p className="project-selector-type">{props.tech}</p>
                </div>
            </a>
            <Modal
                open={open}
                onClose={closeModal}
                blockScroll={false}
                closeIconId={"close"}>
                <div className="project-selector-modal">
                    <div uk-slider="center: true">
                        <ul className="uk-slider-items uk-child-width-1-1@s uk-child-width-1-1@">
                            <li>
                                <LazyLoadImage
                                    src={props.sc1}
                                    alt=""
                                    width={"100%"}
                                    height={"25rem"}
                                />
                            </li>
                            <li>
                                <LazyLoadImage
                                    src={props.sc2}
                                    alt=""
                                    width={"100%"}
                                    height={"25rem"}
                                />
                            </li>
                            <li>
                                <LazyLoadImage
                                    src={props.sc3}
                                    alt=""
                                    width={"100%"}
                                    height={"25rem"}
                                />
                            </li>
                        </ul>
                        <a
                            className="uk-position-top-left uk-position-small uk-hidden-hover project-selector-nav project-selector-nav-left"
                            href="!#"
                            uk-slidenav-previous
                            uk-slider-item="previous">
                            <i className="fas fa-angle-left"></i>
                        </a>
                        <a
                            className="uk-position-top-right uk-position-small uk-hidden-hover project-selector-nav project-selector-nav-right"
                            href="!#"
                            uk-slidenav-next
                            uk-slider-item="next">
                            <i className="fas fa-angle-right"></i>
                        </a>
                    </div>
                    <div className="project-selector-modal-text">
                        <h3 className="project-selector-modal-title">
                            {props.title}
                        </h3>
                        <p className="project-selector-modal-sub">
                            {props.sub}
                        </p>
                        <hr />
                        <p className="project-selector-modal-desc">
                            {props.desc}
                        </p>
                    </div>
                </div>
                <a
                    target="__blank"
                    rel="noopener noreferrer"
                    href={props.link}
                    className="uk-button-text project-selector-modal-link">
                    <i class="fas fa-external-link-square-alt"></i>
                    &nbsp;&nbsp;VISIT SITE
                </a>
            </Modal>
        </Fragment>
    );
};

export default ProjectSelector;
