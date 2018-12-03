/**
 *
 * StyledDrawer
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Drawer from '@material-ui/core/Drawer';

const transition = props =>
  props.theme.transitions.create('width', {
    easing: props.theme.transitions.easing.sharp,
    duration: props.theme.transitions.duration.leavingScreen,
  });

const closed = props =>
  props.open
    ? ''
    : `
      overflow-x: hidden;
      ${props.theme.breakpoints.up('sm')} {
        width: ${props.theme.spacing.unit * 9}px;
      }
    `;

const StyledDrawer = styled(({ width, ...rest }) => (
  <Drawer {...rest} classes={{ paper: 'paper' }} />
))(
  props => `
    & .paper {
      position: relative;
      white-space: nowrap;
      width: ${props.open ? props.width : props.theme.spacing.unit * 7}px;
      transition: ${transition(props)};
      ${closed(props)}
    }
  `,
);

StyledDrawer.propTypes = {
  ...StyledDrawer.propTypes,
  width: PropTypes.number.isRequired,
};

export default StyledDrawer;
