import React from 'react';
import styles from './Posts.css';
import PostItem from './PostItem';

function Posts(props) {
  return (
    <div className={styles.normal}>
      <h1>Posts</h1>
      <div>
        {
          props.posts.map(post => <PostItem id={post.key} post={post}/>)
        }
      </div>
    </div>
  );
}

export default Posts;
