import React from "react";
import {  useHistory} from 'react-router-dom';
import "./login.css";
import { useFormik } from 'formik';

const LoginUI = () => {
  const history = useHistory();


  const onSubmit = () => {
    console.log(formik.values);
    // history.push('/dashboard');
    
    
  };



  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    // validationSchema: loginSchema,
    onSubmit: () => {},
  });
  return (
    <div className="auth-wrapper auth-v3">
      <div className="auth-content">
          <div className="card">
            <div className="row align-items-stretch text-center">
              <div className="col-md-6 img-card-side">
                <img src="https://hrm.anhtester.com/public/assets/images/auth/4904579.jpg" alt="" className="img-fluid"/>
                </div>
                <div className="col-md-6">
                  <div className="card-body">
                  <img src="https://anhtester.com/uploads/logo/anhtester_logo_512.png" width="200px" className="logo" alt=""/>
                  <div className="text-left">
                    <h4 className="mb-3 f-w-600">
                      Welcome to
                      <span className="text-primary"> HRM System </span>
                      </h4>
                      <p></p>
                    </div>
                    <form className="form-timehrm" id="erp-form">
                      <div>
                        <div className="input-group mb-3">
                          <div className="input-group-prepend">
                            <span className="input-group-text">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" 
                            height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                            strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-user">
                              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" >
                                </path>
                                <circle cx="12" cy="7" r="4">
                                  </circle>
                                  </svg>
                              </span>
                            </div>
                            <input type="text" className="form-control"  id="iusername" name="username" placeholder="Your Username"
                              onChange={formik.handleChange}
                              value={formik.values?.username}
                            />
                          </div>
                          <div className="input-group mb-4">
                          <div className="input-group-prepend"> 
                            <span className="input-group-text">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" 
                              stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-lock">
                                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                                </svg>
                                </span> 
                                </div>
                          <input type="password" className="form-control" id="ipassword" name="password" placeholder="Enter Password"
                          onChange={formik.handleChange}
                          value={formik.values?.password}
                          />
                        </div>
                      </div>
                      <div className="text-right mt-2">
                          <button type="button" className="btn btn-primary mt-2 ladda-button" data-style="expand-right" onClick={onSubmit}>
                            <span className="ladda-label">
                              <i className="fas fa-user-lock d-blockd">
                              </i>Login</span>
                              <span className="ladda-spinner"></span>
                              </button>
                        </div>
                        <div className="this-field"><label>Bot Will Fill This Field</label><input type="text" name="ciapp_check" value=""/></div>
                      </form>
                    </div>
                </div>
              </div>
          </div>
      </div>
    </div>
  );
};

export default LoginUI;
