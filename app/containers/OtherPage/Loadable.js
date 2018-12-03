/**
 *
 * Asynchronously loads the component for OtherPage
 *
 */

import loadable from 'loadable-components';

export default loadable(() => import('./index'));
