import React from "react";
import { CalculatorButton } from "../icons/Button";
import { BackspaceIcon } from "../icons";

export const CalculatorDialpad = () => {
    return (
        <div className="mt-3 p-4 rounded bg-light">
                <div className="row">
                    <CalculatorButton value="AC" className="text-danger"/>
                    <CalculatorButton value="0" />
                    <CalculatorButton value="%" />
                    <CalculatorButton value={<BackspaceIcon />} />
                </div>
                <div className="row">
                    <CalculatorButton value="7" />
                    <CalculatorButton value="8" />
                    <CalculatorButton value="9" />
                    <CalculatorButton value="*" className="text-danger"/>
                </div>
                <div className="row">
                    <CalculatorButton value="4" />
                    <CalculatorButton value="5" />
                    <CalculatorButton value="6" />
                    <CalculatorButton value="-" className="text-danger"/>
                </div>
                <div className="row">
                    <CalculatorButton value="1" />
                    <CalculatorButton value="2" />
                    <CalculatorButton value="3" />
                    <CalculatorButton value="+" className="text-danger"/>
                </div>
                <div className="row">
                    <CalculatorButton value="00" />
                    <CalculatorButton value="0" />
                    <CalculatorButton value="." />
                    <CalculatorButton value="=" className="text-danger"/>
                </div>
        </div>
    )
}