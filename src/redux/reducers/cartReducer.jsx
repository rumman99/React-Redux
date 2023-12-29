import { ADD_TO_CART, Remove_FROM_CART } from "../actions/cartAction/cartAction"

const initialState={cart:[], product:[{name: "Laptop", id: 1},
{name: "Mobile", id: 2},
{name: "Tablet", id: 3}]}

const cartReducer=(state = initialState, action)=>{
    switch(action.type){
        case ADD_TO_CART:
            return {...state, cart:[...state.cart, action.id]};
        case Remove_FROM_CART:
            return {cart: state.cart.filter(item=> item.id !== action.id)}; //need to be recheck//
        default:
            return state;
    }
}

export default cartReducer;