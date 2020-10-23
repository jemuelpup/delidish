export const GET_RECIPE_LIST = 'GET_RECIPE_LIST';
export const GET_RECIPE_DETAILS = 'GET_RECIPE_DETAILS';

let sampleResponse = [
  {
    id: 1,
    name:'Adobo',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa quia at dolorum qui corrupti eveniet omnis totam perferendis magni, exercitationem est! Neque beatae eaque earum cum omnis repellat iste eum!',
    likes: 1
  },
  {
    id: 2,
    name:'Pakbet',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa quia at dolorum qui corrupti eveniet omnis totam perferendis magni, exercitationem est! Neque beatae eaque earum cum omnis repellat iste eum!',
    likes: 0
  },
  {
    id: 3,
    name:'Chicken Curry',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa quia at dolorum qui corrupti eveniet omnis totam perferendis magni, exercitationem est! Neque beatae eaque earum cum omnis repellat iste eum!',
    likes: 0
  },
  {
    id: 4,
    name:'Lumpia',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa quia at dolorum qui corrupti eveniet omnis totam perferendis magni, exercitationem est! Neque beatae eaque earum cum omnis repellat iste eum!',
    likes: 0
  },
];

let recipeDetails = {
  ingredients:[
      {id:"1", name:"Chicken", amount:"1/4 kilo",},
      {id:"2", name:"Soysouce", amount:"1/2 Cup",},
      {id:"3", name:"Vinegar", amount:"2tbsp",},
      {id:"4", name:"Pepper", amount:"1tsp",},
      {id:"5", name:"Laurel Leaves", amount:"4pcs",},
  ],
  procedures:[
      {id:"1", instruction: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis, odio. Porro error quae architecto molestias debitis similique consequatur qui eveniet? Rerum voluptates mollitia ipsam minus numquam, temporibus excepturi! Autem, dolore."},
      {id:"2", instruction: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis, odio. Porro error quae architecto molestias debitis similique consequatur qui eveniet? Rerum voluptates mollitia ipsam minus numquam, temporibus excepturi! Autem, dolore."},
      {id:"3", instruction: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis, odio. Porro error quae architecto molestias debitis similique consequatur qui eveniet? Rerum voluptates mollitia ipsam minus numquam, temporibus excepturi! Autem, dolore."},
      {id:"4", instruction: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis, odio. Porro error quae architecto molestias debitis similique consequatur qui eveniet? Rerum voluptates mollitia ipsam minus numquam, temporibus excepturi! Autem, dolore."},
      {id:"5", instruction: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis, odio. Porro error quae architecto molestias debitis similique consequatur qui eveniet? Rerum voluptates mollitia ipsam minus numquam, temporibus excepturi! Autem, dolore."}
  ]
}

export function getRecipeDetails(){
	console.log("testing the recipe details here")
	return {
		type: GET_RECIPE_DETAILS,
		payload: recipeDetails
	}
}

export default function getRecipeList(){
	console.log("testing the actions")
	return {
		type: GET_RECIPE_LIST,
		payload: sampleResponse
	}
}