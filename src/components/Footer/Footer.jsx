import React, {PureComponent} from 'react';
import './Footer.scss'

class Footer extends PureComponent{
  render(){
    return (
      <div className='footerContainer'>
        <div className="wrapper">
          <div className="wrapInner">
            <p>Copy Right 2020</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Footer