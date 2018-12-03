/**
 *
 * AppBarSpacerDiv
 *
 */

import styled, { css } from 'styled-components';
import { toolbarMixin } from '../../utils/materialUiHelpers';

const AppBarSpacerDiv = styled.div(
  props => `
    && {
      ${css(toolbarMixin(props.theme))}
    }
  `,
);

export default AppBarSpacerDiv;
