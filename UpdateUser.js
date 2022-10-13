import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

function UpdateUser() {
    return (
        <div>
            <h3>Update Your Form</h3>
            <form>
                <div className="form-col">
                    <div className="form-group col-md-6">
                        <label for="inputFirstName4">First Name</label>
                        <input type="FirstName" className="form-control" id="inputFirstName4" placeholder="First Name" />
                    </div>
                    <div className="form-group col-md-6">
                        <label for="inputLastName4">Last Name</label>
                        <input type="LastName" className="form-control" id="inputLastName4" placeholder="Last Name" />
                    </div>
                    <div className="form-group col-md-6">
                        <label for="inputEmail4">Email</label>
                        <input type="email" className="form-control" id="inputEmail4" placeholder="Email" />
                    </div>
                    <div className="form-group col-md-6">
                        <label for="inputPassword4">Password</label>
                        <input type="password" className="form-control" id="inputPassword4" placeholder="Password" />
                    </div>
                    <div className="form-group col-md-6">
                        <label className="col-md-6">Phone No</label>
                            <input type="phoneno" className="form-control" id="inputPhoneNo4" placeholder="+91 (976) 006-4000 "/>
                   </div>
                </div>

                <div className="form-group">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="gridCheck" />
                        <label className="form-check-label" for="gridCheck">
                            please check the Updated
                        </label>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">Update</button>
            </form>
        </div>
    );
};

export default UpdateUser;
