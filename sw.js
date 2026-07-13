const CACHE = 'mashu-v7';
const IMGS = [
  'images/recipes/bai-xiang-guo-ning-meng-qi-pao-yin.jpg',
  'images/recipes/cheng-xiang-ji-chi.jpg',
  'images/recipes/chi-you-ji.jpg',
  'images/recipes/cong-you.jpg',
  'images/recipes/fan-qie-jiang.jpg',
  'images/recipes/fan-qie-ji-dan-yi-mian.jpg',
  'images/recipes/fan-qie-niu-rou-mian.jpg',
  'images/recipes/he-tao-hua-sheng-nai.jpg',
  'images/recipes/hong-shao-rou.jpg',
  'images/recipes/jin-zhen-fei-niu.jpg',
  'images/recipes/la-jiao-jiang.jpg',
  'images/recipes/lv-dou-niu-ru-bing-sha.jpg',
  'images/recipes/ma-la-ya-she.jpg',
  'images/recipes/mo-cha-dong.jpg',
  'images/recipes/nai-you-mo-gu-nong-tang.jpg',
  'images/recipes/nan-gua-cao-mi-zhou.jpg',
  'images/recipes/niu-rou-wan.jpg',
  'images/recipes/ping-guo-rou-gui-mai-fen.jpg',
  'images/recipes/pi-pa-gao.jpg',
  'images/recipes/qing-jiao-jiang.jpg',
  'images/recipes/shuang-pi-nai.jpg',
  'images/recipes/shui-zhu-niu-rou.jpg',
  'images/recipes/wu-gu-mi-hu.jpg',
  'images/recipes/xiang-jiao-ke-ke-nai-xi.jpg',
  'images/recipes/xiang-jiao-yan-mai-zao-can-zhou.jpg',
  'images/recipes/yu-mi-pai-gu-tang.jpg',
  'images/recipes/yu-wan.jpg',
  'images/recipes/zi-zhi-dou-jiang.jpg',
  'images/recipes/zi-zhi-hua-sheng-jiang.jpg',
  'images/recipes/zi-zhi-xia-wan.jpg',
  'images/recipes/yan-luo-bo.jpg',
  'images/recipes/shi-jin-shu-cai-tang.jpg',
  'images/recipes/xian-cai-ban-qie-zi.jpg',
  'images/recipes/xian-dan-huang-pei-gen-shou-si-bao.jpg',
  'images/recipes/niu-rou-sheng-jian-bao.jpg',
  'images/recipes/yi-mian-jiang.jpg',
  'images/recipes/sang-shen-jiang.jpg',
  'images/recipes/zhu-rou-yang-cong-xian-bing.jpg',
  'images/recipes/tai-shi-lu-rou-fan.jpg',
  'images/recipes/rou-bao-zi.jpg',
];

// 安装：预缓存 HTML，图片按需缓存（避免单张404导致SW安装失败）
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE)
      .then(c => c.add('/'))
      .then(() => self.skipWaiting())
  );
});

// 激活：清理旧缓存
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

// 拦截请求
self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);

  // 只处理同源请求，跨域请求直接放行
  if (url.origin !== self.location.origin) return;

  // 图片：缓存优先
  if (url.pathname.startsWith('/images/recipes/')) {
    e.respondWith(
      caches.match(e.request).then(cached => {
        if (cached) return cached;
        return fetch(e.request).then(res => {
          const clone = res.clone();
          caches.open(CACHE).then(c => c.put(e.request, clone));
          return res;
        });
      })
    );
    return;
  }

  // HTML：网络优先，失败走缓存（保证内容更新）
  if (e.request.mode === 'navigate') {
    // /recipe/* 路径：直接请求服务器上的静态OG页面
    // 静态页面含菜谱专属OG标签（微信首次加载时读到正确图片）
    // 静态页面的script会自动加载SPA并导航到对应菜谱
    if (url.pathname.startsWith('/recipe/')) {
      e.respondWith(
        fetch(e.request).catch(() => caches.match('/'))
      );
      return;
    }
    e.respondWith(
      fetch(e.request).then(res => {
        const clone = res.clone();
        caches.open(CACHE).then(c => c.put(e.request, clone));
        return res;
      }).catch(() => caches.match('/'))
    );
    return;
  }

  // 其他资源：缓存优先
  e.respondWith(caches.match(e.request).then(c => c || fetch(e.request)));
});
