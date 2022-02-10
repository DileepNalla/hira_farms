import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import queryString from 'query-string';


class Products extends Component {
    

    state = { products : [
        {id:1, name:"Product 1"},
        {id:2, name:"Product 2"},
        {id:3, name:"Product 3"}
    ] }
    render() { 
        return (
            <React.Fragment>
                <h1>Here are our Products</h1> 
              <ul>
              {this.state.products.map(product =>(
                   <p  key={product.id}>
                       <Link to= {`/products/${product.id}`}>{product.name}</Link>
                   </p>
               ) )}
              </ul>
            </React.Fragment>
            
            
            
            );
    }
}
export default Products;