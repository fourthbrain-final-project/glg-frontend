import React, { FunctionComponent } from "react";


export const Hero: FunctionComponent = () => {
    return (
        <section className="hero is-halfheight" style={{
            fontFamily: "Source Code Pro"
        }}>
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
    ) ;
}
