import React from "react";

export const CalculatorDisplay = (props) => {
    const {equation, result} = props;
    
    if(!result) {
        //result has not been calculated.
        return (
            <div className="pt-5 mt-3 d-flex flex-column align-items-end justify-content-end">
                <h1 className="display-3">
                    <strong>{equation}</strong>
                </h1>
            </div>
        )
    }
    return (
        <div className="pt-5 mt-3 d-flex flex-column align-items-end justify-content-end">
            <p className="lead m-0">{equation}</p>
            <h1 className="display-3"><strong>{result}</strong></h1>
        </div>
    )
}