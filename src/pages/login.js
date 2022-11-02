import React from "react";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { LoginForm } from "../page-sections/login/loginForm";
import { Container, Block, Img } from "../styles/componentStyle";

export default function Login() {
    const { data, status } = useSession();
    const router = useRouter();

    if (status === "loading") {
        /**
         * Session is being fetched
         */
        return <div>Loading...</div>;
    }
    if (status === "authenticated") {
        router.push("/");
    }
    return (
        <Container>
            <Block >
                <LoginForm />
            </Block>
            <Block >
                <Img picture="https://images.unsplash.com/photo-1527285286036-1ae743926077?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80" />
            </Block>
        </Container>
    );
}
