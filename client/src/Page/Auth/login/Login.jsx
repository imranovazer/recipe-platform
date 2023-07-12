import React, { useEffect, useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import "./login.css"
import { Link, useNavigate } from "react-router-dom"
import { AiOutlineLeft } from "react-icons/ai";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    // const notify = () => toast("Wow so easy!");
    const navigate = useNavigate()
    const initialValues = {
        email: "",
        password: ""
    };


    const validationSchema = Yup.object().shape({
        email: Yup.string().email("Düzgün bir email adresi daxil edin").required("Email mütləq daxil edilməlidir !"),
        password: Yup.string().required("Şifre mütləq daxil edilməlidir ")
    });


    const handleSubmit = async (values, { resetForm }) => {


        try {
            const response = await axios.post("http://localhost:8080/api/user/login", values);
            console.log(response);
            // const token = response.data.token;
            // console.log(response?.data?.user._id);
            // localStorage.setItem("token", JSON.stringify(token));
            // localStorage.setItem("userid", JSON.stringify(response?.data?.user?._id))
            // navigate("/")
            toast.success("Congratulations !!!")
            resetForm();
        } catch (error) {
             toast.error(error.response.data.massage);
        
        }
    };

    return (
        <>




            <div className="login__page h-screen py-24 flex justify-center items-center ">
                <div className="login__container  w-[80vw] h-[70vh] lg:h-[80vh] flex  justify-between items-center relative">
                    <ToastContainer
                        position="top-right"
                        autoClose={2000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        theme="light"
                    />


                    <div className="login__page__decoration  w-[50%] h-full relative hidden sm:block">
                        <div className="login__page__decoration__cover  absolute w-full h-full "></div>
                        <div className="login__page__decoration__text flex justify-center items-center h-full w-full relative z-10">
                            <p className="text-3xl  lg:text-5xl text-white my-2 w-[100%]  lg:w-[80%] lg:pl-24 p-10">Share your recipes with us</p>
                        </div>

                    </div>


                    <div className="input__group sm:w-[50%] w-[100%] h-full flex flex-col justify-center items-center relative ">
                        <div className="go__to__home__btn absolute top-5 left-5">
                            <button className="p-3 bg-cyan-500 rounded-full text-white">
                                <Link to="/">
                                    <AiOutlineLeft />
                                </Link>
                            </button>
                        </div>

                        <h2 className="text-4xl text-white">Login</h2>

                        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
                            <Form className="login-form py-10">
                                <div className=" input__group my-5">
                                    <label htmlFor="email" className="my-2 block text-white">Email</label>
                                    <Field type="email" id="email" name="email" className="p-2 rounded-md" />
                                    <ErrorMessage name="email" component="div" className="error-message text-red-400" />
                                </div>
                                <div>
                                    <label htmlFor="password" className="my-2 block text-white">Password</label>
                                    <Field type="password" id="password" name="password" className="p-2 rounded-md" />
                                    <ErrorMessage name="password" component="div" className="error-message  text-red-400" />
                                </div>
                                <div className="button__group w-full flex justify-center items-end flex-col">
                                    <button type="submit" className="py-3 px-5 my-4 rounded-lg text-white z-10 bg-cyan-500">Login</button>
                                    <Link to="/register" className="mt-5 z-20"><button className="py-2  px-3 rounded-lg text-white ">Register</button></Link>

                                </div>

                            </Form>
                        </Formik>

                    </div>

                </div>
            </div>
        </>


    );
};

export default Login;