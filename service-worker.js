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
    "revision": "7c75243e4d20cea49ca8da39accc35c6"
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
    "url": "assets/js/10.773c57ac.js",
    "revision": "b7db0cc128334c6412b164f87a0b69b8"
  },
  {
    "url": "assets/js/11.ac66da35.js",
    "revision": "c98b0998f3fef9e07f93bbd1262488db"
  },
  {
    "url": "assets/js/12.f3a2ace3.js",
    "revision": "186e723b988e3f95307a522f7cb8321d"
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
    "url": "assets/js/app.1c7f0cc0.js",
    "revision": "e47e0898846c7850e23d4c87dc82dcdd"
  },
  {
    "url": "en/guide/getting-started.html",
    "revision": "e0be067b2232e48972a84e3e215d9988"
  },
  {
    "url": "en/guide/index.html",
    "revision": "cd4a76e7ebcceff50601e5b62bcfff82"
  },
  {
    "url": "en/guide/interface.html",
    "revision": "14cef543c30857d33e5c2f8d09af5227"
  },
  {
    "url": "en/guide/special-interface.html",
    "revision": "686592b189bc53632a64180d5f500d0f"
  },
  {
    "url": "en/index.html",
    "revision": "a22ac7acdfbdfe7cae5e1789044027d1"
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
    "revision": "d44304c432461ff59ec4c612f8d15ba2"
  },
  {
    "url": "guide/index.html",
    "revision": "fc9327321d3414589262e34907457edf"
  },
  {
    "url": "guide/interface.html",
    "revision": "b01a1c9537b04dd5381f956665eb4d47"
  },
  {
    "url": "guide/special-interface.html",
    "revision": "7af7eb49508d23be1b9ed2f071ad5c53"
  },
  {
    "url": "index.html",
    "revision": "512b4e9a39fe7fab9f0a052cfd41413d"
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
