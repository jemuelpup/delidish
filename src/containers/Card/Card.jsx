import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import likeRecipes from '../../actions/card_actions';
import './Card.scss';


class Card extends Component{
  constructor(props){
    super(props);
    this.state={
      likes: this.props.cardDetails.likes
    }
    this.onLike = this.onLike.bind(this);
  }
  onLike(likes){
    // call function here to call the like increment to the api
    console.log(likes);
    this.setState({ likes })
  }
  render(){
    let recipe = this.props.cardDetails;
    return (
      <div className='card'>
        <div className="cardImageContainer">
          <img src={process.env.PUBLIC_URL+'assets/images/pumpkin-pad-thai-recipe.jpg'} alt=""/>
        </div>
        <div className="descriptionContainer">
          <p className="title">{recipe.name}</p>
          <p className="description">{recipe.description}</p>
          <div className="reatingContainer">
            {[...Array(5)].map((e, i) => {
              return (
                <span key={i}>*</span>
              )
            })
            }
          </div>
          <div className="author-container">
            <div className="autor-image">
              <img src={process.env.PUBLIC_URL+'assets/images/Gordon.jpg'} alt=""/>
            </div>
            <p className="authorName">By <strong>Gordon Ramsey</strong></p>
          </div>
        </div>
        <div className="likeAndShareContainer">
          <span className="button" onClick={()=>this.onLike(this.state.likes+1)}>
            Like{this.state.likes ? `(${this.state.likes})` : ''}
          </span>
          <a className="button" href="/">Save</a>
          <a className="button" href="/">Share</a>
        </div>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({likeRecipes}, dispatch);
}

export default connect(null,mapDispatchToProps)(Card)