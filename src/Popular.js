import React from 'react';
import Loading from './Loading';

class Popular extends React.Component {
  constructor(){
    super();
    this.state = {
      repos: [],
      loading: false
    }
  }
  componentDidMount = () => {
    this.setState({loading: true});
    fetch('https://api.github.com/search/repositories?q=stars:%3E1+language:All&sort=stars&order=desc&type=Repositories')
      .then(res => res.json())
      .then(({items}) => this.setState({repos: items, loading: false}));
  }
  render() {
    return (
      <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr', maxWidth: '1000px', margin: '0 auto'}}>
        {
          this.state.loading ? <Loading /> : this.state.repos.map((repo, index) => <Repo repoData={repo} rank={index + 1} />)
        }
      </div>
    )
  }
}

function Repo(props){
  const {name, owner} = props.repoData;
  return (
    <div>
      <p>{"#" + props.rank}</p>
      <h3>{name}</h3>
      <img style={{borderRadius: "50%", width: '120px', height: '120px'}} src={owner.avatar_url} />
    </div>
  )
}

export default Popular