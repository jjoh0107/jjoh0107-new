import React, { Component } from 'react';

class About extends Component {
  render() {
    return (
        <div>
          <h1>About</h1>
          <h2>{this.props.route.title}</h2>
        </div>
    );
  }
}

export default About;
