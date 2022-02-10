import React, { Component } from 'react';
class ProductDetails extends Component {

    handleSave =() =>{
       this.props.history.replace('/products')
    }
    state = {  }
    render() { 
        return ( <div>
            <h1>Product Details - {this.props.match.params.id}</h1>
            <button className="btn btn-primary" onClick={this.handleSave}>Save</button>
        </div> );
    }
}
 
export default ProductDetails;