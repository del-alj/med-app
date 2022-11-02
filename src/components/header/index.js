import React from "react";
import { signOut } from "next-auth/react";
import {HeadDiv, Logo, Button } from "../../styles/componentStyle";
export const Header = () => {
    return (

        <HeadDiv>
            <Logo>Med Fronend challange</Logo>
            <Button onClick={signOut}>
                Logout
            </Button>
        </HeadDiv>

    )
}
