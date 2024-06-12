import {buy_book} from './BookTypes'

const initialState = {
    NumOfBook:25
}

const BookReducer = (state = initialState  , action) =>{
    switch(action.type){
        case buy_book:
            return{
                ...state,
                NumOfBook:state.NumOfBook -1
            }
        default :
           return state    
    }
}

export default BookReducer