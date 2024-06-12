const redux = require('redux')
const createStore = redux.createStore

// constant

const BUY_ICECREAM = "BUY_ICECREAM"

//Action

const buy_icecream = () =>{
        return{
            type:BUY_ICECREAM,
            info:'First Redux Action'
        }
}

// initialize

const initialState = {
    numOFIcecream:10
}

//Reducer

const IcecreameRducer = (state = initialState , action) =>{
    switch(action.type){
        case BUY_ICECREAM:
            return{
                ...state,
                numOFIcecream:state.numOFIcecream -1
            }
            default:
                return state
    }
}

const store = createStore(IcecreameRducer)

console.log('initialState' , store.getState())

const unsubscribe = store.subscribe(() => console.log('Updated State' , store.getState()))

store.dispatch(buy_icecream())
store.dispatch(buy_icecream())

unsubscribe()