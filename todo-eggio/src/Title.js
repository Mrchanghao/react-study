import React from 'react';


const Title = ({totalCount}) => {
    return (
        <div>
            <div>
                <h1>Todo {totalCount} left</h1>
            </div>
        </div>
    )
}


export default Title;