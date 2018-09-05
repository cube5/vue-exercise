import { describe, it } from 'mocha';
import { expect } from 'chai';
import { getters, mutations } from './blog';
import mockBlog from '../../../test/mocks/blog';
import mockUserProfile from '../../../test/mocks/user';

const { setPosts, setLoading, setError } = mutations;

const mockPosts = mockBlog.posts;

describe('blog getters', () => {
  it('posts', () => {
    const rootState = {
      user: {
        profile: mockUserProfile,
      },
    };

    const state = {
      posts: mockPosts,
    };

    const posts = getters.posts(state, null, rootState);

    expect(posts.length).to.equal(2);
  });

  it('userPosts', () => {
    const rootState = {
      user: {
        profile: mockUserProfile,
      },
    };

    const state = {
      posts: mockPosts,
    };

    const userPosts = getters.userPosts(state, null, rootState);

    expect(userPosts.length).to.equal(1);
  });
});

describe('blog mutations', () => {
  it('setPosts', () => {
    const state = {
      posts: [],
    };

    setPosts(state, mockPosts);

    expect(state.posts.length).to.equal(3);
    expect(state.posts[1].id).to.equal(2);
  });

  it('setLoading', () => {
    const state = {
      loading: false,
    };

    setLoading(state, true);

    expect(state.loading).to.true;
  });

  it('setError', () => {
    const state = {
      error: null,
    };

    setError(state, new Error('A fake error just happened'));

    expect(state.error).not.to.equal(null);
  });
});
