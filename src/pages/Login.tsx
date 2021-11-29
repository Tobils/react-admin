import React, { Component, SyntheticEvent } from "react";
import { Link, Navigate } from "react-router-dom";

interface LoginState {
  body: {
    email: string;
    password: string;
  };
  redirect: boolean;
}

interface LoginProps {}
export default class Login extends Component<LoginProps, LoginState> {
  constructor(props: LoginProps) {
    super(props);
    this.state = {
      body: {
        email: "",
        password: "",
      },
      redirect: false,
    };
  }

  submit = async (e: SyntheticEvent) => {
    e.preventDefault();
    console.log(this.state.body);

    // this.setState({
    //   ...this.state,
    //   redirect: true,
    // });
  };

  render() {
    if (this.state.redirect) {
      return <Navigate to="/" />;
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
                  <h6 className="fw-light">Sign in to continue.</h6>
                  <form className="pt-3" onSubmit={this.submit}>
                    <div className="form-group">
                      <label>Email</label>
                      <input
                        type="email"
                        className="form-control form-control-lg"
                        id="exampleInputEmail1"
                        placeholder="Username"
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
                        id="exampleInputPassword1"
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
                    <div className="mt-3">
                      <button className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn">
                        SIGN IN
                      </button>
                    </div>
                    <div className="text-center mt-4 fw-light">
                      Don't have an account?{" "}
                      <Link to="/register" className="text-primary">
                        Create
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
