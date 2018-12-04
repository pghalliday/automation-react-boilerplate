/**
 *
 * UserProvider
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { makeSelectUserProvider } from './selectors';
import { loginAction, logoutAction } from './actions';
import reducer from './reducer';
import saga from './saga';

/* eslint-disable react/prefer-stateless-function */
export class UserProvider extends React.PureComponent {
  static propTypes = {
    login: PropTypes.func.isRequired,
    logout: PropTypes.func.isRequired,
    user: PropTypes.any.isRequired,
    children: PropTypes.node.isRequired,
  };

  static contextTypes = {
    login: PropTypes.func,
    logout: PropTypes.func,
    user: PropTypes.any,
  };

  static childContextTypes = {
    login: PropTypes.func.isRequired,
    logout: PropTypes.func.isRequired,
    user: PropTypes.any.isRequired,
  };

  getChildContext() {
    const { user, login, logout } = this.props;
    return { user, login, logout };
  }

  render() {
    const { children } = this.props;
    return React.Children.only(children);
  }
}

const mapStateToProps = createStructuredSelector({
  user: makeSelectUserProvider(),
});

function mapDispatchToProps(dispatch) {
  return {
    login: () => dispatch(loginAction()),
    logout: () => dispatch(logoutAction()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'userProvider', reducer });
const withSaga = injectSaga({ key: 'userProvider', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(UserProvider);
