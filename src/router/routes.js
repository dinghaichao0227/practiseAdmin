import home from "../views/home/index.vue";
import login from "../views/login/index.vue"

 export const navigation = [
  {
    path: 'menu1',
    name: 'Menu1',
    mate:{icon: 'icon-icon-line-zoom-out', title: '个人列表'},
    component: () => import("../views/menu/PersonalList/index.vue")
  },
  {
    path: 'menu2',
    name: 'Menu2',
    mate:{icon: 'icon-icon-fill-warning', title: '工作列表'},
    component: () => import("../views/menu/WorkList/index.vue")
  },
  {
    path: 'menu3',
    name: 'Menu3',
    mate:{icon: 'icon-icon-fill-message', title: '日常活动'},
    component: () => import("../views/menu/DailyActivities/index.vue")
  },
  {
    path: 'menu4',
    name: 'Menu4',
    mate:{icon: 'icon-icon-fill-praise', title: '数据表'},

    component: () => import("../views/menu/DataEchart/index.vue")
  },
  {
    path: 'menu5',
    name: 'Menu5',
    mate:{icon: 'icon-icon-line-maintenance', title: '管理数据'},
    component: () => import("../views/menu/AdminList/index.vue")
  }
]

const routes = [
//登录页
  {
    path: '/login',
    name: 'login',
    component: login,
  },
  //首页
  {
    path: '/',
    name: 'home',
    redirect: 'menu1',
    component: home,
    children: [
      ...navigation,
    ]
  }
]
export default routes;