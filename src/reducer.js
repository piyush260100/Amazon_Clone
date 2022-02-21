export const initialState = {
    myCart: [],
    user:null,
};

//Selector : use to check the cart and add a subtotal of all items in the cart
export const getCartTotal = (myCart) =>
    myCart?.reduce((amount, item) => item.price + amount, 0);


const reducer = (state, action) => {

    console.log(action)
    switch (action.type) {
        case "ADD_TO_CART":
            return {
                ...state,
                myCart: [...state.myCart, action.item],
            };

        case "REMOVE_FROM_CART":
            const index = state.myCart.findIndex(
                (myCartItem) => myCartItem.id === action.id
            );
            let newCart = [...state.myCart ];

            if (index >= 0) {
                newCart.splice(index, 1);
            }

            else {
                console.warn(
                    `Can't remove product (id : ${action.id} as its not in the cart)`
                )
            }

            return {
                ...state,
                myCart: newCart
            }
    
        case "SET_USER":
            return{
                ...state,
                user:action.user
            }

        case "EMPTY_USER":
            return{
                ...state,
                myCart:[],
            }

        default:
            return state;
    }

};

export default reducer;