import { fetchPost, fetchPosts } from "../services/posts";

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
    }
  },
  effects: {
    *a(action, { call, put }) {
      // is equal to a: function* ()
      const result = yield call(fetchPosts); // call is for async logic
      yield put({ type: "save", payload: result });
    }
  },
  subscriptions: {
    // subscribe a data source (it's history router change in this event) and dispatch action if needed
    setup({ dispatch, history }) {
      return history.listen(({ pathname }) => {
        if (pathname === "/posts") {
          dispatch({ type: "a" });
        }
      });
    }
  }
};
