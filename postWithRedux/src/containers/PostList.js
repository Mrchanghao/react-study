import React from 'react'
import { connect } from 'react-redux';
import Post from '../components/Post';
import { deletePost } from '../actions/actions';


const PostList = ({posts, onDelete }) => {
  console.log(posts)
  return (
    <div>
      {posts.map(post => {
        return (
          <Post post={post} onDelete={onDelete} key={post.id} />
        )
      })}
    </div>
  )
}

const mapStateProps = (state) => {
  return {
    posts: state.posts
  }
};

const mapDispatchProps = (dispatch) => {
  return {
    onDelete: id => {
      dispatch(deletePost(id));
    }
  }
}

export default connect(mapStateProps, mapDispatchProps)(PostList)