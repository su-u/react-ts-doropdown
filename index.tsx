import React, { Component } from 'react';
import { render } from 'react-dom';
import Dropdown from './Dropdown';
import Button from './Button';

interface AppProps { }
interface AppState {
  name: string;
}

class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
      <Dropdown
        click_element={click => 
      < Button click={click}/>
      }>
      aaaa
      </Dropdown>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
