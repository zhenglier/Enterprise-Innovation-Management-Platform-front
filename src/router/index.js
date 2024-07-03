import Vue from "vue";
import Router from "vue-router";

//定义项目整体的路由

Vue.use(Router);

/* Layout */
import Layout from "@/layout";

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: "/login",
    //组件的映射,@是src目录
    component: () => import("@/views/login/index"),
    hidden: true,
  },

  {
    path: "/signup",
    component: () => import("@/views/signup/index"),
    hidden: true,
  },

  {
    path: "/404",
    component: () => import("@/views/404"),
    hidden: true,
  },

  {
    path: "/",
    component: Layout,
    redirect: "/homepage",
    children: [
      {
        path: "homepage",
        name: "Homepage",
        component: () => import("@/views/homepage/index"),
        meta: { title: "主页", icon: "dashboard" },
      },
    ],
  },

  {
    path: "/trans",
    component: Layout,
    redirect: "/trans/in",
    name: "变迁申请",
    meta: { title: "变迁申请", icon: "el-icon-s-help" },
    children: [
      {
        path: "in",
        name: "入驻申请",
        component: () => import("@/views/trans/in/index"),
        meta: { title: "入驻申请", icon: "table" },
      },
      {
        path: "out",
        name: "搬离申请",
        component: () => import("@/views/trans/out/index"),
        meta: { title: "搬离申请", icon: "tree" },
      },
    ],
  },

  {
    path: "/pro_related",
    component: Layout,
    redirect: "/pro_related/release",
    name: "Pro_related",
    meta: {
      title: "项目相关",
      icon: "form",
    },
    children: [
      {
        path: "release",
        name: "Release",
        component: () => import("@/views/pro_related/release/index"),
        meta: { title: "项目发布" },
      },
      {
        path: "apply",
        name: "Apply",
        component: () => import("@/views/pro_related/apply/index"),
        meta: { title: "项目申报" },
      },
      {
        path: "query",
        name: "Query",
        component: () => import("@/views/pro_related/query/index"),
        meta: { title: "项目查询" },
      },
      {
        path: "progress_query",
        name: "Progress_query",
        component: () => import("@/views/pro_related/progress_query/index"),
        meta: { title: "项目进度查询" },
      },
    ],
  },

  {
    path: "/change",
    component: Layout,
    redirect: "/change/menu1",
    name: "Change",
    meta: {
      title: "信息更改",
      icon: "nested",
    },
    children: [
      {
        path: "enterprise_Information",
        component: () => import("@/views/change/enterprise_Information/index"), // Parent router-view
        name: "Enterprise_Information",
        meta: { title: "企业信息查看" },
        // children: [
        //   {
        //     path: "menu1-1",
        //     component: () => import("@/views/nested/menu1/menu1-1"),
        //     name: "Menu1-1",
        //     meta: { title: "Menu1-1" },
        //   },
        //   {
        //     path: "menu1-2",
        //     component: () => import("@/views/nested/menu1/menu1-2"),
        //     name: "Menu1-2",
        //     meta: { title: "Menu1-2" },
        //     children: [
        //       {
        //         path: "menu1-2-1",
        //         component: () =>
        //           import("@/views/nested/menu1/menu1-2/menu1-2-1"),
        //         name: "Menu1-2-1",
        //         meta: { title: "Menu1-2-1" },
        //       },
        //       {
        //         path: "menu1-2-2",
        //         component: () =>
        //           import("@/views/nested/menu1/menu1-2/menu1-2-2"),
        //         name: "Menu1-2-2",
        //         meta: { title: "Menu1-2-2" },
        //       },
        //     ],
        //   },
        //   {
        //     path: "menu1-3",
        //     component: () => import("@/views/nested/menu1/menu1-3"),
        //     name: "Menu1-3",
        //     meta: { title: "Menu1-3" },
        //   },
        // ],
      },
      {
        path: "base_Information",
        component: () => import("@/views/change/base_Information/index"),
        name: "Base_Information",
        meta: { title: "基础信息完善" },
      },
      {
        path: "importance_Information",
        component: () => import("@/views/change/importance_Information/index"),
        name: "Importance_Information",
        meta: { title: "重大信息变更" },
      },
    ],
  },

  {
    path: "/policy_related",
    component: Layout,
    redirect: "/policy_related/browse",
    name: "政策兑现",
    meta: {
      title: "政策兑现",
      icon: "nested",
    },
    children: [
      {
        path: "browse",
        component: () => import("@/views/policy_related/browse/index"),
        name: "Browse",
        meta: { title: "政策查询" },
      },
      {
        path: "reques",
        component: () => import("@/views/policy_related/reques/index"),
        name: "Reques",
        meta: { title: "政策申报" },
      },
    ],
  },

  // 404 page must be placed at the end !!!
  { path: "*", redirect: "/404", hidden: true },
];

const createRouter = () =>
  new Router({
    // mode: 'history', // require service support
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes,
  });

const router = createRouter();

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter();
  router.matcher = newRouter.matcher; // reset router
}

export default router;
