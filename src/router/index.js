// import Vue from 'vue'
// import Router from 'vue-router'

// // in development-env not use lazy-loading, because lazy-loading too many pages will cause webpack hot update too slow. so only in production use lazy-loading;
// // detail: https://panjiachen.github.io/vue-element-admin-site/#/lazy-loading

// Vue.use(Router)

// /* Layout */
// import Layout from '../views/layout/Layout'

// /**
// * hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
// * alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
// *                                if not set alwaysShow, only more than one route under the children
// *                                it will becomes nested mode, otherwise not show the root menu
// * redirect: noredirect           if `redirect:noredirect` will no redirect in the breadcrumb
// * name:'router-name'             the name is used by <keep-alive> (must set!!!)
// * meta : {
//     title: 'title'               the name show in submenu and breadcrumb (recommend set)
//     icon: 'svg-name'             the icon show in the sidebar,
//   }
// **/
// export const constantRouterMap = [
//   { path: '/login', component: () => import('@/views/login/index'), hidden: true },
//   { path: '/404', component: () => import('@/views/404'), hidden: true },

//   {
//     path: '/',
//     component: Layout,
//     redirect: '/dashboard',
//     name: 'Dashboard',
//     hidden: true,
//     children: [{
//       path: 'dashboard',
//       component: () => import('@/views/dashboard/index')
//     }]
//   },

//   {
//     path: '/example',
//     component: Layout,
//     redirect: '/example/table',
//     name: 'Example',
//     meta: { title: 'Example', icon: 'example' },
//     children: [
//       {
//         path: 'table',
//         name: 'Table',
//         component: () => import('@/views/table/index'),
//         meta: { title: 'Table', icon: 'table' }
//       },
//       {
//         path: 'tree',
//         name: 'Tree',
//         component: () => import('@/views/tree/index'),
//         meta: { title: 'Tree', icon: 'tree' }
//       }
//     ]
//   },

//   {
//     path: '/form',
//     component: Layout,
//     children: [
//       {
//         path: 'index',
//         name: 'Form',
//         component: () => import('@/views/form/index'),
//         meta: { title: 'Form', icon: 'form' }
//       }
//     ]
//   },

//   {
//     path: '/nested',
//     component: Layout,
//     redirect: '/nested/menu1',
//     name: 'Nested',
//     meta: {
//       title: 'Nested',
//       icon: 'nested'
//     },
//     children: [
//       {
//         path: 'menu1',
//         component: () => import('@/views/nested/menu1/index'), // Parent router-view
//         name: 'Menu1',
//         meta: { title: 'Menu1' },
//         children: [
//           {
//             path: 'menu1-1',
//             component: () => import('@/views/nested/menu1/menu1-1'),
//             name: 'Menu1-1',
//             meta: { title: 'Menu1-1' }
//           },
//           {
//             path: 'menu1-2',
//             component: () => import('@/views/nested/menu1/menu1-2'),
//             name: 'Menu1-2',
//             meta: { title: 'Menu1-2' },
//             children: [
//               {
//                 path: 'menu1-2-1',
//                 component: () => import('@/views/nested/menu1/menu1-2/menu1-2-1'),
//                 name: 'Menu1-2-1',
//                 meta: { title: 'Menu1-2-1' }
//               },
//               {
//                 path: 'menu1-2-2',
//                 component: () => import('@/views/nested/menu1/menu1-2/menu1-2-2'),
//                 name: 'Menu1-2-2',
//                 meta: { title: 'Menu1-2-2' }
//               }
//             ]
//           },
//           {
//             path: 'menu1-3',
//             component: () => import('@/views/nested/menu1/menu1-3'),
//             name: 'Menu1-3',
//             meta: { title: 'Menu1-3' }
//           }
//         ]
//       },
//       {
//         path: 'menu2',
//         component: () => import('@/views/nested/menu2/index'),
//         meta: { title: 'menu2' }
//       }
//     ]
//   },

//   {
//     path: 'external-link',
//     component: Layout,
//     children: [
//       {
//         path: 'https://panjiachen.github.io/vue-element-admin-site/#/',
//         meta: { title: 'External Link', icon: 'link' }
//       }
//     ]
//   },

//   { path: '*', redirect: '/404', hidden: true }
// ]

