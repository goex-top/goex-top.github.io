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
    "revision": "83f0bb8e464de125fb0ebee7886f2808"
  },
  {
    "url": "assets/css/0.styles.9fdeb50a.css",
    "revision": "e68cb14e1500f58cbf2a393c416086c7"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.fa043be0.js",
    "revision": "4d17b2a722619a99694c7901b5d1fe68"
  },
  {
    "url": "assets/js/11.5aeedeeb.js",
    "revision": "1bbb85203f82915fe9085297ebe2ec95"
  },
  {
    "url": "assets/js/12.042dcc0e.js",
    "revision": "fbf097241209bc17bdd850d0205bb0ef"
  },
  {
    "url": "assets/js/13.56845cf3.js",
    "revision": "d5d7797d2432b32f87b3d09c38e018f5"
  },
  {
    "url": "assets/js/2.7c4f420d.js",
    "revision": "f18b338cf378a76b7ef3ceb3e7c79715"
  },
  {
    "url": "assets/js/3.f27010a5.js",
    "revision": "0de56dd325a3b21aea5a600b7916d0e1"
  },
  {
    "url": "assets/js/4.66fd82c7.js",
    "revision": "4011a70c75518da2abe7f5cdc0257077"
  },
  {
    "url": "assets/js/5.c2e377ab.js",
    "revision": "ccc6f7b92fc7650f3cb10d598bc6b625"
  },
  {
    "url": "assets/js/6.3863f1c4.js",
    "revision": "3911abf8aee9187afb2b9a4045b4a91a"
  },
  {
    "url": "assets/js/7.178dcd80.js",
    "revision": "81cdb22c43624944e659b567608f8a19"
  },
  {
    "url": "assets/js/8.728bd1e6.js",
    "revision": "9ebd66faabac4db21b1a8b49a608099a"
  },
  {
    "url": "assets/js/9.d027d08b.js",
    "revision": "0596515191a77a675d5eaa40ed22c8bb"
  },
  {
    "url": "assets/js/app.74241122.js",
    "revision": "9534ca9d1805398f28b0ea7791fe3fda"
  },
  {
    "url": "en/guide/getting-started.html",
    "revision": "d0c1453e5afa8628c405dd64bc7d3118"
  },
  {
    "url": "en/guide/index.html",
    "revision": "68b8c17ee784b6d4f0fecfb2657291f8"
  },
  {
    "url": "en/guide/interface.html",
    "revision": "38f43041cc3eace19cfbbd141b99a209"
  },
  {
    "url": "en/guide/special-interface.html",
    "revision": "373c8694120b74295e761c427136993a"
  },
  {
    "url": "en/index.html",
    "revision": "cb1e3b51ee6191dd9d1e1289cf8c3d49"
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
    "revision": "14fcbf78dfdee4e2ccccdf962d47c8ee"
  },
  {
    "url": "guide/index.html",
    "revision": "4796a4a3b0943c9c53cb770945ee6d78"
  },
  {
    "url": "guide/interface.html",
    "revision": "9d46d70dacd0673746d70cfbeac6002a"
  },
  {
    "url": "guide/special-interface.html",
    "revision": "4fc6474a0b8e409ffb3b8e05c996cf75"
  },
  {
    "url": "index.html",
    "revision": "386555688703202d90f1effae7219991"
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
