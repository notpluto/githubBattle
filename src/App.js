import React from 'react'
import ReactDOM from 'react-dom'
import './index.css';
import './App.css';
import Popular from './Popular';
import Battle from './Battle';
import Results from './Results';
import Card from './Card';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Nav from './Nav';
import Home from './Home';
import {Switch} from 'react-router';
import Loading from './Loading';

// import { library } from '@fortawesome/fontawesome-svg-core'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faIgloo } from '@fortawesome/free-solid-svg-icons'

// library.add(faIgloo)

export default class App extends React.Component {
  render() {
    return (
    	<Router>
	      <div className='container'>
	      	<Nav />
	      	<Switch>
	      		<Route exact path= '/' component={Home} />
	        	<Route path='/popular' component={Popular} />
          	<Route exact path='/battle' component={Battle} />
          	<Route render={function () {
          		return <p>Not Found</p>
          	}} />
	      	</Switch>
	      </div>
	    </Router>
    )
  }
}

ReactDOM.render(<App />,document.getElementById('root')
)