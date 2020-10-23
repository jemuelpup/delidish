import { LIKE_RECIPES } from '../actions/card_actions';
import { GET_RECIPE_LIST } from '../actions/recipe_actions';

const INITIAL_STATE = {
  all: [],
  post: null
};

const likeMockup = (state, recipeID) => {
  console.log("testing like")
  if(state.all.length){
    let i = state.all.findIndex(e=>e.id === recipeID)
    state.all[i].likes++;
  }
  console.log(state)
  return state
}

export default function(state = INITIAL_STATE, action){
  switch(action.type) {
    case LIKE_RECIPES:
      return {
        ...state,
        ...likeMockup(state,action.payload.recipeID)
      }
      
    case GET_RECIPE_LIST:
      return {
        ...state,
        all: action.payload
      }
    
    default:
      return state;
  }
}