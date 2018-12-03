/**
 *
 * Login
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import Button from '@material-ui/core/Button';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

/* eslint-disable react/prefer-stateless-function */
class Login extends React.PureComponent {
  render() {
    return (
      <Button variant="contained" color="primary">
        <FormattedMessage {...messages.header} />
      </Button>
    );
  }
}

Login.propTypes = {};

export default Login;
