import { describe, it } from 'mocha';
import { expect } from 'chai';
import Vuex from 'vuex';
import { mount, createLocalVue } from '@vue/test-utils';
import AppUserAvatar, { filters } from './AppUserAvatar';

const localVue = createLocalVue();

localVue.use(Vuex);

describe('AppUserAvatar Component', () => {
  let store;

  it('filters should return correct values', () => {
    const names = ['Mazer Rackham', 'Ender', 'Obi Wan Kenobi'];
    const expectedInitials = ['MR', 'E', 'OW'];

    names.forEach((name, i) => {
      expect(filters.initialsOnly(name)).to.equal(expectedInitials[i]);
    });

    expect(filters.upperCase('')).to.equal('');
    expect(filters.initialsOnly('')).to.equal('');
  });

  it("should render user's name initials properly", () => {
    store = new Vuex.Store({
      state: {
        user: {
          profile: {
            id: 1,
            name: 'Mazer Rackham',
          },
          loading: false,
          error: null,
        },
      },
    });
    const wrapper = mount(AppUserAvatar, { store, localVue });
    const initialsElement = wrapper.find('.initials');
    expect(initialsElement.text()).to.equal('MR');
  });

  it('should render loading state correctly', () => {
    store = new Vuex.Store({
      state: {
        user: {
          profile: {},
          loading: true,
        },
      },
    });
    const wrapper = mount(AppUserAvatar, { store, localVue });
    const initialsElement = wrapper.find('.avatar-circle');
    const loadingComponent = wrapper.find({ name: 'app-spinner' });

    expect(initialsElement.exists()).to.equal(false);
    expect(loadingComponent.exists()).to.equal(true);
  });

  it('should render error state correctly', () => {
    store = new Vuex.Store({
      state: {
        user: {
          profile: {},
          error: new Error('Error ocurred.'),
        },
      },
    });
    const wrapper = mount(AppUserAvatar, { store, localVue });
    expect(wrapper.text()).to.equal(''); // when there's an error the component stays empty.
  });
});
