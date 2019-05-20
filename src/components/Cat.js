import React, { Component } from 'react'

class Cat extends Component {
  render() {
    return (
      <div className="outer-image">
        <img className="image-area" src={this.props.src} />
        <section className="caption">
          <p>{this.props.number} </p>
          <div className="name-pic">
            <p>
              {' '}
              the <em>{this.props.name} </em> by{' '}
            </p>{' '}
            <img src={this.props.img} />
          </div>{' '}
        </section>{' '}
      </div>
    )
  }
}

export default Cat
