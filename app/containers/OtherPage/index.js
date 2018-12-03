/**
 *
 * OtherPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import Typography from '@material-ui/core/Typography';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectOtherPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

/* eslint-disable react/prefer-stateless-function */
export class OtherPage extends React.PureComponent {
  render() {
    return (
      <Typography variant="h4" gutterBottom component="h2">
        <FormattedMessage {...messages.header} />
      </Typography>
    );
  }
}

OtherPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  otherPage: makeSelectOtherPage(),
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

const withReducer = injectReducer({ key: 'otherPage', reducer });
const withSaga = injectSaga({ key: 'otherPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(OtherPage);
