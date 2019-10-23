// import { toRoles } from '@/common/utils/role'
export default [
  {
    path: '/cards',
    component: () => import('@/common/layouts/Home'),
    redirect: '/cards/list',
    name: 'cards',
    single: true,
    meta: {
      // roles: toRoles(['admin']),
      title: '卡券',
      icon: 'el-icon-ali-icon_yuangongguanli'
    },
    children: [
      {
        path: 'list',
        component: () => import('@/pages/admin/views/cards'),
        name: 'cardsList',
        hidden: true,
        meta: {
          icon: 'el-icon-ali-yonghu',
          title: '卡券列表'
        }
      }
    ]
  }
]
