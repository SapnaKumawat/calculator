import React from "react";

export const CalculatorButton = (props) => {
    const {className, display: value} = props;
    return (
        <div className="col-3 p-1 ">
            <p className={`p-3 m-0 lead justify-content-centre align-items-centre d-inline-flex px-4 rounded bg-white ${className}`}>{value}</p>
        </div>
    )
}