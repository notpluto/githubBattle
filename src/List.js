import React, {Component} from 'react';

class List extends Component {
	render() {
		return (
			<div>
				<div className="main">
					<h4>List of folks who want to learn React</h4>
					<ul className="superhero">
						<li>Spiderman</li>
						<li>Hulk</li>
						<li>Black Panther</li>
						<li>Batman</li>
						<li>Hawkeye</li>
						<li>Thor</li>
						<li>Superman</li>
						<li>Flash</li>
						<li>Green Lantern</li>
					</ul>
				</div>
			</div>
		)
	}
}

export default List;