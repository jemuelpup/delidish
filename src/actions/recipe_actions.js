export const GET_RECIPE_LIST = 'GET_RECIPE_LIST';

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

export default function getRecipeList(){
	console.log("testing the actions")
	return {
		type: GET_RECIPE_LIST,
		payload: sampleResponse
	}
}