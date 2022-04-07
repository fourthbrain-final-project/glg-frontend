import React from "react";
import { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRocket, faComment } from "@fortawesome/free-solid-svg-icons";

class Header extends React.Component<React.HtmlHTMLAttributes<HTMLDivElement>> {
    render() {
        return (
            <section className="hero is-halfheight" style={{
                fontFamily: "Source Code Pro"
            }}>
                <div className="navbar-brand">
                    <a className="navbar-item" href="/">
                        <FontAwesomeIcon icon={faComment} />
                        <p className="is-size-4" style={{
                            paddingLeft: '10px'
                        }}>FLUENTLY</p>
                        
                    </a>
                    <div className="navbar-end" style={{
                        paddingRight: "10px"
                    }}>
                        <a className="navbar-item" href="/about">
                            About
                        </a>
                    </div>
                </div>

                <div className="hero-body" style={{
                     backgroundImage: "url(banner.jpeg)",
                     backgroundPosition: "center center"
                }}>
                    <div className="container">
                    <div className="level">
                            <div className="level-item">
                                <div className="hero-title is-size-1 has-text-weight-bold" style={{
                                    color: "white",
                                    fontFamily: "Source Code Pro"
                                }}>
                                    <p>
                                        NLP insights; <br /> for everyone
                                    </p>
                                </div>
                            </div>
                        </div>                        
                    </div>
                </div>
            </section>
        )
    }
    
}

export default Header ;