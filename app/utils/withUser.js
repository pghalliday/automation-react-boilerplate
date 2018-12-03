import React from 'react';
import PropTypes from 'prop-types';

/* eslint-disable react/prefer-stateless-function */
const withUser = Component =>
  class UserComponent extends React.Component {
    static contextTypes = {
      loginState: PropTypes.any.isRequired,
    };

    render() {
      const { loginState } = this.context;
      return <Component {...this.props} loginState={loginState} />;
    }
  };

export default withUser;
