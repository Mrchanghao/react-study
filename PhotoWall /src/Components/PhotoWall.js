import React from 'react';
import Photo from './Photo';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'


const PhotoWall = (props) => {
    return (
       <div>
         {/* <button className='addIcon' onClick={props.onNavigate}></button> */}
         <Link className='addIcon' to='/Addphoto'>  </Link>
         <div className='photoGrid'>
            {props.posts.sort((x, y)=> {
                return y.id - x.id
            })
            .map(post => <Photo key={post.id} 
            onRemovePhoto={props.onRemovePhoto} post={post} />)}
            {/* stateless component에서 props는 this없이 사용 */}
         </div>
       </div>
    )
}

PhotoWall.propTypes = {
    posts: PropTypes.array.isRequired,
    onRemovePhoto: PropTypes.func.isRequired
}


export default PhotoWall;