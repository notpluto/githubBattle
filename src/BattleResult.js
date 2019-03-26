import React from 'react';

export default class BattleResult extends React.Component {
	render() {
		console.log(this.props.obj.one)
		// const userOneData = this.props.obj.one
		// const userTwoData = this.props.obj.two
		return (
			// Player One
			<React.Fragment>
				<div className = "contain">
					<div className="final">
						<div>@{this.props.obj.one.login}</div>
						<div>Followers: {this.props.obj.one.followers}</div>
						<div>Repository: {this.props.obj.one.public_repos}</div>
						<div>Location: {this.props.obj.one.location}</div>
						<div>Score: {this.props.obj.winner.userOneScore}</div>
					</div>
					<div className="final">
						<div>@{this.props.obj.two.login}</div>
						<div>Followers: {this.props.obj.two.followers}</div>
						<div>Repository: {this.props.obj.two.public_repos}</div>
						<div>Location: {this.props.obj.two.location}</div>
						<div>Score: {this.props.obj.winner.userTwoScore}</div>
					</div>
					<div className="result">
						<div>Winner is: @{this.props.obj.winner.name}</div>
					</div>
				</div>
			</React.Fragment>
		)
	}
}

