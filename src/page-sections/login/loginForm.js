import React, { useState, useEffect } from "react";
import { Input } from "../../components/input";
import { Button } from "../../components/button";
import { Flex, Form } from "../../styles/componentStyle";
import { useFormik } from "formik";
import { login } from "../../pages/api/user";
import { verify } from 'jsonwebtoken';

import { useRouter } from 'next/router'

export const LoginForm = () => {

    const router = useRouter()

    useEffect(()=> {
console.log(router?.pathname)
    },[router])
    const authValid = () => {

        const token = localStorage.getItem("authToken")
        if (token) {
            verify(token, "0e900be1-0ac5-4e6a-bf4b-38f8b21a189b", (err, data) => {

                if (err) { return "Err" }
                else  return "/"
            }).then((res) => {
                return "/"
            }).catch(() => {
                return "/logdin"

            })

        } else {
            return "/"
        }
    }


    // const { data: session, status } = useSession()

    // console.log(session)
    const [error, setError] = useState(null);
    const formik = useFormik({
        initialValues: {
            username: "",
            password: "",
        },
        onSubmit: async (values) => {
            // const res = await signIn("credentials", values)

            login(values).then((res) => {
                const path = authValid()
                console.log("path", path)
                router.push(path)

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

