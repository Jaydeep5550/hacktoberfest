import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as yup from 'yup';

function LoginUser() {
    const url = ""
    const [data, setData] = useState({
        Name: "",
        Name1: "",

    })
    function handle(e) {
        const newdata = { ...data }
        newdata[e.target.id] = e.target.value
        setData(newdata)
        console.log(newdata)
    }

    function submit(e) {
        e.preventDefault();
        Axios.post(url, {
            Name: data.Name,
            Name1: data.Name1,
            Email: data.Email,
            Password: data.Password,
            PhoneNo: data.PhoneNo
        })
            .then(res => {
                console.log(res.data);
            })
    }
    const navigate = useNavigate();

    const FormInitialSchema =
    {
        Name: "",
        Name1: "",
        Email: "",
        Password: "",
        PhoneNo: ""
    }
    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log("Submitted values");
    }

    return (



        <div>

            <div id="main-wrapper" data-layout="vertical" data-navbarbg="skin5" data-sidebartype="full"
                data-sidebar-position="absolute" data-header-position="absolute" data-boxed-layout="full">


                <header className="topbar" data-navbarbg="skin5">
                    <nav className="navbar top-navbar navbar-expand-md navbar-dark">
                        <div className="navbar-header" data-logobg="skin6">



                            <a className="navbar-brand" href="#">

                                <b className="logo-icon">

                                    <img src="assets/plugins/images/OneClick_logo.png" alt="homepage" width="auto" height="25px" />
                                </b>


                                <span className="logo-text">

                                    <span style={{ color: "black" }}>OneClick Rest Studio</span>
                                </span>
                            </a>

                            <a className="nav-toggler waves-effect waves-light text-dark d-block d-md-none"
                                href="javascript:void(0)"><i className="ti-menu ti-close"></i></a>
                        </div>



                        <div className="navbar-collapse collapse" id="navbarSupportedContent" data-navbarbg="skin5">
                            <ul className="navbar-nav d-none d-md-block d-lg-none">
                                <li className="nav-item">
                                    <a className="nav-toggler nav-link waves-effect waves-light text-white"
                                        href="javascript:void(0)"><i className="ti-menu ti-close"></i></a>
                                </li>
                            </ul>



                            <ul className="navbar-nav ms-auto d-flex align-items-center">



                                <li className=" in">
                                    <form role="search" className="app-search d-none d-md-block me-3">
                                        <input type="text" placeholder="Search..." className="form-control mt-0" />
                                        <a href="" className="active">
                                            <i className="fa fa-search"></i>
                                        </a>
                                    </form>
                                </li>

                            </ul>
                        </div>
                    </nav>
                </header>
                <aside className="left-sidebar" data-sidebarbg="skin6">
                    <div className="scroll-sidebar">
                        <nav className="sidebar-nav">
                            <ul id="sidebarnav">
                                <li className="sidebar-item pt-2">
                                    <Link
                                        className="sidebar-link waves-effect waves-dark sidebar-link"
                                        to="/"
                                        aria-expanded="false"
                                    >
                                        <i className="far fa-clock" aria-hidden="true"></i>
                                        <span className="hide-menu">Dashboard</span>
                                    </Link>
                                </li>

                                <li className="sidebar-item">
                                    <Link
                                        className="sidebar-link waves-effect waves-dark sidebar-link"
                                        to="/UserTable"
                                        aria-expanded="false"
                                    >
                                        <i className="fa fa-table" aria-hidden="true"></i>
                                        <span className="hide-menu">User Table</span>
                                    </Link>
                                </li>





                <div className="page-wrapper">
                    <div className="page-breadcrumb bg-white">
                        <div className="row align-items-center">
                            <div className="col-lg-3 col-md-4 col-sm-4 col-xs-12">
                                <h4 className="page-title">User Profile page</h4>
                            </div>
                        </div>
                    </div>




                    <Formik initialValues={FormInitialSchema} validationSchema={FormValidationSchema}
                        onSubmit={(values, { setSubmitting }) => {
                            setSubmitting(false);
                            navigate("/")
                            console.log(values);
                        }} >
                        {({ isSubmitting }) => (
                            <Form>
                                <div className="col-lg-12 col-xlg-9 col-md-12" onSubmit={handleFormSubmit}>

                                   
                                                <div className="form-group mb-4">
                                                    <label className="col-md-12 p-0" onChange={(e) => handle(e)} id="Name"
                                                        value={data.Name}>First Name</label>
                                                    <div className="col-md-12 border-bottom p-0">
                                                        <Field type="name" name="Name" placeholder="Kuchhdiya"
                                                            className="form-control p-0 border-0" />
                                                        <p className="text-danger">
                                                            <ErrorMessage name="Name" />
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="form-group mb-4">
                                                    <label className="col-md-12 p-0" onChange={(e) => handle(e)} id="Name1"
                                                        value={data.Name1}>Last Name</label>
                                                    <div className="col-md-12 border-bottom p-0">
                                                        <Field type="name" name="Name1" placeholder="Jaydeep"
                                                            className="form-control p-0 border-0" />
                                                        <p className="text-danger">
                                                            <ErrorMessage name="Name1" />
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="form-group mb-4">
                                                    <label className="col-md-12 p-0" onChange={(e) => handle(e)} id="Email"
                                                        value={data.Email}>Email</label>
                                                    <div className="col-md-12 border-bottom p-0">
                                                        <Field type="email" name="Email" placeholder="ironman@admin.com"
                                                            className="form-control p-0 border-0" />
                                                        <p className="text-danger">
                                                            <ErrorMessage name="Email" />
                                                        </p>

                                                    </div>
                                                </div>
                                                <div className="form-group mb-4">
                                                    <label className="col-md-12 p-0" onChange={(e) => handle(e)} id="Password"
                                                        value={data.Password}>Password</label>
                                                    <div className="col-md-12 border-bottom p-0">
                                                        <Field type="password" name="Password" className="form-control p-0 border-0" />
                                                        <p className="text-danger">
                                                            <ErrorMessage name="Password" />
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="form-group mb-4">
                                                    <label className="col-md-12 p-0" onChange={(e) => handle(e)} id="PhoneNo"
                                                        value={data.PhoneNo}>Phone No</label>
                                                    <div className="col-md-12 border-bottom p-0">
                                                        <Field type="text" name="PhoneNo" placeholder="+91 (976) 006-4000 "
                                                            className="form-control p-0 border-0" />
                                                        <p className="text-danger">
                                                            <ErrorMessage name="PhoneNo" />
                                                        </p>
                                                    </div>
                                                </div>

                                                <div className="form-group mb-4">
                                                    <div className="col-sm-12">
                                                        <button className="btn btn-primary" type="submit" disabled={isSubmitting}>Create Profile</button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                       
                    </Formik>













                </div>



            </div>
        </div>

    );
};


export default LoginUser;
