import React from 'react'


const styles = {
  borderBottom: '2px solid #eee',
  background: '#fafafa',
  margin: '.75rem auto',
  padding: '.6rem 1rem',
  maxWidth: '500px',
  borderRadius: '7px'
};

const Post = ({ post: {title, body , id}, onDelete}) => {
  console.log(post)
  return (
    <div style={styles}>
      <h2>{title}</h2>
      <p>{body}</p>
      <button className='btn btn-danger' type='button' 
        onClick={() => onDelete(id)}>
        REMOVE
      </button>
    </div>
  )
}

export default Post;