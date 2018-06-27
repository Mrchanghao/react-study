import React from 'react';
import PropTypes from 'prop-types';


const Photo = (props) => {
    const post = props.post;
    return (
        <figure className='figure'>
            <img className='photo' src={post.imageLink} alt={post.description}/>
            <figcaption><p> {post.description} </p></figcaption>
            <div className='button-container'>
                <button onClick={()=> {
                    props.onRemovePhoto(post)
                }} className='remove-button'> REMOVE </button>
            </div>
        </figure> 
    )
}

Photo.propTypes = {
    post: PropTypes.object.isRequired,
    onRemovePhoto: PropTypes.func.isRequired
}

export default Photo;