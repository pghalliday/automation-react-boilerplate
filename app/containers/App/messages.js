/*
 * App Messages
 *
 * This contains all the text for the App container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.App';

export default defineMessages({
  homeTitle: {
    id: `${scope}.homeTitle`,
    defaultMessage: 'This is the home title!',
  },
  otherTitle: {
    id: `${scope}.otherTitle`,
    defaultMessage: 'This is the other title!',
  },
});
