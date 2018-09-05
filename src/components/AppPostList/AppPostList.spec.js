import { describe, it } from 'mocha';
import { expect } from 'chai';
import { mount } from '@vue/test-utils';

import AppPostList from './AppPostList';
import mockBlog from '../../../test/mocks/blog';

describe('AppPostList', () => {
  it('should render correctly using default props', () => {
    const wrapper = mount(AppPostList, {
      propsData: {},
    });

    expect(wrapper.find('div').exists()).to.equal(true);
    expect(wrapper.find('div').text()).to.equal('No posts to show...');
  });

  it('should render loading state correctly', () => {
    const wrapper = mount(AppPostList, {
      propsData: { loading: true },
    });

    const loadingComponent = wrapper.find({ name: 'app-spinner' });
    expect(loadingComponent.exists()).to.equal(true);
  });

  it('should render error state correctly', () => {
    const wrapper = mount(AppPostList, {
      propsData: {
        error: new Error('hey dude, you have something wrong here.'),
      },
    });

    expect(
      wrapper.text().includes('hey dude, you have something wrong here.')
    ).to.equal(true);
  });

  it('should render the correct number of AppPost components', () => {
    const wrapper = mount(AppPostList, {
      propsData: {
        posts: mockBlog.posts,
        loading: false,
        error: null,
      },
    });

    const postComponents = wrapper.findAll('.post');

    expect(postComponents.length).to.equal(mockBlog.posts.length);
  });
});
