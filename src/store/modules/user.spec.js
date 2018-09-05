import { describe, it } from 'mocha';
import { expect } from 'chai';
import { mutations } from './user';
import mockUserProfile from '../../../test/mocks/user';

const { setUserProfile, setLoading, setError } = mutations;

describe('user mutations', () => {
  it('setUserProfile', () => {
    const state = {
      profile: {},
    };

    setUserProfile(state, mockUserProfile);

    expect(state.profile.id).to.equal(2);
    expect(state.profile.name).to.equal('Chelsey Dietrich');
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

    setError(state, 'A fake error just happened');

    expect(state.error).not.to.equal(null);
  });
});
