/**
 *
 * ContentMain
 *
 */

import styled from 'styled-components';

const ContentMain = styled.main(
  props => `
    && {
      flex-grow: 1;
      padding: ${props.theme.spacing.unit * 3}px;
      height: 100vh;
      overflow: auto;
    }
  `,
);

export default ContentMain;
