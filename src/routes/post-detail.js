import React from "react";
import { connect } from "dva";
import styles from "./post-detail.css";
import PostDetailComponent from "../components/post-detail";
import Nav from "../components/Nav";

function PostDetail(props) {
  return (
    <div className={styles.normal}>
      <Nav />
      <PostDetailComponent post={props.post} loading={props.loading} />
    </div>
  );
}

function mapStateToProps(state, ownProps) {
  const key = ownProps.match.params.key;
  return {
    loading: state.loading.models.posts,
    post: {
      ...state.posts.postsByKey[key],
      key
    }
  };
}

export default connect(mapStateToProps)(PostDetail);
