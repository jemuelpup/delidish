import { combineReducers } from 'redux'
import WeatherReducer from './reducer_weather'
import RecipeReducer from './reducer_recipe'

const rootReducer = combineReducers({
	weather: WeatherReducer,
	recipes: RecipeReducer
})

export default rootReducer;