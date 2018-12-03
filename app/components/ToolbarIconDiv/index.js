/**
 *
 * ToolbarIconDiv
 *
 */

import styled, { css } from 'styled-components';
import { toolbarMixin } from '../../utils/materialUiHelpers';

const ToolbarIconDiv = styled.div(
  props => `
    && {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      padding: 0 8px;
      ${css(toolbarMixin(props.theme))}
    }
  `,
);

export default ToolbarIconDiv;
