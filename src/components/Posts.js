import React from "react";
import styles from "./Posts.css";
import PostItem from "./PostItem";
import { Spin } from "antd";

function Posts(props) {
  return (
    <div className={styles.normal}>
      <h1>Posts</h1>
      <div>
        <Spin spinning={props.loading}>
          {props.posts.map(post => (
            <PostItem key={post.key} post={post} />
          ))}
        </Spin>
      </div>
    </div>
  );
}

export default Posts;
