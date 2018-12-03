// Material UI styles do not put 'px' on numbers
// and styled-components does not add it when transforming
// style objects
const toolbarMixin = theme => ({
  ...theme.mixins.toolbar,
  minHeight: `${theme.mixins.toolbar.minHeight}px`,
  [theme.breakpoints.up('sm')]: {
    ...theme.mixins.toolbar[theme.breakpoints.up('sm')],
    minHeight: `${
      theme.mixins.toolbar[theme.breakpoints.up('sm')].minHeight
    }px`,
  },
});

export { toolbarMixin };
