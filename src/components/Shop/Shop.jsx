import React from 'react';
import Product from '../Product/Product';
import { addToCart } from '../../redux/actions/cartAction/cartAction';
import { connect } from 'react-redux';

const Shop = (props) => {
    const {products}= props;
    console.log(props)
    return (
        <div>
            {products.map(pd => <Product addToCart={addToCart} key={pd.id} product={pd}></Product>)}
        </div>
    );
};

const mapState= (state)=>{
    return {
    cart: state.cart,
    products: state.products
    }
}

const mapDispatch={
    addToCart: addToCart
}

export default connect(mapState, mapDispatch)(Shop);