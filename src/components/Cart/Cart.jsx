import React from 'react';
import { connect } from 'react-redux';
import { removeFromCart } from '../../redux/actions/cartAction/cartAction';

const Cart = (props) => {
    console.log(props);
    const {cart}= props
    return (
        <div>
            <h1>This is Cart</h1>
            <h1>{cart}</h1>
        </div>
    );
};

const mapState= state =>{
    return {
        cart: state.cart
    }
}

const mapDispatch={
    removeFromCart: removeFromCart
}

export default connect(mapState, mapDispatch)(Cart);