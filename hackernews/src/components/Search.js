import React, { Component } from 'react';
import Button from './UI/Button';

// class Search extends Component {
    
//     render() {
//         const {children,value, onChange} = this.props;
//         return (
//             <form>
//                 {children}
//                 <input type='text'
//                 value={value}
//                 onChange={onChange}
//                 />
//                 <Button>submit</Button>
//             </form>
//         );
//     }
// }

const Search = ({children, value, onSubmit, onChange}) => (
    <form onSubmit={onSubmit}>
        
        <input type='text'
        value={value}
        onChange={onChange}
        />
        <Button>{children}</Button>
    </form>
)

export default Search;