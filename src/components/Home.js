import { shell } from 'electron';
import React from 'react';
import { Grid, Icon, Image, Popup } from 'semantic-ui-react';
import electronImg from '../images/icons/electron.png';
import reactImg from '../images/icons/react.png';
import semanticImg from '../images/icons/semantic.png';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const preloader = document.querySelector('#preloader');
    preloader.parentNode.removeChild(preloader);
  }

  openUrl = url => () => shell.openExternal(url);

  render() {
    return (
      <Grid>
        <Grid.Row>
          <Grid.Column textAlign="center">
            <h1 className="space-top">{__('title')}</h1>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column textAlign="center">
            <Icon name="desktop" size="massive" color="grey" />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column textAlign="center">
            <p>{__('description')}</p>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row centered columns={5}>
          <Grid.Column>
            <Popup
              trigger={
                <Image
                  src={electronImg}
                  className="cursor-pointer"
                  onClick={this.openUrl('https://electronjs.org/')}
                />
              }
              content="ElectronJS"
              position="bottom center"
              inverted
            />
          </Grid.Column>
          <Grid.Column>
            <Popup
              trigger={
                <Image
                  src={reactImg}
                  className="cursor-pointer"
                  onClick={this.openUrl('https://reactjs.org/')}
                />
              }
              content="ReactJS"
              position="bottom center"
              inverted
            />
          </Grid.Column>
          <Grid.Column>
            <Popup
              trigger={
                <Image
                  src={semanticImg}
                  className="cursor-pointer"
                  onClick={this.openUrl('https://react.semantic-ui.com')}
                />
              }
              content="SemanticUI"
              position="bottom center"
              inverted
            />
          </Grid.Column>
        </Grid.Row>
        <div className="footer-bar">
          <span
            onClick={this.openUrl(
              'https://github.com/unnamed-community/electron-semantic-boilerplate'
            )}
          >
            <Icon name="github" /> {__('view_on_github')}
          </span>
          <span
            onClick={this.openUrl(
              'https://github.com/unnamed-community/electron-semantic-boilerplate/issues'
            )}
          >
            <Icon name="bug" /> {__('report_a_bug')}
          </span>
          <span
            onClick={this.openUrl(
              'https://github.com/unnamed-community/electron-semantic-boilerplate/graphs/contributors'
            )}
          >
            <Icon name="users" /> {__('credits')}
          </span>
        </div>
      </Grid>
    );
  }
}
