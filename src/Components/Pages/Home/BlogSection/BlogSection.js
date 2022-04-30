import {
    faCalendarDay,
    faCommentDots,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import blog1 from "../../../../images/blog1.jpg";
import blog2 from "../../../../images/blog2.jpg";
import blog3 from "../../../../images/blog3.jpg";
import "./BlogSection.css";

const BlogSection = () => {
    return (
        <div className="py-4">
            <div className="container-md py-5">
                <h2 className="mb-4">News & Reviews</h2>
                <div className="row">
                    <div className="col-md-4">
                        <div className="home-news">
                            <div className="img mb-3">
                                <img
                                    style={{ width: "100%" }}
                                    src={blog1}
                                    alt=""
                                />
                            </div>
                            <div
                                style={{ color: "#909090" }}
                                className="content border p-4"
                            >
                                <h6 className="text-secondary">
                                    Tesla Model S: Top Secret Car Collector’s
                                    Garage
                                </h6>
                                <hr />
                                <div className="meta d-flex align-items-center justify-content-between">
                                    <div>
                                        <FontAwesomeIcon
                                            icon={faCalendarDay}
                                            className="icon me-2"
                                        ></FontAwesomeIcon>
                                        <span>Octobar 18, 2022</span>
                                    </div>
                                    <div>
                                        <FontAwesomeIcon
                                            icon={faCommentDots}
                                            className="icon me-2"
                                        ></FontAwesomeIcon>
                                        <span>No Comments</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="home-news">
                            <div className="img mb-3">
                                <img
                                    style={{ width: "100%" }}
                                    src={blog2}
                                    alt=""
                                />
                            </div>
                            <div
                                style={{ color: "#909090" }}
                                className="content border p-4"
                            >
                                <h6 className="text-secondary">
                                    The 2017 Ford F-150 Raptor – A First Look
                                </h6>
                                <hr />
                                <div className="meta d-flex align-items-center justify-content-between">
                                    <div>
                                        <FontAwesomeIcon
                                            icon={faCalendarDay}
                                            className="icon me-2"
                                        ></FontAwesomeIcon>
                                        <span>Octobar 18, 2022</span>
                                    </div>
                                    <div>
                                        <FontAwesomeIcon
                                            icon={faCommentDots}
                                            className="icon me-2"
                                        ></FontAwesomeIcon>
                                        <span>No Comments</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="home-news">
                            <div className="img mb-3">
                                <img
                                    style={{ width: "100%" }}
                                    src={blog3}
                                    alt=""
                                />
                            </div>
                            <div
                                style={{ color: "#909090" }}
                                className="content border p-4"
                            >
                                <h6 className="text-secondary">
                                    How The Tesla Model X’s Falcon Doors Handle
                                    A Tight Parking Space
                                </h6>
                                <hr />
                                <div className="meta d-flex align-items-center justify-content-between">
                                    <div>
                                        <FontAwesomeIcon
                                            icon={faCalendarDay}
                                            className="icon me-2"
                                        ></FontAwesomeIcon>
                                        <span>Octobar 18, 2022</span>
                                    </div>
                                    <div>
                                        <FontAwesomeIcon
                                            icon={faCommentDots}
                                            className="icon me-2"
                                        ></FontAwesomeIcon>
                                        <span>No Comments</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogSection;
