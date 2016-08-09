import signup from './signup/routes'
import login from './login/routes'
import memos from './memos/routes'
import labels from './labels/routes'

export default {
  '/': {
    component: {
      template: '<h1>Home</h1>',
    },
  },
  '/signup': signup,
  '/login': login,
  '/memos': memos,
  '/labels': labels,
}
