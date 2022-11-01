import React from "react";

import { LoginForm } from "../page-sections/login/loginForm";
import {Container, Block, Img} from "../styles/componentStyle";

import { unstable_getServerSession } from "next-auth/next";
import { authOptions } from "./api/auth/[...nextauth]";

export default function Login() {
    return (
        <Container>
            <Block >
            <LoginForm />
            </Block>
            <Block >
            <Img picture="https://images.unsplash.com/photo-1527285286036-1ae743926077?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80"/>
            </Block>
        </Container>
    );
}

export async function getServerSideProps({ req, res }) {
  const session = await unstable_getServerSession(req, res, authOptions);

  if (session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}
