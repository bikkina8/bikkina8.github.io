'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "31cd8ac4b308a889557bf438988ccb66",
".git/config": "6bcad9b19eed3a3b5fdcea1f14e6ff10",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "53b9174b7850a298195efde922ef13b9",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "ebb1831b3f405b83ced3f90e7853708a",
".git/logs/refs/heads/main": "a7efb3ae37c919ccd84739e73f04f75e",
".git/logs/refs/remotes/origin/main": "2bb47af539c7b1a7776224971ee292d1",
".git/objects/01/7754723c316987702b385f0aff5be327867e0a": "af80e9c9f6b49d14c51acf0c6887c4d5",
".git/objects/06/209e25d6c31a380159a0e95c4e6479a16107d0": "0dbb03c22c6e3c1a2c685363f7ea94c2",
".git/objects/07/7f4d0c6d7e5c82c4c45c7e8590bbfcab914fd5": "ac4ef862ec0ffedae05e4708374b1a88",
".git/objects/0b/ab53dfea37dd4711ddc32509a3364d92bb9887": "ba24d4567206959f5a66a49c8588f92b",
".git/objects/0c/37594409355f44e27de8152dd5be76567012e6": "be6abe3ed5650c087848c03a14b2e9df",
".git/objects/13/0547dca011f10c35aa42d3a5ef5c3f33e3b076": "3c0b09c193dd78f1b2979e8fb2bc8bed",
".git/objects/14/38d63b591e85d5acce6908ec8a760ad8ea4a33": "cc047f3d3567b225f73619b3140ceb13",
".git/objects/1b/87cf60bb06c350ed35958fe4c4dae77d44c99e": "9ae91abc1575910e3e4a189602814c7d",
".git/objects/1c/6dea37656e4fd432d418d2f91553594587762b": "d763e550177c44e2aad47f6f4a5c5bbf",
".git/objects/1d/468b85698a60041b450286f31b3264b3bbd6f7": "5c8c497111befde32ac151f14cf92f85",
".git/objects/20/9664aa3085231a68c86ea52486a4d42f44f80f": "a096d35eb39c8b406367de51a1270e1b",
".git/objects/21/ba26e5e9e544ba2eeebd6a157b85e80ae03a4e": "a9217a13134086199751ec93bac13928",
".git/objects/24/d7f9ef0002230372d84ed4ab757809daee159a": "a02eeeaf3ecc04d765f86c3a9d785e13",
".git/objects/29/c95ab04a3311fe7bf7081fd189bd97991a6ac6": "3dd82a54a01960fcaee0c15ebb41edd3",
".git/objects/2d/3731e5333d4c9c50af95cd8ada25a9e2d40211": "0cf0148dea288d7d8679d771ce1b0e1f",
".git/objects/31/feb7b48966668ce39c019bee806153850be188": "977eebead836ce53e80b7f37134156c3",
".git/objects/35/43fe759cdbf8badeacb19129731a8a7f5289d6": "bb0bc143167f798f7b698d4c7a209443",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "e931dda039902c600d4ba7d954ff090f",
".git/objects/3d/3c41cad08a4012669695828cf51e2509019978": "d9938422b9e4a4aacbbec340852dadd4",
".git/objects/3d/bb4f550250121c3764d2c8ac92c4e2eb8b82de": "03e0a99259baaea6bd3c8e8f8165183f",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "1ea653b99fd29cd15fcc068857a1dbb2",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/49/f0639cd71e098c56441ed85d170123729a7343": "5013a187a12c01ebc2f84de77f7c8edc",
".git/objects/4e/0482d88d0e455416a6f0aacdce3e0e1eff04d8": "934fabde04a593c500c6cc2bd6a6da23",
".git/objects/4e/70aeb1d39981a804cc828821859c77502496fb": "1c2bcc1b2b11e38806b64a080939da1c",
".git/objects/51/dfe4ea4d91214f2a9751dc5c923d257bb0c0cc": "8330e775a2892c64965912867f7a87ba",
".git/objects/52/2999273f78b2bede841aed2215431d1edde993": "e6bc0f12452a0130cbbd491edb5354d0",
".git/objects/53/ed26b4c2d07509a53c036e0e2ae46a6c758bc3": "5520ca6eefa6b0dc41393d44468014e5",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/5a/b3a1f59befa2c8b7ffe04fa9421af981d9bb4f": "86a2dbbcb3402c2bb53bf50a9b6a6bde",
".git/objects/5a/fa188348c24b22a8a3e16c7baa604321e36422": "1007b21825509fc620806c87599ac41f",
".git/objects/5e/0556813c8bf5a4cd6140e15104928e3a675acd": "b324f0e9e6de88ac5f99bc4bc0aa32d5",
".git/objects/5f/6d1db265220cc87afe3796f134d1a5309cf029": "de56bb3bb21150ff0a2024671423d30c",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "f19d414bb2afb15ab9eb762fd11311d6",
".git/objects/61/81afa883112845173241818fadd8d4c9e365f7": "021cfac2f5104b216ffa39fefba323e2",
".git/objects/63/68e081f3af326737ac07483e9834f76a4de1bd": "0a222437ba6f17650999cfe3bfb44d80",
".git/objects/68/adb8cb5879922ab67c25ba0163d8926d1943b4": "dbdf7da0912e68176e943d9dd697fc58",
".git/objects/6b/2e079aa8c7af9e283c0854ee4cb145c9ea2a33": "4a49cc08ecddfdce1a2a3f0a55be560b",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6f/556b81b323416e857549541904419036e7b0fd": "c9a9487c59ef9c90a76c0536c753b88e",
".git/objects/71/7a2582abb814f8ca00a130592d6788b76f2865": "4ce9dcb84030c958b068f065e5f484d3",
".git/objects/72/3d030bc89a4250e63d16b082affe1998618c3f": "e4299c419434fc51f64a5266659918fa",
".git/objects/78/01fac2c3e524f40176fff322a494dad85fe48d": "ff2504dd02889031e2e0f5030742e370",
".git/objects/7a/4a82d35465c05e905d9446723a3e7192d7b38a": "e921b830acd6f83e0f7ba3121dc35131",
".git/objects/7a/858df3864ea8f6111af0072dd7f99e028bb96d": "baeebae0bdf1bd2cb94d6152774d626f",
".git/objects/80/6ecc6f271e07f7ed210e6a81025266b3444614": "28244485d073322118ca8f43677b8669",
".git/objects/82/1d092a93825a729f480f1f8119db42a6c8ffba": "f1207f04ca5b21f0f7c03045398adc43",
".git/objects/82/391cd342fd83fd85986be7b71783fe0f0334c5": "9838222643580e1429ebca6ed169a385",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8f/c8be62f202c40e7d3e2e16242fb065cfc4e1a7": "6fda1b80da67a8d96186cf8ab8b24087",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
".git/objects/98/567f5f92731e35d3c42f26cd211f1f5efa94b0": "9f570f278310bf425b7331382d3e56d2",
".git/objects/99/a154890f80c7ffe3145cb52b80e7217c89f4f1": "1ad157d8e4954bcf698f203a8d4c4d7d",
".git/objects/9f/472b7ccec521e58fcce8f111b972e61ddd2585": "275809e77b2c4d02439a2f9d2e15132f",
".git/objects/9f/7926009bb17fe00383d969737e55f95d753fa3": "eaba2d2e09809a016316ab8219cc825f",
".git/objects/a0/d46077af4e6c19c1b1d113234ac3cd4515db6f": "5e178044fff56fc6ebedb1bcfc59b9bb",
".git/objects/a1/25ff363362b8ea5dad5c50a33ceeac0ec0ffdb": "9ef670df321195e2107a8e51dda04b72",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "9fbbb0db1824af504c56e5d959e1cdff",
".git/objects/a7/1bea0d8aeffdd13e4c6ad9a9eb34737df08621": "f2580a1ee06329ac77ab7121f5a48151",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/a8/a5c6208373e4795b5fb60a8a8ddf7e8853ffb9": "4599c4156521316e8f7fadae75bed08f",
".git/objects/a9/7d0c6fd270b109af7e8a4e06b8efbe47ee504d": "42dbb00e47ab6bdec4e0752c63cf8337",
".git/objects/ab/a6ca2f17edde6457a2b6d2dbecc63ad2ab7851": "d34f65a8c7aa0b6d88b7094b53586a63",
".git/objects/ac/0cdbd6a15b06bb4757dd428b5ef1b2ccc51f3b": "b41baf503531f719b516f6515aa153aa",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/7b51c43b572a760caf5215084f0b4b7d6adce2": "d34b673a765ff11df21a6313a647d580",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bd/8c7f1cc1e74ec4b5bb0de6eb4cfb2def7f3583": "3600b27d6bcf8202e3887077d2246a6f",
".git/objects/bd/9d0dfb366924458d2c44fbf49c8674fac7c948": "363520ee8223b0a7de212c1ad0c9ce28",
".git/objects/cc/2c0df5386275c2285d8369ac85d70902a63951": "8c0bcd4e13fd1bebfdd027155c8d0141",
".git/objects/d1/aca37e0dddb7b3fbb97bdb19ddbc75ad6a9135": "702546f691851789ff601dfc823b9a58",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "1401847c6f090e48e83740a00be1c303",
".git/objects/e4/37f1cb44b93d922d5bf3a8b90f182abe12afc2": "b7c7d608e2ac04d4be38feace2160695",
".git/objects/e8/fed15e627ba7d7471d7f07b3c5012d02c86534": "c4e1469faa345a5a0874c0c73fa93073",
".git/objects/e9/77fc3a6de8b852ca32b13364ca01b5697ff0e1": "1033408c5b3e23bff839192b72e119af",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/8b72f51015219cecd5478a024d9511be2fc18d": "25d1fb7a0403804df9cd7dac17f434c5",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "27e32738aea45acd66b98d36fc9fc9e0",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "538d2edfa707ca92ed0b867d6c3903d1",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f8/33e6b8186061e5fccaa0c856cf7963611dc4a1": "c920deca5b2d6e6d18730640f614a13c",
".git/refs/heads/main": "7046e02d836573ea23f1a98ecf2bff9a",
".git/refs/remotes/origin/main": "7046e02d836573ea23f1a98ecf2bff9a",
"assets/AssetManifest.bin": "df22f830f89b602a36e8e3d65f34c0ca",
"assets/AssetManifest.bin.json": "36f252753671580a750d78e7c22d37e0",
"assets/AssetManifest.json": "07dc4827fba56ed97fbbae411a939134",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "1ff7cf5dee9e5e4882582def7ed09288",
"assets/lib/assets/about1.jpeg": "da9b6f208f45a44e2a6db9c9ef75a13e",
"assets/lib/assets/about2.jpg": "ad31f7990894a1a77c903d84130ca23e",
"assets/lib/assets/about3.jpeg": "43d873c703567e0f1a3346496cca8f1b",
"assets/lib/assets/about4.jpg": "e250bdc6ca484e7f5e43c5338f02d7f2",
"assets/lib/assets/about5.jpg": "98340419c418cadd8533d437f7a2e0c8",
"assets/lib/assets/call_ico.png": "7e5a697945a3156305734a26a542ad06",
"assets/lib/assets/coin.png": "b60c3c61213a82c7643cf0b28bafd185",
"assets/lib/assets/communication.png": "ba803196d3b7644ffb2576efd1500b6b",
"assets/lib/assets/herobg.jpg": "2a3c1f53c6752fc30e1e1de7a0b0b82a",
"assets/lib/assets/imp.jpg": "b04764aaa95a7cbbd9855b66b5fe8050",
"assets/lib/assets/instagram.png": "5c570427ee23f69853d28aec805eee79",
"assets/lib/assets/linkedin.png": "d492efc706db983e74258dbd348f2208",
"assets/lib/assets/logo.png": "37a4ddc6940932dea8077ff8188551fc",
"assets/lib/assets/logo_green.png": "8ed8772ff4f6d8f43afe59763a4fabfa",
"assets/lib/assets/logo_white.png": "c45726fab990ef092bc32539a6a7a860",
"assets/lib/assets/map_bg.png": "c69d70da155ae5c23613c4081a69b283",
"assets/lib/assets/meditate.jpg": "8a18969ff475e3b2cb3b8a85d88126c4",
"assets/lib/assets/message_ico.png": "0e0d70526f532a02ec9b92aa9a3e149c",
"assets/lib/assets/profileimg.jpg": "79a73d52bde096a92d6fce5084bfeafc",
"assets/lib/assets/step1.jpg": "b83d159e2d8999c12747f5193b5764ef",
"assets/lib/assets/step2.png": "912c7370d5d71d65246a8649f416f725",
"assets/lib/assets/step3.jpg": "c0c2d007c356943bb19067fbff53ee70",
"assets/lib/assets/twitter.png": "6352d995b0c2a0f882503daa1d99a2e7",
"assets/NOTICES": "b9f92d7e23dfffaaf93a8a5909be162c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "6cfe36b4647fbfa15683e09e7dd366bc",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "ba4a8ae1a65ff3ad81c6818fd47e348b",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"cors.json": "b9cb08b122cdb1e46a75ce7eec974089",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "c9a8b4e70cdbb31644f416295f6043f4",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "abcf8d6322581031bb35c7bad0216418",
"/": "abcf8d6322581031bb35c7bad0216418",
"main.dart.js": "84596ec6fd5f1ee0650257583207c632",
"manifest.json": "18fb0315f36e7ff01942666d929463ac",
"version.json": "e0a0cd0eadc8fa593fc017e2d0a87eff"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
