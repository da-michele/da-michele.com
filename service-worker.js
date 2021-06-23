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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "2bf956bd48747741276690bab9823f59"
  },
  {
    "url": "assets/css/0.styles.975c0afc.css",
    "revision": "87b359e2a9d419f3bcd85e5b96c5d837"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.b4d66552.js",
    "revision": "08c478d9b928420e3926c74cc46347f2"
  },
  {
    "url": "assets/js/11.16ff2288.js",
    "revision": "341a1c096f2666227225f6a42b90b88e"
  },
  {
    "url": "assets/js/12.92eaa14a.js",
    "revision": "450118697e36b36d10b942d5a616b2a1"
  },
  {
    "url": "assets/js/13.93ccf886.js",
    "revision": "49282faaa49b69034148e4b1fb68d240"
  },
  {
    "url": "assets/js/14.965ffb0a.js",
    "revision": "cf6553c1765ece3da92a3af0cb061b82"
  },
  {
    "url": "assets/js/15.5690ade8.js",
    "revision": "a96ae9cee08f8d728212a7abbec9fef4"
  },
  {
    "url": "assets/js/16.e2fe5697.js",
    "revision": "9eaa806f926935b4393b2ec0bcb365f3"
  },
  {
    "url": "assets/js/17.ade96ea9.js",
    "revision": "85d90148d0ac917f0be1eaed6949b5b5"
  },
  {
    "url": "assets/js/18.8e9c4da4.js",
    "revision": "b2b1e63952e98dae17285d14e0e5933f"
  },
  {
    "url": "assets/js/19.91af2e62.js",
    "revision": "9f9926c4f8701c26065605cd717d26a4"
  },
  {
    "url": "assets/js/2.07155792.js",
    "revision": "6dd1c80f763036e84cdd8fc27d0900d1"
  },
  {
    "url": "assets/js/20.37f3569a.js",
    "revision": "eee6475a7223e8b8ca3d80c944ffe68b"
  },
  {
    "url": "assets/js/21.6e9f570a.js",
    "revision": "141edd456dc3a99ed181dd0e690e3be6"
  },
  {
    "url": "assets/js/22.697c557b.js",
    "revision": "90d86d959a75a6824b20629461ca97d6"
  },
  {
    "url": "assets/js/23.1299e40b.js",
    "revision": "28311603b97cb9e51100ffcd0a2837ad"
  },
  {
    "url": "assets/js/24.e5c8efd0.js",
    "revision": "7cb7b186286b5400bac509218a3c8a96"
  },
  {
    "url": "assets/js/25.5f47e767.js",
    "revision": "83d2b0ca1e7ea8f0110e0f2e9bd75346"
  },
  {
    "url": "assets/js/26.65bd0a66.js",
    "revision": "8578b23d88b995f8ef32e9fa7644803e"
  },
  {
    "url": "assets/js/27.143c0aeb.js",
    "revision": "04ebb4aae7a22ef87ac9b22f83590ad7"
  },
  {
    "url": "assets/js/28.4d363db8.js",
    "revision": "d89c7805bf1104052caa61865b9c7533"
  },
  {
    "url": "assets/js/29.935efb39.js",
    "revision": "1867bb829c4953af82db33e3e5f9881e"
  },
  {
    "url": "assets/js/3.84ae9f77.js",
    "revision": "14a5ff36409f05f2c67ab2a478f03bd3"
  },
  {
    "url": "assets/js/30.5280792e.js",
    "revision": "7796c054c1c521f4c0ed5dbb58ab34d3"
  },
  {
    "url": "assets/js/31.636cfec3.js",
    "revision": "04e41d2f77ee4c4a5e8f94911526949c"
  },
  {
    "url": "assets/js/32.c2206fd1.js",
    "revision": "b73d7fbd929e74a40a563a2d212fcbdb"
  },
  {
    "url": "assets/js/33.e950f017.js",
    "revision": "41563c20873f73d4f700f80585615c46"
  },
  {
    "url": "assets/js/34.419f8d54.js",
    "revision": "22ebaba0050d1361103b807c1e598c90"
  },
  {
    "url": "assets/js/4.7c970fdb.js",
    "revision": "4b58fa4de9a65c12770b5e5b15e0db0f"
  },
  {
    "url": "assets/js/5.9436eb27.js",
    "revision": "a33b0e622b90fed3a7252b6478fa7218"
  },
  {
    "url": "assets/js/6.48090816.js",
    "revision": "cbf54a2b0e582d4f77a5ac325a2efdb8"
  },
  {
    "url": "assets/js/7.0e6338c4.js",
    "revision": "c0d22501cac87721ca04592d53b54fb6"
  },
  {
    "url": "assets/js/8.d103d87f.js",
    "revision": "dbf4a68831ca7526f3436baa37a14a7d"
  },
  {
    "url": "assets/js/9.c6e2e75c.js",
    "revision": "7842cfcbc7ede27100a423820554a259"
  },
  {
    "url": "assets/js/app.71ed9581.js",
    "revision": "e7f081169b432e4987605be76a9c4174"
  },
  {
    "url": "en/imprint.html",
    "revision": "d0c55145150d31f8dac67b02f49e6855"
  },
  {
    "url": "en/index.html",
    "revision": "bca832da90c17848fff1ed0be0b771c5"
  },
  {
    "url": "en/legal/privacy.html",
    "revision": "3460c4b2049ce81432533cbe56a17e13"
  },
  {
    "url": "en/legal/terms.html",
    "revision": "e16635dbb9820ab60af8e075fa317d1f"
  },
  {
    "url": "en/menu.html",
    "revision": "a2bc5a49615c4de225de929f2736d21a"
  },
  {
    "url": "en/restaurant/about.html",
    "revision": "cc13252de9233c5518731e3a6cc45933"
  },
  {
    "url": "en/restaurant/career.html",
    "revision": "7ae560b086e1f031d3f0d3871cb8dac6"
  },
  {
    "url": "en/restaurant/voucher.html",
    "revision": "92c5665f2522d2f1bb23beebd3001a11"
  },
  {
    "url": "favicons/android-chrome-192x192.png",
    "revision": "b5bb7370a1d8514edf0090e43db133f0"
  },
  {
    "url": "favicons/android-chrome-512x512.png",
    "revision": "7efdd38b497b53b7107614b869f66f05"
  },
  {
    "url": "favicons/apple-touch-icon-120x120.png",
    "revision": "fc9d9f7c68218a99d621dd6b78a745df"
  },
  {
    "url": "favicons/apple-touch-icon-152x152.png",
    "revision": "d9453d0a95f7f015c04e2e62fa026819"
  },
  {
    "url": "favicons/apple-touch-icon-180x180.png",
    "revision": "56900fa18962879e8dd552a51d12d4f9"
  },
  {
    "url": "favicons/apple-touch-icon-60x60.png",
    "revision": "0e11ab71d77f64ab799e91048c41c564"
  },
  {
    "url": "favicons/apple-touch-icon-76x76.png",
    "revision": "c1e3727217fe03a3923fdbf309066bd1"
  },
  {
    "url": "favicons/apple-touch-icon.png",
    "revision": "56900fa18962879e8dd552a51d12d4f9"
  },
  {
    "url": "favicons/favicon-16x16.png",
    "revision": "51b3bb4949d0db2091ca582624fb2179"
  },
  {
    "url": "favicons/favicon-32x32.png",
    "revision": "44bc95cf9f64175d6dccdf020d8de6bf"
  },
  {
    "url": "favicons/msapplication-icon-144x144.png",
    "revision": "a61a7b078cbfb225be2fbedd676cba7e"
  },
  {
    "url": "favicons/mstile-150x150.png",
    "revision": "b8524378e89f69630ed097dafe9386dc"
  },
  {
    "url": "favicons/safari-pinned-tab.svg",
    "revision": "e73e46c8348e3f1b662620eac4ad31b8"
  },
  {
    "url": "fonts/lato/Lato-Black.ttf",
    "revision": "e631d2735799aa943d93d301abf423d2"
  },
  {
    "url": "fonts/lato/Lato-Black.woff",
    "revision": "9617ba4bd466ff411e2bda15dc89b851"
  },
  {
    "url": "fonts/lato/Lato-BlackItalic.ttf",
    "revision": "2e26a9163cb4974dcba1bea5107d4492"
  },
  {
    "url": "fonts/lato/Lato-BlackItalic.woff",
    "revision": "5bdfbeebb7c2f00e4d2d3623a74c91e9"
  },
  {
    "url": "fonts/lato/Lato-Bold.ttf",
    "revision": "85d339d916479f729938d2911b85bf1f"
  },
  {
    "url": "fonts/lato/Lato-Bold.woff",
    "revision": "5409e910a6964c1014056c9488c58956"
  },
  {
    "url": "fonts/lato/Lato-BoldItalic.ttf",
    "revision": "f98d18040a766b7bc4884b8fcc154550"
  },
  {
    "url": "fonts/lato/Lato-BoldItalic.woff",
    "revision": "33159950020310f26329dc20bce9c149"
  },
  {
    "url": "fonts/lato/Lato-Italic.ttf",
    "revision": "7582e823ef0d702969ea0cce9afb326d"
  },
  {
    "url": "fonts/lato/Lato-Italic.woff",
    "revision": "4726abfcf1b6378cc52227fac116214f"
  },
  {
    "url": "fonts/lato/Lato-Light.ttf",
    "revision": "2fe27d9d10cdfccb1baef28a45d5ba90"
  },
  {
    "url": "fonts/lato/Lato-Light.woff",
    "revision": "2cf063e5bea5c34bc2140749a80e9d33"
  },
  {
    "url": "fonts/lato/Lato-LightItalic.ttf",
    "revision": "4d80ac573c53d192dafd99fdd6aa01e9"
  },
  {
    "url": "fonts/lato/Lato-LightItalic.woff",
    "revision": "601068f8268b69af20d5cb1849b3139f"
  },
  {
    "url": "fonts/lato/Lato-Regular.ttf",
    "revision": "2d36b1a925432bae7f3c53a340868c6e"
  },
  {
    "url": "fonts/lato/Lato-Regular.woff",
    "revision": "66423886e2d29be757450fa6a3d17392"
  },
  {
    "url": "fonts/lato/Lato-Thin.ttf",
    "revision": "9a77fbaa85fa42b73e3b96399daf49c5"
  },
  {
    "url": "fonts/lato/Lato-Thin.woff",
    "revision": "1db543fea9d430298db7697702961621"
  },
  {
    "url": "fonts/lato/Lato-ThinItalic.ttf",
    "revision": "4ac7208bbe0e3593ce9464f013607751"
  },
  {
    "url": "fonts/lato/Lato-ThinItalic.woff",
    "revision": "8526e9375fdff96e23f4582d453a8ffa"
  },
  {
    "url": "imprint.html",
    "revision": "e1a429fe00e22c2edfde2e631cde0c9f"
  },
  {
    "url": "index.html",
    "revision": "88da162a12077df1be497e2d1b050822"
  },
  {
    "url": "legal/privacy.html",
    "revision": "a8d4a634bd514504683b8af4a9080acd"
  },
  {
    "url": "legal/terms.html",
    "revision": "39b981b92a95366eef246cc7fc2117b9"
  },
  {
    "url": "logo.png",
    "revision": "c6b5413250479a0c39620f18fc4af4ac"
  },
  {
    "url": "menu.html",
    "revision": "59af8d7e8186637ebc88a4f5dba6d573"
  },
  {
    "url": "restaurant/about.html",
    "revision": "41553e2fc2c7788c302608e9e508d397"
  },
  {
    "url": "restaurant/career.html",
    "revision": "b38dc08144a283f53960a0544d5bd412"
  },
  {
    "url": "restaurant/voucher.html",
    "revision": "d23b2be8ad3a32837b93216c3dfe0896"
  }
].concat(self.__precacheManifest || []);
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
