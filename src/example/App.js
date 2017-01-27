import React from 'react';

import Button from './../components/Button';
import Block from './../components/Block';
import Input from './../components/Input';
import Icon from './../components/Icon';
import Loading from './../components/Loading';
import Pill from './../components/Pill';
import Tabs from './../components/Tabs';
import settings from './../settings';

import '../../styles/dist/default/index.css';

settings.setIcons({
  github: <svg height="24" width="24" viewBox="0 0 16 16"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z" /></svg>
});

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tabValue: 'profile'
    };
  }

  getTabOptions() {
    return [
      {
        title: 'Profile',
        value: 'profile'
      }, {
        title: 'Followers',
        value: 'followers',
        count: 151,
        countColor: 'primary'
      }, {
        title: 'Following',
        value: 'following',
        count: 1
      }
    ];
  }

  onChangeTab(value) {
    this.setState({
      tabValue: value
    });
  }

  render() {
    return (
      <div className="app">
        <Block>
          <h1>React Modular UI</h1>
          <h2>Default buttons</h2>
          <Block layout="horizontal" align="center" spaceHorizontal="8">
            <Block layout="vertical" align="center" spaceVertical="8" padding="8">
              <Button size="24" onClick={this.onClick}>default</Button>
              <Button size="32">default</Button>
              <Button size="48">default</Button>
              <Button size="48" disabled>default</Button>
            </Block>
            <Block layout="vertical" align="center" spaceVertical="8" padding="8">
              <Button size="24" color="primary">primary</Button>
              <Button size="32" color="primary">primary</Button>
              <Button size="48" color="primary">primary</Button>
              <Button size="48" color="primary" disabled>primary</Button>
            </Block>
            <Block layout="vertical" align="center" spaceVertical="8" padding="8">
              <Button size="24" color="success">success</Button>
              <Button size="32" color="success">success</Button>
              <Button size="48" color="success">success</Button>
              <Button size="48" color="success" disabled>success</Button>
            </Block>
            <Block layout="vertical" align="center" spaceVertical="8" padding="8">
              <Button size="24" color="danger">danger</Button>
              <Button size="32" color="danger">danger</Button>
              <Button size="48" color="danger">danger</Button>
              <Button size="48" color="danger" disabled>danger</Button>
            </Block>
            <div style={{backgroundColor:'#777777'}}>
              <Block layout="vertical" align="center" spaceVertical="8" padding="8">
                  <Button size="24" color="light">light</Button>
                  <Button size="32" color="light">light</Button>
                  <Button size="48" color="light">light</Button>
                  <Button size="48" color="light" disabled>light</Button>
              </Block>
            </div>
          </Block>
          <h2>Flat buttons</h2>
          <Block layout="horizontal" align="center" spaceHorizontal="8">
            <Block layout="vertical" align="center" spaceVertical="8" padding="8">
              <Button size="24" view="flat">default</Button>
              <Button size="32" view="flat">default</Button>
              <Button size="48" view="flat">default</Button>
              <Button size="48" view="flat" disabled>default</Button>
            </Block>
            <Block layout="vertical" align="center" spaceVertical="8" padding="8">
              <Button size="24" color="primary" view="flat">primary</Button>
              <Button size="32" color="primary" view="flat">primary</Button>
              <Button size="48" color="primary" view="flat">primary</Button>
              <Button size="48" color="primary" view="flat" disabled>primary</Button>
            </Block>
            <Block layout="vertical" align="center" spaceVertical="8" padding="8">
              <Button size="24" color="success" view="flat">success</Button>
              <Button size="32" color="success" view="flat">success</Button>
              <Button size="48" color="success" view="flat">success</Button>
              <Button size="48" color="success" view="flat" disabled>success</Button>
            </Block>
            <Block layout="vertical" align="center" spaceVertical="8" padding="8">
              <Button size="24" color="danger" view="flat">danger</Button>
              <Button size="32" color="danger" view="flat">danger</Button>
              <Button size="48" color="danger" view="flat">danger</Button>
              <Button size="48" color="danger" view="flat" disabled>danger</Button>
            </Block>
            <div style={{backgroundColor:'#777777'}}>
              <Block layout="vertical" align="center" spaceVertical="8" padding="8">
                <Button size="24" color="light" view="flat">light</Button>
                <Button size="32" color="light" view="flat">light</Button>
                <Button size="48" color="light" view="flat">light</Button>
                <Button size="48" color="light" view="flat" disabled>light</Button>
              </Block>
            </div>
          </Block>
          <h2>Glass buttons</h2>
          <div style={{backgroundColor:'#777777'}}>
            <Block layout="horizontal" align="center" spaceHorizontal="8">
              <Block layout="vertical" align="center" spaceVertical="8" padding="8">
                <Button size="24" view="glass">default</Button>
                <Button size="32" view="glass">default</Button>
                <Button size="48" view="glass">default</Button>
                <Button size="48" view="glass" disabled>default</Button>
              </Block>
              <Block layout="vertical" align="center" spaceVertical="8" padding="8">
                <Button size="24" color="primary" view="glass">primary</Button>
                <Button size="32" color="primary" view="glass">primary</Button>
                <Button size="48" color="primary" view="glass">primary</Button>
                <Button size="48" color="primary" view="glass" disabled>primary</Button>
              </Block>
              <Block layout="vertical" align="center" spaceVertical="8" padding="8">
                <Button size="24" color="success" view="glass">success</Button>
                <Button size="32" color="success" view="glass">success</Button>
                <Button size="48" color="success" view="glass">success</Button>
                <Button size="48" color="success" view="glass" disabled>success</Button>
              </Block>
              <Block layout="vertical" align="center" spaceVertical="8" padding="8">
                <Button size="24" color="danger" view="glass">danger</Button>
                <Button size="32" color="danger" view="glass">danger</Button>
                <Button size="48" color="danger" view="glass">danger</Button>
                <Button size="48" color="danger" view="glass" disabled>danger</Button>
              </Block>
              <Block layout="vertical" align="center" spaceVertical="8" padding="8">
                <Button size="24" color="light" view="glass">light</Button>
                <Button size="32" color="light" view="glass">light</Button>
                <Button size="48" color="light" view="glass">light</Button>
                <Button size="48" color="light" view="glass" disabled>light</Button>
              </Block>
            </Block>
          </div>
          <h2>Icons</h2>
          <Block layout="horizontal" align="center" spaceHorizontal="8">
            <Block layout="vertical" align="center" spaceVertical="8" padding="8">
              <Icon name="github" size="24" />
              <Icon name="github" size="32" />
              <Icon name="github" size="48" />
            </Block>
            <Block layout="vertical" align="center" spaceVertical="8" padding="8">
              <Icon name="github" size="24" color="primary" />
              <Icon name="github" size="32" color="primary" />
              <Icon name="github" size="48" color="primary" />
            </Block>
            <Block layout="vertical" align="center" spaceVertical="8" padding="8">
              <Icon name="github" size="24" color="success" />
              <Icon name="github" size="32" color="success" />
              <Icon name="github" size="48" color="success" />
            </Block>
            <Block layout="vertical" align="center" spaceVertical="8" padding="8">
              <Icon name="github" size="24" color="danger" />
              <Icon name="github" size="32" color="danger" />
              <Icon name="github" size="48" color="danger" />
            </Block>
            <div style={{backgroundColor:'#777777'}}>
              <Block layout="vertical" align="center" spaceVertical="8" padding="8">
                <Icon name="github" size="24" color="light" />
                <Icon name="github" size="32" color="light" />
                <Icon name="github" size="48" color="light" />
              </Block>
            </div>
          </Block>
          <h2>Buttons with icons</h2>
          <Block layout="horizontal" align="center" spaceHorizontal="8">
            <Block layout="vertical" align="center" spaceVertical="8" padding="8">
              <Button size="24">
                <Icon name="github" size="16" color="light" />
                <div>default</div>
              </Button>
              <Button size="32">
                <Icon name="github" size="24" color="light" />
                <div>default</div>
              </Button>
              <Button size="48">
                <Icon name="github" size="32" color="light" />
                <div>default</div>
              </Button>
              <Button size="48" disabled>
                <Icon name="github" size="32" color="light" />
                <div>default</div>
              </Button>
            </Block>
            <Block layout="vertical" align="center" spaceVertical="8" padding="8">
              <Button size="24" color="primary">
                <Icon name="github" size="16" color="light" />
                <div>primary</div>
              </Button>
              <Button size="32" color="primary">
                <Icon name="github" size="24" color="light" />
                <div>primary</div>
              </Button>
              <Button size="48" color="primary">
                <Icon name="github" size="32" color="light" />
                <div>primary</div>
              </Button>
              <Button size="48" color="primary" disabled>
                <Icon name="github" size="32" color="light" />
                <div>primary</div>
              </Button>
            </Block>
            <Block layout="vertical" align="center" spaceVertical="8" padding="8">
              <Button size="24" color="success">
                <Icon name="github" size="16" color="light" />
                <div>success</div>
              </Button>
              <Button size="32" color="success">
                <Icon name="github" size="24" color="light" />
                <div>success</div>
              </Button>
              <Button size="48" color="success">
                <Icon name="github" size="32" color="light" />
                <div>success</div>
              </Button>
              <Button size="48" color="success" disabled>
                <Icon name="github" size="32" color="light" />
                <div>success</div>
              </Button>
            </Block>
            <Block layout="vertical" align="center" spaceVertical="8" padding="8">
              <Button size="24" color="danger">
                <Icon name="github" size="16" />
                <div>danger</div>
              </Button>
              <Button size="32" color="danger">
                <Icon name="github" size="24" />
                <div>danger</div>
              </Button>
              <Button size="48" color="danger">
                <Icon name="github" size="32" />
                <div>danger</div>
              </Button>
              <Button size="48" color="danger" disabled>
                <Icon name="github" size="32" />
                <div>danger</div>
              </Button>
            </Block>
            <div style={{backgroundColor:'#777777'}}>
              <Block layout="vertical" align="center" spaceVertical="8" padding="8">
                <Button size="24" color="light">
                  <Icon name="github" size="16" />
                  <div>light</div>
                </Button>
                <Button size="32" color="light">
                  <Icon name="github" size="24" />
                  <div>light</div>
                </Button>
                <Button size="48" color="light">
                  <Icon name="github" size="32" />
                  <div>light</div>
                </Button>
                <Button size="48" color="light" disabled>
                  <Icon name="github" size="32" />
                  <div>light</div>
                </Button>
              </Block>
            </div>
          </Block>
          <h2>Inputs</h2>
          <Block spaceHorizontal="8">
            <Input label="Login" placeholder="Enter your login" />
          </Block>
          <h2>Loading</h2>
          <Block layout="horizontal" align="center" spaceHorizontal="8">
            <Block layout="vertical" align="center" spaceVertical="8" padding="8">
              <Loading size="16" />
              <Loading size="24" />
              <Loading size="32" />
              <Loading size="48" />
            </Block>
            <Block layout="vertical" align="center" spaceVertical="8" padding="8">
              <Loading size="16" color="primary" />
              <Loading size="24" color="primary" />
              <Loading size="32" color="primary" />
              <Loading size="48" color="primary" />
            </Block>
            <Block layout="vertical" align="center" spaceVertical="8" padding="8">
              <Loading size="16" color="success" />
              <Loading size="24" color="success" />
              <Loading size="32" color="success" />
              <Loading size="48" color="success" />
            </Block>
            <Block layout="vertical" align="center" spaceVertical="8" padding="8">
              <Loading size="16" color="danger" />
              <Loading size="24" color="danger" />
              <Loading size="32" color="danger" />
              <Loading size="48" color="danger" />
            </Block>
            <div style={{backgroundColor:'#777777'}}>
              <Block layout="vertical" align="center" spaceVertical="8" padding="8">
                <Loading size="16" color="light" />
                <Loading size="24" color="light" />
                <Loading size="32" color="light" />
                <Loading size="48" color="light" />
              </Block>
            </div>
          </Block>
          <h2>Tabs</h2>
          <Tabs
            size="24"
            options={this.getTabOptions()}
            value={this.state.tabValue}
            onChange={(value) => this.onChangeTab(value)}
          />
          <Tabs
            size="32"
            options={this.getTabOptions()}
            value={this.state.tabValue}
            onChange={(value) => this.onChangeTab(value)}
          />
          <Tabs
            size="48"
            options={this.getTabOptions()}
            value={this.state.tabValue}
            onChange={(value) => this.onChangeTab(value)}
          />
          <h2>Pills</h2>
          <Block layout="horizontal" align="center" spaceHorizontal="8">
            <Block layout="vertical" align="center" spaceVertical="8" padding="8">
              <Pill size="24">default</Pill>
              <Pill size="32">default</Pill>
              <Pill size="48">default</Pill>
            </Block>
            <Block layout="vertical" align="center" spaceVertical="8" padding="8">
              <Pill size="24" color="primary">primary</Pill>
              <Pill size="32" color="primary">primary</Pill>
              <Pill size="48" color="primary">primary</Pill>
            </Block>
            <Block layout="vertical" align="center" spaceVertical="8" padding="8">
              <Pill size="24" color="success">success</Pill>
              <Pill size="32" color="success">success</Pill>
              <Pill size="48" color="success">success</Pill>
            </Block>
            <Block layout="vertical" align="center" spaceVertical="8" padding="8">
              <Pill size="24" color="danger">danger</Pill>
              <Pill size="32" color="danger">danger</Pill>
              <Pill size="48" color="danger">danger</Pill>
            </Block>
            <div style={{backgroundColor:'#777777'}}>
              <Block layout="vertical" align="center" spaceVertical="8" padding="8">
                <Pill size="24" color="light">light</Pill>
                <Pill size="32" color="light">light</Pill>
                <Pill size="48" color="light">light</Pill>
              </Block>
            </div>
          </Block>
        </Block>
      </div>
    );
  }
}