// export default new Router({
//   // mode: 'history', //后端支持可开
//   scrollBehavior: () => ({ y: 0 }),
//   routes: constantRouterMap
// })


import Vue from 'vue'
import Router from 'vue-router'

// in development-env not use lazy-loading, because lazy-loading too many pages will cause webpack hot update too slow. so only in production use lazy-loading;
// detail: https://panjiachen.github.io/vue-element-admin-site/#/lazy-loading

Vue.use(Router)

/* Layout */
import Layout from '../views/layout/Layout'

/**
* hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
* alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
*                                if not set alwaysShow, only more than one route under the children
*                                it will becomes nested mode, otherwise not show the root menu
* redirect: noredirect           if `redirect:noredirect` will no redirct in the breadcrumb
* name:'router-name'             the name is used by <keep-alive> (must set!!!)
* meta : {
    title: 'title'               the name show in submenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar,
  }
**/
export const constantRouterMap = [
  { path: '/login', component: () => import('@/views/login/index'), hidden: true },
  { path: '/404', component: () => import('@/views/404'), hidden: true },

  {
    path: '',
    component: Layout,
    redirect: 'home',
    children: [
      {
        path: 'home',
        component: () => import('@/views/homePage/index'),
        name: 'home',
        meta: { title: '首页', icon: 'shouye' }
      }
    ]
  },
  {path:'*',component: () => import('@/views/404')}
  // {
  //   path: '/',
  //   component: Layout,
  //   redirect: 'noredirect',
  //   name: 'qichezulin',
  //   meta: { title: '汽车租赁', icon: 'form' },
  //   children: [
  //     {
  //       path: 'carManage/index',
  //       name: 'carManage',
  //       component: () => import('@/views/qichezulin/company/carManage/index'),
  //       meta: { title: '车辆管理', icon: 'form' }
  //     },
  //     {
  //       path: 'leaseManage/index',
  //       name: 'leaseManage',
  //       component: () => import('@/views/qichezulin/company/leaseManage/index'),
  //       meta: { title: '租赁管理', icon: 'form' }
  //     }
  //   ]
  // },
  // {
    //   path: '/',
    //   component: Layout,
    //   redirect: 'noredirect',
    //   name: 'diandang',
  //   meta: { title: '典当管理', icon: 'form', roles: ['uuuu'] },
  //   children: [
    //     {
      //       path: 'company/ywlx/index',
  //       name: 'ywgl',
  //       component: () => import('@/views/diandang/company/ywlx/index'),
  //       meta: { title: '业务管理', icon: 'form', roles: ['admin'] }
  //     },
  //     {
  //       path: 'police/ywlx/index',
  //       name: 'ywcx',
  //       component: () => import('@/views/diandang/police/ywlx/index'),
  //       meta: { title: '业务查询', icon: 'form', roles: ['admin'] }
  //     },
  //     {
  //       path: 'police/dwcx/index',
  //       name: 'dwcx',
  //       component: () => import('@/views/diandang/police/dwcx/index'),
  //       meta: { title: '当物查询', icon: 'form', roles: ['admin'] }
  //     },
  //     {
  //       path: 'police/ddtj/index',
  //       name: 'ddtj',
  //       component: () => import('@/views/diandang/police/ddtj/index'),
  //       meta: { title: '典当统计', icon: 'form', roles: ['admin'] }
  //     }
  //   ]
  // },
  // {
  //   path: '/',
  //   component: Layout,
  //   redirect: 'noredirect',
  //   name: 'lvyou',
  //   meta: { title: '旅游行业', icon: 'form' },
  //   children: [
  //     {
  //       path: 'lvyou/inquery',
  //       name: 'inquery',
  //       component: () => import('@/views/lvyou/police/inquery'),
  //       meta: { title: '境内游客查询', icon: 'form' }
  //     },
  //     {
  //       path: 'lvyou/outsidequery',
  //       name: 'outsidequery',
  //       component: () => import('@/views/lvyou/police/outsidequery'),
  //       meta: { title: '境外游客查询', icon: 'form' }
  //     },
  //     {
  //       path: 'lvyou/inmanager',
  //       name: 'inmanager',
  //       component: () => import('@/views/lvyou/company/inmanager/index'),
  //       meta: { title: '境内游客管理', icon: 'form' }
  //     },
  //     {
  //       path: 'lvyou/outsidemanager',
  //       name: 'outsidemanager',
  //       component: () => import('@/views/lvyou/company/outsidemanager/index'),
  //       meta: { title: '境外游客管理', icon: 'form' }
  //     }
  //   ]
  // },
  // {
  //   path: '/',
  //   component: Layout,
  //   redirect: 'noredirect',
  //   name: 'ershouji',
  //   meta: { title: '二手手机', icon: 'form' },
  //   children: [
  //     {
  //       path: 'ershouji/tradingquery',
  //       name: 'tradingquery',
  //       component: () => import('@/views/ershouji/police/tradingquery'),
  //       meta: { title: '业务查询', icon: 'form' }
  //     },
  //     {
  //       path: 'ershouji/transactionmanagement',
  //       name: 'transactionmanagement',
  //       component: () => import('@/views/ershouji/company/transactionmanagement'),
  //       meta: { title: '交易管理', icon: 'form' }
  //     }
  //   ]
  // },
  // {
  //   path: '/',
  //   component: Layout,
  //   redirect: 'noredirect',
  //   name: 'kaisuo',
  //   meta: { title: '开锁行业', icon: 'form' },
  //   children: [
  //     {
  //       path: 'kaisuo/kaisuolist',
  //       name: 'kaisuolist',
  //       component: () => import('@/views/kaisuo/kaisuolist'),
  //       meta: { title: '业务查询', icon: 'form' }
  //     },
  //     {
  //       path: 'kaisuo/kaisuolocksmith',
  //       name: 'kaisuolocksmith',
  //       component: () => import('@/views/kaisuo/kaisuolocksmith'),
  //       meta: { title: '锁匠查询', icon: 'form' }
  //     }
  //   ]
  // },
  // {
  //   path: '/addcustomer',
  //   component: Layout,
  //   redirect: 'noredirect',
  //   children: [
  //     {
  //       path: 'kehu/index',
  //       name: 'index',
  //       component: () => import('@/views/kehu/index'),
  //       meta: { title: '客户管理', icon: 'form' }
  //     }
  //   ]
  // },

  // {
  //   path: '/',
  //   component: Layout,
  //   redirect: 'noredirect',
  //   name: 'ershuoche',
  //   meta: { title: '二手车管理', icon: 'form', roles: ['uuuu'] },
  //   children: [
  //     {
  //       path: 'companycar/index',
  //       name: 'car',
  //       component: () => import('@/views/ershouche/company/car/index'),
  //       meta: { title: '车辆管理', icon: 'form' }
  //     },
  //     {
  //       path: 'company/yw/index',
  //       name: 'yw',
  //       component: () => import('@/views/ershouche/company/yw/index'),
  //       meta: { title: '业务管理', icon: 'form', roles: ['admin'] }
  //     },
  //     {
  //       path: 'policecar/index',
  //       name: 'cars',
  //       component: () => import('@/views/ershouche/police/car/index'),
  //       meta: { title: '车辆查询', icon: 'form' }
  //     },
  //     {
  //       path: 'police/yw/index',
  //       name: 'yws',
  //       component: () => import('@/views/ershouche/police/yw/index'),
  //       meta: { title: '业务查询', icon: 'form', roles: ['admin'] }
  //     }
  //   ]
  // },
  // {
  //   path: '/',
  //   component: Layout,
  //   redirect: 'noredirect',
  //   name: 'jixiu',
  //   meta: { title: '机修管理', icon: 'form', roles: ['uuuu'] },
  //   children: [
  //     {
  //       path: 'vehicleManage/index',
  //       name: 'vehicleManage',
  //       component: () => import('@/views/jixiu/company/carManage/index'),
  //       meta: { title: '车辆管理', icon: 'form' }
  //     },
  //     {
  //       path: 'businessManage/index',
  //       name: 'businessManage',
  //       component: () => import('@/views/jixiu/company/businessManage/index'),
  //       meta: { title: '业务管理', icon: 'form', roles: ['admin'] }
  //     },
  //     //公安端
  //     {
  //       path: 'vehicleManage1/index',
  //       name: 'vehicleManage1',
  //       component: () => import('@/views/jixiu/police/carManage/index'),
  //       meta: { title: '车辆管理1', icon: 'form' }
  //     },
  //     {
  //       path: 'businessManage1/index',
  //       name: 'businessManage1',
  //       component: () => import('@/views/jixiu/police/businessManage/index'),
  //       meta: { title: '业务管理1', icon: 'form', roles: ['admin'] }
  //     },
  //   ]
  // },
  // {
  //   path: '/',
  //   component: Layout,
  //   redirect: 'noredirect',
  //   name: 'richang',
  //   meta: { title: '日常管理', icon: 'form' },
  //   children: [
  //     {
  //       path: 'richang/enterprise',
  //       name: 'enterprise',
  //       component: () => import('@/views/richang/enterprise'),
  //       meta: { title: '企业管理', icon: 'form' }
  //     },
  //     {
  //       path: 'richang/practitionersG',
  //       name: 'practitionersG',
  //       component: () => import('@/views/richang/practitionersG'),
  //       meta: { title: '从业人员查询', icon: 'form' }
  //     },
  //     {
  //       path: 'richang/practitionersQ',
  //       name: 'practitionersQ',
  //       component: () => import('@/views/richang/practitionersQ'),
  //       meta: { title: '从业人员管理', icon: 'form' }
  //     },
  //     {
  //       path: 'richang/customer',
  //       name: 'customer',
  //       component: () => import('@/views/richang/customer'),
  //       meta: { title: '客户查询', icon: 'form' }
  //     },
  //     {
  //       path: 'richang/noticeG',
  //       name: 'noticeG',
  //       component: () => import('@/views/richang/noticeG'),
  //       meta: { title: '通知公告(公安)', icon: 'form' }
  //     },
  //     {
  //       path: 'richang/noticeQ',
  //       name: 'noticeQ',
  //       component: () => import('@/views/richang/noticeQ'),
  //       meta: { title: '通知公告(企业)', icon: 'form' }
  //     },
  //     {
  //       path: 'richang/suspiciousG',
  //       name: 'suspiciousG',
  //       component: () => import('@/views/richang/suspiciousG'),
  //       meta: { title: '可疑情况查询', icon: 'form' }
  //     },
  //     {
  //       path: 'richang/suspiciousQ',
  //       name: 'suspiciousQ',
  //       component: () => import('@/views/richang/suspiciousQ'),
  //       meta: { title: '可疑情况上报', icon: 'form' }
  //     }
  //   ]
  // },
  // {
  //   path: '/',
  //   component: Layout,
  //   redirect: 'noredirect',
  //   name: 'systemManage',
  //   meta: { title: '系统管理', icon: 'form', roles: ['uuuu'] },
  //   children: [
  //     {
  //       path: 'Dic',
  //       name: 'Dic',
  //       component: () => import('@/views/xitongguanli/Dic'),
  //       meta: { title: '数据字典', icon: 'form' }
  //     },
  //     {
  //       path: 'Organization',
  //       name: 'Organization',
  //       component: () => import('@/views/xitongguanli/Organization'),
  //       meta: { title: '机构管理', icon: 'form' }
  //     },
  //     // {
  //     //   path: 'administrativeManage',
  //     //   name: 'administrativeManage',
  //     //   component: () => import('@/views/systemManage/administrativeManage'),
  //     //   meta: { title: '行政区域管理', icon: 'form', roles: ['admin'] }
  //     // },
  //     {
  //       path: 'User',
  //       name: 'User',
  //       component: () => import('@/views/xitongguanli/User'),
  //       meta: { title: '用户管理', icon: 'form', roles: ['admin'] }
  //     },
  //     {
  //       path: 'Role',
  //       name: 'Role',
  //       component: () => import('@/views/xitongguanli/Role'),
  //       meta: { title: '角色管理', icon: 'form', roles: ['admin'] }  
  //     },
  //     {
  //       path: 'Permission',
  //       name: 'Permission',
  //       component: () => import('@/views/xitongguanli/Permission'),
  //       meta: { title: '菜单管理', icon: 'form', roles: ['admin'] }
  //     }
  //   ]
  // }
]
console.log(constantRouterMap)
export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
}) 

// export const asyncRouterMap = [{ path: '*', redirect: '/404', hidden: true }]
