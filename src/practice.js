import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import './App.css';
import Header from './Header';
// import List from './List';
// import Exercise from './exercise';
import Greeting from './Greeting'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isShow: false ,
    };
  }

  toggleShow = () => {
    this.setState(state => ({isShow: !state.isShow}));
  };

  render() {
    return (
      <React.Fragment>
        {this.state.isShow ? <Greeting greeting='Welcome to React' /> : null}

          <button onClick={this.toggleShow} type="button">
          Toggle Show
          </button>
      </React.Fragment>
    );
  }
}

// const Greeting = ({ greeting, isShow}) => isShow ? <h1>{greeting}</h1> : null;

// function tick() {
//   const element = (
//     <div>
//       <h2>It is {new Date().toLocaleTimeString()}.</h2>
//     </div>
//   );
//   ReactDOM.render(element, document.getElementById('time'));
// }
// setInterval(tick, 1000);

export default App;
