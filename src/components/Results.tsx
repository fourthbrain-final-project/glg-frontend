import React, { FunctionComponent } from "react";
import { VictoryBar, VictoryChart, VictoryLabel } from 'victory' ;

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
            <RelevantAgent uri="male_agent.jpeg" phone="222-333-4444" email="test@fluently.dev" info="Healthcare expert" />
            <br />
            <div className="container">
                <div className="columns">
                    <div className="column is-one-third" style={{
                        fontFamily:"Source Code Pro"
                    }}>
                        <div className="box" style={{
                            
                        }}>
                            <VictoryChart
                                    domainPadding={{ x: 10}}
                                    padding={{ left: 90, top: 70, right: 50, bottom: 50}}
                                    >
                                    <VictoryLabel text="Top 5 Topics" textAnchor="middle" x={225} y={30} />
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
        </div>
    )
}

type Agent = {
    uri: string,
    phone: string,
    email: string,
    info: string 
}

const RelevantAgent: FunctionComponent<Agent> = ({uri, phone, email, info}) => {
    return (
        <div className="container is-widescreen">
                <div className="box" style={{
                    backgroundColor: "#933A16",
                    color: "white",
                    opacity: 0.9
                }}>        
                    <div className="media">
                        <div className="media-content">
                            <div className="article" style={{
                                fontFamily: "Source Code Pro"
                            }}>
                                <p>
                                    This is  a dummy article; you mentioned <mark>covid</mark> so it was flagged. You also mentioned <mark>asthma</mark>
                                </p>
                            </div>
                        </div>
                        <div className="media"></div>    
                    </div>
            </div>
        </div>       
    )
}

export default Results ;