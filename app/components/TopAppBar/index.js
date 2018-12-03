/**
 *
 * TopAppBar
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl, intlShape, FormattedMessage } from 'react-intl';

import ShiftingAppBar from 'components/ShiftingAppBar';
import StyledToolbar from 'components/StyledToolbar';
import MenuButton from 'components/MenuButton';
import MenuIcon from '@material-ui/icons/Menu';
import TitleTypography from 'components/TitleTypography';
import IconButton from '@material-ui/core/IconButton';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import PersonIcon from '@material-ui/icons/Person';
import Tooltip from '@material-ui/core/Tooltip';

import messages from './messages';

/* eslint-disable react/prefer-stateless-function */
export class TopAppBar extends React.PureComponent {
  render() {
    const loginButton = (
      <Tooltip title={this.props.intl.formatMessage(messages.login)}>
        <IconButton color="inherit" onClick={this.props.onLoginClick}>
          <PersonOutlineIcon />
        </IconButton>
      </Tooltip>
    );
    const logoutButton = (
      <Tooltip title={this.props.intl.formatMessage(messages.logout)}>
        <IconButton color="inherit" onClick={this.props.onLogoutClick}>
          <PersonIcon />
        </IconButton>
      </Tooltip>
    );
    return (
      <ShiftingAppBar
        position="absolute"
        shift={this.props.shift}
        shifted={this.props.shifted}
      >
        <StyledToolbar disableGutters={!this.props.shifted}>
          <MenuButton
            color="inherit"
            aria-label="Open drawer"
            onClick={this.props.onMenuClick}
            displayed={!this.props.shifted}
          >
            <MenuIcon />
          </MenuButton>
          <TitleTypography
            component="h1"
            variant="title"
            color="inherit"
            noWrap
          >
            <FormattedMessage {...messages.title} />
          </TitleTypography>
          {this.props.isLoggedIn ? logoutButton : loginButton}
        </StyledToolbar>
      </ShiftingAppBar>
    );
  }
}

TopAppBar.propTypes = {
  intl: intlShape.isRequired,
  shifted: PropTypes.bool,
  shift: PropTypes.number,
  isLoggedIn: PropTypes.bool,
  onMenuClick: PropTypes.func,
  onLoginClick: PropTypes.func,
  onLogoutClick: PropTypes.func,
};

export default injectIntl(TopAppBar);
