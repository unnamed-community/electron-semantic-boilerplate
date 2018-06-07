import React from 'react'

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tooltips: {
        electron: false,
        react: false,
        reactstrap: false,
        reactIconsKit: false
      }
    }
  }

  render() {
    return (
      <div>
        <h1>Hello world!!!</h1>
      </div>
    );
  }
}