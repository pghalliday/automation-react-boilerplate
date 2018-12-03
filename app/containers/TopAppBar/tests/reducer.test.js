import { fromJS } from 'immutable';
import topAppBarReducer from '../reducer';

describe('topAppBarReducer', () => {
  it('returns the initial state', () => {
    expect(topAppBarReducer(undefined, {})).toEqual(fromJS({}));
  });
});
