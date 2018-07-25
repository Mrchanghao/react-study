import React, { Component } from 'react';
import '../styles/app.css'
import Search from '../components/Search';
import Table from '../components/Table';
import Button from '../components/UI//Button';
import {DEFAULT_QUERY, PATH_BASE, PATH_SEARCH, PARAM_SEARCH, PARAM_PAGE, PARAM_HPP, DEFAULT_HPP} from '../constant/constant'

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
        results: null,
        searchKey: '',
        searchTerm: DEFAULT_QUERY
      }
      this.onDismiss = this.onDismiss.bind(this);
      this.onSearchChange = this.onSearchChange.bind(this);
      this.setSearchTopStories = this.setSearchTopStories.bind(this)
      this.onSearchSubmit = this.onSearchSubmit.bind(this);
      this.fetchSearchTopStories = this.fetchSearchTopStories.bind(this);
    }
    onDismiss(id) {
      // const updatedList = this.state.results.hits.filter((item) => {
      //   return item.objectID !== id;
      // })
      const isNotId = item => item.objectID !== id;
      const updatedHits = this.state.results.hits.filter(isNotId);
      this.setState({results: {...this.state.results, hits: updatedHits}})
    }
    onSearchChange(e) {
      this.setState({searchTerm: e.target.value})
    }
    setSearchTopStories(result) {
      const {hits, page} = result;
      const {searchKey, results} = this.state;
      const oldHits = results && results[searchKey]? this.state.results.hits : [];
      const updatedHits = [...oldHits, ...hits];
      this.setState({results: 
        {
          ...result, 
            [searchKey]: {
              hits: updatedHits, page
            }
          }
        })
    }

    onSearchSubmit(e) {
      const {searchTerm} = this.state;
      this.setState({searchKey: searchTerm});
      this.fetchSearchTopStories(searchTerm); 
      e.preventDefault();
    }

    fetchSearchTopStories(searchTerm, page = 0) {
      fetch(`${PATH_BASE}${PATH_SEARCH}?${PARAM_SEARCH}${searchTerm}&${PARAM_PAGE}${
        page}&${PARAM_HPP}${DEFAULT_HPP}`)
      .then(res => res.json())
      .then(result => this.setSearchTopStories(result))
      .catch(err => console.log(err));
    }

    componentDidMount() {
      const {searchTerm} = this.state;
      this.setState({searchKey: searchTerm});
      this.fetchSearchTopStories(searchTerm);
      // fetch(`${PATH_BASE}${PATH_SEARCH}?${PARAM_SEARCH}${searchTerm}`)
      // .then(res => res.json())
      // .then(results => this.setSearchTopStories(results))
      // .catch(err => console.log(err))
    }
    render() {
      const {searchTerm, results} = this.state;
      const page = (results && results.page) || 0;
      console.log(results)
      if(!results) {return null}
        return (
          <div classame='page'>
            <div className='interactions'>
              <Search 
              onSubmit={this.onSearchSubmit}
              value={searchTerm} onChange={this.onSearchChange}>Search</Search>
            </div>
            {results && 
            <Table list={results.hits} pattern={searchTerm} onDismiss={this.onDismiss} />  
          }
            <div className='interactions'>
              <Button onClick={() => this.fetchSearchTopStories(searchTerm, page + 1)}>MORE</Button>
            </div>
          </div>
        );
    }
}

export default App;
