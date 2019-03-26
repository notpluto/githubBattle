import React from 'react';
import Player from './Player';
import BattleResult from './BattleResult'

class Battle extends React.Component {
  state = {
    one: null,
    two: null,
    winner: null,
    reset: false
  }
  addData = (data, key) => {
    this.setState({[key]: data})
  }
  handleClick = (e) => {
    const userOneScore = this.state.one.followers + (this.state.one.public_repos *2);
    const userTwoScore = this.state.two.followers + (this.state.two.public_repos*2);
    console.log(userOneScore,userTwoScore);
    this.setState({reset: true});
    if (userOneScore > userTwoScore) {
      // console.log(userOneScore > userTwoScore)
      this.setState({winner : {
        // score: userOneScore,
        name: this.state.one.login,
        userOneScore: userOneScore,
        userTwoScore: userTwoScore
        }
      })
    }else{
      this.setState({winner : {
        // score: userTwoScore,
        name: this.state.two.login,
        userOneScore: userOneScore,
        userTwoScore: userTwoScore
        }
      })
    }
  }
  render() {
    const {one, two} = this.state;
    return (
      <React.Fragment>
        <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', maxWidth: "800px", margin: '40px auto', marginleft: "4rem", textalign:"center"}}>
          <Player playerName="one" addData={this.addData} />
          <Player playerName="two" addData={this.addData} />
        </div>
        <div>
          {
            one && two && this.state.reset === false ? <button className = "button" style={{marginleft: '-10rem'}} onClick={this.handleClick}>Battle</button> : ""
          }
          {
            this.state.reset ? <BattleResult obj= {this.state} /> : ""
          }
        </div>
      </React.Fragment>
    )
  }
}

export default Battle;

