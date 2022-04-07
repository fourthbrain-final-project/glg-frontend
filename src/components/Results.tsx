import React, { FunctionComponent } from "react";

type Content = {
    document: string
}

export const Results: FunctionComponent<Content> = ({ document }) => {
    
    return (
        <div>
            <br />
            <div className="container" style={{
                fontFamily: "Source Code Pro"
            }}>
                <div className="box">
                    This is a box
                </div>
            </div>
        </div>
    )
}

export default Results ;