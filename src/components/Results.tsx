import React, {useEffect, useState, FunctionComponent } from "react";
import { VictoryAxis, VictoryTheme, VictoryBar, VictoryChart, VictoryLabel, VictoryLine } from 'victory' ;
import { useGlobalState } from "../GlobalStateProvider";

import axios from 'axios' ;
import { spawn } from "child_process";

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
    timeout: 50000,
    headers: {'Accept': 'application/json'}
})

type DocumentPostReturn = {
    status_code: number ,
    status_message: String,
    message_id: String,
}

type Label = {
    label: string
}

const agents = new Map([
    ['technology', {uri: "male_agent.jpeg", phone: "222-333-4444", email: "test@fluently.dev", name: "Namey Namerson", info: "Technology expert"}],
    ['health', {uri: "female_agent.jpeg", phone: "111-222-3333", email: "testagain@fluently.dev", name: "Another Name", info: "Health expert"}],
    ['other', {uri: "other_agent.jpeg", phone: "333-444-5555", email: "testagainagain@fluently.dev", name: "Other Name", info: "Generalist"}]
])

export const Results = () => {
    const [loading, setLoading] = useState(true) ;
    const [postDocumentReturn, setPostDocumentReturn] = useState({}) ;
    const [postTopics, setPostTopics] = useState({labels: [], scores: []}) ;
    const [postEntities, setPostEntities] = useState({entities: []}) ;
    const [barChartData, setBarChartData] = useState([{word: 'none', score: 0.1}]) ;
    const [postClassifier, setPostClassifier] = useState({label: ''}) ;
    const [currentAgent, setCurrentAgent] = useState() ;

    let globalState = useGlobalState() ;

    useEffect(() => {   
        const postClassification = async () => {
            await instance.post(
                '/classify',
                {document: globalState.state.document}
            )
            .then((response) => response.data)
            .then((data) => {
                setPostClassifier({label: data.label});

                const gatherTopics = async () => {
                    await instance.post(
                        '/topics',
                        {document: globalState.state.document, topic: data.label}
                    )
                    .then((response) => response.data)
                    .then((data) => {
                        setPostTopics({labels: data.labels, scores: data.scores});
                        console.log("topics: " + data.labels) ;
        
                        let numrows = data.labels.length ;
                        let currentChartData = [] ;
        
                        for (var i = numrows - 1; i >= 0; i-=1) {
                            currentChartData.push({word: data.labels[i], score: data.scores[i]});
                        }
        
                        setBarChartData(currentChartData) ;
                    })
                    .catch((error) => {
                        console.log(error) ;
                    })
                }
                gatherTopics() ;
                
            })
            .catch((error) => {
                console.log(error) ;
            })
        }        
        postClassification() ;

        const gatherEntities = async () => {
            await instance.post(
                '/entities',
                {document: globalState.state.document}
            )
            .then((response) => response.data)
            .then((data) => {
                setPostEntities({entities: data.entities});
                console.log("entities: " + data.entities) ;
            })
            .catch((error) => {
                console.log(error) ;
            })
        }

        gatherEntities() ;

    }, []);
    
    const Tags = () => {
        return (
            <>
                {postEntities.entities.map(name => <span className="tag">{name}</span>)}
            </>
            
        )
    }

    const Agent = () => {
        let agent = agents.get(postClassifier.label) || {uri: "other_agent.jpeg", phone: "333-444-5555", email: "testagainagain@fluently.dev", name: "Other Name", info: "Generalist"};
        let label = postClassifier.label || 'other' ;  
            return (
                <RelevantAgent uri={agent.uri} phone={agent.phone} email={agent.email} name={agent.name} info={agent.info} label={label} tags={< Tags />}/>
            ) ;
        
    }

    return (
        <div className="container is-fluid">
            <br />        
            <br />
            <Agent />
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
                                                    fontFamily: "Source Code Pro",
                                                    fontSize: "10"
                                                }
                                            }}
                                            data={barChartData}
                                            x="word"
                                            y="score"
                                        />
                                </VictoryChart>
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
                                Submitted Query
                            </p>
                            <div className="panel-content is-flex-wrap-wrap">
                                <div className="box">
                                    <p>
                                        {globalState.state.document}
                                    </p>
                                </div>
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
    info: string,
    label: string,
    tags: JSX.Element
}

const RelevantAgent: FunctionComponent<Agent> = ({uri, phone, email, name, info, label, tags}) => {
    return (
        <div className="container is-fluid" style={{
            fontFamily: "Source Code Pro"
        }}>
            <div className="columns is-mulitline">
                <div className="column is-one-fifth">
                    
                            <div className="panel">
                                <p className="panel-heading has-text-centered" style={{
                                        backgroundColor: "#933A16",
                                        opacity: 0.8,
                                        color: "white"
                                    }}>
                                    Agent
                                </p>
                                
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
                            Topic
                        </p>
                        <div className="panel-block is-justify-content-center">
                            <div className="title is-1">{label}</div>                                                                                                              
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
                                Named Entities
                            </p>
                            <div className="panel-block is-justify-content-center is-flex-wrap-wrap">
                                { tags }
                            </div>
                        </div> 
                </div>
            </div> 
                          
        </div>
    )
}

export default Results ;