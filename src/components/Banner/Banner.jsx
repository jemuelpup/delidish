import React, {Component} from 'react';
import './Banner.scss'

class Banner extends Component{
  constructor(props){
    super(props);
    this.state = {
      
    }
  }
  render(){
    const image = this.props.image;
    return (
      <div className='banner'>
        <div className="bannerTitleContainer">
          <div className="bannerImage">
            <img src={image.src} alt={image.alt} />
          </div>
          <div className="wrapper bannerContent">
            <div className="wrapInner">
              {this.props.children}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Banner