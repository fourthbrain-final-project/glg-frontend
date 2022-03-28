import React from "react";
import { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook } from "@fortawesome/free-solid-svg-icons";


class Home extends React.Component<React.HTMLAttributes<HTMLDivElement>> {
    render() {
        return (
            <div className="container is-centered">
                <br />
                <br />
                <br />
                <div className="level">
                    <div className="level-item">
                        <div className="field has-addons">
                            <p className="control has-icons-left" style={{
                                fontFamily: "Source Code Pro" 
                            }}>
                                <input className="input is-rounded is-full" type="text" size={80} placeholder="Document Content"/>
                                <span className="icon is-left">
                                    <FontAwesomeIcon icon={faBook} />
                                </span>
                            </p>
                                            
                        </div>
                    </div>
                </div>
               
            </div>
           
        )
    }
}

export default Home ;