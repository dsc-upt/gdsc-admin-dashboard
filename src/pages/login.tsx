import { urls, useRouting } from "../routing";
import React from "react";
import { Form, Formik } from "formik";


export type LoginForm = {
    email: string;
    password: string;
};

export function LoginPage(){
    const { routeTo } = useRouting();

    const initialValues = {
        email: "admin",
        password: "scoala1deHackeri",
      };

    const onSubmit = async (creds: LoginForm) =>{
        console.log(creds);
        routeTo(urls.dashboard);
    }

    //Formik will be used for all types of forms

    return(<div className="Login">
        <p>This is login page!</p>
        <Formik initialValues={initialValues} onSubmit={onSubmit}>
            {({handleChange }) => {
                return(
                    <Form className="Form">
                        <label>
                            <p>Email:</p>
                            <input type="text" name="email" onChange={handleChange}></input>
                        </label>
                        <label>
                            <p>Password:</p>
                            <input type="password" name="password" onChange={handleChange}></input>
                        </label>
                        <button type="submit">Go to dashboard</button>
                    </Form>
                )
            }}
        </Formik>
    </div>)
}