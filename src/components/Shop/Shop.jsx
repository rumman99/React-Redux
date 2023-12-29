import React from 'react';
import Product from '../Product/Product';
import { addToCart } from '../../redux/actions/cartAction/cartAction';
import { connect } from 'react-redux';

const Shop = (props) => {
    const product=[];
    console.log(props)
    return (
        <div>
            {product.map(pd => <Product key={pd.id} product={pd}></Product>)}
        </div>
    );
};

const mapState= (state)=>{
    cart: state.cart;
    product: state.product;
}

const mapDispatch=()=>{
    addToCart: addToCart;
}

export default connect(mapState, mapDispatch)(Shop);