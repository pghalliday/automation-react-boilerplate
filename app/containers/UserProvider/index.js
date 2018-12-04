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
import { makeSelectLoginState } from './selectors';
import { loginAction, logoutAction } from './actions';
import reducer from './reducer';
import saga from './saga';

/* eslint-disable react/prefer-stateless-function */
export class UserProvider extends React.PureComponent {
  static propTypes = {
    login: PropTypes.func.isRequired,
    logout: PropTypes.func.isRequired,
    loginState: PropTypes.any.isRequired,
    children: PropTypes.node.isRequired,
  };

  static contextTypes = {
    login: PropTypes.func,
    logout: PropTypes.func,
    loginState: PropTypes.any,
  };

  static childContextTypes = {
    login: PropTypes.func.isRequired,
    logout: PropTypes.func.isRequired,
    loginState: PropTypes.any.isRequired,
  };

  getChildContext() {
    const { loginState, login, logout } = this.props;
    return { loginState, login, logout };
  }

  render() {
    const { children } = this.props;
    return React.Children.only(children);
  }
}

const mapStateToProps = createStructuredSelector({
  loginState: makeSelectLoginState(),
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
