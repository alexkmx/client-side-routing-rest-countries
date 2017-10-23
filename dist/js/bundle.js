/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	return __webpack_require__(__webpack_require__.s = 13);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Check if `obj` is an object.
 *
 * @param {Object} obj
 * @return {Boolean}
 * @api private
 */

function isObject(obj) {
  return null !== obj && 'object' === typeof obj;
}

module.exports = isObject;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _director = __webpack_require__(6);

var _superagent = __webpack_require__(8);

var _superagent2 = _interopRequireDefault(_superagent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import showAll from '/All'
var appContainer = document.querySelector('.countries-container');
// appContainer.innerHTML = showAll()
appContainer.innerHTML = '';
function showAll() {
  _superagent2.default.get('https://restcountries.eu/rest/v2/all').then(function (data) {
    var info = data.body;
    appContainer.innerHTML = '';
    info.forEach(function (obj) {
      // console.log(obj);
      var languages = obj.languages[0].nativeName;

      appContainer.innerHTML += '\n  <div class="country-card">\n    <img class="country-flag" src="' + obj.flag + '" alt="flag">\n    <h4 class="country-name">' + obj.name + '</h4>\n    <p class="country-capital">' + obj.capital + '</p>\n  </div>\n';
    });
  });
}

function showCountLang(e) {

  _superagent2.default.get('https://restcountries.eu/rest/v2/all').then(function (data) {
    var info = data.body;
    appContainer.innerHTML = '';
    info.forEach(function (obj) {
      var nativeLang = obj.languages[0].iso639_1;
      // console.log(nativeLang);
      if (e === nativeLang) {
        appContainer.innerHTML += '\n  <div class="country-card">\n    <img class="country-flag" src="' + obj.flag + '" alt="flag">\n    <h4 class="country-name">' + obj.name + '</h4>\n    <p class="country-capital">' + obj.capital + '</p>\n  </div>\n';
      }
    });
  });
}
var routes = {
  '/': showAll,
  '/languages/:id': showCountLang

};

var router = (0, _director.Router)(routes);
router.init('/');

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(4);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(7)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/sass-loader/lib/loader.js!../../node_modules/resolve-url-loader/index.js!./main.scss", function() {
			var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/sass-loader/lib/loader.js!../../node_modules/resolve-url-loader/index.js!./main.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {


/**
 * Expose `Emitter`.
 */

if (true) {
  module.exports = Emitter;
}

/**
 * Initialize a new `Emitter`.
 *
 * @api public
 */

function Emitter(obj) {
  if (obj) return mixin(obj);
};

/**
 * Mixin the emitter properties.
 *
 * @param {Object} obj
 * @return {Object}
 * @api private
 */

function mixin(obj) {
  for (var key in Emitter.prototype) {
    obj[key] = Emitter.prototype[key];
  }
  return obj;
}

/**
 * Listen on the given `event` with `fn`.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.on =
Emitter.prototype.addEventListener = function(event, fn){
  this._callbacks = this._callbacks || {};
  (this._callbacks['$' + event] = this._callbacks['$' + event] || [])
    .push(fn);
  return this;
};

/**
 * Adds an `event` listener that will be invoked a single
 * time then automatically removed.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.once = function(event, fn){
  function on() {
    this.off(event, on);
    fn.apply(this, arguments);
  }

  on.fn = fn;
  this.on(event, on);
  return this;
};

/**
 * Remove the given callback for `event` or all
 * registered callbacks.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.off =
Emitter.prototype.removeListener =
Emitter.prototype.removeAllListeners =
Emitter.prototype.removeEventListener = function(event, fn){
  this._callbacks = this._callbacks || {};

  // all
  if (0 == arguments.length) {
    this._callbacks = {};
    return this;
  }

  // specific event
  var callbacks = this._callbacks['$' + event];
  if (!callbacks) return this;

  // remove all handlers
  if (1 == arguments.length) {
    delete this._callbacks['$' + event];
    return this;
  }

  // remove specific handler
  var cb;
  for (var i = 0; i < callbacks.length; i++) {
    cb = callbacks[i];
    if (cb === fn || cb.fn === fn) {
      callbacks.splice(i, 1);
      break;
    }
  }
  return this;
};

/**
 * Emit `event` with the given args.
 *
 * @param {String} event
 * @param {Mixed} ...
 * @return {Emitter}
 */

Emitter.prototype.emit = function(event){
  this._callbacks = this._callbacks || {};
  var args = [].slice.call(arguments, 1)
    , callbacks = this._callbacks['$' + event];

  if (callbacks) {
    callbacks = callbacks.slice(0);
    for (var i = 0, len = callbacks.length; i < len; ++i) {
      callbacks[i].apply(this, args);
    }
  }

  return this;
};

/**
 * Return array of callbacks for `event`.
 *
 * @param {String} event
 * @return {Array}
 * @api public
 */

Emitter.prototype.listeners = function(event){
  this._callbacks = this._callbacks || {};
  return this._callbacks['$' + event] || [];
};

/**
 * Check if this emitter has `event` handlers.
 *
 * @param {String} event
 * @return {Boolean}
 * @api public
 */

Emitter.prototype.hasListeners = function(event){
  return !! this.listeners(event).length;
};


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, "* {\n  box-sizing: border-box; }\n\nbody {\n  margin: 0; }\n\n.starter {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: #607D8B;\n  transition: 1s all; }\n\n.starter.loaded {\n  background: #4CAF50; }\n\nh2.starter-txt {\n  font-family: sans-serif;\n  font-size: 36px;\n  font-weight: 200;\n  width: 600px;\n  margin: 0 auto;\n  margin-top: 250px;\n  text-align: center;\n  color: #fff;\n  padding: 20px;\n  border-bottom: 4px solid #fff; }\n\n* {\n  box-sizing: border-box; }\n\nimg {\n  width: 100%;\n  display: block; }\n\n#app-container {\n  max-width: 800px;\n  margin: 0 auto;\n  font-family: 'Futura', sans-serif;\n  background: #fff; }\n\nh1 {\n  background: #335;\n  color: #fff;\n  padding: 12px;\n  font-weight: 200; }\n\n.countries-container {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-around; }\n\n.country-card {\n  width: 24%;\n  border: 1px solid #ddd;\n  padding: 12px;\n  margin-bottom: .5rem; }\n\n.country-name {\n  font-size: 21px;\n  margin: .5rem 0 .25rem 0; }\n\n.country-capital {\n  font-size: 14px;\n  margin: .25rem 0;\n  padding-left: .25rem;\n  color: #aaa;\n  border-left: 1px solid #ddd; }\n\n.country-name {\n  font-size: 21px; }\n\n.country-flag {\n  width: 120px;\n  height: 80px; }\n\n.links-lang {\n  background-color: yellow;\n  height: 40px;\n  width: 200px;\n  margin-top: 0;\n  margin-left: 450px; }\n", ""]);

// exports


/***/ }),
/* 5 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function() {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		var result = [];
		for(var i = 0; i < this.length; i++) {
			var item = this[i];
			if(item[2]) {
				result.push("@media " + item[2] + "{" + item[1] + "}");
			} else {
				result.push(item[1]);
			}
		}
		return result.join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {



//
// Generated on Tue Dec 16 2014 12:13:47 GMT+0100 (CET) by Charlie Robbins, Paolo Fragomeni & the Contributors (Using Codesurgeon).
// Version 1.2.6
//

(function (exports) {

/*
 * browser.js: Browser specific functionality for director.
 *
 * (C) 2011, Charlie Robbins, Paolo Fragomeni, & the Contributors.
 * MIT LICENSE
 *
 */

var dloc = document.location;

function dlocHashEmpty() {
  // Non-IE browsers return '' when the address bar shows '#'; Director's logic
  // assumes both mean empty.
  return dloc.hash === '' || dloc.hash === '#';
}

var listener = {
  mode: 'modern',
  hash: dloc.hash,
  history: false,

  check: function () {
    var h = dloc.hash;
    if (h != this.hash) {
      this.hash = h;
      this.onHashChanged();
    }
  },

  fire: function () {
    if (this.mode === 'modern') {
      this.history === true ? window.onpopstate() : window.onhashchange();
    }
    else {
      this.onHashChanged();
    }
  },

  init: function (fn, history) {
    var self = this;
    this.history = history;

    if (!Router.listeners) {
      Router.listeners = [];
    }

    function onchange(onChangeEvent) {
      for (var i = 0, l = Router.listeners.length; i < l; i++) {
        Router.listeners[i](onChangeEvent);
      }
    }

    //note IE8 is being counted as 'modern' because it has the hashchange event
    if ('onhashchange' in window && (document.documentMode === undefined
      || document.documentMode > 7)) {
      // At least for now HTML5 history is available for 'modern' browsers only
      if (this.history === true) {
        // There is an old bug in Chrome that causes onpopstate to fire even
        // upon initial page load. Since the handler is run manually in init(),
        // this would cause Chrome to run it twise. Currently the only
        // workaround seems to be to set the handler after the initial page load
        // http://code.google.com/p/chromium/issues/detail?id=63040
        setTimeout(function() {
          window.onpopstate = onchange;
        }, 500);
      }
      else {
        window.onhashchange = onchange;
      }
      this.mode = 'modern';
    }
    else {
      //
      // IE support, based on a concept by Erik Arvidson ...
      //
      var frame = document.createElement('iframe');
      frame.id = 'state-frame';
      frame.style.display = 'none';
      document.body.appendChild(frame);
      this.writeFrame('');

      if ('onpropertychange' in document && 'attachEvent' in document) {
        document.attachEvent('onpropertychange', function () {
          if (event.propertyName === 'location') {
            self.check();
          }
        });
      }

      window.setInterval(function () { self.check(); }, 50);

      this.onHashChanged = onchange;
      this.mode = 'legacy';
    }

    Router.listeners.push(fn);

    return this.mode;
  },

  destroy: function (fn) {
    if (!Router || !Router.listeners) {
      return;
    }

    var listeners = Router.listeners;

    for (var i = listeners.length - 1; i >= 0; i--) {
      if (listeners[i] === fn) {
        listeners.splice(i, 1);
      }
    }
  },

  setHash: function (s) {
    // Mozilla always adds an entry to the history
    if (this.mode === 'legacy') {
      this.writeFrame(s);
    }

    if (this.history === true) {
      window.history.pushState({}, document.title, s);
      // Fire an onpopstate event manually since pushing does not obviously
      // trigger the pop event.
      this.fire();
    } else {
      dloc.hash = (s[0] === '/') ? s : '/' + s;
    }
    return this;
  },

  writeFrame: function (s) {
    // IE support...
    var f = document.getElementById('state-frame');
    var d = f.contentDocument || f.contentWindow.document;
    d.open();
    d.write("<script>_hash = '" + s + "'; onload = parent.listener.syncHash;<script>");
    d.close();
  },

  syncHash: function () {
    // IE support...
    var s = this._hash;
    if (s != dloc.hash) {
      dloc.hash = s;
    }
    return this;
  },

  onHashChanged: function () {}
};

var Router = exports.Router = function (routes) {
  if (!(this instanceof Router)) return new Router(routes);

  this.params   = {};
  this.routes   = {};
  this.methods  = ['on', 'once', 'after', 'before'];
  this.scope    = [];
  this._methods = {};

  this._insert = this.insert;
  this.insert = this.insertEx;

  this.historySupport = (window.history != null ? window.history.pushState : null) != null

  this.configure();
  this.mount(routes || {});
};

