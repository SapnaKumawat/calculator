import React from "react";
import { SunIcon, MoonIcon } from "../icons";
import { CalculatorDisplay } from "../calculator/Display";
import { CalculatorDialpad } from "../calculator/Dialpad"; 

export const Calculator =() => {
    return (
        <section className="p-3 bg-white rounded">
            <div className="bg-light rounded text-dark d-inline-flex gap-4 px-3 py-2">
                <div><SunIcon /></div>
                <div className="text-muted"><MoonIcon /></div>
            </div>

            <CalculatorDisplay equation="2+2" result="4"/>
            <CalculatorDialpad />
        </section>
    )
}