import React from 'react';
import { Component } from 'react';
import Style from './header.module.scss';
import caddy from '../../assets/images/caddy.png';
import screen from '../../assets/images/screen.png';

export default class Header extends Component{
  render(){
    return(
      <header className={ Style.header }>
        <div className={ Style.headerContent }> 
          <div className={ Style.headerImg }>
            <img src={ caddy } alt="caddy" className={ Style.caddyImg } />
            <img src={ screen } alt="screen" className={ Style.screenImg } />
          </div>
        </div>  
      </header>    
    )
  }
}