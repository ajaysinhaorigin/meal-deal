// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"1xC6H":[function(require,module,exports) {
var Refresh = require("a3dcf382cc31c7ab");
var ErrorOverlay = require("b9411ca0a3b9e93c");
Refresh.injectIntoGlobalHook(window);
window.$RefreshReg$ = function() {};
window.$RefreshSig$ = function() {
    return function(type) {
        return type;
    };
};
ErrorOverlay.setEditorHandler(function editorHandler(errorLocation) {
    let file = `${errorLocation.fileName}:${errorLocation.lineNumber || 1}:${errorLocation.colNumber || 1}`;
    fetch(`/__parcel_launch_editor?file=${encodeURIComponent(file)}`);
});
ErrorOverlay.startReportingRuntimeErrors({
    onError: function() {}
});
window.addEventListener("parcelhmraccept", ()=>{
    ErrorOverlay.dismissRuntimeErrors();
});

},{"a3dcf382cc31c7ab":"786KC","b9411ca0a3b9e93c":"1dldy"}],"dSF28":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "e22bf3fff0744978";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets, assetsToDispose, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets); // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                } // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle, id) {
    // Execute the module.
    bundle(id); // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            }); // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"kATPS":[function(require,module,exports) {
var $parcel$ReactRefreshHelpers$78b0 = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
var prevRefreshReg = window.$RefreshReg$;
var prevRefreshSig = window.$RefreshSig$;
$parcel$ReactRefreshHelpers$78b0.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _reactRouterDom = require("react-router-dom");
var _reactRedux = require("react-redux");
var _useFetchSingleRestaurent = require("../hooks/useFetchSingleRestaurent");
var _useFetchSingleRestaurentDefault = parcelHelpers.interopDefault(_useFetchSingleRestaurent);
var _shimmer = require("../components/shimmerUI/Shimmer");
var _shimmerDefault = parcelHelpers.interopDefault(_shimmer);
var _singleRestaurentComponent = require("../components/singleRestaurentDetails/SingleRestaurentComponent");
var _singleRestaurentComponentDefault = parcelHelpers.interopDefault(_singleRestaurentComponent);
var _offers = require("../components/singleRestaurentDetails/Offers");
var _offersDefault = parcelHelpers.interopDefault(_offers);
var _menu = require("../components/menu/Menu");
var _menuDefault = parcelHelpers.interopDefault(_menu);
var _s = $RefreshSig$();
const SingleRestaurent = ()=>{
    _s();
    const { id  } = (0, _reactRouterDom.useParams)();
    (0, _useFetchSingleRestaurentDefault.default)(id);
    const { loading , error  } = (0, _reactRedux.useSelector)((store)=>store?.menu);
    if (loading) return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _shimmerDefault.default), {}, void 0, false, {
        fileName: "src/pages/SingleRestaurent.js",
        lineNumber: 15,
        columnNumber: 23
    }, undefined);
    if (error.show) return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _jsxDevRuntime.Fragment), {
        children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
            className: "flex justify-center",
            children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                className: " my-28 text-center text-gray-600",
                children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("h1", {
                    className: "text-3xl font-bold",
                    children: error.msg
                }, void 0, false, {
                    fileName: "src/pages/SingleRestaurent.js",
                    lineNumber: 22,
                    columnNumber: 13
                }, undefined)
            }, void 0, false, {
                fileName: "src/pages/SingleRestaurent.js",
                lineNumber: 21,
                columnNumber: 11
            }, undefined)
        }, void 0, false, {
            fileName: "src/pages/SingleRestaurent.js",
            lineNumber: 20,
            columnNumber: 9
        }, undefined)
    }, void 0, false);
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _jsxDevRuntime.Fragment), {
        children: [
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _singleRestaurentComponentDefault.default), {}, void 0, false, {
                fileName: "src/pages/SingleRestaurent.js",
                lineNumber: 30,
                columnNumber: 7
            }, undefined),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _offersDefault.default), {}, void 0, false, {
                fileName: "src/pages/SingleRestaurent.js",
                lineNumber: 31,
                columnNumber: 7
            }, undefined),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _menuDefault.default), {}, void 0, false, {
                fileName: "src/pages/SingleRestaurent.js",
                lineNumber: 32,
                columnNumber: 7
            }, undefined)
        ]
    }, void 0, true);
};
_s(SingleRestaurent, "F54/uIYcJq+6cFaWJWaRdIskqfY=", false, function() {
    return [
        (0, _reactRouterDom.useParams),
        (0, _useFetchSingleRestaurentDefault.default),
        (0, _reactRedux.useSelector)
    ];
});
_c = SingleRestaurent;
exports.default = SingleRestaurent;
var _c;
$RefreshReg$(_c, "SingleRestaurent");

  $parcel$ReactRefreshHelpers$78b0.postlude(module);
} finally {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
},{"react/jsx-dev-runtime":"iTorj","react-router-dom":"9xmpe","react-redux":"bdVon","../hooks/useFetchSingleRestaurent":"5FnBi","../components/shimmerUI/Shimmer":"gEK4Z","../components/singleRestaurentDetails/SingleRestaurentComponent":"eAApP","../components/singleRestaurentDetails/Offers":"bYU2F","../components/menu/Menu":"lSl5G","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"km3Ru"}],"5FnBi":[function(require,module,exports) {
var $parcel$ReactRefreshHelpers$d993 = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
var prevRefreshReg = window.$RefreshReg$;
var prevRefreshSig = window.$RefreshSig$;
$parcel$ReactRefreshHelpers$d993.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _react = require("react");
var _reactRedux = require("react-redux");
var _menuSlice = require("../features/menuSlice");
var _s = $RefreshSig$();
const useFetchSingleRestaurent = (id)=>{
    _s();
    const dispatch = (0, _reactRedux.useDispatch)();
    (0, _react.useEffect)(()=>{
        dispatch((0, _menuSlice.setLoading)());
        fetchSingleRestaurent();
    }, []);
    async function fetchSingleRestaurent() {
        try {
            const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.9873139&lng=77.04451030000001&restaurantId=${id}&submitAction=ENTER`);
            const json1 = await data.json();
            if (json1?.statusCode === 0) {
                dispatch((0, _menuSlice.getSingleRestaurent)(json1.data.cards[0].card.card.info));
                dispatch((0, _menuSlice.getOfferDetails)(json1.data.cards[1].card.card.gridElements.infoWithStyle.offers));
                dispatch((0, _menuSlice.getMenu)(json1.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards));
            } else dispatch((0, _menuSlice.setError)(json1?.statusMessage));
        } catch (error) {
            dispatch((0, _menuSlice.setError)(json?.statusMessage));
        }
    }
};
_s(useFetchSingleRestaurent, "rAh3tY+Iv6hWC9AI4Dm+rCbkwNE=", false, function() {
    return [
        (0, _reactRedux.useDispatch)
    ];
});
exports.default = useFetchSingleRestaurent;

  $parcel$ReactRefreshHelpers$d993.postlude(module);
} finally {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
},{"react":"21dqq","react-redux":"bdVon","../features/menuSlice":"2QxFM","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"km3Ru"}],"eAApP":[function(require,module,exports) {
var $parcel$ReactRefreshHelpers$84d7 = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
var prevRefreshReg = window.$RefreshReg$;
var prevRefreshSig = window.$RefreshSig$;
$parcel$ReactRefreshHelpers$84d7.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _reactRedux = require("react-redux");
var _s = $RefreshSig$();
const SingleRestaurentComponent = ()=>{
    _s();
    const { name , cuisines , areaName , avgRating , costForTwoMessage , totalRatingsString  } = (0, _reactRedux.useSelector)((store)=>store?.menu?.restaurentDetails);
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
        className: "mx-2 lg:mx-48 mt-6",
        children: [
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                className: "flex justify-between border-b-2 border-dotted p-4",
                children: [
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                        children: [
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("h1", {
                                className: "font-bold text-xl text-gray-800",
                                children: name
                            }, void 0, false, {
                                fileName: "src/components/singleRestaurentDetails/SingleRestaurentComponent.jsx",
                                lineNumber: 10,
                                columnNumber: 21
                            }, undefined),
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("p", {
                                className: "text-sm text-gray-600",
                                children: cuisines?.join(",")
                            }, void 0, false, {
                                fileName: "src/components/singleRestaurentDetails/SingleRestaurentComponent.jsx",
                                lineNumber: 11,
                                columnNumber: 21
                            }, undefined),
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("p", {
                                className: "text-sm text-gray-600",
                                children: areaName
                            }, void 0, false, {
                                fileName: "src/components/singleRestaurentDetails/SingleRestaurentComponent.jsx",
                                lineNumber: 12,
                                columnNumber: 21
                            }, undefined)
                        ]
                    }, void 0, true, {
                        fileName: "src/components/singleRestaurentDetails/SingleRestaurentComponent.jsx",
                        lineNumber: 9,
                        columnNumber: 17
                    }, undefined),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                        className: "flex flex-col text-center border-2 border-gray-200 px-2 py-4 rounded-2xl",
                        children: [
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("p", {
                                className: "font-medium text-green-500",
                                children: avgRating
                            }, void 0, false, {
                                fileName: "src/components/singleRestaurentDetails/SingleRestaurentComponent.jsx",
                                lineNumber: 15,
                                columnNumber: 21
                            }, undefined),
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("p", {
                                className: "text-xs font-bold text-gray-600",
                                children: totalRatingsString
                            }, void 0, false, {
                                fileName: "src/components/singleRestaurentDetails/SingleRestaurentComponent.jsx",
                                lineNumber: 16,
                                columnNumber: 21
                            }, undefined)
                        ]
                    }, void 0, true, {
                        fileName: "src/components/singleRestaurentDetails/SingleRestaurentComponent.jsx",
                        lineNumber: 14,
                        columnNumber: 17
                    }, undefined)
                ]
            }, void 0, true, {
                fileName: "src/components/singleRestaurentDetails/SingleRestaurentComponent.jsx",
                lineNumber: 8,
                columnNumber: 13
            }, undefined),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("p", {
                className: "p-4 ",
                children: costForTwoMessage
            }, void 0, false, {
                fileName: "src/components/singleRestaurentDetails/SingleRestaurentComponent.jsx",
                lineNumber: 19,
                columnNumber: 13
            }, undefined)
        ]
    }, void 0, true, {
        fileName: "src/components/singleRestaurentDetails/SingleRestaurentComponent.jsx",
        lineNumber: 7,
        columnNumber: 9
    }, undefined);
};
_s(SingleRestaurentComponent, "0SknfMoAyc2t3hXG2OEICRNjxEw=", false, function() {
    return [
        (0, _reactRedux.useSelector)
    ];
});
_c = SingleRestaurentComponent;
exports.default = SingleRestaurentComponent;
var _c;
$RefreshReg$(_c, "SingleRestaurentComponent");

  $parcel$ReactRefreshHelpers$84d7.postlude(module);
} finally {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
},{"react/jsx-dev-runtime":"iTorj","react-redux":"bdVon","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"km3Ru"}],"bYU2F":[function(require,module,exports) {
var $parcel$ReactRefreshHelpers$e2c3 = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
var prevRefreshReg = window.$RefreshReg$;
var prevRefreshSig = window.$RefreshSig$;
$parcel$ReactRefreshHelpers$e2c3.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _reactRedux = require("react-redux");
var _offerCard = require("./OfferCard");
var _offerCardDefault = parcelHelpers.interopDefault(_offerCard);
var _s = $RefreshSig$();
const Offers = ()=>{
    _s();
    const offers = (0, _reactRedux.useSelector)((store)=>store?.menu?.offerDetails);
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _jsxDevRuntime.Fragment), {
        children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
            className: "mx-4 lg:mx-48 mt-6 flex flex-wrap lg:justify-center",
            children: offers?.map((offer)=>/*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _offerCardDefault.default), {
                    ...offer.info
                }, offer?.info?.offerIds[0], false, {
                    fileName: "src/components/singleRestaurentDetails/Offers.jsx",
                    lineNumber: 10,
                    columnNumber: 44
                }, undefined))
        }, void 0, false, {
            fileName: "src/components/singleRestaurentDetails/Offers.jsx",
            lineNumber: 8,
            columnNumber: 13
        }, undefined)
    }, void 0, false);
};
_s(Offers, "ZrC1QNHIkLQggdErVw8EkLO6/uA=", false, function() {
    return [
        (0, _reactRedux.useSelector)
    ];
});
_c = Offers;
exports.default = Offers;
var _c;
$RefreshReg$(_c, "Offers");

  $parcel$ReactRefreshHelpers$e2c3.postlude(module);
} finally {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
},{"react/jsx-dev-runtime":"iTorj","react-redux":"bdVon","./OfferCard":"7uq8j","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"km3Ru"}],"7uq8j":[function(require,module,exports) {
var $parcel$ReactRefreshHelpers$814b = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
var prevRefreshReg = window.$RefreshReg$;
var prevRefreshSig = window.$RefreshSig$;
$parcel$ReactRefreshHelpers$814b.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
const OfferCard = ({ header , couponCode , description  })=>{
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
        className: "border-2 border-gray-300 rounded-lg px-4 py-2 m-2",
        children: [
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                children: [
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("img", {
                        src: "",
                        alt: ""
                    }, void 0, false, {
                        fileName: "src/components/singleRestaurentDetails/OfferCard.jsx",
                        lineNumber: 5,
                        columnNumber: 17
                    }, undefined),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("p", {
                        className: "text-sm font-bold text-gray-600",
                        children: header
                    }, void 0, false, {
                        fileName: "src/components/singleRestaurentDetails/OfferCard.jsx",
                        lineNumber: 6,
                        columnNumber: 17
                    }, undefined)
                ]
            }, void 0, true, {
                fileName: "src/components/singleRestaurentDetails/OfferCard.jsx",
                lineNumber: 4,
                columnNumber: 13
            }, undefined),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                className: "text-xs",
                children: couponCode
            }, void 0, false, {
                fileName: "src/components/singleRestaurentDetails/OfferCard.jsx",
                lineNumber: 8,
                columnNumber: 13
            }, undefined),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                className: "text-xs",
                children: description
            }, void 0, false, {
                fileName: "src/components/singleRestaurentDetails/OfferCard.jsx",
                lineNumber: 9,
                columnNumber: 13
            }, undefined)
        ]
    }, void 0, true, {
        fileName: "src/components/singleRestaurentDetails/OfferCard.jsx",
        lineNumber: 3,
        columnNumber: 9
    }, undefined);
};
_c = OfferCard;
exports.default = OfferCard;
var _c;
$RefreshReg$(_c, "OfferCard");

  $parcel$ReactRefreshHelpers$814b.postlude(module);
} finally {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
},{"react/jsx-dev-runtime":"iTorj","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"km3Ru"}],"lSl5G":[function(require,module,exports) {
var $parcel$ReactRefreshHelpers$9a18 = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
var prevRefreshReg = window.$RefreshReg$;
var prevRefreshSig = window.$RefreshSig$;
$parcel$ReactRefreshHelpers$9a18.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _reactRedux = require("react-redux");
var _menuCard = require("./MenuCard");
var _menuCardDefault = parcelHelpers.interopDefault(_menuCard);
var _s = $RefreshSig$();
const Menu = ()=>{
    _s();
    const menu = (0, _reactRedux.useSelector)((store)=>store?.menu?.menu);
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
        className: "mx-4 lg:mx-48 mt-6",
        children: menu?.map((menu, i)=>/*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _menuCardDefault.default), {
                ...menu?.card?.card
            }, i, false, {
                fileName: "src/components/menu/Menu.jsx",
                lineNumber: 8,
                columnNumber: 40
            }, undefined))
    }, void 0, false, {
        fileName: "src/components/menu/Menu.jsx",
        lineNumber: 6,
        columnNumber: 9
    }, undefined);
};
_s(Menu, "2eXedWClgExqtmvgBwQ39dP4ERo=", false, function() {
    return [
        (0, _reactRedux.useSelector)
    ];
});
_c = Menu;
exports.default = Menu;
var _c;
$RefreshReg$(_c, "Menu");

  $parcel$ReactRefreshHelpers$9a18.postlude(module);
} finally {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
},{"react/jsx-dev-runtime":"iTorj","react-redux":"bdVon","./MenuCard":"lBxvf","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"km3Ru"}],"lBxvf":[function(require,module,exports) {
var $parcel$ReactRefreshHelpers$4baa = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
var prevRefreshReg = window.$RefreshReg$;
var prevRefreshSig = window.$RefreshSig$;
$parcel$ReactRefreshHelpers$4baa.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _react = require("react");
var _fa = require("react-icons/fa");
var _menuItem = require("./MenuItem");
var _menuItemDefault = parcelHelpers.interopDefault(_menuItem);
var _s = $RefreshSig$();
const MenuCard = ({ title , categories , itemCards  })=>{
    _s();
    const [sectionIsVisible, setSectionIsVisible] = (0, _react.useState)(true);
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _jsxDevRuntime.Fragment), {
        children: title && /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
            className: "mb-8 pb-8 border-b-8 border-gray-200",
            children: [
                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                    className: "flex justify-between",
                    children: [
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("h1", {
                            className: "text-xl font-bold text-gray-800 pb-4",
                            children: [
                                title,
                                categories && /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _jsxDevRuntime.Fragment), {
                                    children: [
                                        "(",
                                        categories?.length,
                                        ")"
                                    ]
                                }, void 0, true),
                                itemCards && /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _jsxDevRuntime.Fragment), {
                                    children: [
                                        "(",
                                        itemCards?.length,
                                        ")"
                                    ]
                                }, void 0, true)
                            ]
                        }, void 0, true, {
                            fileName: "src/components/menu/MenuCard.jsx",
                            lineNumber: 15,
                            columnNumber: 29
                        }, undefined),
                        sectionIsVisible === true ? /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("button", {
                            onClick: ()=>setSectionIsVisible(false),
                            className: "text-lg pb-4 pr-12",
                            children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _fa.FaChevronUp), {}, void 0, false, {
                                fileName: "src/components/menu/MenuCard.jsx",
                                lineNumber: 26,
                                columnNumber: 37
                            }, undefined)
                        }, void 0, false, {
                            fileName: "src/components/menu/MenuCard.jsx",
                            lineNumber: 25,
                            columnNumber: 33
                        }, undefined) : /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("button", {
                            onClick: ()=>setSectionIsVisible(true),
                            className: "text-lg pb-4 pr-12",
                            children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _fa.FaChevronDown), {}, void 0, false, {
                                fileName: "src/components/menu/MenuCard.jsx",
                                lineNumber: 30,
                                columnNumber: 37
                            }, undefined)
                        }, void 0, false, {
                            fileName: "src/components/menu/MenuCard.jsx",
                            lineNumber: 29,
                            columnNumber: 33
                        }, undefined)
                    ]
                }, void 0, true, {
                    fileName: "src/components/menu/MenuCard.jsx",
                    lineNumber: 14,
                    columnNumber: 25
                }, undefined),
                sectionIsVisible && /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _jsxDevRuntime.Fragment), {
                    children: [
                        itemCards && itemCards?.map((item, i)=>/*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _menuItemDefault.default), {
                                ...item?.card?.info
                            }, i, false, {
                                fileName: "src/components/menu/MenuCard.jsx",
                                lineNumber: 38,
                                columnNumber: 78
                            }, undefined)),
                        categories && categories?.map((menu, i)=>/*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)(MenuCard, {
                                ...menu
                            }, i, false, {
                                fileName: "src/components/menu/MenuCard.jsx",
                                lineNumber: 41,
                                columnNumber: 80
                            }, undefined))
                    ]
                }, void 0, true)
            ]
        }, void 0, true, {
            fileName: "src/components/menu/MenuCard.jsx",
            lineNumber: 13,
            columnNumber: 21
        }, undefined)
    }, void 0, false);
};
_s(MenuCard, "bY6xudni2AQFQjIaiNB3y6P2xYY=");
_c = MenuCard;
exports.default = MenuCard;
var _c;
$RefreshReg$(_c, "MenuCard");

  $parcel$ReactRefreshHelpers$4baa.postlude(module);
} finally {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
},{"react/jsx-dev-runtime":"iTorj","react":"21dqq","react-icons/fa":"jZjPM","./MenuItem":"6nKjX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"km3Ru"}],"6nKjX":[function(require,module,exports) {
var $parcel$ReactRefreshHelpers$1353 = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
var prevRefreshReg = window.$RefreshReg$;
var prevRefreshSig = window.$RefreshSig$;
$parcel$ReactRefreshHelpers$1353.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _react = require("react");
var _reactRedux = require("react-redux");
var _cartSlice = require("../../features/cartSlice");
var _quantityButton = require("../../common/QuantityButton");
var _quantityButtonDefault = parcelHelpers.interopDefault(_quantityButton);
var _imageComponent = require("../../common/ImageComponent");
var _imageComponentDefault = parcelHelpers.interopDefault(_imageComponent);
var _s = $RefreshSig$();
const MenuItem = ({ name , price , description , imageId , id  })=>{
    _s();
    const cart = (0, _reactRedux.useSelector)((store)=>store?.cart);
    const dispatch = (0, _reactRedux.useDispatch)();
    (0, _react.useEffect)(()=>{
        dispatch((0, _cartSlice.setTotalPrice)(cart?.cart?.reduce((acc, currentValue)=>acc + Number(currentValue.price / 100) * currentValue.qty, 0)));
        dispatch((0, _cartSlice.setTotalItems)(cart?.cart?.reduce((acc, currentValue)=>acc + currentValue.qty, 0)));
    }, [
        cart
    ]);
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
        className: "pb-12 pt-6 flex justify-between border-b-[1px] border-gray-300 ",
        children: [
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                children: [
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("h1", {
                        className: "font-medium text-lg",
                        children: name
                    }, void 0, false, {
                        fileName: "src/components/menu/MenuItem.jsx",
                        lineNumber: 30,
                        columnNumber: 17
                    }, undefined),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("p", {
                        className: "text-gray-600 mb-2",
                        children: [
                            price / 100,
                            " Rs."
                        ]
                    }, void 0, true, {
                        fileName: "src/components/menu/MenuItem.jsx",
                        lineNumber: 31,
                        columnNumber: 17
                    }, undefined),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("p", {
                        className: "text-xs text-gray-400 max-w-lg lg:max-w-2xl",
                        children: description
                    }, void 0, false, {
                        fileName: "src/components/menu/MenuItem.jsx",
                        lineNumber: 32,
                        columnNumber: 17
                    }, undefined)
                ]
            }, void 0, true, {
                fileName: "src/components/menu/MenuItem.jsx",
                lineNumber: 29,
                columnNumber: 13
            }, undefined),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                className: "mx-2 border-[1px] shadow-lg border-gray-100 w-32 h-20",
                children: [
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _imageComponentDefault.default), {
                        cdn: imageId
                    }, void 0, false, {
                        fileName: "src/components/menu/MenuItem.jsx",
                        lineNumber: 35,
                        columnNumber: 17
                    }, undefined),
                    cart?.cart?.some((cartItem)=>cartItem.id == id) ? /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _quantityButtonDefault.default), {
                        id: id
                    }, void 0, false, {
                        fileName: "src/components/menu/MenuItem.jsx",
                        lineNumber: 40,
                        columnNumber: 29
                    }, undefined) : /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("button", {
                        className: "mx-4 border-[1px] border-gray-200 shodow-lg bg-white -mt-2 px-8 py-1 ",
                        onClick: ()=>{
                            dispatch((0, _cartSlice.addToCart)({
                                name,
                                price,
                                imageId,
                                id,
                                qty: 1
                            }));
                        },
                        children: "Add"
                    }, void 0, false, {
                        fileName: "src/components/menu/MenuItem.jsx",
                        lineNumber: 42,
                        columnNumber: 25
                    }, undefined)
                ]
            }, void 0, true, {
                fileName: "src/components/menu/MenuItem.jsx",
                lineNumber: 34,
                columnNumber: 13
            }, undefined)
        ]
    }, void 0, true, {
        fileName: "src/components/menu/MenuItem.jsx",
        lineNumber: 28,
        columnNumber: 9
    }, undefined);
};
_s(MenuItem, "O8kV4FMad4uUEER48J0xtNwHiNw=", false, function() {
    return [
        (0, _reactRedux.useSelector),
        (0, _reactRedux.useDispatch)
    ];
});
_c = MenuItem;
exports.default = MenuItem;
var _c;
$RefreshReg$(_c, "MenuItem");

  $parcel$ReactRefreshHelpers$1353.postlude(module);
} finally {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
},{"react/jsx-dev-runtime":"iTorj","react":"21dqq","react-redux":"bdVon","../../features/cartSlice":"XgqmR","../../common/QuantityButton":"YxrRX","../../common/ImageComponent":"jtRj2","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"km3Ru"}]},["1xC6H","dSF28"], null, "parcelRequire5ca6")

//# sourceMappingURL=SingleRestaurent.f0744978.js.map
