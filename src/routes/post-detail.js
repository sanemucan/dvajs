import React from "react";
import { connect } from "dva";
import styles from "./post-detail.css";
import PostDetailComponent from "../components/post-detail";

function PostDetail(props) {
  console.log("sanem");
  return (
    <div className={styles.normal}>
      Title: {props.post.title}
      <PostDetailComponent post={props.post} loading={props.loading} />
    </div>
  );
}

function mapStateToProps(state, ownProps) {
  console.log("SANEM");
  const key = ownProps.params.key;
  return {
    loading: state.loading.models.posts,
    post: {
      ...state.posts.postsByKey[key],
      key
    }
  };
}

export default connect(mapStateToProps)(PostDetail);
