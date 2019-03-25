import React from 'react';
import Player from './Player';

class Battle extends React.Component {
  state = {
    one: null,
    two: null
  }
  addData = (data, key) => {
    this.setState({[key]: data})
  }
  handleClick = (e) => {
    this.state.one.followers > this.state.two.followers ? alert("One Won") : alert('One Lost')
  }
  render() {
    const {one, two} = this.state;
    return (
      <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', maxWidth: "800px", margin: '40px auto'}}>
        <Player playerName="one" addData={this.addData} />
        <Player playerName="two" addData={this.addData} />
        {
          one && two ? <button onClick={this.handleClick}>Battle</button> : ""
        }
      </div>
    )
  }
}

export default Battle;

