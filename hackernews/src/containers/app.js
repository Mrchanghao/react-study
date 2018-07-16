import React, { Component } from 'react';
import '../styles/app.css'
import Search from '../components/Search';
import Table from '../components/Table';
import {DEFAULT_QUERY, PATH_BASE, PATH_SEARCH, PARAM_SEARCH} from '../constant/constant'

const list = [
  {
    title: 'react',
    url: 'https://rectjs.org/',
    author: 'john',
    num_comments: 3,
    points: 4,
    objectID: 0
  },
  {
    title: 'redux',
    url: 'https://github.com/reactjs/redux/',
    author: 'dan, andrew',
    num_comments: 2,
    points: 5,
    objectID: 1
  }
]

// function isSearched(searchTerm) {
//   return function(item) {
//     // true or false
//     return item.toLowerCase().includes(searchTerm.toLowerCase())
//   }
// }
const isSearched = searchTerm => item => item.title.toLowerCase().includes(searchTerm.toLowerCase())

class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
        result: null,
        searchTerm: DEFAULT_QUERY
      }
      this.onDismiss = this.onDismiss.bind(this);
      this.onSearchChange = this.onSearchChange.bind(this);
      this.setSearchTopStories = this.setSearchTopStories.bind(this)
    }
    onDismiss(id) {
      // const updatedList = this.state.result.hits.filter((item) => {
      //   return item.objectID !== id;
      // })
      const isNotId = item => item.objectID !== id;
      const updatedHits = this.state.result.hits.filter(isNotId);
      this.setState({result: Object.assign({}, this.state.result, 
        {hits: updatedHits})})
    }
    onSearchChange(e) {
      this.setState({searchTerm: e.target.value})
    }
    setSearchTopStories(result) {
      this.setState({result})
    }
    componentDidMount() {
      const {searchTerm} = this.state;
      fetch(`${PATH_BASE}${PATH_SEARCH}?${PARAM_SEARCH}${searchTerm}`)
      .then(res => res.json())
      .then(result => this.setSearchTopStories(result))
      .catch(err => console.log(err))
    }
    render() {
      const {searchTerm, result} = this.state
      console.log(result)
      if(!result) {return null}
        return (
          <div classame='page'>
            <div className='interactions'>
              <Search value={searchTerm} onChange={this.onSearchChange}>Search</Search>
            </div>
            <Table list={result.hits} pattern={searchTerm} onDismiss={this.onDismiss} />
            
          </div>
        );
    }
}

export default App;
