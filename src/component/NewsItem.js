// type rce for class based component with export default.
import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let {title,description}= this.props; //Here we are doing array destructuring, means this.props is a object, then first one is for title and second one is for decription.
    //During calling this component, you can pass title and description to it.
    return (
      <div>
        {/* <div className="card" style="width: 18rem;"> */}
        {/* We are making inline style as a javascript object. It is in Double curly braces bcoz JS inside the {} and object made in {} */}

        <div className="card" style={{ width: "18rem" }}>
          <img src="..." className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
