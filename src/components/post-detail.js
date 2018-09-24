import React from "react";
import { styles } from "./PostDetail.css";
import { Spin } from "antd";

function PostDetail(props) {
  const { category, content, title } = props.post;
  return (
    <div>
      <Spin spinning={props.loading}>
        <div>Title: {title} </div>
        <div>Category: {category}</div>
        <div>Content: {content}</div>
      </Spin>
    </div>
  );
}

export default PostDetail;
