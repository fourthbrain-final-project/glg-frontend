import React, { useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useGlobalState } from "../GlobalStateProvider" ;


const Home = () => {
    let navigate = useNavigate() ;
    let globalState = useGlobalState() ;

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            if(globalState.state.document !== "") {   
                navigate('/results') ;
            } else {

            } ;
        }
    }

    const updateDocument = (evt: React.ChangeEvent<HTMLInputElement>) => {
        if(evt != null) {
            globalState.setState({document: evt.target.value})
        }  
    }
   
    return (
        <div className="container is-centered">
                <br />
                <br />
                <br />
                <section>
                <div className="level">
                    <div className="level-item">
                        <div className="field has-addons">
                            <p className="control has-icons-left" style={{
                                fontFamily: "Source Code Pro" 
                            }}>
                                <input className="input is-rounded is-full" type="text" size={80} placeholder="Document Content" onKeyPress={handleKeyDown} onChange={updateDocument}/>
                                <span className="icon is-left">
                                    <FontAwesomeIcon icon={faBook} />
                                </span>
                            </p>
                                            
                        </div>
                    </div>
                </div>
                </section>
                
            </div>
    );
}


export default Home ;