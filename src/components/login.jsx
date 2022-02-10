import React, { Component } from 'react';
import Input from './common/input';
import Form from './common/form';
import Joi from 'joi-browser';
import '../index.css';
class LoginForm extends Form {
    // username = React.createRef();
    state = {
        data: { username: "", password: "" },
        errors: {}
    };
    schema = {
        username: Joi.string().required().label("Username"),
        password: Joi.string().required().label("Password")
    };


    doSubmit = () => {
        //sever details
        console.log('Form Submitted Successfully');

    }
    render() {
        
        return (
            <div>
                <h4 class="card-title mt-3 text-center">Wake up to health</h4>
                <p class="text-center">Welcome to Mahi's Farm Products</p>
                <form onSubmit={this.handleSubmit} className="Loginpage" >
                   {this.renderInput("username","Username")}
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    {this.renderInput("password","Password","password")}
                    {/* <Input type="password" name="password" value={data.password} label="Password" onChange={this.handleChange} error={errors.password} /> */}
                    <div className="form-group form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <div/>    
                        <div className="col-sm-4">
                            <label className="form-check-label" htmlFor="exampleCheck1">Remember me</label>
                        </div>
                    </div>
                    {this.renderButton('Sign in')}
                    <div/>
                </form>
                
            </div>
        )
    }
}

export default LoginForm;