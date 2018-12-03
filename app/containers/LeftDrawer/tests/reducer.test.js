import { fromJS } from 'immutable';
import leftDrawerReducer from '../reducer';

describe('leftDrawerReducer', () => {
  it('returns the initial state', () => {
    expect(leftDrawerReducer(undefined, {})).toEqual(fromJS({}));
  });
});
