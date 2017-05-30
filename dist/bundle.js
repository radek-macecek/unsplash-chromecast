/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.decode = exports.parse = __webpack_require__(5);
exports.encode = exports.stringify = __webpack_require__(6);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var API_URL = exports.API_URL = "https://api.unsplash.com";
var API_VERSION = exports.API_VERSION = "v1";
var OAUTH_AUTHORIZE_URL = exports.OAUTH_AUTHORIZE_URL = "https://unsplash.com/oauth/authorize";
var OAUTH_TOKEN_URL = exports.OAUTH_TOKEN_URL = "https://unsplash.com/oauth/token";

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.toJson = toJson;

var _constants = __webpack_require__(1);

var _utils = __webpack_require__(15);

var _auth = __webpack_require__(7);

var _auth2 = _interopRequireDefault(_auth);

var _currentUser = __webpack_require__(10);

var _currentUser2 = _interopRequireDefault(_currentUser);

var _users = __webpack_require__(14);

var _users2 = _interopRequireDefault(_users);

var _photos = __webpack_require__(11);

var _photos2 = _interopRequireDefault(_photos);

var _categories = __webpack_require__(8);

var _categories2 = _interopRequireDefault(_categories);

var _collections = __webpack_require__(9);

var _collections2 = _interopRequireDefault(_collections);

var _search = __webpack_require__(12);

var _search2 = _interopRequireDefault(_search);

var _stats = __webpack_require__(13);

var _stats2 = _interopRequireDefault(_stats);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Unsplash = function () {
  function Unsplash(options) {
    _classCallCheck(this, Unsplash);

    this._apiUrl = options.apiUrl || _constants.API_URL;
    this._apiVersion = options.apiVersion || _constants.API_VERSION;
    this._applicationId = options.applicationId;
    this._secret = options.secret;
    this._callbackUrl = options.callbackUrl;
    this._bearerToken = options.bearerToken;

    this.auth = _auth2.default.bind(this)();
    this.currentUser = _currentUser2.default.bind(this)();
    this.users = _users2.default.bind(this)();
    this.photos = _photos2.default.bind(this)();
    this.categories = _categories2.default.bind(this)();
    this.collections = _collections2.default.bind(this)();
    this.search = _search2.default.bind(this)();
    this.stats = _stats2.default.bind(this)();
  }

  _createClass(Unsplash, [{
    key: "request",
    value: function request(requestOptions) {
      var _buildFetchOptions$bi = _utils.buildFetchOptions.bind(this)(requestOptions),
          url = _buildFetchOptions$bi.url,
          options = _buildFetchOptions$bi.options;

      return fetch(url, options);
    }
  }]);

  return Unsplash;
}();

exports.default = Unsplash;
function toJson(res) {
  return typeof res.json === "function" ? res.json() : res;
}

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_unsplash_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_unsplash_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_unsplash_js__);


const unsplash = new __WEBPACK_IMPORTED_MODULE_0_unsplash_js___default.a({
  applicationId: "c59a10355455dc90b79f6e542c61150ad29df9de215edaa582f5103f7b67bea4",
  secret: "1dbd4644e923b93a3f45ac77f488161bb82fe2636fc771b2dff917abd8298482",
  callbackUrl: "urn:ietf:wg:oauth:2.0:oob"
});

const images = [];

function setPicture(element) {
    if (images.length > 0) {
        const url = images.pop().urls.regular;//.replace('w=1080', 'w=1920');
        var img = new Image();
        img.onload = () => {
            element.style.backgroundImage = `url('${url}')`;
            setTimeout(() => setPicture(element), 10000);
        };
        img.src = url;
        console.log('3', images);
    } else {
        setTimeout(() => getPictures(element), 500);
    }
}

function getPictures(element) {
    unsplash.photos.getRandomPhoto({orientation: 'portrait', query: 'person', count: 30})
        .then(__WEBPACK_IMPORTED_MODULE_0_unsplash_js__["toJson"])
        .then(json => {
            console.log('1', images);
            json.map(item => images.push(item));
            console.log('2', images);
            setPicture(element);
        });
}

