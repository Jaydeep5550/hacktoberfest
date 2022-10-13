import React, { useState, useEffect, useRef, useContext } from "react";
import AuthContext from '../context/AuthProvider';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "../api/axios";
import Home from "./Home";
import { Link } from "react-router-dom";

const LOGIN_URL = '/user/login';

export default function LoginForm() {
    const { setAuth } = useContext(AuthContext);
    const emailRef = useRef();
    const errRef = useRef();


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);


    useEffect(() => {
        emailRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [email, password])

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            var data = JSON.stringify({
                "user_email": email,
                "user_password": password
            });
            
            
            const response = await axios.post(LOGIN_URL, data,
                {
                    headers: { 'Content-Type': 'application/json' },
                }
            );
            console.log(JSON.stringify(response.data.token));
            // console.log(JSON.stringify(response));
           
            const accessToken = response?.data?.accessToken;
            const roles = response?.data?.roles;
            setAuth({ email, password, roles, accessToken });
            setEmail('');
            setPassword('');
            setSuccess(true);
            // localStorage.setItem(response);
        } catch (err) {
            if (!err.response) {
                setErrMsg('No Server Response');
            } else if (!err.response.data.StatusCode === 403) {
                setErrMsg('Missing Email or Pasword');
            } else if (err.response.data.StatusCode === 401) {
                setErrMsg('Unauthorized');
            } else {
                setErrMsg('Login Failed');
            }
            errRef.current.focus();
        }

    }
    return (

        <div>
            
            {success ? (
                <Home/>
                
            ) : (

                <section className="vh-100" style={{ backgroundcolor: "#508bfc" }}>
                    
                    <form onSubmit={handleSubmit}>
                    
                        <div className="container py-5 h-100">
                            <div className="row d-flex justify-content-center align-items-center h-100">
                                <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                                    <div className="card shadow-2-strong" style={{ borderradius: "1rem" }}>
                                        <div className="card-body p-5 text-center">

                                            <h3 className="mb-5">Sign in</h3>
                                            <br/>
                                            <p style={{color:"red"}}ref={errRef} className={errMsg ? "errmsg" : "offscreen"}
                                             aria-live="assertive">{errMsg}</p>

                                            <div className="form-outline mb-4">

                                                <input type="email" name="Email"
                                                    className="form-control form-control-lg"
                                                    placeholder="Email"
                                                    ref={emailRef} autoComplete="off"
                                                    onChange={(e) => setEmail(e.target.value)}
                                                    value={email} required />
                                            </div>




                                            <div className="form-outline mb-4">

                                                <input type="password" name="Password"
                                                    className="form-control form-control-lg"
                                                    placeholder="Password"
                                                    value={password}
                                                    onChange={(e) => setPassword(e.target.value)}
                                                    required />


                                            </div>

                                    <button className="btn btn-primary btn-lg btn-block" type="submit">Login</button>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>

                </section>
            )}
        </div>



    );
};
