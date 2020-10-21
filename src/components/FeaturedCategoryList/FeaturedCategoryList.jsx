import React, {PureComponent} from 'react';
import './FeaturedCategoryList.scss';

class FeaturedCategoryList extends PureComponent{
  constructor(props){
    super(props);
    this.state = {
      dailyMeals: [
        {
          id: 1,
          name: 'Breakfast',
          image: process.env.PUBLIC_URL+'assets/images/dessert.jpg'
        },
        {
          id: 2,
          name: 'Lunch',
          image: process.env.PUBLIC_URL+'assets/images/dessert.jpg'
        },
        {
          id: 3,
          name: 'Snacks',
          image: process.env.PUBLIC_URL+'assets/images/dessert.jpg'
        },
        {
          id: 4,
          name: 'Dinner',
          image: process.env.PUBLIC_URL+'assets/images/dessert.jpg'
        }
      ]
    }
  }
  mealTime = mealTime => (
    <li key={mealTime.id}>
      <div className="mealTime">
        <img src={mealTime.image} alt={mealTime.name}/>
        <p className="mealName">{mealTime.name}</p>
      </div>
    </li>
  );
  render(){
    return (
      <ul  className='featuredCategoryList'>
        {this.state.dailyMeals.map(meal=>this.mealTime(meal))}
      </ul>
    )
  }
}

export default FeaturedCategoryList;