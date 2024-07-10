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

var enterpriseRoutes = [
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
    redirect: "/policy_related/realize",
    name: "政策兑现",
    meta: {
      title: "政策兑现",
      icon: "nested",
    },
    children: [
      {
        path: "realize",
        component: () => import("@/views/policy_related/realize/index"),
        name: "Realize",
        meta: { title: "政策兑现" },
      },
      {
        path: "browse",
        component: () => import("@/views/policy_related/browse/index"),
        name: "Browse",
        meta: { title: "政策查询" },
      },
    ],
  },
  // 404 page must be placed at the end !!!
  { path: "*", redirect: "/404", hidden: true },
];
var carrierRoutes = [
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
    path: "/declar_approval",
    component: Layout,
    redirect: "/declar_approval/in_approval",
    name: "Declar_approval",
    meta: {
      title: "申报审批",
      icon: "form",
    },
    children: [
      {
        path: "in_approval",
        name: "In_approval",
        component: () => import("@/views/declar_approval/in_approval/index"),
        meta: { title: "入驻审批" },
      },
      {
        path: "out_approval",
        name: "Out_approval",
        component: () => import("@/views/declar_approval/out_approval/index"),
        meta: { title: "搬离审批" },
      },
      {
        path: "important_approval",
        name: "Important_approval",
        component: () =>
          import("@/views/declar_approval/important_approval/index"),
        meta: { title: "重大信息变更审批" },
      },
      {
        path: "pro_approval",
        name: "Pro_approval",
        component: () => import("@/views/declar_approval/pro_approval/index"),
        meta: { title: "项目审批" },
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
        path: "query",
        name: "Query",
        component: () => import("@/views/pro_related/query/index"),
        meta: { title: "项目查询" },
      },
    ],
  },

  {
    path: "/policy_related",
    component: Layout,
    redirect: "/policy_related/realize",
    name: "政策兑现",
    meta: {
      title: "政策兑现",
      icon: "nested",
    },
    children: [
      {
        path: "realize",
        component: () => import("@/views/policy_related/realize/index"),
        name: "Realize",
        meta: { title: "政策兑现" },
      },
      {
        path: "browse",
        component: () => import("@/views/policy_related/browse/index"),
        name: "Browse",
        meta: { title: "政策查询" },
      },
    ],
  },

  // 404 page must be placed at the end !!!
  { path: "*", redirect: "/404", hidden: true },
];
var governmentRoutes = [
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
        path: "progress_query",
        name: "Progress_query",
        component: () => import("@/views/pro_related/progress_query/index"),
        meta: { title: "项目进度查询" },
      },
    ],
  },

  {
    path: "/policy_related",
    component: Layout,
    redirect: "/policy_related/realize",
    name: "政策兑现",
    meta: {
      title: "政策兑现",
      icon: "nested",
    },
    children: [
      {
        path: "realize",
        component: () => import("@/views/policy_related/realize/index"),
        name: "Realize",
        meta: { title: "政策兑现" },
      },
      {
        path: "browse",
        component: () => import("@/views/policy_related/browse/index"),
        name: "Browse",
        meta: { title: "政策查询" },
      },
    ],
  },

  // 404 page must be placed at the end !!!
  { path: "*", redirect: "/404", hidden: true },
];
var constantRoutes = [
  {
    path: "/login",
    //组件的映射,@是src目录
    component: () => import("@/views/login/index"),
    hidden: true,
  },
  {
    path: "/q",
    component: () => import("@/views/q/query_pro"),
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
    redirect: "/pro_related/apply",
    name: "Pro_related",
    meta: {
      title: "项目相关",
      icon: "form",
    },
    children: [
      {
        path: "apply",
        name: "Apply",
        component: () => import("@/views/pro_related/apply/index"),
        meta: { title: "项目申报" },
      },
      {
        path: "release",
        name: "Release",
        component: () => import("@/views/pro_related/release/index"),
        meta: { title: "项目发布" },
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
    path: "/carrier",
    component: Layout,
    redirect: "/change/baseInfochange",
    name: "Carrier",
    meta: {
      title: "信息变更",
      icon: "nested",
    },
    children: [
      {
        path: "baseInfochange",
        component: () => import("@/views/carrier/baseInfochange/index"), // Parent router-view
        name: "BaseInfochange",
        meta: { title: "基本信息完善" },
      },
      {
        path: "baseInfoQuery",
        component: () => import("@/views/carrier/baseInfoQuery/index"),
        name: "Base_Information",
        meta: { title: "载体信息查看" },
      },
    ],
  },
  {
    path: "/policy_related",
    component: Layout,
    redirect: "/policy_related/realize",
    name: "政策兑现",
    meta: {
      title: "政策兑现",
      icon: "nested",
    },
    children: [
      {
        path: "realize",
        component: () => import("@/views/policy_related/realize/index"),
        name: "Realize",
        meta: { title: "政策兑现" },
      },
      {
        path: "browse",
        component: () => import("@/views/policy_related/browse/index"),
        name: "Browse",
        meta: { title: "政策查询" },
      },
    ],
  },
  {
    path: "/declar_approval",
    component: Layout,
    redirect: "/declar_approval/in_approval",
    name: "Declar_approval",
    meta: {
      title: "申报审批",
      icon: "form",
    },
    children: [
      {
        path: "in_approval",
        name: "In_approval",
        component: () => import("@/views/declar_approval/in_approval/index"),
        meta: { title: "入驻审批" },
      },
      {
        path: "out_approval",
        name: "Out_approval",
        component: () => import("@/views/declar_approval/out_approval/index"),
        meta: { title: "搬离审批" },
      },
      {
        path: "important_approval",
        name: "Important_approval",
        component: () =>
          import("@/views/declar_approval/important_approval/index"),
        meta: { title: "重大信息变更审批" },
      },
      {
        path: "pro_approval",
        name: "Pro_approval",
        component: () => import("@/views/declar_approval/pro_approval/index"),
        meta: { title: "项目审批" },
      },
    ],
  },

  {
    path: "/performance_requ",
    component: Layout,
    redirect: "/performance_requ/per_fill",
    name: "Performance_requ",
    meta: {
      title: "绩效申报",
      icon: "form",
    },
    children: [
      {
        path: "per_fill",
        name: "Per_fill",
        component: () => import("@/views/performance_requ/per_fill/index"),
        meta: { title: "考察填写" },
      },
      {
        path: "per_history",
        name: "Per_history",
        component: () => import("@/views/performance_requ/per_history/index"),
        meta: { title: "绩效历史" },
      },
    ],
  },
  {
    path: "/performance_rele",
    component: Layout,
    redirect: "/performance_rele/survey_release",
    name: "Performance_rele",
    meta: {
      title: "绩效发布",
      icon: "form",
    },
    children: [
      {
        path: "survey_release",
        name: "Survey_release",
        component: () =>
          import("@/views/performance_rele/survey_release/index"),
        meta: { title: "考察发布" },
      },
      {
        path: "template_making",
        name: "Template_making",
        component: () =>
          import("@/views/performance_rele/template_making/index"),
        meta: { title: "模板制作" },
      },
    ],
  },
  {
    path: "/performance_appraisal",
    component: Layout,
    redirect: "/performance_appraisal/per_approval",
    name: "Performance_appraisal",
    meta: {
      title: "绩效考核",
      icon: "form",
    },
    children: [
      {
        path: "per_approval",
        name: "Per_approval",
        component: () =>
          import("@/views/performance_appraisal/per_approval/index"),
        meta: { title: "绩效审核" },
      },
      {
        path: "per_history",
        name: "Per_history",
        component: () =>
          import("@/views/performance_appraisal/per_history/index"),
        meta: { title: "绩效历史" },
      },
    ],
  },
  {
    path: "/",
    component: Layout,
    redirect: "/General_Inquiries",
    children: [
      {
        path: "General_Inquiries",
        name: "general_Inquiries",
        component: () => import("@/views/General_Inquiries/index"),
        meta: { title: "综合查询", icon: "dashboard" },
      },
    ],
  },
  {
    path: "/",
    component: Layout,
    redirect: "/Policy_release",
    children: [
      {
        path: "Policy_release",
        name: "policy_release",
        component: () => import("@/views/policy_related/release/index"),
        meta: { title: "政策发布", icon: "dashboard" },
      },
    ],
  },
  {
    path: "/details",
    component: Layout,
    name: "Details",
    meta: {
      title: "详情",
      icon: "form",
    },
    children: [
      {
        path: "pro/:unicode",
        name: "Pro",
        component: () => import("@/views/details/pro"),
        meta: { title: "项目详情", icon: "dashboard" },
        props: true,
      },
      {
        path: "info/:unicode",
        name: "Info",
        component: () => import("@/views/details/info"),
        meta: { title: "企业详情", icon: "dashboard" },
        props: true,
      },
      {
        path: "policy/:unicode",
        name: "Info",
        component: () => import("@/views/details/policy"),
        meta: { title: "政策详情", icon: "dashboard" },
        props: true,
      },
    ],
  },
  {
    path: "/",
    component: Layout,
    redirect: "/judge",
    children: [
      {
        path: "judge",
        name: "Judge",
        component: () => import("@/views/judge/index"),
        meta: { title: "审批界面", icon: "dashboard" },
      },
    ],
  },
  {
    path: "/example",
    component: Layout,
    redirect: "/example/list",
    name: "Example",
    meta: {
      title: "Example",
      icon: "el-icon-s-help",
    },
    children: [
      {
        path: "create",
        component: () => import("@/views/example/create.vue"),
        name: "CreateArticle",
        meta: { title: "Create Article", icon: "edit" },
      },
      {
        path: "edit/:id(\\d+)",
        component: () => import("@/views/example/edit.vue"),
        name: "EditArticle",
        meta: {
          title: "Edit Article",
          noCache: true,
          activeMenu: "/example/list",
        },
        hidden: true,
      },
      {
        path: "list",
        component: () => import("@/views/example/list.vue"),
        name: "ArticleList",
        meta: { title: "Article List", icon: "list" },
      },
    ],
  },

  // 404 page must be placed at the end !!!
  { path: "*", redirect: "/404", hidden: true },
];

function createRouter(role) {
  // return new Router({
  //   // mode: 'history', // require service support
  //   scrollBehavior: () => ({ y: 0 }),
  //   routes: constantRoutes,
  // });
  // console.log("create router now! " +role);
  if (role == "enterprise") {
    // console.log("enterprise login!");
    return new Router({
      // mode: 'history', // require service support
      scrollBehavior: () => ({ y: 0 }),
      routes: enterpriseRoutes,
    });
  } else if (role == "carrier") {
    // console.log("carrier login!");
    return new Router({
      // mode: 'history', // require service support
      scrollBehavior: () => ({ y: 0 }),
      routes: carrierRoutes,
    });
  } else if (role == "government") {
    // console.log("government login!");
    return new Router({
      // mode: 'history', // require service support
      scrollBehavior: () => ({ y: 0 }),
      routes: governmentRoutes,
    });
  } else {
    return new Router({
      // mode: 'history', // require service support
      scrollBehavior: () => ({ y: 0 }),
      routes: constantRoutes,
    });
  }
}

// console.log("local:"+localStorage.getItem('role'));
const router = createRouter(localStorage.getItem("role"));

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter(localStorage.getItem("role"));
  router.matcher = newRouter.matcher; // reset router
}

export default router;
