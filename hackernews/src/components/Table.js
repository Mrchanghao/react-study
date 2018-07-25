import React, { Component } from 'react';
import Button from './UI/Button'
import '../styles/app.css'


const isSearched = searchTerm => item => item.title.toLowerCase().includes(searchTerm.toLowerCase())

class Table extends Component {
    render() {
        const {pattern, onDismiss, list} = this.props;
        return (
            <div className='table'>
                {list.filter(isSearched(pattern)).map(item => (
                    <div key={item.objectID} className='table-row'>
                        <span style={{width: '40%'}}>
                            <a href={item.url}>{item.title}</a>
                        </span>
                        <span style={{width: '30%'}}>{item.author}</span>
                        <span style={{width: '10%'}}>{item.num_comments}</span>
                        <span style={{width: '10%'}}>{item.points}</span>
                        <span>
                            <Button 
                            className='button-inline'
                            onClick={() =>onDismiss(item.objectID)}>
                                REMOVE
                            </Button>
                        </span>
                    </div>
                ))}
            </div>
        );
    }
}

export default Table;