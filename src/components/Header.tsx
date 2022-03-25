import React from "react";
import { Component } from "react";


class Header extends React.Component<React.HtmlHTMLAttributes<HTMLDivElement>> {
    render() {
        return (
            <section className="hero is-halfheight" style={{
                fontFamily: "Source Code Pro"
            }}>
                <div className="hero-head">
                    <text>Text Extraction Engine</text>
                </div>
                <div className="hero-body" style={{
                     backgroundImage: "url(banner.jpeg)",
                     backgroundPosition: "center center"
                }}>

                </div>
            </section>
        )
    }
    
}

export default Header ;