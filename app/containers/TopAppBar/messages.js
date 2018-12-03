/*
 * TopAppBar Messages
 *
 * This contains all the text for the TopAppBar container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.TopAppBar';

export default defineMessages({
  title: {
    id: `${scope}.title`,
    defaultMessage: 'This is the TopAppBar container!',
  },
});
