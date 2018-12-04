import React from 'react';
import PropTypes from 'prop-types';
import hoistStatics from 'hoist-non-react-statics';

/* eslint-disable react/prefer-stateless-function */
const withUser = Component => {
  class UserComponent extends React.Component {
    static contextTypes = {
      login: PropTypes.func.isRequired,
      logout: PropTypes.func.isRequired,
      user: PropTypes.any.isRequired,
    };

    static displayName = `withUser(${Component.displayName || Component.name})`;

    render() {
      const { user, login, logout } = this.context;
      return (
        <Component {...this.props} user={user} login={login} logout={logout} />
      );
    }
  }

  return hoistStatics(UserComponent, Component);
};

export default withUser;
