import React, { Component } from 'react';

export default class CardFront extends Component {

  render() {
    const imgSrc = this.props.posterSrc
    return (
      <div className="card-front" style={{backgroundImage: `url(${imgSrc})`}} alt={this.props.poster}>
      </div>
    )
  }
}
