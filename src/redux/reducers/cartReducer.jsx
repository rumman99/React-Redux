import { ADD_TO_CART, Remove_FROM_CART } from "../actions/cartAction/cartAction"

const initialState={cart:[], products:[{name: "Laptop", id: 1},
{name: "Mobile", id: 2},
{name: "Tablet", id: 3}]}

const cartReducer=(state = initialState, action)=>{
    switch(action.type){
        case ADD_TO_CART:{
            const newId= action.id;
            const newCart= [...state.cart, newId];
            return {products: state.products, cart: newCart};
        }
        case Remove_FROM_CART:{
            return {cart: state.cart.filter(item=> item !== action.id)}; //need to be recheck//
        }
        default:
            return state;
    }
}

export default cartReducer;