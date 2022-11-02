import React from "react";
import { Input } from "../../components/input";
import { Button } from "../../components/button";
import { Flex, Form } from "../../styles/componentStyle";
import { useFormik } from "formik";
import { useRouter } from 'next/router';
import { signIn } from 'next-auth/react';
import { Eggy } from '../../../node_modules/@s-r0/eggy-js/build/js/eggy.js';

export const LoginForm = () => {
    const router = useRouter();
    const formik = useFormik({
        initialValues: {
            username: "",
            password: "",
        },
        onSubmit: async (values) => {
            const res = await signIn("login", {
                username: values?.username,
                password: values?.password,
                redirect: false,
            });
            if (res?.error) {
                await Eggy({
                    title: "Error",
                    message: res.error,
                    type: 'error',
                });
                return;
            }
            router.replace("/");
        }
    });

    return (<Flex>
        <h1>Welcome back</h1>
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

