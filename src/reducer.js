export const initialState = {
  basket: [],
  user: null
}

export const getBasketTotal = (basket) => basket?.reduce((acc, current) => acc + current.price, 0);

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case 'ADD_TO_BASKET':
      return {
        ...state,
        basket: [...state.basket, action.item]
      }
    case 'REMOVE_FROM_BASKET':
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
        );
        // a copy of the basket to modifiy
        let newBasket = [...state.basket];
        
        if (index >= 0) {
          newBasket.splice(index, 1);
        } else {
          console.warn('Cant remove product')
        }
        return {
          ...state,
          basket: newBasket
        }
    case 'SET_USER':
      return {
        ...state,
        user: action.user
      }
    default:
      return state;
  }
}

export default reducer;