import React from 'react';

const Product = ({product}) => {
    return (
        <div style={{border: '2px solid red', padding:'10px', margin: '10px'}}>
            <h5>Name: {product.name}</h5>
            <h5>Id: {product.id}</h5>
            <button>Add to Cart?</button>
        </div>
    );
};

export default Product;