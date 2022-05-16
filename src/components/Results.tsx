import React, {useEffect, useState, FunctionComponent } from "react";
import { VictoryAxis, VictoryTheme, VictoryBar, VictoryChart, VictoryLabel, VictoryLine } from 'victory' ;
import { useGlobalState } from "../GlobalStateProvider";

import axios from 'axios' ;

type Content = {
    document_content: string
}

type Word = {
   word: string,
   word_count: number
}

type Words = {
    words: Word[]
}

const sample_data = [
    {word: "disease", count: 2},
    {word: "polio", count: 4},
    {word: "inhaler", count: 7},
    {word: "covid", count: 10}        
];

const instance = axios.create({
    baseURL: 'https://127.0.0.1:8443/',
    timeout: 500,
    headers: {'Accept': 'application/json'}
})

type DocumentPostReturn = {
    status_code: number ,
    status_message: String,
    message_id: String,
}

export const Results = () => {
    const [loading, setLoading] = useState(true) ;
    const [postDocumentReturn, setPostDocumentReturn] = useState({}) ;

    let globalState = useGlobalState() ;

    useEffect(() => {
        console.log("document content") ;
        console.log(globalState.state.document) ;
        const postDocument = async () => {
            await instance.post(
                '/document', 
                {document_content: globalState.state.document}
            )
            .then((response) => response.data)
            .then((data) => {
                setPostDocumentReturn({status_code: data.code, status_message: data.message, message_id: data.job_id}) ;
                console.log(postDocumentReturn) ;
            })
            .catch((error) => {
                console.log(error) ;
            })
        }

        postDocument() ;
    }, []);

    return (
        <div className="container is-fluid">
            <br />        
            <br />
            <RelevantAgent uri="male_agent.jpeg" phone="222-333-4444" email="test@fluently.dev" name="Namey Namerson" info="Healthcare expert" />
            <br />
            <div className="container is-fluid">
                <div className="columns">
                    <div className="column is-two-thirds" style={{
                        fontFamily:"Source Code Pro"
                    }}>
                        <div className="panel">
                            <p className="panel-heading has-text-centered" style={{
                                backgroundColor: "#933A16",
                                opacity: 0.8,
                                color: "white"
                            }}>
                                Topics
                            </p>
                            <div className="panel-content">
                                <VictoryChart
                                        domainPadding={{ x: 10}}
                                        padding={{ left: 90, top: 70, right: 50, bottom: 50}}
                                        >
                                        <VictoryBar horizontal
                                            style={{
                                                data: {fill: "#933A16"},
                                                labels: {
                                                    fontFamily: "Source Code Pro"
                                                }
                                            }}
                                            data={sample_data}
                                            x="word"
                                            y="count"
                                        />
                                </VictoryChart>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <br />
        </div>
    )
}

type Series = {
    x: string,
    y: number
}

type Topic = {
    topic: string,
    stroke: string,
    series: Series[]
}

type Topics = {
    topics: Topic[]
}


const TopicTimeSeries: FunctionComponent<Topics> = ({topics}) : JSX.Element => {
    return (
            
                    <VictoryChart
                    theme={VictoryTheme.material}     
                    >
                    {
                        topics.map( topic => 
                        {
                            return (
                                <VictoryLine 
                                    style={{
                                        data: { stroke: topic.stroke},
                                        parent: { border: "1px solid #ccc"},
                                        labels: {
                                            fontFamily: "Source Code Pro"
                                        }
                                    }}
                                    name={topic.topic}
                                    interpolation="natural"
                                    data={topic.series}
                                />
                            )
                        })
                    }
                </VictoryChart>
            
        
    )
} 

type Agent = {
    uri: string,
    phone: string,
    email: string,
    name: string,
    info: string
}

const RelevantAgent: FunctionComponent<Agent> = ({uri, phone, email, name, info}) => {
    return (
        <div className="container is-fluid" style={{
            fontFamily: "Source Code Pro"
        }}>
            <div className="columns is-mulitline">
                <div className="column is-one-fifth">
                    
                            <div className="panel">
                                
                                <div className="panel-block">
                                <div className="card">
                                    <div className="card-image">                          
                                            <figure className="image">
                                                <img src={uri} alt="alt text" />
                                            </figure>
                                    </div>
                                    <div className="card-content is-size-7" style={{
                                        fontFamily: "Source Code Pro",
                                        backgroundColor: "#933A16",
                                        opacity: 0.8,
                                        color: "white"
                                    }}>
                                        <div className="level">
                                            <div>
                                                <p className="level-item level-left">
                                                    Agent:&nbsp;{name}
                                                </p>
                                                
                                                <p className="level-item level-left">
                                                    Phone:&nbsp;{phone}
                                                </p>
                                                
                                                <p className="level-item level-left">
                                                    Email:&nbsp;{email}
                                                </p>

                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                                
                </div>
                <div className="column">
                    <div className="panel">
                        <p className="panel-heading has-text-centered" style={{
                             backgroundColor: "#933A16",
                             opacity: 0.8,
                             color: "white"
                        }}>
                            Topic Usage
                        </p>
                        <div className="panel-block is-justify-content-center">
                            
                                    <figure className="image is-inline-block">
                                        <TopicTimeSeries topics={[{topic:"test" , stroke:"#c43a31", series:[{x:"Monday", y:2}, {x:"Tuesday", y:3}]}, {topic:"new", stroke:"black", series:[{x:"Monday",y:2},{x:"Tuesday",y:0}]}]} />
                                    </figure>
                                                                                                              
                        </div>
                    </div>
                </div>
                <div className="column"></div>
            </div>               
        </div>
    )
}

export default Results ;