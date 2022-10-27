import React from "react";
import { ButtonDiv } from "../../styles/componentStyle";
export const Button = ({ title, type }) => {

    return (
        <ButtonDiv type={type} className="btn btn-primary">{title}</ButtonDiv>
    )

}