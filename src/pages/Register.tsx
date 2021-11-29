import React, { Component, SyntheticEvent } from "react";
import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";

interface RegisterState {
  body: {
    fullName: string;
    email: string;
    password: string;
    passwordConfirm: string;
  };
  redirect: boolean;
}

interface RegisterProps {}

export default class Register extends Component<RegisterProps, RegisterState> {
  constructor(props: RegisterProps) {
    super(props);
    this.state = {
      body: {
        fullName: "",
        email: "",
        password: "",
        passwordConfirm: "",
      },
      redirect: false,
    };
  }

  submit = async (e: SyntheticEvent) => {
    e.preventDefault();
    console.log(this.state);
    this.setState({
      ...this.state,
      redirect: true,
    });
  };

  render() {
    if (this.state.redirect) {
      return <Navigate to="/login" />;
    }
    return (
      <div className="container-scroller">
        <div className="container-fluid page-body-wrapper full-page-wrapper">
          <div className="content-wrapper d-flex align-items-center auth px-0">
            <div className="row w-100 mx-0">
              <div className="col-lg-4 mx-auto">
                <div className="auth-form-light text-left py-5 px-4 px-sm-5">
                  <div className="brand-logo">
                    <img
                      src={window.location.origin + "/images/logo.svg"}
                      alt="logo"
                    />
                  </div>
                  <h4>Hello! let's get started</h4>
                  <h6 className="fw-light">Sign up to continue.</h6>
                  <form className="pt-3" onSubmit={this.submit}>
                    <div className="form-group">
                      <label>Fullname</label>
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        id="inputFullName"
                        placeholder="Fullname"
                        onChange={(e) => {
                          this.setState({
                            ...this.state,
                            body: {
                              ...this.state.body,
                              fullName: e.target.value,
                            },
                          });
                        }}
                      />
                    </div>
                    <div className="form-group">
                      <label>Email</label>
                      <input
                        type="email"
                        className="form-control form-control-lg"
                        id="exampleInputEmail1"
                        placeholder="Email"
                        onChange={(e) => {
                          this.setState({
                            ...this.state,
                            body: {
                              ...this.state.body,
                              email: e.target.value,
                            },
                          });
                        }}
                      />
                    </div>
                    <div className="form-group">
                      <label>Password</label>
                      <input
                        type="password"
                        className="form-control form-control-lg"
                        id="inputPassword"
                        placeholder="Password"
                        onChange={(e) => {
                          this.setState({
                            ...this.state,
                            body: {
                              ...this.state.body,
                              password: e.target.value,
                            },
                          });
                        }}
                      />
                    </div>
                    <div className="form-group">
                      <label>Password Confirm</label>
                      <input
                        type="password"
                        className="form-control form-control-lg"
                        id="inputPasswordConfirm"
                        placeholder="Confirm Password"
                        onChange={(e) => {
                          this.setState({
                            ...this.state,
                            body: {
                              ...this.state.body,
                              passwordConfirm: e.target.value,
                            },
                          });
                        }}
                      />
                    </div>
                    <div className="mt-3">
                      <button className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn">
                        SIGN UP
                      </button>
                    </div>
                    <div className="text-center mt-4 fw-light">
                      Already have an account?{" "}
                      <Link to={"/login"} className="text-primary">
                        Login
                      </Link>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
