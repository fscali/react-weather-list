import { FETCH_WEATHER } from '../actions/index'
export default function(state = [], action) {

    // The nice thing is that redux-promise, the middleware, sees the payload that is part of the action that is a Promise and 
    // it waits for the promise to resolve and then builds another action and gives it to this action.
    // Indeed the following log will show a request, not a promise!
    console.log('action received: ', action);

    switch (action.type){
        case FETCH_WEATHER:
            // return state.push([ action.payload.data ]); NO!! we cannot mutate the state..we must return a new instance!
            
            //return state.concat([action.payload.data]); //Ok
            return [action.payload.data, ...state]; //ES6, but the new entry goes to the beginning

    }
    return state;
}