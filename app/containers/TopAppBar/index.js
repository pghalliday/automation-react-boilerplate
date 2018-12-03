/**
 *
 * TopAppBar
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import ShiftingAppBar from 'components/ShiftingAppBar';
import StyledToolbar from 'components/StyledToolbar';
import MenuButton from 'components/MenuButton';
import MenuIcon from '@material-ui/icons/Menu';
import TitleTypography from 'components/TitleTypography';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import NotificationsIcon from '@material-ui/icons/Notifications';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectTopAppBar from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

/* eslint-disable react/prefer-stateless-function */
export class TopAppBar extends React.PureComponent {
  render() {
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
          <IconButton color="inherit">
            <Badge badgeContent={4} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
        </StyledToolbar>
      </ShiftingAppBar>
    );
  }
}

TopAppBar.propTypes = {
  dispatch: PropTypes.func.isRequired,
  shifted: PropTypes.bool,
  shift: PropTypes.number,
  onMenuClick: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  topAppBar: makeSelectTopAppBar(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'topAppBar', reducer });
const withSaga = injectSaga({ key: 'topAppBar', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(TopAppBar);
