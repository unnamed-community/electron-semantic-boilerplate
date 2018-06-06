import React from 'react';
import {Button} from 'semantic-ui-react';
const shell = require('electron').shell;

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

  /*toggle = (item) => () => {
    switch (item) {
      case 'electron':
        this.setState({ tooltips: { electron: !this.state.tooltips.electron } })
        break;
      case 'react':
        this.setState({ tooltips: { react: !this.state.tooltips.react } })
        break;
      case 'reactstrap':
        this.setState({ tooltips: { reactstrap: !this.state.tooltips.reactstrap } })
        break;
      case 'reactIconsKit':
        this.setState({ tooltips: { reactIconsKit: !this.state.tooltips.reactIconsKit } })
        break;
    }
  }

  handleClick = (url) => () => {
    shell.openExternal(url);
  }*/

  render() {
    return (
      <div>
        <Button>Ejemplito</Button>
      </div>
    );
  }
}