import React from "react";
import { Component } from "react";

class Footer extends React.Component<React.HTMLAttributes<HTMLDivElement>> {
    render() {
        return (
            <div className="hero is-medium">
                  <div className="hero-foot" style={{
                      backgroundColor: "#933A16",
                      opacity: 0.7,
                      position: "fixed",
                      bottom: 0,
                      left: 0,
                      width: "100%"
                  }}>
                    <div className="level">
                            <div className="level-item">
                                <p className="is-size-10" style={{
                                    color: 'white',
                                    fontFamily: "Source Code Pro"
                                }}>
                                Copyright &copy; {new Date().getFullYear()} <a href="https://www.fluently.dev" style={{color: 'white'}}>Informed Prior LLC</a> 
                                </p>
                            </div>
                        </div>
                    </div>
            </div>
        )
    }
}

export default Footer ;