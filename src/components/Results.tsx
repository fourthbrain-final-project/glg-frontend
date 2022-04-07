import React, { FunctionComponent } from "react";
import { VictoryBar, VictoryChart } from 'victory' ;

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
            <div className="container" style={{
                fontFamily: "Source Code Pro"
            }}>
                 <VictoryChart
                     domainPadding={{ x: 10}}
                     padding={{ left: 90, top: 50, right: 10, bottom: 50}}
                 >
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
    )
}

export default Results ;