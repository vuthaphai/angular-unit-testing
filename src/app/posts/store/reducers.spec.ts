import { initialState, postsReducer } from './reducers';
import * as PostAction from './actions';

describe('PostsReducers', () => {
  it('returns a default state', () => {
    const action = { type: 'Unknow' };
    const state = postsReducer(initialState, action);
    const newState = {
      error: null,
      isLoading: false,
      posts: [],
    };
    expect(state).toEqual(newState);
  });
  it('getPost', () => {
    const action = PostAction.getPosts();
    const state = postsReducer(initialState, action);
    const newState = {
      error: null,
      isLoading: true,
      posts: [],
    };
    expect(state).toEqual(newState);
  });
  it('getPostSuccess', () => {
    const action = PostAction.getPostsSuccess({
      posts: [{ id: '1', title: 'foo' }],
    });
    const state = postsReducer(initialState, action);
    const newState = {
      error: null,
      isLoading: false,
      posts: [{ id: '1', title: 'foo' }],
    };
    expect(state).toEqual(newState);
  });
  it('getPostFailure', () => {
    const action = PostAction.getPostsFailure({
      error: 'Server error',
    });
    const state = postsReducer(initialState, action);
    const newState = {
      error: 'Server error',
      isLoading: false,
      posts: [],
    };
    expect(state).toEqual(newState);
  });
});
