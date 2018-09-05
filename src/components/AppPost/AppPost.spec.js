import { describe, it } from 'mocha';
import { expect } from 'chai';
import { mount } from '@vue/test-utils';
import AppPost from './AppPost';

describe('AppPost Component', () => {
  it('should match props correctly', () => {
    const mockPost = {
      userId: 1,
      id: 1,
      title:
        'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
      body:
        'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
    };

    const wrapper = mount(AppPost, {
      propsData: {
        post: mockPost,
      },
    });

    expect(wrapper.vm.post.id).to.equal(mockPost.id);
  });

  it('should render title correctly', () => {
    const mockPost = {
      userId: 1,
      id: 1,
      title:
        'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
      body:
        'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
    };

    const wrapper = mount(AppPost, {
      propsData: {
        post: mockPost,
      },
    });

    const titleElement = wrapper.find('h2');
    expect(titleElement.text()).to.equal(mockPost.title);
  });
});