function component () {
    var main = document.createElement('div');
    main.style.transform = 'rotateZ(90deg)';

    var element = document.createElement('div');
    element.style.width = '100vh';
    element.style.height = '100vw';
    //element.style.transform = 'rotateZ(90deg)';
    element.style.backgroundSize = 'cover';
    //element.style.backgroundPositionX = 'left';
    //element.style.backgroundPositionY = 'top';
    //element.style.position = 'fixed';
    //element.style.left = 0;
    //element.style.top = 0;
    setPicture(element);
    main.appendChild(element);
    return main;
}

document.body.appendChild(component());


/***/ }),
/* 4 */
/***/ (function(module, exports) {

// Filename: formurlencoded.js
// Timestamp: 2016.01.18-15:36:37 (last modified)
// Author(s): Bumblehead (www.bumblehead.com), JBlashill (james@blashill.com)
//
// http://www.w3.org/TR/html5/forms.html#url-encoded-form-data
// input: {one:1,two:2} return: '[one]=1&[two]=2'

var formurlencoded = module.exports = function (data, opts) {
  opts = typeof opts === 'object' ? opts : {};

  function encode (value) {
    return String(value)
      .replace(/[^ !'()~\*]*/g, encodeURIComponent)
      .replace(/ /g, '+')
      .replace(/[!'()~\*]/g, function (ch) {
        return '%' + ch.charCodeAt().toString(16).slice(-2).toUpperCase();
      });
  }

  function keys (obj) {
    var keys = Object.keys(obj);

    return opts.sorted ? keys.sort() : keys;
  }

  function filterjoin (arr) {
    return arr.filter(function (e) { return e; }).join('&');
  }

  function objnest (name, obj) {
    return filterjoin(keys(obj).map(function (key) {
      return nest(name + '[' + key + ']', obj[key]);
    }));
  }

  function arrnest (name, arr) {
    return filterjoin(arr.map(function (elem) {
      return nest(name + '[]', elem);
    }));
  }

  function nest (name, value) {
    var type = typeof value,
        f = null;

    if (value === f) {
      f = opts.ignorenull ? f : encode(name) + '=' + f;
    } else if (/string|number|boolean/.test(type)) {
      f = encode(name) + '=' + encode(value);
    } else if (Array.isArray(value)) {
      f = arrnest(name, value);
    } else if (type === 'object') {
      f = objnest(name, value);
    }

    return f;
  }

  return filterjoin(keys(data).map(function (key) {
    return nest(key, data[key]);
  }));
};


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



// If obj.hasOwnProperty has been overridden, then calling
// obj.hasOwnProperty(prop) will break.
// See: https://github.com/joyent/node/issues/1707
function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

module.exports = function(qs, sep, eq, options) {
  sep = sep || '&';
  eq = eq || '=';
  var obj = {};

  if (typeof qs !== 'string' || qs.length === 0) {
    return obj;
  }

  var regexp = /\+/g;
  qs = qs.split(sep);

  var maxKeys = 1000;
  if (options && typeof options.maxKeys === 'number') {
    maxKeys = options.maxKeys;
  }

  var len = qs.length;
  // maxKeys <= 0 means that we should not limit keys count
  if (maxKeys > 0 && len > maxKeys) {
    len = maxKeys;
  }

  for (var i = 0; i < len; ++i) {
    var x = qs[i].replace(regexp, '%20'),
        idx = x.indexOf(eq),
        kstr, vstr, k, v;

    if (idx >= 0) {
      kstr = x.substr(0, idx);
      vstr = x.substr(idx + 1);
    } else {
      kstr = x;
      vstr = '';
    }

    k = decodeURIComponent(kstr);
    v = decodeURIComponent(vstr);

    if (!hasOwnProperty(obj, k)) {
      obj[k] = v;
    } else if (isArray(obj[k])) {
      obj[k].push(v);
    } else {
      obj[k] = [obj[k], v];
    }
  }

  return obj;
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var stringifyPrimitive = function(v) {
  switch (typeof v) {
    case 'string':
      return v;

    case 'boolean':
      return v ? 'true' : 'false';

    case 'number':
      return isFinite(v) ? v : '';

    default:
      return '';
  }
};

module.exports = function(obj, sep, eq, name) {
  sep = sep || '&';
  eq = eq || '=';
  if (obj === null) {
    obj = undefined;
  }

  if (typeof obj === 'object') {
    return map(objectKeys(obj), function(k) {
      var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
      if (isArray(obj[k])) {
        return map(obj[k], function(v) {
          return ks + encodeURIComponent(stringifyPrimitive(v));
        }).join(sep);
      } else {
        return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
      }
    }).join(sep);

  }

  if (!name) return '';
  return encodeURIComponent(stringifyPrimitive(name)) + eq +
         encodeURIComponent(stringifyPrimitive(obj));
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};

function map (xs, f) {
  if (xs.map) return xs.map(f);
  var res = [];
  for (var i = 0; i < xs.length; i++) {
    res.push(f(xs[i], i));
  }
  return res;
}

var objectKeys = Object.keys || function (obj) {
  var res = [];
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) res.push(key);
  }
  return res;
};


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = auth;

var _querystring = __webpack_require__(0);

var _querystring2 = _interopRequireDefault(_querystring);

var _constants = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function auth() {
  var _this = this;

  return {
    getAuthenticationUrl: function getAuthenticationUrl() {
      var scope = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ["public"];

      var querystrings = _querystring2.default.stringify({
        client_id: _this._applicationId,
        redirect_uri: _this._callbackUrl,
        response_type: "code",
        scope: scope.length > 1 ? scope.join("+") : scope.toString()
      });

      return decodeURIComponent(_constants.OAUTH_AUTHORIZE_URL + "?" + querystrings);
    },

    userAuthentication: function userAuthentication(code) {
      var url = _constants.OAUTH_TOKEN_URL;

      return _this.request({
        url: url,
        method: "POST",
        body: {
          client_id: _this._applicationId,
          client_secret: _this._secret,
          redirect_uri: _this._callbackUrl,
          grant_type: "authorization_code",
          code: code
        },
        oauth: true
      });
    },

    setBearerToken: function setBearerToken(accessToken) {
      if (accessToken) {
        _this._bearerToken = accessToken;
      }
    }
  };
}

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = categories;
function categories() {
  var _this = this;

  return {
    listCategories: function listCategories() {
      var url = "/categories";

      return _this.request({
        url: url,
        method: "GET"
      });
    },

    category: function category(id) {
      var url = "/categories/" + id;

      return _this.request({
        url: url,
        method: "GET"
      });
    },

    categoryPhotos: function categoryPhotos(id, page, perPage) {
      var url = "/categories/" + id + "/photos";

      var query = {
        page: page,
        per_page: perPage
      };

      return _this.request({
        url: url,
        method: "GET",
        query: query
      });
    }
  };
}

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = collections;
function collections() {
  var _this = this;

  return {
    listCollections: function listCollections() {
      var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      var perPage = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;

      var url = "/collections";

      var query = {
        page: page,
        per_page: perPage
      };

      return _this.request({
        url: url,
        method: "GET",
        query: query
      });
    },

    listCuratedCollections: function listCuratedCollections() {
      var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      var perPage = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;

      var url = "/collections/curated";
      var query = {
        page: page,
        per_page: perPage
      };

      return _this.request({
        url: url,
        method: "GET",
        query: query
      });
    },

    listFeaturedCollections: function listFeaturedCollections() {
      var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      var perPage = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;

      var url = "/collections/featured";
      var query = {
        page: page,
        per_page: perPage
      };

      return _this.request({
        url: url,
        method: "GET",
        query: query
      });
    },

    getCollection: collection.bind(this, false),

    getCuratedCollection: collection.bind(this, true),

    getCuratedCollectionPhotos: collectionPhotos.bind(this, true),

    getCollectionPhotos: collectionPhotos.bind(this, false),

    createCollection: createUpdateCollection.bind(this, null),

    updateCollection: createUpdateCollection.bind(this),

    deleteCollection: function deleteCollection(id) {
      var url = "/collections/" + id;

      return _this.request({
        url: url,
        method: "DELETE"
      });
    },

    addPhotoToCollection: function addPhotoToCollection(collectionId, photoId) {
      var url = "/collections/" + collectionId + "/add";

      return _this.request({
        url: url,
        method: "POST",
        body: {
          photo_id: photoId
        }
      });
    },

    removePhotoFromCollection: function removePhotoFromCollection(collectionId, photoId) {
      var url = "/collections/" + collectionId + "/remove?photo_id=" + photoId;

      return _this.request({
        url: url,
        method: "DELETE"
      });
    },

    listRelatedCollections: function listRelatedCollections(collectionId) {
      var url = "/collections/" + collectionId + "/related";

      return _this.request({
        url: url,
        method: "GET"
      });
    }

  };
}

function collection(isCurated, id) {
  var url = isCurated ? "/collections/curated/" + id : "/collections/" + id;

  return this.request({
    url: url,
    method: "GET"
  });
}

function collectionPhotos(isCurated, id) {
  var page = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
  var perPage = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 10;
  var orderBy = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : "latest";

  var url = isCurated ? "/collections/curated/" + id + "/photos" : "/collections/" + id + "/photos";

  var query = {
    page: page,
    per_page: perPage,
    order_by: orderBy
  };

  return this.request({
    url: url,
    method: "GET",
    query: query
  });
}

function createUpdateCollection(id, title, description, isPrivate) {
  var url = id ? "/collections/" + id : "/collections";
  var body = {
    title: title,
    description: description,
    "private": isPrivate
  };

  return this.request({
    url: url,
    method: id ? "PUT" : "POST",
    body: body
  });
}

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = currentUser;
function currentUser() {
  var _this = this;

  return {
    profile: function profile() {
      var url = "/me";

      return _this.request({
        url: url,
        method: "GET"
      });
    },

    updateProfile: function updateProfile(options) {
      var endpointUrl = "/me";
      var username = options.username,
          firstName = options.firstName,
          lastName = options.lastName,
          email = options.email,
          url = options.url,
          location = options.location,
          bio = options.bio,
          instagramUsername = options.instagramUsername;

      var body = {
        username: username,
        first_name: firstName,
        last_name: lastName,
        email: email,
        url: url,
        location: location,
        bio: bio,
        instagram_username: instagramUsername
      };

      Object.keys(body).forEach(function (key) {
        if (!body[key]) {
          delete body[key];
        }
      });

      return _this.request({
        url: endpointUrl,
        method: "PUT",
        body: body
      });
    }
  };
}

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = photos;
function photos() {
  var _this = this;

  return {
    listPhotos: function listPhotos() {
      var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      var perPage = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;
      var orderBy = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "latest";

      var url = "/photos";
      var query = {
        page: page,
        per_page: perPage,
        order_by: orderBy
      };

      return _this.request({
        url: url,
        method: "GET",
        query: query
      });
    },

    listCuratedPhotos: function listCuratedPhotos() {
      var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      var perPage = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;
      var orderBy = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "latest";

      var url = "/photos/curated";
      var query = {
        page: page,
        per_page: perPage,
        order_by: orderBy
      };

      return _this.request({
        url: url,
        method: "GET",
        query: query
      });
    },

    searchPhotos: function searchPhotos(q) {
      var category = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [""];
      var page = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
      var perPage = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 10;

      var url = "/photos/search";
      var query = {
        query: q,
        category: category.length > 1 ? category.join(",") : category.toString(),
        page: page,
        per_page: perPage
      };

      return _this.request({
        url: url,
        method: "GET",
        query: query
      });
    },

    getPhoto: function getPhoto(id, width, height, rectangle) {
      var url = "/photos/" + id;
      var query = {
        w: width,
        h: height,
        rect: rectangle
      };

      return _this.request({
        url: url,
        method: "GET",
        query: query
      });
    },

    getPhotoStats: function getPhotoStats(id) {
      var url = "/photos/" + id + "/stats";

      return _this.request({
        url: url,
        method: "GET"
      });
    },

    getRandomPhoto: function getRandomPhoto() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var url = "/photos/random";
      var category = options.category || [];
      var collections = options.collections || [];

      var query = {
        featured: options.featured,
        username: options.username,
        orientation: options.orientation,
        category: category.join(),
        collections: collections.join(),
        query: options.query,
        w: options.width,
        h: options.height,
        c: options.cacheBuster || new Date().getTime(), // Avoid ajax response caching
        count: options.count
      };

      Object.keys(query).forEach(function (key) {
        if (!query[key]) {
          delete query[key];
        }
      });

      return _this.request({
        url: url,
        method: "GET",
        query: query
      });
    },

    uploadPhoto: function uploadPhoto(photo) {
      if (!_this._bearerToken) {
        throw new Error("Requires a bearerToken to be set.");
      }

      var url = "/photos";

      return _this.request({
        url: url,
        method: "POST",
        body: {
          photo: photo
        }
      });
    },

    likePhoto: function likePhoto(id) {
      if (!_this._bearerToken) {
        throw new Error("Requires a bearerToken to be set.");
      }

      var url = "/photos/" + id + "/like";

      return _this.request({
        url: url,
        method: "POST"
      });
    },

    unlikePhoto: function unlikePhoto(id) {
      if (!_this._bearerToken) {
        throw new Error("Requires a bearerToken to be set.");
      }

      var url = "/photos/" + id + "/like";

      return _this.request({
        url: url,
        method: "DELETE"
      });
    }
  };
}

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = search;
function search() {
  return {
    all: searcher.bind(this, "/search"),

    photos: searcher.bind(this, "/search/photos"),

    users: searcher.bind(this, "/search/users"),

    collections: searcher.bind(this, "/search/collections")
  };
}

function searcher(url) {
  var keyword = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
  var page = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
  var per_page = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 10;

  var query = {
    query: keyword,
    page: page,
    per_page: per_page
  };

  return this.request({
    url: url,
    method: "GET",
    query: query
  });
}

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = stats;
function stats() {
  var _this = this;

  return {
    total: function total() {
      var url = "/stats/total";

      return _this.request({
        url: url,
        method: "GET"
      });
    }
  };
}

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = users;
function users() {
  var _this = this;

  return {
    profile: function profile(username) {
      var url = "/users/" + username;

      return _this.request({
        url: url,
        method: "GET"
      });
    },

    photos: function photos(username) {
      var page = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      var perPage = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 10;
      var orderBy = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "latest";
      var stats = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

      var url = "/users/" + username + "/photos";
      var query = {
        page: page,
        per_page: perPage,
        order_by: orderBy,
        stats: stats
      };

      return _this.request({
        url: url,
        method: "GET",
        query: query
      });
    },

    likes: function likes(username) {
      var page = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      var perPage = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 10;
      var orderBy = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "latest";

      var url = "/users/" + username + "/likes";
      var query = {
        page: page,
        per_page: perPage,
        order_by: orderBy
      };

      return _this.request({
        url: url,
        method: "GET",
        query: query
      });
    },

    collections: function collections(username) {
      var page = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      var perPage = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 10;
      var orderBy = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "published";

      var url = "/users/" + username + "/collections";
      var query = {
        page: page,
        per_page: perPage,
        order_by: orderBy
      };

      return _this.request({
        url: url,
        method: "GET",
        query: query
      });
    },

    statistics: function statistics(username) {
      var resolution = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "days";
      var quantity = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 30;

      var url = "/users/" + username + "/statistics";
      var query = {
        resolution: resolution,
        quantity: quantity
      };

      return _this.request({
        url: url,
        method: "GET",
        query: query
      });
    }
  };
}

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.formUrlEncode = formUrlEncode;
exports.buildFetchOptions = buildFetchOptions;

var _querystring = __webpack_require__(0);

var _formUrlencoded = __webpack_require__(4);

var _formUrlencoded2 = _interopRequireDefault(_formUrlencoded);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function formUrlEncode(body) {
  return (0, _formUrlencoded2.default)(body);
}

function buildFetchOptions(options) {
  var method = options.method,
      query = options.query,
      oauth = options.oauth,
      body = options.body;

  var url = oauth === true ? options.url : "" + this._apiUrl + options.url;
  var headers = _extends({}, options.headers, {
    "Accept-Version": this._apiVersion,
    "Authorization": this._bearerToken ? "Bearer " + this._bearerToken : "Client-ID " + this._applicationId
  });

  if (body) {
    headers["Content-Type"] = "application/x-www-form-urlencoded";
  }

  if (query) {
    url = decodeURIComponent(url + "?" + (0, _querystring.stringify)(query));
  }

  return {
    url: url,
    options: {
      method: method,
      headers: headers,
      body: method !== "GET" && body ? formUrlEncode(body) : undefined
    }
  };
}

/***/ })
/******/ ]);