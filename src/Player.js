import React from "react";
import {Link} from 'react-router';

export default class Player extends React.Component {
	state = {
		username: "",
		userInfo: null
	}
	handleChange = (e) => {
		this.setState({ username: e.target.value})
	}
	handleSubmit = () => {
		fetch(`https://api.github.com/users/${this.state.username}`)
			.then(res => res.json())
			.then(data => {
					this.props.addData(data, this.props.playerName)
					this.setState({userInfo: data});
				}
			)
	}
	onReset = () => {
		this.setState({username: null, userInfo:null})
	}
	render() {
		return (
			<div>
				{
					this.state.userInfo ? (
						<>
							<img src={this.state.userInfo ? this.state.userInfo.avatar_url : ""} height="200px" width = "200px" margin-top= "40px"/>
							<p className= "info">@{this.state.userInfo ? this.state.userInfo.login : ""}</p>
							<button className="reset" onClick={this.onReset}>Reset</button>
							{/*<span>Public Repos: {this.state.userInfo ? this.state.userInfo.public_repos: ""}</span>
							<p>Followers: {this.state.userInfo ? this.state.userInfo.followers: ""}</p>
							<p>Following: {this.state.userInfo ? this.state.userInfo.following: ""}</p>*/}
						</>

					) : (
						<>
							<h1>{"Player " + this.props.playerName}</h1>
							<input onKeyUp={this.handleChange} class="user-input" defaultValue={this.state.username} type="text" placeholder="Github Username" /><br />
							<button type="submit" class="submit" onClick={this.handleSubmit}>Submit</button>
						</>
					)
				}	
			</div>
		)
	}
}