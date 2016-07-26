import login from './login/routes'
import memos from './memos/routes'

export default {
  '/': {
    component: {
      template: '<h1>Home</h1>',
    },
  },
  '/login': login,
  '/memos': memos,
}
