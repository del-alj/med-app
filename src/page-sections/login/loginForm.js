import React, { useState, useEffect } from "react";
import { Input } from "../../components/input";
import { Button } from "../../components/button";
import { Flex, Form } from "../../styles/componentStyle";
import { useFormik } from "formik";
import { login } from "../../pages/api/user";
import { verify } from 'jsonwebtoken';

import { useRouter } from 'next/router'

export const LoginForm = () => {

    const [path, setPath] = useState("");
    const router = useRouter();

    useEffect(() => {
        if (path === "/")
            router?.push(path)
    }, [path])
    const authValid = () => {

        const token = localStorage.getItem("authToken")
        if (token) {
            verify(token, "0e900be1-0ac5-4e6a-bf4b-38f8b21a189b", (err, data) => {
                if (err) setPath("/ok")
                else {
                    setPath("/");
                }
            });

        }
    }
    // if (path === "/")
    //     router?.push(path)

    const [error, setError] = useState(null);
    const formik = useFormik({
        initialValues: {
            username: "",
            password: "",
        },
        onSubmit: async (values) => {
            login(values).then((res) => {
                authValid(setPath)
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

