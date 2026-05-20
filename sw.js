const CACHE = 'mashu-v6';
const IMGS = [
  'images/recipes/bai-xiang-guo-ning-meng-qi-pao-yin.webp',
  'images/recipes/cheng-xiang-ji-chi.webp',
  'images/recipes/chi-you-ji.webp',
  'images/recipes/cong-you.webp',
  'images/recipes/fan-qie-jiang.webp',
  'images/recipes/fan-qie-ji-dan-yi-mian.webp',
  'images/recipes/fan-qie-niu-rou-mian.webp',
  'images/recipes/he-tao-hua-sheng-nai.webp',
  'images/recipes/hong-shao-rou.webp',
  'images/recipes/jin-zhen-fei-niu.webp',
  'images/recipes/la-jiao-jiang.webp',
  'images/recipes/lv-dou-niu-ru-bing-sha.webp',
  'images/recipes/ma-la-ya-she.webp',
  'images/recipes/mo-cha-dong.webp',
  'images/recipes/nai-you-mo-gu-nong-tang.webp',
  'images/recipes/nan-gua-cao-mi-zhou.webp',
  'images/recipes/niu-rou-wan.webp',
  'images/recipes/ping-guo-rou-gui-mai-fen.webp',
  'images/recipes/pi-pa-gao.webp',
  'images/recipes/qing-jiao-jiang.webp',
  'images/recipes/shuang-pi-nai.webp',
  'images/recipes/shui-zhu-niu-rou.webp',
  'images/recipes/wu-gu-mi-hu.webp',
  'images/recipes/xiang-jiao-ke-ke-nai-xi.webp',
  'images/recipes/xiang-jiao-yan-mai-zao-can-zhou.webp',
  'images/recipes/yu-mi-pai-gu-tang.webp',
  'images/recipes/yu-wan.webp',
  'images/recipes/zi-zhi-dou-jiang.webp',
  'images/recipes/zi-zhi-hua-sheng-jiang.webp',
  'images/recipes/zi-zhi-xia-wan.webp',
  'images/recipes/yan-luo-bo.webp',
  'images/recipes/shi-jin-shu-cai-tang.webp',
  'images/recipes/xian-cai-ban-qie-zi.webp',
  'images/recipes/xian-dan-huang-pei-gen-shou-si-bao.webp',
  'images/recipes/niu-rou-sheng-jian-bao.webp',
  'images/recipes/yi-mian-jiang.webp',
  'images/recipes/sang-shen-jiang.webp',
  'images/recipes/zhu-rou-yang-cong-xian-bing.webp',
  'images/recipes/tai-shi-lu-rou-fan.webp',
  'images/recipes/rou-bao-zi.webp',
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
