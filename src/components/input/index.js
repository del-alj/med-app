import React from "react";
import { InputDiv } from "../../styles/componentStyle";
export const Input = ({ id, placeholder, type, label, onChange, value }) => {

    return (
        <InputDiv >
            <label>{label}</label>
            <input id={id} name={id} placeholder={`Enter your ${placeholder}`} type={type} onChange={onChange}
         value={value}/>
        </InputDiv>
    )

}