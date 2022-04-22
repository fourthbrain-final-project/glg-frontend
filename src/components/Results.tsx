import React, { FunctionComponent } from "react";
import { VictoryAxis, VictoryTheme, VictoryBar, VictoryChart, VictoryLabel, VictoryLine } from 'victory' ;

type Content = {
    document: string
}

type Word = {
   word: string,
   word_count: number
}

type Words = {
    words: Word[]
}

const data = [
    {word: "disease", count: 2},
    {word: "polio", count: 4},
    {word: "inhaler", count: 7},
    {word: "covid", count: 10}        
];

export const Results: FunctionComponent<Content> = ({ document }) => {
    
    return (
        <div>
            <br />        
            <br />
            <RelevantAgent uri="male_agent.jpeg" phone="222-333-4444" email="test@fluently.dev" name="Namey Namerson" info="Healthcare expert" />
            <br />
            <div className="container">
                <div className="columns">
                    <div className="column is-two-thirds" style={{
                        fontFamily:"Source Code Pro"
                    }}>
                        <div className="box" style={{
                            
                        }}>
                            <VictoryChart
                                    domainPadding={{ x: 10}}
                                    padding={{ left: 90, top: 70, right: 50, bottom: 50}}
                                    >
                                    <VictoryLabel text="Topics" textAnchor="middle" x={225} y={30} />
                                    <VictoryBar horizontal
                                        style={{
                                            data: {fill: "#933A16"}
                                        }}
                                        data={data}
                                        x="word"
                                        y="count"
                                    />
                            </VictoryChart>
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
    x: number,
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
                                        parent: { border: "1px solid #ccc"}
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
        <div className="container">
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
                                            <p className="">
                                                <div className="level-item level-left">
                                                    Agent:&nbsp;{name}
                                                </div>
                                                <div className="level-item level-left">
                                                    Phone:&nbsp;{phone}
                                                </div>
                                                <div className="level-item level-left">
                                                    Email:&nbsp;{email}
                                                </div>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                                
                </div>
                <div className="column">
                    <div className="panel">
                        <div className="panel-block">
                            <div className="card">
                                <div className="card-image">
                                    <figure className="image">
                                        <TopicTimeSeries topics={[{topic:"test" , stroke:"#c43a31", series:[{x:0, y:2}, {x:1, y:3}]}, {topic:"new", stroke:"black", series:[{x:0,y:2},{x:1,y:0}]}]} />
                                    </figure>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>               
        </div>
    )
}

export default Results ;