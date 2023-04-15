// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
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

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
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
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"main.js":[function(require,module,exports) {
'use strict';

var WalletForm, Wallets, Dids, ReceiveDocument, SendDocument;
Wallets = [{
  icon: 'id',
  documentName: 'Drivers License',
  pdf: ''
}, {
  icon: 'passport',
  documentName: 'Passport',
  pdf: ''
}, {
  icon: 'car',
  documentName: 'Car Title',
  pdf: ''
}, {
  icon: 'degree',
  documentName: 'Bachelors Degree Diploma',
  pdf: ''
}, {
  icon: 'medical',
  documentName: 'Medical Records',
  pdf: ''
}];
Dids = [{
  icon: 'id',
  agencyDid: 'DID:ETH:HG284thvds890',
  agencyName: 'Louisiana DMV'
}, {
  icon: 'id',
  agencyDid: 'DID:ETH:scln8ty89wpp9',
  agencyName: 'United States Government'
}, {
  icon: 'id',
  agencyDid: 'DID:ETH:HG284thvds890',
  agencyName: 'Louisiana DMV'
}, {
  icon: 'id',
  agencyDid: 'DID:ETH:FOIFhi19038h8',
  agencyName: 'Louisiana State University'
}, {
  icon: 'id',
  agencyDid: 'DID:ETH:awdoi8378HJKM',
  agencyName: 'Doctor Arbour Office'
}];
ReceiveDocument = [{
  agencyDid: 'DID:ETH:963183B38457G',
  agencyName: 'Texas A&M University',
  icon: 'degree',
  documentName: 'Masters Degree',
  pdf: ''
}, {
  agencyDid: 'DID:ETH:01938N9238J8h',
  agencyName: 'Doctors Office',
  icon: 'medical',
  documentName: 'Medical Record',
  pdf: ''
}, {
  agencyDid: 'DID:ETH:1938dh28ehb8c',
  agencyName: 'Tax Agency',
  icon: 'gov',
  documentName: '2022 Income Tax',
  pdf: ''
}, {
  agencyDid: 'DID:ETH:19sdn83477oNN',
  agencyName: 'Building Officials',
  icon: 'house',
  documentName: 'Estate Sale',
  pdf: ''
}, {
  agencyDid: 'DID:ETH:1928dnc88hnio',
  agencyName: 'Land Grant',
  icon: 'land',
  documentName: 'Land Deed',
  pdf: ''
}];
WalletForm = {
  walletName: 'NICOLE BLAZIER',
  walletDid: 'DID:ETH::44444444444444',
  walletEmail: 'nicole.blazier@gmail.com'
};
SendDocument = {};

// all the application buttons
var walletBtn = document.getElementById('wallet-btn');
var didsBtn = document.getElementById('dids-btn');
var sendBtn = document.getElementById('send-btn');
var saveBtn = document.getElementById('save-btn');
var receiveBtn = document.getElementById('receive-btn');
var receiveBtnDid = document.getElementById('receive-btn-did');
var sendBtnDid = document.getElementById('send-btn-did');
var ftWalletBtn = document.getElementById('ft-wallet-btn');
var ftSettingBtn = document.getElementById('ft-setting-btn');
var wallet = document.getElementById('wallet');
var dids = document.getElementById('dids');
var send = document.getElementById('send');
var receive = document.getElementById('receive');
var account = document.getElementById('account-details');
var showPdfSend = document.getElementById('pdf-send');
var showPdfReceive = document.getElementById('pdf-receive');
var selectDocument = document.getElementById('select-document');
var selectDid = document.getElementById('select-did');

//receive
var agencyName = document.getElementById('agency-name');
var agencyDid = document.getElementById('agency-did');
var documentName = document.getElementById('document-name');

// settings page input
var editIcon = document.getElementById('edit-icon');
var walletNameInput = document.getElementById('input-wallet-name');
var walletDidInput = document.getElementById('input-wallet-did');
var walletEmailInput = document.getElementById('input-wallet-email');

// e-wallet values
var walletName = document.getElementById('wallet-fullName');
var walletDid = document.getElementById('wallet-did');

//did table
var didsAgencyDid = document.getElementById('dids-agency-did');
var didsAgencyName = document.getElementById('dids-agency-name');
walletNameInput.disabled = true;
walletDidInput.disabled = true;
walletEmailInput.disabled = true;
walletName.innerHTML = WalletForm.walletName;
walletDid.innerHTML = WalletForm.walletDid;
walletBtn.addEventListener('click', function () {
  wallet.style.display = 'inline';
  dids.style.display = 'none';
  send.style.display = 'none';
  receive.style.display = 'none';
  account.style.display = 'none';
});
didsBtn.addEventListener('click', function () {
  wallet.style.display = 'none';
  dids.style.display = 'inline';
  send.style.display = 'none';
  receive.style.display = 'none';
  account.style.display = 'none';
});
sendBtn.addEventListener('click', function () {
  wallet.style.display = 'none';
  dids.style.display = 'none';
  send.style.display = 'inline';
  receive.style.display = 'none';
  account.style.display = 'none';
});
receiveBtn.addEventListener('click', function () {
  wallet.style.display = 'none';
  dids.style.display = 'none';
  send.style.display = 'none';
  receive.style.display = 'inline';
  account.style.display = 'none';
});
receiveBtnDid.addEventListener('click', function () {
  saveReceivedDoc();
});
ftWalletBtn.addEventListener('click', function () {
  wallet.style.display = 'inline';
  dids.style.display = 'none';
  send.style.display = 'none';
  receive.style.display = 'none';
  account.style.display = 'none';
});
ftSettingBtn.addEventListener('click', function () {
  wallet.style.display = 'none';
  dids.style.display = 'none';
  send.style.display = 'none';
  receive.style.display = 'none';
  account.style.display = 'inline';
});
selectDocument.addEventListener('change', function () {
  showPdfSend.style.display = 'inline';
});
editIcon.addEventListener('click', function () {
  walletNameInput.disabled = false;
  walletNameInput.style.border = '1px solid yellow';
  walletDidInput.disabled = false;
  walletDidInput.style.border = '1px solid yellow';
  walletEmailInput.disabled = false;
  walletEmailInput.style.border = '1px solid yellow';
});
saveBtn.addEventListener('click', function () {
  walletNameInput.disabled = true;
  walletNameInput.style.border = 'none';
  walletDidInput.disabled = true;
  walletDidInput.style.border = 'none';
  walletEmailInput.disabled = true;
  walletEmailInput.style.border = 'none';
  doubleAlpha();
  alphaNumeric();
});
sendBtnDid.addEventListener('click', function () {
  sendDocumentValue();
});
function doubleAlpha() {
  var inputAlpha = /^[a-zA-Z]+ [a-zA-Z]+$/,
    valid = false;
  if (!inputAlpha.test(walletNameInput.value)) {
    walletNameInput.style.backgroundColor = "#ffdddd";
    walletNameInput.style.borderColor = "#ffdddd";
  } else {
    walletNameInput.style.backgroundColor = "#fff";
    walletNameInput.style.borderColor = "none";
    valid = true;
    WalletForm.walletName = walletNameInput.value;
    walletName.innerHTML = WalletForm.walletName;
  }
  return valid;
}
function alphaNumeric() {
  var valid = false,
    i,
    select = [];
  var addressText = /^[0-9a-zA-Z]+$/;
  select.push(walletDidInput, walletEmailInput);
  for (i = 0; i < select.length; i++) {
    if (addressText.test(select.value)) {
      select[i].style.backgroundColor = "#fff";
      select[i].style.borderColor = "none";
      valid = true;
    } else {
      select[i].style.backgroundColor = "#ffdddd";
      select[i].style.borderColor = "#ffdddd";
    }
  }
  WalletForm.walletDid = walletDidInput.value;
  WalletForm.walletEmail = walletEmailInput.value;
  walletDid.innerHTML = WalletForm.walletDid;
  return valid;
}
function saveReceivedDoc() {
  var lastItem = ReceiveDocument.slice(-1);
  console.log(lastItem);
  var objDid = {
    icon: 'id',
    agencyDid: lastItem[0].agencyDid,
    agencyName: lastItem[0].agencyName
  };
  var objWallet = {
    icon: lastItem[0].icon,
    documentName: lastItem[0].documentName,
    pdf: lastItem[0].pdf
  };
  Wallets.push(objWallet);
  Dids.push(objDid);
  console.log(Wallets);
  console.log(Dids);
  ReceiveDocument.pop();
  var i;
  for (i = 0; i < ReceiveDocument.length; i++) {
    agencyDid.value = ReceiveDocument[i].agencyDid;
    agencyName.value = ReceiveDocument[i].agencyName;
    documentName.value = ReceiveDocument[i].documentName;
    showPdfReceive.value = ReceiveDocument[i].pdf;
  }
  getWallet();
  getDid();
}
var documentItemUl = document.querySelector('.wallet-item-document');
function getWallet() {
  var i;
  var didItems = "";
  var icon;
  var walletItem = '<div class="wallet-item">';
  for (i = 0; i < Wallets.length; i++) {
    console.log(Wallets[i].icon);
    if (Wallets[i].icon == 'id') {
      icon = '<i class="fa-solid fa-id-card icon"></i>';
    } else if (Wallets[i].icon == 'passport') {
      icon = '<i class="fa-solid fa-passport icon"></i>';
    } else if (Wallets[i].icon == 'car') {
      icon = '<i class="fa-solid fa-car icon"></i>';
    } else if (Wallets[i].icon == 'degree') {
      icon = '<i class="fa-solid fa-graduation-cap icon"></i>';
    } else if (Wallets[i].icon == 'medical') {
      icon = '<i class="fa-solid fa-file-medical icon"></i>';
    } else if (Wallets[i].icon == 'gov') {
      icon = '<i class="fa-duotone fa-landmark"></i>';
    } else if (Wallets[i].icon == 'house') {
      icon = '<i class="fa-regular fa-house"></i>';
    } else if (Wallets[i].icon == 'land') {
      icon = '<i class="fa-solid fa-tree"></i>';
    }
    didItems += walletItem;
    didItems += "<div>";
    didItems += icon;
    didItems += "</div>";
    didItems += "<div>";
    didItems += "<div>" + Wallets[i].documentName + "</div>";
    didItems += "</div>";
    didItems += "</div>";
  }
  console.log(didItems);
  documentItemUl.innerHTML = didItems;
}
getWallet();
var didItemUl = document.querySelector('.wallet-item-did');
function getDid() {
  var i;
  var didItems = "";
  var icon = '<i class="fa-solid fa-id-card icon"></i>';
  var walletItem = '<div class="wallet-item">';
  for (i = 0; i < Dids.length; i++) {
    didItems += walletItem;
    didItems += "<div>";
    didItems += icon;
    didItems += "</div>";
    didItems += "<div>";
    didItems += "<div>" + Dids[i].agencyDid + "</div>";
    didItems += "<div>" + Dids[i].agencyName + "</div>";
    didItems += "</div>";
    didItems += "</div>";
  }
  console.log(didItems);
  didItemUl.innerHTML = didItems;
  sendDocument();
}
getDid();
function getReceivedDoc() {
  var i;
  for (i = 0; i < ReceiveDocument.length; i++) {
    agencyDid.value = ReceiveDocument[i].agencyDid;
    agencyName.value = ReceiveDocument[i].agencyName;
    documentName.value = ReceiveDocument[i].documentName;
    showPdfReceive.value = ReceiveDocument[i].pdf;
  }
  sendDocument();
}
getReceivedDoc();
function sendDocument() {
  var i, j;
  var didItems = "<option value='0'>select</div>";
  var documentItems = "<option value='0'>select</div>";
  for (i = 0; i < Dids.length; i++) {
    didItems += "<option value=" + Dids[i].agencyDid + ">" + Dids[i].agencyDid + "</div>";
  }
  selectDid.innerHTML = didItems;
  for (j = 0; j < Wallets.length; j++) {
    documentItems += "<option value=" + Wallets[j].documentName + ">" + Wallets[j].documentName + "</div>";
  }
  selectDocument.innerHTML = documentItems;
}
sendDocument();
function sendDocumentValue() {
  selectDid.addEventListener('change', function (event) {
    console.log(event.target.value);
    var did = event.target.value;
    SendDocument.did = did;
  });
  selectDocument.addEventListener('change', function (event) {
    console.log(event.target.value);
    var doc = event.target.value;
    SendDocument.document = doc;
  });
  console.log('Send', SendDocument);
}
sendDocumentValue();
},{}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}
module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "56614" + '/');
  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);
    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);
          if (didAccept) {
            handled = true;
          }
        }
      });

      // Enable HMR for CSS by default.
      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });
      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }
    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }
    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }
    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}
function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}
function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}
function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","main.js"], null)
//# sourceMappingURL=/main.1f19ae8e.js.map