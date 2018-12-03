/**
 *
 * ShiftingAppBar
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import AppBar from '@material-ui/core/AppBar';

const transition = props =>
  props.theme.transitions.create(['width', 'margin'], {
    easing: props.theme.transitions.easing.sharp,
    duration: props.theme.transitions.duration.leavingScreen,
  });

const shiftedStyle = props =>
  props.shifted
    ? `
    margin-left: ${props.shift}px;
    width: calc(100% - ${props.shift}px);
    `
    : '';

// Need to use '&&' here to override base style for displayed
const ShiftingAppBar = styled(({ shifted, shift, ...rest }) => (
  <AppBar {...rest} />
))(
  props => `
    && {
      z-index: ${props.theme.zIndex.drawer + 1};
      transition: ${transition(props)};
      ${shiftedStyle(props)}
    }
  `,
);

ShiftingAppBar.propTypes = {
  ...ShiftingAppBar.propTypes,
  shifted: PropTypes.bool,
  shift: PropTypes.number,
};

export default ShiftingAppBar;
