import React from 'react';

const Product = (props) => {
    const {product, addToCart}= props;
    
    return (
        <div style={{border: '2px solid red', padding:'10px', margin: '10px'}}>
            <h5>Name: {product.name}</h5>
            <h5>Id: {product.id}</h5>
            <button onClick={()=>addToCart(product.id)}>Add to Cart?</button>
        </div>
    );
};

export default Product;