/**
 *
 * MenuButton
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import IconButton from '@material-ui/core/IconButton';

// Need to use '&&' here to override base style for displayed
const MenuButton = styled(({ displayed, ...rest }) => <IconButton {...rest} />)(
  props => `
    && {
      margin-left: 12px;
      margin-right: 36px;
      ${props.displayed ? '' : 'display: none;'}
    }
  `,
);

MenuButton.propTypes = {
  ...MenuButton.propTypes,
  displayed: PropTypes.bool,
};

export default MenuButton;
