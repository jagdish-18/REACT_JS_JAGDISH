// ReduxMiddleware

const { default: logger } = require("redux-logger")

const {applyMiddleware} = require('redux')
const redux = require('redux')
const reduxLogger = require('redux-logger')

const createStore = redux.createStore
const Logger = reduxLogger.createLogger()

// constant

const BUY_ICECREAM = 'BUY_ICECREAM'

// Action

const buy_icecream = () =>{
    return{
        type:BUY_ICECREAM
    }
}

// initialSate

const initialSate ={
    numOfIcecream:20
}

// Reducer

const reducer = (state = initialSate , action) =>{
       switch(action.type){
        case BUY_ICECREAM :
            return{
                ...state,
                numOfIcecream:state.numOfIcecream -1
            }
       }
}

const store = createStore(reducer , applyMiddleware(logger))

console.log('initialState is ' , store.getState());

// store.subscribe(() => console.log('updatedState is ', store.getState()))
store.subscribe(() => {})

store.dispatch(buy_icecream())
store.dispatch(buy_icecream())