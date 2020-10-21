export const LIKE_RECIPES = 'LIKE_RECIPES';

export default function likeRecipes(recipeID){
	console.log("testing the actions")
	return {
		type: LIKE_RECIPES,
		payload: { recipeID }
	}
}