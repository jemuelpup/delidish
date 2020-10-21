import React, {Component} from 'react';
import { connect } from 'react-redux';
import Card from '../Card/Card';
import './Newsfeed.scss';
import getRecipes from '../../actions/recipe_actions';


class NewsFeed extends Component{
  constructor(props){
    super(props);
    this.state = {
      isLoading: true,
      recipeList: this.props.recipes.all
    }
    this.props.getRecipes();
  }

  newsFeedList = () => (
    this.props.recipes.all.map(r=>(
      <div key={r.id}><Card cardDetails={r} /></div>
    ))
  )
  componentDidUpdate(prevProps) {
    if(prevProps.recipes.all !== this.props.recipes.all) {
      this.setState({recipeList: this.props.recipes.all});
    }
  }

  render(){
    if(this.props.recipes.all.length){
      return (
        <div className='newsFeedList'>
          {this.newsFeedList()}
        </div>
      )
    } else {
      return (<p>Loading news feed</p>);
    }
  }
}

function mapStateToProps({ recipes }){
  return { recipes }
}


export default connect(mapStateToProps,{getRecipes})(NewsFeed)