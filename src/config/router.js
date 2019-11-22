import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const routes = [
  {
    path: '*',
    redirect: '/login/phone'
  },
   {
     path: '/home',
     component: () => import('../page/index'),
     meta: {
       title: '首页'
     }
   },
  {
    path: '/home/:id',
    component: () => import('../page/index'),
    meta: {
      title: '首页'
    }
  },
  {
	path: '/login/phone',
    component: () => import('../page/account/phonelogin'),
    meta: {
      title: '登录',
      type:'login'
    }
  },
  {
	path: '/user/index',
    component: () => import('../page/user/index'),
    name: 'user',
    meta: {
      title: '会员中心'
    }
  },
  {
	path: '/user/info',
    component: () => import('../page/user/info/detail'),
    name: 'user',
    meta: {
      title: '账号管理'
    }
  },
    {
        path: '/user/info/userInfo',
        component: () => import('../page/user/info/userInfo'),
        meta: {
            title: '修改个人信息'
        }
    },
    {
        path: '/user/info/changePhone',
        component: () => import('../page/user/info/changePhone'),
        meta: {
            title: '修改绑定手机'
        }
    },
  {
    path: '/user/address',
    component: () => import('../page/user/address/list'),
    meta: {
      title: '我的地址'
    }
  },
  {
        path: '/user/defaultConmpany',
        component: () => import('../page/user/company/defalutCompany'),
        meta: {
            title: '选择默认经销商'
        }
  },
  {
    path: '/user/address/edit',
    component: () => import('../page/user/address/edit'),
    meta: {
      title: '修改地址'
    }
  },
  {
    path: '/user/favorite',
    component: () => import('../page/user/favorite/list'),
    meta: {
      title: '我的收藏'
    }
  },
  {
    path: '/user/coupon',
    component: () => import('../page/user/coupon/list'),
    meta: {
      title: '我的优惠券'
    }
  },
  {
    path: '/user/order',
    component: () => import('../page/user/order/list'),
    meta: {
      title: '我的订单'
    }
  },
  {
    path: '/user/order/:id',
    component: () => import('../page/user/order/list'),
    meta: {
      title: '我的订单'
    }
  },
  {
    path: '/user/order/info/:id',
    component: () => import('../page/user/order/info'),
    meta: {
      title: '我的订单'
    }
  },
  {
    path: '/user/order/logistics/:id',
    component: () => import('../page/user/order/logistics'),
    meta: {
      title: '订单追踪'
    }
  },
  {
    path: '/user/aftersale',
    component: () => import('../page/user/aftersale/list'),
    meta: {
      title: '售后'
    }
  },
  {
    path: '/user/aftersale/apply',
    component: () => import('../page/user/aftersale/apply'),
    meta: {
      title: '申请售后'
    }
  },
  {
    path: '/user/aftersale/detail',
    component: () => import('../page/user/aftersale/detail'),
    meta: {
      title: '服务单详情'
    }
  },
  {
    path: '/user/aftersale/track/:id',
    component: () => import('../page/user/aftersale/track'),
    meta: {
      title: '进度详情'
    }
  },
  {
    path: '/product/:id',
    component: () => import('../page/product/detail'),
    meta: {
      title: '商品详情'
    }
  },
  {
    path: '/search',
    component: () => import('../page/product/list'),
    meta: {
      title: '商品列表'
    }
  },
  {
        path: '/jxslist',
        component: () => import('../page/jxslist/list'),
        meta: {
            title: '经销商列表'
        }
  },
  {
        path: '/noticelist',
        component: () => import('../page/notice/list'),
        meta: {
            title: '消息列表'
        }
   },
  {
    name: 'cart',
    component: () => import('../page/cart/buyCar'),
    meta: {
      title: '购物车'
    }
  },
  {
    path: '/order',
    component: () => import('../page/shipping/orderIndex'),
    meta: {
      title: '确认订单'
    }
  },
  {
    name: 'category',
    component: () => import('../page/category/index'),
    meta: {
      title: '分类'
    }
  },
];

// add route path
routes.forEach(route => {
  route.path = route.path || '/' + (route.name || '');
});

const router = new Router({ routes });

router.beforeEach((to, from, next) => {
  const title = to.meta && to.meta.title;
  if (title) {
    document.title = title;
  }
  next();
});

export {
  router
};
