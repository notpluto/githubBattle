import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class Exercise extends Component {
	render() {
		console.log(this.props.list);
		return (
      <div>
      	{this.props.list.map(user => <li>{user}</li>)}
      </div>
    )
  }
}

// ReactDOM.render(
//   <Exercise list={['Tyler', 'Mikenzi', 'Ryan', 'Michael']} />,
//   document.getElementById('root')
// );

export default Exercise;
