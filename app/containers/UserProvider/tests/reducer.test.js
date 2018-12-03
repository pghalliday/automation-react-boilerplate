import { fromJS } from 'immutable';
import userProviderReducer from '../reducer';

describe('userProviderReducer', () => {
  it('returns the initial state', () => {
    expect(userProviderReducer(undefined, {})).toEqual(fromJS({}));
  });
});
