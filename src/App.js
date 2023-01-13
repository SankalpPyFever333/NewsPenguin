import './App.css';
// write rcc to import the class based component.
import React, { Component } from 'react'
import NavBAr from './component/NavBAr';
import News from './component/News';
import NewsItem from './component/NewsItem';

export default class App extends Component {
  // render() method compile the JSX and then ernder the HTML on the screen.
  render() {
    return (
      <div>
        <NavBAr/>
        <News/>
        <NewsItem title="Sports" description="Pant and surya gets 150 parternership"/>
      </div>
    )
  }
}

