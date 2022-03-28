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
                <div className="tile">
                    <div className="tile is-parent">
                        <div className="container">
                            <div className="columns is-centered">
                                <div className="column is-one-third is-flex">
                                    <article className="tile is-child notification is-flex" style={{
                                        background: "#933A16"
                                    }}>
                                        <div className="container has-text-centered">
                                            <p className="is-capitalized has-text-white is-size-6 has-text-weight-semibold">
                                                Gather your content
                                            </p>
                                        </div>
                                    </article>
                                </div>
                                <div className="column is-one-third is-flex">
                                    <article className="tile is-child notification is-flex" style={{
                                        background: "#933A16"
                                    }}>
                                        <div className="container has-text-centered">
                                            <p className="is-capitalized has-text-white is-size-6 has-text-weight-semibold">
                                            Add it to the search bar
                                            </p>
                                        </div>
                                    </article>
                                </div>
                                <div className="column is-one-third is-flex">
                                    <article className="tile is-child notification is-flex" style={{
                                        background: "#933A16"
                                    }}>
                                        <div className="container has-text-centered">
                                            <p className="is-capitalized has-text-white is-size-6 has-text-weight-semibold">
                                            Watch your results stream in
                                            </p>
                                        </div>
                                    </article>
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