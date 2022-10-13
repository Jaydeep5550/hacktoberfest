import React from "react";
import { Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap-v5";
import 'bootstrap/dist/css/bootstrap.min.css';


class Home extends React.Component {
    render() {
        return (
            <>
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

                                            <Dropdown.Toggle variant="#2f323e" id="dropdown-basic" style={{ color: 'white', paddingLeft: '70px' }} >

                                                Jaydeep
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu>
                                                <Dropdown.Header href="#/action-1">123@gmail.com</Dropdown.Header>
                                                <Link to="/Profile1"><Dropdown.Item href="#/action-2">Profile</Dropdown.Item></Link> 
                                                <Link to="/LoginForm"><Dropdown.Item href="#/action-3">Sign Out</Dropdown.Item></Link>

                                            
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
                                            <Link to="/"><a className="sidebar-link waves-effect waves-dark" href="Dashboard.html"
                                                aria-expanded="false">
                                                <i className="far fa-clock" aria-hidden="true"></i>
                                                <span className="hide-menu ">Dashboard</span>

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
                                        <h4 className="page-title">Admin Dashboard</h4>
                                    </div>

                                </div>

                            </div>



                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-md-12 col-lg-12 col-sm-12">
                                        <div className="white-box">
                                            <div className="d-md-flex mb-3">
                                                <h3 className="box-title mb-0">API Details</h3>

                                            </div>
                                            <div className="table-responsive">
                                                <table className="table no-wrap">
                                                    <thead>
                                                        <tr>
                                                            <th className="border-top-0">Id</th>
                                                            <th className="border-top-0">API Domain Name</th>
                                                            <th className="border-top-0">Test API User</th>
                                                            <th className="border-top-0">Date</th>

                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>1</td>
                                                            <td className="txt-oflo">Elite admin</td>
                                                            <td>SALE</td>
                                                            <td className="txt-oflo">April 18, 2021</td>

                                                        </tr>
                                                        <tr>
                                                            <td>2</td>
                                                            <td className="txt-oflo">Real Homes WP Theme</td>
                                                            <td>EXTENDED</td>
                                                            <td className="txt-oflo">April 19, 2021</td>

                                                        </tr>
                                                        <tr>
                                                            <td>3</td>
                                                            <td className="txt-oflo">Ample Admin</td>
                                                            <td>EXTENDED</td>
                                                            <td className="txt-oflo">April 19, 2021</td>

                                                        </tr>
                                                        <tr>
                                                            <td>4</td>
                                                            <td className="txt-oflo">Medical Pro WP Theme</td>
                                                            <td>TAX</td>
                                                            <td className="txt-oflo">April 20, 2021</td>

                                                        </tr>
                                                        <tr>
                                                            <td>5</td>
                                                            <td className="txt-oflo">Hosting press html</td>
                                                            <td>SALE</td>
                                                            <td className="txt-oflo">April 21, 2021</td>

                                                        </tr>
                                                        <tr>
                                                            <td>6</td>
                                                            <td className="txt-oflo">Digital Agency PSD</td>
                                                            <td>SALE</td>
                                                            <td className="txt-oflo">April 23, 2021</td>

                                                        </tr>
                                                        <tr>
                                                            <td>7</td>
                                                            <td className="txt-oflo">Helping Hands WP Theme</td>
                                                            <td>MEMBER</td>
                                                            <td className="txt-oflo">April 22, 2021</td>

                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>



                        </div>



                    </div>
                </div>
            </>
        );
    };
};

export default Home;