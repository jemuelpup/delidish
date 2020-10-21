import React, {Component} from 'react';
import SearchBar from '../../containers/searchbar/searchbar';

import './header.scss';
import {
  Link
} from "react-router-dom";

export default class Header extends Component{
  render(){
    return (
      <header className="header">
        <div className="wrapInner">
          <p className="logoContainer">Delidish</p>
            <SearchBar />
            <ul className="navigationList">
              <li>
                <Link to="/profile">PROFILE</Link>
              </li>
              <li>
                <Link to="/recipe">RECIPE</Link>
              </li>
              <li>
                <Link to="/newsfeed">NEWSFEED</Link>
              </li>
              <li>
                <Link to="/">HOME</Link>
              </li>
            </ul>
        </div>
      </header>
    )
  }
}