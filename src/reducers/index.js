import { combineReducers } from 'redux'
import WeatherReducer from './reducer_weather'
import RecipeReducer from './reducer_recipe'
import RecipeDetails from './reducer_recipe_details'

const rootReducer = combineReducers({
	weather: WeatherReducer,
	recipes: RecipeReducer,
	recipeDetails: RecipeDetails
})

export default rootReducer;