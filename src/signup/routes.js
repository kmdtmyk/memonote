import Index from './Index'

export default {
  component: {
    template: '<router-view></router-view>',
  },
  subRoutes: {
    '/': {
      component: Index,
    },
  },
}
