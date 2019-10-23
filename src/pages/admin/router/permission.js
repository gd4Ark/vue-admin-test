import router from './index'

import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style

import getPageTitle from '@/common/utils/get-page-title'
// import { hasPermission, findRoleHome } from '@/common/utils/role'

const whiteList = ['/login'] // no redirect whitelist

router.beforeEach(async (to, from, next) => {
  // start progress bar
  NProgress.start()
  // set page title
  document.title = getPageTitle(to.meta.title)
  if (whiteList.indexOf(to.path) !== -1) {
    return next()
  }

  return next()
})

router.afterEach(() => {
  // finish progress bar
  NProgress.done()
})
