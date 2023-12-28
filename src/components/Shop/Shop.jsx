import React from 'react';
import Product from '../Product/Product';

const Shop = () => {
    const products=[
        {name: "Laptop", id: 1},
        {name: "Mobile", id: 2},
        {name: "Tablet", id: 3}
    ]
    return (
        <div>
            {products.map(pd => <Product key={pd.id} product={pd}></Product>)}
        </div>
    );
};

export default Shop;