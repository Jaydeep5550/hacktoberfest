import React from "react";


class header extends React.Component{
    render(){
        return (
            <>
            <div>
            <header className="topbar" data-navbarbg="skin5">
            <nav className="navbar top-navbar navbar-expand-md navbar-dark">
                <div className="navbar-header" data-logobg="skin6">
                    
                   
                    
                    <a className="navbar-brand" href="dashboard.html">
                       
                        <b className="logo-icon">
                           
                            <img src="assets/plugins/images/OneClick_logo.png" alt="homepage" width="auto" height="35px" />
                        </b>
                       
                       
                        <span className="logo-text">
                            
                            <span style={{color: "black"}}>OneClick Rest Studio</span>
                        </span>
                    </a>
                    
                   
                    
                    <a className="nav-toggler waves-effect waves-light text-dark d-block d-md-none"
                        href="javascript:void(0)"><i className="ti-menu ti-close"></i></a>
                </div>
                
                
                
                <div className="navbar-collapse collapse" id="navbarSupportedContent" data-navbarbg="skin5">
                    
                    <ul className="navbar-nav ms-auto d-flex align-items-center">
      
                        <li className=" in">
                            <form role="search" className="app-search d-none d-md-block me-3">
                                <input type="text" placeholder="Search..." className="form-control mt-0"/>
                                <a href="" className="active">
                                    <i className="fa fa-search"></i>
                                </a>
                            </form>
                        </li>
                        
                        
                        
                        <li>
                            <a className="profile-pic" href="#">
                                <img src="assets/plugins/images/users/profile.png" alt="user-img" width="36"
                                    className="img-circle"/><span className="text-white font-medium">Jaydeep</span></a>
                        </li>
                         
                    </ul>
                </div>
            </nav>
        </header>
            </div>
            </>
        );
    };
};
export default header;