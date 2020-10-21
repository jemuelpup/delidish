import React, {Component} from 'react';
import { connect } from 'react-redux';
import Card from '../Card/Card';
import getRecipes from '../../actions/recipe_actions';
import './Card-list.scss';


class CardList extends Component{
  constructor(props){
		super(props);
		this.props.getRecipes();
	}
  recipeList = () => (
    this.props.recipes.all.map(r=>(
      <li key={r.id}><Card cardDetails={r} /></li>
    ))
  )
  
  render(){
    if(this.props.recipes.all.length){
      return (
        <ul className='cardList'>
          {this.recipeList()}
        </ul>
      )
    } else {
      return (<p>Loading recipes</p>);
    }
  }
}

function mapStateToProps({recipes}){
	return { recipes }
}

export default connect(mapStateToProps,{getRecipes})(CardList)