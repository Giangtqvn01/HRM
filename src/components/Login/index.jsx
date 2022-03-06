import React, { Component } from "react";
import "./login.css";
import imageLogin from "./../../assets/images/imageLogin.jpg";
import { useFormik } from 'formik';
import { loginSchema } from './../../validation/auth';
import { useDispatch, useSelector } from 'react-redux';
import { ErrorStyle, FooterStyle } from './style';
import { login } from './../../services/auth';
import { setToken } from './../../utils/storage';
import { handleError } from './../../helpers';

const LoginUI = () => {

  const dispatch = useDispatch();

  const { isOpenModalLogin } = useSelector((state) => state.auth);

  const onSubmit = async () => {
    const validateError = await formik.validateForm();
    if (!Object.keys(validateError).length) {
      try {
        const res = await login(formik.values);
        setToken(res?.accessToken);
        dispatch(setIsAuth(true));
        dispatch(setIsOpenModalLogin(false));
      } catch (e) {
        handleError(e);
      }
    }
  };

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: loginSchema,
    onSubmit: () => {},
  });
  return (
    <div className="auth-wrapper auth-v3">
      <div className="auth-content">
        <div className="card">
          <div className="row align-items-streych text-center">
            <div className="col-md-6 img-card-side">
              <img src={imageLogin} alt="" className="img-fluid" />
            </div>
            <div className="col-md-6">
              <div className="card-body">
                {/* <style>
                  .auth-wrapper .auth-content:not(.container) .card-body {{
                    padding: "20px 20px"}
                }
              </style> */}
                <img
                  src="https://anhtester.com/uploads/logo/anhtester_logo_512.png"
                  width="200px"
                  alt=""
                  style={{
                    marginLeft: "auto",
                    marginRight: "auto",
                    marginBottom: "10px",
                  }}
                ></img>
                <div className="text-left">
                  <h4 className="mb-3 f-w-600">
                    Welcome to <span class="text-primary">HRM System </span>
                  </h4>
                  <ul>
                    <li> Employee: employee01/123456</li>
                    <li> Leader: leader01/123456</li>
                    <li> Admin: admin01/123456</li>
                    <li> Client: client01/123456</li>
                  </ul>
                </div>
                <form
                  action=""
                  className="form-timehrm"
                  name="erp-form"
                  id="erp-form"
                >
                  <div>
                    <div className="input-group mb3">
                      <div className="input-group-prepend">
                        {" "}
                        <span className="input-group-text">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="feather feather-user"
                          >
                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                            <circle cx="12" cy="7" r="4"></circle>
                          </svg>
                        </span>{" "}
                      </div>
                      <input
                        type="text"
                        className="form-control"
                        id="iusername"
                        name="iusername"
                        placeholder="Your Username"
                      ></input>
                    </div>
                    <div class="input-group mb-4">
                      <div class="input-group-prepend">
                        {" "}
                        <span class="input-group-text">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="feather feather-lock"
                          >
                            <rect
                              x="3"
                              y="11"
                              width="18"
                              height="11"
                              rx="2"
                              ry="2"
                            ></rect>
                            <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                          </svg>
                        </span>{" "}
                      </div>
                      <input
                        type="password"
                        class="form-control"
                        id="ipassword"
                        name="password"
                        placeholder="Enter Password"
                      />
                    </div>
                    <div class="form-group text-left my-2">
                      <div class="float-right">
                        {" "}
                        <a
                          href="https://hrm.anhtester.com/erp/forgot-password"
                          class="text-primary"
                        >
                          <span>Forgot password? </span>
                        </a>{" "}
                      </div>
                      <div class="d-inline-block">
                        <strong class="text-success">&nbsp;</strong>
                      </div>
                    </div>
                  </div>
                  <div className="text-right mt-2">
                    <button
                      type="submit"
                      className="btn btn-primary mt-2 ladda-button"
                      datatype="expand-right"
                    >
                      <span className="ladda-label">
                        <i className="fas fa-user-lock d-blockd"></i>
                        Login{" "}
                      </span>
                      <span className="ladda-spinner"></span>
                    </button>
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

export default LoginUI;
