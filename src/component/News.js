import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  render() {
    return (
      <div className='container my-3'>
        <h1>NewsPenguin- Top Headlines</h1>
        <div className="row">
          {/* due to class col-ms-3 , newsitem appear in a row which contain 3 items. */}
          <div className="col-md-3">
            <NewsItem title="Cricekt" description="India leads by 2-1 in SA series of OneDay"/>
          </div>
          <div className="col-md-3">
            <NewsItem title="Cricekt" description="India leads by 2-1 in SA series of OneDay"/>
          </div>
          <div className="col-md-3">
            <NewsItem title="Cricekt" description="India leads by 2-1 in SA series of OneDay"/>
          </div>
        </div>
        {/* <NewsItem title="Cricekt" description="India leads by 2-1 in SA series of OneDay"/>
        <NewsItem title="Cricekt" description="India leads by 2-1 in SA series of OneDay"/>
        <NewsItem title="Cricekt" description="India leads by 2-1 in SA series of OneDay"/>
        <NewsItem/>
        <NewsItem/>
        <NewsItem/> */}
        {/* If you do not pass these then it will nothing render there, it will simply leave the space. */}
      </div>
    )
  }
}

export default News




