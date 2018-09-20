import React from 'react';
import { connect } from 'dva';
import styles from './Posts.css';
import PostsComponent from '../components/Posts';

function Posts(props) {
  return (
    <div className={styles.normal}>
      <PostsComponent posts={props.posts}/>
    </div>
  );
}

function mapStateToProps() {
  return {
    posts: [
      {
        title: 'Learn Dva',
        key: '1',
        category: 'dva'
      },
      {
        title: 'Learn Antd',
        key: '2',
        category: 'antd'
      }
    ]
  };
}

export default connect(mapStateToProps)(Posts);
