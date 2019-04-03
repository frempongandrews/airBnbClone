import React, { Component } from 'react';
import '../styles/Signup.scss';


class Login extends Component {

    render() {
        return (
            <div>
                <section className="login-block">
                    <div className="signup-container">
                        <div className="row">
                            <div className="col-md-6 login-sec">
                                <h2 className="text-left">Log in</h2>
                                <form className="login-form">
                                    <div className="form-group">
                                        <label htmlFor="exampleInputEmail1" className="text-uppercase small">Username</label>
                                        <input type="text" className="form-control" placeholder="" />

                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputPassword1"
                                               className="text-uppercase small">Password</label>
                                        <input type="password" className="form-control" placeholder="" />
                                    </div>


                                    <div className="form-check">

                                        <button type="submit" className="btn btn-login border text-uppercase">Submit</button>

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

export default Login;