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
import Tooltip from '@material-ui/core/Tooltip';
import Badge from '@material-ui/core/Badge';
import Avatar from '@material-ui/core/Avatar';
import CircularProgress from '@material-ui/core/CircularProgress';

import messages from './messages';

/* eslint-disable react/prefer-stateless-function */
export class TopAppBar extends React.PureComponent {
  render() {
    const loginErrorButton = () => (
      <Tooltip title={this.props.intl.formatMessage(messages.login)}>
        <IconButton color="inherit" onClick={this.props.login}>
          <Badge badgeContent="!" color="secondary">
            <PersonOutlineIcon />
          </Badge>
        </IconButton>
      </Tooltip>
    );
    const pendingIcon = <CircularProgress color="secondary" />;
    const loginButton = (
      <Tooltip title={this.props.intl.formatMessage(messages.login)}>
        <IconButton color="inherit" onClick={this.props.login}>
          <PersonOutlineIcon />
        </IconButton>
      </Tooltip>
    );
    const logoutButton = user => (
      <Tooltip
        title={this.props.intl.formatMessage(messages.logout, {
          user: user.displayName,
        })}
      >
        <Avatar src={user.photoURL} onClick={this.props.logout} />
      </Tooltip>
    );
    const userIcon = loginState => {
      if (loginState.error) {
        return loginErrorButton(loginState.error);
      }
      if (loginState.user) {
        return logoutButton(loginState.user);
      }
      if (loginState.loggedOut) {
        return loginButton;
      }
      return pendingIcon;
    };
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
          <TitleTypography component="h1" variant="h6" color="inherit" noWrap>
            <FormattedMessage {...messages.title} />
          </TitleTypography>
          {userIcon(this.props.loginState)}
        </StyledToolbar>
      </ShiftingAppBar>
    );
  }
}

TopAppBar.propTypes = {
  intl: intlShape.isRequired,
  shifted: PropTypes.bool,
  shift: PropTypes.number,
  loginState: PropTypes.any,
  login: PropTypes.func,
  logout: PropTypes.func,
  onMenuClick: PropTypes.func,
};

export default injectIntl(TopAppBar);
