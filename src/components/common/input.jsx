import React from 'react';
//we don't need a state here as we are working with controlled components
//we can create a functional component

const Input = ({ name,label,error,...rest }) => {
    return (
        <div className="form-group row">
            <label className="col-sm-2 col-form-label"  htmlFor={name}>{label}</label>
            <div className="col-sm-12">
                <input
                    {...rest}
                    name={name}
                    id={name}
                   
                    // ref={this.username} 
                    className="form-control" />
            </div>
            {error && <div className="alert alert-danger ">{error}</div>}
        </div>

    );
}

export default Input;