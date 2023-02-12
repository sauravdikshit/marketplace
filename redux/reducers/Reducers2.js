import {ADD_TO_WISHLIST,REMOVE_FROM_WISHLIST } from "../ActionTypes";

const Reducers2 =(state =[],action)=>{
      switch (action.type) {
            case ADD_TO_WISHLIST:
                  return[...state, action.payload]
                  
            case REMOVE_FROM_WISHLIST:
                  const deletedArrayWish =state.filter((item,index)=>{
                        return index !== action.payload
                  })
                  return deletedArrayWish
      
            default:
                  return state
      }
}
export default Reducers2