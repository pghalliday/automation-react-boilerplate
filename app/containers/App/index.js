/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from 'styled-components';

import RootDiv from 'components/RootDiv';
import TopAppBar from 'containers/TopAppBar/Loadable';
import LeftDrawer from 'containers/LeftDrawer/Loadable';
import ContentMain from 'components/ContentMain';
import HomePage from 'containers/HomePage/Loadable';
import OtherPage from 'containers/OtherPage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import DashboardIcon from '@material-ui/icons/Dashboard';
import LayersIcon from '@material-ui/icons/Layers';
import AppBarSpacerDiv from 'components/AppBarSpacerDiv';

import injectReducer from 'utils/injectReducer';
import { makeSelectIsDrawerOpen } from './selectors';
import { toggleDrawerOpenAction } from './actions';
import reducer from './reducer';
import messages from './messages';
import { DRAWER_WIDTH, HOME_ROUTE, OTHER_ROUTE } from './constants';

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
});

const pages = [
  {
    name: messages.homeTitle,
    exact: true,
    icon: <DashboardIcon />,
    container: HomePage,
    route: HOME_ROUTE,
  },
  {
    name: messages.otherTitle,
    exact: false,
    icon: <LayersIcon />,
    container: OtherPage,
    route: OTHER_ROUTE,
  },
];

/* eslint-disable react/prefer-stateless-function */
export class App extends React.PureComponent {
  render() {
    const routes = pages.map(page => (
      <Route
        key={page.route}
        exact={page.exact}
        path={page.route}
        component={page.container}
      />
    ));
    routes.push(<Route key="" path="" component={NotFoundPage} />);
    return (
      <ThemeProvider theme={theme}>
        <RootDiv>
          <CssBaseline />
          <TopAppBar
            shift={DRAWER_WIDTH}
            shifted={this.props.isDrawerOpen}
            onMenuClick={() => {
              this.props.dispatch(toggleDrawerOpenAction());
            }}
          />
          <LeftDrawer
            pages={pages}
            width={DRAWER_WIDTH}
            open={this.props.isDrawerOpen}
            onCloseClick={() => {
              this.props.dispatch(toggleDrawerOpenAction());
            }}
          />
          <ContentMain>
            <AppBarSpacerDiv />
            <Switch>{routes}</Switch>
          </ContentMain>
        </RootDiv>
      </ThemeProvider>
    );
  }
}

App.propTypes = {
  dispatch: PropTypes.func.isRequired,
  isDrawerOpen: PropTypes.bool,
};

const mapStateToProps = createStructuredSelector({
  isDrawerOpen: makeSelectIsDrawerOpen(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'app', reducer });

export default compose(
  withReducer,
  withConnect,
)(App);
