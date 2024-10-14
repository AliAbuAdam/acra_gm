'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "46371ce8f81438e55b696f83e4e19064",
"version.json": "bc4a152168b74e50c799240be62bdb39",
"index.html": "0824503327ee315d77a11f0c916544e5",
"/": "0824503327ee315d77a11f0c916544e5",
"main.dart.js": "51dd0761843ecf3d162c626f98dc7f8f",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "40a9433d99e262a2c573a37b0f02b0f6",
"assets/AssetManifest.json": "8670ed5b61a2f89f89aa53885d1f14e6",
"assets/NOTICES": "0fd1f7cc73470be876c65ee5d338ba3f",
"assets/FontManifest.json": "0678ca483d7b1e32be164d6665e84435",
"assets/AssetManifest.bin.json": "7bdfadbdbfca6f6f74a853c46f226a3a",
"assets/packages/window_manager/images/ic_chrome_unmaximize.png": "4a90c1909cb74e8f0d35794e2f61d8bf",
"assets/packages/window_manager/images/ic_chrome_minimize.png": "4282cd84cb36edf2efb950ad9269ca62",
"assets/packages/window_manager/images/ic_chrome_maximize.png": "af7499d7657c8b69d23b85156b60298c",
"assets/packages/window_manager/images/ic_chrome_close.png": "75f4b8ab3608a05461a31fc18d6b47c2",
"assets/packages/csc_picker/lib/assets/country.json": "11b8187fd184a2d648d6b5be8c5e9908",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "a3ebf9387be71d3d312d1b18ba33a144",
"assets/fonts/MaterialIcons-Regular.otf": "a3f33536816eeedf83fbabb09169bf53",
"assets/assets/images/svg/passport.svg": "aa7cd9cae7a3627f5369008097a5fa44",
"assets/assets/images/svg/bed.svg": "34822be8771eb3649869bb6c5543ac12",
"assets/assets/images/svg/azkar_baff_icon.svg": "9eb4050234ae85d962954059bf219416",
"assets/assets/images/svg/management_icon.svg": "7341a7cf5064fa7299bd77c6da797355",
"assets/assets/images/svg/compass_main.svg": "faee3b74fd8b66b3d50186d0d7c0501f",
"assets/assets/images/svg/airline_companies_icon.svg": "1068ae20e192e79185282e8090e05591",
"assets/assets/images/svg/donate_icon.svg": "145234507b724dc44e48acb1012b2ae5",
"assets/assets/images/svg/public_card_icon.svg": "cb556320225ee23ad6c2bc64b98abeb5",
"assets/assets/images/svg/sun_icon%2520copy.svg": "07d03107be962267f05f1e0d14602720",
"assets/assets/images/svg/course_line_icon.svg": "351fe01f469b47efece8b97aee446b6e",
"assets/assets/images/svg/to_islam_logo.svg": "475e8c3978cf73d08704ca3f991cbe86",
"assets/assets/images/svg/safar_baff_icon.svg": "893fae8ad7dbdfb35fc2331209c169f0",
"assets/assets/images/svg/turbo_message_enabled_icon.svg": "e189ffc51729aee2287a2fb3c18a98dc",
"assets/assets/images/svg/visa.svg": "c647040253a6cebd04251262ee2a1841",
"assets/assets/images/svg/add_icon.svg": "1bba3358e2d7d19b11bc106fa48a1635",
"assets/assets/images/svg/sun_icon.svg": "07d03107be962267f05f1e0d14602720",
"assets/assets/images/svg/abu_yahya_logo.svg": "c2c67363984c9698d7342739c8184419",
"assets/assets/images/svg/profession_icon.svg": "1d1a80697bf43872e224b7e4a66f8eb1",
"assets/assets/images/svg/gold_icon.svg": "faf07205dd3a4a699c587b856fe6b0f5",
"assets/assets/images/svg/settings_icon.svg": "83cee9ae47bf7f0e790c4a3e6b504baf",
"assets/assets/images/svg/share_icon.svg": "5beefdd36b66571948416da0bb3aa1a0",
"assets/assets/images/svg/chat_icon.svg": "6df0a57854db0f4550bb89e9ac3614a2",
"assets/assets/images/svg/prayer_rakaat_icon.svg": "753ea700d40053b138742d4167952ac9",
"assets/assets/images/svg/support_icon.svg": "fb1c28cb386094516f996f524f3c42d7",
"assets/assets/images/svg/push_sender_icon.svg": "957ee08d0e268c508c7481bea69dc05c",
"assets/assets/images/svg/guide.svg": "1eba35eb48f813dce303892358970b0a",
"assets/assets/images/svg/world_icon.svg": "999fa00cd2978362978f76190c6851fd",
"assets/assets/images/svg/promotions_icon.svg": "4a0374d6672b4e3c7167b8adfaa338cd",
"assets/assets/images/svg/dashboard_icon.svg": "52bdb7a57eb61705a2a17ec8db925d98",
"assets/assets/images/svg/my_tours_icon.svg": "a705131bdd4bc296e2075cc1b72a17c5",
"assets/assets/images/svg/star_icon.svg": "8fdc0fe82bc38ff6f999ae1d64852eb0",
"assets/assets/images/svg/promotion_add_header.svg": "507bdac9b956b7c9862137f9edc454f1",
"assets/assets/images/svg/question_option_icon.svg": "1f9f0a004d505b9b27280161591f2545",
"assets/assets/images/svg/avatar_man.svg": "1b0cd12748b78d18fc7ed7c9f6c31a7f",
"assets/assets/images/svg/coin_icon.svg": "740507fa9873cfd7c33e8e8c9ce24e66",
"assets/assets/images/svg/combi.svg": "58dd0352e862d61dd62b6b89ddf1eed9",
"assets/assets/images/svg/logo_symbol.svg": "edb5b93bd9cdd7b2ad23a47d51377684",
"assets/assets/images/svg/zoom_out_icon.svg": "dbfecd5d24bc6171dd86055ed9383200",
"assets/assets/images/svg/find_my_point_icon.svg": "3800569006d27388cb2cc943ef4e2914",
"assets/assets/images/svg/chart_icon.svg": "5c883b2a4753535e28bf04d8da8c8df7",
"assets/assets/images/svg/sign_out_icon.svg": "d7d9d56cc33e7b63fe9cb29c3341db92",
"assets/assets/images/svg/ilm_icon.svg": "b0c10c40516794fb190c27e5e58cfdf9",
"assets/assets/images/svg/reset_icon.svg": "0bdbc4a93d0bff6e11106fc466a45274",
"assets/assets/images/svg/nikah_icon.svg": "64774941f7d75436d78a1d6fdb310909",
"assets/assets/images/svg/telegram_icon.svg": "899f6ec236d99e25a4e0b0413fa6ba3f",
"assets/assets/images/svg/audio_play_icon.svg": "792c00d65027f2709f320e1ad9b38aa5",
"assets/assets/images/svg/knowledge_base_icon.svg": "2dd0e95532b31a6b1d32591b8918989f",
"assets/assets/images/svg/exchange_icon.svg": "855c34401d4d8b68c04aace781584b41",
"assets/assets/images/svg/hotel.svg": "3414ac9de23d32c9cedca5b54528b405",
"assets/assets/images/svg/theme_mode_icon.svg": "2e40032b5fd333477118fdfe9993162d",
"assets/assets/images/svg/sadaka_card_icon.svg": "910fff51f95a12b082342f72b3f7aaab",
"assets/assets/images/svg/turbo_message_disabled_icon.svg": "100451986e1f53952f681980e60831b9",
"assets/assets/images/svg/baggage_icon.svg": "cc8a97a357b756148c00ee22570cdd1a",
"assets/assets/images/svg/knowledge_icon.svg": "8c8e03a81b5849a95d3ca2d3f823890a",
"assets/assets/images/svg/marali_logo.svg": "6654c09cc1ef1be43b15f7f335b36b27",
"assets/assets/images/svg/wifi.svg": "6a26e9bdcec3aa1b7f3d3d5f43bda769",
"assets/assets/images/svg/pilgrimage_gm_icon.svg": "d88a76da89560cb7c3fbfcc2baf76a69",
"assets/assets/images/svg/add_contact_icon.svg": "9cd7edda628c09f91d1042edfdcb5518",
"assets/assets/images/svg/present_icon.svg": "01be6928d5ca9fc244a02f6774f59b36",
"assets/assets/images/svg/necklace_icon.svg": "8ef7a046435b878d69882b27e3cdeaf6",
"assets/assets/images/svg/manual_prayers_setting_icon.svg": "85e18e9d491467297c2ca03fe0db1b0f",
"assets/assets/images/svg/profession_exp_icon.svg": "53769b51ca07bd9c490eb0927d5dea9c",
"assets/assets/images/svg/hotels_icon.svg": "b5c5f9e122586ee68ccccd5b1ee9a7ef",
"assets/assets/images/svg/marcket_icon.svg": "23c8d391812a4e9b3096b0cd0dd71a8b",
"assets/assets/images/svg/question_icon.svg": "548a5ba2cef0b37b5d7b60a03ef9e99f",
"assets/assets/images/svg/base_icon.svg": "1d98fbc4bd6b2d0cb1fe58afea0393d5",
"assets/assets/images/svg/moon_icon.svg": "d40cf781608cf18f2eab35993a09a44f",
"assets/assets/images/svg/camera.svg": "a1b577c9e8a1407e84484a5860a4068a",
"assets/assets/images/svg/method_asr_icon.svg": "43dab54bcabc96575be3b2df69b3e4d3",
"assets/assets/images/svg/self_marker_icon.svg": "fcc821ee734407efdf17f4f43001a9ec",
"assets/assets/images/svg/bus.svg": "e422b8feb6788780219798ed530bae52",
"assets/assets/images/svg/ring_icon.svg": "59696695dad314a49540df515311389b",
"assets/assets/images/svg/shield_icon.svg": "3cfe677706c0659201a0c282b9947b4d",
"assets/assets/images/svg/madrasah_icon.svg": "c44b2483b5622cf22504109cfa0556f8",
"assets/assets/images/svg/sadaka_icon.svg": "2c65c79853d1e6094c429a1ccf497feb",
"assets/assets/images/svg/empty_folder_icon.svg": "d3539b2c9aab0e998555f3f929235073",
"assets/assets/images/svg/audio_wave_icon.svg": "130ec91e7c0ffcc543d4b1f7d91f2843",
"assets/assets/images/svg/region_icon.svg": "8f10cf46fb2b390029688198a0afc12d",
"assets/assets/images/svg/alhamdulillah.svg": "7181cadd60e180d9e3f8c34fc6bce2be",
"assets/assets/images/svg/compass_qiblah.svg": "9dcaf670dd5f6f3da469474be17734e1",
"assets/assets/images/svg/big_compass.svg": "45328d1356b519f21fa07ab5398c96ae",
"assets/assets/images/svg/account_setting_icon.svg": "bbe13eb0e95bce1a873abfd96e66ec40",
"assets/assets/images/svg/prayer_setting_icon.svg": "69e59cda4d80ba4394b7b5df3d6cc881",
"assets/assets/images/svg/skill_tree_icon.svg": "897aeb0087a2cbeb240047fb84a6a0de",
"assets/assets/images/svg/zamzam_icon.svg": "446be654b5e0b8aa58f8c63068d9e7ef",
"assets/assets/images/svg/zoom_in_icon.svg": "0341c25bb28f568f17e7cdbed50eea6f",
"assets/assets/images/svg/series_icon.svg": "7852d6265cc8efb2b2a9067c4f0b896e",
"assets/assets/images/svg/location_icon.svg": "1a9ce2c32c434e7d59e62885070fe4e0",
"assets/assets/images/svg/pilgrimage_icon.svg": "0c46e2a7c1513abee51bc45344bfa4fc",
"assets/assets/images/svg/video.svg": "d2d72e7141709452129cee2ab269e74b",
"assets/assets/images/svg/calendar.svg": "29c1afbb98fb65ea225a68d4dfd2e418",
"assets/assets/images/svg/tile_icon.svg": "b189ccf18955dd02f7c96255fc4229ea",
"assets/assets/images/svg/baggage_back_icon.svg": "c363b4250eb2c70f0e44f1a583eebccc",
"assets/assets/images/svg/logout_icon.svg": "7d8e6af2e7090b62fb022bfef533cac5",
"assets/assets/images/svg/sociality_icon.svg": "5f074b700b644ef7b9567c38069d8536",
"assets/assets/images/svg/logo.svg": "1bd0160a9c03baae8e5846ef4c9dbae7",
"assets/assets/images/svg/map_tag_icon.svg": "4dfa2310bf54899efaf2d5cae58e43a4",
"assets/assets/images/svg/avatar_woman.svg": "55f67c9ee42fe0cae8beaec8677225e4",
"assets/assets/images/svg/airplane.svg": "ae484d4a752d8acae417b919bd41f24b",
"assets/assets/images/svg/food.svg": "d3f8f3d010502268b80d067df5d0c2c6",
"assets/assets/images/svg/professions_icon.svg": "9b153a15ac3ad13143e0a6a1b6c1baea",
"assets/assets/images/svg/rupor_icon.svg": "ab6636c723497b276dafa4fa779a8f4d",
"assets/assets/images/svg/world_map_icon.svg": "bdf82a9ee7288e8c8579ce49c895a9ff",
"assets/assets/images/svg/mini_compass.svg": "0c024d6c0ea642b820e9168d45bb7942",
"assets/assets/images/svg/call_icon.svg": "d760641e476eb33fb998c05b25472241",
"assets/assets/images/logo_foreground.png": "413fb0edf2a836b1cea64944a57f2e56",
"assets/assets/images/logo.png": "a34153f227a0225f8df775d5beec4a02",
"assets/assets/images/main/man_marker.png": "af65477c9b18d54795b1449e2446368e",
"assets/assets/images/main/hajj.jpeg": "61d9ec1330f1c34321bdd0e1df45d425",
"assets/assets/images/main/umrah.png": "9d0cefc217a117c1094b499a4c36f465",
"assets/assets/images/main/woman_marker.png": "2b35ae609d576ebb349ce2083c49ff5e",
"assets/assets/images/splash_logo.png": "8e73c2bc64002adf68e4e2b3d648bd5b",
"assets/assets/fonts/Kitab-Regular.ttf": "d764b58a372a3a6a51ca5c492aa4bbc2",
"assets/assets/fonts/Uthmanic-Regular.otf": "2471b689976b0777ffd566a3f2eb8634",
"assets/assets/animations/swords.riv": "881e7f46d2a46384299ca1c4c6403c2d",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
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
