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
    "revision": "3595200ee750f049a14c5178552c9c27"
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
    "url": "assets/js/10.2aa252d9.js",
    "revision": "909851720d87b15f8d383144090827d1"
  },
  {
    "url": "assets/js/11.e7bd3cb4.js",
    "revision": "1762a29e0e2b49635e0099513901eac1"
  },
  {
    "url": "assets/js/12.5d0f6884.js",
    "revision": "1ec948325311cc9b89f5498bf425c1d1"
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
    "url": "assets/js/5.2027efdb.js",
    "revision": "014be1f0ef4dad3392e550a304d7e96d"
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
    "url": "assets/js/9.19fba45e.js",
    "revision": "62c9356e0d7c3b0e892b6799b3284317"
  },
  {
    "url": "assets/js/app.cac179eb.js",
    "revision": "ad18d807e7b1cbaac398acc795211f55"
  },
  {
    "url": "en/guide/getting-started.html",
    "revision": "485c375162a5521481db4c303f12a7fe"
  },
  {
    "url": "en/guide/index.html",
    "revision": "5bdd55158ef1e79f6d9c5de43f9622de"
  },
  {
    "url": "en/guide/interface.html",
    "revision": "50a08b678cfe84862af17bd5840bc6e1"
  },
  {
    "url": "en/guide/special-interface.html",
    "revision": "b6b5bd521c14380147281310911a768a"
  },
  {
    "url": "en/index.html",
    "revision": "0819c4bc3dfbb3f10eb96eff80358258"
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
    "revision": "244f99e76580c044fa9c0ada22daf7c3"
  },
  {
    "url": "guide/index.html",
    "revision": "3cb90adca7ff75f14579643fc8bcc508"
  },
  {
    "url": "guide/interface.html",
    "revision": "99e3f748950453faa7af78ee766c59e9"
  },
  {
    "url": "guide/special-interface.html",
    "revision": "612f6d0b62982bd851fb9704419b449d"
  },
  {
    "url": "index.html",
    "revision": "a1079d0f1d7f31bbf3595f9c7dd2d28b"
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
