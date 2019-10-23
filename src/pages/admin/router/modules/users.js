// import { toRoles } from '@/common/utils/role'
export default [
  {
    path: '/users',
    component: () => import('@/common/layouts/Home'),
    redirect: '/users/list',
    name: 'users',
    single: true,
    meta: {
      // roles: toRoles(['admin']),
      title: '用户',
      icon: 'el-icon-ali-icon_yuangongguanli'
    },
    children: [
      {
        path: 'list',
        component: () => import('@/pages/admin/views/users'),
        name: 'usersList',
        hidden: true,
        meta: {
          icon: 'el-icon-ali-yonghu',
          title: '用户列表'
        }
      }
    ]
  }
]
