import React, {useState} from "react";
import { Input } from "../../components/input";
import { Button } from "../../components/button";
import { Flex, Form } from "../../styles/componentStyle";
import { useFormik } from "formik";
import {login} from "../../pages/api/user";

export const LoginForm = () => {

    const [error, setError] = useState(null);
    const formik = useFormik({
        initialValues: {
            username: "",
            password: "",
        },
        onSubmit: values => {
           login(values).then((res)=> {
            console.log("test", res)
           }).catch((err)=>{
            setError(err);
           })
          }});
  
  
    return (<Flex>
        <h1 className="display-6 mb-3">Welcome back</h1>
        <p>Welcome back! Please enter your details.</p>
        <Form onSubmit={formik.handleSubmit}>
            <Input id="username" label={"UserName"} placeholder="Username" type="text" onChange={formik.handleChange}
         value={formik.values.username}/>
            <Input id="password" label={"Password"} placeholder="password" type="password" onChange={formik.handleChange}
         value={formik.values.password}/>
            <Button title="Sign in" />
        </Form>
    </Flex>)
}