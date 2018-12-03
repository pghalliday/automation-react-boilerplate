/**
 *
 * Asynchronously loads the component for TopAppBar
 *
 */

import loadable from 'loadable-components';

export default loadable(() => import('./index'));