Router.prototype.init = function (r) {
  var self = this
    , routeTo;
  this.handler = function(onChangeEvent) {
    var newURL = onChangeEvent && onChangeEvent.newURL || window.location.hash;
    var url = self.history === true ? self.getPath() : newURL.replace(/.*#/, '');
    self.dispatch('on', url.charAt(0) === '/' ? url : '/' + url);
  };

  listener.init(this.handler, this.history);

  if (this.history === false) {
    if (dlocHashEmpty() && r) {
      dloc.hash = r;
    } else if (!dlocHashEmpty()) {
      self.dispatch('on', '/' + dloc.hash.replace(/^(#\/|#|\/)/, ''));
    }
  }
  else {
    if (this.convert_hash_in_init) {
      // Use hash as route
      routeTo = dlocHashEmpty() && r ? r : !dlocHashEmpty() ? dloc.hash.replace(/^#/, '') : null;
      if (routeTo) {
        window.history.replaceState({}, document.title, routeTo);
      }
    }
    else {
      // Use canonical url
      routeTo = this.getPath();
    }

    // Router has been initialized, but due to the chrome bug it will not
    // yet actually route HTML5 history state changes. Thus, decide if should route.
    if (routeTo || this.run_in_init === true) {
      this.handler();
    }
  }

  return this;
};

Router.prototype.explode = function () {
  var v = this.history === true ? this.getPath() : dloc.hash;
  if (v.charAt(1) === '/') { v=v.slice(1) }
  return v.slice(1, v.length).split("/");
};

Router.prototype.setRoute = function (i, v, val) {
  var url = this.explode();

  if (typeof i === 'number' && typeof v === 'string') {
    url[i] = v;
  }
  else if (typeof val === 'string') {
    url.splice(i, v, s);
  }
  else {
    url = [i];
  }

  listener.setHash(url.join('/'));
  return url;
};

//
// ### function insertEx(method, path, route, parent)
// #### @method {string} Method to insert the specific `route`.
// #### @path {Array} Parsed path to insert the `route` at.
// #### @route {Array|function} Route handlers to insert.
// #### @parent {Object} **Optional** Parent "routes" to insert into.
// insert a callback that will only occur once per the matched route.
//
Router.prototype.insertEx = function(method, path, route, parent) {
  if (method === "once") {
    method = "on";
    route = function(route) {
      var once = false;
      return function() {
        if (once) return;
        once = true;
        return route.apply(this, arguments);
      };
    }(route);
  }
  return this._insert(method, path, route, parent);
};

Router.prototype.getRoute = function (v) {
  var ret = v;

  if (typeof v === "number") {
    ret = this.explode()[v];
  }
  else if (typeof v === "string"){
    var h = this.explode();
    ret = h.indexOf(v);
  }
  else {
    ret = this.explode();
  }

  return ret;
};

Router.prototype.destroy = function () {
  listener.destroy(this.handler);
  return this;
};

Router.prototype.getPath = function () {
  var path = window.location.pathname;
  if (path.substr(0, 1) !== '/') {
    path = '/' + path;
  }
  return path;
};
function _every(arr, iterator) {
  for (var i = 0; i < arr.length; i += 1) {
    if (iterator(arr[i], i, arr) === false) {
      return;
    }
  }
}

function _flatten(arr) {
  var flat = [];
  for (var i = 0, n = arr.length; i < n; i++) {
    flat = flat.concat(arr[i]);
  }
  return flat;
}

function _asyncEverySeries(arr, iterator, callback) {
  if (!arr.length) {
    return callback();
  }
  var completed = 0;
  (function iterate() {
    iterator(arr[completed], function(err) {
      if (err || err === false) {
        callback(err);
        callback = function() {};
      } else {
        completed += 1;
        if (completed === arr.length) {
          callback();
        } else {
          iterate();
        }
      }
    });
  })();
}

function paramifyString(str, params, mod) {
  mod = str;
  for (var param in params) {
    if (params.hasOwnProperty(param)) {
      mod = params[param](str);
      if (mod !== str) {
        break;
      }
    }
  }
  return mod === str ? "([._a-zA-Z0-9-%()]+)" : mod;
}

function regifyString(str, params) {
  var matches, last = 0, out = "";
  while (matches = str.substr(last).match(/[^\w\d\- %@&]*\*[^\w\d\- %@&]*/)) {
    last = matches.index + matches[0].length;
    matches[0] = matches[0].replace(/^\*/, "([_.()!\\ %@&a-zA-Z0-9-]+)");
    out += str.substr(0, matches.index) + matches[0];
  }
  str = out += str.substr(last);
  var captures = str.match(/:([^\/]+)/ig), capture, length;
  if (captures) {
    length = captures.length;
    for (var i = 0; i < length; i++) {
      capture = captures[i];
      if (capture.slice(0, 2) === "::") {
        str = capture.slice(1);
      } else {
        str = str.replace(capture, paramifyString(capture, params));
      }
    }
  }
  return str;
}

function terminator(routes, delimiter, start, stop) {
  var last = 0, left = 0, right = 0, start = (start || "(").toString(), stop = (stop || ")").toString(), i;
  for (i = 0; i < routes.length; i++) {
    var chunk = routes[i];
    if (chunk.indexOf(start, last) > chunk.indexOf(stop, last) || ~chunk.indexOf(start, last) && !~chunk.indexOf(stop, last) || !~chunk.indexOf(start, last) && ~chunk.indexOf(stop, last)) {
      left = chunk.indexOf(start, last);
      right = chunk.indexOf(stop, last);
      if (~left && !~right || !~left && ~right) {
        var tmp = routes.slice(0, (i || 1) + 1).join(delimiter);
        routes = [ tmp ].concat(routes.slice((i || 1) + 1));
      }
      last = (right > left ? right : left) + 1;
      i = 0;
    } else {
      last = 0;
    }
  }
  return routes;
}

var QUERY_SEPARATOR = /\?.*/;

Router.prototype.configure = function(options) {
  options = options || {};
  for (var i = 0; i < this.methods.length; i++) {
    this._methods[this.methods[i]] = true;
  }
  this.recurse = options.recurse || this.recurse || false;
  this.async = options.async || false;
  this.delimiter = options.delimiter || "/";
  this.strict = typeof options.strict === "undefined" ? true : options.strict;
  this.notfound = options.notfound;
  this.resource = options.resource;
  this.history = options.html5history && this.historySupport || false;
  this.run_in_init = this.history === true && options.run_handler_in_init !== false;
  this.convert_hash_in_init = this.history === true && options.convert_hash_in_init !== false;
  this.every = {
    after: options.after || null,
    before: options.before || null,
    on: options.on || null
  };
  return this;
};

Router.prototype.param = function(token, matcher) {
  if (token[0] !== ":") {
    token = ":" + token;
  }
  var compiled = new RegExp(token, "g");
  this.params[token] = function(str) {
    return str.replace(compiled, matcher.source || matcher);
  };
  return this;
};

Router.prototype.on = Router.prototype.route = function(method, path, route) {
  var self = this;
  if (!route && typeof path == "function") {
    route = path;
    path = method;
    method = "on";
  }
  if (Array.isArray(path)) {
    return path.forEach(function(p) {
      self.on(method, p, route);
    });
  }
  if (path.source) {
    path = path.source.replace(/\\\//ig, "/");
  }
  if (Array.isArray(method)) {
    return method.forEach(function(m) {
      self.on(m.toLowerCase(), path, route);
    });
  }
  path = path.split(new RegExp(this.delimiter));
  path = terminator(path, this.delimiter);
  this.insert(method, this.scope.concat(path), route);
};

Router.prototype.path = function(path, routesFn) {
  var self = this, length = this.scope.length;
  if (path.source) {
    path = path.source.replace(/\\\//ig, "/");
  }
  path = path.split(new RegExp(this.delimiter));
  path = terminator(path, this.delimiter);
  this.scope = this.scope.concat(path);
  routesFn.call(this, this);
  this.scope.splice(length, path.length);
};

Router.prototype.dispatch = function(method, path, callback) {
  var self = this, fns = this.traverse(method, path.replace(QUERY_SEPARATOR, ""), this.routes, ""), invoked = this._invoked, after;
  this._invoked = true;
  if (!fns || fns.length === 0) {
    this.last = [];
    if (typeof this.notfound === "function") {
      this.invoke([ this.notfound ], {
        method: method,
        path: path
      }, callback);
    }
    return false;
  }
  if (this.recurse === "forward") {
    fns = fns.reverse();
  }
  function updateAndInvoke() {
    self.last = fns.after;
    self.invoke(self.runlist(fns), self, callback);
  }
  after = this.every && this.every.after ? [ this.every.after ].concat(this.last) : [ this.last ];
  if (after && after.length > 0 && invoked) {
    if (this.async) {
      this.invoke(after, this, updateAndInvoke);
    } else {
      this.invoke(after, this);
      updateAndInvoke();
    }
    return true;
  }
  updateAndInvoke();
  return true;
};

Router.prototype.invoke = function(fns, thisArg, callback) {
  var self = this;
  var apply;
  if (this.async) {
    apply = function(fn, next) {
      if (Array.isArray(fn)) {
        return _asyncEverySeries(fn, apply, next);
      } else if (typeof fn == "function") {
        fn.apply(thisArg, (fns.captures || []).concat(next));
      }
    };
    _asyncEverySeries(fns, apply, function() {
      if (callback) {
        callback.apply(thisArg, arguments);
      }
    });
  } else {
    apply = function(fn) {
      if (Array.isArray(fn)) {
        return _every(fn, apply);
      } else if (typeof fn === "function") {
        return fn.apply(thisArg, fns.captures || []);
      } else if (typeof fn === "string" && self.resource) {
        self.resource[fn].apply(thisArg, fns.captures || []);
      }
    };
    _every(fns, apply);
  }
};

Router.prototype.traverse = function(method, path, routes, regexp, filter) {
  var fns = [], current, exact, match, next, that;
  function filterRoutes(routes) {
    if (!filter) {
      return routes;
    }
    function deepCopy(source) {
      var result = [];
      for (var i = 0; i < source.length; i++) {
        result[i] = Array.isArray(source[i]) ? deepCopy(source[i]) : source[i];
      }
      return result;
    }
    function applyFilter(fns) {
      for (var i = fns.length - 1; i >= 0; i--) {
        if (Array.isArray(fns[i])) {
          applyFilter(fns[i]);
          if (fns[i].length === 0) {
            fns.splice(i, 1);
          }
        } else {
          if (!filter(fns[i])) {
            fns.splice(i, 1);
          }
        }
      }
    }
    var newRoutes = deepCopy(routes);
    newRoutes.matched = routes.matched;
    newRoutes.captures = routes.captures;
    newRoutes.after = routes.after.filter(filter);
    applyFilter(newRoutes);
    return newRoutes;
  }
  if (path === this.delimiter && routes[method]) {
    next = [ [ routes.before, routes[method] ].filter(Boolean) ];
    next.after = [ routes.after ].filter(Boolean);
    next.matched = true;
    next.captures = [];
    return filterRoutes(next);
  }
  for (var r in routes) {
    if (routes.hasOwnProperty(r) && (!this._methods[r] || this._methods[r] && typeof routes[r] === "object" && !Array.isArray(routes[r]))) {
      current = exact = regexp + this.delimiter + r;
      if (!this.strict) {
        exact += "[" + this.delimiter + "]?";
      }
      match = path.match(new RegExp("^" + exact));
      if (!match) {
        continue;
      }
      if (match[0] && match[0] == path && routes[r][method]) {
        next = [ [ routes[r].before, routes[r][method] ].filter(Boolean) ];
        next.after = [ routes[r].after ].filter(Boolean);
        next.matched = true;
        next.captures = match.slice(1);
        if (this.recurse && routes === this.routes) {
          next.push([ routes.before, routes.on ].filter(Boolean));
          next.after = next.after.concat([ routes.after ].filter(Boolean));
        }
        return filterRoutes(next);
      }
      next = this.traverse(method, path, routes[r], current);
      if (next.matched) {
        if (next.length > 0) {
          fns = fns.concat(next);
        }
        if (this.recurse) {
          fns.push([ routes[r].before, routes[r].on ].filter(Boolean));
          next.after = next.after.concat([ routes[r].after ].filter(Boolean));
          if (routes === this.routes) {
            fns.push([ routes["before"], routes["on"] ].filter(Boolean));
            next.after = next.after.concat([ routes["after"] ].filter(Boolean));
          }
        }
        fns.matched = true;
        fns.captures = next.captures;
        fns.after = next.after;
        return filterRoutes(fns);
      }
    }
  }
  return false;
};

Router.prototype.insert = function(method, path, route, parent) {
  var methodType, parentType, isArray, nested, part;
  path = path.filter(function(p) {
    return p && p.length > 0;
  });
  parent = parent || this.routes;
  part = path.shift();
  if (/\:|\*/.test(part) && !/\\d|\\w/.test(part)) {
    part = regifyString(part, this.params);
  }
  if (path.length > 0) {
    parent[part] = parent[part] || {};
    return this.insert(method, path, route, parent[part]);
  }
  if (!part && !path.length && parent === this.routes) {
    methodType = typeof parent[method];
    switch (methodType) {
     case "function":
      parent[method] = [ parent[method], route ];
      return;
     case "object":
      parent[method].push(route);
      return;
     case "undefined":
      parent[method] = route;
      return;
    }
    return;
  }
  parentType = typeof parent[part];
  isArray = Array.isArray(parent[part]);
  if (parent[part] && !isArray && parentType == "object") {
    methodType = typeof parent[part][method];
    switch (methodType) {
     case "function":
      parent[part][method] = [ parent[part][method], route ];
      return;
     case "object":
      parent[part][method].push(route);
      return;
     case "undefined":
      parent[part][method] = route;
      return;
    }
  } else if (parentType == "undefined") {
    nested = {};
    nested[method] = route;
    parent[part] = nested;
    return;
  }
  throw new Error("Invalid route context: " + parentType);
};



Router.prototype.extend = function(methods) {
  var self = this, len = methods.length, i;
  function extend(method) {
    self._methods[method] = true;
    self[method] = function() {
      var extra = arguments.length === 1 ? [ method, "" ] : [ method ];
      self.on.apply(self, extra.concat(Array.prototype.slice.call(arguments)));
    };
  }
  for (i = 0; i < len; i++) {
    extend(methods[i]);
  }
};

Router.prototype.runlist = function(fns) {
  var runlist = this.every && this.every.before ? [ this.every.before ].concat(_flatten(fns)) : _flatten(fns);
  if (this.every && this.every.on) {
    runlist.push(this.every.on);
  }
  runlist.captures = fns.captures;
  runlist.source = fns.source;
  return runlist;
};

Router.prototype.mount = function(routes, path) {
  if (!routes || typeof routes !== "object" || Array.isArray(routes)) {
    return;
  }
  var self = this;
  path = path || [];
  if (!Array.isArray(path)) {
    path = path.split(self.delimiter);
  }
  function insertOrMount(route, local) {
    var rename = route, parts = route.split(self.delimiter), routeType = typeof routes[route], isRoute = parts[0] === "" || !self._methods[parts[0]], event = isRoute ? "on" : rename;
    if (isRoute) {
      rename = rename.slice((rename.match(new RegExp("^" + self.delimiter)) || [ "" ])[0].length);
      parts.shift();
    }
    if (isRoute && routeType === "object" && !Array.isArray(routes[route])) {
      local = local.concat(parts);
      self.mount(routes[route], local);
      return;
    }
    if (isRoute) {
      local = local.concat(rename.split(self.delimiter));
      local = terminator(local, self.delimiter);
    }
    self.insert(event, local, routes[route]);
  }
  for (var route in routes) {
    if (routes.hasOwnProperty(route)) {
      insertOrMount(route, path.slice(0));
    }
  }
};



}( true ? exports : window));

/***/ }),
/* 7 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
	}),
	getHeadElement = memoize(function () {
		return document.head || document.getElementsByTagName("head")[0];
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [];

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the bottom of <head>.
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
}

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];
		if(domStyle) {
			domStyle.refs++;
			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}
			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];
			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}
			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles(list) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var head = getHeadElement();
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			head.insertBefore(styleElement, head.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			head.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		head.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	styleElement.type = "text/css";
	insertStyleElement(options, styleElement);
	return styleElement;
}

function createLinkElement(options) {
	var linkElement = document.createElement("link");
	linkElement.rel = "stylesheet";
	insertStyleElement(options, linkElement);
	return linkElement;
}

function addStyle(obj, options) {
	var styleElement, update, remove;

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else if(obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function") {
		styleElement = createLinkElement(options);
		update = updateLink.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
			if(styleElement.href)
				URL.revokeObjectURL(styleElement.href);
		};
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;
		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		styleElement.setAttribute("media", media)
	}

	if(styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}

function updateLink(linkElement, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	if(sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = linkElement.href;

	linkElement.href = URL.createObjectURL(blob);

	if(oldSrc)
		URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Root reference for iframes.
 */

var root;
if (typeof window !== 'undefined') { // Browser window
  root = window;
} else if (typeof self !== 'undefined') { // Web Worker
  root = self;
} else { // Other environments
  console.warn("Using browser-only version of superagent in non-browser environment");
  root = this;
}

var Emitter = __webpack_require__(3);
var RequestBase = __webpack_require__(9);
var isObject = __webpack_require__(0);
var ResponseBase = __webpack_require__(10);
var shouldRetry = __webpack_require__(11);

/**
 * Noop.
 */

function noop(){};

/**
 * Expose `request`.
 */

var request = exports = module.exports = function(method, url) {
  // callback
  if ('function' == typeof url) {
    return new exports.Request('GET', method).end(url);
  }

  // url first
  if (1 == arguments.length) {
    return new exports.Request('GET', method);
  }

  return new exports.Request(method, url);
}

exports.Request = Request;

/**
 * Determine XHR.
 */

request.getXHR = function () {
  if (root.XMLHttpRequest
      && (!root.location || 'file:' != root.location.protocol
          || !root.ActiveXObject)) {
    return new XMLHttpRequest;
  } else {
    try { return new ActiveXObject('Microsoft.XMLHTTP'); } catch(e) {}
    try { return new ActiveXObject('Msxml2.XMLHTTP.6.0'); } catch(e) {}
    try { return new ActiveXObject('Msxml2.XMLHTTP.3.0'); } catch(e) {}
    try { return new ActiveXObject('Msxml2.XMLHTTP'); } catch(e) {}
  }
  throw Error("Browser-only version of superagent could not find XHR");
};

/**
 * Removes leading and trailing whitespace, added to support IE.
 *
 * @param {String} s
 * @return {String}
 * @api private
 */

var trim = ''.trim
  ? function(s) { return s.trim(); }
  : function(s) { return s.replace(/(^\s*|\s*$)/g, ''); };

/**
 * Serialize the given `obj`.
 *
 * @param {Object} obj
 * @return {String}
 * @api private
 */

function serialize(obj) {
  if (!isObject(obj)) return obj;
  var pairs = [];
  for (var key in obj) {
    pushEncodedKeyValuePair(pairs, key, obj[key]);
  }
  return pairs.join('&');
}

/**
 * Helps 'serialize' with serializing arrays.
 * Mutates the pairs array.
 *
 * @param {Array} pairs
 * @param {String} key
 * @param {Mixed} val
 */

function pushEncodedKeyValuePair(pairs, key, val) {
  if (val != null) {
    if (Array.isArray(val)) {
      val.forEach(function(v) {
        pushEncodedKeyValuePair(pairs, key, v);
      });
    } else if (isObject(val)) {
      for(var subkey in val) {
        pushEncodedKeyValuePair(pairs, key + '[' + subkey + ']', val[subkey]);
      }
    } else {
      pairs.push(encodeURIComponent(key)
        + '=' + encodeURIComponent(val));
    }
  } else if (val === null) {
    pairs.push(encodeURIComponent(key));
  }
}

/**
 * Expose serialization method.
 */

 request.serializeObject = serialize;

 /**
  * Parse the given x-www-form-urlencoded `str`.
  *
  * @param {String} str
  * @return {Object}
  * @api private
  */

function parseString(str) {
  var obj = {};
  var pairs = str.split('&');
  var pair;
  var pos;

  for (var i = 0, len = pairs.length; i < len; ++i) {
    pair = pairs[i];
    pos = pair.indexOf('=');
    if (pos == -1) {
      obj[decodeURIComponent(pair)] = '';
    } else {
      obj[decodeURIComponent(pair.slice(0, pos))] =
        decodeURIComponent(pair.slice(pos + 1));
    }
  }

  return obj;
}

/**
 * Expose parser.
 */

request.parseString = parseString;

/**
 * Default MIME type map.
 *
 *     superagent.types.xml = 'application/xml';
 *
 */

request.types = {
  html: 'text/html',
  json: 'application/json',
  xml: 'text/xml',
  urlencoded: 'application/x-www-form-urlencoded',
  'form': 'application/x-www-form-urlencoded',
  'form-data': 'application/x-www-form-urlencoded'
};

/**
 * Default serialization map.
 *
 *     superagent.serialize['application/xml'] = function(obj){
 *       return 'generated xml here';
 *     };
 *
 */

 request.serialize = {
   'application/x-www-form-urlencoded': serialize,
   'application/json': JSON.stringify
 };

 /**
  * Default parsers.
  *
  *     superagent.parse['application/xml'] = function(str){
  *       return { object parsed from str };
  *     };
  *
  */

request.parse = {
  'application/x-www-form-urlencoded': parseString,
  'application/json': JSON.parse
};

/**
 * Parse the given header `str` into
 * an object containing the mapped fields.
 *
 * @param {String} str
 * @return {Object}
 * @api private
 */

function parseHeader(str) {
  var lines = str.split(/\r?\n/);
  var fields = {};
  var index;
  var line;
  var field;
  var val;

  for (var i = 0, len = lines.length; i < len; ++i) {
    line = lines[i];
    index = line.indexOf(':');
    if (index === -1) { // could be empty line, just skip it
      continue;
    }
    field = line.slice(0, index).toLowerCase();
    val = trim(line.slice(index + 1));
    fields[field] = val;
  }

  return fields;
}

/**
 * Check if `mime` is json or has +json structured syntax suffix.
 *
 * @param {String} mime
 * @return {Boolean}
 * @api private
 */

function isJSON(mime) {
  return /[\/+]json\b/.test(mime);
}

/**
 * Initialize a new `Response` with the given `xhr`.
 *
 *  - set flags (.ok, .error, etc)
 *  - parse header
 *
 * Examples:
 *
 *  Aliasing `superagent` as `request` is nice:
 *
 *      request = superagent;
 *
 *  We can use the promise-like API, or pass callbacks:
 *
 *      request.get('/').end(function(res){});
 *      request.get('/', function(res){});
 *
 *  Sending data can be chained:
 *
 *      request
 *        .post('/user')
 *        .send({ name: 'tj' })
 *        .end(function(res){});
 *
 *  Or passed to `.send()`:
 *
 *      request
 *        .post('/user')
 *        .send({ name: 'tj' }, function(res){});
 *
 *  Or passed to `.post()`:
 *
 *      request
 *        .post('/user', { name: 'tj' })
 *        .end(function(res){});
 *
 * Or further reduced to a single call for simple cases:
 *
 *      request
 *        .post('/user', { name: 'tj' }, function(res){});
 *
 * @param {XMLHTTPRequest} xhr
 * @param {Object} options
 * @api private
 */

function Response(req) {
  this.req = req;
  this.xhr = this.req.xhr;
  // responseText is accessible only if responseType is '' or 'text' and on older browsers
  this.text = ((this.req.method !='HEAD' && (this.xhr.responseType === '' || this.xhr.responseType === 'text')) || typeof this.xhr.responseType === 'undefined')
     ? this.xhr.responseText
     : null;
  this.statusText = this.req.xhr.statusText;
  var status = this.xhr.status;
  // handle IE9 bug: http://stackoverflow.com/questions/10046972/msie-returns-status-code-of-1223-for-ajax-request
  if (status === 1223) {
      status = 204;
  }
  this._setStatusProperties(status);
  this.header = this.headers = parseHeader(this.xhr.getAllResponseHeaders());
  // getAllResponseHeaders sometimes falsely returns "" for CORS requests, but
  // getResponseHeader still works. so we get content-type even if getting
  // other headers fails.
  this.header['content-type'] = this.xhr.getResponseHeader('content-type');
  this._setHeaderProperties(this.header);

  if (null === this.text && req._responseType) {
    this.body = this.xhr.response;
  } else {
    this.body = this.req.method != 'HEAD'
      ? this._parseBody(this.text ? this.text : this.xhr.response)
      : null;
  }
}

ResponseBase(Response.prototype);

/**
 * Parse the given body `str`.
 *
 * Used for auto-parsing of bodies. Parsers
 * are defined on the `superagent.parse` object.
 *
 * @param {String} str
 * @return {Mixed}
 * @api private
 */

Response.prototype._parseBody = function(str){
  var parse = request.parse[this.type];
  if(this.req._parser) {
    return this.req._parser(this, str);
  }
  if (!parse && isJSON(this.type)) {
    parse = request.parse['application/json'];
  }
  return parse && str && (str.length || str instanceof Object)
    ? parse(str)
    : null;
};

/**
 * Return an `Error` representative of this response.
 *
 * @return {Error}
 * @api public
 */

Response.prototype.toError = function(){
  var req = this.req;
  var method = req.method;
  var url = req.url;

  var msg = 'cannot ' + method + ' ' + url + ' (' + this.status + ')';
  var err = new Error(msg);
  err.status = this.status;
  err.method = method;
  err.url = url;

  return err;
};

/**
 * Expose `Response`.
 */

request.Response = Response;

/**
 * Initialize a new `Request` with the given `method` and `url`.
 *
 * @param {String} method
 * @param {String} url
 * @api public
 */

function Request(method, url) {
  var self = this;
  this._query = this._query || [];
  this.method = method;
  this.url = url;
  this.header = {}; // preserves header name case
  this._header = {}; // coerces header names to lowercase
  this.on('end', function(){
    var err = null;
    var res = null;

    try {
      res = new Response(self);
    } catch(e) {
      err = new Error('Parser is unable to parse the response');
      err.parse = true;
      err.original = e;
      // issue #675: return the raw response if the response parsing fails
      if (self.xhr) {
        // ie9 doesn't have 'response' property
        err.rawResponse = typeof self.xhr.responseType == 'undefined' ? self.xhr.responseText : self.xhr.response;
        // issue #876: return the http status code if the response parsing fails
        err.status = self.xhr.status ? self.xhr.status : null;
        err.statusCode = err.status; // backwards-compat only
      } else {
        err.rawResponse = null;
        err.status = null;
      }

      return self.callback(err);
    }

    self.emit('response', res);

    var new_err;
    try {
      if (!self._isResponseOK(res)) {
        new_err = new Error(res.statusText || 'Unsuccessful HTTP response');
      }
    } catch(custom_err) {
      new_err = custom_err; // ok() callback can throw
    }

    // #1000 don't catch errors from the callback to avoid double calling it
    if (new_err) {
      new_err.original = err;
      new_err.response = res;
      new_err.status = res.status;
      self.callback(new_err, res);
    } else {
      self.callback(null, res);
    }
  });
}

/**
 * Mixin `Emitter` and `RequestBase`.
 */

Emitter(Request.prototype);
RequestBase(Request.prototype);

/**
 * Set Content-Type to `type`, mapping values from `request.types`.
 *
 * Examples:
 *
 *      superagent.types.xml = 'application/xml';
 *
 *      request.post('/')
 *        .type('xml')
 *        .send(xmlstring)
 *        .end(callback);
 *
 *      request.post('/')
 *        .type('application/xml')
 *        .send(xmlstring)
 *        .end(callback);
 *
 * @param {String} type
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.type = function(type){
  this.set('Content-Type', request.types[type] || type);
  return this;
};

/**
 * Set Accept to `type`, mapping values from `request.types`.
 *
 * Examples:
 *
 *      superagent.types.json = 'application/json';
 *
 *      request.get('/agent')
 *        .accept('json')
 *        .end(callback);
 *
 *      request.get('/agent')
 *        .accept('application/json')
 *        .end(callback);
 *
 * @param {String} accept
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.accept = function(type){
  this.set('Accept', request.types[type] || type);
  return this;
};

/**
 * Set Authorization field value with `user` and `pass`.
 *
 * @param {String} user
 * @param {String} [pass] optional in case of using 'bearer' as type
 * @param {Object} options with 'type' property 'auto', 'basic' or 'bearer' (default 'basic')
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.auth = function(user, pass, options){
  if (typeof pass === 'object' && pass !== null) { // pass is optional and can substitute for options
    options = pass;
  }
  if (!options) {
    options = {
      type: 'function' === typeof btoa ? 'basic' : 'auto',
    }
  }

  switch (options.type) {
    case 'basic':
      this.set('Authorization', 'Basic ' + btoa(user + ':' + pass));
    break;

    case 'auto':
      this.username = user;
      this.password = pass;
    break;

    case 'bearer': // usage would be .auth(accessToken, { type: 'bearer' })
      this.set('Authorization', 'Bearer ' + user);
    break;
  }
  return this;
};

/**
 * Add query-string `val`.
 *
 * Examples:
 *
 *   request.get('/shoes')
 *     .query('size=10')
 *     .query({ color: 'blue' })
 *
 * @param {Object|String} val
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.query = function(val){
  if ('string' != typeof val) val = serialize(val);
  if (val) this._query.push(val);
  return this;
};

/**
 * Queue the given `file` as an attachment to the specified `field`,
 * with optional `options` (or filename).
 *
 * ``` js
 * request.post('/upload')
 *   .attach('content', new Blob(['<a id="a"><b id="b">hey!</b></a>'], { type: "text/html"}))
 *   .end(callback);
 * ```
 *
 * @param {String} field
 * @param {Blob|File} file
 * @param {String|Object} options
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.attach = function(field, file, options){
  if (file) {
    if (this._data) {
      throw Error("superagent can't mix .send() and .attach()");
    }

    this._getFormData().append(field, file, options || file.name);
  }
  return this;
};

Request.prototype._getFormData = function(){
  if (!this._formData) {
    this._formData = new root.FormData();
  }
  return this._formData;
};

/**
 * Invoke the callback with `err` and `res`
 * and handle arity check.
 *
 * @param {Error} err
 * @param {Response} res
 * @api private
 */

Request.prototype.callback = function(err, res){
  // console.log(this._retries, this._maxRetries)
  if (this._maxRetries && this._retries++ < this._maxRetries && shouldRetry(err, res)) {
    return this._retry();
  }

  var fn = this._callback;
  this.clearTimeout();

  if (err) {
    if (this._maxRetries) err.retries = this._retries - 1;
    this.emit('error', err);
  }

  fn(err, res);
};

/**
 * Invoke callback with x-domain error.
 *
 * @api private
 */

Request.prototype.crossDomainError = function(){
  var err = new Error('Request has been terminated\nPossible causes: the network is offline, Origin is not allowed by Access-Control-Allow-Origin, the page is being unloaded, etc.');
  err.crossDomain = true;

  err.status = this.status;
  err.method = this.method;
  err.url = this.url;

  this.callback(err);
};

// This only warns, because the request is still likely to work
Request.prototype.buffer = Request.prototype.ca = Request.prototype.agent = function(){
  console.warn("This is not supported in browser version of superagent");
  return this;
};

// This throws, because it can't send/receive data as expected
Request.prototype.pipe = Request.prototype.write = function(){
  throw Error("Streaming is not supported in browser version of superagent");
};

/**
 * Check if `obj` is a host object,
 * we don't want to serialize these :)
 *
 * @param {Object} obj
 * @return {Boolean}
 * @api private
 */
Request.prototype._isHost = function _isHost(obj) {
  // Native objects stringify to [object File], [object Blob], [object FormData], etc.
  return obj && 'object' === typeof obj && !Array.isArray(obj) && Object.prototype.toString.call(obj) !== '[object Object]';
}

/**
 * Initiate request, invoking callback `fn(res)`
 * with an instanceof `Response`.
 *
 * @param {Function} fn
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.end = function(fn){
  if (this._endCalled) {
    console.warn("Warning: .end() was called twice. This is not supported in superagent");
  }
  this._endCalled = true;

  // store callback
  this._callback = fn || noop;

  // querystring
  this._finalizeQueryString();

  return this._end();
};

Request.prototype._end = function() {
  var self = this;
  var xhr = this.xhr = request.getXHR();
  var data = this._formData || this._data;

  this._setTimeouts();

  // state change
  xhr.onreadystatechange = function(){
    var readyState = xhr.readyState;
    if (readyState >= 2 && self._responseTimeoutTimer) {
      clearTimeout(self._responseTimeoutTimer);
    }
    if (4 != readyState) {
      return;
    }

    // In IE9, reads to any property (e.g. status) off of an aborted XHR will
    // result in the error "Could not complete the operation due to error c00c023f"
    var status;
    try { status = xhr.status } catch(e) { status = 0; }

    if (!status) {
      if (self.timedout || self._aborted) return;
      return self.crossDomainError();
    }
    self.emit('end');
  };

  // progress
  var handleProgress = function(direction, e) {
    if (e.total > 0) {
      e.percent = e.loaded / e.total * 100;
    }
    e.direction = direction;
    self.emit('progress', e);
  }
  if (this.hasListeners('progress')) {
    try {
      xhr.onprogress = handleProgress.bind(null, 'download');
      if (xhr.upload) {
        xhr.upload.onprogress = handleProgress.bind(null, 'upload');
      }
    } catch(e) {
      // Accessing xhr.upload fails in IE from a web worker, so just pretend it doesn't exist.
      // Reported here:
      // https://connect.microsoft.com/IE/feedback/details/837245/xmlhttprequest-upload-throws-invalid-argument-when-used-from-web-worker-context
    }
  }

  // initiate request
  try {
    if (this.username && this.password) {
      xhr.open(this.method, this.url, true, this.username, this.password);
    } else {
      xhr.open(this.method, this.url, true);
    }
  } catch (err) {
    // see #1149
    return this.callback(err);
  }

  // CORS
  if (this._withCredentials) xhr.withCredentials = true;

  // body
  if (!this._formData && 'GET' != this.method && 'HEAD' != this.method && 'string' != typeof data && !this._isHost(data)) {
    // serialize stuff
    var contentType = this._header['content-type'];
    var serialize = this._serializer || request.serialize[contentType ? contentType.split(';')[0] : ''];
    if (!serialize && isJSON(contentType)) {
      serialize = request.serialize['application/json'];
    }
    if (serialize) data = serialize(data);
  }

  // set header fields
  for (var field in this.header) {
    if (null == this.header[field]) continue;

    if (this.header.hasOwnProperty(field))
      xhr.setRequestHeader(field, this.header[field]);
  }

  if (this._responseType) {
    xhr.responseType = this._responseType;
  }

  // send stuff
  this.emit('request', this);

  // IE11 xhr.send(undefined) sends 'undefined' string as POST payload (instead of nothing)
  // We need null here if data is undefined
  xhr.send(typeof data !== 'undefined' ? data : null);
  return this;
};

/**
 * GET `url` with optional callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed|Function} [data] or fn
 * @param {Function} [fn]
 * @return {Request}
 * @api public
 */

request.get = function(url, data, fn){
  var req = request('GET', url);
  if ('function' == typeof data) fn = data, data = null;
  if (data) req.query(data);
  if (fn) req.end(fn);
  return req;
};

/**
 * HEAD `url` with optional callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed|Function} [data] or fn
 * @param {Function} [fn]
 * @return {Request}
 * @api public
 */

request.head = function(url, data, fn){
  var req = request('HEAD', url);
  if ('function' == typeof data) fn = data, data = null;
  if (data) req.query(data);
  if (fn) req.end(fn);
  return req;
};

/**
 * OPTIONS query to `url` with optional callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed|Function} [data] or fn
 * @param {Function} [fn]
 * @return {Request}
 * @api public
 */

request.options = function(url, data, fn){
  var req = request('OPTIONS', url);
  if ('function' == typeof data) fn = data, data = null;
  if (data) req.send(data);
  if (fn) req.end(fn);
  return req;
};

/**
 * DELETE `url` with optional `data` and callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed} [data]
 * @param {Function} [fn]
 * @return {Request}
 * @api public
 */

function del(url, data, fn){
  var req = request('DELETE', url);
  if ('function' == typeof data) fn = data, data = null;
  if (data) req.send(data);
  if (fn) req.end(fn);
  return req;
};

request['del'] = del;
request['delete'] = del;

/**
 * PATCH `url` with optional `data` and callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed} [data]
 * @param {Function} [fn]
 * @return {Request}
 * @api public
 */

request.patch = function(url, data, fn){
  var req = request('PATCH', url);
  if ('function' == typeof data) fn = data, data = null;
  if (data) req.send(data);
  if (fn) req.end(fn);
  return req;
};

/**
 * POST `url` with optional `data` and callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed} [data]
 * @param {Function} [fn]
 * @return {Request}
 * @api public
 */

request.post = function(url, data, fn){
  var req = request('POST', url);
  if ('function' == typeof data) fn = data, data = null;
  if (data) req.send(data);
  if (fn) req.end(fn);
  return req;
};

/**
 * PUT `url` with optional `data` and callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed|Function} [data] or fn
 * @param {Function} [fn]
 * @return {Request}
 * @api public
 */

request.put = function(url, data, fn){
  var req = request('PUT', url);
  if ('function' == typeof data) fn = data, data = null;
  if (data) req.send(data);
  if (fn) req.end(fn);
  return req;
};


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Module of mixed-in functions shared between node and client code
 */
var isObject = __webpack_require__(0);

/**
 * Expose `RequestBase`.
 */

module.exports = RequestBase;

/**
 * Initialize a new `RequestBase`.
 *
 * @api public
 */

function RequestBase(obj) {
  if (obj) return mixin(obj);
}

/**
 * Mixin the prototype properties.
 *
 * @param {Object} obj
 * @return {Object}
 * @api private
 */

function mixin(obj) {
  for (var key in RequestBase.prototype) {
    obj[key] = RequestBase.prototype[key];
  }
  return obj;
}

/**
 * Clear previous timeout.
 *
 * @return {Request} for chaining
 * @api public
 */

RequestBase.prototype.clearTimeout = function _clearTimeout(){
  clearTimeout(this._timer);
  clearTimeout(this._responseTimeoutTimer);
  delete this._timer;
  delete this._responseTimeoutTimer;
  return this;
};

/**
 * Override default response body parser
 *
 * This function will be called to convert incoming data into request.body
 *
 * @param {Function}
 * @api public
 */

RequestBase.prototype.parse = function parse(fn){
  this._parser = fn;
  return this;
};

/**
 * Set format of binary response body.
 * In browser valid formats are 'blob' and 'arraybuffer',
 * which return Blob and ArrayBuffer, respectively.
 *
 * In Node all values result in Buffer.
 *
 * Examples:
 *
 *      req.get('/')
 *        .responseType('blob')
 *        .end(callback);
 *
 * @param {String} val
 * @return {Request} for chaining
 * @api public
 */

RequestBase.prototype.responseType = function(val){
  this._responseType = val;
  return this;
};

/**
 * Override default request body serializer
 *
 * This function will be called to convert data set via .send or .attach into payload to send
 *
 * @param {Function}
 * @api public
 */

RequestBase.prototype.serialize = function serialize(fn){
  this._serializer = fn;
  return this;
};

/**
 * Set timeouts.
 *
 * - response timeout is time between sending request and receiving the first byte of the response. Includes DNS and connection time.
 * - deadline is the time from start of the request to receiving response body in full. If the deadline is too short large files may not load at all on slow connections.
 *
 * Value of 0 or false means no timeout.
 *
 * @param {Number|Object} ms or {response, deadline}
 * @return {Request} for chaining
 * @api public
 */

RequestBase.prototype.timeout = function timeout(options){
  if (!options || 'object' !== typeof options) {
    this._timeout = options;
    this._responseTimeout = 0;
    return this;
  }

  for(var option in options) {
    switch(option) {
      case 'deadline':
        this._timeout = options.deadline;
        break;
      case 'response':
        this._responseTimeout = options.response;
        break;
      default:
        console.warn("Unknown timeout option", option);
    }
  }
  return this;
};

/**
 * Set number of retry attempts on error.
 *
 * Failed requests will be retried 'count' times if timeout or err.code >= 500.
 *
 * @param {Number} count
 * @return {Request} for chaining
 * @api public
 */

RequestBase.prototype.retry = function retry(count){
  // Default to 1 if no count passed or true
  if (arguments.length === 0 || count === true) count = 1;
  if (count <= 0) count = 0;
  this._maxRetries = count;
  this._retries = 0;
  return this;
};

/**
 * Retry request
 *
 * @return {Request} for chaining
 * @api private
 */

RequestBase.prototype._retry = function() {
  this.clearTimeout();

  // node
  if (this.req) {
    this.req = null;
    this.req = this.request();
  }

  this._aborted = false;
  this.timedout = false;

  return this._end();
};

/**
 * Promise support
 *
 * @param {Function} resolve
 * @param {Function} [reject]
 * @return {Request}
 */

RequestBase.prototype.then = function then(resolve, reject) {
  if (!this._fullfilledPromise) {
    var self = this;
    if (this._endCalled) {
      console.warn("Warning: superagent request was sent twice, because both .end() and .then() were called. Never call .end() if you use promises");
    }
    this._fullfilledPromise = new Promise(function(innerResolve, innerReject){
      self.end(function(err, res){
        if (err) innerReject(err); else innerResolve(res);
      });
    });
  }
  return this._fullfilledPromise.then(resolve, reject);
}

RequestBase.prototype.catch = function(cb) {
  return this.then(undefined, cb);
};

/**
 * Allow for extension
 */

RequestBase.prototype.use = function use(fn) {
  fn(this);
  return this;
}

RequestBase.prototype.ok = function(cb) {
  if ('function' !== typeof cb) throw Error("Callback required");
  this._okCallback = cb;
  return this;
};

RequestBase.prototype._isResponseOK = function(res) {
  if (!res) {
    return false;
  }

  if (this._okCallback) {
    return this._okCallback(res);
  }

  return res.status >= 200 && res.status < 300;
};


/**
 * Get request header `field`.
 * Case-insensitive.
 *
 * @param {String} field
 * @return {String}
 * @api public
 */

RequestBase.prototype.get = function(field){
  return this._header[field.toLowerCase()];
};

/**
 * Get case-insensitive header `field` value.
 * This is a deprecated internal API. Use `.get(field)` instead.
 *
 * (getHeader is no longer used internally by the superagent code base)
 *
 * @param {String} field
 * @return {String}
 * @api private
 * @deprecated
 */

RequestBase.prototype.getHeader = RequestBase.prototype.get;

/**
 * Set header `field` to `val`, or multiple fields with one object.
 * Case-insensitive.
 *
 * Examples:
 *
 *      req.get('/')
 *        .set('Accept', 'application/json')
 *        .set('X-API-Key', 'foobar')
 *        .end(callback);
 *
 *      req.get('/')
 *        .set({ Accept: 'application/json', 'X-API-Key': 'foobar' })
 *        .end(callback);
 *
 * @param {String|Object} field
 * @param {String} val
 * @return {Request} for chaining
 * @api public
 */

RequestBase.prototype.set = function(field, val){
  if (isObject(field)) {
    for (var key in field) {
      this.set(key, field[key]);
    }
    return this;
  }
  this._header[field.toLowerCase()] = val;
  this.header[field] = val;
  return this;
};

/**
 * Remove header `field`.
 * Case-insensitive.
 *
 * Example:
 *
 *      req.get('/')
 *        .unset('User-Agent')
 *        .end(callback);
 *
 * @param {String} field
 */
RequestBase.prototype.unset = function(field){
  delete this._header[field.toLowerCase()];
  delete this.header[field];
  return this;
};

/**
 * Write the field `name` and `val`, or multiple fields with one object
 * for "multipart/form-data" request bodies.
 *
 * ``` js
 * request.post('/upload')
 *   .field('foo', 'bar')
 *   .end(callback);
 *
 * request.post('/upload')
 *   .field({ foo: 'bar', baz: 'qux' })
 *   .end(callback);
 * ```
 *
 * @param {String|Object} name
 * @param {String|Blob|File|Buffer|fs.ReadStream} val
 * @return {Request} for chaining
 * @api public
 */
RequestBase.prototype.field = function(name, val) {

  // name should be either a string or an object.
  if (null === name ||  undefined === name) {
    throw new Error('.field(name, val) name can not be empty');
  }

  if (this._data) {
    console.error(".field() can't be used if .send() is used. Please use only .send() or only .field() & .attach()");
  }

  if (isObject(name)) {
    for (var key in name) {
      this.field(key, name[key]);
    }
    return this;
  }

  if (Array.isArray(val)) {
    for (var i in val) {
      this.field(name, val[i]);
    }
    return this;
  }

  // val should be defined now
  if (null === val || undefined === val) {
    throw new Error('.field(name, val) val can not be empty');
  }
  if ('boolean' === typeof val) {
    val = '' + val;
  }
  this._getFormData().append(name, val);
  return this;
};

/**
 * Abort the request, and clear potential timeout.
 *
 * @return {Request}
 * @api public
 */
RequestBase.prototype.abort = function(){
  if (this._aborted) {
    return this;
  }
  this._aborted = true;
  this.xhr && this.xhr.abort(); // browser
  this.req && this.req.abort(); // node
  this.clearTimeout();
  this.emit('abort');
  return this;
};

/**
 * Enable transmission of cookies with x-domain requests.
 *
 * Note that for this to work the origin must not be
 * using "Access-Control-Allow-Origin" with a wildcard,
 * and also must set "Access-Control-Allow-Credentials"
 * to "true".
 *
 * @api public
 */

RequestBase.prototype.withCredentials = function(on){
  // This is browser-only functionality. Node side is no-op.
  if(on==undefined) on = true;
  this._withCredentials = on;
  return this;
};

/**
 * Set the max redirects to `n`. Does noting in browser XHR implementation.
 *
 * @param {Number} n
 * @return {Request} for chaining
 * @api public
 */

RequestBase.prototype.redirects = function(n){
  this._maxRedirects = n;
  return this;
};

/**
 * Maximum size of buffered response body, in bytes. Counts uncompressed size.
 * Default 200MB.
 *
 * @param {Number} n
 * @return {Request} for chaining
 */
RequestBase.prototype.maxResponseSize = function(n){
  if ('number' !== typeof n) {
    throw TypeError("Invalid argument");
  }
  this._maxResponseSize = n;
  return this;
};

/**
 * Convert to a plain javascript object (not JSON string) of scalar properties.
 * Note as this method is designed to return a useful non-this value,
 * it cannot be chained.
 *
 * @return {Object} describing method, url, and data of this request
 * @api public
 */

RequestBase.prototype.toJSON = function(){
  return {
    method: this.method,
    url: this.url,
    data: this._data,
    headers: this._header
  };
};


/**
 * Send `data` as the request body, defaulting the `.type()` to "json" when
 * an object is given.
 *
 * Examples:
 *
 *       // manual json
 *       request.post('/user')
 *         .type('json')
 *         .send('{"name":"tj"}')
 *         .end(callback)
 *
 *       // auto json
 *       request.post('/user')
 *         .send({ name: 'tj' })
 *         .end(callback)
 *
 *       // manual x-www-form-urlencoded
 *       request.post('/user')
 *         .type('form')
 *         .send('name=tj')
 *         .end(callback)
 *
 *       // auto x-www-form-urlencoded
 *       request.post('/user')
 *         .type('form')
 *         .send({ name: 'tj' })
 *         .end(callback)
 *
 *       // defaults to x-www-form-urlencoded
 *      request.post('/user')
 *        .send('name=tobi')
 *        .send('species=ferret')
 *        .end(callback)
 *
 * @param {String|Object} data
 * @return {Request} for chaining
 * @api public
 */

RequestBase.prototype.send = function(data){
  var isObj = isObject(data);
  var type = this._header['content-type'];

  if (this._formData) {
    console.error(".send() can't be used if .attach() or .field() is used. Please use only .send() or only .field() & .attach()");
  }

  if (isObj && !this._data) {
    if (Array.isArray(data)) {
      this._data = [];
    } else if (!this._isHost(data)) {
      this._data = {};
    }
  } else if (data && this._data && this._isHost(this._data)) {
    throw Error("Can't merge these send calls");
  }

  // merge
  if (isObj && isObject(this._data)) {
    for (var key in data) {
      this._data[key] = data[key];
    }
  } else if ('string' == typeof data) {
    // default to x-www-form-urlencoded
    if (!type) this.type('form');
    type = this._header['content-type'];
    if ('application/x-www-form-urlencoded' == type) {
      this._data = this._data
        ? this._data + '&' + data
        : data;
    } else {
      this._data = (this._data || '') + data;
    }
  } else {
    this._data = data;
  }

  if (!isObj || this._isHost(data)) {
    return this;
  }

  // default to json
  if (!type) this.type('json');
  return this;
};


/**
 * Sort `querystring` by the sort function
 *
 *
 * Examples:
 *
 *       // default order
 *       request.get('/user')
 *         .query('name=Nick')
 *         .query('search=Manny')
 *         .sortQuery()
 *         .end(callback)
 *
 *       // customized sort function
 *       request.get('/user')
 *         .query('name=Nick')
 *         .query('search=Manny')
 *         .sortQuery(function(a, b){
 *           return a.length - b.length;
 *         })
 *         .end(callback)
 *
 *
 * @param {Function} sort
 * @return {Request} for chaining
 * @api public
 */

RequestBase.prototype.sortQuery = function(sort) {
  // _sort default to true but otherwise can be a function or boolean
  this._sort = typeof sort === 'undefined' ? true : sort;
  return this;
};

/**
 * Compose querystring to append to req.url
 *
 * @api private
 */
RequestBase.prototype._finalizeQueryString = function(){
  var query = this._query.join('&');
  if (query) {
    this.url += (this.url.indexOf('?') >= 0 ? '&' : '?') + query;
  }
  this._query.length = 0; // Makes the call idempotent

  if (this._sort) {
    var index = this.url.indexOf('?');
    if (index >= 0) {
      var queryArr = this.url.substring(index + 1).split('&');
      if ('function' === typeof this._sort) {
        queryArr.sort(this._sort);
      } else {
        queryArr.sort();
      }
      this.url = this.url.substring(0, index) + '?' + queryArr.join('&');
    }
  }
};

// For backwards compat only
RequestBase.prototype._appendQueryString = function() {console.trace("Unsupported");}

/**
 * Invoke callback with timeout error.
 *
 * @api private
 */

RequestBase.prototype._timeoutError = function(reason, timeout, errno){
  if (this._aborted) {
    return;
  }
  var err = new Error(reason + timeout + 'ms exceeded');
  err.timeout = timeout;
  err.code = 'ECONNABORTED';
  err.errno = errno;
  this.timedout = true;
  this.abort();
  this.callback(err);
};

RequestBase.prototype._setTimeouts = function() {
  var self = this;

  // deadline
  if (this._timeout && !this._timer) {
    this._timer = setTimeout(function(){
      self._timeoutError('Timeout of ', self._timeout, 'ETIME');
    }, this._timeout);
  }
  // response timeout
  if (this._responseTimeout && !this._responseTimeoutTimer) {
    this._responseTimeoutTimer = setTimeout(function(){
      self._timeoutError('Response timeout of ', self._responseTimeout, 'ETIMEDOUT');
    }, this._responseTimeout);
  }
}


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Module dependencies.
 */

var utils = __webpack_require__(12);

/**
 * Expose `ResponseBase`.
 */

module.exports = ResponseBase;

/**
 * Initialize a new `ResponseBase`.
 *
 * @api public
 */

function ResponseBase(obj) {
  if (obj) return mixin(obj);
}

/**
 * Mixin the prototype properties.
 *
 * @param {Object} obj
 * @return {Object}
 * @api private
 */

function mixin(obj) {
  for (var key in ResponseBase.prototype) {
    obj[key] = ResponseBase.prototype[key];
  }
  return obj;
}

/**
 * Get case-insensitive `field` value.
 *
 * @param {String} field
 * @return {String}
 * @api public
 */

ResponseBase.prototype.get = function(field){
    return this.header[field.toLowerCase()];
};

/**
 * Set header related properties:
 *
 *   - `.type` the content type without params
 *
 * A response of "Content-Type: text/plain; charset=utf-8"
 * will provide you with a `.type` of "text/plain".
 *
 * @param {Object} header
 * @api private
 */

ResponseBase.prototype._setHeaderProperties = function(header){
    // TODO: moar!
    // TODO: make this a util

    // content-type
    var ct = header['content-type'] || '';
    this.type = utils.type(ct);

    // params
    var params = utils.params(ct);
    for (var key in params) this[key] = params[key];

    this.links = {};

    // links
    try {
        if (header.link) {
            this.links = utils.parseLinks(header.link);
        }
    } catch (err) {
        // ignore
    }
};

/**
 * Set flags such as `.ok` based on `status`.
 *
 * For example a 2xx response will give you a `.ok` of __true__
 * whereas 5xx will be __false__ and `.error` will be __true__. The
 * `.clientError` and `.serverError` are also available to be more
 * specific, and `.statusType` is the class of error ranging from 1..5
 * sometimes useful for mapping respond colors etc.
 *
 * "sugar" properties are also defined for common cases. Currently providing:
 *
 *   - .noContent
 *   - .badRequest
 *   - .unauthorized
 *   - .notAcceptable
 *   - .notFound
 *
 * @param {Number} status
 * @api private
 */

ResponseBase.prototype._setStatusProperties = function(status){
    var type = status / 100 | 0;

    // status / class
    this.status = this.statusCode = status;
    this.statusType = type;

    // basics
    this.info = 1 == type;
    this.ok = 2 == type;
    this.redirect = 3 == type;
    this.clientError = 4 == type;
    this.serverError = 5 == type;
    this.error = (4 == type || 5 == type)
        ? this.toError()
        : false;

    // sugar
    this.accepted = 202 == status;
    this.noContent = 204 == status;
    this.badRequest = 400 == status;
    this.unauthorized = 401 == status;
    this.notAcceptable = 406 == status;
    this.forbidden = 403 == status;
    this.notFound = 404 == status;
};


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var ERROR_CODES = [
  'ECONNRESET',
  'ETIMEDOUT',
  'EADDRINFO',
  'ESOCKETTIMEDOUT'
];

/**
 * Determine if a request should be retried.
 * (Borrowed from segmentio/superagent-retry)
 *
 * @param {Error} err
 * @param {Response} [res]
 * @returns {Boolean}
 */
module.exports = function shouldRetry(err, res) {
  if (err && err.code && ~ERROR_CODES.indexOf(err.code)) return true;
  if (res && res.status && res.status >= 500) return true;
  // Superagent timeout
  if (err && 'timeout' in err && err.code == 'ECONNABORTED') return true;
  if (err && 'crossDomain' in err) return true;
  return false;
};


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Return the mime type for the given `str`.
 *
 * @param {String} str
 * @return {String}
 * @api private
 */

exports.type = function(str){
  return str.split(/ *; */).shift();
};

/**
 * Return header field parameters.
 *
 * @param {String} str
 * @return {Object}
 * @api private
 */

exports.params = function(str){
  return str.split(/ *; */).reduce(function(obj, str){
    var parts = str.split(/ *= */);
    var key = parts.shift();
    var val = parts.shift();

    if (key && val) obj[key] = val;
    return obj;
  }, {});
};

/**
 * Parse Link header fields.
 *
 * @param {String} str
 * @return {Object}
 * @api private
 */

exports.parseLinks = function(str){
  return str.split(/ *, */).reduce(function(obj, str){
    var parts = str.split(/ *; */);
    var url = parts[0].slice(1, -1);
    var rel = parts[1].split(/ *= */)[1].slice(1, -1);
    obj[rel] = url;
    return obj;
  }, {});
};

/**
 * Strip content related fields from `header`.
 *
 * @param {Object} header
 * @return {Object} header
 * @api private
 */

exports.cleanHeader = function(header, shouldStripCookie){
  delete header['content-type'];
  delete header['content-length'];
  delete header['transfer-encoding'];
  delete header['host'];
  if (shouldStripCookie) {
    delete header['cookie'];
  }
  return header;
};


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _main = __webpack_require__(2);

var _main2 = _interopRequireDefault(_main);

var _app = __webpack_require__(1);

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

if (window.location.hostname === 'localhost') {
	var linkEl = document.querySelector('link[href="./css/styles.css"]');
	var headEl = document.querySelector('head');
	headEl.removeChild(linkEl);
}

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMjk1YzY5NjJlOGU5YTMwZjllZGQiLCJ3ZWJwYWNrOi8vLy4vfi9zdXBlcmFnZW50L2xpYi9pcy1vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvYXBwLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvbWFpbi5zY3NzPzY5YTYiLCJ3ZWJwYWNrOi8vLy4vfi9jb21wb25lbnQtZW1pdHRlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL21haW4uc2NzcyIsIndlYnBhY2s6Ly8vLi9+L2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzIiwid2VicGFjazovLy8uL34vZGlyZWN0b3IvYnVpbGQvZGlyZWN0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vfi9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzIiwid2VicGFjazovLy8uL34vc3VwZXJhZ2VudC9saWIvY2xpZW50LmpzIiwid2VicGFjazovLy8uL34vc3VwZXJhZ2VudC9saWIvcmVxdWVzdC1iYXNlLmpzIiwid2VicGFjazovLy8uL34vc3VwZXJhZ2VudC9saWIvcmVzcG9uc2UtYmFzZS5qcyIsIndlYnBhY2s6Ly8vLi9+L3N1cGVyYWdlbnQvbGliL3Nob3VsZC1yZXRyeS5qcyIsIndlYnBhY2s6Ly8vLi9+L3N1cGVyYWdlbnQvbGliL3V0aWxzLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJhcHBDb250YWluZXIiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJpbm5lckhUTUwiLCJzaG93QWxsIiwiZ2V0IiwidGhlbiIsImluZm8iLCJkYXRhIiwiYm9keSIsImZvckVhY2giLCJvYmoiLCJsYW5ndWFnZXMiLCJuYXRpdmVOYW1lIiwiZmxhZyIsIm5hbWUiLCJjYXBpdGFsIiwic2hvd0NvdW50TGFuZyIsImUiLCJuYXRpdmVMYW5nIiwiaXNvNjM5XzEiLCJyb3V0ZXMiLCJyb3V0ZXIiLCJpbml0Iiwid2luZG93IiwibG9jYXRpb24iLCJob3N0bmFtZSIsImxpbmtFbCIsImhlYWRFbCIsInJlbW92ZUNoaWxkIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsbURBQTJDLGNBQWM7O0FBRXpEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7QUNoRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ2RBOztBQUNBOzs7Ozs7QUFDQTtBQUNBLElBQU1BLGVBQWVDLFNBQVNDLGFBQVQsQ0FBdUIsc0JBQXZCLENBQXJCO0FBQ0E7QUFDQUYsYUFBYUcsU0FBYixHQUF5QixFQUF6QjtBQUNBLFNBQVNDLE9BQVQsR0FBbUI7QUFDbkIsdUJBQVFDLEdBQVIsQ0FBWSxzQ0FBWixFQUNDQyxJQURELENBQ00sZ0JBQVE7QUFDZCxRQUFJQyxPQUFPQyxLQUFLQyxJQUFoQjtBQUNBVCxpQkFBYUcsU0FBYixHQUF5QixFQUF6QjtBQUNBSSxTQUFLRyxPQUFMLENBQWEsVUFBU0MsR0FBVCxFQUFjO0FBQ3pCO0FBQ0EsVUFBSUMsWUFBWUQsSUFBSUMsU0FBSixDQUFjLENBQWQsRUFBaUJDLFVBQWpDOztBQUVBYixtQkFBYUcsU0FBYiw0RUFFbUNRLElBQUlHLElBRnZDLG9EQUc2QkgsSUFBSUksSUFIakMsOENB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxTQUFTO0FBQ3RCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBLENBQUMsNEI7Ozs7OztBQ3B0QkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0I7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxnQkFBZ0IsbUJBQW1CO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixzQkFBc0I7QUFDdEM7QUFDQTtBQUNBLGtCQUFrQiwyQkFBMkI7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZUFBZSxtQkFBbUI7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsMkJBQTJCO0FBQzVDO0FBQ0E7QUFDQSxRQUFRLHVCQUF1QjtBQUMvQjtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsaUJBQWlCLHVCQUF1QjtBQUN4QztBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLGlCQUFpQjtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0EsZ0NBQWdDLHNCQUFzQjtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdURBQXVEO0FBQ3ZEOztBQUVBLDZCQUE2QixtQkFBbUI7O0FBRWhEOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7OztBQ3JQQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQ0FBb0M7QUFDcEM7QUFDQSxDQUFDLHdDQUF3QztBQUN6QztBQUNBLENBQUMsT0FBTztBQUNSO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILFNBQVMsK0NBQStDLEVBQUU7QUFDMUQsU0FBUyxnREFBZ0QsRUFBRTtBQUMzRCxTQUFTLGdEQUFnRCxFQUFFO0FBQzNELFNBQVMsNENBQTRDLEVBQUU7QUFDdkQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQixpQkFBaUI7QUFDbEMsaUJBQWlCLHNDQUFzQzs7QUFFdkQ7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE1BQU07QUFDakIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsTUFBTTtBQUNqQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBWSxPQUFPO0FBQ25CLGFBQWE7QUFDYjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUNBQXFDLFNBQVM7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsWUFBWTtBQUNaO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUNBQXFDLFNBQVM7QUFDOUM7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsWUFBWTtBQUNaO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEM7QUFDNUMsd0NBQXdDO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsYUFBYTtBQUM5Qiw4QkFBOEI7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixhQUFhLGlCQUFpQjtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixhQUFhO0FBQ3ZDLDhCQUE4QjtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixhQUFhLGlCQUFpQjtBQUN4RDtBQUNBLFdBQVcsZUFBZTtBQUMxQixXQUFXLE9BQU87QUFDbEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsWUFBWTtBQUNaO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkIsb0JBQW9CO0FBQ3BCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQztBQUNwQyxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCwyQkFBMkI7QUFDM0I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixZQUFZLFFBQVE7QUFDcEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsWUFBWSxRQUFRO0FBQ3BCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsWUFBWSxRQUFRO0FBQ3BCO0FBQ0E7O0FBRUE7QUFDQSxrREFBa0Q7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEseURBQXlELGlCQUFpQjtBQUMxRTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxnQkFBZ0I7QUFDL0I7QUFDQSxXQUFXLGNBQWM7QUFDekIsWUFBWSxRQUFRO0FBQ3BCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3RUFBd0UsbUJBQW1CO0FBQzNGO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLFVBQVU7QUFDckIsV0FBVyxjQUFjO0FBQ3pCLFlBQVksUUFBUTtBQUNwQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxNQUFNO0FBQ2pCLFdBQVcsU0FBUztBQUNwQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsU0FBUztBQUNwQixZQUFZLFFBQVE7QUFDcEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLHNCQUFzQixXQUFXLFlBQVk7O0FBRXREO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRGQUE0RjtBQUM1RjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxlQUFlO0FBQzFCLFdBQVcsU0FBUztBQUNwQixZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxlQUFlO0FBQzFCLFdBQVcsU0FBUztBQUNwQixZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxlQUFlO0FBQzFCLFdBQVcsU0FBUztBQUNwQixZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxNQUFNO0FBQ2pCLFdBQVcsU0FBUztBQUNwQixZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLE1BQU07QUFDakIsV0FBVyxTQUFTO0FBQ3BCLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLE1BQU07QUFDakIsV0FBVyxTQUFTO0FBQ3BCLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLGVBQWU7QUFDMUIsV0FBVyxTQUFTO0FBQ3BCLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQzE0QkE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBWSxRQUFRO0FBQ3BCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFlBQVksUUFBUTtBQUNwQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxjQUFjLFFBQVE7QUFDakMsWUFBWSxRQUFRO0FBQ3BCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixZQUFZLFFBQVE7QUFDcEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQVksUUFBUTtBQUNwQjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxTQUFTO0FBQ3BCLFdBQVcsU0FBUztBQUNwQixZQUFZO0FBQ1o7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQyxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsWUFBWTtBQUNaO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0Isb0RBQW9EO0FBQ3BFO0FBQ0E7QUFDQSxXQUFXLGNBQWM7QUFDekIsV0FBVyxPQUFPO0FBQ2xCLFlBQVksUUFBUTtBQUNwQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSx5QkFBeUI7QUFDdEM7QUFDQTtBQUNBO0FBQ0EsV0FBVyxjQUFjO0FBQ3pCLFdBQVcsc0NBQXNDO0FBQ2pELFlBQVksUUFBUTtBQUNwQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCO0FBQy9CLCtCQUErQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFlBQVksUUFBUTtBQUNwQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFlBQVksUUFBUTtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLE9BQU87QUFDbkI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsWUFBWTtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixhQUFhO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsYUFBYTtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxjQUFjO0FBQ3pCLFlBQVksUUFBUTtBQUNwQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBLFdBQVcsU0FBUztBQUNwQixZQUFZLFFBQVE7QUFDcEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCOztBQUV6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsdURBQXVEOztBQUV2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7Ozs7Ozs7QUM1bkJBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsWUFBWTtBQUNaO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkM7QUFDM0M7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEI7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ3JJQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE1BQU07QUFDakIsV0FBVyxTQUFTO0FBQ3BCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDeEJBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBLHVCQUF1QjtBQUN2Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsWUFBWTtBQUNaO0FBQ0E7O0FBRUE7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHLElBQUk7QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsWUFBWTtBQUNaO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDhCQUE4QjtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUcsSUFBSTtBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixZQUFZLE9BQU87QUFDbkI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQzlEQTs7OztBQUNBOzs7Ozs7QUFQQSxJQUFHQyxPQUFPQyxRQUFQLENBQWdCQyxRQUFoQixLQUE2QixXQUFoQyxFQUE0QztBQUMzQyxLQUFJQyxTQUFTMUIsU0FBU0MsYUFBVCxDQUF1QiwrQkFBdkIsQ0FBYjtBQUNBLEtBQUkwQixTQUFTM0IsU0FBU0MsYUFBVCxDQUF1QixNQUF2QixDQUFiO0FBQ0EwQixRQUFPQyxXQUFQLENBQW1CRixNQUFuQjtBQUNBLEMiLCJmaWxlIjoiLi9qcy9idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gaWRlbnRpdHkgZnVuY3Rpb24gZm9yIGNhbGxpbmcgaGFybW9ueSBpbXBvcnRzIHdpdGggdGhlIGNvcnJlY3QgY29udGV4dFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5pID0gZnVuY3Rpb24odmFsdWUpIHsgcmV0dXJuIHZhbHVlOyB9O1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxMyk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgMjk1YzY5NjJlOGU5YTMwZjllZGQiLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogQ2hlY2sgaWYgYG9iamAgaXMgYW4gb2JqZWN0LlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmpcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBpc09iamVjdChvYmopIHtcbiAgcmV0dXJuIG51bGwgIT09IG9iaiAmJiAnb2JqZWN0JyA9PT0gdHlwZW9mIG9iajtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc09iamVjdDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9zdXBlcmFnZW50L2xpYi9pcy1vYmplY3QuanNcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnZGlyZWN0b3IvYnVpbGQvZGlyZWN0b3InO1xuaW1wb3J0IHJlcXVlc3QgZnJvbSAnc3VwZXJhZ2VudCc7XG4vLyBpbXBvcnQgc2hvd0FsbCBmcm9tICcvQWxsJ1xuY29uc3QgYXBwQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvdW50cmllcy1jb250YWluZXInKVxuLy8gYXBwQ29udGFpbmVyLmlubmVySFRNTCA9IHNob3dBbGwoKVxuYXBwQ29udGFpbmVyLmlubmVySFRNTCA9ICcnXG5mdW5jdGlvbiBzaG93QWxsKCkge1xucmVxdWVzdC5nZXQoJ2h0dHBzOi8vcmVzdGNvdW50cmllcy5ldS9yZXN0L3YyL2FsbCcpXG4udGhlbihkYXRhID0+IHtcbnZhciBpbmZvID0gZGF0YS5ib2R5O1xuYXBwQ29udGFpbmVyLmlubmVySFRNTCA9ICcnXG5pbmZvLmZvckVhY2goZnVuY3Rpb24ob2JqKSB7XG4gIC8vIGNvbnNvbGUubG9nKG9iaik7XG4gIHZhciBsYW5ndWFnZXMgPSBvYmoubGFuZ3VhZ2VzWzBdLm5hdGl2ZU5hbWVcblxuICBhcHBDb250YWluZXIuaW5uZXJIVE1MICs9IGBcbiAgPGRpdiBjbGFzcz1cImNvdW50cnktY2FyZFwiPlxuICAgIDxpbWcgY2xhc3M9XCJjb3VudHJ5LWZsYWdcIiBzcmM9XCIke29iai5mbGFnfVwiIGFsdD1cImZsYWdcIj5cbiAgICA8aDQgY2xhc3M9XCJjb3VudHJ5LW5hbWVcIj4ke29iai5uYW1lfTwvaDQ+XG4gICAgPHAgY2xhc3M9XCJjb3VudHJ5LWNhcGl0YWxcIj4ke29iai5jYXBpdGFsfTwvcD5cbiAgPC9kaXY+XG5gXG59KVxufSlcbn1cblxuZnVuY3Rpb24gc2hvd0NvdW50TGFuZyhlKXtcblxucmVxdWVzdC5nZXQoJ2h0dHBzOi8vcmVzdGNvdW50cmllcy5ldS9yZXN0L3YyL2FsbCcpXG4udGhlbihkYXRhID0+IHtcbnZhciBpbmZvID0gZGF0YS5ib2R5O1xuYXBwQ29udGFpbmVyLmlubmVySFRNTCA9ICcnXG5pbmZvLmZvckVhY2goZnVuY3Rpb24ob2JqKSB7XG4gIHZhciBuYXRpdmVMYW5nID1vYmoubGFuZ3VhZ2VzWzBdLmlzbzYzOV8xO1xuICAvLyBjb25zb2xlLmxvZyhuYXRpdmVMYW5nKTtcbiAgaWYoZSA9PT0gbmF0aXZlTGFuZyApe1xuICBhcHBDb250YWluZXIuaW5uZXJIVE1MICs9IGBcbiAgPGRpdiBjbGFzcz1cImNvdW50cnktY2FyZFwiPlxuICAgIDxpbWcgY2xhc3M9XCJjb3VudHJ5LWZsYWdcIiBzcmM9XCIke29iai5mbGFnfVwiIGFsdD1cImZsYWdcIj5cbiAgICA8aDQgY2xhc3M9XCJjb3VudHJ5LW5hbWVcIj4ke29iai5uYW1lfTwvaDQ+XG4gICAgPHAgY2xhc3M9XCJjb3VudHJ5LWNhcGl0YWxcIj4ke29iai5jYXBpdGFsfTwvcD5cbiAgPC9kaXY+XG5gXG59XG59KVxufSlcbn1cbmNvbnN0IHJvdXRlcyA9IHtcbiAgJy8nOiBzaG93QWxsLFxuICAnL2xhbmd1YWdlcy86aWQnOiBzaG93Q291bnRMYW5nLFxuXG59XG5cbmNvbnN0IHJvdXRlciA9IFJvdXRlcihyb3V0ZXMpO1xucm91dGVyLmluaXQoJy8nKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zY3JpcHRzL2FwcC5qcyIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzIS4vbWFpbi5zY3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCB7fSk7XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0aWYoIWNvbnRlbnQubG9jYWxzKSB7XG5cdFx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanMhLi9tYWluLnNjc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanMhLi9tYWluLnNjc3NcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3N0eWxlcy9tYWluLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXHJcbi8qKlxyXG4gKiBFeHBvc2UgYEVtaXR0ZXJgLlxyXG4gKi9cclxuXHJcbmlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJykge1xyXG4gIG1vZHVsZS5leHBvcnRzID0gRW1pdHRlcjtcclxufVxyXG5cclxuLyoqXHJcbiAqIEluaXRpYWxpemUgYSBuZXcgYEVtaXR0ZXJgLlxyXG4gKlxyXG4gKiBAYXBpIHB1YmxpY1xyXG4gKi9cclxuXHJcbmZ1bmN0aW9uIEVtaXR0ZXIob2JqKSB7XHJcbiAgaWYgKG9iaikgcmV0dXJuIG1peGluKG9iaik7XHJcbn07XHJcblxyXG4vKipcclxuICogTWl4aW4gdGhlIGVtaXR0ZXIgcHJvcGVydGllcy5cclxuICpcclxuICogQHBhcmFtIHtPYmplY3R9IG9ialxyXG4gKiBAcmV0dXJuIHtPYmplY3R9XHJcbiAqIEBhcGkgcHJpdmF0ZVxyXG4gKi9cclxuXHJcbmZ1bmN0aW9uIG1peGluKG9iaikge1xyXG4gIGZvciAodmFyIGtleSBpbiBFbWl0dGVyLnByb3RvdHlwZSkge1xyXG4gICAgb2JqW2tleV0gPSBFbWl0dGVyLnByb3RvdHlwZVtrZXldO1xyXG4gIH1cclxuICByZXR1cm4gb2JqO1xyXG59XHJcblxyXG4vKipcclxuICogTGlzdGVuIG9uIHRoZSBnaXZlbiBgZXZlbnRgIHdpdGggYGZuYC5cclxuICpcclxuICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50XHJcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuXHJcbiAqIEByZXR1cm4ge0VtaXR0ZXJ9XHJcbiAqIEBhcGkgcHVibGljXHJcbiAqL1xyXG5cclxuRW1pdHRlci5wcm90b3R5cGUub24gPVxyXG5FbWl0dGVyLnByb3RvdHlwZS5hZGRFdmVudExpc3RlbmVyID0gZnVuY3Rpb24oZXZlbnQsIGZuKXtcclxuICB0aGlzLl9jYWxsYmFja3MgPSB0aGlzLl9jYWxsYmFja3MgfHwge307XHJcbiAgKHRoaXMuX2NhbGxiYWNrc1snJCcgKyBldmVudF0gPSB0aGlzLl9jYWxsYmFja3NbJyQnICsgZXZlbnRdIHx8IFtdKVxyXG4gICAgLnB1c2goZm4pO1xyXG4gIHJldHVybiB0aGlzO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIEFkZHMgYW4gYGV2ZW50YCBsaXN0ZW5lciB0aGF0IHdpbGwgYmUgaW52b2tlZCBhIHNpbmdsZVxyXG4gKiB0aW1lIHRoZW4gYXV0b21hdGljYWxseSByZW1vdmVkLlxyXG4gKlxyXG4gKiBAcGFyYW0ge1N0cmluZ30gZXZlbnRcclxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm5cclxuICogQHJldHVybiB7RW1pdHRlcn1cclxuICogQGFwaSBwdWJsaWNcclxuICovXHJcblxyXG5FbWl0dGVyLnByb3RvdHlwZS5vbmNlID0gZnVuY3Rpb24oZXZlbnQsIGZuKXtcclxuICBmdW5jdGlvbiBvbigpIHtcclxuICAgIHRoaXMub2ZmKGV2ZW50LCBvbik7XHJcbiAgICBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG4gIH1cclxuXHJcbiAgb24uZm4gPSBmbjtcclxuICB0aGlzLm9uKGV2ZW50LCBvbik7XHJcbiAgcmV0dXJuIHRoaXM7XHJcbn07XHJcblxyXG4vKipcclxuICogUmVtb3ZlIHRoZSBnaXZlbiBjYWxsYmFjayBmb3IgYGV2ZW50YCBvciBhbGxcclxuICogcmVnaXN0ZXJlZCBjYWxsYmFja3MuXHJcbiAqXHJcbiAqIEBwYXJhbSB7U3RyaW5nfSBldmVudFxyXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmblxyXG4gKiBAcmV0dXJuIHtFbWl0dGVyfVxyXG4gKiBAYXBpIHB1YmxpY1xyXG4gKi9cclxuXHJcbkVtaXR0ZXIucHJvdG90eXBlLm9mZiA9XHJcbkVtaXR0ZXIucHJvdG90eXBlLnJlbW92ZUxpc3RlbmVyID1cclxuRW1pdHRlci5wcm90b3R5cGUucmVtb3ZlQWxsTGlzdGVuZXJzID1cclxuRW1pdHRlci5wcm90b3R5cGUucmVtb3ZlRXZlbnRMaXN0ZW5lciA9IGZ1bmN0aW9uKGV2ZW50LCBmbil7XHJcbiAgdGhpcy5fY2FsbGJhY2tzID0gdGhpcy5fY2FsbGJhY2tzIHx8IHt9O1xyXG5cclxuICAvLyBhbGxcclxuICBpZiAoMCA9PSBhcmd1bWVudHMubGVuZ3RoKSB7XHJcbiAgICB0aGlzLl9jYWxsYmFja3MgPSB7fTtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgLy8gc3BlY2lmaWMgZXZlbnRcclxuICB2YXIgY2FsbGJhY2tzID0gdGhpcy5fY2FsbGJhY2tzWyckJyArIGV2ZW50XTtcclxuICBpZiAoIWNhbGxiYWNrcykgcmV0dXJuIHRoaXM7XHJcblxyXG4gIC8vIHJlbW92ZSBhbGwgaGFuZGxlcnNcclxuICBpZiAoMSA9PSBhcmd1bWVudHMubGVuZ3RoKSB7XHJcbiAgICBkZWxldGUgdGhpcy5fY2FsbGJhY2tzWyckJyArIGV2ZW50XTtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgLy8gcmVtb3ZlIHNwZWNpZmljIGhhbmRsZXJcclxuICB2YXIgY2I7XHJcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBjYWxsYmFja3MubGVuZ3RoOyBpKyspIHtcclxuICAgIGNiID0gY2FsbGJhY2tzW2ldO1xyXG4gICAgaWYgKGNiID09PSBmbiB8fCBjYi5mbiA9PT0gZm4pIHtcclxuICAgICAgY2FsbGJhY2tzLnNwbGljZShpLCAxKTtcclxuICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiB0aGlzO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIEVtaXQgYGV2ZW50YCB3aXRoIHRoZSBnaXZlbiBhcmdzLlxyXG4gKlxyXG4gKiBAcGFyYW0ge1N0cmluZ30gZXZlbnRcclxuICogQHBhcmFtIHtNaXhlZH0gLi4uXHJcbiAqIEByZXR1cm4ge0VtaXR0ZXJ9XHJcbiAqL1xyXG5cclxuRW1pdHRlci5wcm90b3R5cGUuZW1pdCA9IGZ1bmN0aW9uKGV2ZW50KXtcclxuICB0aGlzLl9jYWxsYmFja3MgPSB0aGlzLl9jYWxsYmFja3MgfHwge307XHJcbiAgdmFyIGFyZ3MgPSBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSlcclxuICAgICwgY2FsbGJhY2tzID0gdGhpcy5fY2FsbGJhY2tzWyckJyArIGV2ZW50XTtcclxuXHJcbiAgaWYgKGNhbGxiYWNrcykge1xyXG4gICAgY2FsbGJhY2tzID0gY2FsbGJhY2tzLnNsaWNlKDApO1xyXG4gICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGNhbGxiYWNrcy5sZW5ndGg7IGkgPCBsZW47ICsraSkge1xyXG4gICAgICBjYWxsYmFja3NbaV0uYXBwbHkodGhpcywgYXJncyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gdGhpcztcclxufTtcclxuXHJcbi8qKlxyXG4gKiBSZXR1cm4gYXJyYXkgb2YgY2FsbGJhY2tzIGZvciBgZXZlbnRgLlxyXG4gKlxyXG4gKiBAcGFyYW0ge1N0cmluZ30gZXZlbnRcclxuICogQHJldHVybiB7QXJyYXl9XHJcbiAqIEBhcGkgcHVibGljXHJcbiAqL1xyXG5cclxuRW1pdHRlci5wcm90b3R5cGUubGlzdGVuZXJzID0gZnVuY3Rpb24oZXZlbnQpe1xyXG4gIHRoaXMuX2NhbGxiYWNrcyA9IHRoaXMuX2NhbGxiYWNrcyB8fCB7fTtcclxuICByZXR1cm4gdGhpcy5fY2FsbGJhY2tzWyckJyArIGV2ZW50XSB8fCBbXTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBDaGVjayBpZiB0aGlzIGVtaXR0ZXIgaGFzIGBldmVudGAgaGFuZGxlcnMuXHJcbiAqXHJcbiAqIEBwYXJhbSB7U3RyaW5nfSBldmVudFxyXG4gKiBAcmV0dXJuIHtCb29sZWFufVxyXG4gKiBAYXBpIHB1YmxpY1xyXG4gKi9cclxuXHJcbkVtaXR0ZXIucHJvdG90eXBlLmhhc0xpc3RlbmVycyA9IGZ1bmN0aW9uKGV2ZW50KXtcclxuICByZXR1cm4gISEgdGhpcy5saXN0ZW5lcnMoZXZlbnQpLmxlbmd0aDtcclxufTtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvbXBvbmVudC1lbWl0dGVyL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgfVxcblxcbmJvZHkge1xcbiAgbWFyZ2luOiAwOyB9XFxuXFxuLnN0YXJ0ZXIge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYmFja2dyb3VuZDogIzYwN0Q4QjtcXG4gIHRyYW5zaXRpb246IDFzIGFsbDsgfVxcblxcbi5zdGFydGVyLmxvYWRlZCB7XFxuICBiYWNrZ3JvdW5kOiAjNENBRjUwOyB9XFxuXFxuaDIuc3RhcnRlci10eHQge1xcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDM2cHg7XFxuICBmb250LXdlaWdodDogMjAwO1xcbiAgd2lkdGg6IDYwMHB4O1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBtYXJnaW4tdG9wOiAyNTBweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgcGFkZGluZzogMjBweDtcXG4gIGJvcmRlci1ib3R0b206IDRweCBzb2xpZCAjZmZmOyB9XFxuXFxuKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyB9XFxuXFxuaW1nIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogYmxvY2s7IH1cXG5cXG4jYXBwLWNvbnRhaW5lciB7XFxuICBtYXgtd2lkdGg6IDgwMHB4O1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBmb250LWZhbWlseTogJ0Z1dHVyYScsIHNhbnMtc2VyaWY7XFxuICBiYWNrZ3JvdW5kOiAjZmZmOyB9XFxuXFxuaDEge1xcbiAgYmFja2dyb3VuZDogIzMzNTtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgcGFkZGluZzogMTJweDtcXG4gIGZvbnQtd2VpZ2h0OiAyMDA7IH1cXG5cXG4uY291bnRyaWVzLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7IH1cXG5cXG4uY291bnRyeS1jYXJkIHtcXG4gIHdpZHRoOiAyNCU7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xcbiAgcGFkZGluZzogMTJweDtcXG4gIG1hcmdpbi1ib3R0b206IC41cmVtOyB9XFxuXFxuLmNvdW50cnktbmFtZSB7XFxuICBmb250LXNpemU6IDIxcHg7XFxuICBtYXJnaW46IC41cmVtIDAgLjI1cmVtIDA7IH1cXG5cXG4uY291bnRyeS1jYXBpdGFsIHtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIG1hcmdpbjogLjI1cmVtIDA7XFxuICBwYWRkaW5nLWxlZnQ6IC4yNXJlbTtcXG4gIGNvbG9yOiAjYWFhO1xcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZGRkOyB9XFxuXFxuLmNvdW50cnktbmFtZSB7XFxuICBmb250LXNpemU6IDIxcHg7IH1cXG5cXG4uY291bnRyeS1mbGFnIHtcXG4gIHdpZHRoOiAxMjBweDtcXG4gIGhlaWdodDogODBweDsgfVxcblxcbi5saW5rcy1sYW5nIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcXG4gIGhlaWdodDogNDBweDtcXG4gIHdpZHRoOiAyMDBweDtcXG4gIG1hcmdpbi10b3A6IDA7XFxuICBtYXJnaW4tbGVmdDogNDUwcHg7IH1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlciEuL34vc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL34vcmVzb2x2ZS11cmwtbG9hZGVyIS4vc3JjL3N0eWxlcy9tYWluLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLypcclxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxyXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcclxuKi9cclxuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcclxuXHR2YXIgbGlzdCA9IFtdO1xyXG5cclxuXHQvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXHJcblx0bGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xyXG5cdFx0dmFyIHJlc3VsdCA9IFtdO1xyXG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGl0ZW0gPSB0aGlzW2ldO1xyXG5cdFx0XHRpZihpdGVtWzJdKSB7XHJcblx0XHRcdFx0cmVzdWx0LnB1c2goXCJAbWVkaWEgXCIgKyBpdGVtWzJdICsgXCJ7XCIgKyBpdGVtWzFdICsgXCJ9XCIpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHJlc3VsdC5wdXNoKGl0ZW1bMV0pO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gcmVzdWx0LmpvaW4oXCJcIik7XHJcblx0fTtcclxuXHJcblx0Ly8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcclxuXHRsaXN0LmkgPSBmdW5jdGlvbihtb2R1bGVzLCBtZWRpYVF1ZXJ5KSB7XHJcblx0XHRpZih0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIilcclxuXHRcdFx0bW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xyXG5cdFx0dmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcclxuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBpZCA9IHRoaXNbaV1bMF07XHJcblx0XHRcdGlmKHR5cGVvZiBpZCA9PT0gXCJudW1iZXJcIilcclxuXHRcdFx0XHRhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XHJcblx0XHR9XHJcblx0XHRmb3IoaSA9IDA7IGkgPCBtb2R1bGVzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBpdGVtID0gbW9kdWxlc1tpXTtcclxuXHRcdFx0Ly8gc2tpcCBhbHJlYWR5IGltcG9ydGVkIG1vZHVsZVxyXG5cdFx0XHQvLyB0aGlzIGltcGxlbWVudGF0aW9uIGlzIG5vdCAxMDAlIHBlcmZlY3QgZm9yIHdlaXJkIG1lZGlhIHF1ZXJ5IGNvbWJpbmF0aW9uc1xyXG5cdFx0XHQvLyAgd2hlbiBhIG1vZHVsZSBpcyBpbXBvcnRlZCBtdWx0aXBsZSB0aW1lcyB3aXRoIGRpZmZlcmVudCBtZWRpYSBxdWVyaWVzLlxyXG5cdFx0XHQvLyAgSSBob3BlIHRoaXMgd2lsbCBuZXZlciBvY2N1ciAoSGV5IHRoaXMgd2F5IHdlIGhhdmUgc21hbGxlciBidW5kbGVzKVxyXG5cdFx0XHRpZih0eXBlb2YgaXRlbVswXSAhPT0gXCJudW1iZXJcIiB8fCAhYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xyXG5cdFx0XHRcdGlmKG1lZGlhUXVlcnkgJiYgIWl0ZW1bMl0pIHtcclxuXHRcdFx0XHRcdGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xyXG5cdFx0XHRcdH0gZWxzZSBpZihtZWRpYVF1ZXJ5KSB7XHJcblx0XHRcdFx0XHRpdGVtWzJdID0gXCIoXCIgKyBpdGVtWzJdICsgXCIpIGFuZCAoXCIgKyBtZWRpYVF1ZXJ5ICsgXCIpXCI7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGxpc3QucHVzaChpdGVtKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH07XHJcblx0cmV0dXJuIGxpc3Q7XHJcbn07XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1xuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcblxuLy9cbi8vIEdlbmVyYXRlZCBvbiBUdWUgRGVjIDE2IDIwMTQgMTI6MTM6NDcgR01UKzAxMDAgKENFVCkgYnkgQ2hhcmxpZSBSb2JiaW5zLCBQYW9sbyBGcmFnb21lbmkgJiB0aGUgQ29udHJpYnV0b3JzIChVc2luZyBDb2Rlc3VyZ2VvbikuXG4vLyBWZXJzaW9uIDEuMi42XG4vL1xuXG4oZnVuY3Rpb24gKGV4cG9ydHMpIHtcblxuLypcbiAqIGJyb3dzZXIuanM6IEJyb3dzZXIgc3BlY2lmaWMgZnVuY3Rpb25hbGl0eSBmb3IgZGlyZWN0b3IuXG4gKlxuICogKEMpIDIwMTEsIENoYXJsaWUgUm9iYmlucywgUGFvbG8gRnJhZ29tZW5pLCAmIHRoZSBDb250cmlidXRvcnMuXG4gKiBNSVQgTElDRU5TRVxuICpcbiAqL1xuXG52YXIgZGxvYyA9IGRvY3VtZW50LmxvY2F0aW9uO1xuXG5mdW5jdGlvbiBkbG9jSGFzaEVtcHR5KCkge1xuICAvLyBOb24tSUUgYnJvd3NlcnMgcmV0dXJuICcnIHdoZW4gdGhlIGFkZHJlc3MgYmFyIHNob3dzICcjJzsgRGlyZWN0b3IncyBsb2dpY1xuICAvLyBhc3N1bWVzIGJvdGggbWVhbiBlbXB0eS5cbiAgcmV0dXJuIGRsb2MuaGFzaCA9PT0gJycgfHwgZGxvYy5oYXNoID09PSAnIyc7XG59XG5cbnZhciBsaXN0ZW5lciA9IHtcbiAgbW9kZTogJ21vZGVybicsXG4gIGhhc2g6IGRsb2MuaGFzaCxcbiAgaGlzdG9yeTogZmFsc2UsXG5cbiAgY2hlY2s6IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgaCA9IGRsb2MuaGFzaDtcbiAgICBpZiAoaCAhPSB0aGlzLmhhc2gpIHtcbiAgICAgIHRoaXMuaGFzaCA9IGg7XG4gICAgICB0aGlzLm9uSGFzaENoYW5nZWQoKTtcbiAgICB9XG4gIH0sXG5cbiAgZmlyZTogZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aGlzLm1vZGUgPT09ICdtb2Rlcm4nKSB7XG4gICAgICB0aGlzLmhpc3RvcnkgPT09IHRydWUgPyB3aW5kb3cub25wb3BzdGF0ZSgpIDogd2luZG93Lm9uaGFzaGNoYW5nZSgpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMub25IYXNoQ2hhbmdlZCgpO1xuICAgIH1cbiAgfSxcblxuICBpbml0OiBmdW5jdGlvbiAoZm4sIGhpc3RvcnkpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgdGhpcy5oaXN0b3J5ID0gaGlzdG9yeTtcblxuICAgIGlmICghUm91dGVyLmxpc3RlbmVycykge1xuICAgICAgUm91dGVyLmxpc3RlbmVycyA9IFtdO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uY2hhbmdlKG9uQ2hhbmdlRXZlbnQpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwLCBsID0gUm91dGVyLmxpc3RlbmVycy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgUm91dGVyLmxpc3RlbmVyc1tpXShvbkNoYW5nZUV2ZW50KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvL25vdGUgSUU4IGlzIGJlaW5nIGNvdW50ZWQgYXMgJ21vZGVybicgYmVjYXVzZSBpdCBoYXMgdGhlIGhhc2hjaGFuZ2UgZXZlbnRcbiAgICBpZiAoJ29uaGFzaGNoYW5nZScgaW4gd2luZG93ICYmIChkb2N1bWVudC5kb2N1bWVudE1vZGUgPT09IHVuZGVmaW5lZFxuICAgICAgfHwgZG9jdW1lbnQuZG9jdW1lbnRNb2RlID4gNykpIHtcbiAgICAgIC8vIEF0IGxlYXN0IGZvciBub3cgSFRNTDUgaGlzdG9yeSBpcyBhdmFpbGFibGUgZm9yICdtb2Rlcm4nIGJyb3dzZXJzIG9ubHlcbiAgICAgIGlmICh0aGlzLmhpc3RvcnkgPT09IHRydWUpIHtcbiAgICAgICAgLy8gVGhlcmUgaXMgYW4gb2xkIGJ1ZyBpbiBDaHJvbWUgdGhhdCBjYXVzZXMgb25wb3BzdGF0ZSB0byBmaXJlIGV2ZW5cbiAgICAgICAgLy8gdXBvbiBpbml0aWFsIHBhZ2UgbG9hZC4gU2luY2UgdGhlIGhhbmRsZXIgaXMgcnVuIG1hbnVhbGx5IGluIGluaXQoKSxcbiAgICAgICAgLy8gdGhpcyB3b3VsZCBjYXVzZSBDaHJvbWUgdG8gcnVuIGl0IHR3aXNlLiBDdXJyZW50bHkgdGhlIG9ubHlcbiAgICAgICAgLy8gd29ya2Fyb3VuZCBzZWVtcyB0byBiZSB0byBzZXQgdGhlIGhhbmRsZXIgYWZ0ZXIgdGhlIGluaXRpYWwgcGFnZSBsb2FkXG4gICAgICAgIC8vIGh0dHA6Ly9jb2RlLmdvb2dsZS5jb20vcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTYzMDQwXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgd2luZG93Lm9ucG9wc3RhdGUgPSBvbmNoYW5nZTtcbiAgICAgICAgfSwgNTAwKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICB3aW5kb3cub25oYXNoY2hhbmdlID0gb25jaGFuZ2U7XG4gICAgICB9XG4gICAgICB0aGlzLm1vZGUgPSAnbW9kZXJuJztcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAvL1xuICAgICAgLy8gSUUgc3VwcG9ydCwgYmFzZWQgb24gYSBjb25jZXB0IGJ5IEVyaWsgQXJ2aWRzb24gLi4uXG4gICAgICAvL1xuICAgICAgdmFyIGZyYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaWZyYW1lJyk7XG4gICAgICBmcmFtZS5pZCA9ICdzdGF0ZS1mcmFtZSc7XG4gICAgICBmcmFtZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChmcmFtZSk7XG4gICAgICB0aGlzLndyaXRlRnJhbWUoJycpO1xuXG4gICAgICBpZiAoJ29ucHJvcGVydHljaGFuZ2UnIGluIGRvY3VtZW50ICYmICdhdHRhY2hFdmVudCcgaW4gZG9jdW1lbnQpIHtcbiAgICAgICAgZG9jdW1lbnQuYXR0YWNoRXZlbnQoJ29ucHJvcGVydHljaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaWYgKGV2ZW50LnByb3BlcnR5TmFtZSA9PT0gJ2xvY2F0aW9uJykge1xuICAgICAgICAgICAgc2VsZi5jaGVjaygpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHdpbmRvdy5zZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7IHNlbGYuY2hlY2soKTsgfSwgNTApO1xuXG4gICAgICB0aGlzLm9uSGFzaENoYW5nZWQgPSBvbmNoYW5nZTtcbiAgICAgIHRoaXMubW9kZSA9ICdsZWdhY3knO1xuICAgIH1cblxuICAgIFJvdXRlci5saXN0ZW5lcnMucHVzaChmbik7XG5cbiAgICByZXR1cm4gdGhpcy5tb2RlO1xuICB9LFxuXG4gIGRlc3Ryb3k6IGZ1bmN0aW9uIChmbikge1xuICAgIGlmICghUm91dGVyIHx8ICFSb3V0ZXIubGlzdGVuZXJzKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIGxpc3RlbmVycyA9IFJvdXRlci5saXN0ZW5lcnM7XG5cbiAgICBmb3IgKHZhciBpID0gbGlzdGVuZXJzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICBpZiAobGlzdGVuZXJzW2ldID09PSBmbikge1xuICAgICAgICBsaXN0ZW5lcnMuc3BsaWNlKGksIDEpO1xuICAgICAgfVxuICAgIH1cbiAgfSxcblxuICBzZXRIYXNoOiBmdW5jdGlvbiAocykge1xuICAgIC8vIE1vemlsbGEgYWx3YXlzIGFkZHMgYW4gZW50cnkgdG8gdGhlIGhpc3RvcnlcbiAgICBpZiAodGhpcy5tb2RlID09PSAnbGVnYWN5Jykge1xuICAgICAgdGhpcy53cml0ZUZyYW1lKHMpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmhpc3RvcnkgPT09IHRydWUpIHtcbiAgICAgIHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZSh7fSwgZG9jdW1lbnQudGl0bGUsIHMpO1xuICAgICAgLy8gRmlyZSBhbiBvbnBvcHN0YXRlIGV2ZW50IG1hbnVhbGx5IHNpbmNlIHB1c2hpbmcgZG9lcyBub3Qgb2J2aW91c2x5XG4gICAgICAvLyB0cmlnZ2VyIHRoZSBwb3AgZXZlbnQuXG4gICAgICB0aGlzLmZpcmUoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZGxvYy5oYXNoID0gKHNbMF0gPT09ICcvJykgPyBzIDogJy8nICsgcztcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH0sXG5cbiAgd3JpdGVGcmFtZTogZnVuY3Rpb24gKHMpIHtcbiAgICAvLyBJRSBzdXBwb3J0Li4uXG4gICAgdmFyIGYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RhdGUtZnJhbWUnKTtcbiAgICB2YXIgZCA9IGYuY29udGVudERvY3VtZW50IHx8IGYuY29udGVudFdpbmRvdy5kb2N1bWVudDtcbiAgICBkLm9wZW4oKTtcbiAgICBkLndyaXRlKFwiPHNjcmlwdD5faGFzaCA9ICdcIiArIHMgKyBcIic7IG9ubG9hZCA9IHBhcmVudC5saXN0ZW5lci5zeW5jSGFzaDs8c2NyaXB0PlwiKTtcbiAgICBkLmNsb3NlKCk7XG4gIH0sXG5cbiAgc3luY0hhc2g6IGZ1bmN0aW9uICgpIHtcbiAgICAvLyBJRSBzdXBwb3J0Li4uXG4gICAgdmFyIHMgPSB0aGlzLl9oYXNoO1xuICAgIGlmIChzICE9IGRsb2MuaGFzaCkge1xuICAgICAgZGxvYy5oYXNoID0gcztcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH0sXG5cbiAgb25IYXNoQ2hhbmdlZDogZnVuY3Rpb24gKCkge31cbn07XG5cbnZhciBSb3V0ZXIgPSBleHBvcnRzLlJvdXRlciA9IGZ1bmN0aW9uIChyb3V0ZXMpIHtcbiAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIFJvdXRlcikpIHJldHVybiBuZXcgUm91dGVyKHJvdXRlcyk7XG5cbiAgdGhpcy5wYXJhbXMgICA9IHt9O1xuICB0aGlzLnJvdXRlcyAgID0ge307XG4gIHRoaXMubWV0aG9kcyAgPSBbJ29uJywgJ29uY2UnLCAnYWZ0ZXInLCAnYmVmb3JlJ107XG4gIHRoaXMuc2NvcGUgICAgPSBbXTtcbiAgdGhpcy5fbWV0aG9kcyA9IHt9O1xuXG4gIHRoaXMuX2luc2VydCA9IHRoaXMuaW5zZXJ0O1xuICB0aGlzLmluc2VydCA9IHRoaXMuaW5zZXJ0RXg7XG5cbiAgdGhpcy5oaXN0b3J5U3VwcG9ydCA9ICh3aW5kb3cuaGlzdG9yeSAhPSBudWxsID8gd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlIDogbnVsbCkgIT0gbnVsbFxuXG4gIHRoaXMuY29uZmlndXJlKCk7XG4gIHRoaXMubW91bnQocm91dGVzIHx8IHt9KTtcbn07XG5cblJvdXRlci5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uIChyKSB7XG4gIHZhciBzZWxmID0gdGhpc1xuICAgICwgcm91dGVUbztcbiAgdGhpcy5oYW5kbGVyID0gZnVuY3Rpb24ob25DaGFuZ2VFdmVudCkge1xuICAgIHZhciBuZXdVUkwgPSBvbkNoYW5nZUV2ZW50ICYmIG9uQ2hhbmdlRXZlbnQubmV3VVJMIHx8IHdpbmRvdy5sb2NhdGlvbi5oYXNoO1xuICAgIHZhciB1cmwgPSBzZWxmLmhpc3RvcnkgPT09IHRydWUgPyBzZWxmLmdldFBhdGgoKSA6IG5ld1VSTC5yZXBsYWNlKC8uKiMvLCAnJyk7XG4gICAgc2VsZi5kaXNwYXRjaCgnb24nLCB1cmwuY2hhckF0KDApID09PSAnLycgPyB1cmwgOiAnLycgKyB1cmwpO1xuICB9O1xuXG4gIGxpc3RlbmVyLmluaXQodGhpcy5oYW5kbGVyLCB0aGlzLmhpc3RvcnkpO1xuXG4gIGlmICh0aGlzLmhpc3RvcnkgPT09IGZhbHNlKSB7XG4gICAgaWYgKGRsb2NIYXNoRW1wdHkoKSAmJiByKSB7XG4gICAgICBkbG9jLmhhc2ggPSByO1xuICAgIH0gZWxzZSBpZiAoIWRsb2NIYXNoRW1wdHkoKSkge1xuICAgICAgc2VsZi5kaXNwYXRjaCgnb24nLCAnLycgKyBkbG9jLmhhc2gucmVwbGFjZSgvXigjXFwvfCN8XFwvKS8sICcnKSk7XG4gICAgfVxuICB9XG4gIGVsc2Uge1xuICAgIGlmICh0aGlzLmNvbnZlcnRfaGFzaF9pbl9pbml0KSB7XG4gICAgICAvLyBVc2UgaGFzaCBhcyByb3V0ZVxuICAgICAgcm91dGVUbyA9IGRsb2NIYXNoRW1wdHkoKSAmJiByID8gciA6ICFkbG9jSGFzaEVtcHR5KCkgPyBkbG9jLmhhc2gucmVwbGFjZSgvXiMvLCAnJykgOiBudWxsO1xuICAgICAgaWYgKHJvdXRlVG8pIHtcbiAgICAgICAgd2luZG93Lmhpc3RvcnkucmVwbGFjZVN0YXRlKHt9LCBkb2N1bWVudC50aXRsZSwgcm91dGVUbyk7XG4gICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgLy8gVXNlIGNhbm9uaWNhbCB1cmxcbiAgICAgIHJvdXRlVG8gPSB0aGlzLmdldFBhdGgoKTtcbiAgICB9XG5cbiAgICAvLyBSb3V0ZXIgaGFzIGJlZW4gaW5pdGlhbGl6ZWQsIGJ1dCBkdWUgdG8gdGhlIGNocm9tZSBidWcgaXQgd2lsbCBub3RcbiAgICAvLyB5ZXQgYWN0dWFsbHkgcm91dGUgSFRNTDUgaGlzdG9yeSBzdGF0ZSBjaGFuZ2VzLiBUaHVzLCBkZWNpZGUgaWYgc2hvdWxkIHJvdXRlLlxuICAgIGlmIChyb3V0ZVRvIHx8IHRoaXMucnVuX2luX2luaXQgPT09IHRydWUpIHtcbiAgICAgIHRoaXMuaGFuZGxlcigpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0aGlzO1xufTtcblxuUm91dGVyLnByb3RvdHlwZS5leHBsb2RlID0gZnVuY3Rpb24gKCkge1xuICB2YXIgdiA9IHRoaXMuaGlzdG9yeSA9PT0gdHJ1ZSA/IHRoaXMuZ2V0UGF0aCgpIDogZGxvYy5oYXNoO1xuICBpZiAodi5jaGFyQXQoMSkgPT09ICcvJykgeyB2PXYuc2xpY2UoMSkgfVxuICByZXR1cm4gdi5zbGljZSgxLCB2Lmxlbmd0aCkuc3BsaXQoXCIvXCIpO1xufTtcblxuUm91dGVyLnByb3RvdHlwZS5zZXRSb3V0ZSA9IGZ1bmN0aW9uIChpLCB2LCB2YWwpIHtcbiAgdmFyIHVybCA9IHRoaXMuZXhwbG9kZSgpO1xuXG4gIGlmICh0eXBlb2YgaSA9PT0gJ251bWJlcicgJiYgdHlwZW9mIHYgPT09ICdzdHJpbmcnKSB7XG4gICAgdXJsW2ldID0gdjtcbiAgfVxuICBlbHNlIGlmICh0eXBlb2YgdmFsID09PSAnc3RyaW5nJykge1xuICAgIHVybC5zcGxpY2UoaSwgdiwgcyk7XG4gIH1cbiAgZWxzZSB7XG4gICAgdXJsID0gW2ldO1xuICB9XG5cbiAgbGlzdGVuZXIuc2V0SGFzaCh1cmwuam9pbignLycpKTtcbiAgcmV0dXJuIHVybDtcbn07XG5cbi8vXG4vLyAjIyMgZnVuY3Rpb24gaW5zZXJ0RXgobWV0aG9kLCBwYXRoLCByb3V0ZSwgcGFyZW50KVxuLy8gIyMjIyBAbWV0aG9kIHtzdHJpbmd9IE1ldGhvZCB0byBpbnNlcnQgdGhlIHNwZWNpZmljIGByb3V0ZWAuXG4vLyAjIyMjIEBwYXRoIHtBcnJheX0gUGFyc2VkIHBhdGggdG8gaW5zZXJ0IHRoZSBgcm91dGVgIGF0LlxuLy8gIyMjIyBAcm91dGUge0FycmF5fGZ1bmN0aW9ufSBSb3V0ZSBoYW5kbGVycyB0byBpbnNlcnQuXG4vLyAjIyMjIEBwYXJlbnQge09iamVjdH0gKipPcHRpb25hbCoqIFBhcmVudCBcInJvdXRlc1wiIHRvIGluc2VydCBpbnRvLlxuLy8gaW5zZXJ0IGEgY2FsbGJhY2sgdGhhdCB3aWxsIG9ubHkgb2NjdXIgb25jZSBwZXIgdGhlIG1hdGNoZWQgcm91dGUuXG4vL1xuUm91dGVyLnByb3RvdHlwZS5pbnNlcnRFeCA9IGZ1bmN0aW9uKG1ldGhvZCwgcGF0aCwgcm91dGUsIHBhcmVudCkge1xuICBpZiAobWV0aG9kID09PSBcIm9uY2VcIikge1xuICAgIG1ldGhvZCA9IFwib25cIjtcbiAgICByb3V0ZSA9IGZ1bmN0aW9uKHJvdXRlKSB7XG4gICAgICB2YXIgb25jZSA9IGZhbHNlO1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAob25jZSkgcmV0dXJuO1xuICAgICAgICBvbmNlID0gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIHJvdXRlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICB9O1xuICAgIH0ocm91dGUpO1xuICB9XG4gIHJldHVybiB0aGlzLl9pbnNlcnQobWV0aG9kLCBwYXRoLCByb3V0ZSwgcGFyZW50KTtcbn07XG5cblJvdXRlci5wcm90b3R5cGUuZ2V0Um91dGUgPSBmdW5jdGlvbiAodikge1xuICB2YXIgcmV0ID0gdjtcblxuICBpZiAodHlwZW9mIHYgPT09IFwibnVtYmVyXCIpIHtcbiAgICByZXQgPSB0aGlzLmV4cGxvZGUoKVt2XTtcbiAgfVxuICBlbHNlIGlmICh0eXBlb2YgdiA9PT0gXCJzdHJpbmdcIil7XG4gICAgdmFyIGggPSB0aGlzLmV4cGxvZGUoKTtcbiAgICByZXQgPSBoLmluZGV4T2Yodik7XG4gIH1cbiAgZWxzZSB7XG4gICAgcmV0ID0gdGhpcy5leHBsb2RlKCk7XG4gIH1cblxuICByZXR1cm4gcmV0O1xufTtcblxuUm91dGVyLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24gKCkge1xuICBsaXN0ZW5lci5kZXN0cm95KHRoaXMuaGFuZGxlcik7XG4gIHJldHVybiB0aGlzO1xufTtcblxuUm91dGVyLnByb3RvdHlwZS5nZXRQYXRoID0gZnVuY3Rpb24gKCkge1xuICB2YXIgcGF0aCA9IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZTtcbiAgaWYgKHBhdGguc3Vic3RyKDAsIDEpICE9PSAnLycpIHtcbiAgICBwYXRoID0gJy8nICsgcGF0aDtcbiAgfVxuICByZXR1cm4gcGF0aDtcbn07XG5mdW5jdGlvbiBfZXZlcnkoYXJyLCBpdGVyYXRvcikge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGlmIChpdGVyYXRvcihhcnJbaV0sIGksIGFycikgPT09IGZhbHNlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIF9mbGF0dGVuKGFycikge1xuICB2YXIgZmxhdCA9IFtdO1xuICBmb3IgKHZhciBpID0gMCwgbiA9IGFyci5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICBmbGF0ID0gZmxhdC5jb25jYXQoYXJyW2ldKTtcbiAgfVxuICByZXR1cm4gZmxhdDtcbn1cblxuZnVuY3Rpb24gX2FzeW5jRXZlcnlTZXJpZXMoYXJyLCBpdGVyYXRvciwgY2FsbGJhY2spIHtcbiAgaWYgKCFhcnIubGVuZ3RoKSB7XG4gICAgcmV0dXJuIGNhbGxiYWNrKCk7XG4gIH1cbiAgdmFyIGNvbXBsZXRlZCA9IDA7XG4gIChmdW5jdGlvbiBpdGVyYXRlKCkge1xuICAgIGl0ZXJhdG9yKGFycltjb21wbGV0ZWRdLCBmdW5jdGlvbihlcnIpIHtcbiAgICAgIGlmIChlcnIgfHwgZXJyID09PSBmYWxzZSkge1xuICAgICAgICBjYWxsYmFjayhlcnIpO1xuICAgICAgICBjYWxsYmFjayA9IGZ1bmN0aW9uKCkge307XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb21wbGV0ZWQgKz0gMTtcbiAgICAgICAgaWYgKGNvbXBsZXRlZCA9PT0gYXJyLmxlbmd0aCkge1xuICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlcmF0ZSgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH0pKCk7XG59XG5cbmZ1bmN0aW9uIHBhcmFtaWZ5U3RyaW5nKHN0ciwgcGFyYW1zLCBtb2QpIHtcbiAgbW9kID0gc3RyO1xuICBmb3IgKHZhciBwYXJhbSBpbiBwYXJhbXMpIHtcbiAgICBpZiAocGFyYW1zLmhhc093blByb3BlcnR5KHBhcmFtKSkge1xuICAgICAgbW9kID0gcGFyYW1zW3BhcmFtXShzdHIpO1xuICAgICAgaWYgKG1vZCAhPT0gc3RyKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gbW9kID09PSBzdHIgPyBcIihbLl9hLXpBLVowLTktJSgpXSspXCIgOiBtb2Q7XG59XG5cbmZ1bmN0aW9uIHJlZ2lmeVN0cmluZyhzdHIsIHBhcmFtcykge1xuICB2YXIgbWF0Y2hlcywgbGFzdCA9IDAsIG91dCA9IFwiXCI7XG4gIHdoaWxlIChtYXRjaGVzID0gc3RyLnN1YnN0cihsYXN0KS5tYXRjaCgvW15cXHdcXGRcXC0gJUAmXSpcXCpbXlxcd1xcZFxcLSAlQCZdKi8pKSB7XG4gICAgbGFzdCA9IG1hdGNoZXMuaW5kZXggKyBtYXRjaGVzWzBdLmxlbmd0aDtcbiAgICBtYXRjaGVzWzBdID0gbWF0Y2hlc1swXS5yZXBsYWNlKC9eXFwqLywgXCIoW18uKCkhXFxcXCAlQCZhLXpBLVowLTktXSspXCIpO1xuICAgIG91dCArPSBzdHIuc3Vic3RyKDAsIG1hdGNoZXMuaW5kZXgpICsgbWF0Y2hlc1swXTtcbiAgfVxuICBzdHIgPSBvdXQgKz0gc3RyLnN1YnN0cihsYXN0KTtcbiAgdmFyIGNhcHR1cmVzID0gc3RyLm1hdGNoKC86KFteXFwvXSspL2lnKSwgY2FwdHVyZSwgbGVuZ3RoO1xuICBpZiAoY2FwdHVyZXMpIHtcbiAgICBsZW5ndGggPSBjYXB0dXJlcy5sZW5ndGg7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgY2FwdHVyZSA9IGNhcHR1cmVzW2ldO1xuICAgICAgaWYgKGNhcHR1cmUuc2xpY2UoMCwgMikgPT09IFwiOjpcIikge1xuICAgICAgICBzdHIgPSBjYXB0dXJlLnNsaWNlKDEpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3RyID0gc3RyLnJlcGxhY2UoY2FwdHVyZSwgcGFyYW1pZnlTdHJpbmcoY2FwdHVyZSwgcGFyYW1zKSk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBzdHI7XG59XG5cbmZ1bmN0aW9uIHRlcm1pbmF0b3Iocm91dGVzLCBkZWxpbWl0ZXIsIHN0YXJ0LCBzdG9wKSB7XG4gIHZhciBsYXN0ID0gMCwgbGVmdCA9IDAsIHJpZ2h0ID0gMCwgc3RhcnQgPSAoc3RhcnQgfHwgXCIoXCIpLnRvU3RyaW5nKCksIHN0b3AgPSAoc3RvcCB8fCBcIilcIikudG9TdHJpbmcoKSwgaTtcbiAgZm9yIChpID0gMDsgaSA8IHJvdXRlcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBjaHVuayA9IHJvdXRlc1tpXTtcbiAgICBpZiAoY2h1bmsuaW5kZXhPZihzdGFydCwgbGFzdCkgPiBjaHVuay5pbmRleE9mKHN0b3AsIGxhc3QpIHx8IH5jaHVuay5pbmRleE9mKHN0YXJ0LCBsYXN0KSAmJiAhfmNodW5rLmluZGV4T2Yoc3RvcCwgbGFzdCkgfHwgIX5jaHVuay5pbmRleE9mKHN0YXJ0LCBsYXN0KSAmJiB+Y2h1bmsuaW5kZXhPZihzdG9wLCBsYXN0KSkge1xuICAgICAgbGVmdCA9IGNodW5rLmluZGV4T2Yoc3RhcnQsIGxhc3QpO1xuICAgICAgcmlnaHQgPSBjaHVuay5pbmRleE9mKHN0b3AsIGxhc3QpO1xuICAgICAgaWYgKH5sZWZ0ICYmICF+cmlnaHQgfHwgIX5sZWZ0ICYmIH5yaWdodCkge1xuICAgICAgICB2YXIgdG1wID0gcm91dGVzLnNsaWNlKDAsIChpIHx8IDEpICsgMSkuam9pbihkZWxpbWl0ZXIpO1xuICAgICAgICByb3V0ZXMgPSBbIHRtcCBdLmNvbmNhdChyb3V0ZXMuc2xpY2UoKGkgfHwgMSkgKyAxKSk7XG4gICAgICB9XG4gICAgICBsYXN0ID0gKHJpZ2h0ID4gbGVmdCA/IHJpZ2h0IDogbGVmdCkgKyAxO1xuICAgICAgaSA9IDA7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxhc3QgPSAwO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcm91dGVzO1xufVxuXG52YXIgUVVFUllfU0VQQVJBVE9SID0gL1xcPy4qLztcblxuUm91dGVyLnByb3RvdHlwZS5jb25maWd1cmUgPSBmdW5jdGlvbihvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubWV0aG9kcy5sZW5ndGg7IGkrKykge1xuICAgIHRoaXMuX21ldGhvZHNbdGhpcy5tZXRob2RzW2ldXSA9IHRydWU7XG4gIH1cbiAgdGhpcy5yZWN1cnNlID0gb3B0aW9ucy5yZWN1cnNlIHx8IHRoaXMucmVjdXJzZSB8fCBmYWxzZTtcbiAgdGhpcy5hc3luYyA9IG9wdGlvbnMuYXN5bmMgfHwgZmFsc2U7XG4gIHRoaXMuZGVsaW1pdGVyID0gb3B0aW9ucy5kZWxpbWl0ZXIgfHwgXCIvXCI7XG4gIHRoaXMuc3RyaWN0ID0gdHlwZW9mIG9wdGlvbnMuc3RyaWN0ID09PSBcInVuZGVmaW5lZFwiID8gdHJ1ZSA6IG9wdGlvbnMuc3RyaWN0O1xuICB0aGlzLm5vdGZvdW5kID0gb3B0aW9ucy5ub3Rmb3VuZDtcbiAgdGhpcy5yZXNvdXJjZSA9IG9wdGlvbnMucmVzb3VyY2U7XG4gIHRoaXMuaGlzdG9yeSA9IG9wdGlvbnMuaHRtbDVoaXN0b3J5ICYmIHRoaXMuaGlzdG9yeVN1cHBvcnQgfHwgZmFsc2U7XG4gIHRoaXMucnVuX2luX2luaXQgPSB0aGlzLmhpc3RvcnkgPT09IHRydWUgJiYgb3B0aW9ucy5ydW5faGFuZGxlcl9pbl9pbml0ICE9PSBmYWxzZTtcbiAgdGhpcy5jb252ZXJ0X2hhc2hfaW5faW5pdCA9IHRoaXMuaGlzdG9yeSA9PT0gdHJ1ZSAmJiBvcHRpb25zLmNvbnZlcnRfaGFzaF9pbl9pbml0ICE9PSBmYWxzZTtcbiAgdGhpcy5ldmVyeSA9IHtcbiAgICBhZnRlcjogb3B0aW9ucy5hZnRlciB8fCBudWxsLFxuICAgIGJlZm9yZTogb3B0aW9ucy5iZWZvcmUgfHwgbnVsbCxcbiAgICBvbjogb3B0aW9ucy5vbiB8fCBudWxsXG4gIH07XG4gIHJldHVybiB0aGlzO1xufTtcblxuUm91dGVyLnByb3RvdHlwZS5wYXJhbSA9IGZ1bmN0aW9uKHRva2VuLCBtYXRjaGVyKSB7XG4gIGlmICh0b2tlblswXSAhPT0gXCI6XCIpIHtcbiAgICB0b2tlbiA9IFwiOlwiICsgdG9rZW47XG4gIH1cbiAgdmFyIGNvbXBpbGVkID0gbmV3IFJlZ0V4cCh0b2tlbiwgXCJnXCIpO1xuICB0aGlzLnBhcmFtc1t0b2tlbl0gPSBmdW5jdGlvbihzdHIpIHtcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoY29tcGlsZWQsIG1hdGNoZXIuc291cmNlIHx8IG1hdGNoZXIpO1xuICB9O1xuICByZXR1cm4gdGhpcztcbn07XG5cblJvdXRlci5wcm90b3R5cGUub24gPSBSb3V0ZXIucHJvdG90eXBlLnJvdXRlID0gZnVuY3Rpb24obWV0aG9kLCBwYXRoLCByb3V0ZSkge1xuICB2YXIgc2VsZiA9IHRoaXM7XG4gIGlmICghcm91dGUgJiYgdHlwZW9mIHBhdGggPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgcm91dGUgPSBwYXRoO1xuICAgIHBhdGggPSBtZXRob2Q7XG4gICAgbWV0aG9kID0gXCJvblwiO1xuICB9XG4gIGlmIChBcnJheS5pc0FycmF5KHBhdGgpKSB7XG4gICAgcmV0dXJuIHBhdGguZm9yRWFjaChmdW5jdGlvbihwKSB7XG4gICAgICBzZWxmLm9uKG1ldGhvZCwgcCwgcm91dGUpO1xuICAgIH0pO1xuICB9XG4gIGlmIChwYXRoLnNvdXJjZSkge1xuICAgIHBhdGggPSBwYXRoLnNvdXJjZS5yZXBsYWNlKC9cXFxcXFwvL2lnLCBcIi9cIik7XG4gIH1cbiAgaWYgKEFycmF5LmlzQXJyYXkobWV0aG9kKSkge1xuICAgIHJldHVybiBtZXRob2QuZm9yRWFjaChmdW5jdGlvbihtKSB7XG4gICAgICBzZWxmLm9uKG0udG9Mb3dlckNhc2UoKSwgcGF0aCwgcm91dGUpO1xuICAgIH0pO1xuICB9XG4gIHBhdGggPSBwYXRoLnNwbGl0KG5ldyBSZWdFeHAodGhpcy5kZWxpbWl0ZXIpKTtcbiAgcGF0aCA9IHRlcm1pbmF0b3IocGF0aCwgdGhpcy5kZWxpbWl0ZXIpO1xuICB0aGlzLmluc2VydChtZXRob2QsIHRoaXMuc2NvcGUuY29uY2F0KHBhdGgpLCByb3V0ZSk7XG59O1xuXG5Sb3V0ZXIucHJvdG90eXBlLnBhdGggPSBmdW5jdGlvbihwYXRoLCByb3V0ZXNGbikge1xuICB2YXIgc2VsZiA9IHRoaXMsIGxlbmd0aCA9IHRoaXMuc2NvcGUubGVuZ3RoO1xuICBpZiAocGF0aC5zb3VyY2UpIHtcbiAgICBwYXRoID0gcGF0aC5zb3VyY2UucmVwbGFjZSgvXFxcXFxcLy9pZywgXCIvXCIpO1xuICB9XG4gIHBhdGggPSBwYXRoLnNwbGl0KG5ldyBSZWdFeHAodGhpcy5kZWxpbWl0ZXIpKTtcbiAgcGF0aCA9IHRlcm1pbmF0b3IocGF0aCwgdGhpcy5kZWxpbWl0ZXIpO1xuICB0aGlzLnNjb3BlID0gdGhpcy5zY29wZS5jb25jYXQocGF0aCk7XG4gIHJvdXRlc0ZuLmNhbGwodGhpcywgdGhpcyk7XG4gIHRoaXMuc2NvcGUuc3BsaWNlKGxlbmd0aCwgcGF0aC5sZW5ndGgpO1xufTtcblxuUm91dGVyLnByb3RvdHlwZS5kaXNwYXRjaCA9IGZ1bmN0aW9uKG1ldGhvZCwgcGF0aCwgY2FsbGJhY2spIHtcbiAgdmFyIHNlbGYgPSB0aGlzLCBmbnMgPSB0aGlzLnRyYXZlcnNlKG1ldGhvZCwgcGF0aC5yZXBsYWNlKFFVRVJZX1NFUEFSQVRPUiwgXCJcIiksIHRoaXMucm91dGVzLCBcIlwiKSwgaW52b2tlZCA9IHRoaXMuX2ludm9rZWQsIGFmdGVyO1xuICB0aGlzLl9pbnZva2VkID0gdHJ1ZTtcbiAgaWYgKCFmbnMgfHwgZm5zLmxlbmd0aCA9PT0gMCkge1xuICAgIHRoaXMubGFzdCA9IFtdO1xuICAgIGlmICh0eXBlb2YgdGhpcy5ub3Rmb3VuZCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICB0aGlzLmludm9rZShbIHRoaXMubm90Zm91bmQgXSwge1xuICAgICAgICBtZXRob2Q6IG1ldGhvZCxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSwgY2FsbGJhY2spO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgaWYgKHRoaXMucmVjdXJzZSA9PT0gXCJmb3J3YXJkXCIpIHtcbiAgICBmbnMgPSBmbnMucmV2ZXJzZSgpO1xuICB9XG4gIGZ1bmN0aW9uIHVwZGF0ZUFuZEludm9rZSgpIHtcbiAgICBzZWxmLmxhc3QgPSBmbnMuYWZ0ZXI7XG4gICAgc2VsZi5pbnZva2Uoc2VsZi5ydW5saXN0KGZucyksIHNlbGYsIGNhbGxiYWNrKTtcbiAgfVxuICBhZnRlciA9IHRoaXMuZXZlcnkgJiYgdGhpcy5ldmVyeS5hZnRlciA/IFsgdGhpcy5ldmVyeS5hZnRlciBdLmNvbmNhdCh0aGlzLmxhc3QpIDogWyB0aGlzLmxhc3QgXTtcbiAgaWYgKGFmdGVyICYmIGFmdGVyLmxlbmd0aCA+IDAgJiYgaW52b2tlZCkge1xuICAgIGlmICh0aGlzLmFzeW5jKSB7XG4gICAgICB0aGlzLmludm9rZShhZnRlciwgdGhpcywgdXBkYXRlQW5kSW52b2tlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5pbnZva2UoYWZ0ZXIsIHRoaXMpO1xuICAgICAgdXBkYXRlQW5kSW52b2tlKCk7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHVwZGF0ZUFuZEludm9rZSgpO1xuICByZXR1cm4gdHJ1ZTtcbn07XG5cblJvdXRlci5wcm90b3R5cGUuaW52b2tlID0gZnVuY3Rpb24oZm5zLCB0aGlzQXJnLCBjYWxsYmFjaykge1xuICB2YXIgc2VsZiA9IHRoaXM7XG4gIHZhciBhcHBseTtcbiAgaWYgKHRoaXMuYXN5bmMpIHtcbiAgICBhcHBseSA9IGZ1bmN0aW9uKGZuLCBuZXh0KSB7XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShmbikpIHtcbiAgICAgICAgcmV0dXJuIF9hc3luY0V2ZXJ5U2VyaWVzKGZuLCBhcHBseSwgbmV4dCk7XG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiBmbiA9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgZm4uYXBwbHkodGhpc0FyZywgKGZucy5jYXB0dXJlcyB8fCBbXSkuY29uY2F0KG5leHQpKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIF9hc3luY0V2ZXJ5U2VyaWVzKGZucywgYXBwbHksIGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgIGNhbGxiYWNrLmFwcGx5KHRoaXNBcmcsIGFyZ3VtZW50cyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgYXBwbHkgPSBmdW5jdGlvbihmbikge1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkoZm4pKSB7XG4gICAgICAgIHJldHVybiBfZXZlcnkoZm4sIGFwcGx5KTtcbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGZuID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgcmV0dXJuIGZuLmFwcGx5KHRoaXNBcmcsIGZucy5jYXB0dXJlcyB8fCBbXSk7XG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiBmbiA9PT0gXCJzdHJpbmdcIiAmJiBzZWxmLnJlc291cmNlKSB7XG4gICAgICAgIHNlbGYucmVzb3VyY2VbZm5dLmFwcGx5KHRoaXNBcmcsIGZucy5jYXB0dXJlcyB8fCBbXSk7XG4gICAgICB9XG4gICAgfTtcbiAgICBfZXZlcnkoZm5zLCBhcHBseSk7XG4gIH1cbn07XG5cblJvdXRlci5wcm90b3R5cGUudHJhdmVyc2UgPSBmdW5jdGlvbihtZXRob2QsIHBhdGgsIHJvdXRlcywgcmVnZXhwLCBmaWx0ZXIpIHtcbiAgdmFyIGZucyA9IFtdLCBjdXJyZW50LCBleGFjdCwgbWF0Y2gsIG5leHQsIHRoYXQ7XG4gIGZ1bmN0aW9uIGZpbHRlclJvdXRlcyhyb3V0ZXMpIHtcbiAgICBpZiAoIWZpbHRlcikge1xuICAgICAgcmV0dXJuIHJvdXRlcztcbiAgICB9XG4gICAgZnVuY3Rpb24gZGVlcENvcHkoc291cmNlKSB7XG4gICAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNvdXJjZS5sZW5ndGg7IGkrKykge1xuICAgICAgICByZXN1bHRbaV0gPSBBcnJheS5pc0FycmF5KHNvdXJjZVtpXSkgPyBkZWVwQ29weShzb3VyY2VbaV0pIDogc291cmNlW2ldO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG4gICAgZnVuY3Rpb24gYXBwbHlGaWx0ZXIoZm5zKSB7XG4gICAgICBmb3IgKHZhciBpID0gZm5zLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGZuc1tpXSkpIHtcbiAgICAgICAgICBhcHBseUZpbHRlcihmbnNbaV0pO1xuICAgICAgICAgIGlmIChmbnNbaV0ubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICBmbnMuc3BsaWNlKGksIDEpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAoIWZpbHRlcihmbnNbaV0pKSB7XG4gICAgICAgICAgICBmbnMuc3BsaWNlKGksIDEpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICB2YXIgbmV3Um91dGVzID0gZGVlcENvcHkocm91dGVzKTtcbiAgICBuZXdSb3V0ZXMubWF0Y2hlZCA9IHJvdXRlcy5tYXRjaGVkO1xuICAgIG5ld1JvdXRlcy5jYXB0dXJlcyA9IHJvdXRlcy5jYXB0dXJlcztcbiAgICBuZXdSb3V0ZXMuYWZ0ZXIgPSByb3V0ZXMuYWZ0ZXIuZmlsdGVyKGZpbHRlcik7XG4gICAgYXBwbHlGaWx0ZXIobmV3Um91dGVzKTtcbiAgICByZXR1cm4gbmV3Um91dGVzO1xuICB9XG4gIGlmIChwYXRoID09PSB0aGlzLmRlbGltaXRlciAmJiByb3V0ZXNbbWV0aG9kXSkge1xuICAgIG5leHQgPSBbIFsgcm91dGVzLmJlZm9yZSwgcm91dGVzW21ldGhvZF0gXS5maWx0ZXIoQm9vbGVhbikgXTtcbiAgICBuZXh0LmFmdGVyID0gWyByb3V0ZXMuYWZ0ZXIgXS5maWx0ZXIoQm9vbGVhbik7XG4gICAgbmV4dC5tYXRjaGVkID0gdHJ1ZTtcbiAgICBuZXh0LmNhcHR1cmVzID0gW107XG4gICAgcmV0dXJuIGZpbHRlclJvdXRlcyhuZXh0KTtcbiAgfVxuICBmb3IgKHZhciByIGluIHJvdXRlcykge1xuICAgIGlmIChyb3V0ZXMuaGFzT3duUHJvcGVydHkocikgJiYgKCF0aGlzLl9tZXRob2RzW3JdIHx8IHRoaXMuX21ldGhvZHNbcl0gJiYgdHlwZW9mIHJvdXRlc1tyXSA9PT0gXCJvYmplY3RcIiAmJiAhQXJyYXkuaXNBcnJheShyb3V0ZXNbcl0pKSkge1xuICAgICAgY3VycmVudCA9IGV4YWN0ID0gcmVnZXhwICsgdGhpcy5kZWxpbWl0ZXIgKyByO1xuICAgICAgaWYgKCF0aGlzLnN0cmljdCkge1xuICAgICAgICBleGFjdCArPSBcIltcIiArIHRoaXMuZGVsaW1pdGVyICsgXCJdP1wiO1xuICAgICAgfVxuICAgICAgbWF0Y2ggPSBwYXRoLm1hdGNoKG5ldyBSZWdFeHAoXCJeXCIgKyBleGFjdCkpO1xuICAgICAgaWYgKCFtYXRjaCkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmIChtYXRjaFswXSAmJiBtYXRjaFswXSA9PSBwYXRoICYmIHJvdXRlc1tyXVttZXRob2RdKSB7XG4gICAgICAgIG5leHQgPSBbIFsgcm91dGVzW3JdLmJlZm9yZSwgcm91dGVzW3JdW21ldGhvZF0gXS5maWx0ZXIoQm9vbGVhbikgXTtcbiAgICAgICAgbmV4dC5hZnRlciA9IFsgcm91dGVzW3JdLmFmdGVyIF0uZmlsdGVyKEJvb2xlYW4pO1xuICAgICAgICBuZXh0Lm1hdGNoZWQgPSB0cnVlO1xuICAgICAgICBuZXh0LmNhcHR1cmVzID0gbWF0Y2guc2xpY2UoMSk7XG4gICAgICAgIGlmICh0aGlzLnJlY3Vyc2UgJiYgcm91dGVzID09PSB0aGlzLnJvdXRlcykge1xuICAgICAgICAgIG5leHQucHVzaChbIHJvdXRlcy5iZWZvcmUsIHJvdXRlcy5vbiBdLmZpbHRlcihCb29sZWFuKSk7XG4gICAgICAgICAgbmV4dC5hZnRlciA9IG5leHQuYWZ0ZXIuY29uY2F0KFsgcm91dGVzLmFmdGVyIF0uZmlsdGVyKEJvb2xlYW4pKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmlsdGVyUm91dGVzKG5leHQpO1xuICAgICAgfVxuICAgICAgbmV4dCA9IHRoaXMudHJhdmVyc2UobWV0aG9kLCBwYXRoLCByb3V0ZXNbcl0sIGN1cnJlbnQpO1xuICAgICAgaWYgKG5leHQubWF0Y2hlZCkge1xuICAgICAgICBpZiAobmV4dC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgZm5zID0gZm5zLmNvbmNhdChuZXh0KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5yZWN1cnNlKSB7XG4gICAgICAgICAgZm5zLnB1c2goWyByb3V0ZXNbcl0uYmVmb3JlLCByb3V0ZXNbcl0ub24gXS5maWx0ZXIoQm9vbGVhbikpO1xuICAgICAgICAgIG5leHQuYWZ0ZXIgPSBuZXh0LmFmdGVyLmNvbmNhdChbIHJvdXRlc1tyXS5hZnRlciBdLmZpbHRlcihCb29sZWFuKSk7XG4gICAgICAgICAgaWYgKHJvdXRlcyA9PT0gdGhpcy5yb3V0ZXMpIHtcbiAgICAgICAgICAgIGZucy5wdXNoKFsgcm91dGVzW1wiYmVmb3JlXCJdLCByb3V0ZXNbXCJvblwiXSBdLmZpbHRlcihCb29sZWFuKSk7XG4gICAgICAgICAgICBuZXh0LmFmdGVyID0gbmV4dC5hZnRlci5jb25jYXQoWyByb3V0ZXNbXCJhZnRlclwiXSBdLmZpbHRlcihCb29sZWFuKSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZucy5tYXRjaGVkID0gdHJ1ZTtcbiAgICAgICAgZm5zLmNhcHR1cmVzID0gbmV4dC5jYXB0dXJlcztcbiAgICAgICAgZm5zLmFmdGVyID0gbmV4dC5hZnRlcjtcbiAgICAgICAgcmV0dXJuIGZpbHRlclJvdXRlcyhmbnMpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xuXG5Sb3V0ZXIucHJvdG90eXBlLmluc2VydCA9IGZ1bmN0aW9uKG1ldGhvZCwgcGF0aCwgcm91dGUsIHBhcmVudCkge1xuICB2YXIgbWV0aG9kVHlwZSwgcGFyZW50VHlwZSwgaXNBcnJheSwgbmVzdGVkLCBwYXJ0O1xuICBwYXRoID0gcGF0aC5maWx0ZXIoZnVuY3Rpb24ocCkge1xuICAgIHJldHVybiBwICYmIHAubGVuZ3RoID4gMDtcbiAgfSk7XG4gIHBhcmVudCA9IHBhcmVudCB8fCB0aGlzLnJvdXRlcztcbiAgcGFydCA9IHBhdGguc2hpZnQoKTtcbiAgaWYgKC9cXDp8XFwqLy50ZXN0KHBhcnQpICYmICEvXFxcXGR8XFxcXHcvLnRlc3QocGFydCkpIHtcbiAgICBwYXJ0ID0gcmVnaWZ5U3RyaW5nKHBhcnQsIHRoaXMucGFyYW1zKTtcbiAgfVxuICBpZiAocGF0aC5sZW5ndGggPiAwKSB7XG4gICAgcGFyZW50W3BhcnRdID0gcGFyZW50W3BhcnRdIHx8IHt9O1xuICAgIHJldHVybiB0aGlzLmluc2VydChtZXRob2QsIHBhdGgsIHJvdXRlLCBwYXJlbnRbcGFydF0pO1xuICB9XG4gIGlmICghcGFydCAmJiAhcGF0aC5sZW5ndGggJiYgcGFyZW50ID09PSB0aGlzLnJvdXRlcykge1xuICAgIG1ldGhvZFR5cGUgPSB0eXBlb2YgcGFyZW50W21ldGhvZF07XG4gICAgc3dpdGNoIChtZXRob2RUeXBlKSB7XG4gICAgIGNhc2UgXCJmdW5jdGlvblwiOlxuICAgICAgcGFyZW50W21ldGhvZF0gPSBbIHBhcmVudFttZXRob2RdLCByb3V0ZSBdO1xuICAgICAgcmV0dXJuO1xuICAgICBjYXNlIFwib2JqZWN0XCI6XG4gICAgICBwYXJlbnRbbWV0aG9kXS5wdXNoKHJvdXRlKTtcbiAgICAgIHJldHVybjtcbiAgICAgY2FzZSBcInVuZGVmaW5lZFwiOlxuICAgICAgcGFyZW50W21ldGhvZF0gPSByb3V0ZTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgcmV0dXJuO1xuICB9XG4gIHBhcmVudFR5cGUgPSB0eXBlb2YgcGFyZW50W3BhcnRdO1xuICBpc0FycmF5ID0gQXJyYXkuaXNBcnJheShwYXJlbnRbcGFydF0pO1xuICBpZiAocGFyZW50W3BhcnRdICYmICFpc0FycmF5ICYmIHBhcmVudFR5cGUgPT0gXCJvYmplY3RcIikge1xuICAgIG1ldGhvZFR5cGUgPSB0eXBlb2YgcGFyZW50W3BhcnRdW21ldGhvZF07XG4gICAgc3dpdGNoIChtZXRob2RUeXBlKSB7XG4gICAgIGNhc2UgXCJmdW5jdGlvblwiOlxuICAgICAgcGFyZW50W3BhcnRdW21ldGhvZF0gPSBbIHBhcmVudFtwYXJ0XVttZXRob2RdLCByb3V0ZSBdO1xuICAgICAgcmV0dXJuO1xuICAgICBjYXNlIFwib2JqZWN0XCI6XG4gICAgICBwYXJlbnRbcGFydF1bbWV0aG9kXS5wdXNoKHJvdXRlKTtcbiAgICAgIHJldHVybjtcbiAgICAgY2FzZSBcInVuZGVmaW5lZFwiOlxuICAgICAgcGFyZW50W3BhcnRdW21ldGhvZF0gPSByb3V0ZTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gIH0gZWxzZSBpZiAocGFyZW50VHlwZSA9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgbmVzdGVkID0ge307XG4gICAgbmVzdGVkW21ldGhvZF0gPSByb3V0ZTtcbiAgICBwYXJlbnRbcGFydF0gPSBuZXN0ZWQ7XG4gICAgcmV0dXJuO1xuICB9XG4gIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgcm91dGUgY29udGV4dDogXCIgKyBwYXJlbnRUeXBlKTtcbn07XG5cblxuXG5Sb3V0ZXIucHJvdG90eXBlLmV4dGVuZCA9IGZ1bmN0aW9uKG1ldGhvZHMpIHtcbiAgdmFyIHNlbGYgPSB0aGlzLCBsZW4gPSBtZXRob2RzLmxlbmd0aCwgaTtcbiAgZnVuY3Rpb24gZXh0ZW5kKG1ldGhvZCkge1xuICAgIHNlbGYuX21ldGhvZHNbbWV0aG9kXSA9IHRydWU7XG4gICAgc2VsZlttZXRob2RdID0gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgZXh0cmEgPSBhcmd1bWVudHMubGVuZ3RoID09PSAxID8gWyBtZXRob2QsIFwiXCIgXSA6IFsgbWV0aG9kIF07XG4gICAgICBzZWxmLm9uLmFwcGx5KHNlbGYsIGV4dHJhLmNvbmNhdChBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpKSk7XG4gICAgfTtcbiAgfVxuICBmb3IgKGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICBleHRlbmQobWV0aG9kc1tpXSk7XG4gIH1cbn07XG5cblJvdXRlci5wcm90b3R5cGUucnVubGlzdCA9IGZ1bmN0aW9uKGZucykge1xuICB2YXIgcnVubGlzdCA9IHRoaXMuZXZlcnkgJiYgdGhpcy5ldmVyeS5iZWZvcmUgPyBbIHRoaXMuZXZlcnkuYmVmb3JlIF0uY29uY2F0KF9mbGF0dGVuKGZucykpIDogX2ZsYXR0ZW4oZm5zKTtcbiAgaWYgKHRoaXMuZXZlcnkgJiYgdGhpcy5ldmVyeS5vbikge1xuICAgIHJ1bmxpc3QucHVzaCh0aGlzLmV2ZXJ5Lm9uKTtcbiAgfVxuICBydW5saXN0LmNhcHR1cmVzID0gZm5zLmNhcHR1cmVzO1xuICBydW5saXN0LnNvdXJjZSA9IGZucy5zb3VyY2U7XG4gIHJldHVybiBydW5saXN0O1xufTtcblxuUm91dGVyLnByb3RvdHlwZS5tb3VudCA9IGZ1bmN0aW9uKHJvdXRlcywgcGF0aCkge1xuICBpZiAoIXJvdXRlcyB8fCB0eXBlb2Ygcm91dGVzICE9PSBcIm9iamVjdFwiIHx8IEFycmF5LmlzQXJyYXkocm91dGVzKSkge1xuICAgIHJldHVybjtcbiAgfVxuICB2YXIgc2VsZiA9IHRoaXM7XG4gIHBhdGggPSBwYXRoIHx8IFtdO1xuICBpZiAoIUFycmF5LmlzQXJyYXkocGF0aCkpIHtcbiAgICBwYXRoID0gcGF0aC5zcGxpdChzZWxmLmRlbGltaXRlcik7XG4gIH1cbiAgZnVuY3Rpb24gaW5zZXJ0T3JNb3VudChyb3V0ZSwgbG9jYWwpIHtcbiAgICB2YXIgcmVuYW1lID0gcm91dGUsIHBhcnRzID0gcm91dGUuc3BsaXQoc2VsZi5kZWxpbWl0ZXIpLCByb3V0ZVR5cGUgPSB0eXBlb2Ygcm91dGVzW3JvdXRlXSwgaXNSb3V0ZSA9IHBhcnRzWzBdID09PSBcIlwiIHx8ICFzZWxmLl9tZXRob2RzW3BhcnRzWzBdXSwgZXZlbnQgPSBpc1JvdXRlID8gXCJvblwiIDogcmVuYW1lO1xuICAgIGlmIChpc1JvdXRlKSB7XG4gICAgICByZW5hbWUgPSByZW5hbWUuc2xpY2UoKHJlbmFtZS5tYXRjaChuZXcgUmVnRXhwKFwiXlwiICsgc2VsZi5kZWxpbWl0ZXIpKSB8fCBbIFwiXCIgXSlbMF0ubGVuZ3RoKTtcbiAgICAgIHBhcnRzLnNoaWZ0KCk7XG4gICAgfVxuICAgIGlmIChpc1JvdXRlICYmIHJvdXRlVHlwZSA9PT0gXCJvYmplY3RcIiAmJiAhQXJyYXkuaXNBcnJheShyb3V0ZXNbcm91dGVdKSkge1xuICAgICAgbG9jYWwgPSBsb2NhbC5jb25jYXQocGFydHMpO1xuICAgICAgc2VsZi5tb3VudChyb3V0ZXNbcm91dGVdLCBsb2NhbCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChpc1JvdXRlKSB7XG4gICAgICBsb2NhbCA9IGxvY2FsLmNvbmNhdChyZW5hbWUuc3BsaXQoc2VsZi5kZWxpbWl0ZXIpKTtcbiAgICAgIGxvY2FsID0gdGVybWluYXRvcihsb2NhbCwgc2VsZi5kZWxpbWl0ZXIpO1xuICAgIH1cbiAgICBzZWxmLmluc2VydChldmVudCwgbG9jYWwsIHJvdXRlc1tyb3V0ZV0pO1xuICB9XG4gIGZvciAodmFyIHJvdXRlIGluIHJvdXRlcykge1xuICAgIGlmIChyb3V0ZXMuaGFzT3duUHJvcGVydHkocm91dGUpKSB7XG4gICAgICBpbnNlcnRPck1vdW50KHJvdXRlLCBwYXRoLnNsaWNlKDApKTtcbiAgICB9XG4gIH1cbn07XG5cblxuXG59KHR5cGVvZiBleHBvcnRzID09PSBcIm9iamVjdFwiID8gZXhwb3J0cyA6IHdpbmRvdykpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9kaXJlY3Rvci9idWlsZC9kaXJlY3Rvci5qc1xuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKlxyXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXHJcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxyXG4qL1xyXG52YXIgc3R5bGVzSW5Eb20gPSB7fSxcclxuXHRtZW1vaXplID0gZnVuY3Rpb24oZm4pIHtcclxuXHRcdHZhciBtZW1vO1xyXG5cdFx0cmV0dXJuIGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0aWYgKHR5cGVvZiBtZW1vID09PSBcInVuZGVmaW5lZFwiKSBtZW1vID0gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxuXHRcdFx0cmV0dXJuIG1lbW87XHJcblx0XHR9O1xyXG5cdH0sXHJcblx0aXNPbGRJRSA9IG1lbW9pemUoZnVuY3Rpb24oKSB7XHJcblx0XHRyZXR1cm4gL21zaWUgWzYtOV1cXGIvLnRlc3Qod2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKSk7XHJcblx0fSksXHJcblx0Z2V0SGVhZEVsZW1lbnQgPSBtZW1vaXplKGZ1bmN0aW9uICgpIHtcclxuXHRcdHJldHVybiBkb2N1bWVudC5oZWFkIHx8IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaGVhZFwiKVswXTtcclxuXHR9KSxcclxuXHRzaW5nbGV0b25FbGVtZW50ID0gbnVsbCxcclxuXHRzaW5nbGV0b25Db3VudGVyID0gMCxcclxuXHRzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcCA9IFtdO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihsaXN0LCBvcHRpb25zKSB7XHJcblx0aWYodHlwZW9mIERFQlVHICE9PSBcInVuZGVmaW5lZFwiICYmIERFQlVHKSB7XHJcblx0XHRpZih0eXBlb2YgZG9jdW1lbnQgIT09IFwib2JqZWN0XCIpIHRocm93IG5ldyBFcnJvcihcIlRoZSBzdHlsZS1sb2FkZXIgY2Fubm90IGJlIHVzZWQgaW4gYSBub24tYnJvd3NlciBlbnZpcm9ubWVudFwiKTtcclxuXHR9XHJcblxyXG5cdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xyXG5cdC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxyXG5cdC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcclxuXHRpZiAodHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uID09PSBcInVuZGVmaW5lZFwiKSBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcclxuXHJcblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgYm90dG9tIG9mIDxoZWFkPi5cclxuXHRpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwidW5kZWZpbmVkXCIpIG9wdGlvbnMuaW5zZXJ0QXQgPSBcImJvdHRvbVwiO1xyXG5cclxuXHR2YXIgc3R5bGVzID0gbGlzdFRvU3R5bGVzKGxpc3QpO1xyXG5cdGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucyk7XHJcblxyXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xyXG5cdFx0dmFyIG1heVJlbW92ZSA9IFtdO1xyXG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcclxuXHRcdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XHJcblx0XHRcdGRvbVN0eWxlLnJlZnMtLTtcclxuXHRcdFx0bWF5UmVtb3ZlLnB1c2goZG9tU3R5bGUpO1xyXG5cdFx0fVxyXG5cdFx0aWYobmV3TGlzdCkge1xyXG5cdFx0XHR2YXIgbmV3U3R5bGVzID0gbGlzdFRvU3R5bGVzKG5ld0xpc3QpO1xyXG5cdFx0XHRhZGRTdHlsZXNUb0RvbShuZXdTdHlsZXMsIG9wdGlvbnMpO1xyXG5cdFx0fVxyXG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IG1heVJlbW92ZS5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBtYXlSZW1vdmVbaV07XHJcblx0XHRcdGlmKGRvbVN0eWxlLnJlZnMgPT09IDApIHtcclxuXHRcdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspXHJcblx0XHRcdFx0XHRkb21TdHlsZS5wYXJ0c1tqXSgpO1xyXG5cdFx0XHRcdGRlbGV0ZSBzdHlsZXNJbkRvbVtkb21TdHlsZS5pZF07XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpIHtcclxuXHRmb3IodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcclxuXHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xyXG5cdFx0aWYoZG9tU3R5bGUpIHtcclxuXHRcdFx0ZG9tU3R5bGUucmVmcysrO1xyXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcclxuXHRcdFx0XHRkb21TdHlsZS5wYXJ0c1tqXShpdGVtLnBhcnRzW2pdKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRmb3IoOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xyXG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xyXG5cdFx0XHR9XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR2YXIgcGFydHMgPSBbXTtcclxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcclxuXHRcdFx0XHRwYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRzdHlsZXNJbkRvbVtpdGVtLmlkXSA9IHtpZDogaXRlbS5pZCwgcmVmczogMSwgcGFydHM6IHBhcnRzfTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxpc3RUb1N0eWxlcyhsaXN0KSB7XHJcblx0dmFyIHN0eWxlcyA9IFtdO1xyXG5cdHZhciBuZXdTdHlsZXMgPSB7fTtcclxuXHRmb3IodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xyXG5cdFx0dmFyIGl0ZW0gPSBsaXN0W2ldO1xyXG5cdFx0dmFyIGlkID0gaXRlbVswXTtcclxuXHRcdHZhciBjc3MgPSBpdGVtWzFdO1xyXG5cdFx0dmFyIG1lZGlhID0gaXRlbVsyXTtcclxuXHRcdHZhciBzb3VyY2VNYXAgPSBpdGVtWzNdO1xyXG5cdFx0dmFyIHBhcnQgPSB7Y3NzOiBjc3MsIG1lZGlhOiBtZWRpYSwgc291cmNlTWFwOiBzb3VyY2VNYXB9O1xyXG5cdFx0aWYoIW5ld1N0eWxlc1tpZF0pXHJcblx0XHRcdHN0eWxlcy5wdXNoKG5ld1N0eWxlc1tpZF0gPSB7aWQ6IGlkLCBwYXJ0czogW3BhcnRdfSk7XHJcblx0XHRlbHNlXHJcblx0XHRcdG5ld1N0eWxlc1tpZF0ucGFydHMucHVzaChwYXJ0KTtcclxuXHR9XHJcblx0cmV0dXJuIHN0eWxlcztcclxufVxyXG5cclxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIHN0eWxlRWxlbWVudCkge1xyXG5cdHZhciBoZWFkID0gZ2V0SGVhZEVsZW1lbnQoKTtcclxuXHR2YXIgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AgPSBzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcFtzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcC5sZW5ndGggLSAxXTtcclxuXHRpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJ0b3BcIikge1xyXG5cdFx0aWYoIWxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wKSB7XHJcblx0XHRcdGhlYWQuaW5zZXJ0QmVmb3JlKHN0eWxlRWxlbWVudCwgaGVhZC5maXJzdENoaWxkKTtcclxuXHRcdH0gZWxzZSBpZihsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZykge1xyXG5cdFx0XHRoZWFkLmluc2VydEJlZm9yZShzdHlsZUVsZW1lbnQsIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGhlYWQuYXBwZW5kQ2hpbGQoc3R5bGVFbGVtZW50KTtcclxuXHRcdH1cclxuXHRcdHN0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wLnB1c2goc3R5bGVFbGVtZW50KTtcclxuXHR9IGVsc2UgaWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwiYm90dG9tXCIpIHtcclxuXHRcdGhlYWQuYXBwZW5kQ2hpbGQoc3R5bGVFbGVtZW50KTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCB2YWx1ZSBmb3IgcGFyYW1ldGVyICdpbnNlcnRBdCcuIE11c3QgYmUgJ3RvcCcgb3IgJ2JvdHRvbScuXCIpO1xyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xyXG5cdHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XHJcblx0dmFyIGlkeCA9IHN0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wLmluZGV4T2Yoc3R5bGVFbGVtZW50KTtcclxuXHRpZihpZHggPj0gMCkge1xyXG5cdFx0c3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3Auc3BsaWNlKGlkeCwgMSk7XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucykge1xyXG5cdHZhciBzdHlsZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XHJcblx0c3R5bGVFbGVtZW50LnR5cGUgPSBcInRleHQvY3NzXCI7XHJcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIHN0eWxlRWxlbWVudCk7XHJcblx0cmV0dXJuIHN0eWxlRWxlbWVudDtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlTGlua0VsZW1lbnQob3B0aW9ucykge1xyXG5cdHZhciBsaW5rRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO1xyXG5cdGxpbmtFbGVtZW50LnJlbCA9IFwic3R5bGVzaGVldFwiO1xyXG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBsaW5rRWxlbWVudCk7XHJcblx0cmV0dXJuIGxpbmtFbGVtZW50O1xyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcclxuXHR2YXIgc3R5bGVFbGVtZW50LCB1cGRhdGUsIHJlbW92ZTtcclxuXHJcblx0aWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XHJcblx0XHR2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcclxuXHRcdHN0eWxlRWxlbWVudCA9IHNpbmdsZXRvbkVsZW1lbnQgfHwgKHNpbmdsZXRvbkVsZW1lbnQgPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xyXG5cdFx0dXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCwgc3R5bGVJbmRleCwgZmFsc2UpO1xyXG5cdFx0cmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCwgc3R5bGVJbmRleCwgdHJ1ZSk7XHJcblx0fSBlbHNlIGlmKG9iai5zb3VyY2VNYXAgJiZcclxuXHRcdHR5cGVvZiBVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxyXG5cdFx0dHlwZW9mIFVSTC5jcmVhdGVPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxyXG5cdFx0dHlwZW9mIFVSTC5yZXZva2VPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxyXG5cdFx0dHlwZW9mIEJsb2IgPT09IFwiZnVuY3Rpb25cIiAmJlxyXG5cdFx0dHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xyXG5cdFx0c3R5bGVFbGVtZW50ID0gY3JlYXRlTGlua0VsZW1lbnQob3B0aW9ucyk7XHJcblx0XHR1cGRhdGUgPSB1cGRhdGVMaW5rLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50KTtcclxuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcclxuXHRcdFx0aWYoc3R5bGVFbGVtZW50LmhyZWYpXHJcblx0XHRcdFx0VVJMLnJldm9rZU9iamVjdFVSTChzdHlsZUVsZW1lbnQuaHJlZik7XHJcblx0XHR9O1xyXG5cdH0gZWxzZSB7XHJcblx0XHRzdHlsZUVsZW1lbnQgPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucyk7XHJcblx0XHR1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50KTtcclxuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcclxuXHRcdH07XHJcblx0fVxyXG5cclxuXHR1cGRhdGUob2JqKTtcclxuXHJcblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xyXG5cdFx0aWYobmV3T2JqKSB7XHJcblx0XHRcdGlmKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcClcclxuXHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdHVwZGF0ZShvYmogPSBuZXdPYmopO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0cmVtb3ZlKCk7XHJcblx0XHR9XHJcblx0fTtcclxufVxyXG5cclxudmFyIHJlcGxhY2VUZXh0ID0gKGZ1bmN0aW9uICgpIHtcclxuXHR2YXIgdGV4dFN0b3JlID0gW107XHJcblxyXG5cdHJldHVybiBmdW5jdGlvbiAoaW5kZXgsIHJlcGxhY2VtZW50KSB7XHJcblx0XHR0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XHJcblx0XHRyZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcclxuXHR9O1xyXG59KSgpO1xyXG5cclxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZUVsZW1lbnQsIGluZGV4LCByZW1vdmUsIG9iaikge1xyXG5cdHZhciBjc3MgPSByZW1vdmUgPyBcIlwiIDogb2JqLmNzcztcclxuXHJcblx0aWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XHJcblx0XHRzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XHJcblx0fSBlbHNlIHtcclxuXHRcdHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcclxuXHRcdHZhciBjaGlsZE5vZGVzID0gc3R5bGVFbGVtZW50LmNoaWxkTm9kZXM7XHJcblx0XHRpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XHJcblx0XHRpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcclxuXHRcdFx0c3R5bGVFbGVtZW50Lmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlRWxlbWVudCwgb2JqKSB7XHJcblx0dmFyIGNzcyA9IG9iai5jc3M7XHJcblx0dmFyIG1lZGlhID0gb2JqLm1lZGlhO1xyXG5cclxuXHRpZihtZWRpYSkge1xyXG5cdFx0c3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKVxyXG5cdH1cclxuXHJcblx0aWYoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcclxuXHRcdHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XHJcblx0fSBlbHNlIHtcclxuXHRcdHdoaWxlKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XHJcblx0XHRcdHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XHJcblx0XHR9XHJcblx0XHRzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiB1cGRhdGVMaW5rKGxpbmtFbGVtZW50LCBvYmopIHtcclxuXHR2YXIgY3NzID0gb2JqLmNzcztcclxuXHR2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcclxuXHJcblx0aWYoc291cmNlTWFwKSB7XHJcblx0XHQvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yNjYwMzg3NVxyXG5cdFx0Y3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIiArIGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSkgKyBcIiAqL1wiO1xyXG5cdH1cclxuXHJcblx0dmFyIGJsb2IgPSBuZXcgQmxvYihbY3NzXSwgeyB0eXBlOiBcInRleHQvY3NzXCIgfSk7XHJcblxyXG5cdHZhciBvbGRTcmMgPSBsaW5rRWxlbWVudC5ocmVmO1xyXG5cclxuXHRsaW5rRWxlbWVudC5ocmVmID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcclxuXHJcblx0aWYob2xkU3JjKVxyXG5cdFx0VVJMLnJldm9rZU9iamVjdFVSTChvbGRTcmMpO1xyXG59XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzXG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogUm9vdCByZWZlcmVuY2UgZm9yIGlmcmFtZXMuXG4gKi9cblxudmFyIHJvb3Q7XG5pZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHsgLy8gQnJvd3NlciB3aW5kb3dcbiAgcm9vdCA9IHdpbmRvdztcbn0gZWxzZSBpZiAodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnKSB7IC8vIFdlYiBXb3JrZXJcbiAgcm9vdCA9IHNlbGY7XG59IGVsc2UgeyAvLyBPdGhlciBlbnZpcm9ubWVudHNcbiAgY29uc29sZS53YXJuKFwiVXNpbmcgYnJvd3Nlci1vbmx5IHZlcnNpb24gb2Ygc3VwZXJhZ2VudCBpbiBub24tYnJvd3NlciBlbnZpcm9ubWVudFwiKTtcbiAgcm9vdCA9IHRoaXM7XG59XG5cbnZhciBFbWl0dGVyID0gcmVxdWlyZSgnY29tcG9uZW50LWVtaXR0ZXInKTtcbnZhciBSZXF1ZXN0QmFzZSA9IHJlcXVpcmUoJy4vcmVxdWVzdC1iYXNlJyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL2lzLW9iamVjdCcpO1xudmFyIFJlc3BvbnNlQmFzZSA9IHJlcXVpcmUoJy4vcmVzcG9uc2UtYmFzZScpO1xudmFyIHNob3VsZFJldHJ5ID0gcmVxdWlyZSgnLi9zaG91bGQtcmV0cnknKTtcblxuLyoqXG4gKiBOb29wLlxuICovXG5cbmZ1bmN0aW9uIG5vb3AoKXt9O1xuXG4vKipcbiAqIEV4cG9zZSBgcmVxdWVzdGAuXG4gKi9cblxudmFyIHJlcXVlc3QgPSBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihtZXRob2QsIHVybCkge1xuICAvLyBjYWxsYmFja1xuICBpZiAoJ2Z1bmN0aW9uJyA9PSB0eXBlb2YgdXJsKSB7XG4gICAgcmV0dXJuIG5ldyBleHBvcnRzLlJlcXVlc3QoJ0dFVCcsIG1ldGhvZCkuZW5kKHVybCk7XG4gIH1cblxuICAvLyB1cmwgZmlyc3RcbiAgaWYgKDEgPT0gYXJndW1lbnRzLmxlbmd0aCkge1xuICAgIHJldHVybiBuZXcgZXhwb3J0cy5SZXF1ZXN0KCdHRVQnLCBtZXRob2QpO1xuICB9XG5cbiAgcmV0dXJuIG5ldyBleHBvcnRzLlJlcXVlc3QobWV0aG9kLCB1cmwpO1xufVxuXG5leHBvcnRzLlJlcXVlc3QgPSBSZXF1ZXN0O1xuXG4vKipcbiAqIERldGVybWluZSBYSFIuXG4gKi9cblxucmVxdWVzdC5nZXRYSFIgPSBmdW5jdGlvbiAoKSB7XG4gIGlmIChyb290LlhNTEh0dHBSZXF1ZXN0XG4gICAgICAmJiAoIXJvb3QubG9jYXRpb24gfHwgJ2ZpbGU6JyAhPSByb290LmxvY2F0aW9uLnByb3RvY29sXG4gICAgICAgICAgfHwgIXJvb3QuQWN0aXZlWE9iamVjdCkpIHtcbiAgICByZXR1cm4gbmV3IFhNTEh0dHBSZXF1ZXN0O1xuICB9IGVsc2Uge1xuICAgIHRyeSB7IHJldHVybiBuZXcgQWN0aXZlWE9iamVjdCgnTWljcm9zb2Z0LlhNTEhUVFAnKTsgfSBjYXRjaChlKSB7fVxuICAgIHRyeSB7IHJldHVybiBuZXcgQWN0aXZlWE9iamVjdCgnTXN4bWwyLlhNTEhUVFAuNi4wJyk7IH0gY2F0Y2goZSkge31cbiAgICB0cnkgeyByZXR1cm4gbmV3IEFjdGl2ZVhPYmplY3QoJ01zeG1sMi5YTUxIVFRQLjMuMCcpOyB9IGNhdGNoKGUpIHt9XG4gICAgdHJ5IHsgcmV0dXJuIG5ldyBBY3RpdmVYT2JqZWN0KCdNc3htbDIuWE1MSFRUUCcpOyB9IGNhdGNoKGUpIHt9XG4gIH1cbiAgdGhyb3cgRXJyb3IoXCJCcm93c2VyLW9ubHkgdmVyc2lvbiBvZiBzdXBlcmFnZW50IGNvdWxkIG5vdCBmaW5kIFhIUlwiKTtcbn07XG5cbi8qKlxuICogUmVtb3ZlcyBsZWFkaW5nIGFuZCB0cmFpbGluZyB3aGl0ZXNwYWNlLCBhZGRlZCB0byBzdXBwb3J0IElFLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBzXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG52YXIgdHJpbSA9ICcnLnRyaW1cbiAgPyBmdW5jdGlvbihzKSB7IHJldHVybiBzLnRyaW0oKTsgfVxuICA6IGZ1bmN0aW9uKHMpIHsgcmV0dXJuIHMucmVwbGFjZSgvKF5cXHMqfFxccyokKS9nLCAnJyk7IH07XG5cbi8qKlxuICogU2VyaWFsaXplIHRoZSBnaXZlbiBgb2JqYC5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBzZXJpYWxpemUob2JqKSB7XG4gIGlmICghaXNPYmplY3Qob2JqKSkgcmV0dXJuIG9iajtcbiAgdmFyIHBhaXJzID0gW107XG4gIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICBwdXNoRW5jb2RlZEtleVZhbHVlUGFpcihwYWlycywga2V5LCBvYmpba2V5XSk7XG4gIH1cbiAgcmV0dXJuIHBhaXJzLmpvaW4oJyYnKTtcbn1cblxuLyoqXG4gKiBIZWxwcyAnc2VyaWFsaXplJyB3aXRoIHNlcmlhbGl6aW5nIGFycmF5cy5cbiAqIE11dGF0ZXMgdGhlIHBhaXJzIGFycmF5LlxuICpcbiAqIEBwYXJhbSB7QXJyYXl9IHBhaXJzXG4gKiBAcGFyYW0ge1N0cmluZ30ga2V5XG4gKiBAcGFyYW0ge01peGVkfSB2YWxcbiAqL1xuXG5mdW5jdGlvbiBwdXNoRW5jb2RlZEtleVZhbHVlUGFpcihwYWlycywga2V5LCB2YWwpIHtcbiAgaWYgKHZhbCAhPSBudWxsKSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsKSkge1xuICAgICAgdmFsLmZvckVhY2goZnVuY3Rpb24odikge1xuICAgICAgICBwdXNoRW5jb2RlZEtleVZhbHVlUGFpcihwYWlycywga2V5LCB2KTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAoaXNPYmplY3QodmFsKSkge1xuICAgICAgZm9yKHZhciBzdWJrZXkgaW4gdmFsKSB7XG4gICAgICAgIHB1c2hFbmNvZGVkS2V5VmFsdWVQYWlyKHBhaXJzLCBrZXkgKyAnWycgKyBzdWJrZXkgKyAnXScsIHZhbFtzdWJrZXldKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcGFpcnMucHVzaChlbmNvZGVVUklDb21wb25lbnQoa2V5KVxuICAgICAgICArICc9JyArIGVuY29kZVVSSUNvbXBvbmVudCh2YWwpKTtcbiAgICB9XG4gIH0gZWxzZSBpZiAodmFsID09PSBudWxsKSB7XG4gICAgcGFpcnMucHVzaChlbmNvZGVVUklDb21wb25lbnQoa2V5KSk7XG4gIH1cbn1cblxuLyoqXG4gKiBFeHBvc2Ugc2VyaWFsaXphdGlvbiBtZXRob2QuXG4gKi9cblxuIHJlcXVlc3Quc2VyaWFsaXplT2JqZWN0ID0gc2VyaWFsaXplO1xuXG4gLyoqXG4gICogUGFyc2UgdGhlIGdpdmVuIHgtd3d3LWZvcm0tdXJsZW5jb2RlZCBgc3RyYC5cbiAgKlxuICAqIEBwYXJhbSB7U3RyaW5nfSBzdHJcbiAgKiBAcmV0dXJuIHtPYmplY3R9XG4gICogQGFwaSBwcml2YXRlXG4gICovXG5cbmZ1bmN0aW9uIHBhcnNlU3RyaW5nKHN0cikge1xuICB2YXIgb2JqID0ge307XG4gIHZhciBwYWlycyA9IHN0ci5zcGxpdCgnJicpO1xuICB2YXIgcGFpcjtcbiAgdmFyIHBvcztcblxuICBmb3IgKHZhciBpID0gMCwgbGVuID0gcGFpcnMubGVuZ3RoOyBpIDwgbGVuOyArK2kpIHtcbiAgICBwYWlyID0gcGFpcnNbaV07XG4gICAgcG9zID0gcGFpci5pbmRleE9mKCc9Jyk7XG4gICAgaWYgKHBvcyA9PSAtMSkge1xuICAgICAgb2JqW2RlY29kZVVSSUNvbXBvbmVudChwYWlyKV0gPSAnJztcbiAgICB9IGVsc2Uge1xuICAgICAgb2JqW2RlY29kZVVSSUNvbXBvbmVudChwYWlyLnNsaWNlKDAsIHBvcykpXSA9XG4gICAgICAgIGRlY29kZVVSSUNvbXBvbmVudChwYWlyLnNsaWNlKHBvcyArIDEpKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gb2JqO1xufVxuXG4vKipcbiAqIEV4cG9zZSBwYXJzZXIuXG4gKi9cblxucmVxdWVzdC5wYXJzZVN0cmluZyA9IHBhcnNlU3RyaW5nO1xuXG4vKipcbiAqIERlZmF1bHQgTUlNRSB0eXBlIG1hcC5cbiAqXG4gKiAgICAgc3VwZXJhZ2VudC50eXBlcy54bWwgPSAnYXBwbGljYXRpb24veG1sJztcbiAqXG4gKi9cblxucmVxdWVzdC50eXBlcyA9IHtcbiAgaHRtbDogJ3RleHQvaHRtbCcsXG4gIGpzb246ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgeG1sOiAndGV4dC94bWwnLFxuICB1cmxlbmNvZGVkOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyxcbiAgJ2Zvcm0nOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyxcbiAgJ2Zvcm0tZGF0YSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnXG59O1xuXG4vKipcbiAqIERlZmF1bHQgc2VyaWFsaXphdGlvbiBtYXAuXG4gKlxuICogICAgIHN1cGVyYWdlbnQuc2VyaWFsaXplWydhcHBsaWNhdGlvbi94bWwnXSA9IGZ1bmN0aW9uKG9iail7XG4gKiAgICAgICByZXR1cm4gJ2dlbmVyYXRlZCB4bWwgaGVyZSc7XG4gKiAgICAgfTtcbiAqXG4gKi9cblxuIHJlcXVlc3Quc2VyaWFsaXplID0ge1xuICAgJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCc6IHNlcmlhbGl6ZSxcbiAgICdhcHBsaWNhdGlvbi9qc29uJzogSlNPTi5zdHJpbmdpZnlcbiB9O1xuXG4gLyoqXG4gICogRGVmYXVsdCBwYXJzZXJzLlxuICAqXG4gICogICAgIHN1cGVyYWdlbnQucGFyc2VbJ2FwcGxpY2F0aW9uL3htbCddID0gZnVuY3Rpb24oc3RyKXtcbiAgKiAgICAgICByZXR1cm4geyBvYmplY3QgcGFyc2VkIGZyb20gc3RyIH07XG4gICogICAgIH07XG4gICpcbiAgKi9cblxucmVxdWVzdC5wYXJzZSA9IHtcbiAgJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCc6IHBhcnNlU3RyaW5nLFxuICAnYXBwbGljYXRpb24vanNvbic6IEpTT04ucGFyc2Vcbn07XG5cbi8qKlxuICogUGFyc2UgdGhlIGdpdmVuIGhlYWRlciBgc3RyYCBpbnRvXG4gKiBhbiBvYmplY3QgY29udGFpbmluZyB0aGUgbWFwcGVkIGZpZWxkcy5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBwYXJzZUhlYWRlcihzdHIpIHtcbiAgdmFyIGxpbmVzID0gc3RyLnNwbGl0KC9cXHI/XFxuLyk7XG4gIHZhciBmaWVsZHMgPSB7fTtcbiAgdmFyIGluZGV4O1xuICB2YXIgbGluZTtcbiAgdmFyIGZpZWxkO1xuICB2YXIgdmFsO1xuXG4gIGZvciAodmFyIGkgPSAwLCBsZW4gPSBsaW5lcy5sZW5ndGg7IGkgPCBsZW47ICsraSkge1xuICAgIGxpbmUgPSBsaW5lc1tpXTtcbiAgICBpbmRleCA9IGxpbmUuaW5kZXhPZignOicpO1xuICAgIGlmIChpbmRleCA9PT0gLTEpIHsgLy8gY291bGQgYmUgZW1wdHkgbGluZSwganVzdCBza2lwIGl0XG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgZmllbGQgPSBsaW5lLnNsaWNlKDAsIGluZGV4KS50b0xvd2VyQ2FzZSgpO1xuICAgIHZhbCA9IHRyaW0obGluZS5zbGljZShpbmRleCArIDEpKTtcbiAgICBmaWVsZHNbZmllbGRdID0gdmFsO1xuICB9XG5cbiAgcmV0dXJuIGZpZWxkcztcbn1cblxuLyoqXG4gKiBDaGVjayBpZiBgbWltZWAgaXMganNvbiBvciBoYXMgK2pzb24gc3RydWN0dXJlZCBzeW50YXggc3VmZml4LlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBtaW1lXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gaXNKU09OKG1pbWUpIHtcbiAgcmV0dXJuIC9bXFwvK11qc29uXFxiLy50ZXN0KG1pbWUpO1xufVxuXG4vKipcbiAqIEluaXRpYWxpemUgYSBuZXcgYFJlc3BvbnNlYCB3aXRoIHRoZSBnaXZlbiBgeGhyYC5cbiAqXG4gKiAgLSBzZXQgZmxhZ3MgKC5vaywgLmVycm9yLCBldGMpXG4gKiAgLSBwYXJzZSBoZWFkZXJcbiAqXG4gKiBFeGFtcGxlczpcbiAqXG4gKiAgQWxpYXNpbmcgYHN1cGVyYWdlbnRgIGFzIGByZXF1ZXN0YCBpcyBuaWNlOlxuICpcbiAqICAgICAgcmVxdWVzdCA9IHN1cGVyYWdlbnQ7XG4gKlxuICogIFdlIGNhbiB1c2UgdGhlIHByb21pc2UtbGlrZSBBUEksIG9yIHBhc3MgY2FsbGJhY2tzOlxuICpcbiAqICAgICAgcmVxdWVzdC5nZXQoJy8nKS5lbmQoZnVuY3Rpb24ocmVzKXt9KTtcbiAqICAgICAgcmVxdWVzdC5nZXQoJy8nLCBmdW5jdGlvbihyZXMpe30pO1xuICpcbiAqICBTZW5kaW5nIGRhdGEgY2FuIGJlIGNoYWluZWQ6XG4gKlxuICogICAgICByZXF1ZXN0XG4gKiAgICAgICAgLnBvc3QoJy91c2VyJylcbiAqICAgICAgICAuc2VuZCh7IG5hbWU6ICd0aicgfSlcbiAqICAgICAgICAuZW5kKGZ1bmN0aW9uKHJlcyl7fSk7XG4gKlxuICogIE9yIHBhc3NlZCB0byBgLnNlbmQoKWA6XG4gKlxuICogICAgICByZXF1ZXN0XG4gKiAgICAgICAgLnBvc3QoJy91c2VyJylcbiAqICAgICAgICAuc2VuZCh7IG5hbWU6ICd0aicgfSwgZnVuY3Rpb24ocmVzKXt9KTtcbiAqXG4gKiAgT3IgcGFzc2VkIHRvIGAucG9zdCgpYDpcbiAqXG4gKiAgICAgIHJlcXVlc3RcbiAqICAgICAgICAucG9zdCgnL3VzZXInLCB7IG5hbWU6ICd0aicgfSlcbiAqICAgICAgICAuZW5kKGZ1bmN0aW9uKHJlcyl7fSk7XG4gKlxuICogT3IgZnVydGhlciByZWR1Y2VkIHRvIGEgc2luZ2xlIGNhbGwgZm9yIHNpbXBsZSBjYXNlczpcbiAqXG4gKiAgICAgIHJlcXVlc3RcbiAqICAgICAgICAucG9zdCgnL3VzZXInLCB7IG5hbWU6ICd0aicgfSwgZnVuY3Rpb24ocmVzKXt9KTtcbiAqXG4gKiBAcGFyYW0ge1hNTEhUVFBSZXF1ZXN0fSB4aHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBSZXNwb25zZShyZXEpIHtcbiAgdGhpcy5yZXEgPSByZXE7XG4gIHRoaXMueGhyID0gdGhpcy5yZXEueGhyO1xuICAvLyByZXNwb25zZVRleHQgaXMgYWNjZXNzaWJsZSBvbmx5IGlmIHJlc3BvbnNlVHlwZSBpcyAnJyBvciAndGV4dCcgYW5kIG9uIG9sZGVyIGJyb3dzZXJzXG4gIHRoaXMudGV4dCA9ICgodGhpcy5yZXEubWV0aG9kICE9J0hFQUQnICYmICh0aGlzLnhoci5yZXNwb25zZVR5cGUgPT09ICcnIHx8IHRoaXMueGhyLnJlc3BvbnNlVHlwZSA9PT0gJ3RleHQnKSkgfHwgdHlwZW9mIHRoaXMueGhyLnJlc3BvbnNlVHlwZSA9PT0gJ3VuZGVmaW5lZCcpXG4gICAgID8gdGhpcy54aHIucmVzcG9uc2VUZXh0XG4gICAgIDogbnVsbDtcbiAgdGhpcy5zdGF0dXNUZXh0ID0gdGhpcy5yZXEueGhyLnN0YXR1c1RleHQ7XG4gIHZhciBzdGF0dXMgPSB0aGlzLnhoci5zdGF0dXM7XG4gIC8vIGhhbmRsZSBJRTkgYnVnOiBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzEwMDQ2OTcyL21zaWUtcmV0dXJucy1zdGF0dXMtY29kZS1vZi0xMjIzLWZvci1hamF4LXJlcXVlc3RcbiAgaWYgKHN0YXR1cyA9PT0gMTIyMykge1xuICAgICAgc3RhdHVzID0gMjA0O1xuICB9XG4gIHRoaXMuX3NldFN0YXR1c1Byb3BlcnRpZXMoc3RhdHVzKTtcbiAgdGhpcy5oZWFkZXIgPSB0aGlzLmhlYWRlcnMgPSBwYXJzZUhlYWRlcih0aGlzLnhoci5nZXRBbGxSZXNwb25zZUhlYWRlcnMoKSk7XG4gIC8vIGdldEFsbFJlc3BvbnNlSGVhZGVycyBzb21ldGltZXMgZmFsc2VseSByZXR1cm5zIFwiXCIgZm9yIENPUlMgcmVxdWVzdHMsIGJ1dFxuICAvLyBnZXRSZXNwb25zZUhlYWRlciBzdGlsbCB3b3Jrcy4gc28gd2UgZ2V0IGNvbnRlbnQtdHlwZSBldmVuIGlmIGdldHRpbmdcbiAgLy8gb3RoZXIgaGVhZGVycyBmYWlscy5cbiAgdGhpcy5oZWFkZXJbJ2NvbnRlbnQtdHlwZSddID0gdGhpcy54aHIuZ2V0UmVzcG9uc2VIZWFkZXIoJ2NvbnRlbnQtdHlwZScpO1xuICB0aGlzLl9zZXRIZWFkZXJQcm9wZXJ0aWVzKHRoaXMuaGVhZGVyKTtcblxuICBpZiAobnVsbCA9PT0gdGhpcy50ZXh0ICYmIHJlcS5fcmVzcG9uc2VUeXBlKSB7XG4gICAgdGhpcy5ib2R5ID0gdGhpcy54aHIucmVzcG9uc2U7XG4gIH0gZWxzZSB7XG4gICAgdGhpcy5ib2R5ID0gdGhpcy5yZXEubWV0aG9kICE9ICdIRUFEJ1xuICAgICAgPyB0aGlzLl9wYXJzZUJvZHkodGhpcy50ZXh0ID8gdGhpcy50ZXh0IDogdGhpcy54aHIucmVzcG9uc2UpXG4gICAgICA6IG51bGw7XG4gIH1cbn1cblxuUmVzcG9uc2VCYXNlKFJlc3BvbnNlLnByb3RvdHlwZSk7XG5cbi8qKlxuICogUGFyc2UgdGhlIGdpdmVuIGJvZHkgYHN0cmAuXG4gKlxuICogVXNlZCBmb3IgYXV0by1wYXJzaW5nIG9mIGJvZGllcy4gUGFyc2Vyc1xuICogYXJlIGRlZmluZWQgb24gdGhlIGBzdXBlcmFnZW50LnBhcnNlYCBvYmplY3QuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0clxuICogQHJldHVybiB7TWl4ZWR9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5SZXNwb25zZS5wcm90b3R5cGUuX3BhcnNlQm9keSA9IGZ1bmN0aW9uKHN0cil7XG4gIHZhciBwYXJzZSA9IHJlcXVlc3QucGFyc2VbdGhpcy50eXBlXTtcbiAgaWYodGhpcy5yZXEuX3BhcnNlcikge1xuICAgIHJldHVybiB0aGlzLnJlcS5fcGFyc2VyKHRoaXMsIHN0cik7XG4gIH1cbiAgaWYgKCFwYXJzZSAmJiBpc0pTT04odGhpcy50eXBlKSkge1xuICAgIHBhcnNlID0gcmVxdWVzdC5wYXJzZVsnYXBwbGljYXRpb24vanNvbiddO1xuICB9XG4gIHJldHVybiBwYXJzZSAmJiBzdHIgJiYgKHN0ci5sZW5ndGggfHwgc3RyIGluc3RhbmNlb2YgT2JqZWN0KVxuICAgID8gcGFyc2Uoc3RyKVxuICAgIDogbnVsbDtcbn07XG5cbi8qKlxuICogUmV0dXJuIGFuIGBFcnJvcmAgcmVwcmVzZW50YXRpdmUgb2YgdGhpcyByZXNwb25zZS5cbiAqXG4gKiBAcmV0dXJuIHtFcnJvcn1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxuUmVzcG9uc2UucHJvdG90eXBlLnRvRXJyb3IgPSBmdW5jdGlvbigpe1xuICB2YXIgcmVxID0gdGhpcy5yZXE7XG4gIHZhciBtZXRob2QgPSByZXEubWV0aG9kO1xuICB2YXIgdXJsID0gcmVxLnVybDtcblxuICB2YXIgbXNnID0gJ2Nhbm5vdCAnICsgbWV0aG9kICsgJyAnICsgdXJsICsgJyAoJyArIHRoaXMuc3RhdHVzICsgJyknO1xuICB2YXIgZXJyID0gbmV3IEVycm9yKG1zZyk7XG4gIGVyci5zdGF0dXMgPSB0aGlzLnN0YXR1cztcbiAgZXJyLm1ldGhvZCA9IG1ldGhvZDtcbiAgZXJyLnVybCA9IHVybDtcblxuICByZXR1cm4gZXJyO1xufTtcblxuLyoqXG4gKiBFeHBvc2UgYFJlc3BvbnNlYC5cbiAqL1xuXG5yZXF1ZXN0LlJlc3BvbnNlID0gUmVzcG9uc2U7XG5cbi8qKlxuICogSW5pdGlhbGl6ZSBhIG5ldyBgUmVxdWVzdGAgd2l0aCB0aGUgZ2l2ZW4gYG1ldGhvZGAgYW5kIGB1cmxgLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBtZXRob2RcbiAqIEBwYXJhbSB7U3RyaW5nfSB1cmxcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZnVuY3Rpb24gUmVxdWVzdChtZXRob2QsIHVybCkge1xuICB2YXIgc2VsZiA9IHRoaXM7XG4gIHRoaXMuX3F1ZXJ5ID0gdGhpcy5fcXVlcnkgfHwgW107XG4gIHRoaXMubWV0aG9kID0gbWV0aG9kO1xuICB0aGlzLnVybCA9IHVybDtcbiAgdGhpcy5oZWFkZXIgPSB7fTsgLy8gcHJlc2VydmVzIGhlYWRlciBuYW1lIGNhc2VcbiAgdGhpcy5faGVhZGVyID0ge307IC8vIGNvZXJjZXMgaGVhZGVyIG5hbWVzIHRvIGxvd2VyY2FzZVxuICB0aGlzLm9uKCdlbmQnLCBmdW5jdGlvbigpe1xuICAgIHZhciBlcnIgPSBudWxsO1xuICAgIHZhciByZXMgPSBudWxsO1xuXG4gICAgdHJ5IHtcbiAgICAgIHJlcyA9IG5ldyBSZXNwb25zZShzZWxmKTtcbiAgICB9IGNhdGNoKGUpIHtcbiAgICAgIGVyciA9IG5ldyBFcnJvcignUGFyc2VyIGlzIHVuYWJsZSB0byBwYXJzZSB0aGUgcmVzcG9uc2UnKTtcbiAgICAgIGVyci5wYXJzZSA9IHRydWU7XG4gICAgICBlcnIub3JpZ2luYWwgPSBlO1xuICAgICAgLy8gaXNzdWUgIzY3NTogcmV0dXJuIHRoZSByYXcgcmVzcG9uc2UgaWYgdGhlIHJlc3BvbnNlIHBhcnNpbmcgZmFpbHNcbiAgICAgIGlmIChzZWxmLnhocikge1xuICAgICAgICAvLyBpZTkgZG9lc24ndCBoYXZlICdyZXNwb25zZScgcHJvcGVydHlcbiAgICAgICAgZXJyLnJhd1Jlc3BvbnNlID0gdHlwZW9mIHNlbGYueGhyLnJlc3BvbnNlVHlwZSA9PSAndW5kZWZpbmVkJyA/IHNlbGYueGhyLnJlc3BvbnNlVGV4dCA6IHNlbGYueGhyLnJlc3BvbnNlO1xuICAgICAgICAvLyBpc3N1ZSAjODc2OiByZXR1cm4gdGhlIGh0dHAgc3RhdHVzIGNvZGUgaWYgdGhlIHJlc3BvbnNlIHBhcnNpbmcgZmFpbHNcbiAgICAgICAgZXJyLnN0YXR1cyA9IHNlbGYueGhyLnN0YXR1cyA/IHNlbGYueGhyLnN0YXR1cyA6IG51bGw7XG4gICAgICAgIGVyci5zdGF0dXNDb2RlID0gZXJyLnN0YXR1czsgLy8gYmFja3dhcmRzLWNvbXBhdCBvbmx5XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlcnIucmF3UmVzcG9uc2UgPSBudWxsO1xuICAgICAgICBlcnIuc3RhdHVzID0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHNlbGYuY2FsbGJhY2soZXJyKTtcbiAgICB9XG5cbiAgICBzZWxmLmVtaXQoJ3Jlc3BvbnNlJywgcmVzKTtcblxuICAgIHZhciBuZXdfZXJyO1xuICAgIHRyeSB7XG4gICAgICBpZiAoIXNlbGYuX2lzUmVzcG9uc2VPSyhyZXMpKSB7XG4gICAgICAgIG5ld19lcnIgPSBuZXcgRXJyb3IocmVzLnN0YXR1c1RleHQgfHwgJ1Vuc3VjY2Vzc2Z1bCBIVFRQIHJlc3BvbnNlJyk7XG4gICAgICB9XG4gICAgfSBjYXRjaChjdXN0b21fZXJyKSB7XG4gICAgICBuZXdfZXJyID0gY3VzdG9tX2VycjsgLy8gb2soKSBjYWxsYmFjayBjYW4gdGhyb3dcbiAgICB9XG5cbiAgICAvLyAjMTAwMCBkb24ndCBjYXRjaCBlcnJvcnMgZnJvbSB0aGUgY2FsbGJhY2sgdG8gYXZvaWQgZG91YmxlIGNhbGxpbmcgaXRcbiAgICBpZiAobmV3X2Vycikge1xuICAgICAgbmV3X2Vyci5vcmlnaW5hbCA9IGVycjtcbiAgICAgIG5ld19lcnIucmVzcG9uc2UgPSByZXM7XG4gICAgICBuZXdfZXJyLnN0YXR1cyA9IHJlcy5zdGF0dXM7XG4gICAgICBzZWxmLmNhbGxiYWNrKG5ld19lcnIsIHJlcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNlbGYuY2FsbGJhY2sobnVsbCwgcmVzKTtcbiAgICB9XG4gIH0pO1xufVxuXG4vKipcbiAqIE1peGluIGBFbWl0dGVyYCBhbmQgYFJlcXVlc3RCYXNlYC5cbiAqL1xuXG5FbWl0dGVyKFJlcXVlc3QucHJvdG90eXBlKTtcblJlcXVlc3RCYXNlKFJlcXVlc3QucHJvdG90eXBlKTtcblxuLyoqXG4gKiBTZXQgQ29udGVudC1UeXBlIHRvIGB0eXBlYCwgbWFwcGluZyB2YWx1ZXMgZnJvbSBgcmVxdWVzdC50eXBlc2AuXG4gKlxuICogRXhhbXBsZXM6XG4gKlxuICogICAgICBzdXBlcmFnZW50LnR5cGVzLnhtbCA9ICdhcHBsaWNhdGlvbi94bWwnO1xuICpcbiAqICAgICAgcmVxdWVzdC5wb3N0KCcvJylcbiAqICAgICAgICAudHlwZSgneG1sJylcbiAqICAgICAgICAuc2VuZCh4bWxzdHJpbmcpXG4gKiAgICAgICAgLmVuZChjYWxsYmFjayk7XG4gKlxuICogICAgICByZXF1ZXN0LnBvc3QoJy8nKVxuICogICAgICAgIC50eXBlKCdhcHBsaWNhdGlvbi94bWwnKVxuICogICAgICAgIC5zZW5kKHhtbHN0cmluZylcbiAqICAgICAgICAuZW5kKGNhbGxiYWNrKTtcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gdHlwZVxuICogQHJldHVybiB7UmVxdWVzdH0gZm9yIGNoYWluaW5nXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cblJlcXVlc3QucHJvdG90eXBlLnR5cGUgPSBmdW5jdGlvbih0eXBlKXtcbiAgdGhpcy5zZXQoJ0NvbnRlbnQtVHlwZScsIHJlcXVlc3QudHlwZXNbdHlwZV0gfHwgdHlwZSk7XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBTZXQgQWNjZXB0IHRvIGB0eXBlYCwgbWFwcGluZyB2YWx1ZXMgZnJvbSBgcmVxdWVzdC50eXBlc2AuXG4gKlxuICogRXhhbXBsZXM6XG4gKlxuICogICAgICBzdXBlcmFnZW50LnR5cGVzLmpzb24gPSAnYXBwbGljYXRpb24vanNvbic7XG4gKlxuICogICAgICByZXF1ZXN0LmdldCgnL2FnZW50JylcbiAqICAgICAgICAuYWNjZXB0KCdqc29uJylcbiAqICAgICAgICAuZW5kKGNhbGxiYWNrKTtcbiAqXG4gKiAgICAgIHJlcXVlc3QuZ2V0KCcvYWdlbnQnKVxuICogICAgICAgIC5hY2NlcHQoJ2FwcGxpY2F0aW9uL2pzb24nKVxuICogICAgICAgIC5lbmQoY2FsbGJhY2spO1xuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBhY2NlcHRcbiAqIEByZXR1cm4ge1JlcXVlc3R9IGZvciBjaGFpbmluZ1xuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5SZXF1ZXN0LnByb3RvdHlwZS5hY2NlcHQgPSBmdW5jdGlvbih0eXBlKXtcbiAgdGhpcy5zZXQoJ0FjY2VwdCcsIHJlcXVlc3QudHlwZXNbdHlwZV0gfHwgdHlwZSk7XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBTZXQgQXV0aG9yaXphdGlvbiBmaWVsZCB2YWx1ZSB3aXRoIGB1c2VyYCBhbmQgYHBhc3NgLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSB1c2VyXG4gKiBAcGFyYW0ge1N0cmluZ30gW3Bhc3NdIG9wdGlvbmFsIGluIGNhc2Ugb2YgdXNpbmcgJ2JlYXJlcicgYXMgdHlwZVxuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgd2l0aCAndHlwZScgcHJvcGVydHkgJ2F1dG8nLCAnYmFzaWMnIG9yICdiZWFyZXInIChkZWZhdWx0ICdiYXNpYycpXG4gKiBAcmV0dXJuIHtSZXF1ZXN0fSBmb3IgY2hhaW5pbmdcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuUmVxdWVzdC5wcm90b3R5cGUuYXV0aCA9IGZ1bmN0aW9uKHVzZXIsIHBhc3MsIG9wdGlvbnMpe1xuICBpZiAodHlwZW9mIHBhc3MgPT09ICdvYmplY3QnICYmIHBhc3MgIT09IG51bGwpIHsgLy8gcGFzcyBpcyBvcHRpb25hbCBhbmQgY2FuIHN1YnN0aXR1dGUgZm9yIG9wdGlvbnNcbiAgICBvcHRpb25zID0gcGFzcztcbiAgfVxuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge1xuICAgICAgdHlwZTogJ2Z1bmN0aW9uJyA9PT0gdHlwZW9mIGJ0b2EgPyAnYmFzaWMnIDogJ2F1dG8nLFxuICAgIH1cbiAgfVxuXG4gIHN3aXRjaCAob3B0aW9ucy50eXBlKSB7XG4gICAgY2FzZSAnYmFzaWMnOlxuICAgICAgdGhpcy5zZXQoJ0F1dGhvcml6YXRpb24nLCAnQmFzaWMgJyArIGJ0b2EodXNlciArICc6JyArIHBhc3MpKTtcbiAgICBicmVhaztcblxuICAgIGNhc2UgJ2F1dG8nOlxuICAgICAgdGhpcy51c2VybmFtZSA9IHVzZXI7XG4gICAgICB0aGlzLnBhc3N3b3JkID0gcGFzcztcbiAgICBicmVhaztcblxuICAgIGNhc2UgJ2JlYXJlcic6IC8vIHVzYWdlIHdvdWxkIGJlIC5hdXRoKGFjY2Vzc1Rva2VuLCB7IHR5cGU6ICdiZWFyZXInIH0pXG4gICAgICB0aGlzLnNldCgnQXV0aG9yaXphdGlvbicsICdCZWFyZXIgJyArIHVzZXIpO1xuICAgIGJyZWFrO1xuICB9XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBBZGQgcXVlcnktc3RyaW5nIGB2YWxgLlxuICpcbiAqIEV4YW1wbGVzOlxuICpcbiAqICAgcmVxdWVzdC5nZXQoJy9zaG9lcycpXG4gKiAgICAgLnF1ZXJ5KCdzaXplPTEwJylcbiAqICAgICAucXVlcnkoeyBjb2xvcjogJ2JsdWUnIH0pXG4gKlxuICogQHBhcmFtIHtPYmplY3R8U3RyaW5nfSB2YWxcbiAqIEByZXR1cm4ge1JlcXVlc3R9IGZvciBjaGFpbmluZ1xuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5SZXF1ZXN0LnByb3RvdHlwZS5xdWVyeSA9IGZ1bmN0aW9uKHZhbCl7XG4gIGlmICgnc3RyaW5nJyAhPSB0eXBlb2YgdmFsKSB2YWwgPSBzZXJpYWxpemUodmFsKTtcbiAgaWYgKHZhbCkgdGhpcy5fcXVlcnkucHVzaCh2YWwpO1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogUXVldWUgdGhlIGdpdmVuIGBmaWxlYCBhcyBhbiBhdHRhY2htZW50IHRvIHRoZSBzcGVjaWZpZWQgYGZpZWxkYCxcbiAqIHdpdGggb3B0aW9uYWwgYG9wdGlvbnNgIChvciBmaWxlbmFtZSkuXG4gKlxuICogYGBgIGpzXG4gKiByZXF1ZXN0LnBvc3QoJy91cGxvYWQnKVxuICogICAuYXR0YWNoKCdjb250ZW50JywgbmV3IEJsb2IoWyc8YSBpZD1cImFcIj48YiBpZD1cImJcIj5oZXkhPC9iPjwvYT4nXSwgeyB0eXBlOiBcInRleHQvaHRtbFwifSkpXG4gKiAgIC5lbmQoY2FsbGJhY2spO1xuICogYGBgXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGZpZWxkXG4gKiBAcGFyYW0ge0Jsb2J8RmlsZX0gZmlsZVxuICogQHBhcmFtIHtTdHJpbmd8T2JqZWN0fSBvcHRpb25zXG4gKiBAcmV0dXJuIHtSZXF1ZXN0fSBmb3IgY2hhaW5pbmdcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuUmVxdWVzdC5wcm90b3R5cGUuYXR0YWNoID0gZnVuY3Rpb24oZmllbGQsIGZpbGUsIG9wdGlvbnMpe1xuICBpZiAoZmlsZSkge1xuICAgIGlmICh0aGlzLl9kYXRhKSB7XG4gICAgICB0aHJvdyBFcnJvcihcInN1cGVyYWdlbnQgY2FuJ3QgbWl4IC5zZW5kKCkgYW5kIC5hdHRhY2goKVwiKTtcbiAgICB9XG5cbiAgICB0aGlzLl9nZXRGb3JtRGF0YSgpLmFwcGVuZChmaWVsZCwgZmlsZSwgb3B0aW9ucyB8fCBmaWxlLm5hbWUpO1xuICB9XG4gIHJldHVybiB0aGlzO1xufTtcblxuUmVxdWVzdC5wcm90b3R5cGUuX2dldEZvcm1EYXRhID0gZnVuY3Rpb24oKXtcbiAgaWYgKCF0aGlzLl9mb3JtRGF0YSkge1xuICAgIHRoaXMuX2Zvcm1EYXRhID0gbmV3IHJvb3QuRm9ybURhdGEoKTtcbiAgfVxuICByZXR1cm4gdGhpcy5fZm9ybURhdGE7XG59O1xuXG4vKipcbiAqIEludm9rZSB0aGUgY2FsbGJhY2sgd2l0aCBgZXJyYCBhbmQgYHJlc2BcbiAqIGFuZCBoYW5kbGUgYXJpdHkgY2hlY2suXG4gKlxuICogQHBhcmFtIHtFcnJvcn0gZXJyXG4gKiBAcGFyYW0ge1Jlc3BvbnNlfSByZXNcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cblJlcXVlc3QucHJvdG90eXBlLmNhbGxiYWNrID0gZnVuY3Rpb24oZXJyLCByZXMpe1xuICAvLyBjb25zb2xlLmxvZyh0aGlzLl9yZXRyaWVzLCB0aGlzLl9tYXhSZXRyaWVzKVxuICBpZiAodGhpcy5fbWF4UmV0cmllcyAmJiB0aGlzLl9yZXRyaWVzKysgPCB0aGlzLl9tYXhSZXRyaWVzICYmIHNob3VsZFJldHJ5KGVyciwgcmVzKSkge1xuICAgIHJldHVybiB0aGlzLl9yZXRyeSgpO1xuICB9XG5cbiAgdmFyIGZuID0gdGhpcy5fY2FsbGJhY2s7XG4gIHRoaXMuY2xlYXJUaW1lb3V0KCk7XG5cbiAgaWYgKGVycikge1xuICAgIGlmICh0aGlzLl9tYXhSZXRyaWVzKSBlcnIucmV0cmllcyA9IHRoaXMuX3JldHJpZXMgLSAxO1xuICAgIHRoaXMuZW1pdCgnZXJyb3InLCBlcnIpO1xuICB9XG5cbiAgZm4oZXJyLCByZXMpO1xufTtcblxuLyoqXG4gKiBJbnZva2UgY2FsbGJhY2sgd2l0aCB4LWRvbWFpbiBlcnJvci5cbiAqXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5SZXF1ZXN0LnByb3RvdHlwZS5jcm9zc0RvbWFpbkVycm9yID0gZnVuY3Rpb24oKXtcbiAgdmFyIGVyciA9IG5ldyBFcnJvcignUmVxdWVzdCBoYXMgYmVlbiB0ZXJtaW5hdGVkXFxuUG9zc2libGUgY2F1c2VzOiB0aGUgbmV0d29yayBpcyBvZmZsaW5lLCBPcmlnaW4gaXMgbm90IGFsbG93ZWQgYnkgQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luLCB0aGUgcGFnZSBpcyBiZWluZyB1bmxvYWRlZCwgZXRjLicpO1xuICBlcnIuY3Jvc3NEb21haW4gPSB0cnVlO1xuXG4gIGVyci5zdGF0dXMgPSB0aGlzLnN0YXR1cztcbiAgZXJyLm1ldGhvZCA9IHRoaXMubWV0aG9kO1xuICBlcnIudXJsID0gdGhpcy51cmw7XG5cbiAgdGhpcy5jYWxsYmFjayhlcnIpO1xufTtcblxuLy8gVGhpcyBvbmx5IHdhcm5zLCBiZWNhdXNlIHRoZSByZXF1ZXN0IGlzIHN0aWxsIGxpa2VseSB0byB3b3JrXG5SZXF1ZXN0LnByb3RvdHlwZS5idWZmZXIgPSBSZXF1ZXN0LnByb3RvdHlwZS5jYSA9IFJlcXVlc3QucHJvdG90eXBlLmFnZW50ID0gZnVuY3Rpb24oKXtcbiAgY29uc29sZS53YXJuKFwiVGhpcyBpcyBub3Qgc3VwcG9ydGVkIGluIGJyb3dzZXIgdmVyc2lvbiBvZiBzdXBlcmFnZW50XCIpO1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8vIFRoaXMgdGhyb3dzLCBiZWNhdXNlIGl0IGNhbid0IHNlbmQvcmVjZWl2ZSBkYXRhIGFzIGV4cGVjdGVkXG5SZXF1ZXN0LnByb3RvdHlwZS5waXBlID0gUmVxdWVzdC5wcm90b3R5cGUud3JpdGUgPSBmdW5jdGlvbigpe1xuICB0aHJvdyBFcnJvcihcIlN0cmVhbWluZyBpcyBub3Qgc3VwcG9ydGVkIGluIGJyb3dzZXIgdmVyc2lvbiBvZiBzdXBlcmFnZW50XCIpO1xufTtcblxuLyoqXG4gKiBDaGVjayBpZiBgb2JqYCBpcyBhIGhvc3Qgb2JqZWN0LFxuICogd2UgZG9uJ3Qgd2FudCB0byBzZXJpYWxpemUgdGhlc2UgOilcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICogQGFwaSBwcml2YXRlXG4gKi9cblJlcXVlc3QucHJvdG90eXBlLl9pc0hvc3QgPSBmdW5jdGlvbiBfaXNIb3N0KG9iaikge1xuICAvLyBOYXRpdmUgb2JqZWN0cyBzdHJpbmdpZnkgdG8gW29iamVjdCBGaWxlXSwgW29iamVjdCBCbG9iXSwgW29iamVjdCBGb3JtRGF0YV0sIGV0Yy5cbiAgcmV0dXJuIG9iaiAmJiAnb2JqZWN0JyA9PT0gdHlwZW9mIG9iaiAmJiAhQXJyYXkuaXNBcnJheShvYmopICYmIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvYmopICE9PSAnW29iamVjdCBPYmplY3RdJztcbn1cblxuLyoqXG4gKiBJbml0aWF0ZSByZXF1ZXN0LCBpbnZva2luZyBjYWxsYmFjayBgZm4ocmVzKWBcbiAqIHdpdGggYW4gaW5zdGFuY2VvZiBgUmVzcG9uc2VgLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuXG4gKiBAcmV0dXJuIHtSZXF1ZXN0fSBmb3IgY2hhaW5pbmdcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuUmVxdWVzdC5wcm90b3R5cGUuZW5kID0gZnVuY3Rpb24oZm4pe1xuICBpZiAodGhpcy5fZW5kQ2FsbGVkKSB7XG4gICAgY29uc29sZS53YXJuKFwiV2FybmluZzogLmVuZCgpIHdhcyBjYWxsZWQgdHdpY2UuIFRoaXMgaXMgbm90IHN1cHBvcnRlZCBpbiBzdXBlcmFnZW50XCIpO1xuICB9XG4gIHRoaXMuX2VuZENhbGxlZCA9IHRydWU7XG5cbiAgLy8gc3RvcmUgY2FsbGJhY2tcbiAgdGhpcy5fY2FsbGJhY2sgPSBmbiB8fCBub29wO1xuXG4gIC8vIHF1ZXJ5c3RyaW5nXG4gIHRoaXMuX2ZpbmFsaXplUXVlcnlTdHJpbmcoKTtcblxuICByZXR1cm4gdGhpcy5fZW5kKCk7XG59O1xuXG5SZXF1ZXN0LnByb3RvdHlwZS5fZW5kID0gZnVuY3Rpb24oKSB7XG4gIHZhciBzZWxmID0gdGhpcztcbiAgdmFyIHhociA9IHRoaXMueGhyID0gcmVxdWVzdC5nZXRYSFIoKTtcbiAgdmFyIGRhdGEgPSB0aGlzLl9mb3JtRGF0YSB8fCB0aGlzLl9kYXRhO1xuXG4gIHRoaXMuX3NldFRpbWVvdXRzKCk7XG5cbiAgLy8gc3RhdGUgY2hhbmdlXG4gIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbigpe1xuICAgIHZhciByZWFkeVN0YXRlID0geGhyLnJlYWR5U3RhdGU7XG4gICAgaWYgKHJlYWR5U3RhdGUgPj0gMiAmJiBzZWxmLl9yZXNwb25zZVRpbWVvdXRUaW1lcikge1xuICAgICAgY2xlYXJUaW1lb3V0KHNlbGYuX3Jlc3BvbnNlVGltZW91dFRpbWVyKTtcbiAgICB9XG4gICAgaWYgKDQgIT0gcmVhZHlTdGF0ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIEluIElFOSwgcmVhZHMgdG8gYW55IHByb3BlcnR5IChlLmcuIHN0YXR1cykgb2ZmIG9mIGFuIGFib3J0ZWQgWEhSIHdpbGxcbiAgICAvLyByZXN1bHQgaW4gdGhlIGVycm9yIFwiQ291bGQgbm90IGNvbXBsZXRlIHRoZSBvcGVyYXRpb24gZHVlIHRvIGVycm9yIGMwMGMwMjNmXCJcbiAgICB2YXIgc3RhdHVzO1xuICAgIHRyeSB7IHN0YXR1cyA9IHhoci5zdGF0dXMgfSBjYXRjaChlKSB7IHN0YXR1cyA9IDA7IH1cblxuICAgIGlmICghc3RhdHVzKSB7XG4gICAgICBpZiAoc2VsZi50aW1lZG91dCB8fCBzZWxmLl9hYm9ydGVkKSByZXR1cm47XG4gICAgICByZXR1cm4gc2VsZi5jcm9zc0RvbWFpbkVycm9yKCk7XG4gICAgfVxuICAgIHNlbGYuZW1pdCgnZW5kJyk7XG4gIH07XG5cbiAgLy8gcHJvZ3Jlc3NcbiAgdmFyIGhhbmRsZVByb2dyZXNzID0gZnVuY3Rpb24oZGlyZWN0aW9uLCBlKSB7XG4gICAgaWYgKGUudG90YWwgPiAwKSB7XG4gICAgICBlLnBlcmNlbnQgPSBlLmxvYWRlZCAvIGUudG90YWwgKiAxMDA7XG4gICAgfVxuICAgIGUuZGlyZWN0aW9uID0gZGlyZWN0aW9uO1xuICAgIHNlbGYuZW1pdCgncHJvZ3Jlc3MnLCBlKTtcbiAgfVxuICBpZiAodGhpcy5oYXNMaXN0ZW5lcnMoJ3Byb2dyZXNzJykpIHtcbiAgICB0cnkge1xuICAgICAgeGhyLm9ucHJvZ3Jlc3MgPSBoYW5kbGVQcm9ncmVzcy5iaW5kKG51bGwsICdkb3dubG9hZCcpO1xuICAgICAgaWYgKHhoci51cGxvYWQpIHtcbiAgICAgICAgeGhyLnVwbG9hZC5vbnByb2dyZXNzID0gaGFuZGxlUHJvZ3Jlc3MuYmluZChudWxsLCAndXBsb2FkJyk7XG4gICAgICB9XG4gICAgfSBjYXRjaChlKSB7XG4gICAgICAvLyBBY2Nlc3NpbmcgeGhyLnVwbG9hZCBmYWlscyBpbiBJRSBmcm9tIGEgd2ViIHdvcmtlciwgc28ganVzdCBwcmV0ZW5kIGl0IGRvZXNuJ3QgZXhpc3QuXG4gICAgICAvLyBSZXBvcnRlZCBoZXJlOlxuICAgICAgLy8gaHR0cHM6Ly9jb25uZWN0Lm1pY3Jvc29mdC5jb20vSUUvZmVlZGJhY2svZGV0YWlscy84MzcyNDUveG1saHR0cHJlcXVlc3QtdXBsb2FkLXRocm93cy1pbnZhbGlkLWFyZ3VtZW50LXdoZW4tdXNlZC1mcm9tLXdlYi13b3JrZXItY29udGV4dFxuICAgIH1cbiAgfVxuXG4gIC8vIGluaXRpYXRlIHJlcXVlc3RcbiAgdHJ5IHtcbiAgICBpZiAodGhpcy51c2VybmFtZSAmJiB0aGlzLnBhc3N3b3JkKSB7XG4gICAgICB4aHIub3Blbih0aGlzLm1ldGhvZCwgdGhpcy51cmwsIHRydWUsIHRoaXMudXNlcm5hbWUsIHRoaXMucGFzc3dvcmQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB4aHIub3Blbih0aGlzLm1ldGhvZCwgdGhpcy51cmwsIHRydWUpO1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgLy8gc2VlICMxMTQ5XG4gICAgcmV0dXJuIHRoaXMuY2FsbGJhY2soZXJyKTtcbiAgfVxuXG4gIC8vIENPUlNcbiAgaWYgKHRoaXMuX3dpdGhDcmVkZW50aWFscykgeGhyLndpdGhDcmVkZW50aWFscyA9IHRydWU7XG5cbiAgLy8gYm9keVxuICBpZiAoIXRoaXMuX2Zvcm1EYXRhICYmICdHRVQnICE9IHRoaXMubWV0aG9kICYmICdIRUFEJyAhPSB0aGlzLm1ldGhvZCAmJiAnc3RyaW5nJyAhPSB0eXBlb2YgZGF0YSAmJiAhdGhpcy5faXNIb3N0KGRhdGEpKSB7XG4gICAgLy8gc2VyaWFsaXplIHN0dWZmXG4gICAgdmFyIGNvbnRlbnRUeXBlID0gdGhpcy5faGVhZGVyWydjb250ZW50LXR5cGUnXTtcbiAgICB2YXIgc2VyaWFsaXplID0gdGhpcy5fc2VyaWFsaXplciB8fCByZXF1ZXN0LnNlcmlhbGl6ZVtjb250ZW50VHlwZSA/IGNvbnRlbnRUeXBlLnNwbGl0KCc7JylbMF0gOiAnJ107XG4gICAgaWYgKCFzZXJpYWxpemUgJiYgaXNKU09OKGNvbnRlbnRUeXBlKSkge1xuICAgICAgc2VyaWFsaXplID0gcmVxdWVzdC5zZXJpYWxpemVbJ2FwcGxpY2F0aW9uL2pzb24nXTtcbiAgICB9XG4gICAgaWYgKHNlcmlhbGl6ZSkgZGF0YSA9IHNlcmlhbGl6ZShkYXRhKTtcbiAgfVxuXG4gIC8vIHNldCBoZWFkZXIgZmllbGRzXG4gIGZvciAodmFyIGZpZWxkIGluIHRoaXMuaGVhZGVyKSB7XG4gICAgaWYgKG51bGwgPT0gdGhpcy5oZWFkZXJbZmllbGRdKSBjb250aW51ZTtcblxuICAgIGlmICh0aGlzLmhlYWRlci5oYXNPd25Qcm9wZXJ0eShmaWVsZCkpXG4gICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihmaWVsZCwgdGhpcy5oZWFkZXJbZmllbGRdKTtcbiAgfVxuXG4gIGlmICh0aGlzLl9yZXNwb25zZVR5cGUpIHtcbiAgICB4aHIucmVzcG9uc2VUeXBlID0gdGhpcy5fcmVzcG9uc2VUeXBlO1xuICB9XG5cbiAgLy8gc2VuZCBzdHVmZlxuICB0aGlzLmVtaXQoJ3JlcXVlc3QnLCB0aGlzKTtcblxuICAvLyBJRTExIHhoci5zZW5kKHVuZGVmaW5lZCkgc2VuZHMgJ3VuZGVmaW5lZCcgc3RyaW5nIGFzIFBPU1QgcGF5bG9hZCAoaW5zdGVhZCBvZiBub3RoaW5nKVxuICAvLyBXZSBuZWVkIG51bGwgaGVyZSBpZiBkYXRhIGlzIHVuZGVmaW5lZFxuICB4aHIuc2VuZCh0eXBlb2YgZGF0YSAhPT0gJ3VuZGVmaW5lZCcgPyBkYXRhIDogbnVsbCk7XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBHRVQgYHVybGAgd2l0aCBvcHRpb25hbCBjYWxsYmFjayBgZm4ocmVzKWAuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHVybFxuICogQHBhcmFtIHtNaXhlZHxGdW5jdGlvbn0gW2RhdGFdIG9yIGZuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbZm5dXG4gKiBAcmV0dXJuIHtSZXF1ZXN0fVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5yZXF1ZXN0LmdldCA9IGZ1bmN0aW9uKHVybCwgZGF0YSwgZm4pe1xuICB2YXIgcmVxID0gcmVxdWVzdCgnR0VUJywgdXJsKTtcbiAgaWYgKCdmdW5jdGlvbicgPT0gdHlwZW9mIGRhdGEpIGZuID0gZGF0YSwgZGF0YSA9IG51bGw7XG4gIGlmIChkYXRhKSByZXEucXVlcnkoZGF0YSk7XG4gIGlmIChmbikgcmVxLmVuZChmbik7XG4gIHJldHVybiByZXE7XG59O1xuXG4vKipcbiAqIEhFQUQgYHVybGAgd2l0aCBvcHRpb25hbCBjYWxsYmFjayBgZm4ocmVzKWAuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHVybFxuICogQHBhcmFtIHtNaXhlZHxGdW5jdGlvbn0gW2RhdGFdIG9yIGZuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbZm5dXG4gKiBAcmV0dXJuIHtSZXF1ZXN0fVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5yZXF1ZXN0LmhlYWQgPSBmdW5jdGlvbih1cmwsIGRhdGEsIGZuKXtcbiAgdmFyIHJlcSA9IHJlcXVlc3QoJ0hFQUQnLCB1cmwpO1xuICBpZiAoJ2Z1bmN0aW9uJyA9PSB0eXBlb2YgZGF0YSkgZm4gPSBkYXRhLCBkYXRhID0gbnVsbDtcbiAgaWYgKGRhdGEpIHJlcS5xdWVyeShkYXRhKTtcbiAgaWYgKGZuKSByZXEuZW5kKGZuKTtcbiAgcmV0dXJuIHJlcTtcbn07XG5cbi8qKlxuICogT1BUSU9OUyBxdWVyeSB0byBgdXJsYCB3aXRoIG9wdGlvbmFsIGNhbGxiYWNrIGBmbihyZXMpYC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gdXJsXG4gKiBAcGFyYW0ge01peGVkfEZ1bmN0aW9ufSBbZGF0YV0gb3IgZm5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtmbl1cbiAqIEByZXR1cm4ge1JlcXVlc3R9XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbnJlcXVlc3Qub3B0aW9ucyA9IGZ1bmN0aW9uKHVybCwgZGF0YSwgZm4pe1xuICB2YXIgcmVxID0gcmVxdWVzdCgnT1BUSU9OUycsIHVybCk7XG4gIGlmICgnZnVuY3Rpb24nID09IHR5cGVvZiBkYXRhKSBmbiA9IGRhdGEsIGRhdGEgPSBudWxsO1xuICBpZiAoZGF0YSkgcmVxLnNlbmQoZGF0YSk7XG4gIGlmIChmbikgcmVxLmVuZChmbik7XG4gIHJldHVybiByZXE7XG59O1xuXG4vKipcbiAqIERFTEVURSBgdXJsYCB3aXRoIG9wdGlvbmFsIGBkYXRhYCBhbmQgY2FsbGJhY2sgYGZuKHJlcylgLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSB1cmxcbiAqIEBwYXJhbSB7TWl4ZWR9IFtkYXRhXVxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2ZuXVxuICogQHJldHVybiB7UmVxdWVzdH1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZnVuY3Rpb24gZGVsKHVybCwgZGF0YSwgZm4pe1xuICB2YXIgcmVxID0gcmVxdWVzdCgnREVMRVRFJywgdXJsKTtcbiAgaWYgKCdmdW5jdGlvbicgPT0gdHlwZW9mIGRhdGEpIGZuID0gZGF0YSwgZGF0YSA9IG51bGw7XG4gIGlmIChkYXRhKSByZXEuc2VuZChkYXRhKTtcbiAgaWYgKGZuKSByZXEuZW5kKGZuKTtcbiAgcmV0dXJuIHJlcTtcbn07XG5cbnJlcXVlc3RbJ2RlbCddID0gZGVsO1xucmVxdWVzdFsnZGVsZXRlJ10gPSBkZWw7XG5cbi8qKlxuICogUEFUQ0ggYHVybGAgd2l0aCBvcHRpb25hbCBgZGF0YWAgYW5kIGNhbGxiYWNrIGBmbihyZXMpYC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gdXJsXG4gKiBAcGFyYW0ge01peGVkfSBbZGF0YV1cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtmbl1cbiAqIEByZXR1cm4ge1JlcXVlc3R9XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbnJlcXVlc3QucGF0Y2ggPSBmdW5jdGlvbih1cmwsIGRhdGEsIGZuKXtcbiAgdmFyIHJlcSA9IHJlcXVlc3QoJ1BBVENIJywgdXJsKTtcbiAgaWYgKCdmdW5jdGlvbicgPT0gdHlwZW9mIGRhdGEpIGZuID0gZGF0YSwgZGF0YSA9IG51bGw7XG4gIGlmIChkYXRhKSByZXEuc2VuZChkYXRhKTtcbiAgaWYgKGZuKSByZXEuZW5kKGZuKTtcbiAgcmV0dXJuIHJlcTtcbn07XG5cbi8qKlxuICogUE9TVCBgdXJsYCB3aXRoIG9wdGlvbmFsIGBkYXRhYCBhbmQgY2FsbGJhY2sgYGZuKHJlcylgLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSB1cmxcbiAqIEBwYXJhbSB7TWl4ZWR9IFtkYXRhXVxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2ZuXVxuICogQHJldHVybiB7UmVxdWVzdH1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxucmVxdWVzdC5wb3N0ID0gZnVuY3Rpb24odXJsLCBkYXRhLCBmbil7XG4gIHZhciByZXEgPSByZXF1ZXN0KCdQT1NUJywgdXJsKTtcbiAgaWYgKCdmdW5jdGlvbicgPT0gdHlwZW9mIGRhdGEpIGZuID0gZGF0YSwgZGF0YSA9IG51bGw7XG4gIGlmIChkYXRhKSByZXEuc2VuZChkYXRhKTtcbiAgaWYgKGZuKSByZXEuZW5kKGZuKTtcbiAgcmV0dXJuIHJlcTtcbn07XG5cbi8qKlxuICogUFVUIGB1cmxgIHdpdGggb3B0aW9uYWwgYGRhdGFgIGFuZCBjYWxsYmFjayBgZm4ocmVzKWAuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHVybFxuICogQHBhcmFtIHtNaXhlZHxGdW5jdGlvbn0gW2RhdGFdIG9yIGZuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbZm5dXG4gKiBAcmV0dXJuIHtSZXF1ZXN0fVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5yZXF1ZXN0LnB1dCA9IGZ1bmN0aW9uKHVybCwgZGF0YSwgZm4pe1xuICB2YXIgcmVxID0gcmVxdWVzdCgnUFVUJywgdXJsKTtcbiAgaWYgKCdmdW5jdGlvbicgPT0gdHlwZW9mIGRhdGEpIGZuID0gZGF0YSwgZGF0YSA9IG51bGw7XG4gIGlmIChkYXRhKSByZXEuc2VuZChkYXRhKTtcbiAgaWYgKGZuKSByZXEuZW5kKGZuKTtcbiAgcmV0dXJuIHJlcTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vc3VwZXJhZ2VudC9saWIvY2xpZW50LmpzXG4vLyBtb2R1bGUgaWQgPSA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBNb2R1bGUgb2YgbWl4ZWQtaW4gZnVuY3Rpb25zIHNoYXJlZCBiZXR3ZWVuIG5vZGUgYW5kIGNsaWVudCBjb2RlXG4gKi9cbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vaXMtb2JqZWN0Jyk7XG5cbi8qKlxuICogRXhwb3NlIGBSZXF1ZXN0QmFzZWAuXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBSZXF1ZXN0QmFzZTtcblxuLyoqXG4gKiBJbml0aWFsaXplIGEgbmV3IGBSZXF1ZXN0QmFzZWAuXG4gKlxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiBSZXF1ZXN0QmFzZShvYmopIHtcbiAgaWYgKG9iaikgcmV0dXJuIG1peGluKG9iaik7XG59XG5cbi8qKlxuICogTWl4aW4gdGhlIHByb3RvdHlwZSBwcm9wZXJ0aWVzLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmpcbiAqIEByZXR1cm4ge09iamVjdH1cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIG1peGluKG9iaikge1xuICBmb3IgKHZhciBrZXkgaW4gUmVxdWVzdEJhc2UucHJvdG90eXBlKSB7XG4gICAgb2JqW2tleV0gPSBSZXF1ZXN0QmFzZS5wcm90b3R5cGVba2V5XTtcbiAgfVxuICByZXR1cm4gb2JqO1xufVxuXG4vKipcbiAqIENsZWFyIHByZXZpb3VzIHRpbWVvdXQuXG4gKlxuICogQHJldHVybiB7UmVxdWVzdH0gZm9yIGNoYWluaW5nXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cblJlcXVlc3RCYXNlLnByb3RvdHlwZS5jbGVhclRpbWVvdXQgPSBmdW5jdGlvbiBfY2xlYXJUaW1lb3V0KCl7XG4gIGNsZWFyVGltZW91dCh0aGlzLl90aW1lcik7XG4gIGNsZWFyVGltZW91dCh0aGlzLl9yZXNwb25zZVRpbWVvdXRUaW1lcik7XG4gIGRlbGV0ZSB0aGlzLl90aW1lcjtcbiAgZGVsZXRlIHRoaXMuX3Jlc3BvbnNlVGltZW91dFRpbWVyO1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogT3ZlcnJpZGUgZGVmYXVsdCByZXNwb25zZSBib2R5IHBhcnNlclxuICpcbiAqIFRoaXMgZnVuY3Rpb24gd2lsbCBiZSBjYWxsZWQgdG8gY29udmVydCBpbmNvbWluZyBkYXRhIGludG8gcmVxdWVzdC5ib2R5XG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxuUmVxdWVzdEJhc2UucHJvdG90eXBlLnBhcnNlID0gZnVuY3Rpb24gcGFyc2UoZm4pe1xuICB0aGlzLl9wYXJzZXIgPSBmbjtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIFNldCBmb3JtYXQgb2YgYmluYXJ5IHJlc3BvbnNlIGJvZHkuXG4gKiBJbiBicm93c2VyIHZhbGlkIGZvcm1hdHMgYXJlICdibG9iJyBhbmQgJ2FycmF5YnVmZmVyJyxcbiAqIHdoaWNoIHJldHVybiBCbG9iIGFuZCBBcnJheUJ1ZmZlciwgcmVzcGVjdGl2ZWx5LlxuICpcbiAqIEluIE5vZGUgYWxsIHZhbHVlcyByZXN1bHQgaW4gQnVmZmVyLlxuICpcbiAqIEV4YW1wbGVzOlxuICpcbiAqICAgICAgcmVxLmdldCgnLycpXG4gKiAgICAgICAgLnJlc3BvbnNlVHlwZSgnYmxvYicpXG4gKiAgICAgICAgLmVuZChjYWxsYmFjayk7XG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHZhbFxuICogQHJldHVybiB7UmVxdWVzdH0gZm9yIGNoYWluaW5nXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cblJlcXVlc3RCYXNlLnByb3RvdHlwZS5yZXNwb25zZVR5cGUgPSBmdW5jdGlvbih2YWwpe1xuICB0aGlzLl9yZXNwb25zZVR5cGUgPSB2YWw7XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBPdmVycmlkZSBkZWZhdWx0IHJlcXVlc3QgYm9keSBzZXJpYWxpemVyXG4gKlxuICogVGhpcyBmdW5jdGlvbiB3aWxsIGJlIGNhbGxlZCB0byBjb252ZXJ0IGRhdGEgc2V0IHZpYSAuc2VuZCBvciAuYXR0YWNoIGludG8gcGF5bG9hZCB0byBzZW5kXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxuUmVxdWVzdEJhc2UucHJvdG90eXBlLnNlcmlhbGl6ZSA9IGZ1bmN0aW9uIHNlcmlhbGl6ZShmbil7XG4gIHRoaXMuX3NlcmlhbGl6ZXIgPSBmbjtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIFNldCB0aW1lb3V0cy5cbiAqXG4gKiAtIHJlc3BvbnNlIHRpbWVvdXQgaXMgdGltZSBiZXR3ZWVuIHNlbmRpbmcgcmVxdWVzdCBhbmQgcmVjZWl2aW5nIHRoZSBmaXJzdCBieXRlIG9mIHRoZSByZXNwb25zZS4gSW5jbHVkZXMgRE5TIGFuZCBjb25uZWN0aW9uIHRpbWUuXG4gKiAtIGRlYWRsaW5lIGlzIHRoZSB0aW1lIGZyb20gc3RhcnQgb2YgdGhlIHJlcXVlc3QgdG8gcmVjZWl2aW5nIHJlc3BvbnNlIGJvZHkgaW4gZnVsbC4gSWYgdGhlIGRlYWRsaW5lIGlzIHRvbyBzaG9ydCBsYXJnZSBmaWxlcyBtYXkgbm90IGxvYWQgYXQgYWxsIG9uIHNsb3cgY29ubmVjdGlvbnMuXG4gKlxuICogVmFsdWUgb2YgMCBvciBmYWxzZSBtZWFucyBubyB0aW1lb3V0LlxuICpcbiAqIEBwYXJhbSB7TnVtYmVyfE9iamVjdH0gbXMgb3Ige3Jlc3BvbnNlLCBkZWFkbGluZX1cbiAqIEByZXR1cm4ge1JlcXVlc3R9IGZvciBjaGFpbmluZ1xuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5SZXF1ZXN0QmFzZS5wcm90b3R5cGUudGltZW91dCA9IGZ1bmN0aW9uIHRpbWVvdXQob3B0aW9ucyl7XG4gIGlmICghb3B0aW9ucyB8fCAnb2JqZWN0JyAhPT0gdHlwZW9mIG9wdGlvbnMpIHtcbiAgICB0aGlzLl90aW1lb3V0ID0gb3B0aW9ucztcbiAgICB0aGlzLl9yZXNwb25zZVRpbWVvdXQgPSAwO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgZm9yKHZhciBvcHRpb24gaW4gb3B0aW9ucykge1xuICAgIHN3aXRjaChvcHRpb24pIHtcbiAgICAgIGNhc2UgJ2RlYWRsaW5lJzpcbiAgICAgICAgdGhpcy5fdGltZW91dCA9IG9wdGlvbnMuZGVhZGxpbmU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAncmVzcG9uc2UnOlxuICAgICAgICB0aGlzLl9yZXNwb25zZVRpbWVvdXQgPSBvcHRpb25zLnJlc3BvbnNlO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGNvbnNvbGUud2FybihcIlVua25vd24gdGltZW91dCBvcHRpb25cIiwgb3B0aW9uKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIFNldCBudW1iZXIgb2YgcmV0cnkgYXR0ZW1wdHMgb24gZXJyb3IuXG4gKlxuICogRmFpbGVkIHJlcXVlc3RzIHdpbGwgYmUgcmV0cmllZCAnY291bnQnIHRpbWVzIGlmIHRpbWVvdXQgb3IgZXJyLmNvZGUgPj0gNTAwLlxuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSBjb3VudFxuICogQHJldHVybiB7UmVxdWVzdH0gZm9yIGNoYWluaW5nXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cblJlcXVlc3RCYXNlLnByb3RvdHlwZS5yZXRyeSA9IGZ1bmN0aW9uIHJldHJ5KGNvdW50KXtcbiAgLy8gRGVmYXVsdCB0byAxIGlmIG5vIGNvdW50IHBhc3NlZCBvciB0cnVlXG4gIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAwIHx8IGNvdW50ID09PSB0cnVlKSBjb3VudCA9IDE7XG4gIGlmIChjb3VudCA8PSAwKSBjb3VudCA9IDA7XG4gIHRoaXMuX21heFJldHJpZXMgPSBjb3VudDtcbiAgdGhpcy5fcmV0cmllcyA9IDA7XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBSZXRyeSByZXF1ZXN0XG4gKlxuICogQHJldHVybiB7UmVxdWVzdH0gZm9yIGNoYWluaW5nXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5SZXF1ZXN0QmFzZS5wcm90b3R5cGUuX3JldHJ5ID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMuY2xlYXJUaW1lb3V0KCk7XG5cbiAgLy8gbm9kZVxuICBpZiAodGhpcy5yZXEpIHtcbiAgICB0aGlzLnJlcSA9IG51bGw7XG4gICAgdGhpcy5yZXEgPSB0aGlzLnJlcXVlc3QoKTtcbiAgfVxuXG4gIHRoaXMuX2Fib3J0ZWQgPSBmYWxzZTtcbiAgdGhpcy50aW1lZG91dCA9IGZhbHNlO1xuXG4gIHJldHVybiB0aGlzLl9lbmQoKTtcbn07XG5cbi8qKlxuICogUHJvbWlzZSBzdXBwb3J0XG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gcmVzb2x2ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gW3JlamVjdF1cbiAqIEByZXR1cm4ge1JlcXVlc3R9XG4gKi9cblxuUmVxdWVzdEJhc2UucHJvdG90eXBlLnRoZW4gPSBmdW5jdGlvbiB0aGVuKHJlc29sdmUsIHJlamVjdCkge1xuICBpZiAoIXRoaXMuX2Z1bGxmaWxsZWRQcm9taXNlKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIGlmICh0aGlzLl9lbmRDYWxsZWQpIHtcbiAgICAgIGNvbnNvbGUud2FybihcIldhcm5pbmc6IHN1cGVyYWdlbnQgcmVxdWVzdCB3YXMgc2VudCB0d2ljZSwgYmVjYXVzZSBib3RoIC5lbmQoKSBhbmQgLnRoZW4oKSB3ZXJlIGNhbGxlZC4gTmV2ZXIgY2FsbCAuZW5kKCkgaWYgeW91IHVzZSBwcm9taXNlc1wiKTtcbiAgICB9XG4gICAgdGhpcy5fZnVsbGZpbGxlZFByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbihpbm5lclJlc29sdmUsIGlubmVyUmVqZWN0KXtcbiAgICAgIHNlbGYuZW5kKGZ1bmN0aW9uKGVyciwgcmVzKXtcbiAgICAgICAgaWYgKGVycikgaW5uZXJSZWplY3QoZXJyKTsgZWxzZSBpbm5lclJlc29sdmUocmVzKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG4gIHJldHVybiB0aGlzLl9mdWxsZmlsbGVkUHJvbWlzZS50aGVuKHJlc29sdmUsIHJlamVjdCk7XG59XG5cblJlcXVlc3RCYXNlLnByb3RvdHlwZS5jYXRjaCA9IGZ1bmN0aW9uKGNiKSB7XG4gIHJldHVybiB0aGlzLnRoZW4odW5kZWZpbmVkLCBjYik7XG59O1xuXG4vKipcbiAqIEFsbG93IGZvciBleHRlbnNpb25cbiAqL1xuXG5SZXF1ZXN0QmFzZS5wcm90b3R5cGUudXNlID0gZnVuY3Rpb24gdXNlKGZuKSB7XG4gIGZuKHRoaXMpO1xuICByZXR1cm4gdGhpcztcbn1cblxuUmVxdWVzdEJhc2UucHJvdG90eXBlLm9rID0gZnVuY3Rpb24oY2IpIHtcbiAgaWYgKCdmdW5jdGlvbicgIT09IHR5cGVvZiBjYikgdGhyb3cgRXJyb3IoXCJDYWxsYmFjayByZXF1aXJlZFwiKTtcbiAgdGhpcy5fb2tDYWxsYmFjayA9IGNiO1xuICByZXR1cm4gdGhpcztcbn07XG5cblJlcXVlc3RCYXNlLnByb3RvdHlwZS5faXNSZXNwb25zZU9LID0gZnVuY3Rpb24ocmVzKSB7XG4gIGlmICghcmVzKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKHRoaXMuX29rQ2FsbGJhY2spIHtcbiAgICByZXR1cm4gdGhpcy5fb2tDYWxsYmFjayhyZXMpO1xuICB9XG5cbiAgcmV0dXJuIHJlcy5zdGF0dXMgPj0gMjAwICYmIHJlcy5zdGF0dXMgPCAzMDA7XG59O1xuXG5cbi8qKlxuICogR2V0IHJlcXVlc3QgaGVhZGVyIGBmaWVsZGAuXG4gKiBDYXNlLWluc2Vuc2l0aXZlLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBmaWVsZFxuICogQHJldHVybiB7U3RyaW5nfVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5SZXF1ZXN0QmFzZS5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24oZmllbGQpe1xuICByZXR1cm4gdGhpcy5faGVhZGVyW2ZpZWxkLnRvTG93ZXJDYXNlKCldO1xufTtcblxuLyoqXG4gKiBHZXQgY2FzZS1pbnNlbnNpdGl2ZSBoZWFkZXIgYGZpZWxkYCB2YWx1ZS5cbiAqIFRoaXMgaXMgYSBkZXByZWNhdGVkIGludGVybmFsIEFQSS4gVXNlIGAuZ2V0KGZpZWxkKWAgaW5zdGVhZC5cbiAqXG4gKiAoZ2V0SGVhZGVyIGlzIG5vIGxvbmdlciB1c2VkIGludGVybmFsbHkgYnkgdGhlIHN1cGVyYWdlbnQgY29kZSBiYXNlKVxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBmaWVsZFxuICogQHJldHVybiB7U3RyaW5nfVxuICogQGFwaSBwcml2YXRlXG4gKiBAZGVwcmVjYXRlZFxuICovXG5cblJlcXVlc3RCYXNlLnByb3RvdHlwZS5nZXRIZWFkZXIgPSBSZXF1ZXN0QmFzZS5wcm90b3R5cGUuZ2V0O1xuXG4vKipcbiAqIFNldCBoZWFkZXIgYGZpZWxkYCB0byBgdmFsYCwgb3IgbXVsdGlwbGUgZmllbGRzIHdpdGggb25lIG9iamVjdC5cbiAqIENhc2UtaW5zZW5zaXRpdmUuXG4gKlxuICogRXhhbXBsZXM6XG4gKlxuICogICAgICByZXEuZ2V0KCcvJylcbiAqICAgICAgICAuc2V0KCdBY2NlcHQnLCAnYXBwbGljYXRpb24vanNvbicpXG4gKiAgICAgICAgLnNldCgnWC1BUEktS2V5JywgJ2Zvb2JhcicpXG4gKiAgICAgICAgLmVuZChjYWxsYmFjayk7XG4gKlxuICogICAgICByZXEuZ2V0KCcvJylcbiAqICAgICAgICAuc2V0KHsgQWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicsICdYLUFQSS1LZXknOiAnZm9vYmFyJyB9KVxuICogICAgICAgIC5lbmQoY2FsbGJhY2spO1xuICpcbiAqIEBwYXJhbSB7U3RyaW5nfE9iamVjdH0gZmllbGRcbiAqIEBwYXJhbSB7U3RyaW5nfSB2YWxcbiAqIEByZXR1cm4ge1JlcXVlc3R9IGZvciBjaGFpbmluZ1xuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5SZXF1ZXN0QmFzZS5wcm90b3R5cGUuc2V0ID0gZnVuY3Rpb24oZmllbGQsIHZhbCl7XG4gIGlmIChpc09iamVjdChmaWVsZCkpIHtcbiAgICBmb3IgKHZhciBrZXkgaW4gZmllbGQpIHtcbiAgICAgIHRoaXMuc2V0KGtleSwgZmllbGRba2V5XSk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG4gIHRoaXMuX2hlYWRlcltmaWVsZC50b0xvd2VyQ2FzZSgpXSA9IHZhbDtcbiAgdGhpcy5oZWFkZXJbZmllbGRdID0gdmFsO1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogUmVtb3ZlIGhlYWRlciBgZmllbGRgLlxuICogQ2FzZS1pbnNlbnNpdGl2ZS5cbiAqXG4gKiBFeGFtcGxlOlxuICpcbiAqICAgICAgcmVxLmdldCgnLycpXG4gKiAgICAgICAgLnVuc2V0KCdVc2VyLUFnZW50JylcbiAqICAgICAgICAuZW5kKGNhbGxiYWNrKTtcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gZmllbGRcbiAqL1xuUmVxdWVzdEJhc2UucHJvdG90eXBlLnVuc2V0ID0gZnVuY3Rpb24oZmllbGQpe1xuICBkZWxldGUgdGhpcy5faGVhZGVyW2ZpZWxkLnRvTG93ZXJDYXNlKCldO1xuICBkZWxldGUgdGhpcy5oZWFkZXJbZmllbGRdO1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogV3JpdGUgdGhlIGZpZWxkIGBuYW1lYCBhbmQgYHZhbGAsIG9yIG11bHRpcGxlIGZpZWxkcyB3aXRoIG9uZSBvYmplY3RcbiAqIGZvciBcIm11bHRpcGFydC9mb3JtLWRhdGFcIiByZXF1ZXN0IGJvZGllcy5cbiAqXG4gKiBgYGAganNcbiAqIHJlcXVlc3QucG9zdCgnL3VwbG9hZCcpXG4gKiAgIC5maWVsZCgnZm9vJywgJ2JhcicpXG4gKiAgIC5lbmQoY2FsbGJhY2spO1xuICpcbiAqIHJlcXVlc3QucG9zdCgnL3VwbG9hZCcpXG4gKiAgIC5maWVsZCh7IGZvbzogJ2JhcicsIGJhejogJ3F1eCcgfSlcbiAqICAgLmVuZChjYWxsYmFjayk7XG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ3xPYmplY3R9IG5hbWVcbiAqIEBwYXJhbSB7U3RyaW5nfEJsb2J8RmlsZXxCdWZmZXJ8ZnMuUmVhZFN0cmVhbX0gdmFsXG4gKiBAcmV0dXJuIHtSZXF1ZXN0fSBmb3IgY2hhaW5pbmdcbiAqIEBhcGkgcHVibGljXG4gKi9cblJlcXVlc3RCYXNlLnByb3RvdHlwZS5maWVsZCA9IGZ1bmN0aW9uKG5hbWUsIHZhbCkge1xuXG4gIC8vIG5hbWUgc2hvdWxkIGJlIGVpdGhlciBhIHN0cmluZyBvciBhbiBvYmplY3QuXG4gIGlmIChudWxsID09PSBuYW1lIHx8ICB1bmRlZmluZWQgPT09IG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJy5maWVsZChuYW1lLCB2YWwpIG5hbWUgY2FuIG5vdCBiZSBlbXB0eScpO1xuICB9XG5cbiAgaWYgKHRoaXMuX2RhdGEpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiLmZpZWxkKCkgY2FuJ3QgYmUgdXNlZCBpZiAuc2VuZCgpIGlzIHVzZWQuIFBsZWFzZSB1c2Ugb25seSAuc2VuZCgpIG9yIG9ubHkgLmZpZWxkKCkgJiAuYXR0YWNoKClcIik7XG4gIH1cblxuICBpZiAoaXNPYmplY3QobmFtZSkpIHtcbiAgICBmb3IgKHZhciBrZXkgaW4gbmFtZSkge1xuICAgICAgdGhpcy5maWVsZChrZXksIG5hbWVba2V5XSk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgaWYgKEFycmF5LmlzQXJyYXkodmFsKSkge1xuICAgIGZvciAodmFyIGkgaW4gdmFsKSB7XG4gICAgICB0aGlzLmZpZWxkKG5hbWUsIHZhbFtpXSk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLy8gdmFsIHNob3VsZCBiZSBkZWZpbmVkIG5vd1xuICBpZiAobnVsbCA9PT0gdmFsIHx8IHVuZGVmaW5lZCA9PT0gdmFsKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCcuZmllbGQobmFtZSwgdmFsKSB2YWwgY2FuIG5vdCBiZSBlbXB0eScpO1xuICB9XG4gIGlmICgnYm9vbGVhbicgPT09IHR5cGVvZiB2YWwpIHtcbiAgICB2YWwgPSAnJyArIHZhbDtcbiAgfVxuICB0aGlzLl9nZXRGb3JtRGF0YSgpLmFwcGVuZChuYW1lLCB2YWwpO1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogQWJvcnQgdGhlIHJlcXVlc3QsIGFuZCBjbGVhciBwb3RlbnRpYWwgdGltZW91dC5cbiAqXG4gKiBAcmV0dXJuIHtSZXF1ZXN0fVxuICogQGFwaSBwdWJsaWNcbiAqL1xuUmVxdWVzdEJhc2UucHJvdG90eXBlLmFib3J0ID0gZnVuY3Rpb24oKXtcbiAgaWYgKHRoaXMuX2Fib3J0ZWQpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuICB0aGlzLl9hYm9ydGVkID0gdHJ1ZTtcbiAgdGhpcy54aHIgJiYgdGhpcy54aHIuYWJvcnQoKTsgLy8gYnJvd3NlclxuICB0aGlzLnJlcSAmJiB0aGlzLnJlcS5hYm9ydCgpOyAvLyBub2RlXG4gIHRoaXMuY2xlYXJUaW1lb3V0KCk7XG4gIHRoaXMuZW1pdCgnYWJvcnQnKTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIEVuYWJsZSB0cmFuc21pc3Npb24gb2YgY29va2llcyB3aXRoIHgtZG9tYWluIHJlcXVlc3RzLlxuICpcbiAqIE5vdGUgdGhhdCBmb3IgdGhpcyB0byB3b3JrIHRoZSBvcmlnaW4gbXVzdCBub3QgYmVcbiAqIHVzaW5nIFwiQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luXCIgd2l0aCBhIHdpbGRjYXJkLFxuICogYW5kIGFsc28gbXVzdCBzZXQgXCJBY2Nlc3MtQ29udHJvbC1BbGxvdy1DcmVkZW50aWFsc1wiXG4gKiB0byBcInRydWVcIi5cbiAqXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cblJlcXVlc3RCYXNlLnByb3RvdHlwZS53aXRoQ3JlZGVudGlhbHMgPSBmdW5jdGlvbihvbil7XG4gIC8vIFRoaXMgaXMgYnJvd3Nlci1vbmx5IGZ1bmN0aW9uYWxpdHkuIE5vZGUgc2lkZSBpcyBuby1vcC5cbiAgaWYob249PXVuZGVmaW5lZCkgb24gPSB0cnVlO1xuICB0aGlzLl93aXRoQ3JlZGVudGlhbHMgPSBvbjtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIFNldCB0aGUgbWF4IHJlZGlyZWN0cyB0byBgbmAuIERvZXMgbm90aW5nIGluIGJyb3dzZXIgWEhSIGltcGxlbWVudGF0aW9uLlxuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSBuXG4gKiBAcmV0dXJuIHtSZXF1ZXN0fSBmb3IgY2hhaW5pbmdcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuUmVxdWVzdEJhc2UucHJvdG90eXBlLnJlZGlyZWN0cyA9IGZ1bmN0aW9uKG4pe1xuICB0aGlzLl9tYXhSZWRpcmVjdHMgPSBuO1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogTWF4aW11bSBzaXplIG9mIGJ1ZmZlcmVkIHJlc3BvbnNlIGJvZHksIGluIGJ5dGVzLiBDb3VudHMgdW5jb21wcmVzc2VkIHNpemUuXG4gKiBEZWZhdWx0IDIwME1CLlxuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSBuXG4gKiBAcmV0dXJuIHtSZXF1ZXN0fSBmb3IgY2hhaW5pbmdcbiAqL1xuUmVxdWVzdEJhc2UucHJvdG90eXBlLm1heFJlc3BvbnNlU2l6ZSA9IGZ1bmN0aW9uKG4pe1xuICBpZiAoJ251bWJlcicgIT09IHR5cGVvZiBuKSB7XG4gICAgdGhyb3cgVHlwZUVycm9yKFwiSW52YWxpZCBhcmd1bWVudFwiKTtcbiAgfVxuICB0aGlzLl9tYXhSZXNwb25zZVNpemUgPSBuO1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogQ29udmVydCB0byBhIHBsYWluIGphdmFzY3JpcHQgb2JqZWN0IChub3QgSlNPTiBzdHJpbmcpIG9mIHNjYWxhciBwcm9wZXJ0aWVzLlxuICogTm90ZSBhcyB0aGlzIG1ldGhvZCBpcyBkZXNpZ25lZCB0byByZXR1cm4gYSB1c2VmdWwgbm9uLXRoaXMgdmFsdWUsXG4gKiBpdCBjYW5ub3QgYmUgY2hhaW5lZC5cbiAqXG4gKiBAcmV0dXJuIHtPYmplY3R9IGRlc2NyaWJpbmcgbWV0aG9kLCB1cmwsIGFuZCBkYXRhIG9mIHRoaXMgcmVxdWVzdFxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5SZXF1ZXN0QmFzZS5wcm90b3R5cGUudG9KU09OID0gZnVuY3Rpb24oKXtcbiAgcmV0dXJuIHtcbiAgICBtZXRob2Q6IHRoaXMubWV0aG9kLFxuICAgIHVybDogdGhpcy51cmwsXG4gICAgZGF0YTogdGhpcy5fZGF0YSxcbiAgICBoZWFkZXJzOiB0aGlzLl9oZWFkZXJcbiAgfTtcbn07XG5cblxuLyoqXG4gKiBTZW5kIGBkYXRhYCBhcyB0aGUgcmVxdWVzdCBib2R5LCBkZWZhdWx0aW5nIHRoZSBgLnR5cGUoKWAgdG8gXCJqc29uXCIgd2hlblxuICogYW4gb2JqZWN0IGlzIGdpdmVuLlxuICpcbiAqIEV4YW1wbGVzOlxuICpcbiAqICAgICAgIC8vIG1hbnVhbCBqc29uXG4gKiAgICAgICByZXF1ZXN0LnBvc3QoJy91c2VyJylcbiAqICAgICAgICAgLnR5cGUoJ2pzb24nKVxuICogICAgICAgICAuc2VuZCgne1wibmFtZVwiOlwidGpcIn0nKVxuICogICAgICAgICAuZW5kKGNhbGxiYWNrKVxuICpcbiAqICAgICAgIC8vIGF1dG8ganNvblxuICogICAgICAgcmVxdWVzdC5wb3N0KCcvdXNlcicpXG4gKiAgICAgICAgIC5zZW5kKHsgbmFtZTogJ3RqJyB9KVxuICogICAgICAgICAuZW5kKGNhbGxiYWNrKVxuICpcbiAqICAgICAgIC8vIG1hbnVhbCB4LXd3dy1mb3JtLXVybGVuY29kZWRcbiAqICAgICAgIHJlcXVlc3QucG9zdCgnL3VzZXInKVxuICogICAgICAgICAudHlwZSgnZm9ybScpXG4gKiAgICAgICAgIC5zZW5kKCduYW1lPXRqJylcbiAqICAgICAgICAgLmVuZChjYWxsYmFjaylcbiAqXG4gKiAgICAgICAvLyBhdXRvIHgtd3d3LWZvcm0tdXJsZW5jb2RlZFxuICogICAgICAgcmVxdWVzdC5wb3N0KCcvdXNlcicpXG4gKiAgICAgICAgIC50eXBlKCdmb3JtJylcbiAqICAgICAgICAgLnNlbmQoeyBuYW1lOiAndGonIH0pXG4gKiAgICAgICAgIC5lbmQoY2FsbGJhY2spXG4gKlxuICogICAgICAgLy8gZGVmYXVsdHMgdG8geC13d3ctZm9ybS11cmxlbmNvZGVkXG4gKiAgICAgIHJlcXVlc3QucG9zdCgnL3VzZXInKVxuICogICAgICAgIC5zZW5kKCduYW1lPXRvYmknKVxuICogICAgICAgIC5zZW5kKCdzcGVjaWVzPWZlcnJldCcpXG4gKiAgICAgICAgLmVuZChjYWxsYmFjaylcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ3xPYmplY3R9IGRhdGFcbiAqIEByZXR1cm4ge1JlcXVlc3R9IGZvciBjaGFpbmluZ1xuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5SZXF1ZXN0QmFzZS5wcm90b3R5cGUuc2VuZCA9IGZ1bmN0aW9uKGRhdGEpe1xuICB2YXIgaXNPYmogPSBpc09iamVjdChkYXRhKTtcbiAgdmFyIHR5cGUgPSB0aGlzLl9oZWFkZXJbJ2NvbnRlbnQtdHlwZSddO1xuXG4gIGlmICh0aGlzLl9mb3JtRGF0YSkge1xuICAgIGNvbnNvbGUuZXJyb3IoXCIuc2VuZCgpIGNhbid0IGJlIHVzZWQgaWYgLmF0dGFjaCgpIG9yIC5maWVsZCgpIGlzIHVzZWQuIFBsZWFzZSB1c2Ugb25seSAuc2VuZCgpIG9yIG9ubHkgLmZpZWxkKCkgJiAuYXR0YWNoKClcIik7XG4gIH1cblxuICBpZiAoaXNPYmogJiYgIXRoaXMuX2RhdGEpIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShkYXRhKSkge1xuICAgICAgdGhpcy5fZGF0YSA9IFtdO1xuICAgIH0gZWxzZSBpZiAoIXRoaXMuX2lzSG9zdChkYXRhKSkge1xuICAgICAgdGhpcy5fZGF0YSA9IHt9O1xuICAgIH1cbiAgfSBlbHNlIGlmIChkYXRhICYmIHRoaXMuX2RhdGEgJiYgdGhpcy5faXNIb3N0KHRoaXMuX2RhdGEpKSB7XG4gICAgdGhyb3cgRXJyb3IoXCJDYW4ndCBtZXJnZSB0aGVzZSBzZW5kIGNhbGxzXCIpO1xuICB9XG5cbiAgLy8gbWVyZ2VcbiAgaWYgKGlzT2JqICYmIGlzT2JqZWN0KHRoaXMuX2RhdGEpKSB7XG4gICAgZm9yICh2YXIga2V5IGluIGRhdGEpIHtcbiAgICAgIHRoaXMuX2RhdGFba2V5XSA9IGRhdGFba2V5XTtcbiAgICB9XG4gIH0gZWxzZSBpZiAoJ3N0cmluZycgPT0gdHlwZW9mIGRhdGEpIHtcbiAgICAvLyBkZWZhdWx0IHRvIHgtd3d3LWZvcm0tdXJsZW5jb2RlZFxuICAgIGlmICghdHlwZSkgdGhpcy50eXBlKCdmb3JtJyk7XG4gICAgdHlwZSA9IHRoaXMuX2hlYWRlclsnY29udGVudC10eXBlJ107XG4gICAgaWYgKCdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnID09IHR5cGUpIHtcbiAgICAgIHRoaXMuX2RhdGEgPSB0aGlzLl9kYXRhXG4gICAgICAgID8gdGhpcy5fZGF0YSArICcmJyArIGRhdGFcbiAgICAgICAgOiBkYXRhO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9kYXRhID0gKHRoaXMuX2RhdGEgfHwgJycpICsgZGF0YTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgdGhpcy5fZGF0YSA9IGRhdGE7XG4gIH1cblxuICBpZiAoIWlzT2JqIHx8IHRoaXMuX2lzSG9zdChkYXRhKSkge1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLy8gZGVmYXVsdCB0byBqc29uXG4gIGlmICghdHlwZSkgdGhpcy50eXBlKCdqc29uJyk7XG4gIHJldHVybiB0aGlzO1xufTtcblxuXG4vKipcbiAqIFNvcnQgYHF1ZXJ5c3RyaW5nYCBieSB0aGUgc29ydCBmdW5jdGlvblxuICpcbiAqXG4gKiBFeGFtcGxlczpcbiAqXG4gKiAgICAgICAvLyBkZWZhdWx0IG9yZGVyXG4gKiAgICAgICByZXF1ZXN0LmdldCgnL3VzZXInKVxuICogICAgICAgICAucXVlcnkoJ25hbWU9TmljaycpXG4gKiAgICAgICAgIC5xdWVyeSgnc2VhcmNoPU1hbm55JylcbiAqICAgICAgICAgLnNvcnRRdWVyeSgpXG4gKiAgICAgICAgIC5lbmQoY2FsbGJhY2spXG4gKlxuICogICAgICAgLy8gY3VzdG9taXplZCBzb3J0IGZ1bmN0aW9uXG4gKiAgICAgICByZXF1ZXN0LmdldCgnL3VzZXInKVxuICogICAgICAgICAucXVlcnkoJ25hbWU9TmljaycpXG4gKiAgICAgICAgIC5xdWVyeSgnc2VhcmNoPU1hbm55JylcbiAqICAgICAgICAgLnNvcnRRdWVyeShmdW5jdGlvbihhLCBiKXtcbiAqICAgICAgICAgICByZXR1cm4gYS5sZW5ndGggLSBiLmxlbmd0aDtcbiAqICAgICAgICAgfSlcbiAqICAgICAgICAgLmVuZChjYWxsYmFjaylcbiAqXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gc29ydFxuICogQHJldHVybiB7UmVxdWVzdH0gZm9yIGNoYWluaW5nXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cblJlcXVlc3RCYXNlLnByb3RvdHlwZS5zb3J0UXVlcnkgPSBmdW5jdGlvbihzb3J0KSB7XG4gIC8vIF9zb3J0IGRlZmF1bHQgdG8gdHJ1ZSBidXQgb3RoZXJ3aXNlIGNhbiBiZSBhIGZ1bmN0aW9uIG9yIGJvb2xlYW5cbiAgdGhpcy5fc29ydCA9IHR5cGVvZiBzb3J0ID09PSAndW5kZWZpbmVkJyA/IHRydWUgOiBzb3J0O1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogQ29tcG9zZSBxdWVyeXN0cmluZyB0byBhcHBlbmQgdG8gcmVxLnVybFxuICpcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5SZXF1ZXN0QmFzZS5wcm90b3R5cGUuX2ZpbmFsaXplUXVlcnlTdHJpbmcgPSBmdW5jdGlvbigpe1xuICB2YXIgcXVlcnkgPSB0aGlzLl9xdWVyeS5qb2luKCcmJyk7XG4gIGlmIChxdWVyeSkge1xuICAgIHRoaXMudXJsICs9ICh0aGlzLnVybC5pbmRleE9mKCc/JykgPj0gMCA/ICcmJyA6ICc/JykgKyBxdWVyeTtcbiAgfVxuICB0aGlzLl9xdWVyeS5sZW5ndGggPSAwOyAvLyBNYWtlcyB0aGUgY2FsbCBpZGVtcG90ZW50XG5cbiAgaWYgKHRoaXMuX3NvcnQpIHtcbiAgICB2YXIgaW5kZXggPSB0aGlzLnVybC5pbmRleE9mKCc/Jyk7XG4gICAgaWYgKGluZGV4ID49IDApIHtcbiAgICAgIHZhciBxdWVyeUFyciA9IHRoaXMudXJsLnN1YnN0cmluZyhpbmRleCArIDEpLnNwbGl0KCcmJyk7XG4gICAgICBpZiAoJ2Z1bmN0aW9uJyA9PT0gdHlwZW9mIHRoaXMuX3NvcnQpIHtcbiAgICAgICAgcXVlcnlBcnIuc29ydCh0aGlzLl9zb3J0KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXJ5QXJyLnNvcnQoKTtcbiAgICAgIH1cbiAgICAgIHRoaXMudXJsID0gdGhpcy51cmwuc3Vic3RyaW5nKDAsIGluZGV4KSArICc/JyArIHF1ZXJ5QXJyLmpvaW4oJyYnKTtcbiAgICB9XG4gIH1cbn07XG5cbi8vIEZvciBiYWNrd2FyZHMgY29tcGF0IG9ubHlcblJlcXVlc3RCYXNlLnByb3RvdHlwZS5fYXBwZW5kUXVlcnlTdHJpbmcgPSBmdW5jdGlvbigpIHtjb25zb2xlLnRyYWNlKFwiVW5zdXBwb3J0ZWRcIik7fVxuXG4vKipcbiAqIEludm9rZSBjYWxsYmFjayB3aXRoIHRpbWVvdXQgZXJyb3IuXG4gKlxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuUmVxdWVzdEJhc2UucHJvdG90eXBlLl90aW1lb3V0RXJyb3IgPSBmdW5jdGlvbihyZWFzb24sIHRpbWVvdXQsIGVycm5vKXtcbiAgaWYgKHRoaXMuX2Fib3J0ZWQpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgdmFyIGVyciA9IG5ldyBFcnJvcihyZWFzb24gKyB0aW1lb3V0ICsgJ21zIGV4Y2VlZGVkJyk7XG4gIGVyci50aW1lb3V0ID0gdGltZW91dDtcbiAgZXJyLmNvZGUgPSAnRUNPTk5BQk9SVEVEJztcbiAgZXJyLmVycm5vID0gZXJybm87XG4gIHRoaXMudGltZWRvdXQgPSB0cnVlO1xuICB0aGlzLmFib3J0KCk7XG4gIHRoaXMuY2FsbGJhY2soZXJyKTtcbn07XG5cblJlcXVlc3RCYXNlLnByb3RvdHlwZS5fc2V0VGltZW91dHMgPSBmdW5jdGlvbigpIHtcbiAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gIC8vIGRlYWRsaW5lXG4gIGlmICh0aGlzLl90aW1lb3V0ICYmICF0aGlzLl90aW1lcikge1xuICAgIHRoaXMuX3RpbWVyID0gc2V0VGltZW91dChmdW5jdGlvbigpe1xuICAgICAgc2VsZi5fdGltZW91dEVycm9yKCdUaW1lb3V0IG9mICcsIHNlbGYuX3RpbWVvdXQsICdFVElNRScpO1xuICAgIH0sIHRoaXMuX3RpbWVvdXQpO1xuICB9XG4gIC8vIHJlc3BvbnNlIHRpbWVvdXRcbiAgaWYgKHRoaXMuX3Jlc3BvbnNlVGltZW91dCAmJiAhdGhpcy5fcmVzcG9uc2VUaW1lb3V0VGltZXIpIHtcbiAgICB0aGlzLl9yZXNwb25zZVRpbWVvdXRUaW1lciA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgICAgIHNlbGYuX3RpbWVvdXRFcnJvcignUmVzcG9uc2UgdGltZW91dCBvZiAnLCBzZWxmLl9yZXNwb25zZVRpbWVvdXQsICdFVElNRURPVVQnKTtcbiAgICB9LCB0aGlzLl9yZXNwb25zZVRpbWVvdXQpO1xuICB9XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vc3VwZXJhZ2VudC9saWIvcmVxdWVzdC1iYXNlLmpzXG4vLyBtb2R1bGUgaWQgPSA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBNb2R1bGUgZGVwZW5kZW5jaWVzLlxuICovXG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vdXRpbHMnKTtcblxuLyoqXG4gKiBFeHBvc2UgYFJlc3BvbnNlQmFzZWAuXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBSZXNwb25zZUJhc2U7XG5cbi8qKlxuICogSW5pdGlhbGl6ZSBhIG5ldyBgUmVzcG9uc2VCYXNlYC5cbiAqXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIFJlc3BvbnNlQmFzZShvYmopIHtcbiAgaWYgKG9iaikgcmV0dXJuIG1peGluKG9iaik7XG59XG5cbi8qKlxuICogTWl4aW4gdGhlIHByb3RvdHlwZSBwcm9wZXJ0aWVzLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmpcbiAqIEByZXR1cm4ge09iamVjdH1cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIG1peGluKG9iaikge1xuICBmb3IgKHZhciBrZXkgaW4gUmVzcG9uc2VCYXNlLnByb3RvdHlwZSkge1xuICAgIG9ialtrZXldID0gUmVzcG9uc2VCYXNlLnByb3RvdHlwZVtrZXldO1xuICB9XG4gIHJldHVybiBvYmo7XG59XG5cbi8qKlxuICogR2V0IGNhc2UtaW5zZW5zaXRpdmUgYGZpZWxkYCB2YWx1ZS5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gZmllbGRcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqIEBhcGkgcHVibGljXG4gKi9cblxuUmVzcG9uc2VCYXNlLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbihmaWVsZCl7XG4gICAgcmV0dXJuIHRoaXMuaGVhZGVyW2ZpZWxkLnRvTG93ZXJDYXNlKCldO1xufTtcblxuLyoqXG4gKiBTZXQgaGVhZGVyIHJlbGF0ZWQgcHJvcGVydGllczpcbiAqXG4gKiAgIC0gYC50eXBlYCB0aGUgY29udGVudCB0eXBlIHdpdGhvdXQgcGFyYW1zXG4gKlxuICogQSByZXNwb25zZSBvZiBcIkNvbnRlbnQtVHlwZTogdGV4dC9wbGFpbjsgY2hhcnNldD11dGYtOFwiXG4gKiB3aWxsIHByb3ZpZGUgeW91IHdpdGggYSBgLnR5cGVgIG9mIFwidGV4dC9wbGFpblwiLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBoZWFkZXJcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cblJlc3BvbnNlQmFzZS5wcm90b3R5cGUuX3NldEhlYWRlclByb3BlcnRpZXMgPSBmdW5jdGlvbihoZWFkZXIpe1xuICAgIC8vIFRPRE86IG1vYXIhXG4gICAgLy8gVE9ETzogbWFrZSB0aGlzIGEgdXRpbFxuXG4gICAgLy8gY29udGVudC10eXBlXG4gICAgdmFyIGN0ID0gaGVhZGVyWydjb250ZW50LXR5cGUnXSB8fCAnJztcbiAgICB0aGlzLnR5cGUgPSB1dGlscy50eXBlKGN0KTtcblxuICAgIC8vIHBhcmFtc1xuICAgIHZhciBwYXJhbXMgPSB1dGlscy5wYXJhbXMoY3QpO1xuICAgIGZvciAodmFyIGtleSBpbiBwYXJhbXMpIHRoaXNba2V5XSA9IHBhcmFtc1trZXldO1xuXG4gICAgdGhpcy5saW5rcyA9IHt9O1xuXG4gICAgLy8gbGlua3NcbiAgICB0cnkge1xuICAgICAgICBpZiAoaGVhZGVyLmxpbmspIHtcbiAgICAgICAgICAgIHRoaXMubGlua3MgPSB1dGlscy5wYXJzZUxpbmtzKGhlYWRlci5saW5rKTtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAvLyBpZ25vcmVcbiAgICB9XG59O1xuXG4vKipcbiAqIFNldCBmbGFncyBzdWNoIGFzIGAub2tgIGJhc2VkIG9uIGBzdGF0dXNgLlxuICpcbiAqIEZvciBleGFtcGxlIGEgMnh4IHJlc3BvbnNlIHdpbGwgZ2l2ZSB5b3UgYSBgLm9rYCBvZiBfX3RydWVfX1xuICogd2hlcmVhcyA1eHggd2lsbCBiZSBfX2ZhbHNlX18gYW5kIGAuZXJyb3JgIHdpbGwgYmUgX190cnVlX18uIFRoZVxuICogYC5jbGllbnRFcnJvcmAgYW5kIGAuc2VydmVyRXJyb3JgIGFyZSBhbHNvIGF2YWlsYWJsZSB0byBiZSBtb3JlXG4gKiBzcGVjaWZpYywgYW5kIGAuc3RhdHVzVHlwZWAgaXMgdGhlIGNsYXNzIG9mIGVycm9yIHJhbmdpbmcgZnJvbSAxLi41XG4gKiBzb21ldGltZXMgdXNlZnVsIGZvciBtYXBwaW5nIHJlc3BvbmQgY29sb3JzIGV0Yy5cbiAqXG4gKiBcInN1Z2FyXCIgcHJvcGVydGllcyBhcmUgYWxzbyBkZWZpbmVkIGZvciBjb21tb24gY2FzZXMuIEN1cnJlbnRseSBwcm92aWRpbmc6XG4gKlxuICogICAtIC5ub0NvbnRlbnRcbiAqICAgLSAuYmFkUmVxdWVzdFxuICogICAtIC51bmF1dGhvcml6ZWRcbiAqICAgLSAubm90QWNjZXB0YWJsZVxuICogICAtIC5ub3RGb3VuZFxuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSBzdGF0dXNcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cblJlc3BvbnNlQmFzZS5wcm90b3R5cGUuX3NldFN0YXR1c1Byb3BlcnRpZXMgPSBmdW5jdGlvbihzdGF0dXMpe1xuICAgIHZhciB0eXBlID0gc3RhdHVzIC8gMTAwIHwgMDtcblxuICAgIC8vIHN0YXR1cyAvIGNsYXNzXG4gICAgdGhpcy5zdGF0dXMgPSB0aGlzLnN0YXR1c0NvZGUgPSBzdGF0dXM7XG4gICAgdGhpcy5zdGF0dXNUeXBlID0gdHlwZTtcblxuICAgIC8vIGJhc2ljc1xuICAgIHRoaXMuaW5mbyA9IDEgPT0gdHlwZTtcbiAgICB0aGlzLm9rID0gMiA9PSB0eXBlO1xuICAgIHRoaXMucmVkaXJlY3QgPSAzID09IHR5cGU7XG4gICAgdGhpcy5jbGllbnRFcnJvciA9IDQgPT0gdHlwZTtcbiAgICB0aGlzLnNlcnZlckVycm9yID0gNSA9PSB0eXBlO1xuICAgIHRoaXMuZXJyb3IgPSAoNCA9PSB0eXBlIHx8IDUgPT0gdHlwZSlcbiAgICAgICAgPyB0aGlzLnRvRXJyb3IoKVxuICAgICAgICA6IGZhbHNlO1xuXG4gICAgLy8gc3VnYXJcbiAgICB0aGlzLmFjY2VwdGVkID0gMjAyID09IHN0YXR1cztcbiAgICB0aGlzLm5vQ29udGVudCA9IDIwNCA9PSBzdGF0dXM7XG4gICAgdGhpcy5iYWRSZXF1ZXN0ID0gNDAwID09IHN0YXR1cztcbiAgICB0aGlzLnVuYXV0aG9yaXplZCA9IDQwMSA9PSBzdGF0dXM7XG4gICAgdGhpcy5ub3RBY2NlcHRhYmxlID0gNDA2ID09IHN0YXR1cztcbiAgICB0aGlzLmZvcmJpZGRlbiA9IDQwMyA9PSBzdGF0dXM7XG4gICAgdGhpcy5ub3RGb3VuZCA9IDQwNCA9PSBzdGF0dXM7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3N1cGVyYWdlbnQvbGliL3Jlc3BvbnNlLWJhc2UuanNcbi8vIG1vZHVsZSBpZCA9IDEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxudmFyIEVSUk9SX0NPREVTID0gW1xuICAnRUNPTk5SRVNFVCcsXG4gICdFVElNRURPVVQnLFxuICAnRUFERFJJTkZPJyxcbiAgJ0VTT0NLRVRUSU1FRE9VVCdcbl07XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgcmVxdWVzdCBzaG91bGQgYmUgcmV0cmllZC5cbiAqIChCb3Jyb3dlZCBmcm9tIHNlZ21lbnRpby9zdXBlcmFnZW50LXJldHJ5KVxuICpcbiAqIEBwYXJhbSB7RXJyb3J9IGVyclxuICogQHBhcmFtIHtSZXNwb25zZX0gW3Jlc11cbiAqIEByZXR1cm5zIHtCb29sZWFufVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHNob3VsZFJldHJ5KGVyciwgcmVzKSB7XG4gIGlmIChlcnIgJiYgZXJyLmNvZGUgJiYgfkVSUk9SX0NPREVTLmluZGV4T2YoZXJyLmNvZGUpKSByZXR1cm4gdHJ1ZTtcbiAgaWYgKHJlcyAmJiByZXMuc3RhdHVzICYmIHJlcy5zdGF0dXMgPj0gNTAwKSByZXR1cm4gdHJ1ZTtcbiAgLy8gU3VwZXJhZ2VudCB0aW1lb3V0XG4gIGlmIChlcnIgJiYgJ3RpbWVvdXQnIGluIGVyciAmJiBlcnIuY29kZSA9PSAnRUNPTk5BQk9SVEVEJykgcmV0dXJuIHRydWU7XG4gIGlmIChlcnIgJiYgJ2Nyb3NzRG9tYWluJyBpbiBlcnIpIHJldHVybiB0cnVlO1xuICByZXR1cm4gZmFsc2U7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3N1cGVyYWdlbnQvbGliL3Nob3VsZC1yZXRyeS5qc1xuLy8gbW9kdWxlIGlkID0gMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIFJldHVybiB0aGUgbWltZSB0eXBlIGZvciB0aGUgZ2l2ZW4gYHN0cmAuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0clxuICogQHJldHVybiB7U3RyaW5nfVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZXhwb3J0cy50eXBlID0gZnVuY3Rpb24oc3RyKXtcbiAgcmV0dXJuIHN0ci5zcGxpdCgvICo7ICovKS5zaGlmdCgpO1xufTtcblxuLyoqXG4gKiBSZXR1cm4gaGVhZGVyIGZpZWxkIHBhcmFtZXRlcnMuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0clxuICogQHJldHVybiB7T2JqZWN0fVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZXhwb3J0cy5wYXJhbXMgPSBmdW5jdGlvbihzdHIpe1xuICByZXR1cm4gc3RyLnNwbGl0KC8gKjsgKi8pLnJlZHVjZShmdW5jdGlvbihvYmosIHN0cil7XG4gICAgdmFyIHBhcnRzID0gc3RyLnNwbGl0KC8gKj0gKi8pO1xuICAgIHZhciBrZXkgPSBwYXJ0cy5zaGlmdCgpO1xuICAgIHZhciB2YWwgPSBwYXJ0cy5zaGlmdCgpO1xuXG4gICAgaWYgKGtleSAmJiB2YWwpIG9ialtrZXldID0gdmFsO1xuICAgIHJldHVybiBvYmo7XG4gIH0sIHt9KTtcbn07XG5cbi8qKlxuICogUGFyc2UgTGluayBoZWFkZXIgZmllbGRzLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHJcbiAqIEByZXR1cm4ge09iamVjdH1cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmV4cG9ydHMucGFyc2VMaW5rcyA9IGZ1bmN0aW9uKHN0cil7XG4gIHJldHVybiBzdHIuc3BsaXQoLyAqLCAqLykucmVkdWNlKGZ1bmN0aW9uKG9iaiwgc3RyKXtcbiAgICB2YXIgcGFydHMgPSBzdHIuc3BsaXQoLyAqOyAqLyk7XG4gICAgdmFyIHVybCA9IHBhcnRzWzBdLnNsaWNlKDEsIC0xKTtcbiAgICB2YXIgcmVsID0gcGFydHNbMV0uc3BsaXQoLyAqPSAqLylbMV0uc2xpY2UoMSwgLTEpO1xuICAgIG9ialtyZWxdID0gdXJsO1xuICAgIHJldHVybiBvYmo7XG4gIH0sIHt9KTtcbn07XG5cbi8qKlxuICogU3RyaXAgY29udGVudCByZWxhdGVkIGZpZWxkcyBmcm9tIGBoZWFkZXJgLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBoZWFkZXJcbiAqIEByZXR1cm4ge09iamVjdH0gaGVhZGVyXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5leHBvcnRzLmNsZWFuSGVhZGVyID0gZnVuY3Rpb24oaGVhZGVyLCBzaG91bGRTdHJpcENvb2tpZSl7XG4gIGRlbGV0ZSBoZWFkZXJbJ2NvbnRlbnQtdHlwZSddO1xuICBkZWxldGUgaGVhZGVyWydjb250ZW50LWxlbmd0aCddO1xuICBkZWxldGUgaGVhZGVyWyd0cmFuc2Zlci1lbmNvZGluZyddO1xuICBkZWxldGUgaGVhZGVyWydob3N0J107XG4gIGlmIChzaG91bGRTdHJpcENvb2tpZSkge1xuICAgIGRlbGV0ZSBoZWFkZXJbJ2Nvb2tpZSddO1xuICB9XG4gIHJldHVybiBoZWFkZXI7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3N1cGVyYWdlbnQvbGliL3V0aWxzLmpzXG4vLyBtb2R1bGUgaWQgPSAxMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpZih3aW5kb3cubG9jYXRpb24uaG9zdG5hbWUgPT09ICdsb2NhbGhvc3QnKXtcblx0bGV0IGxpbmtFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2xpbmtbaHJlZj1cIi4vY3NzL3N0eWxlcy5jc3NcIl0nKVxuXHRsZXQgaGVhZEVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaGVhZCcpXG5cdGhlYWRFbC5yZW1vdmVDaGlsZChsaW5rRWwpXG59XG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZXMvbWFpbi5zY3NzJ1xuaW1wb3J0IGFwcCBmcm9tICcuL3NjcmlwdHMvYXBwLmpzJ1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VSb290IjoiIn0=