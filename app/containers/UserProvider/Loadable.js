/**
 *
 * Asynchronously loads the component for UserProvider
 *
 */

import loadable from 'loadable-components';

export default loadable(() => import('./index'));
