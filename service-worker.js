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
    "revision": "4e3bd391f791fbea460b98cedad044c4"
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
    "url": "assets/js/10.9002a14d.js",
    "revision": "ff16314f791372ebaf2219a7d62aea79"
  },
  {
    "url": "assets/js/11.0849ea14.js",
    "revision": "f2be92b328b6ffef7ae6047442847b43"
  },
  {
    "url": "assets/js/12.948c95db.js",
    "revision": "c0166eb5ba1a863ba78716bec178a0f6"
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
    "url": "assets/js/3.4812230e.js",
    "revision": "0de56dd325a3b21aea5a600b7916d0e1"
  },
  {
    "url": "assets/js/4.e5dd6219.js",
    "revision": "4011a70c75518da2abe7f5cdc0257077"
  },
  {
    "url": "assets/js/5.7943ffa7.js",
    "revision": "d11db372ac3d2a6e6a7a371fc834a33f"
  },
  {
    "url": "assets/js/6.90d7305e.js",
    "revision": "3911abf8aee9187afb2b9a4045b4a91a"
  },
  {
    "url": "assets/js/7.b78ff547.js",
    "revision": "81cdb22c43624944e659b567608f8a19"
  },
  {
    "url": "assets/js/8.0f357f1c.js",
    "revision": "9ebd66faabac4db21b1a8b49a608099a"
  },
  {
    "url": "assets/js/9.566fc099.js",
    "revision": "62c9356e0d7c3b0e892b6799b3284317"
  },
  {
    "url": "assets/js/app.8342d757.js",
    "revision": "af4a7580480a8ea577956a21d79496eb"
  },
  {
    "url": "en/guide/getting-started.html",
    "revision": "dca14927a33f730741df8ccc3d713e89"
  },
  {
    "url": "en/guide/index.html",
    "revision": "20e104d9a2539c7d47e4ad9e750b4d42"
  },
  {
    "url": "en/guide/interface.html",
    "revision": "51b3b4400e4e77cc68fcec1fb9a72d79"
  },
  {
    "url": "en/guide/special-interface.html",
    "revision": "aebfe673acc6ce8fbbf8e49a963b56ae"
  },
  {
    "url": "en/index.html",
    "revision": "075c2d06f5f68478910daaa22ff8fc79"
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
    "revision": "9c90650b42792ba6f6b14e97b2e183a0"
  },
  {
    "url": "guide/index.html",
    "revision": "c7ca887530b06bebb4fe923adcde82aa"
  },
  {
    "url": "guide/interface.html",
    "revision": "59bd2641e2d94bab68c9dd2904d76ce8"
  },
  {
    "url": "guide/special-interface.html",
    "revision": "893086b0ed72671e2603d82c86393e3c"
  },
  {
    "url": "index.html",
    "revision": "0f55811c93673510a0b142cb60f4fd0f"
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
