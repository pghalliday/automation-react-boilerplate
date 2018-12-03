/**
 *
 * LeftDrawer
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { injectIntl, intlShape } from 'react-intl';
import { withRouter } from 'react-router';
import { push } from 'connected-react-router';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import StyledDrawer from 'components/StyledDrawer';
import ToolbarIconDiv from 'components/ToolbarIconDiv';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectLeftDrawer from './selectors';
import reducer from './reducer';
import saga from './saga';

/* eslint-disable react/prefer-stateless-function */
export class LeftDrawer extends React.PureComponent {
  render() {
    const pages = this.props.pages.map(page => (
      <ListItem
        key={page.route}
        button
        selected={this.props.location.pathname === page.route}
        onClick={() => this.props.pushPage(page)}
      >
        <ListItemIcon>{page.icon}</ListItemIcon>
        <ListItemText primary={this.props.intl.formatMessage(page.name)} />
      </ListItem>
    ));
    return (
      <StyledDrawer
        variant="permanent"
        open={this.props.open}
        width={this.props.width}
      >
        <ToolbarIconDiv>
          <IconButton onClick={this.props.onCloseClick}>
            <ChevronLeftIcon />
          </IconButton>
        </ToolbarIconDiv>
        <Divider />
        <List>{pages}</List>
      </StyledDrawer>
    );
  }
}

LeftDrawer.propTypes = {
  pushPage: PropTypes.func.isRequired,
  intl: intlShape.isRequired,
  location: PropTypes.any.isRequired,
  pages: PropTypes.array.isRequired,
  width: PropTypes.number.isRequired,
  open: PropTypes.bool.isRequired,
  onCloseClick: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  leftDrawer: makeSelectLeftDrawer(),
});

function mapDispatchToProps(dispatch) {
  return {
    pushPage: page => dispatch(push(page.route)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'leftDrawer', reducer });
const withSaga = injectSaga({ key: 'leftDrawer', saga });

export default compose(
  injectIntl,
  withReducer,
  withSaga,
  // important to include withRouter before withConnect
  // otherwise route changes will not result in the
  // location property being updated
  withRouter,
  withConnect,
)(LeftDrawer);
