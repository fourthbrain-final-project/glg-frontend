import React from "react";
import { Component } from "react";

class About extends React.Component<React.HTMLAttributes<HTMLDivElement>> {
    render() {
        return (
            <div className="block" style={{
                fontFamily: "Source Code Pro"
            }}>
                <br />
                <div className="container">
                <p className="has-text-centered is-size-5">
                    FLUENTLY provides state of the art natural language processing capabilities 
                    <br /> 
                    right at your finger tips.
                </p>
                </div>
                <br />
                <br />
                <div className="columns">
                    <div className="column is-one-half">
                        <div className="container">
                            <div className="tile is-ancestor">
                                <div className="tile" style={{
                                    backgroundColor: "#933A16"
                                }}>
                                    <p>
                                        Gather your content
                                    </p>
                                </div>
                                <div className="tile">
                                    <p>
                                        Add it to the search bar
                                    </p>
                                </div>
                                <div className="tile">
                                    <p>
                                        Watch your results stream in
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>                
            </div>
        )
    }
}

export default About;