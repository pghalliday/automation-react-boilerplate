/**
 *
 * LoginProgress
 *
 */

import styled from 'styled-components';
import CircularProgress from '@material-ui/core/CircularProgress';
import green from '@material-ui/core/colors/green';

const LoginProgress = styled(CircularProgress)`
  && {
    color: ${green[500]};
    position: absolute;
    top: -6px,
    left: -20px,
    z-index: 1,
  }
`;

export default LoginProgress;
