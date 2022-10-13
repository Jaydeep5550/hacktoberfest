import React from "react";
import { Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap-v5";
import 'bootstrap/dist/css/bootstrap.min.css';


function Profile1() {
    
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

                                        <Dropdown>

                                            <Dropdown.Toggle variant="#2f323e" id="dropdown-basic" style={{ color: 'white', paddingLeft: '70px' }}>
                                                Jaydeep
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu>
                                                <Dropdown.Header href="#/action-1">123@gmail.com</Dropdown.Header>
                                                <Link to="/LoginForm"><Dropdown.Item href="#/action-2">Sign Out</Dropdown.Item></Link>

                                            </Dropdown.Menu>
                                        </Dropdown>

                                    </ul>
                                </div>
                            </nav>
                        </header>
                        <aside className="left-sidebar" data-sidebarbg="skin6">
                            <div className="scroll-sidebar">

                                <nav className="sidebar-nav">
                                    <ul id="sidebarnav">

                                        <li className="sidebar-item pt-2">
                                            <Link to="/"><a className="sidebar-link waves-effect waves-dark sidebar-link" href="Dashboard.html"
                                                aria-expanded="false">
                                                <i className="far fa-clock" aria-hidden="true"></i>
                                                <span className="hide-menu">Dashboard</span>

                                            </a></Link>
                                        </li>
                                       
                                        <li className="sidebar-item">
                                            <Link to="/UserTable"><a className="sidebar-link waves-effect waves-dark sidebar-link" href="basic-table.html"
                                                aria-expanded="false">
                                                <i className="fa fa-table" aria-hidden="true"></i>
                                                <span className="hide-menu">Users</span>

                                            </a> </Link>
                                        </li>

                                    </ul>

                                </nav>

                            </div>

                        </aside>

                        <div className="page-wrapper">
                            <div className="page-breadcrumb bg-white">
                                <div className="row align-items-center">
                                    <div className="col-lg-3 col-md-4 col-sm-4 col-xs-12">
                                        <h4 className="page-title">Admin Profile Page</h4>
                                    </div>
                                </div>
                            </div>


                            <div className="col-lg-12 col-xlg-9 col-md-12">
                                <div className="card">
                                    <div className="card-body">
                                        <form className="form-horizontal form-material">
                                            <div className="form-group mb-4">
                                                <label className="col-md-12 p-0">First Name</label>
                                                <div className="col-md-12 border-bottom p-0">
                                                    <input type="text" placeholder="Kuchhdiya"
                                                        className="form-control p-0 border-0" /> </div>
                                            </div>
                                            <div className="form-group mb-4">
                                                <label className="col-md-12 p-0">Last Name</label>
                                                <div className="col-md-12 border-bottom p-0">
                                                    <input type="text" placeholder="Jaydeep"
                                                        className="form-control p-0 border-0" /> </div>
                                            </div>
                                            <div className="form-group mb-4">
                                                <label for="example-email" className="col-md-12 p-0">Email</label>
                                                <div className="col-md-12 border-bottom p-0">
                                                    <input type="email" placeholder="ironman@admin.com"
                                                        className="form-control p-0 border-0" name="example-email"
                                                        id="example-email" />
                                                </div>
                                            </div>
                                            <div className="form-group mb-4">
                                                <label className="col-md-12 p-0">Password</label>
                                                <div className="col-md-12 border-bottom p-0">
                                                    <input type="password" value="password" className="form-control p-0 border-0" />
                                                </div>
                                            </div>
                                            <div className="form-group mb-4">
                                                <label className="col-md-12 p-0">Phone No</label>
                                                <div className="col-md-12 border-bottom p-0">
                                                    <input type="text" placeholder="123 456 7890"
                                                        className="form-control p-0 border-0" />
                                                </div>
                                            </div>

                                            <div className="form-group mb-4">
                                                <div className="col-sm-12">
                                                    <button className="btn btn-primary">Update Profile</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>












                        </div>



                    </div>
                </div>
            
        );
    };
export default Profile1;