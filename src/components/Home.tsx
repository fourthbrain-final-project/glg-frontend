import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Home = () => {
    let navigate = useNavigate() ;
    
     const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            navigate('/results') ;
        }
    }

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
                                <input className="input is-rounded is-full" type="text" size={80} placeholder="Document Content" onKeyPress={handleKeyDown}/>
                                <span className="icon is-left">
                                    <FontAwesomeIcon icon={faBook} />
                                </span>
                            </p>
                                            
                        </div>
                    </div>
                </div>
            </div>
    );
}


export default Home ;