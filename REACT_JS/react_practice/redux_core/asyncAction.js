const redux = require('redux')
const thunkMiddleware = require('redux-thunk').thunk
const axios = require('axios')
const createStore = redux.createStore
const applyMiddleware = redux.applyMiddleware

const initialSate={
    loding:false,
    user:[],
    error:''
}

const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST'
const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS'
const FETCH_USERS_FAILED = 'FETCH_USERS_FAILED'

const fetchUserRequest = () =>{
     return{
        type:FETCH_USERS_REQUEST
     }
}

const fetchUserSuccess = (users) =>{
    return{
        type:FETCH_USERS_SUCCESS,
        payload:users
    }
}

const fetchUserFailed = (error) =>{
    return{
        type:FETCH_USERS_FAILED,
        payload:error
    }
}

const fetchUsers = () =>{
    return function(dispatch){
        dispatch(fetchUserRequest())
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            const users = response.data.map(user => user.name)
            dispatch(fetchUserSuccess(users))
        })
        .catch(error => {
            dispatch(fetchUserFailed(error.message))
        })
    }
}

const reducer = (state = initialSate , action)=>{
    switch(action.type){
        case FETCH_USERS_REQUEST:
            return{
                ...state,
                loading:true
            }

        case FETCH_USERS_SUCCESS:
            return{
                loading:false,
                users:action.payload,
                error:''
            }  
            
        case FETCH_USERS_FAILED :
            return{
                loading:false,
                users:[],
                error:action.payload,
            }  
            
    }
}

const store = createStore(reducer , applyMiddleware(thunkMiddleware))

store.subscribe(() => console.log(store.getState()))

store.dispatch(fetchUsers())

// console.log(redux);