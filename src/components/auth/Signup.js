import React, { Component } from 'react';
import '../../styles/Signup.scss';
import { signupUser } from "../../actions/authActions/signupActions";
import Spinner from "../../components/Spinner";
import { connect } from "react-redux";
import { withRouter, Redirect } from "react-router-dom";

class Signup extends Component {

    state={
      data: {
          email: "",
          password: ""
      },
    };

    signup = (e) => {
        e.preventDefault();
        let userData = this.state.data;
        this.props.signupUser(userData);
    };

    onChange = (e) => {
        this.setState({
            ...this.state,
            data: {
                ...this.state.data,
                [e.target.name]: e.target.value
            }
        })
    };

    render() {

        const { registeredUser, successMessage } = this.props.signup;

        //redirect on successful register
        if (registeredUser.length > 0 && successMessage.length > 0) {
            return <Redirect to="/login"/>
        }

        return (
            <div>
                <section className="login-block">
                    <div className="signup-container">
                        <div className="row">
                            <div className="col-md-6 login-sec">
                                <h2 className="text-left">Sign up</h2>
                                <form className="login-form" onSubmit={this.signup} method="post">
                                    <div className="form-group">
                                        <label className="text-uppercase small">Email</label>
                                        <input type="email" className="form-control" name="email" onChange={this.onChange}/>
                                        {/*error*/}
                                        {
                                            this.props.signup.errors.email.length > 0 &&
                                            <p className="small mt-1 text-danger">{this.props.signup.errors.email}</p>
                                        }
                                        {/* /error*/}
                                    </div>

                                    <div className="form-group">
                                        <label className="text-uppercase small">Password</label>
                                        <input type="password" className="form-control" name="password" onChange={this.onChange}/>
                                        {/*error*/}
                                        {
                                            this.props.signup.errors.password.length > 0 &&
                                            <p className="small mt-1 text-danger">{this.props.signup.errors.password}</p>
                                        }
                                        {/* /error*/}
                                    </div>

                                    <div className="form-check">
                                        <button type="submit" className="btn btn-login border text-uppercase" >Submit
                                            {
                                                this.props.signup.isRegistering &&
                                                <span className="spin"><Spinner/></span>
                                            }
                                        </button>
                                    </div>

                                </form>

                            </div>
                            <div className="col-md-6 banner-sec">



                            </div>
                        </div>
                        {/*end of row*/}
                    </div>
                </section>
            </div>

        );
    }
}



const mapStateToProps = (state) => {
    return {
        signup: state.signup
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        signupUser: (userData) => {
            return dispatch(signupUser(userData));
        }
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(Signup);