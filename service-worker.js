/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "fdfa4996ca5092622929a23d45aa0526"
  },
  {
    "url": "assets/css/0.styles.89b7fa37.css",
    "revision": "880af360eaf80aedf6d9a6673999c945"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.132e7abc.js",
    "revision": "4d17b2a722619a99694c7901b5d1fe68"
  },
  {
    "url": "assets/js/11.0115d5d2.js",
    "revision": "1bbb85203f82915fe9085297ebe2ec95"
  },
  {
    "url": "assets/js/12.2b618373.js",
    "revision": "fbf097241209bc17bdd850d0205bb0ef"
  },
  {
    "url": "assets/js/13.7db4dbc9.js",
    "revision": "d5d7797d2432b32f87b3d09c38e018f5"
  },
  {
    "url": "assets/js/2.61fe8bff.js",
    "revision": "1d5d591bce61be3d833c1e5c140d9b40"
  },
  {
    "url": "assets/js/3.0f0a0ebe.js",
    "revision": "0de56dd325a3b21aea5a600b7916d0e1"
  },
  {
    "url": "assets/js/4.902ac1d5.js",
    "revision": "4011a70c75518da2abe7f5cdc0257077"
  },
  {
    "url": "assets/js/5.be384802.js",
    "revision": "014be1f0ef4dad3392e550a304d7e96d"
  },
  {
    "url": "assets/js/6.879e6677.js",
    "revision": "3911abf8aee9187afb2b9a4045b4a91a"
  },
  {
    "url": "assets/js/7.a9f52811.js",
    "revision": "81cdb22c43624944e659b567608f8a19"
  },
  {
    "url": "assets/js/8.a68f11d1.js",
    "revision": "9ebd66faabac4db21b1a8b49a608099a"
  },
  {
    "url": "assets/js/9.60848ad7.js",
    "revision": "721854c7c5f45c2149c288e2a2d30f68"
  },
  {
    "url": "assets/js/app.25fe0f64.js",
    "revision": "a620aed9f93f6f7c045a91ee539d021b"
  },
  {
    "url": "en/guide/getting-started.html",
    "revision": "293e3e1ea21659b67d60dd736d4fea9c"
  },
  {
    "url": "en/guide/index.html",
    "revision": "4469a731a67286f3be72bdb0c37a862e"
  },
  {
    "url": "en/guide/interface.html",
    "revision": "8cd0a5cb50ac97d3c569fcce18e82955"
  },
  {
    "url": "en/guide/special-interface.html",
    "revision": "f8228cdab638e88040a5c30aebd1ba0c"
  },
  {
    "url": "en/index.html",
    "revision": "03e317f9a9329252f0121b610d85e702"
  },
  {
    "url": "goex.jpg",
    "revision": "bf2ce76f1da2d5f11cf386ce0413f07a"
  },
  {
    "url": "goex.png",
    "revision": "8be389af24ee1572ec6d85e47140eb32"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "95140d3036375b8906f1eb4582a2ed95"
  },
  {
    "url": "guide/index.html",
    "revision": "ca83fd4649f6c677d4445fb1891e8e71"
  },
  {
    "url": "guide/interface.html",
    "revision": "19de636c06e6f37dd63bb2c2c849e200"
  },
  {
    "url": "guide/special-interface.html",
    "revision": "40a6f443d19053bc4511222d6b2eb2f6"
  },
  {
    "url": "index.html",
    "revision": "1aaa8e8fb57e8ccef6aaf8b243775076"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
