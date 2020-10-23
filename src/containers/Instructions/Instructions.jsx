import React, {Component} from 'react';
import { connect } from 'react-redux';
import './Instructions.scss';
import { getRecipeDetails } from '../../actions/recipe_actions';

class Instructions extends Component{
    constructor(props){
		super(props);
		this.props.getRecipeDetails();
	}
    renderIngredients = details => {
        return details.ingredients ? 
            details.ingredients.map(ingredient=><li key={ingredient.id}><span className="name">{ingredient.name}</span><span className="amount">{ingredient.amount}</span></li>)
        : "";
    }
    renderProcedure = details => {
        return details.procedures ? 
            details.procedures.map((procedure, index)=>
                <li key={procedure.id}>
                    <span className="step">Step {index}</span>
                    <p>{ procedure.instruction }</p>
                </li>
            )
        : "";
    }
    render(){
        return (
            <div className="wrapper">
                <div className="wrapInner">
                    <div className="instructionContainer">
                        <div className='ingredientsContainer instructionContent'>
                            <h2 className='instruction-header sectionTitle'>Ingredients</h2>
                            <ul>
                                {this.renderIngredients(this.props.recipeDetails)}
                            </ul>
                        </div>
                        <div className='proceduresContainer instructionContent'>
                            <h2 className='instruction-header sectionTitle'>Procedures</h2>
                            <ul>
                                {this.renderProcedure(this.props.recipeDetails)}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
function mapStateToProps({recipeDetails}){
	return { recipeDetails }
}

export default connect(mapStateToProps,{getRecipeDetails})(Instructions)
