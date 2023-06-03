import router from './router';
import Cookies from 'js-cookie';

router.beforeEach((to, from, next) => {
  // 1000 * 60 * 60 * 24 * 3 = 259200000   === 3天
  const expiredTime = 259200000;
  setInterval(() => {
    Cookies.remove('token')
  }, expiredTime);
  const user = Cookies.get('token');
  if (user) {
    next();
  } else {
    if (to.name === 'login') {
      next();
    } else {
      next({ name: 'login' });
    }
    from;
  }
});

export default router;