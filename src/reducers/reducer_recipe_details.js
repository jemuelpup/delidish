import { GET_RECIPE_DETAILS } from '../actions/recipe_actions';

const INITIAL_STATE = {
  instructions: {}
};

export default function(state = INITIAL_STATE, action){

  switch(action.type) {
    case GET_RECIPE_DETAILS:
      return {
        ...state,
        ...action.payload
      }
    
    default:
      return state;
  }
}