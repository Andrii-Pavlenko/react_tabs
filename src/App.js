import React from 'react';
import './App.css';
import Penal from './components/Penal';

class App extends React.Component {
  state = {
    tabs: [
      { title: 'Tab 1', content: 'Some text 1' },
      { title: 'Tab 2', content: 'Some text 2' },
      { title: 'Tab 3', content: 'Some text 3' },
    ],
  }

  render() {
    return (
      <>
        <Penal tabs={this.state.tabs} />
      </>
    );
  }
}

export default App;