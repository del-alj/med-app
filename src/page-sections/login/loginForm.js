import React, { useState, useEffect } from "react";
import { Input } from "../../components/input";
import { Button } from "../../components/button";
import { Flex, Form } from "../../styles/componentStyle";
import { useFormik } from "formik";
import { login } from "../../pages/api/user";
import { verify } from 'jsonwebtoken';

import { useRouter } from 'next/router';
import {signIn } from 'next-auth/react';
import { authValid } from "../../helpers/auth";

export const LoginForm = () => {
    const [error, setError] = useState(null);
    const router = useRouter();
    const formik = useFormik({
        initialValues: {
            username: "",
            password: "",
        },
        onSubmit: async (values) => {
            // signIn();
            // login(values).then((res) => {
            //     authValid(setPath)
            signIn("credentials", {
                redirect: false,
                username: values?.username,
                password: values?.password,
            }).then((res) => {
                
                authValid(setPath);
                console.log(res)
                // router.replace("/");
            }).catch((err) => {
                setError(err);
            })
        }
    });


    return (<Flex>
        <h1 className="display-6 mb-3">Welcome back</h1>
        <p>Welcome back! Please enter your details.</p>
        <Form onSubmit={formik.handleSubmit}>
            <Input id="username" label={"UserName"} placeholder="Username" type="text" onChange={formik.handleChange}
                value={formik.values.username} />
            <Input id="password" label={"Password"} placeholder="password" type="password" onChange={formik.handleChange}
                value={formik.values.password} />
            <Button title="Sign in" type="submit" />
        </Form>
    </Flex>)
}

