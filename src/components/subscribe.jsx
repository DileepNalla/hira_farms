import React, { Component } from 'react';
import Form from './common/form';
import Joi from 'joi-browser';
class Subscribe extends Form {
    state = {
        data: { email: ""},
        errors: {}
    }

    schema = {
        email: Joi.string().required().email().label('Email')
        
    }

    doSubmit = () => {
        console.log('Subscribed Successfully')
    }

    render() {
        return <div>
            <h4 class="card-title mt-3 text-center">Subscribe</h4>
            <p class="text-center">All you need is "Milk" for health</p>
            <hr/>
            <form onSubmit={this.handleSubmit} className="subscribe" >
                   <div>
                   {this.renderInput("email","Email","email")}
                   </div>
                   <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
           
                   <div>
                   {this.renderButton('subscribe')}
                   </div>
                   
                    
                </form>

        </div>;
    }
}

export default Subscribe;