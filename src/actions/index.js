import axios from 'axios';

const weatherLink = `http://api.openweathermap.org/data/2.5/forecast?appid=${process.env.COUNTRY}`;
const countryCode = "PH";
// let linkName = `${weatherLink}?q=philippines&appid=${weatherapikey}`

export const FETCH_WEATHER = 'FETCH_WEATHER';
export const FETCH_RECIPES = 'FETCH_RECIPES';
export const LIKE_RECIPES = 'LIKE_RECIPES';

/*
	Actions returns a function that return object with:
	"type" and ""
*/

export function likeRecipes(recipeID){
	console.log("testing the actions")
	return {
		type: LIKE_RECIPES,
		payload: []
	}
}

export function fetchRecipes(){
	return {
		type: FETCH_RECIPES,
		payload: []
	}
}

export default function fetchWeather(city){
	const weatherURL = `${weatherLink}&q=${city},${countryCode}`;
	const request = axios.get(weatherURL);

	return {
		type: FETCH_WEATHER,
		// payload: request
		payload: request
	}
}