import React from "react";
import { Link } from "react-router-dom";
import { Dropdown, ResponsieEmbed } from "react-bootstrap-v5";
import "bootstrap/dist/css/bootstrap.min.css";
import {useEffect, useState} from "react";
import { Col, Label, Modal,ModalBody,ModalHeader, Row, Table } from "reactstrap";



function UserTable(){

    const [modal,setModal] = useState(false)
    const[data,setdata]=useState([]);
    const [selectedUser, setSelectedUser] = useState([]);
  
    var count=1;

  useEffect(()=>{
    // e.preventDefault();
    fetch(`http://localhost:4000/user/userdata`,{
      method:'GET',
      headers:{
          'Accept':'application/json',
          'Content-Type':'application/json'
      },
  }).then((result)=>{
    result.json().then((resp)=>{
      setdata(resp.data)
      console.warn(resp.data)
    })
  })
},[])

  

  const onView = (id) => {
  
    getUserById(id);
  }

  const getUserById = (user_id) => {
      fetch(`http://localhost:4000/user/getuser?id=${user_id}`,{
        method:'GET',
        headers:{
            'Accept':'application/json',
            'Content-Type':'application/json'
        },
    }).then((result)=>{
      // console.log(",,,,");
      // console.log('result', result);
      result.json().then((resp)=>{

        // console.log(">?<<<<<", resp.data);
        setSelectedUser(resp.data)
        setModal(true)
        // console.warn(">>>>>>",resp)
        // console.log(">><?>?:, ", modal);
      })  
    })
  }

  
    return (
      <>
        <div> 
          <Modal size ="lg" isOpen = {modal}
          toggle ={() => setModal(!modal)}
>
              <ModalHeader 
              toggle={() => setModal(!modal)} 
              >
                Popup
              </ModalHeader>
              <ModalBody>
              {
              
                modal &&  <Table>
                  <Row>
                    <Col lg={12}>
                      <div>
                        <Label htmlFor="name">
                          {selectedUser.user_name}
                        </Label>
                      </div>
                    </Col>
                    <Col lg={12}>
                      <div>
                        <Label htmlFor="name">
                          {selectedUser.user_email}
                        </Label>
                      </div>
                    </Col>
                    <Col lg={12}>
                      <div>
                        <Label htmlFor="name">
                          {selectedUser.user_password}
                        </Label>
                      </div>
                    </Col>
                    <Col lg={12}>
                      <div>
                        <Label htmlFor="name">
                          {selectedUser.user_phoneno}
                        </Label>
                      </div>
                    </Col>
                  </Row>
                </Table>
              
              }
            
              </ModalBody>
        </Modal></div>
          <div
            id="main-wrapper"
            data-layout="vertical"
            data-navbarbg="skin5"
            data-sidebartype="full"
            data-sidebar-position="absolute"
            data-header-position="absolute"
            data-boxed-layout="full"
          >
            <header className="topbar" data-navbarbg="skin5">
              <nav className="navbar top-navbar navbar-expand-md navbar-dark">
                <div className="navbar-header" data-logobg="skin6">
                  <a className="navbar-brand" href="#">
                    <b className="logo-icon">
                      <img
                        src="assets/plugins/images/OneClick_logo.png"
                        alt="homepage"
                        width="auto"
                        height="25px"
                      />
                    </b>

                    <span className="logo-text">
                      <span style={{ color: "black" }}>
                        OneClick Rest Studio
                      </span>
                    </span>
                  </a>

                  <a
                    className="nav-toggler waves-effect waves-light text-dark d-block d-md-none"
                    href="javascript:void(0)"
                  >
                    <i className="ti-menu ti-close"></i>
                  </a>
                </div>

                <div
                  className="navbar-collapse collapse"
                  id="navbarSupportedContent"
                  data-navbarbg="skin5"
                >
                  <ul className="navbar-nav d-none d-md-block d-lg-none">
                    <li className="nav-item">
                      <a
                        className="nav-toggler nav-link waves-effect waves-light text-white"
                        href="javascript:void(0)"
                      >
                        <i className="ti-menu ti-close"></i>
                      </a>
                    </li>
                  </ul>

                  <ul className="navbar-nav ms-auto d-flex align-items-center">
                    <li className=" in">
                      <form
                        role="search"
                        className="app-search d-none d-md-block me-3"
                      >
                        <input
                          type="text"
                          placeholder="Search..."
                          className="form-control mt-0"
                        />
                        <a href="" className="active">
                          <i className="fa fa-search"></i>
                        </a>
                      </form>
                    </li>

                    <Dropdown>
                      <Dropdown.Toggle
                        variant="#2f323e"
                        id="dropdown-basic"
                        style={{ color: "white", paddingLeft: "70px" }}
                      >
                        Jaydeep
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Header href="#/action-1">
                          123@gmail.com
                        </Dropdown.Header>
                        <Link to="/Profile1"><Dropdown.Item href="#/action-2">Profile</Dropdown.Item></Link>
                        <Link to="/LoginForm">
                          <Dropdown.Item href="#/action-2">
                            Sign Out
                          </Dropdown.Item>
                        </Link>
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
                    <h4 className="page-title">User Table</h4>
                  </div>
                </div>
              </div>

              <div className="container-fluid">
                <div className="row">
                  <div className="col-sm-12">
                    <div className="white-box">
                      <div className="d-md-flex mb-3">
                        <div className="col-md-3 col-sm-4 col-xs-6 ms-0">
                          <div className="col-sm-30">
                            <Link to="/LoginUser">
                              {" "}
                              <button className="btn btn-primary">
                                Create User
                              </button>
                            </Link>
                          </div>
                        </div>
                      </div>
                      
                      
                      <h3 className="box-title">Users</h3>
                      <div className="table-responsive">
                        <table className="table text-nowrap" border = "1">
                          <thead>
                            <tr>
                              <th className="border-top-0">Id</th>
                              <th className="border-top-0">Username</th>
                              <th className="border-top-0">Email</th>
                              <th className="border-top-0">Types</th>
                            </tr>
                          </thead>
                          <tbody>
                          {
                          data.map((Item)=>
                            <tr>
                              <td>{count++}</td>
                              <td>{Item.user_name}</td>
                              <td>{Item.user_email}</td>
                              <td>
                               <Link to="/UpdateUser"> <button
                                  type="button"
                                  value="Click Me"
                                  className="btn btn-success"
                                  style={{ marginright: "-50px" }}
                                >
                                  <i
                                    className="fa fa-wrench"
                                    aria-hidden="true"
                                  ></i>
                                </button> </Link>
                              </td>
                              <td>
                                <button
                                  type="button"
                                  value="Click Me"
                                  className="btn btn-danger"
                                  style={{ marginLeft: "-105px" }}
                                >
                                  <i
                                    className="fa fa-trash"
                                    aria-hidden="true"
                                  ></i>
                                </button>
                              </td>
                              <td>
                                <button onClick={()=>{onView(Item.user_id)}}
                                  type="button"
                                  value="Click Me"
                                  className="btn btn-primary"
                                  style={{ marginLeft: "-96px" }}
                                >
                                  <i
                                    className="fa fa-eye"
                                    aria-hidden="true"
                                  ></i>
                                </button>
                              </td>
                            </tr> 
                          )
                        }
                          </tbody>
                        
                        
                        </table>
                      </div>

                   
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </>
    );
  }

export default UserTable;



// setModal(true)
// (Item.user_id)
