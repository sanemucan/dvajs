import React from "react";
import { connect } from "dva";
import styles from "./Posts.css";
import PostsComponent from "../components/Posts";

function Posts(props) {
  return (
    <div className={styles.normal}>
      <PostsComponent loading={props.loading} posts={props.posts} />
    </div>
  );
}

function mapStateToProps(state) {
  const { posts, postsByKey } = state.posts;
  return {
    loading: state.loading.models.posts,
    posts: posts.map(key => ({ ...postsByKey[key], key }))
  };
}

export default connect(mapStateToProps)(Posts);
