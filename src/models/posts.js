import { fetchPost, fetchPosts } from "../services/posts";
import pathToRegexp from "path-to-regexp";

export default {
  namespace: "posts",
  state: {
    posts: [],
    postsByKey: {}
  },
  reducers: {
    save(state, { payload: postsByKey }) {
      return {
        ...state,
        postsByKey,
        posts: Object.keys(postsByKey)
      };
    },
    update(state, { payload: post }) {
      const postByKey = {
        ...state.postsByKey,
        [post.key]: post
      };
      return { ...state, postByKey };
    }
  },
  effects: {
    *fetchPosts(action, { call, put }) {
      // is equal to a: function* ()
      const result = yield call(fetchPosts); // call is for async logic
      yield put({ type: "save", payload: result });
    },
    *fetchPost({ payload: key }, { call, put }) {
      const result = yield call(fetchPost, key);
      yield put({ type: "update", payload: key });
    }
  },
  subscriptions: {
    // subscribe a data source (it's history router change in this event) and dispatch action if needed
    setup({ dispatch, history }) {
      return history.listen(({ pathname }) => {
        if (pathname === "/posts") {
          dispatch({ type: "fetchPosts" });
        }

        const match = pathToRegexp("/posts/:key").exec(pathname);
        if (match) {
          const key = match[1];
          dispatch({
            type: "fetchPost",
            payload: key
          });
        }
      });
    }
  }
};
