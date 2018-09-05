import { describe, it } from 'mocha';
import { expect } from 'chai';
import Vuex from 'vuex';
import { mount, createLocalVue } from '@vue/test-utils';
import mockBlog from '../../../test/mocks/blog';
import { getters } from '../../store/modules/blog';
import AppPosts from './AppPosts';

const localVue = createLocalVue();

localVue.use(Vuex);

describe('AppPosts Component', () => {
  let store;

  it('should render 2 AppPostList components correctly', () => {
    store = new Vuex.Store({
      modules: {
        user: {
          namespaced: true,
          state: { profile: { id: 1 } },
        },
        blog: {
          namespaced: true,
          state: {
            posts: mockBlog.posts,
            loading: false,
            error: null,
          },
          getters,
        },
      },
    });
    const wrapper = mount(AppPosts, { store, localVue });
    const postComponents = wrapper.findAll({ name: 'app-post-list' });
    expect(postComponents.length).to.equal(2);
  });
});
