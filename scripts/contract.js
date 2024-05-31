
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // sdk/contracts/weavedb-bpt/actions/read/hash.js
  var require_hash = __commonJS({
    "sdk/contracts/weavedb-bpt/actions/read/hash.js"(exports, module) {
      var hash = async (state, action) => ({ result: state.hash || null });
      module.exports = { hash };
    }
  });

  // sdk/contracts/node_modules/ramda/src/F.js
  var require_F = __commonJS({
    "sdk/contracts/node_modules/ramda/src/F.js"(exports, module) {
      var F = function() {
        return false;
      };
      module.exports = F;
    }
  });

  // sdk/contracts/node_modules/ramda/src/T.js
  var require_T = __commonJS({
    "sdk/contracts/node_modules/ramda/src/T.js"(exports, module) {
      var T = function() {
        return true;
      };
      module.exports = T;
    }
  });

  // sdk/contracts/node_modules/ramda/src/__.js
  var require__ = __commonJS({
    "sdk/contracts/node_modules/ramda/src/__.js"(exports, module) {
      module.exports = {
        "@@functional/placeholder": true
      };
    }
  });

  // sdk/contracts/node_modules/ramda/src/internal/_isPlaceholder.js
  var require_isPlaceholder = __commonJS({
    "sdk/contracts/node_modules/ramda/src/internal/_isPlaceholder.js"(exports, module) {
      function _isPlaceholder(a) {
        return a != null && typeof a === "object" && a["@@functional/placeholder"] === true;
      }
      module.exports = _isPlaceholder;
    }
  });

  // sdk/contracts/node_modules/ramda/src/internal/_curry1.js
  var require_curry1 = __commonJS({
    "sdk/contracts/node_modules/ramda/src/internal/_curry1.js"(exports, module) {
      var _isPlaceholder = require_isPlaceholder();
      function _curry1(fn) {
        return function f1(a) {
          if (arguments.length === 0 || _isPlaceholder(a)) {
            return f1;
          } else {
            return fn.apply(this, arguments);
          }
        };
      }
      module.exports = _curry1;
    }
  });

  // sdk/contracts/node_modules/ramda/src/internal/_curry2.js
  var require_curry2 = __commonJS({
    "sdk/contracts/node_modules/ramda/src/internal/_curry2.js"(exports, module) {
      var _curry1 = require_curry1();
      var _isPlaceholder = require_isPlaceholder();
      function _curry2(fn) {
        return function f2(a, b) {
          switch (arguments.length) {
            case 0:
              return f2;
            case 1:
              return _isPlaceholder(a) ? f2 : _curry1(function(_b) {
                return fn(a, _b);
              });
            default:
              return _isPlaceholder(a) && _isPlaceholder(b) ? f2 : _isPlaceholder(a) ? _curry1(function(_a) {
                return fn(_a, b);
              }) : _isPlaceholder(b) ? _curry1(function(_b) {
                return fn(a, _b);
              }) : fn(a, b);
          }
        };
      }
      module.exports = _curry2;
    }
  });

  // sdk/contracts/node_modules/ramda/src/add.js
  var require_add = __commonJS({
    "sdk/contracts/node_modules/ramda/src/add.js"(exports, module) {
      var _curry2 = require_curry2();
      var add = /* @__PURE__ */ _curry2(function add2(a, b) {
        return Number(a) + Number(b);
      });
      module.exports = add;
    }
  });

  // sdk/contracts/node_modules/ramda/src/internal/_concat.js
  var require_concat = __commonJS({
    "sdk/contracts/node_modules/ramda/src/internal/_concat.js"(exports, module) {
      function _concat(set1, set2) {
        set1 = set1 || [];
        set2 = set2 || [];
        var idx;
        var len1 = set1.length;
        var len2 = set2.length;
        var result = [];
        idx = 0;
        while (idx < len1) {
          result[result.length] = set1[idx];
          idx += 1;
        }
        idx = 0;
        while (idx < len2) {
          result[result.length] = set2[idx];
          idx += 1;
        }
        return result;
      }
      module.exports = _concat;
    }
  });

  // sdk/contracts/node_modules/ramda/src/internal/_arity.js
  var require_arity = __commonJS({
    "sdk/contracts/node_modules/ramda/src/internal/_arity.js"(exports, module) {
      function _arity(n, fn) {
        switch (n) {
          case 0:
            return function() {
              return fn.apply(this, arguments);
            };
          case 1:
            return function(a0) {
              return fn.apply(this, arguments);
            };
          case 2:
            return function(a0, a1) {
              return fn.apply(this, arguments);
            };
          case 3:
            return function(a0, a1, a2) {
              return fn.apply(this, arguments);
            };
          case 4:
            return function(a0, a1, a2, a3) {
              return fn.apply(this, arguments);
            };
          case 5:
            return function(a0, a1, a2, a3, a4) {
              return fn.apply(this, arguments);
            };
          case 6:
            return function(a0, a1, a2, a3, a4, a5) {
              return fn.apply(this, arguments);
            };
          case 7:
            return function(a0, a1, a2, a3, a4, a5, a6) {
              return fn.apply(this, arguments);
            };
          case 8:
            return function(a0, a1, a2, a3, a4, a5, a6, a7) {
              return fn.apply(this, arguments);
            };
          case 9:
            return function(a0, a1, a2, a3, a4, a5, a6, a7, a8) {
              return fn.apply(this, arguments);
            };
          case 10:
            return function(a0, a1, a2, a3, a4, a5, a6, a7, a8, a9) {
              return fn.apply(this, arguments);
            };
          default:
            throw new Error("First argument to _arity must be a non-negative integer no greater than ten");
        }
      }
      module.exports = _arity;
    }
  });

  // sdk/contracts/node_modules/ramda/src/internal/_curryN.js
  var require_curryN = __commonJS({
    "sdk/contracts/node_modules/ramda/src/internal/_curryN.js"(exports, module) {
      var _arity = require_arity();
      var _isPlaceholder = require_isPlaceholder();
      function _curryN(length, received, fn) {
        return function() {
          var combined = [];
          var argsIdx = 0;
          var left = length;
          var combinedIdx = 0;
          while (combinedIdx < received.length || argsIdx < arguments.length) {
            var result;
            if (combinedIdx < received.length && (!_isPlaceholder(received[combinedIdx]) || argsIdx >= arguments.length)) {
              result = received[combinedIdx];
            } else {
              result = arguments[argsIdx];
              argsIdx += 1;
            }
            combined[combinedIdx] = result;
            if (!_isPlaceholder(result)) {
              left -= 1;
            }
            combinedIdx += 1;
          }
          return left <= 0 ? fn.apply(this, combined) : _arity(left, _curryN(length, combined, fn));
        };
      }
      module.exports = _curryN;
    }
  });

  // sdk/contracts/node_modules/ramda/src/curryN.js
  var require_curryN2 = __commonJS({
    "sdk/contracts/node_modules/ramda/src/curryN.js"(exports, module) {
      var _arity = require_arity();
      var _curry1 = require_curry1();
      var _curry2 = require_curry2();
      var _curryN = require_curryN();
      var curryN = /* @__PURE__ */ _curry2(function curryN2(length, fn) {
        if (length === 1) {
          return _curry1(fn);
        }
        return _arity(length, _curryN(length, [], fn));
      });
      module.exports = curryN;
    }
  });

  // sdk/contracts/node_modules/ramda/src/addIndex.js
  var require_addIndex = __commonJS({
    "sdk/contracts/node_modules/ramda/src/addIndex.js"(exports, module) {
      var _concat = require_concat();
      var _curry1 = require_curry1();
      var curryN = require_curryN2();
      var addIndex = /* @__PURE__ */ _curry1(function addIndex2(fn) {
        return curryN(fn.length, function() {
          var idx = 0;
          var origFn = arguments[0];
          var list = arguments[arguments.length - 1];
          var args = Array.prototype.slice.call(arguments, 0);
          args[0] = function() {
            var result = origFn.apply(this, _concat(arguments, [idx, list]));
            idx += 1;
            return result;
          };
          return fn.apply(this, args);
        });
      });
      module.exports = addIndex;
    }
  });

  // sdk/contracts/node_modules/ramda/src/internal/_curry3.js
  var require_curry3 = __commonJS({
    "sdk/contracts/node_modules/ramda/src/internal/_curry3.js"(exports, module) {
      var _curry1 = require_curry1();
      var _curry2 = require_curry2();
      var _isPlaceholder = require_isPlaceholder();
      function _curry3(fn) {
        return function f3(a, b, c) {
          switch (arguments.length) {
            case 0:
              return f3;
            case 1:
              return _isPlaceholder(a) ? f3 : _curry2(function(_b, _c) {
                return fn(a, _b, _c);
              });
            case 2:
              return _isPlaceholder(a) && _isPlaceholder(b) ? f3 : _isPlaceholder(a) ? _curry2(function(_a, _c) {
                return fn(_a, b, _c);
              }) : _isPlaceholder(b) ? _curry2(function(_b, _c) {
                return fn(a, _b, _c);
              }) : _curry1(function(_c) {
                return fn(a, b, _c);
              });
            default:
              return _isPlaceholder(a) && _isPlaceholder(b) && _isPlaceholder(c) ? f3 : _isPlaceholder(a) && _isPlaceholder(b) ? _curry2(function(_a, _b) {
                return fn(_a, _b, c);
              }) : _isPlaceholder(a) && _isPlaceholder(c) ? _curry2(function(_a, _c) {
                return fn(_a, b, _c);
              }) : _isPlaceholder(b) && _isPlaceholder(c) ? _curry2(function(_b, _c) {
                return fn(a, _b, _c);
              }) : _isPlaceholder(a) ? _curry1(function(_a) {
                return fn(_a, b, c);
              }) : _isPlaceholder(b) ? _curry1(function(_b) {
                return fn(a, _b, c);
              }) : _isPlaceholder(c) ? _curry1(function(_c) {
                return fn(a, b, _c);
              }) : fn(a, b, c);
          }
        };
      }
      module.exports = _curry3;
    }
  });

  // sdk/contracts/node_modules/ramda/src/adjust.js
  var require_adjust = __commonJS({
    "sdk/contracts/node_modules/ramda/src/adjust.js"(exports, module) {
      var _concat = require_concat();
      var _curry3 = require_curry3();
      var adjust = /* @__PURE__ */ _curry3(function adjust2(idx, fn, list) {
        var len = list.length;
        if (idx >= len || idx < -len) {
          return list;
        }
        var _idx = (len + idx) % len;
        var _list = _concat(list);
        _list[_idx] = fn(list[_idx]);
        return _list;
      });
      module.exports = adjust;
    }
  });

  // sdk/contracts/node_modules/ramda/src/internal/_isArray.js
  var require_isArray = __commonJS({
    "sdk/contracts/node_modules/ramda/src/internal/_isArray.js"(exports, module) {
      module.exports = Array.isArray || function _isArray(val) {
        return val != null && val.length >= 0 && Object.prototype.toString.call(val) === "[object Array]";
      };
    }
  });

  // sdk/contracts/node_modules/ramda/src/internal/_isTransformer.js
  var require_isTransformer = __commonJS({
    "sdk/contracts/node_modules/ramda/src/internal/_isTransformer.js"(exports, module) {
      function _isTransformer(obj) {
        return obj != null && typeof obj["@@transducer/step"] === "function";
      }
      module.exports = _isTransformer;
    }
  });

  // sdk/contracts/node_modules/ramda/src/internal/_dispatchable.js
  var require_dispatchable = __commonJS({
    "sdk/contracts/node_modules/ramda/src/internal/_dispatchable.js"(exports, module) {
      var _isArray = require_isArray();
      var _isTransformer = require_isTransformer();
      function _dispatchable(methodNames, transducerCreator, fn) {
        return function() {
          if (arguments.length === 0) {
            return fn();
          }
          var obj = arguments[arguments.length - 1];
          if (!_isArray(obj)) {
            var idx = 0;
            while (idx < methodNames.length) {
              if (typeof obj[methodNames[idx]] === "function") {
                return obj[methodNames[idx]].apply(obj, Array.prototype.slice.call(arguments, 0, -1));
              }
              idx += 1;
            }
            if (_isTransformer(obj)) {
              var transducer = transducerCreator.apply(null, Array.prototype.slice.call(arguments, 0, -1));
              return transducer(obj);
            }
          }
          return fn.apply(this, arguments);
        };
      }
      module.exports = _dispatchable;
    }
  });

  // sdk/contracts/node_modules/ramda/src/internal/_reduced.js
  var require_reduced = __commonJS({
    "sdk/contracts/node_modules/ramda/src/internal/_reduced.js"(exports, module) {
      function _reduced(x) {
        return x && x["@@transducer/reduced"] ? x : {
          "@@transducer/value": x,
          "@@transducer/reduced": true
        };
      }
      module.exports = _reduced;
    }
  });

  // sdk/contracts/node_modules/ramda/src/internal/_xfBase.js
  var require_xfBase = __commonJS({
    "sdk/contracts/node_modules/ramda/src/internal/_xfBase.js"(exports, module) {
      module.exports = {
        init: function() {
          return this.xf["@@transducer/init"]();
        },
        result: function(result) {
          return this.xf["@@transducer/result"](result);
        }
      };
    }
  });

  // sdk/contracts/node_modules/ramda/src/internal/_xall.js
  var require_xall = __commonJS({
    "sdk/contracts/node_modules/ramda/src/internal/_xall.js"(exports, module) {
      var _curry2 = require_curry2();
      var _reduced = require_reduced();
      var _xfBase = require_xfBase();
      var XAll = /* @__PURE__ */ function() {
        function XAll2(f, xf) {
          this.xf = xf;
          this.f = f;
          this.all = true;
        }
        XAll2.prototype["@@transducer/init"] = _xfBase.init;
        XAll2.prototype["@@transducer/result"] = function(result) {
          if (this.all) {
            result = this.xf["@@transducer/step"](result, true);
          }
          return this.xf["@@transducer/result"](result);
        };
        XAll2.prototype["@@transducer/step"] = function(result, input) {
          if (!this.f(input)) {
            this.all = false;
            result = _reduced(this.xf["@@transducer/step"](result, false));
          }
          return result;
        };
        return XAll2;
      }();
      var _xall = /* @__PURE__ */ _curry2(function _xall2(f, xf) {
        return new XAll(f, xf);
      });
      module.exports = _xall;
    }
  });

  // sdk/contracts/node_modules/ramda/src/all.js
  var require_all = __commonJS({
    "sdk/contracts/node_modules/ramda/src/all.js"(exports, module) {
      var _curry2 = require_curry2();
      var _dispatchable = require_dispatchable();
      var _xall = require_xall();
      var all = /* @__PURE__ */ _curry2(
        /* @__PURE__ */ _dispatchable(["all"], _xall, function all2(fn, list) {
          var idx = 0;
          while (idx < list.length) {
            if (!fn(list[idx])) {
              return false;
            }
            idx += 1;
          }
          return true;
        })
      );
      module.exports = all;
    }
  });

  // sdk/contracts/node_modules/ramda/src/max.js
  var require_max = __commonJS({
    "sdk/contracts/node_modules/ramda/src/max.js"(exports, module) {
      var _curry2 = require_curry2();
      var max = /* @__PURE__ */ _curry2(function max2(a, b) {
        return b > a ? b : a;
      });
      module.exports = max;
    }
  });

  // sdk/contracts/node_modules/ramda/src/internal/_map.js
  var require_map = __commonJS({
    "sdk/contracts/node_modules/ramda/src/internal/_map.js"(exports, module) {
      function _map(fn, functor) {
        var idx = 0;
        var len = functor.length;
        var result = Array(len);
        while (idx < len) {
          result[idx] = fn(functor[idx]);
          idx += 1;
        }
        return result;
      }
      module.exports = _map;
    }
  });

  // sdk/contracts/node_modules/ramda/src/internal/_isString.js
  var require_isString = __commonJS({
    "sdk/contracts/node_modules/ramda/src/internal/_isString.js"(exports, module) {
      function _isString(x) {
        return Object.prototype.toString.call(x) === "[object String]";
      }
      module.exports = _isString;
    }
  });

  // sdk/contracts/node_modules/ramda/src/internal/_isArrayLike.js
  var require_isArrayLike = __commonJS({
    "sdk/contracts/node_modules/ramda/src/internal/_isArrayLike.js"(exports, module) {
      var _curry1 = require_curry1();
      var _isArray = require_isArray();
      var _isString = require_isString();
      var _isArrayLike = /* @__PURE__ */ _curry1(function isArrayLike(x) {
        if (_isArray(x)) {
          return true;
        }
        if (!x) {
          return false;
        }
        if (typeof x !== "object") {
          return false;
        }
        if (_isString(x)) {
          return false;
        }
        if (x.length === 0) {
          return true;
        }
        if (x.length > 0) {
          return x.hasOwnProperty(0) && x.hasOwnProperty(x.length - 1);
        }
        return false;
      });
      module.exports = _isArrayLike;
    }
  });

  // sdk/contracts/node_modules/ramda/src/internal/_xwrap.js
  var require_xwrap = __commonJS({
    "sdk/contracts/node_modules/ramda/src/internal/_xwrap.js"(exports, module) {
      var XWrap = /* @__PURE__ */ function() {
        function XWrap2(fn) {
          this.f = fn;
        }
        XWrap2.prototype["@@transducer/init"] = function() {
          throw new Error("init not implemented on XWrap");
        };
        XWrap2.prototype["@@transducer/result"] = function(acc) {
          return acc;
        };
        XWrap2.prototype["@@transducer/step"] = function(acc, x) {
          return this.f(acc, x);
        };
        return XWrap2;
      }();
      function _xwrap(fn) {
        return new XWrap(fn);
      }
      module.exports = _xwrap;
    }
  });

  // sdk/contracts/node_modules/ramda/src/bind.js
  var require_bind = __commonJS({
    "sdk/contracts/node_modules/ramda/src/bind.js"(exports, module) {
      var _arity = require_arity();
      var _curry2 = require_curry2();
      var bind = /* @__PURE__ */ _curry2(function bind2(fn, thisObj) {
        return _arity(fn.length, function() {
          return fn.apply(thisObj, arguments);
        });
      });
      module.exports = bind;
    }
  });

  // sdk/contracts/node_modules/ramda/src/internal/_reduce.js
  var require_reduce = __commonJS({
    "sdk/contracts/node_modules/ramda/src/internal/_reduce.js"(exports, module) {
      var _isArrayLike = require_isArrayLike();
      var _xwrap = require_xwrap();
      var bind = require_bind();
      function _arrayReduce(xf, acc, list) {
        var idx = 0;
        var len = list.length;
        while (idx < len) {
          acc = xf["@@transducer/step"](acc, list[idx]);
          if (acc && acc["@@transducer/reduced"]) {
            acc = acc["@@transducer/value"];
            break;
          }
          idx += 1;
        }
        return xf["@@transducer/result"](acc);
      }
      function _iterableReduce(xf, acc, iter) {
        var step = iter.next();
        while (!step.done) {
          acc = xf["@@transducer/step"](acc, step.value);
          if (acc && acc["@@transducer/reduced"]) {
            acc = acc["@@transducer/value"];
            break;
          }
          step = iter.next();
        }
        return xf["@@transducer/result"](acc);
      }
      function _methodReduce(xf, acc, obj, methodName) {
        return xf["@@transducer/result"](obj[methodName](bind(xf["@@transducer/step"], xf), acc));
      }
      var symIterator = typeof Symbol !== "undefined" ? Symbol.iterator : "@@iterator";
      function _reduce(fn, acc, list) {
        if (typeof fn === "function") {
          fn = _xwrap(fn);
        }
        if (_isArrayLike(list)) {
          return _arrayReduce(fn, acc, list);
        }
        if (typeof list["fantasy-land/reduce"] === "function") {
          return _methodReduce(fn, acc, list, "fantasy-land/reduce");
        }
        if (list[symIterator] != null) {
          return _iterableReduce(fn, acc, list[symIterator]());
        }
        if (typeof list.next === "function") {
          return _iterableReduce(fn, acc, list);
        }
        if (typeof list.reduce === "function") {
          return _methodReduce(fn, acc, list, "reduce");
        }
        throw new TypeError("reduce: list must be array or iterable");
      }
      module.exports = _reduce;
    }
  });

  // sdk/contracts/node_modules/ramda/src/internal/_xmap.js
  var require_xmap = __commonJS({
    "sdk/contracts/node_modules/ramda/src/internal/_xmap.js"(exports, module) {
      var _curry2 = require_curry2();
      var _xfBase = require_xfBase();
      var XMap = /* @__PURE__ */ function() {
        function XMap2(f, xf) {
          this.xf = xf;
          this.f = f;
        }
        XMap2.prototype["@@transducer/init"] = _xfBase.init;
        XMap2.prototype["@@transducer/result"] = _xfBase.result;
        XMap2.prototype["@@transducer/step"] = function(result, input) {
          return this.xf["@@transducer/step"](result, this.f(input));
        };
        return XMap2;
      }();
      var _xmap = /* @__PURE__ */ _curry2(function _xmap2(f, xf) {
        return new XMap(f, xf);
      });
      module.exports = _xmap;
    }
  });

  // sdk/contracts/node_modules/ramda/src/internal/_has.js
  var require_has = __commonJS({
    "sdk/contracts/node_modules/ramda/src/internal/_has.js"(exports, module) {
      function _has(prop, obj) {
        return Object.prototype.hasOwnProperty.call(obj, prop);
      }
      module.exports = _has;
    }
  });

  // sdk/contracts/node_modules/ramda/src/internal/_isArguments.js
  var require_isArguments = __commonJS({
    "sdk/contracts/node_modules/ramda/src/internal/_isArguments.js"(exports, module) {
      var _has = require_has();
      var toString = Object.prototype.toString;
      var _isArguments = /* @__PURE__ */ function() {
        return toString.call(arguments) === "[object Arguments]" ? function _isArguments2(x) {
          return toString.call(x) === "[object Arguments]";
        } : function _isArguments2(x) {
          return _has("callee", x);
        };
      }();
      module.exports = _isArguments;
    }
  });

  // sdk/contracts/node_modules/ramda/src/keys.js
  var require_keys = __commonJS({
    "sdk/contracts/node_modules/ramda/src/keys.js"(exports, module) {
      var _curry1 = require_curry1();
      var _has = require_has();
      var _isArguments = require_isArguments();
      var hasEnumBug = !/* @__PURE__ */ {
        toString: null
      }.propertyIsEnumerable("toString");
      var nonEnumerableProps = ["constructor", "valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"];
      var hasArgsEnumBug = /* @__PURE__ */ function() {
        "use strict";
        return arguments.propertyIsEnumerable("length");
      }();
      var contains = function contains2(list, item) {
        var idx = 0;
        while (idx < list.length) {
          if (list[idx] === item) {
            return true;
          }
          idx += 1;
        }
        return false;
      };
      var keys = typeof Object.keys === "function" && !hasArgsEnumBug ? /* @__PURE__ */ _curry1(function keys2(obj) {
        return Object(obj) !== obj ? [] : Object.keys(obj);
      }) : /* @__PURE__ */ _curry1(function keys2(obj) {
        if (Object(obj) !== obj) {
          return [];
        }
        var prop, nIdx;
        var ks = [];
        var checkArgsLength = hasArgsEnumBug && _isArguments(obj);
        for (prop in obj) {
          if (_has(prop, obj) && (!checkArgsLength || prop !== "length")) {
            ks[ks.length] = prop;
          }
        }
        if (hasEnumBug) {
          nIdx = nonEnumerableProps.length - 1;
          while (nIdx >= 0) {
            prop = nonEnumerableProps[nIdx];
            if (_has(prop, obj) && !contains(ks, prop)) {
              ks[ks.length] = prop;
            }
            nIdx -= 1;
          }
        }
        return ks;
      });
      module.exports = keys;
    }
  });

  // sdk/contracts/node_modules/ramda/src/map.js
  var require_map2 = __commonJS({
    "sdk/contracts/node_modules/ramda/src/map.js"(exports, module) {
      var _curry2 = require_curry2();
      var _dispatchable = require_dispatchable();
      var _map = require_map();
      var _reduce = require_reduce();
      var _xmap = require_xmap();
      var curryN = require_curryN2();
      var keys = require_keys();
      var map = /* @__PURE__ */ _curry2(
        /* @__PURE__ */ _dispatchable(["fantasy-land/map", "map"], _xmap, function map2(fn, functor) {
          switch (Object.prototype.toString.call(functor)) {
            case "[object Function]":
              return curryN(functor.length, function() {
                return fn.call(this, functor.apply(this, arguments));
              });
            case "[object Object]":
              return _reduce(function(acc, key) {
                acc[key] = fn(functor[key]);
                return acc;
              }, {}, keys(functor));
            default:
              return _map(fn, functor);
          }
        })
      );
      module.exports = map;
    }
  });

  // sdk/contracts/node_modules/ramda/src/internal/_isInteger.js
  var require_isInteger = __commonJS({
    "sdk/contracts/node_modules/ramda/src/internal/_isInteger.js"(exports, module) {
      module.exports = Number.isInteger || function _isInteger(n) {
        return n << 0 === n;
      };
    }
  });

  // sdk/contracts/node_modules/ramda/src/nth.js
  var require_nth = __commonJS({
    "sdk/contracts/node_modules/ramda/src/nth.js"(exports, module) {
      var _curry2 = require_curry2();
      var _isString = require_isString();
      var nth = /* @__PURE__ */ _curry2(function nth2(offset, list) {
        var idx = offset < 0 ? list.length + offset : offset;
        return _isString(list) ? list.charAt(idx) : list[idx];
      });
      module.exports = nth;
    }
  });

  // sdk/contracts/node_modules/ramda/src/prop.js
  var require_prop = __commonJS({
    "sdk/contracts/node_modules/ramda/src/prop.js"(exports, module) {
      var _curry2 = require_curry2();
      var _isInteger = require_isInteger();
      var nth = require_nth();
      var prop = /* @__PURE__ */ _curry2(function prop2(p, obj) {
        if (obj == null) {
          return;
        }
        return _isInteger(p) ? nth(p, obj) : obj[p];
      });
      module.exports = prop;
    }
  });

  // sdk/contracts/node_modules/ramda/src/pluck.js
  var require_pluck = __commonJS({
    "sdk/contracts/node_modules/ramda/src/pluck.js"(exports, module) {
      var _curry2 = require_curry2();
      var map = require_map2();
      var prop = require_prop();
      var pluck = /* @__PURE__ */ _curry2(function pluck2(p, list) {
        return map(prop(p), list);
      });
      module.exports = pluck;
    }
  });

  // sdk/contracts/node_modules/ramda/src/reduce.js
  var require_reduce2 = __commonJS({
    "sdk/contracts/node_modules/ramda/src/reduce.js"(exports, module) {
      var _curry3 = require_curry3();
      var _reduce = require_reduce();
      var reduce = /* @__PURE__ */ _curry3(_reduce);
      module.exports = reduce;
    }
  });

  // sdk/contracts/node_modules/ramda/src/allPass.js
  var require_allPass = __commonJS({
    "sdk/contracts/node_modules/ramda/src/allPass.js"(exports, module) {
      var _curry1 = require_curry1();
      var curryN = require_curryN2();
      var max = require_max();
      var pluck = require_pluck();
      var reduce = require_reduce2();
      var allPass = /* @__PURE__ */ _curry1(function allPass2(preds) {
        return curryN(reduce(max, 0, pluck("length", preds)), function() {
          var idx = 0;
          var len = preds.length;
          while (idx < len) {
            if (!preds[idx].apply(this, arguments)) {
              return false;
            }
            idx += 1;
          }
          return true;
        });
      });
      module.exports = allPass;
    }
  });

  // sdk/contracts/node_modules/ramda/src/always.js
  var require_always = __commonJS({
    "sdk/contracts/node_modules/ramda/src/always.js"(exports, module) {
      var _curry1 = require_curry1();
      var always = /* @__PURE__ */ _curry1(function always2(val) {
        return function() {
          return val;
        };
      });
      module.exports = always;
    }
  });

  // sdk/contracts/node_modules/ramda/src/and.js
  var require_and = __commonJS({
    "sdk/contracts/node_modules/ramda/src/and.js"(exports, module) {
      var _curry2 = require_curry2();
      var and = /* @__PURE__ */ _curry2(function and2(a, b) {
        return a && b;
      });
      module.exports = and;
    }
  });

  // sdk/contracts/node_modules/ramda/src/internal/_xany.js
  var require_xany = __commonJS({
    "sdk/contracts/node_modules/ramda/src/internal/_xany.js"(exports, module) {
      var _curry2 = require_curry2();
      var _reduced = require_reduced();
      var _xfBase = require_xfBase();
      var XAny = /* @__PURE__ */ function() {
        function XAny2(f, xf) {
          this.xf = xf;
          this.f = f;
          this.any = false;
        }
        XAny2.prototype["@@transducer/init"] = _xfBase.init;
        XAny2.prototype["@@transducer/result"] = function(result) {
          if (!this.any) {
            result = this.xf["@@transducer/step"](result, false);
          }
          return this.xf["@@transducer/result"](result);
        };
        XAny2.prototype["@@transducer/step"] = function(result, input) {
          if (this.f(input)) {
            this.any = true;
            result = _reduced(this.xf["@@transducer/step"](result, true));
          }
          return result;
        };
        return XAny2;
      }();
      var _xany = /* @__PURE__ */ _curry2(function _xany2(f, xf) {
        return new XAny(f, xf);
      });
      module.exports = _xany;
    }
  });

  // sdk/contracts/node_modules/ramda/src/any.js
  var require_any = __commonJS({
    "sdk/contracts/node_modules/ramda/src/any.js"(exports, module) {
      var _curry2 = require_curry2();
      var _dispatchable = require_dispatchable();
      var _xany = require_xany();
      var any = /* @__PURE__ */ _curry2(
        /* @__PURE__ */ _dispatchable(["any"], _xany, function any2(fn, list) {
          var idx = 0;
          while (idx < list.length) {
            if (fn(list[idx])) {
              return true;
            }
            idx += 1;
          }
          return false;
        })
      );
      module.exports = any;
    }
  });

  // sdk/contracts/node_modules/ramda/src/anyPass.js
  var require_anyPass = __commonJS({
    "sdk/contracts/node_modules/ramda/src/anyPass.js"(exports, module) {
      var _curry1 = require_curry1();
      var curryN = require_curryN2();
      var max = require_max();
      var pluck = require_pluck();
      var reduce = require_reduce2();
      var anyPass = /* @__PURE__ */ _curry1(function anyPass2(preds) {
        return curryN(reduce(max, 0, pluck("length", preds)), function() {
          var idx = 0;
          var len = preds.length;
          while (idx < len) {
            if (preds[idx].apply(this, arguments)) {
              return true;
            }
            idx += 1;
          }
          return false;
        });
      });
      module.exports = anyPass;
    }
  });

  // sdk/contracts/node_modules/ramda/src/ap.js
  var require_ap = __commonJS({
    "sdk/contracts/node_modules/ramda/src/ap.js"(exports, module) {
      var _concat = require_concat();
      var _curry2 = require_curry2();
      var _reduce = require_reduce();
      var map = require_map2();
      var ap = /* @__PURE__ */ _curry2(function ap2(applyF, applyX) {
        return typeof applyX["fantasy-land/ap"] === "function" ? applyX["fantasy-land/ap"](applyF) : typeof applyF.ap === "function" ? applyF.ap(applyX) : typeof applyF === "function" ? function(x) {
          return applyF(x)(applyX(x));
        } : _reduce(function(acc, f) {
          return _concat(acc, map(f, applyX));
        }, [], applyF);
      });
      module.exports = ap;
    }
  });

  // sdk/contracts/node_modules/ramda/src/internal/_aperture.js
  var require_aperture = __commonJS({
    "sdk/contracts/node_modules/ramda/src/internal/_aperture.js"(exports, module) {
      function _aperture(n, list) {
        var idx = 0;
        var limit = list.length - (n - 1);
        var acc = new Array(limit >= 0 ? limit : 0);
        while (idx < limit) {
          acc[idx] = Array.prototype.slice.call(list, idx, idx + n);
          idx += 1;
        }
        return acc;
      }
      module.exports = _aperture;
    }
  });

  // sdk/contracts/node_modules/ramda/src/internal/_xaperture.js
  var require_xaperture = __commonJS({
    "sdk/contracts/node_modules/ramda/src/internal/_xaperture.js"(exports, module) {
      var _concat = require_concat();
      var _curry2 = require_curry2();
      var _xfBase = require_xfBase();
      var XAperture = /* @__PURE__ */ function() {
        function XAperture2(n, xf) {
          this.xf = xf;
          this.pos = 0;
          this.full = false;
          this.acc = new Array(n);
        }
        XAperture2.prototype["@@transducer/init"] = _xfBase.init;
        XAperture2.prototype["@@transducer/result"] = function(result) {
          this.acc = null;
          return this.xf["@@transducer/result"](result);
        };
        XAperture2.prototype["@@transducer/step"] = function(result, input) {
          this.store(input);
          return this.full ? this.xf["@@transducer/step"](result, this.getCopy()) : result;
        };
        XAperture2.prototype.store = function(input) {
          this.acc[this.pos] = input;
          this.pos += 1;
          if (this.pos === this.acc.length) {
            this.pos = 0;
            this.full = true;
          }
        };
        XAperture2.prototype.getCopy = function() {
          return _concat(Array.prototype.slice.call(this.acc, this.pos), Array.prototype.slice.call(this.acc, 0, this.pos));
        };
        return XAperture2;
      }();
      var _xaperture = /* @__PURE__ */ _curry2(function _xaperture2(n, xf) {
        return new XAperture(n, xf);
      });
      module.exports = _xaperture;
    }
  });

  // sdk/contracts/node_modules/ramda/src/aperture.js
  var require_aperture2 = __commonJS({
    "sdk/contracts/node_modules/ramda/src/aperture.js"(exports, module) {
      var _aperture = require_aperture();
      var _curry2 = require_curry2();
      var _dispatchable = require_dispatchable();
      var _xaperture = require_xaperture();
      var aperture = /* @__PURE__ */ _curry2(
        /* @__PURE__ */ _dispatchable([], _xaperture, _aperture)
      );
      module.exports = aperture;
    }
  });

  // sdk/contracts/node_modules/ramda/src/append.js
  var require_append = __commonJS({
    "sdk/contracts/node_modules/ramda/src/append.js"(exports, module) {
      var _concat = require_concat();
      var _curry2 = require_curry2();
      var append = /* @__PURE__ */ _curry2(function append2(el, list) {
        return _concat(list, [el]);
      });
      module.exports = append;
    }
  });

  // sdk/contracts/node_modules/ramda/src/apply.js
  var require_apply = __commonJS({
    "sdk/contracts/node_modules/ramda/src/apply.js"(exports, module) {
      var _curry2 = require_curry2();
      var apply = /* @__PURE__ */ _curry2(function apply2(fn, args) {
        return fn.apply(this, args);
      });
      module.exports = apply;
    }
  });

  // sdk/contracts/node_modules/ramda/src/values.js
  var require_values = __commonJS({
    "sdk/contracts/node_modules/ramda/src/values.js"(exports, module) {
      var _curry1 = require_curry1();
      var keys = require_keys();
      var values = /* @__PURE__ */ _curry1(function values2(obj) {
        var props = keys(obj);
        var len = props.length;
        var vals = [];
        var idx = 0;
        while (idx < len) {
          vals[idx] = obj[props[idx]];
          idx += 1;
        }
        return vals;
      });
      module.exports = values;
    }
  });

  // sdk/contracts/node_modules/ramda/src/applySpec.js
  var require_applySpec = __commonJS({
    "sdk/contracts/node_modules/ramda/src/applySpec.js"(exports, module) {
      var _curry1 = require_curry1();
      var _isArray = require_isArray();
      var apply = require_apply();
      var curryN = require_curryN2();
      var max = require_max();
      var pluck = require_pluck();
      var reduce = require_reduce2();
      var keys = require_keys();
      var values = require_values();
      function mapValues(fn, obj) {
        return _isArray(obj) ? obj.map(fn) : keys(obj).reduce(function(acc, key) {
          acc[key] = fn(obj[key]);
          return acc;
        }, {});
      }
      var applySpec = /* @__PURE__ */ _curry1(function applySpec2(spec) {
        spec = mapValues(function(v) {
          return typeof v == "function" ? v : applySpec2(v);
        }, spec);
        return curryN(reduce(max, 0, pluck("length", values(spec))), function() {
          var args = arguments;
          return mapValues(function(f) {
            return apply(f, args);
          }, spec);
        });
      });
      module.exports = applySpec;
    }
  });

  // sdk/contracts/node_modules/ramda/src/applyTo.js
  var require_applyTo = __commonJS({
    "sdk/contracts/node_modules/ramda/src/applyTo.js"(exports, module) {
      var _curry2 = require_curry2();
      var applyTo = /* @__PURE__ */ _curry2(function applyTo2(x, f) {
        return f(x);
      });
      module.exports = applyTo;
    }
  });

  // sdk/contracts/node_modules/ramda/src/ascend.js
  var require_ascend = __commonJS({
    "sdk/contracts/node_modules/ramda/src/ascend.js"(exports, module) {
      var _curry3 = require_curry3();
      var ascend = /* @__PURE__ */ _curry3(function ascend2(fn, a, b) {
        var aa = fn(a);
        var bb = fn(b);
        return aa < bb ? -1 : aa > bb ? 1 : 0;
      });
      module.exports = ascend;
    }
  });

  // sdk/contracts/node_modules/ramda/src/internal/_assoc.js
  var require_assoc = __commonJS({
    "sdk/contracts/node_modules/ramda/src/internal/_assoc.js"(exports, module) {
      var _isArray = require_isArray();
      var _isInteger = require_isInteger();
      function _assoc(prop, val, obj) {
        if (_isInteger(prop) && _isArray(obj)) {
          var arr = [].concat(obj);
          arr[prop] = val;
          return arr;
        }
        var result = {};
        for (var p in obj) {
          result[p] = obj[p];
        }
        result[prop] = val;
        return result;
      }
      module.exports = _assoc;
    }
  });

  // sdk/contracts/node_modules/ramda/src/isNil.js
  var require_isNil = __commonJS({
    "sdk/contracts/node_modules/ramda/src/isNil.js"(exports, module) {
      var _curry1 = require_curry1();
      var isNil = /* @__PURE__ */ _curry1(function isNil2(x) {
        return x == null;
      });
      module.exports = isNil;
    }
  });

  // sdk/contracts/node_modules/ramda/src/assocPath.js
  var require_assocPath = __commonJS({
    "sdk/contracts/node_modules/ramda/src/assocPath.js"(exports, module) {
      var _curry3 = require_curry3();
      var _has = require_has();
      var _isInteger = require_isInteger();
      var _assoc = require_assoc();
      var isNil = require_isNil();
      var assocPath = /* @__PURE__ */ _curry3(function assocPath2(path, val, obj) {
        if (path.length === 0) {
          return val;
        }
        var idx = path[0];
        if (path.length > 1) {
          var nextObj = !isNil(obj) && _has(idx, obj) ? obj[idx] : _isInteger(path[1]) ? [] : {};
          val = assocPath2(Array.prototype.slice.call(path, 1), val, nextObj);
        }
        return _assoc(idx, val, obj);
      });
      module.exports = assocPath;
    }
  });

  // sdk/contracts/node_modules/ramda/src/assoc.js
  var require_assoc2 = __commonJS({
    "sdk/contracts/node_modules/ramda/src/assoc.js"(exports, module) {
      var _curry3 = require_curry3();
      var assocPath = require_assocPath();
      var assoc = /* @__PURE__ */ _curry3(function assoc2(prop, val, obj) {
        return assocPath([prop], val, obj);
      });
      module.exports = assoc;
    }
  });

  // sdk/contracts/node_modules/ramda/src/nAry.js
  var require_nAry = __commonJS({
    "sdk/contracts/node_modules/ramda/src/nAry.js"(exports, module) {
      var _curry2 = require_curry2();
      var nAry = /* @__PURE__ */ _curry2(function nAry2(n, fn) {
        switch (n) {
          case 0:
            return function() {
              return fn.call(this);
            };
          case 1:
            return function(a0) {
              return fn.call(this, a0);
            };
          case 2:
            return function(a0, a1) {
              return fn.call(this, a0, a1);
            };
          case 3:
            return function(a0, a1, a2) {
              return fn.call(this, a0, a1, a2);
            };
          case 4:
            return function(a0, a1, a2, a3) {
              return fn.call(this, a0, a1, a2, a3);
            };
          case 5:
            return function(a0, a1, a2, a3, a4) {
              return fn.call(this, a0, a1, a2, a3, a4);
            };
          case 6:
            return function(a0, a1, a2, a3, a4, a5) {
              return fn.call(this, a0, a1, a2, a3, a4, a5);
            };
          case 7:
            return function(a0, a1, a2, a3, a4, a5, a6) {
              return fn.call(this, a0, a1, a2, a3, a4, a5, a6);
            };
          case 8:
            return function(a0, a1, a2, a3, a4, a5, a6, a7) {
              return fn.call(this, a0, a1, a2, a3, a4, a5, a6, a7);
            };
          case 9:
            return function(a0, a1, a2, a3, a4, a5, a6, a7, a8) {
              return fn.call(this, a0, a1, a2, a3, a4, a5, a6, a7, a8);
            };
          case 10:
            return function(a0, a1, a2, a3, a4, a5, a6, a7, a8, a9) {
              return fn.call(this, a0, a1, a2, a3, a4, a5, a6, a7, a8, a9);
            };
          default:
            throw new Error("First argument to nAry must be a non-negative integer no greater than ten");
        }
      });
      module.exports = nAry;
    }
  });

  // sdk/contracts/node_modules/ramda/src/binary.js
  var require_binary = __commonJS({
    "sdk/contracts/node_modules/ramda/src/binary.js"(exports, module) {
      var _curry1 = require_curry1();
      var nAry = require_nAry();
      var binary = /* @__PURE__ */ _curry1(function binary2(fn) {
        return nAry(2, fn);
      });
      module.exports = binary;
    }
  });

  // sdk/contracts/node_modules/ramda/src/internal/_isFunction.js
  var require_isFunction = __commonJS({
    "sdk/contracts/node_modules/ramda/src/internal/_isFunction.js"(exports, module) {
      function _isFunction(x) {
        var type = Object.prototype.toString.call(x);
        return type === "[object Function]" || type === "[object AsyncFunction]" || type === "[object GeneratorFunction]" || type === "[object AsyncGeneratorFunction]";
      }
      module.exports = _isFunction;
    }
  });

  // sdk/contracts/node_modules/ramda/src/liftN.js
  var require_liftN = __commonJS({
    "sdk/contracts/node_modules/ramda/src/liftN.js"(exports, module) {
      var _curry2 = require_curry2();
      var _reduce = require_reduce();
      var ap = require_ap();
      var curryN = require_curryN2();
      var map = require_map2();
      var liftN = /* @__PURE__ */ _curry2(function liftN2(arity, fn) {
        var lifted = curryN(arity, fn);
        return curryN(arity, function() {
          return _reduce(ap, map(lifted, arguments[0]), Array.prototype.slice.call(arguments, 1));
        });
      });
      module.exports = liftN;
    }
  });

  // sdk/contracts/node_modules/ramda/src/lift.js
  var require_lift = __commonJS({
    "sdk/contracts/node_modules/ramda/src/lift.js"(exports, module) {
      var _curry1 = require_curry1();
      var liftN = require_liftN();
      var lift = /* @__PURE__ */ _curry1(function lift2(fn) {
        return liftN(fn.length, fn);
      });
      module.exports = lift;
    }
  });

  // sdk/contracts/node_modules/ramda/src/both.js
  var require_both = __commonJS({
    "sdk/contracts/node_modules/ramda/src/both.js"(exports, module) {
      var _curry2 = require_curry2();
      var _isFunction = require_isFunction();
      var and = require_and();
      var lift = require_lift();
      var both = /* @__PURE__ */ _curry2(function both2(f, g) {
        return _isFunction(f) ? function _both() {
          return f.apply(this, arguments) && g.apply(this, arguments);
        } : lift(and)(f, g);
      });
      module.exports = both;
    }
  });

  // sdk/contracts/node_modules/ramda/src/call.js
  var require_call = __commonJS({
    "sdk/contracts/node_modules/ramda/src/call.js"(exports, module) {
      var _curry1 = require_curry1();
      var call = /* @__PURE__ */ _curry1(function call2(fn) {
        return fn.apply(this, Array.prototype.slice.call(arguments, 1));
      });
      module.exports = call;
    }
  });

  // sdk/contracts/node_modules/ramda/src/internal/_makeFlat.js
  var require_makeFlat = __commonJS({
    "sdk/contracts/node_modules/ramda/src/internal/_makeFlat.js"(exports, module) {
      var _isArrayLike = require_isArrayLike();
      function _makeFlat(recursive) {
        return function flatt(list) {
          var value, jlen, j;
          var result = [];
          var idx = 0;
          var ilen = list.length;
          while (idx < ilen) {
            if (_isArrayLike(list[idx])) {
              value = recursive ? flatt(list[idx]) : list[idx];
              j = 0;
              jlen = value.length;
              while (j < jlen) {
                result[result.length] = value[j];
                j += 1;
              }
            } else {
              result[result.length] = list[idx];
            }
            idx += 1;
          }
          return result;
        };
      }
      module.exports = _makeFlat;
    }
  });

  // sdk/contracts/node_modules/ramda/src/internal/_forceReduced.js
  var require_forceReduced = __commonJS({
    "sdk/contracts/node_modules/ramda/src/internal/_forceReduced.js"(exports, module) {
      function _forceReduced(x) {
        return {
          "@@transducer/value": x,
          "@@transducer/reduced": true
        };
      }
      module.exports = _forceReduced;
    }
  });

  // sdk/contracts/node_modules/ramda/src/internal/_flatCat.js
  var require_flatCat = __commonJS({
    "sdk/contracts/node_modules/ramda/src/internal/_flatCat.js"(exports, module) {
      var _forceReduced = require_forceReduced();
      var _isArrayLike = require_isArrayLike();
      var _reduce = require_reduce();
      var _xfBase = require_xfBase();
      var preservingReduced = function(xf) {
        return {
          "@@transducer/init": _xfBase.init,
          "@@transducer/result": function(result) {
            return xf["@@transducer/result"](result);
          },
          "@@transducer/step": function(result, input) {
            var ret = xf["@@transducer/step"](result, input);
            return ret["@@transducer/reduced"] ? _forceReduced(ret) : ret;
          }
        };
      };
      var _flatCat = function _xcat(xf) {
        var rxf = preservingReduced(xf);
        return {
          "@@transducer/init": _xfBase.init,
          "@@transducer/result": function(result) {
            return rxf["@@transducer/result"](result);
          },
          "@@transducer/step": function(result, input) {
            return !_isArrayLike(input) ? _reduce(rxf, result, [input]) : _reduce(rxf, result, input);
          }
        };
      };
      module.exports = _flatCat;
    }
  });

  // sdk/contracts/node_modules/ramda/src/internal/_xchain.js
  var require_xchain = __commonJS({
    "sdk/contracts/node_modules/ramda/src/internal/_xchain.js"(exports, module) {
      var _curry2 = require_curry2();
      var _flatCat = require_flatCat();
      var map = require_map2();
      var _xchain = /* @__PURE__ */ _curry2(function _xchain2(f, xf) {
        return map(f, _flatCat(xf));
      });
      module.exports = _xchain;
    }
  });

  // sdk/contracts/node_modules/ramda/src/chain.js
  var require_chain = __commonJS({
    "sdk/contracts/node_modules/ramda/src/chain.js"(exports, module) {
      var _curry2 = require_curry2();
      var _dispatchable = require_dispatchable();
      var _makeFlat = require_makeFlat();
      var _xchain = require_xchain();
      var map = require_map2();
      var chain = /* @__PURE__ */ _curry2(
        /* @__PURE__ */ _dispatchable(["fantasy-land/chain", "chain"], _xchain, function chain2(fn, monad) {
          if (typeof monad === "function") {
            return function(x) {
              return fn(monad(x))(x);
            };
          }
          return _makeFlat(false)(map(fn, monad));
        })
      );
      module.exports = chain;
    }
  });

  // sdk/contracts/node_modules/ramda/src/clamp.js
  var require_clamp = __commonJS({
    "sdk/contracts/node_modules/ramda/src/clamp.js"(exports, module) {
      var _curry3 = require_curry3();
      var clamp = /* @__PURE__ */ _curry3(function clamp2(min, max, value) {
        if (min > max) {
          throw new Error("min must not be greater than max in clamp(min, max, value)");
        }
        return value < min ? min : value > max ? max : value;
      });
      module.exports = clamp;
    }
  });

  // sdk/contracts/node_modules/ramda/src/internal/_cloneRegExp.js
  var require_cloneRegExp = __commonJS({
    "sdk/contracts/node_modules/ramda/src/internal/_cloneRegExp.js"(exports, module) {
      function _cloneRegExp(pattern) {
        return new RegExp(pattern.source, (pattern.global ? "g" : "") + (pattern.ignoreCase ? "i" : "") + (pattern.multiline ? "m" : "") + (pattern.sticky ? "y" : "") + (pattern.unicode ? "u" : ""));
      }
      module.exports = _cloneRegExp;
    }
  });

  // sdk/contracts/node_modules/ramda/src/type.js
  var require_type = __commonJS({
    "sdk/contracts/node_modules/ramda/src/type.js"(exports, module) {
      var _curry1 = require_curry1();
      var type = /* @__PURE__ */ _curry1(function type2(val) {
        return val === null ? "Null" : val === void 0 ? "Undefined" : Object.prototype.toString.call(val).slice(8, -1);
      });
      module.exports = type;
    }
  });

  // sdk/contracts/node_modules/ramda/src/internal/_clone.js
  var require_clone = __commonJS({
    "sdk/contracts/node_modules/ramda/src/internal/_clone.js"(exports, module) {
      var _cloneRegExp = require_cloneRegExp();
      var type = require_type();
      function _clone(value, refFrom, refTo, deep) {
        var copy = function copy2(copiedValue) {
          var len = refFrom.length;
          var idx = 0;
          while (idx < len) {
            if (value === refFrom[idx]) {
              return refTo[idx];
            }
            idx += 1;
          }
          refFrom[idx] = value;
          refTo[idx] = copiedValue;
          for (var key in value) {
            if (value.hasOwnProperty(key)) {
              copiedValue[key] = deep ? _clone(value[key], refFrom, refTo, true) : value[key];
            }
          }
          return copiedValue;
        };
        switch (type(value)) {
          case "Object":
            return copy(Object.create(Object.getPrototypeOf(value)));
          case "Array":
            return copy([]);
          case "Date":
            return new Date(value.valueOf());
          case "RegExp":
            return _cloneRegExp(value);
          case "Int8Array":
          case "Uint8Array":
          case "Uint8ClampedArray":
          case "Int16Array":
          case "Uint16Array":
          case "Int32Array":
          case "Uint32Array":
          case "Float32Array":
          case "Float64Array":
          case "BigInt64Array":
          case "BigUint64Array":
            return value.slice();
          default:
            return value;
        }
      }
      module.exports = _clone;
    }
  });

  // sdk/contracts/node_modules/ramda/src/clone.js
  var require_clone2 = __commonJS({
    "sdk/contracts/node_modules/ramda/src/clone.js"(exports, module) {
      var _clone = require_clone();
      var _curry1 = require_curry1();
      var clone = /* @__PURE__ */ _curry1(function clone2(value) {
        return value != null && typeof value.clone === "function" ? value.clone() : _clone(value, [], [], true);
      });
      module.exports = clone;
    }
  });

  // sdk/contracts/node_modules/ramda/src/collectBy.js
  var require_collectBy = __commonJS({
    "sdk/contracts/node_modules/ramda/src/collectBy.js"(exports, module) {
      var _curry2 = require_curry2();
      var _reduce = require_reduce();
      var collectBy = /* @__PURE__ */ _curry2(function collectBy2(fn, list) {
        var group = _reduce(function(o, x) {
          var tag2 = fn(x);
          if (o[tag2] === void 0) {
            o[tag2] = [];
          }
          o[tag2].push(x);
          return o;
        }, {}, list);
        var newList = [];
        for (var tag in group) {
          newList.push(group[tag]);
        }
        return newList;
      });
      module.exports = collectBy;
    }
  });

  // sdk/contracts/node_modules/ramda/src/comparator.js
  var require_comparator = __commonJS({
    "sdk/contracts/node_modules/ramda/src/comparator.js"(exports, module) {
      var _curry1 = require_curry1();
      var comparator = /* @__PURE__ */ _curry1(function comparator2(pred) {
        return function(a, b) {
          return pred(a, b) ? -1 : pred(b, a) ? 1 : 0;
        };
      });
      module.exports = comparator;
    }
  });

  // sdk/contracts/node_modules/ramda/src/not.js
  var require_not = __commonJS({
    "sdk/contracts/node_modules/ramda/src/not.js"(exports, module) {
      var _curry1 = require_curry1();
      var not = /* @__PURE__ */ _curry1(function not2(a) {
        return !a;
      });
      module.exports = not;
    }
  });

  // sdk/contracts/node_modules/ramda/src/complement.js
  var require_complement = __commonJS({
    "sdk/contracts/node_modules/ramda/src/complement.js"(exports, module) {
      var lift = require_lift();
      var not = require_not();
      var complement = /* @__PURE__ */ lift(not);
      module.exports = complement;
    }
  });

  // sdk/contracts/node_modules/ramda/src/internal/_pipe.js
  var require_pipe = __commonJS({
    "sdk/contracts/node_modules/ramda/src/internal/_pipe.js"(exports, module) {
      function _pipe(f, g) {
        return function() {
          return g.call(this, f.apply(this, arguments));
        };
      }
      module.exports = _pipe;
    }
  });

  // sdk/contracts/node_modules/ramda/src/internal/_checkForMethod.js
  var require_checkForMethod = __commonJS({
    "sdk/contracts/node_modules/ramda/src/internal/_checkForMethod.js"(exports, module) {
      var _isArray = require_isArray();
      function _checkForMethod(methodname, fn) {
        return function() {
          var length = arguments.length;
          if (length === 0) {
            return fn();
          }
          var obj = arguments[length - 1];
          return _isArray(obj) || typeof obj[methodname] !== "function" ? fn.apply(this, arguments) : obj[methodname].apply(obj, Array.prototype.slice.call(arguments, 0, length - 1));
        };
      }
      module.exports = _checkForMethod;
    }
  });

  // sdk/contracts/node_modules/ramda/src/slice.js
  var require_slice = __commonJS({
    "sdk/contracts/node_modules/ramda/src/slice.js"(exports, module) {
      var _checkForMethod = require_checkForMethod();
      var _curry3 = require_curry3();
      var slice = /* @__PURE__ */ _curry3(
        /* @__PURE__ */ _checkForMethod("slice", function slice2(fromIndex, toIndex, list) {
          return Array.prototype.slice.call(list, fromIndex, toIndex);
        })
      );
      module.exports = slice;
    }
  });

  // sdk/contracts/node_modules/ramda/src/tail.js
  var require_tail = __commonJS({
    "sdk/contracts/node_modules/ramda/src/tail.js"(exports, module) {
      var _checkForMethod = require_checkForMethod();
      var _curry1 = require_curry1();
      var slice = require_slice();
      var tail = /* @__PURE__ */ _curry1(
        /* @__PURE__ */ _checkForMethod(
          "tail",
          /* @__PURE__ */ slice(1, Infinity)
        )
      );
      module.exports = tail;
    }
  });

  // sdk/contracts/node_modules/ramda/src/pipe.js
  var require_pipe2 = __commonJS({
    "sdk/contracts/node_modules/ramda/src/pipe.js"(exports, module) {
      var _arity = require_arity();
      var _pipe = require_pipe();
      var reduce = require_reduce2();
      var tail = require_tail();
      function pipe() {
        if (arguments.length === 0) {
          throw new Error("pipe requires at least one argument");
        }
        return _arity(arguments[0].length, reduce(_pipe, arguments[0], tail(arguments)));
      }
      module.exports = pipe;
    }
  });

  // sdk/contracts/node_modules/ramda/src/reverse.js
  var require_reverse = __commonJS({
    "sdk/contracts/node_modules/ramda/src/reverse.js"(exports, module) {
      var _curry1 = require_curry1();
      var _isString = require_isString();
      var reverse = /* @__PURE__ */ _curry1(function reverse2(list) {
        return _isString(list) ? list.split("").reverse().join("") : Array.prototype.slice.call(list, 0).reverse();
      });
      module.exports = reverse;
    }
  });

  // sdk/contracts/node_modules/ramda/src/compose.js
  var require_compose = __commonJS({
    "sdk/contracts/node_modules/ramda/src/compose.js"(exports, module) {
      var pipe = require_pipe2();
      var reverse = require_reverse();
      function compose() {
        if (arguments.length === 0) {
          throw new Error("compose requires at least one argument");
        }
        return pipe.apply(this, reverse(arguments));
      }
      module.exports = compose;
    }
  });

  // sdk/contracts/node_modules/ramda/src/head.js
  var require_head = __commonJS({
    "sdk/contracts/node_modules/ramda/src/head.js"(exports, module) {
      var nth = require_nth();
      var head = /* @__PURE__ */ nth(0);
      module.exports = head;
    }
  });

  // sdk/contracts/node_modules/ramda/src/internal/_identity.js
  var require_identity = __commonJS({
    "sdk/contracts/node_modules/ramda/src/internal/_identity.js"(exports, module) {
      function _identity(x) {
        return x;
      }
      module.exports = _identity;
    }
  });

  // sdk/contracts/node_modules/ramda/src/identity.js
  var require_identity2 = __commonJS({
    "sdk/contracts/node_modules/ramda/src/identity.js"(exports, module) {
      var _curry1 = require_curry1();
      var _identity = require_identity();
      var identity = /* @__PURE__ */ _curry1(_identity);
      module.exports = identity;
    }
  });

  // sdk/contracts/node_modules/ramda/src/pipeWith.js
  var require_pipeWith = __commonJS({
    "sdk/contracts/node_modules/ramda/src/pipeWith.js"(exports, module) {
      var _arity = require_arity();
      var _curry2 = require_curry2();
      var head = require_head();
      var _reduce = require_reduce();
      var tail = require_tail();
      var identity = require_identity2();
      var pipeWith = /* @__PURE__ */ _curry2(function pipeWith2(xf, list) {
        if (list.length <= 0) {
          return identity;
        }
        var headList = head(list);
        var tailList = tail(list);
        return _arity(headList.length, function() {
          return _reduce(function(result, f) {
            return xf.call(this, f, result);
          }, headList.apply(this, arguments), tailList);
        });
      });
      module.exports = pipeWith;
    }
  });

  // sdk/contracts/node_modules/ramda/src/composeWith.js
  var require_composeWith = __commonJS({
    "sdk/contracts/node_modules/ramda/src/composeWith.js"(exports, module) {
      var _curry2 = require_curry2();
      var pipeWith = require_pipeWith();
      var reverse = require_reverse();
      var composeWith = /* @__PURE__ */ _curry2(function composeWith2(xf, list) {
        return pipeWith.apply(this, [xf, reverse(list)]);
      });
      module.exports = composeWith;
    }
  });

  // sdk/contracts/node_modules/ramda/src/internal/_arrayFromIterator.js
  var require_arrayFromIterator = __commonJS({
    "sdk/contracts/node_modules/ramda/src/internal/_arrayFromIterator.js"(exports, module) {
      function _arrayFromIterator(iter) {
        var list = [];
        var next;
        while (!(next = iter.next()).done) {
          list.push(next.value);
        }
        return list;
      }
      module.exports = _arrayFromIterator;
    }
  });

  // sdk/contracts/node_modules/ramda/src/internal/_includesWith.js
  var require_includesWith = __commonJS({
    "sdk/contracts/node_modules/ramda/src/internal/_includesWith.js"(exports, module) {
      function _includesWith(pred, x, list) {
        var idx = 0;
        var len = list.length;
        while (idx < len) {
          if (pred(x, list[idx])) {
            return true;
          }
          idx += 1;
        }
        return false;
      }
      module.exports = _includesWith;
    }
  });

  // sdk/contracts/node_modules/ramda/src/internal/_functionName.js
  var require_functionName = __commonJS({
    "sdk/contracts/node_modules/ramda/src/internal/_functionName.js"(exports, module) {
      function _functionName(f) {
        var match = String(f).match(/^function (\w*)/);
        return match == null ? "" : match[1];
      }
      module.exports = _functionName;
    }
  });

  // sdk/contracts/node_modules/ramda/src/internal/_objectIs.js
  var require_objectIs = __commonJS({
    "sdk/contracts/node_modules/ramda/src/internal/_objectIs.js"(exports, module) {
      function _objectIs(a, b) {
        if (a === b) {
          return a !== 0 || 1 / a === 1 / b;
        } else {
          return a !== a && b !== b;
        }
      }
      module.exports = typeof Object.is === "function" ? Object.is : _objectIs;
    }
  });

  // sdk/contracts/node_modules/ramda/src/internal/_equals.js
  var require_equals = __commonJS({
    "sdk/contracts/node_modules/ramda/src/internal/_equals.js"(exports, module) {
      var _arrayFromIterator = require_arrayFromIterator();
      var _includesWith = require_includesWith();
      var _functionName = require_functionName();
      var _has = require_has();
      var _objectIs = require_objectIs();
      var keys = require_keys();
      var type = require_type();
      function _uniqContentEquals(aIterator, bIterator, stackA, stackB) {
        var a = _arrayFromIterator(aIterator);
        var b = _arrayFromIterator(bIterator);
        function eq(_a, _b) {
          return _equals(_a, _b, stackA.slice(), stackB.slice());
        }
        return !_includesWith(function(b2, aItem) {
          return !_includesWith(eq, aItem, b2);
        }, b, a);
      }
      function _equals(a, b, stackA, stackB) {
        if (_objectIs(a, b)) {
          return true;
        }
        var typeA = type(a);
        if (typeA !== type(b)) {
          return false;
        }
        if (typeof a["fantasy-land/equals"] === "function" || typeof b["fantasy-land/equals"] === "function") {
          return typeof a["fantasy-land/equals"] === "function" && a["fantasy-land/equals"](b) && typeof b["fantasy-land/equals"] === "function" && b["fantasy-land/equals"](a);
        }
        if (typeof a.equals === "function" || typeof b.equals === "function") {
          return typeof a.equals === "function" && a.equals(b) && typeof b.equals === "function" && b.equals(a);
        }
        switch (typeA) {
          case "Arguments":
          case "Array":
          case "Object":
            if (typeof a.constructor === "function" && _functionName(a.constructor) === "Promise") {
              return a === b;
            }
            break;
          case "Boolean":
          case "Number":
          case "String":
            if (!(typeof a === typeof b && _objectIs(a.valueOf(), b.valueOf()))) {
              return false;
            }
            break;
          case "Date":
            if (!_objectIs(a.valueOf(), b.valueOf())) {
              return false;
            }
            break;
          case "Error":
            return a.name === b.name && a.message === b.message;
          case "RegExp":
            if (!(a.source === b.source && a.global === b.global && a.ignoreCase === b.ignoreCase && a.multiline === b.multiline && a.sticky === b.sticky && a.unicode === b.unicode)) {
              return false;
            }
            break;
        }
        var idx = stackA.length - 1;
        while (idx >= 0) {
          if (stackA[idx] === a) {
            return stackB[idx] === b;
          }
          idx -= 1;
        }
        switch (typeA) {
          case "Map":
            if (a.size !== b.size) {
              return false;
            }
            return _uniqContentEquals(a.entries(), b.entries(), stackA.concat([a]), stackB.concat([b]));
          case "Set":
            if (a.size !== b.size) {
              return false;
            }
            return _uniqContentEquals(a.values(), b.values(), stackA.concat([a]), stackB.concat([b]));
          case "Arguments":
          case "Array":
          case "Object":
          case "Boolean":
          case "Number":
          case "String":
          case "Date":
          case "Error":
          case "RegExp":
          case "Int8Array":
          case "Uint8Array":
          case "Uint8ClampedArray":
          case "Int16Array":
          case "Uint16Array":
          case "Int32Array":
          case "Uint32Array":
          case "Float32Array":
          case "Float64Array":
          case "ArrayBuffer":
            break;
          default:
            return false;
        }
        var keysA = keys(a);
        if (keysA.length !== keys(b).length) {
          return false;
        }
        var extendedStackA = stackA.concat([a]);
        var extendedStackB = stackB.concat([b]);
        idx = keysA.length - 1;
        while (idx >= 0) {
          var key = keysA[idx];
          if (!(_has(key, b) && _equals(b[key], a[key], extendedStackA, extendedStackB))) {
            return false;
          }
          idx -= 1;
        }
        return true;
      }
      module.exports = _equals;
    }
  });

  // sdk/contracts/node_modules/ramda/src/equals.js
  var require_equals2 = __commonJS({
    "sdk/contracts/node_modules/ramda/src/equals.js"(exports, module) {
      var _curry2 = require_curry2();
      var _equals = require_equals();
      var equals = /* @__PURE__ */ _curry2(function equals2(a, b) {
        return _equals(a, b, [], []);
      });
      module.exports = equals;
    }
  });

  // sdk/contracts/node_modules/ramda/src/internal/_indexOf.js
  var require_indexOf = __commonJS({
    "sdk/contracts/node_modules/ramda/src/internal/_indexOf.js"(exports, module) {
      var equals = require_equals2();
      function _indexOf(list, a, idx) {
        var inf, item;
        if (typeof list.indexOf === "function") {
          switch (typeof a) {
            case "number":
              if (a === 0) {
                inf = 1 / a;
                while (idx < list.length) {
                  item = list[idx];
                  if (item === 0 && 1 / item === inf) {
                    return idx;
                  }
                  idx += 1;
                }
                return -1;
              } else if (a !== a) {
                while (idx < list.length) {
                  item = list[idx];
                  if (typeof item === "number" && item !== item) {
                    return idx;
                  }
                  idx += 1;
                }
                return -1;
              }
              return list.indexOf(a, idx);
            case "string":
            case "boolean":
            case "function":
            case "undefined":
              return list.indexOf(a, idx);
            case "object":
              if (a === null) {
                return list.indexOf(a, idx);
              }
          }
        }
        while (idx < list.length) {
          if (equals(list[idx], a)) {
            return idx;
          }
          idx += 1;
        }
        return -1;
      }
      module.exports = _indexOf;
    }
  });

  // sdk/contracts/node_modules/ramda/src/internal/_includes.js
  var require_includes = __commonJS({
    "sdk/contracts/node_modules/ramda/src/internal/_includes.js"(exports, module) {
      var _indexOf = require_indexOf();
      function _includes(a, list) {
        return _indexOf(list, a, 0) >= 0;
      }
      module.exports = _includes;
    }
  });

  // sdk/contracts/node_modules/ramda/src/internal/_quote.js
  var require_quote = __commonJS({
    "sdk/contracts/node_modules/ramda/src/internal/_quote.js"(exports, module) {
      function _quote(s) {
        var escaped = s.replace(/\\/g, "\\\\").replace(/[\b]/g, "\\b").replace(/\f/g, "\\f").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/\t/g, "\\t").replace(/\v/g, "\\v").replace(/\0/g, "\\0");
        return '"' + escaped.replace(/"/g, '\\"') + '"';
      }
      module.exports = _quote;
    }
  });

  // sdk/contracts/node_modules/ramda/src/internal/_toISOString.js
  var require_toISOString = __commonJS({
    "sdk/contracts/node_modules/ramda/src/internal/_toISOString.js"(exports, module) {
      var pad = function pad2(n) {
        return (n < 10 ? "0" : "") + n;
      };
      var _toISOString = typeof Date.prototype.toISOString === "function" ? function _toISOString2(d) {
        return d.toISOString();
      } : function _toISOString2(d) {
        return d.getUTCFullYear() + "-" + pad(d.getUTCMonth() + 1) + "-" + pad(d.getUTCDate()) + "T" + pad(d.getUTCHours()) + ":" + pad(d.getUTCMinutes()) + ":" + pad(d.getUTCSeconds()) + "." + (d.getUTCMilliseconds() / 1e3).toFixed(3).slice(2, 5) + "Z";
      };
      module.exports = _toISOString;
    }
  });

  // sdk/contracts/node_modules/ramda/src/internal/_complement.js
  var require_complement2 = __commonJS({
    "sdk/contracts/node_modules/ramda/src/internal/_complement.js"(exports, module) {
      function _complement(f) {
        return function() {
          return !f.apply(this, arguments);
        };
      }
      module.exports = _complement;
    }
  });

  // sdk/contracts/node_modules/ramda/src/internal/_filter.js
  var require_filter = __commonJS({
    "sdk/contracts/node_modules/ramda/src/internal/_filter.js"(exports, module) {
      function _filter(fn, list) {
        var idx = 0;
        var len = list.length;
        var result = [];
        while (idx < len) {
          if (fn(list[idx])) {
            result[result.length] = list[idx];
          }
          idx += 1;
        }
        return result;
      }
      module.exports = _filter;
    }
  });

  // sdk/contracts/node_modules/ramda/src/internal/_isObject.js
  var require_isObject = __commonJS({
    "sdk/contracts/node_modules/ramda/src/internal/_isObject.js"(exports, module) {
      function _isObject(x) {
        return Object.prototype.toString.call(x) === "[object Object]";
      }
      module.exports = _isObject;
    }
  });

  // sdk/contracts/node_modules/ramda/src/internal/_xfilter.js
  var require_xfilter = __commonJS({
    "sdk/contracts/node_modules/ramda/src/internal/_xfilter.js"(exports, module) {
      var _curry2 = require_curry2();
      var _xfBase = require_xfBase();
      var XFilter = /* @__PURE__ */ function() {
        function XFilter2(f, xf) {
          this.xf = xf;
          this.f = f;
        }
        XFilter2.prototype["@@transducer/init"] = _xfBase.init;
        XFilter2.prototype["@@transducer/result"] = _xfBase.result;
        XFilter2.prototype["@@transducer/step"] = function(result, input) {
          return this.f(input) ? this.xf["@@transducer/step"](result, input) : result;
        };
        return XFilter2;
      }();
      var _xfilter = /* @__PURE__ */ _curry2(function _xfilter2(f, xf) {
        return new XFilter(f, xf);
      });
      module.exports = _xfilter;
    }
  });

  // sdk/contracts/node_modules/ramda/src/filter.js
  var require_filter2 = __commonJS({
    "sdk/contracts/node_modules/ramda/src/filter.js"(exports, module) {
      var _curry2 = require_curry2();
      var _dispatchable = require_dispatchable();
      var _filter = require_filter();
      var _isObject = require_isObject();
      var _reduce = require_reduce();
      var _xfilter = require_xfilter();
      var keys = require_keys();
      var filter = /* @__PURE__ */ _curry2(
        /* @__PURE__ */ _dispatchable(["fantasy-land/filter", "filter"], _xfilter, function(pred, filterable) {
          return _isObject(filterable) ? _reduce(function(acc, key) {
            if (pred(filterable[key])) {
              acc[key] = filterable[key];
            }
            return acc;
          }, {}, keys(filterable)) : _filter(pred, filterable);
        })
      );
      module.exports = filter;
    }
  });

  // sdk/contracts/node_modules/ramda/src/reject.js
  var require_reject = __commonJS({
    "sdk/contracts/node_modules/ramda/src/reject.js"(exports, module) {
      var _complement = require_complement2();
      var _curry2 = require_curry2();
      var filter = require_filter2();
      var reject = /* @__PURE__ */ _curry2(function reject2(pred, filterable) {
        return filter(_complement(pred), filterable);
      });
      module.exports = reject;
    }
  });

  // sdk/contracts/node_modules/ramda/src/internal/_toString.js
  var require_toString = __commonJS({
    "sdk/contracts/node_modules/ramda/src/internal/_toString.js"(exports, module) {
      var _includes = require_includes();
      var _map = require_map();
      var _quote = require_quote();
      var _toISOString = require_toISOString();
      var keys = require_keys();
      var reject = require_reject();
      function _toString(x, seen) {
        var recur = function recur2(y) {
          var xs = seen.concat([x]);
          return _includes(y, xs) ? "<Circular>" : _toString(y, xs);
        };
        var mapPairs = function(obj, keys2) {
          return _map(function(k) {
            return _quote(k) + ": " + recur(obj[k]);
          }, keys2.slice().sort());
        };
        switch (Object.prototype.toString.call(x)) {
          case "[object Arguments]":
            return "(function() { return arguments; }(" + _map(recur, x).join(", ") + "))";
          case "[object Array]":
            return "[" + _map(recur, x).concat(mapPairs(x, reject(function(k) {
              return /^\d+$/.test(k);
            }, keys(x)))).join(", ") + "]";
          case "[object Boolean]":
            return typeof x === "object" ? "new Boolean(" + recur(x.valueOf()) + ")" : x.toString();
          case "[object Date]":
            return "new Date(" + (isNaN(x.valueOf()) ? recur(NaN) : _quote(_toISOString(x))) + ")";
          case "[object Null]":
            return "null";
          case "[object Number]":
            return typeof x === "object" ? "new Number(" + recur(x.valueOf()) + ")" : 1 / x === -Infinity ? "-0" : x.toString(10);
          case "[object String]":
            return typeof x === "object" ? "new String(" + recur(x.valueOf()) + ")" : _quote(x);
          case "[object Undefined]":
            return "undefined";
          default:
            if (typeof x.toString === "function") {
              var repr = x.toString();
              if (repr !== "[object Object]") {
                return repr;
              }
            }
            return "{" + mapPairs(x, keys(x)).join(", ") + "}";
        }
      }
      module.exports = _toString;
    }
  });

  // sdk/contracts/node_modules/ramda/src/toString.js
  var require_toString2 = __commonJS({
    "sdk/contracts/node_modules/ramda/src/toString.js"(exports, module) {
      var _curry1 = require_curry1();
      var _toString = require_toString();
      var toString = /* @__PURE__ */ _curry1(function toString2(val) {
        return _toString(val, []);
      });
      module.exports = toString;
    }
  });

  // sdk/contracts/node_modules/ramda/src/concat.js
  var require_concat2 = __commonJS({
    "sdk/contracts/node_modules/ramda/src/concat.js"(exports, module) {
      var _curry2 = require_curry2();
      var _isArray = require_isArray();
      var _isFunction = require_isFunction();
      var _isString = require_isString();
      var toString = require_toString2();
      var concat = /* @__PURE__ */ _curry2(function concat2(a, b) {
        if (_isArray(a)) {
          if (_isArray(b)) {
            return a.concat(b);
          }
          throw new TypeError(toString(b) + " is not an array");
        }
        if (_isString(a)) {
          if (_isString(b)) {
            return a + b;
          }
          throw new TypeError(toString(b) + " is not a string");
        }
        if (a != null && _isFunction(a["fantasy-land/concat"])) {
          return a["fantasy-land/concat"](b);
        }
        if (a != null && _isFunction(a.concat)) {
          return a.concat(b);
        }
        throw new TypeError(toString(a) + ' does not have a method named "concat" or "fantasy-land/concat"');
      });
      module.exports = concat;
    }
  });

  // sdk/contracts/node_modules/ramda/src/cond.js
  var require_cond = __commonJS({
    "sdk/contracts/node_modules/ramda/src/cond.js"(exports, module) {
      var _arity = require_arity();
      var _curry1 = require_curry1();
      var map = require_map2();
      var max = require_max();
      var reduce = require_reduce2();
      var cond = /* @__PURE__ */ _curry1(function cond2(pairs) {
        var arity = reduce(max, 0, map(function(pair) {
          return pair[0].length;
        }, pairs));
        return _arity(arity, function() {
          var idx = 0;
          while (idx < pairs.length) {
            if (pairs[idx][0].apply(this, arguments)) {
              return pairs[idx][1].apply(this, arguments);
            }
            idx += 1;
          }
        });
      });
      module.exports = cond;
    }
  });

  // sdk/contracts/node_modules/ramda/src/curry.js
  var require_curry = __commonJS({
    "sdk/contracts/node_modules/ramda/src/curry.js"(exports, module) {
      var _curry1 = require_curry1();
      var curryN = require_curryN2();
      var curry = /* @__PURE__ */ _curry1(function curry2(fn) {
        return curryN(fn.length, fn);
      });
      module.exports = curry;
    }
  });

  // sdk/contracts/node_modules/ramda/src/constructN.js
  var require_constructN = __commonJS({
    "sdk/contracts/node_modules/ramda/src/constructN.js"(exports, module) {
      var _curry2 = require_curry2();
      var curry = require_curry();
      var nAry = require_nAry();
      var constructN = /* @__PURE__ */ _curry2(function constructN2(n, Fn) {
        if (n > 10) {
          throw new Error("Constructor with greater than ten arguments");
        }
        if (n === 0) {
          return function() {
            return new Fn();
          };
        }
        return curry(nAry(n, function($0, $1, $2, $3, $4, $5, $6, $7, $8, $9) {
          switch (arguments.length) {
            case 1:
              return new Fn($0);
            case 2:
              return new Fn($0, $1);
            case 3:
              return new Fn($0, $1, $2);
            case 4:
              return new Fn($0, $1, $2, $3);
            case 5:
              return new Fn($0, $1, $2, $3, $4);
            case 6:
              return new Fn($0, $1, $2, $3, $4, $5);
            case 7:
              return new Fn($0, $1, $2, $3, $4, $5, $6);
            case 8:
              return new Fn($0, $1, $2, $3, $4, $5, $6, $7);
            case 9:
              return new Fn($0, $1, $2, $3, $4, $5, $6, $7, $8);
            case 10:
              return new Fn($0, $1, $2, $3, $4, $5, $6, $7, $8, $9);
          }
        }));
      });
      module.exports = constructN;
    }
  });

  // sdk/contracts/node_modules/ramda/src/construct.js
  var require_construct = __commonJS({
    "sdk/contracts/node_modules/ramda/src/construct.js"(exports, module) {
      var _curry1 = require_curry1();
      var constructN = require_constructN();
      var construct = /* @__PURE__ */ _curry1(function construct2(Fn) {
        return constructN(Fn.length, Fn);
      });
      module.exports = construct;
    }
  });

  // sdk/contracts/node_modules/ramda/src/converge.js
  var require_converge = __commonJS({
    "sdk/contracts/node_modules/ramda/src/converge.js"(exports, module) {
      var _curry2 = require_curry2();
      var _map = require_map();
      var curryN = require_curryN2();
      var max = require_max();
      var pluck = require_pluck();
      var reduce = require_reduce2();
      var converge = /* @__PURE__ */ _curry2(function converge2(after, fns) {
        return curryN(reduce(max, 0, pluck("length", fns)), function() {
          var args = arguments;
          var context = this;
          return after.apply(context, _map(function(fn) {
            return fn.apply(context, args);
          }, fns));
        });
      });
      module.exports = converge;
    }
  });

  // sdk/contracts/node_modules/ramda/src/count.js
  var require_count = __commonJS({
    "sdk/contracts/node_modules/ramda/src/count.js"(exports, module) {
      var _reduce = require_reduce();
      var curry = require_curry();
      var count = /* @__PURE__ */ curry(function(pred, list) {
        return _reduce(function(a, e) {
          return pred(e) ? a + 1 : a;
        }, 0, list);
      });
      module.exports = count;
    }
  });

  // sdk/contracts/node_modules/ramda/src/internal/_xreduceBy.js
  var require_xreduceBy = __commonJS({
    "sdk/contracts/node_modules/ramda/src/internal/_xreduceBy.js"(exports, module) {
      var _curryN = require_curryN();
      var _has = require_has();
      var _xfBase = require_xfBase();
      var XReduceBy = /* @__PURE__ */ function() {
        function XReduceBy2(valueFn, valueAcc, keyFn, xf) {
          this.valueFn = valueFn;
          this.valueAcc = valueAcc;
          this.keyFn = keyFn;
          this.xf = xf;
          this.inputs = {};
        }
        XReduceBy2.prototype["@@transducer/init"] = _xfBase.init;
        XReduceBy2.prototype["@@transducer/result"] = function(result) {
          var key;
          for (key in this.inputs) {
            if (_has(key, this.inputs)) {
              result = this.xf["@@transducer/step"](result, this.inputs[key]);
              if (result["@@transducer/reduced"]) {
                result = result["@@transducer/value"];
                break;
              }
            }
          }
          this.inputs = null;
          return this.xf["@@transducer/result"](result);
        };
        XReduceBy2.prototype["@@transducer/step"] = function(result, input) {
          var key = this.keyFn(input);
          this.inputs[key] = this.inputs[key] || [key, this.valueAcc];
          this.inputs[key][1] = this.valueFn(this.inputs[key][1], input);
          return result;
        };
        return XReduceBy2;
      }();
      var _xreduceBy = /* @__PURE__ */ _curryN(4, [], function _xreduceBy2(valueFn, valueAcc, keyFn, xf) {
        return new XReduceBy(valueFn, valueAcc, keyFn, xf);
      });
      module.exports = _xreduceBy;
    }
  });

  // sdk/contracts/node_modules/ramda/src/reduceBy.js
  var require_reduceBy = __commonJS({
    "sdk/contracts/node_modules/ramda/src/reduceBy.js"(exports, module) {
      var _clone = require_clone();
      var _curryN = require_curryN();
      var _dispatchable = require_dispatchable();
      var _has = require_has();
      var _reduce = require_reduce();
      var _reduced = require_reduced();
      var _xreduceBy = require_xreduceBy();
      var reduceBy = /* @__PURE__ */ _curryN(
        4,
        [],
        /* @__PURE__ */ _dispatchable([], _xreduceBy, function reduceBy2(valueFn, valueAcc, keyFn, list) {
          return _reduce(function(acc, elt) {
            var key = keyFn(elt);
            var value = valueFn(_has(key, acc) ? acc[key] : _clone(valueAcc, [], [], false), elt);
            if (value && value["@@transducer/reduced"]) {
              return _reduced(acc);
            }
            acc[key] = value;
            return acc;
          }, {}, list);
        })
      );
      module.exports = reduceBy;
    }
  });

  // sdk/contracts/node_modules/ramda/src/countBy.js
  var require_countBy = __commonJS({
    "sdk/contracts/node_modules/ramda/src/countBy.js"(exports, module) {
      var reduceBy = require_reduceBy();
      var countBy = /* @__PURE__ */ reduceBy(function(acc, elem) {
        return acc + 1;
      }, 0);
      module.exports = countBy;
    }
  });

  // sdk/contracts/node_modules/ramda/src/dec.js
  var require_dec = __commonJS({
    "sdk/contracts/node_modules/ramda/src/dec.js"(exports, module) {
      var add = require_add();
      var dec = /* @__PURE__ */ add(-1);
      module.exports = dec;
    }
  });

  // sdk/contracts/node_modules/ramda/src/defaultTo.js
  var require_defaultTo = __commonJS({
    "sdk/contracts/node_modules/ramda/src/defaultTo.js"(exports, module) {
      var _curry2 = require_curry2();
      var defaultTo = /* @__PURE__ */ _curry2(function defaultTo2(d, v) {
        return v == null || v !== v ? d : v;
      });
      module.exports = defaultTo;
    }
  });

  // sdk/contracts/node_modules/ramda/src/descend.js
  var require_descend = __commonJS({
    "sdk/contracts/node_modules/ramda/src/descend.js"(exports, module) {
      var _curry3 = require_curry3();
      var descend = /* @__PURE__ */ _curry3(function descend2(fn, a, b) {
        var aa = fn(a);
        var bb = fn(b);
        return aa > bb ? -1 : aa < bb ? 1 : 0;
      });
      module.exports = descend;
    }
  });

  // sdk/contracts/node_modules/ramda/src/internal/_Set.js
  var require_Set = __commonJS({
    "sdk/contracts/node_modules/ramda/src/internal/_Set.js"(exports, module) {
      var _includes = require_includes();
      var _Set = /* @__PURE__ */ function() {
        function _Set2() {
          this._nativeSet = typeof Set === "function" ? /* @__PURE__ */ new Set() : null;
          this._items = {};
        }
        _Set2.prototype.add = function(item) {
          return !hasOrAdd(item, true, this);
        };
        _Set2.prototype.has = function(item) {
          return hasOrAdd(item, false, this);
        };
        return _Set2;
      }();
      function hasOrAdd(item, shouldAdd, set) {
        var type = typeof item;
        var prevSize, newSize;
        switch (type) {
          case "string":
          case "number":
            if (item === 0 && 1 / item === -Infinity) {
              if (set._items["-0"]) {
                return true;
              } else {
                if (shouldAdd) {
                  set._items["-0"] = true;
                }
                return false;
              }
            }
            if (set._nativeSet !== null) {
              if (shouldAdd) {
                prevSize = set._nativeSet.size;
                set._nativeSet.add(item);
                newSize = set._nativeSet.size;
                return newSize === prevSize;
              } else {
                return set._nativeSet.has(item);
              }
            } else {
              if (!(type in set._items)) {
                if (shouldAdd) {
                  set._items[type] = {};
                  set._items[type][item] = true;
                }
                return false;
              } else if (item in set._items[type]) {
                return true;
              } else {
                if (shouldAdd) {
                  set._items[type][item] = true;
                }
                return false;
              }
            }
          case "boolean":
            if (type in set._items) {
              var bIdx = item ? 1 : 0;
              if (set._items[type][bIdx]) {
                return true;
              } else {
                if (shouldAdd) {
                  set._items[type][bIdx] = true;
                }
                return false;
              }
            } else {
              if (shouldAdd) {
                set._items[type] = item ? [false, true] : [true, false];
              }
              return false;
            }
          case "function":
            if (set._nativeSet !== null) {
              if (shouldAdd) {
                prevSize = set._nativeSet.size;
                set._nativeSet.add(item);
                newSize = set._nativeSet.size;
                return newSize === prevSize;
              } else {
                return set._nativeSet.has(item);
              }
            } else {
              if (!(type in set._items)) {
                if (shouldAdd) {
                  set._items[type] = [item];
                }
                return false;
              }
              if (!_includes(item, set._items[type])) {
                if (shouldAdd) {
                  set._items[type].push(item);
                }
                return false;
              }
              return true;
            }
          case "undefined":
            if (set._items[type]) {
              return true;
            } else {
              if (shouldAdd) {
                set._items[type] = true;
              }
              return false;
            }
          case "object":
            if (item === null) {
              if (!set._items["null"]) {
                if (shouldAdd) {
                  set._items["null"] = true;
                }
                return false;
              }
              return true;
            }
          default:
            type = Object.prototype.toString.call(item);
            if (!(type in set._items)) {
              if (shouldAdd) {
                set._items[type] = [item];
              }
              return false;
            }
            if (!_includes(item, set._items[type])) {
              if (shouldAdd) {
                set._items[type].push(item);
              }
              return false;
            }
            return true;
        }
      }
      module.exports = _Set;
    }
  });

  // sdk/contracts/node_modules/ramda/src/difference.js
  var require_difference = __commonJS({
    "sdk/contracts/node_modules/ramda/src/difference.js"(exports, module) {
      var _curry2 = require_curry2();
      var _Set = require_Set();
      var difference = /* @__PURE__ */ _curry2(function difference2(first, second) {
        var out = [];
        var idx = 0;
        var firstLen = first.length;
        var secondLen = second.length;
        var toFilterOut = new _Set();
        for (var i = 0; i < secondLen; i += 1) {
          toFilterOut.add(second[i]);
        }
        while (idx < firstLen) {
          if (toFilterOut.add(first[idx])) {
            out[out.length] = first[idx];
          }
          idx += 1;
        }
        return out;
      });
      module.exports = difference;
    }
  });

  // sdk/contracts/node_modules/ramda/src/differenceWith.js
  var require_differenceWith = __commonJS({
    "sdk/contracts/node_modules/ramda/src/differenceWith.js"(exports, module) {
      var _includesWith = require_includesWith();
      var _curry3 = require_curry3();
      var differenceWith = /* @__PURE__ */ _curry3(function differenceWith2(pred, first, second) {
        var out = [];
        var idx = 0;
        var firstLen = first.length;
        while (idx < firstLen) {
          if (!_includesWith(pred, first[idx], second) && !_includesWith(pred, first[idx], out)) {
            out.push(first[idx]);
          }
          idx += 1;
        }
        return out;
      });
      module.exports = differenceWith;
    }
  });

  // sdk/contracts/node_modules/ramda/src/remove.js
  var require_remove = __commonJS({
    "sdk/contracts/node_modules/ramda/src/remove.js"(exports, module) {
      var _curry3 = require_curry3();
      var remove = /* @__PURE__ */ _curry3(function remove2(start, count, list) {
        var result = Array.prototype.slice.call(list, 0);
        result.splice(start, count);
        return result;
      });
      module.exports = remove;
    }
  });

  // sdk/contracts/node_modules/ramda/src/internal/_dissoc.js
  var require_dissoc = __commonJS({
    "sdk/contracts/node_modules/ramda/src/internal/_dissoc.js"(exports, module) {
      var _isInteger = require_isInteger();
      var _isArray = require_isArray();
      var remove = require_remove();
      function _dissoc(prop, obj) {
        if (obj == null) {
          return obj;
        }
        if (_isInteger(prop) && _isArray(obj)) {
          return remove(prop, 1, obj);
        }
        var result = {};
        for (var p in obj) {
          result[p] = obj[p];
        }
        delete result[prop];
        return result;
      }
      module.exports = _dissoc;
    }
  });

  // sdk/contracts/node_modules/ramda/src/dissocPath.js
  var require_dissocPath = __commonJS({
    "sdk/contracts/node_modules/ramda/src/dissocPath.js"(exports, module) {
      var _curry2 = require_curry2();
      var _dissoc = require_dissoc();
      var _isInteger = require_isInteger();
      var _isArray = require_isArray();
      var assoc = require_assoc2();
      function _shallowCloneObject(prop, obj) {
        if (_isInteger(prop) && _isArray(obj)) {
          return [].concat(obj);
        }
        var result = {};
        for (var p in obj) {
          result[p] = obj[p];
        }
        return result;
      }
      var dissocPath = /* @__PURE__ */ _curry2(function dissocPath2(path, obj) {
        if (obj == null) {
          return obj;
        }
        switch (path.length) {
          case 0:
            return obj;
          case 1:
            return _dissoc(path[0], obj);
          default:
            var head = path[0];
            var tail = Array.prototype.slice.call(path, 1);
            if (obj[head] == null) {
              return _shallowCloneObject(head, obj);
            } else {
              return assoc(head, dissocPath2(tail, obj[head]), obj);
            }
        }
      });
      module.exports = dissocPath;
    }
  });

  // sdk/contracts/node_modules/ramda/src/dissoc.js
  var require_dissoc2 = __commonJS({
    "sdk/contracts/node_modules/ramda/src/dissoc.js"(exports, module) {
      var _curry2 = require_curry2();
      var dissocPath = require_dissocPath();
      var dissoc = /* @__PURE__ */ _curry2(function dissoc2(prop, obj) {
        return dissocPath([prop], obj);
      });
      module.exports = dissoc;
    }
  });

  // sdk/contracts/node_modules/ramda/src/divide.js
  var require_divide = __commonJS({
    "sdk/contracts/node_modules/ramda/src/divide.js"(exports, module) {
      var _curry2 = require_curry2();
      var divide = /* @__PURE__ */ _curry2(function divide2(a, b) {
        return a / b;
      });
      module.exports = divide;
    }
  });

  // sdk/contracts/node_modules/ramda/src/internal/_xdrop.js
  var require_xdrop = __commonJS({
    "sdk/contracts/node_modules/ramda/src/internal/_xdrop.js"(exports, module) {
      var _curry2 = require_curry2();
      var _xfBase = require_xfBase();
      var XDrop = /* @__PURE__ */ function() {
        function XDrop2(n, xf) {
          this.xf = xf;
          this.n = n;
        }
        XDrop2.prototype["@@transducer/init"] = _xfBase.init;
        XDrop2.prototype["@@transducer/result"] = _xfBase.result;
        XDrop2.prototype["@@transducer/step"] = function(result, input) {
          if (this.n > 0) {
            this.n -= 1;
            return result;
          }
          return this.xf["@@transducer/step"](result, input);
        };
        return XDrop2;
      }();
      var _xdrop = /* @__PURE__ */ _curry2(function _xdrop2(n, xf) {
        return new XDrop(n, xf);
      });
      module.exports = _xdrop;
    }
  });

  // sdk/contracts/node_modules/ramda/src/drop.js
  var require_drop = __commonJS({
    "sdk/contracts/node_modules/ramda/src/drop.js"(exports, module) {
      var _curry2 = require_curry2();
      var _dispatchable = require_dispatchable();
      var _xdrop = require_xdrop();
      var slice = require_slice();
      var drop = /* @__PURE__ */ _curry2(
        /* @__PURE__ */ _dispatchable(["drop"], _xdrop, function drop2(n, xs) {
          return slice(Math.max(0, n), Infinity, xs);
        })
      );
      module.exports = drop;
    }
  });

  // sdk/contracts/node_modules/ramda/src/internal/_xtake.js
  var require_xtake = __commonJS({
    "sdk/contracts/node_modules/ramda/src/internal/_xtake.js"(exports, module) {
      var _curry2 = require_curry2();
      var _reduced = require_reduced();
      var _xfBase = require_xfBase();
      var XTake = /* @__PURE__ */ function() {
        function XTake2(n, xf) {
          this.xf = xf;
          this.n = n;
          this.i = 0;
        }
        XTake2.prototype["@@transducer/init"] = _xfBase.init;
        XTake2.prototype["@@transducer/result"] = _xfBase.result;
        XTake2.prototype["@@transducer/step"] = function(result, input) {
          this.i += 1;
          var ret = this.n === 0 ? result : this.xf["@@transducer/step"](result, input);
          return this.n >= 0 && this.i >= this.n ? _reduced(ret) : ret;
        };
        return XTake2;
      }();
      var _xtake = /* @__PURE__ */ _curry2(function _xtake2(n, xf) {
        return new XTake(n, xf);
      });
      module.exports = _xtake;
    }
  });

  // sdk/contracts/node_modules/ramda/src/take.js
  var require_take = __commonJS({
    "sdk/contracts/node_modules/ramda/src/take.js"(exports, module) {
      var _curry2 = require_curry2();
      var _dispatchable = require_dispatchable();
      var _xtake = require_xtake();
      var slice = require_slice();
      var take = /* @__PURE__ */ _curry2(
        /* @__PURE__ */ _dispatchable(["take"], _xtake, function take2(n, xs) {
          return slice(0, n < 0 ? Infinity : n, xs);
        })
      );
      module.exports = take;
    }
  });

  // sdk/contracts/node_modules/ramda/src/internal/_dropLast.js
  var require_dropLast = __commonJS({
    "sdk/contracts/node_modules/ramda/src/internal/_dropLast.js"(exports, module) {
      var take = require_take();
      function dropLast(n, xs) {
        return take(n < xs.length ? xs.length - n : 0, xs);
      }
      module.exports = dropLast;
    }
  });

  // sdk/contracts/node_modules/ramda/src/internal/_xdropLast.js
  var require_xdropLast = __commonJS({
    "sdk/contracts/node_modules/ramda/src/internal/_xdropLast.js"(exports, module) {
      var _curry2 = require_curry2();
      var _xfBase = require_xfBase();
      var XDropLast = /* @__PURE__ */ function() {
        function XDropLast2(n, xf) {
          this.xf = xf;
          this.pos = 0;
          this.full = false;
          this.acc = new Array(n);
        }
        XDropLast2.prototype["@@transducer/init"] = _xfBase.init;
        XDropLast2.prototype["@@transducer/result"] = function(result) {
          this.acc = null;
          return this.xf["@@transducer/result"](result);
        };
        XDropLast2.prototype["@@transducer/step"] = function(result, input) {
          if (this.full) {
            result = this.xf["@@transducer/step"](result, this.acc[this.pos]);
          }
          this.store(input);
          return result;
        };
        XDropLast2.prototype.store = function(input) {
          this.acc[this.pos] = input;
          this.pos += 1;
          if (this.pos === this.acc.length) {
            this.pos = 0;
            this.full = true;
          }
        };
        return XDropLast2;
      }();
      var _xdropLast = /* @__PURE__ */ _curry2(function _xdropLast2(n, xf) {
        return new XDropLast(n, xf);
      });
      module.exports = _xdropLast;
    }
  });

  // sdk/contracts/node_modules/ramda/src/dropLast.js
  var require_dropLast2 = __commonJS({
    "sdk/contracts/node_modules/ramda/src/dropLast.js"(exports, module) {
      var _curry2 = require_curry2();
      var _dispatchable = require_dispatchable();
      var _dropLast = require_dropLast();
      var _xdropLast = require_xdropLast();
      var dropLast = /* @__PURE__ */ _curry2(
        /* @__PURE__ */ _dispatchable([], _xdropLast, _dropLast)
      );
      module.exports = dropLast;
    }
  });

  // sdk/contracts/node_modules/ramda/src/internal/_dropLastWhile.js
  var require_dropLastWhile = __commonJS({
    "sdk/contracts/node_modules/ramda/src/internal/_dropLastWhile.js"(exports, module) {
      var slice = require_slice();
      function dropLastWhile(pred, xs) {
        var idx = xs.length - 1;
        while (idx >= 0 && pred(xs[idx])) {
          idx -= 1;
        }
        return slice(0, idx + 1, xs);
      }
      module.exports = dropLastWhile;
    }
  });

  // sdk/contracts/node_modules/ramda/src/internal/_xdropLastWhile.js
  var require_xdropLastWhile = __commonJS({
    "sdk/contracts/node_modules/ramda/src/internal/_xdropLastWhile.js"(exports, module) {
      var _curry2 = require_curry2();
      var _reduce = require_reduce();
      var _xfBase = require_xfBase();
      var XDropLastWhile = /* @__PURE__ */ function() {
        function XDropLastWhile2(fn, xf) {
          this.f = fn;
          this.retained = [];
          this.xf = xf;
        }
        XDropLastWhile2.prototype["@@transducer/init"] = _xfBase.init;
        XDropLastWhile2.prototype["@@transducer/result"] = function(result) {
          this.retained = null;
          return this.xf["@@transducer/result"](result);
        };
        XDropLastWhile2.prototype["@@transducer/step"] = function(result, input) {
          return this.f(input) ? this.retain(result, input) : this.flush(result, input);
        };
        XDropLastWhile2.prototype.flush = function(result, input) {
          result = _reduce(this.xf["@@transducer/step"], result, this.retained);
          this.retained = [];
          return this.xf["@@transducer/step"](result, input);
        };
        XDropLastWhile2.prototype.retain = function(result, input) {
          this.retained.push(input);
          return result;
        };
        return XDropLastWhile2;
      }();
      var _xdropLastWhile = /* @__PURE__ */ _curry2(function _xdropLastWhile2(fn, xf) {
        return new XDropLastWhile(fn, xf);
      });
      module.exports = _xdropLastWhile;
    }
  });

  // sdk/contracts/node_modules/ramda/src/dropLastWhile.js
  var require_dropLastWhile2 = __commonJS({
    "sdk/contracts/node_modules/ramda/src/dropLastWhile.js"(exports, module) {
      var _curry2 = require_curry2();
      var _dispatchable = require_dispatchable();
      var _dropLastWhile = require_dropLastWhile();
      var _xdropLastWhile = require_xdropLastWhile();
      var dropLastWhile = /* @__PURE__ */ _curry2(
        /* @__PURE__ */ _dispatchable([], _xdropLastWhile, _dropLastWhile)
      );
      module.exports = dropLastWhile;
    }
  });

  // sdk/contracts/node_modules/ramda/src/internal/_xdropRepeatsWith.js
  var require_xdropRepeatsWith = __commonJS({
    "sdk/contracts/node_modules/ramda/src/internal/_xdropRepeatsWith.js"(exports, module) {
      var _curry2 = require_curry2();
      var _xfBase = require_xfBase();
      var XDropRepeatsWith = /* @__PURE__ */ function() {
        function XDropRepeatsWith2(pred, xf) {
          this.xf = xf;
          this.pred = pred;
          this.lastValue = void 0;
          this.seenFirstValue = false;
        }
        XDropRepeatsWith2.prototype["@@transducer/init"] = _xfBase.init;
        XDropRepeatsWith2.prototype["@@transducer/result"] = _xfBase.result;
        XDropRepeatsWith2.prototype["@@transducer/step"] = function(result, input) {
          var sameAsLast = false;
          if (!this.seenFirstValue) {
            this.seenFirstValue = true;
          } else if (this.pred(this.lastValue, input)) {
            sameAsLast = true;
          }
          this.lastValue = input;
          return sameAsLast ? result : this.xf["@@transducer/step"](result, input);
        };
        return XDropRepeatsWith2;
      }();
      var _xdropRepeatsWith = /* @__PURE__ */ _curry2(function _xdropRepeatsWith2(pred, xf) {
        return new XDropRepeatsWith(pred, xf);
      });
      module.exports = _xdropRepeatsWith;
    }
  });

  // sdk/contracts/node_modules/ramda/src/last.js
  var require_last = __commonJS({
    "sdk/contracts/node_modules/ramda/src/last.js"(exports, module) {
      var nth = require_nth();
      var last = /* @__PURE__ */ nth(-1);
      module.exports = last;
    }
  });

  // sdk/contracts/node_modules/ramda/src/dropRepeatsWith.js
  var require_dropRepeatsWith = __commonJS({
    "sdk/contracts/node_modules/ramda/src/dropRepeatsWith.js"(exports, module) {
      var _curry2 = require_curry2();
      var _dispatchable = require_dispatchable();
      var _xdropRepeatsWith = require_xdropRepeatsWith();
      var last = require_last();
      var dropRepeatsWith = /* @__PURE__ */ _curry2(
        /* @__PURE__ */ _dispatchable([], _xdropRepeatsWith, function dropRepeatsWith2(pred, list) {
          var result = [];
          var idx = 1;
          var len = list.length;
          if (len !== 0) {
            result[0] = list[0];
            while (idx < len) {
              if (!pred(last(result), list[idx])) {
                result[result.length] = list[idx];
              }
              idx += 1;
            }
          }
          return result;
        })
      );
      module.exports = dropRepeatsWith;
    }
  });

  // sdk/contracts/node_modules/ramda/src/dropRepeats.js
  var require_dropRepeats = __commonJS({
    "sdk/contracts/node_modules/ramda/src/dropRepeats.js"(exports, module) {
      var _curry1 = require_curry1();
      var _dispatchable = require_dispatchable();
      var _xdropRepeatsWith = require_xdropRepeatsWith();
      var dropRepeatsWith = require_dropRepeatsWith();
      var equals = require_equals2();
      var dropRepeats = /* @__PURE__ */ _curry1(
        /* @__PURE__ */ _dispatchable(
          [],
          /* @__PURE__ */ _xdropRepeatsWith(equals),
          /* @__PURE__ */ dropRepeatsWith(equals)
        )
      );
      module.exports = dropRepeats;
    }
  });

  // sdk/contracts/node_modules/ramda/src/internal/_xdropWhile.js
  var require_xdropWhile = __commonJS({
    "sdk/contracts/node_modules/ramda/src/internal/_xdropWhile.js"(exports, module) {
      var _curry2 = require_curry2();
      var _xfBase = require_xfBase();
      var XDropWhile = /* @__PURE__ */ function() {
        function XDropWhile2(f, xf) {
          this.xf = xf;
          this.f = f;
        }
        XDropWhile2.prototype["@@transducer/init"] = _xfBase.init;
        XDropWhile2.prototype["@@transducer/result"] = _xfBase.result;
        XDropWhile2.prototype["@@transducer/step"] = function(result, input) {
          if (this.f) {
            if (this.f(input)) {
              return result;
            }
            this.f = null;
          }
          return this.xf["@@transducer/step"](result, input);
        };
        return XDropWhile2;
      }();
      var _xdropWhile = /* @__PURE__ */ _curry2(function _xdropWhile2(f, xf) {
        return new XDropWhile(f, xf);
      });
      module.exports = _xdropWhile;
    }
  });

  // sdk/contracts/node_modules/ramda/src/dropWhile.js
  var require_dropWhile = __commonJS({
    "sdk/contracts/node_modules/ramda/src/dropWhile.js"(exports, module) {
      var _curry2 = require_curry2();
      var _dispatchable = require_dispatchable();
      var _xdropWhile = require_xdropWhile();
      var slice = require_slice();
      var dropWhile = /* @__PURE__ */ _curry2(
        /* @__PURE__ */ _dispatchable(["dropWhile"], _xdropWhile, function dropWhile2(pred, xs) {
          var idx = 0;
          var len = xs.length;
          while (idx < len && pred(xs[idx])) {
            idx += 1;
          }
          return slice(idx, Infinity, xs);
        })
      );
      module.exports = dropWhile;
    }
  });

  // sdk/contracts/node_modules/ramda/src/or.js
  var require_or = __commonJS({
    "sdk/contracts/node_modules/ramda/src/or.js"(exports, module) {
      var _curry2 = require_curry2();
      var or = /* @__PURE__ */ _curry2(function or2(a, b) {
        return a || b;
      });
      module.exports = or;
    }
  });

  // sdk/contracts/node_modules/ramda/src/either.js
  var require_either = __commonJS({
    "sdk/contracts/node_modules/ramda/src/either.js"(exports, module) {
      var _curry2 = require_curry2();
      var _isFunction = require_isFunction();
      var lift = require_lift();
      var or = require_or();
      var either = /* @__PURE__ */ _curry2(function either2(f, g) {
        return _isFunction(f) ? function _either() {
          return f.apply(this, arguments) || g.apply(this, arguments);
        } : lift(or)(f, g);
      });
      module.exports = either;
    }
  });

  // sdk/contracts/node_modules/ramda/src/internal/_isTypedArray.js
  var require_isTypedArray = __commonJS({
    "sdk/contracts/node_modules/ramda/src/internal/_isTypedArray.js"(exports, module) {
      function _isTypedArray(val) {
        var type = Object.prototype.toString.call(val);
        return type === "[object Uint8ClampedArray]" || type === "[object Int8Array]" || type === "[object Uint8Array]" || type === "[object Int16Array]" || type === "[object Uint16Array]" || type === "[object Int32Array]" || type === "[object Uint32Array]" || type === "[object Float32Array]" || type === "[object Float64Array]" || type === "[object BigInt64Array]" || type === "[object BigUint64Array]";
      }
      module.exports = _isTypedArray;
    }
  });

  // sdk/contracts/node_modules/ramda/src/empty.js
  var require_empty = __commonJS({
    "sdk/contracts/node_modules/ramda/src/empty.js"(exports, module) {
      var _curry1 = require_curry1();
      var _isArguments = require_isArguments();
      var _isArray = require_isArray();
      var _isObject = require_isObject();
      var _isString = require_isString();
      var _isTypedArray = require_isTypedArray();
      var empty = /* @__PURE__ */ _curry1(function empty2(x) {
        return x != null && typeof x["fantasy-land/empty"] === "function" ? x["fantasy-land/empty"]() : x != null && x.constructor != null && typeof x.constructor["fantasy-land/empty"] === "function" ? x.constructor["fantasy-land/empty"]() : x != null && typeof x.empty === "function" ? x.empty() : x != null && x.constructor != null && typeof x.constructor.empty === "function" ? x.constructor.empty() : _isArray(x) ? [] : _isString(x) ? "" : _isObject(x) ? {} : _isArguments(x) ? function() {
          return arguments;
        }() : _isTypedArray(x) ? x.constructor.from("") : void 0;
      });
      module.exports = empty;
    }
  });

  // sdk/contracts/node_modules/ramda/src/takeLast.js
  var require_takeLast = __commonJS({
    "sdk/contracts/node_modules/ramda/src/takeLast.js"(exports, module) {
      var _curry2 = require_curry2();
      var drop = require_drop();
      var takeLast = /* @__PURE__ */ _curry2(function takeLast2(n, xs) {
        return drop(n >= 0 ? xs.length - n : 0, xs);
      });
      module.exports = takeLast;
    }
  });

  // sdk/contracts/node_modules/ramda/src/endsWith.js
  var require_endsWith = __commonJS({
    "sdk/contracts/node_modules/ramda/src/endsWith.js"(exports, module) {
      var _curry2 = require_curry2();
      var equals = require_equals2();
      var takeLast = require_takeLast();
      var endsWith = /* @__PURE__ */ _curry2(function(suffix, list) {
        return equals(takeLast(suffix.length, list), suffix);
      });
      module.exports = endsWith;
    }
  });

  // sdk/contracts/node_modules/ramda/src/eqBy.js
  var require_eqBy = __commonJS({
    "sdk/contracts/node_modules/ramda/src/eqBy.js"(exports, module) {
      var _curry3 = require_curry3();
      var equals = require_equals2();
      var eqBy = /* @__PURE__ */ _curry3(function eqBy2(f, x, y) {
        return equals(f(x), f(y));
      });
      module.exports = eqBy;
    }
  });

  // sdk/contracts/node_modules/ramda/src/eqProps.js
  var require_eqProps = __commonJS({
    "sdk/contracts/node_modules/ramda/src/eqProps.js"(exports, module) {
      var _curry3 = require_curry3();
      var equals = require_equals2();
      var eqProps = /* @__PURE__ */ _curry3(function eqProps2(prop, obj1, obj2) {
        return equals(obj1[prop], obj2[prop]);
      });
      module.exports = eqProps;
    }
  });

  // sdk/contracts/node_modules/ramda/src/evolve.js
  var require_evolve = __commonJS({
    "sdk/contracts/node_modules/ramda/src/evolve.js"(exports, module) {
      var _curry2 = require_curry2();
      var _isArray = require_isArray();
      var _isObject = require_isObject();
      var evolve = /* @__PURE__ */ _curry2(function evolve2(transformations, object) {
        if (!_isObject(object) && !_isArray(object)) {
          return object;
        }
        var result = object instanceof Array ? [] : {};
        var transformation, key, type;
        for (key in object) {
          transformation = transformations[key];
          type = typeof transformation;
          result[key] = type === "function" ? transformation(object[key]) : transformation && type === "object" ? evolve2(transformation, object[key]) : object[key];
        }
        return result;
      });
      module.exports = evolve;
    }
  });

  // sdk/contracts/node_modules/ramda/src/internal/_xfind.js
  var require_xfind = __commonJS({
    "sdk/contracts/node_modules/ramda/src/internal/_xfind.js"(exports, module) {
      var _curry2 = require_curry2();
      var _reduced = require_reduced();
      var _xfBase = require_xfBase();
      var XFind = /* @__PURE__ */ function() {
        function XFind2(f, xf) {
          this.xf = xf;
          this.f = f;
          this.found = false;
        }
        XFind2.prototype["@@transducer/init"] = _xfBase.init;
        XFind2.prototype["@@transducer/result"] = function(result) {
          if (!this.found) {
            result = this.xf["@@transducer/step"](result, void 0);
          }
          return this.xf["@@transducer/result"](result);
        };
        XFind2.prototype["@@transducer/step"] = function(result, input) {
          if (this.f(input)) {
            this.found = true;
            result = _reduced(this.xf["@@transducer/step"](result, input));
          }
          return result;
        };
        return XFind2;
      }();
      var _xfind = /* @__PURE__ */ _curry2(function _xfind2(f, xf) {
        return new XFind(f, xf);
      });
      module.exports = _xfind;
    }
  });

  // sdk/contracts/node_modules/ramda/src/find.js
  var require_find = __commonJS({
    "sdk/contracts/node_modules/ramda/src/find.js"(exports, module) {
      var _curry2 = require_curry2();
      var _dispatchable = require_dispatchable();
      var _xfind = require_xfind();
      var find = /* @__PURE__ */ _curry2(
        /* @__PURE__ */ _dispatchable(["find"], _xfind, function find2(fn, list) {
          var idx = 0;
          var len = list.length;
          while (idx < len) {
            if (fn(list[idx])) {
              return list[idx];
            }
            idx += 1;
          }
        })
      );
      module.exports = find;
    }
  });

  // sdk/contracts/node_modules/ramda/src/internal/_xfindIndex.js
  var require_xfindIndex = __commonJS({
    "sdk/contracts/node_modules/ramda/src/internal/_xfindIndex.js"(exports, module) {
      var _curry2 = require_curry2();
      var _reduced = require_reduced();
      var _xfBase = require_xfBase();
      var XFindIndex = /* @__PURE__ */ function() {
        function XFindIndex2(f, xf) {
          this.xf = xf;
          this.f = f;
          this.idx = -1;
          this.found = false;
        }
        XFindIndex2.prototype["@@transducer/init"] = _xfBase.init;
        XFindIndex2.prototype["@@transducer/result"] = function(result) {
          if (!this.found) {
            result = this.xf["@@transducer/step"](result, -1);
          }
          return this.xf["@@transducer/result"](result);
        };
        XFindIndex2.prototype["@@transducer/step"] = function(result, input) {
          this.idx += 1;
          if (this.f(input)) {
            this.found = true;
            result = _reduced(this.xf["@@transducer/step"](result, this.idx));
          }
          return result;
        };
        return XFindIndex2;
      }();
      var _xfindIndex = /* @__PURE__ */ _curry2(function _xfindIndex2(f, xf) {
        return new XFindIndex(f, xf);
      });
      module.exports = _xfindIndex;
    }
  });

  // sdk/contracts/node_modules/ramda/src/findIndex.js
  var require_findIndex = __commonJS({
    "sdk/contracts/node_modules/ramda/src/findIndex.js"(exports, module) {
      var _curry2 = require_curry2();
      var _dispatchable = require_dispatchable();
      var _xfindIndex = require_xfindIndex();
      var findIndex = /* @__PURE__ */ _curry2(
        /* @__PURE__ */ _dispatchable([], _xfindIndex, function findIndex2(fn, list) {
          var idx = 0;
          var len = list.length;
          while (idx < len) {
            if (fn(list[idx])) {
              return idx;
            }
            idx += 1;
          }
          return -1;
        })
      );
      module.exports = findIndex;
    }
  });

  // sdk/contracts/node_modules/ramda/src/internal/_xfindLast.js
  var require_xfindLast = __commonJS({
    "sdk/contracts/node_modules/ramda/src/internal/_xfindLast.js"(exports, module) {
      var _curry2 = require_curry2();
      var _xfBase = require_xfBase();
      var XFindLast = /* @__PURE__ */ function() {
        function XFindLast2(f, xf) {
          this.xf = xf;
          this.f = f;
        }
        XFindLast2.prototype["@@transducer/init"] = _xfBase.init;
        XFindLast2.prototype["@@transducer/result"] = function(result) {
          return this.xf["@@transducer/result"](this.xf["@@transducer/step"](result, this.last));
        };
        XFindLast2.prototype["@@transducer/step"] = function(result, input) {
          if (this.f(input)) {
            this.last = input;
          }
          return result;
        };
        return XFindLast2;
      }();
      var _xfindLast = /* @__PURE__ */ _curry2(function _xfindLast2(f, xf) {
        return new XFindLast(f, xf);
      });
      module.exports = _xfindLast;
    }
  });

  // sdk/contracts/node_modules/ramda/src/findLast.js
  var require_findLast = __commonJS({
    "sdk/contracts/node_modules/ramda/src/findLast.js"(exports, module) {
      var _curry2 = require_curry2();
      var _dispatchable = require_dispatchable();
      var _xfindLast = require_xfindLast();
      var findLast = /* @__PURE__ */ _curry2(
        /* @__PURE__ */ _dispatchable([], _xfindLast, function findLast2(fn, list) {
          var idx = list.length - 1;
          while (idx >= 0) {
            if (fn(list[idx])) {
              return list[idx];
            }
            idx -= 1;
          }
        })
      );
      module.exports = findLast;
    }
  });

  // sdk/contracts/node_modules/ramda/src/internal/_xfindLastIndex.js
  var require_xfindLastIndex = __commonJS({
    "sdk/contracts/node_modules/ramda/src/internal/_xfindLastIndex.js"(exports, module) {
      var _curry2 = require_curry2();
      var _xfBase = require_xfBase();
      var XFindLastIndex = /* @__PURE__ */ function() {
        function XFindLastIndex2(f, xf) {
          this.xf = xf;
          this.f = f;
          this.idx = -1;
          this.lastIdx = -1;
        }
        XFindLastIndex2.prototype["@@transducer/init"] = _xfBase.init;
        XFindLastIndex2.prototype["@@transducer/result"] = function(result) {
          return this.xf["@@transducer/result"](this.xf["@@transducer/step"](result, this.lastIdx));
        };
        XFindLastIndex2.prototype["@@transducer/step"] = function(result, input) {
          this.idx += 1;
          if (this.f(input)) {
            this.lastIdx = this.idx;
          }
          return result;
        };
        return XFindLastIndex2;
      }();
      var _xfindLastIndex = /* @__PURE__ */ _curry2(function _xfindLastIndex2(f, xf) {
        return new XFindLastIndex(f, xf);
      });
      module.exports = _xfindLastIndex;
    }
  });

  // sdk/contracts/node_modules/ramda/src/findLastIndex.js
  var require_findLastIndex = __commonJS({
    "sdk/contracts/node_modules/ramda/src/findLastIndex.js"(exports, module) {
      var _curry2 = require_curry2();
      var _dispatchable = require_dispatchable();
      var _xfindLastIndex = require_xfindLastIndex();
      var findLastIndex = /* @__PURE__ */ _curry2(
        /* @__PURE__ */ _dispatchable([], _xfindLastIndex, function findLastIndex2(fn, list) {
          var idx = list.length - 1;
          while (idx >= 0) {
            if (fn(list[idx])) {
              return idx;
            }
            idx -= 1;
          }
          return -1;
        })
      );
      module.exports = findLastIndex;
    }
  });

  // sdk/contracts/node_modules/ramda/src/flatten.js
  var require_flatten = __commonJS({
    "sdk/contracts/node_modules/ramda/src/flatten.js"(exports, module) {
      var _curry1 = require_curry1();
      var _makeFlat = require_makeFlat();
      var flatten = /* @__PURE__ */ _curry1(
        /* @__PURE__ */ _makeFlat(true)
      );
      module.exports = flatten;
    }
  });

  // sdk/contracts/node_modules/ramda/src/flip.js
  var require_flip = __commonJS({
    "sdk/contracts/node_modules/ramda/src/flip.js"(exports, module) {
      var _curry1 = require_curry1();
      var curryN = require_curryN2();
      var flip = /* @__PURE__ */ _curry1(function flip2(fn) {
        return curryN(fn.length, function(a, b) {
          var args = Array.prototype.slice.call(arguments, 0);
          args[0] = b;
          args[1] = a;
          return fn.apply(this, args);
        });
      });
      module.exports = flip;
    }
  });

  // sdk/contracts/node_modules/ramda/src/forEach.js
  var require_forEach = __commonJS({
    "sdk/contracts/node_modules/ramda/src/forEach.js"(exports, module) {
      var _checkForMethod = require_checkForMethod();
      var _curry2 = require_curry2();
      var forEach = /* @__PURE__ */ _curry2(
        /* @__PURE__ */ _checkForMethod("forEach", function forEach2(fn, list) {
          var len = list.length;
          var idx = 0;
          while (idx < len) {
            fn(list[idx]);
            idx += 1;
          }
          return list;
        })
      );
      module.exports = forEach;
    }
  });

  // sdk/contracts/node_modules/ramda/src/forEachObjIndexed.js
  var require_forEachObjIndexed = __commonJS({
    "sdk/contracts/node_modules/ramda/src/forEachObjIndexed.js"(exports, module) {
      var _curry2 = require_curry2();
      var keys = require_keys();
      var forEachObjIndexed = /* @__PURE__ */ _curry2(function forEachObjIndexed2(fn, obj) {
        var keyList = keys(obj);
        var idx = 0;
        while (idx < keyList.length) {
          var key = keyList[idx];
          fn(obj[key], key, obj);
          idx += 1;
        }
        return obj;
      });
      module.exports = forEachObjIndexed;
    }
  });

  // sdk/contracts/node_modules/ramda/src/fromPairs.js
  var require_fromPairs = __commonJS({
    "sdk/contracts/node_modules/ramda/src/fromPairs.js"(exports, module) {
      var _curry1 = require_curry1();
      var fromPairs = /* @__PURE__ */ _curry1(function fromPairs2(pairs) {
        var result = {};
        var idx = 0;
        while (idx < pairs.length) {
          result[pairs[idx][0]] = pairs[idx][1];
          idx += 1;
        }
        return result;
      });
      module.exports = fromPairs;
    }
  });

  // sdk/contracts/node_modules/ramda/src/groupBy.js
  var require_groupBy = __commonJS({
    "sdk/contracts/node_modules/ramda/src/groupBy.js"(exports, module) {
      var _checkForMethod = require_checkForMethod();
      var _curry2 = require_curry2();
      var reduceBy = require_reduceBy();
      var groupBy = /* @__PURE__ */ _curry2(
        /* @__PURE__ */ _checkForMethod(
          "groupBy",
          /* @__PURE__ */ reduceBy(function(acc, item) {
            acc.push(item);
            return acc;
          }, [])
        )
      );
      module.exports = groupBy;
    }
  });

  // sdk/contracts/node_modules/ramda/src/groupWith.js
  var require_groupWith = __commonJS({
    "sdk/contracts/node_modules/ramda/src/groupWith.js"(exports, module) {
      var _curry2 = require_curry2();
      var groupWith = /* @__PURE__ */ _curry2(function(fn, list) {
        var res = [];
        var idx = 0;
        var len = list.length;
        while (idx < len) {
          var nextidx = idx + 1;
          while (nextidx < len && fn(list[nextidx - 1], list[nextidx])) {
            nextidx += 1;
          }
          res.push(list.slice(idx, nextidx));
          idx = nextidx;
        }
        return res;
      });
      module.exports = groupWith;
    }
  });

  // sdk/contracts/node_modules/ramda/src/gt.js
  var require_gt = __commonJS({
    "sdk/contracts/node_modules/ramda/src/gt.js"(exports, module) {
      var _curry2 = require_curry2();
      var gt = /* @__PURE__ */ _curry2(function gt2(a, b) {
        return a > b;
      });
      module.exports = gt;
    }
  });

  // sdk/contracts/node_modules/ramda/src/gte.js
  var require_gte = __commonJS({
    "sdk/contracts/node_modules/ramda/src/gte.js"(exports, module) {
      var _curry2 = require_curry2();
      var gte = /* @__PURE__ */ _curry2(function gte2(a, b) {
        return a >= b;
      });
      module.exports = gte;
    }
  });

  // sdk/contracts/node_modules/ramda/src/hasPath.js
  var require_hasPath = __commonJS({
    "sdk/contracts/node_modules/ramda/src/hasPath.js"(exports, module) {
      var _curry2 = require_curry2();
      var _has = require_has();
      var isNil = require_isNil();
      var hasPath = /* @__PURE__ */ _curry2(function hasPath2(_path, obj) {
        if (_path.length === 0 || isNil(obj)) {
          return false;
        }
        var val = obj;
        var idx = 0;
        while (idx < _path.length) {
          if (!isNil(val) && _has(_path[idx], val)) {
            val = val[_path[idx]];
            idx += 1;
          } else {
            return false;
          }
        }
        return true;
      });
      module.exports = hasPath;
    }
  });

  // sdk/contracts/node_modules/ramda/src/has.js
  var require_has2 = __commonJS({
    "sdk/contracts/node_modules/ramda/src/has.js"(exports, module) {
      var _curry2 = require_curry2();
      var hasPath = require_hasPath();
      var has = /* @__PURE__ */ _curry2(function has2(prop, obj) {
        return hasPath([prop], obj);
      });
      module.exports = has;
    }
  });

  // sdk/contracts/node_modules/ramda/src/hasIn.js
  var require_hasIn = __commonJS({
    "sdk/contracts/node_modules/ramda/src/hasIn.js"(exports, module) {
      var _curry2 = require_curry2();
      var isNil = require_isNil();
      var hasIn = /* @__PURE__ */ _curry2(function hasIn2(prop, obj) {
        if (isNil(obj)) {
          return false;
        }
        return prop in obj;
      });
      module.exports = hasIn;
    }
  });

  // sdk/contracts/node_modules/ramda/src/identical.js
  var require_identical = __commonJS({
    "sdk/contracts/node_modules/ramda/src/identical.js"(exports, module) {
      var _objectIs = require_objectIs();
      var _curry2 = require_curry2();
      var identical = /* @__PURE__ */ _curry2(_objectIs);
      module.exports = identical;
    }
  });

  // sdk/contracts/node_modules/ramda/src/ifElse.js
  var require_ifElse = __commonJS({
    "sdk/contracts/node_modules/ramda/src/ifElse.js"(exports, module) {
      var _curry3 = require_curry3();
      var curryN = require_curryN2();
      var ifElse = /* @__PURE__ */ _curry3(function ifElse2(condition, onTrue, onFalse) {
        return curryN(Math.max(condition.length, onTrue.length, onFalse.length), function _ifElse() {
          return condition.apply(this, arguments) ? onTrue.apply(this, arguments) : onFalse.apply(this, arguments);
        });
      });
      module.exports = ifElse;
    }
  });

  // sdk/contracts/node_modules/ramda/src/inc.js
  var require_inc = __commonJS({
    "sdk/contracts/node_modules/ramda/src/inc.js"(exports, module) {
      var add = require_add();
      var inc = /* @__PURE__ */ add(1);
      module.exports = inc;
    }
  });

  // sdk/contracts/node_modules/ramda/src/includes.js
  var require_includes2 = __commonJS({
    "sdk/contracts/node_modules/ramda/src/includes.js"(exports, module) {
      var _includes = require_includes();
      var _curry2 = require_curry2();
      var includes = /* @__PURE__ */ _curry2(_includes);
      module.exports = includes;
    }
  });

  // sdk/contracts/node_modules/ramda/src/indexBy.js
  var require_indexBy = __commonJS({
    "sdk/contracts/node_modules/ramda/src/indexBy.js"(exports, module) {
      var reduceBy = require_reduceBy();
      var indexBy = /* @__PURE__ */ reduceBy(function(acc, elem) {
        return elem;
      }, null);
      module.exports = indexBy;
    }
  });

  // sdk/contracts/node_modules/ramda/src/indexOf.js
  var require_indexOf2 = __commonJS({
    "sdk/contracts/node_modules/ramda/src/indexOf.js"(exports, module) {
      var _curry2 = require_curry2();
      var _indexOf = require_indexOf();
      var _isArray = require_isArray();
      var indexOf = /* @__PURE__ */ _curry2(function indexOf2(target, xs) {
        return typeof xs.indexOf === "function" && !_isArray(xs) ? xs.indexOf(target) : _indexOf(xs, target, 0);
      });
      module.exports = indexOf;
    }
  });

  // sdk/contracts/node_modules/ramda/src/init.js
  var require_init = __commonJS({
    "sdk/contracts/node_modules/ramda/src/init.js"(exports, module) {
      var slice = require_slice();
      var init = /* @__PURE__ */ slice(0, -1);
      module.exports = init;
    }
  });

  // sdk/contracts/node_modules/ramda/src/innerJoin.js
  var require_innerJoin = __commonJS({
    "sdk/contracts/node_modules/ramda/src/innerJoin.js"(exports, module) {
      var _includesWith = require_includesWith();
      var _curry3 = require_curry3();
      var _filter = require_filter();
      var innerJoin = /* @__PURE__ */ _curry3(function innerJoin2(pred, xs, ys) {
        return _filter(function(x) {
          return _includesWith(pred, x, ys);
        }, xs);
      });
      module.exports = innerJoin;
    }
  });

  // sdk/contracts/node_modules/ramda/src/insert.js
  var require_insert = __commonJS({
    "sdk/contracts/node_modules/ramda/src/insert.js"(exports, module) {
      var _curry3 = require_curry3();
      var insert = /* @__PURE__ */ _curry3(function insert2(idx, elt, list) {
        idx = idx < list.length && idx >= 0 ? idx : list.length;
        var result = Array.prototype.slice.call(list, 0);
        result.splice(idx, 0, elt);
        return result;
      });
      module.exports = insert;
    }
  });

  // sdk/contracts/node_modules/ramda/src/insertAll.js
  var require_insertAll = __commonJS({
    "sdk/contracts/node_modules/ramda/src/insertAll.js"(exports, module) {
      var _curry3 = require_curry3();
      var insertAll = /* @__PURE__ */ _curry3(function insertAll2(idx, elts, list) {
        idx = idx < list.length && idx >= 0 ? idx : list.length;
        return [].concat(Array.prototype.slice.call(list, 0, idx), elts, Array.prototype.slice.call(list, idx));
      });
      module.exports = insertAll;
    }
  });

  // sdk/contracts/node_modules/ramda/src/internal/_xuniqBy.js
  var require_xuniqBy = __commonJS({
    "sdk/contracts/node_modules/ramda/src/internal/_xuniqBy.js"(exports, module) {
      var _curry2 = require_curry2();
      var _Set = require_Set();
      var _xfBase = require_xfBase();
      var XUniqBy = /* @__PURE__ */ function() {
        function XUniqBy2(f, xf) {
          this.xf = xf;
          this.f = f;
          this.set = new _Set();
        }
        XUniqBy2.prototype["@@transducer/init"] = _xfBase.init;
        XUniqBy2.prototype["@@transducer/result"] = _xfBase.result;
        XUniqBy2.prototype["@@transducer/step"] = function(result, input) {
          return this.set.add(this.f(input)) ? this.xf["@@transducer/step"](result, input) : result;
        };
        return XUniqBy2;
      }();
      var _xuniqBy = /* @__PURE__ */ _curry2(function _xuniqBy2(f, xf) {
        return new XUniqBy(f, xf);
      });
      module.exports = _xuniqBy;
    }
  });

  // sdk/contracts/node_modules/ramda/src/uniqBy.js
  var require_uniqBy = __commonJS({
    "sdk/contracts/node_modules/ramda/src/uniqBy.js"(exports, module) {
      var _Set = require_Set();
      var _curry2 = require_curry2();
      var _dispatchable = require_dispatchable();
      var _xuniqBy = require_xuniqBy();
      var uniqBy = /* @__PURE__ */ _curry2(
        /* @__PURE__ */ _dispatchable([], _xuniqBy, function(fn, list) {
          var set = new _Set();
          var result = [];
          var idx = 0;
          var appliedItem, item;
          while (idx < list.length) {
            item = list[idx];
            appliedItem = fn(item);
            if (set.add(appliedItem)) {
              result.push(item);
            }
            idx += 1;
          }
          return result;
        })
      );
      module.exports = uniqBy;
    }
  });

  // sdk/contracts/node_modules/ramda/src/uniq.js
  var require_uniq = __commonJS({
    "sdk/contracts/node_modules/ramda/src/uniq.js"(exports, module) {
      var identity = require_identity2();
      var uniqBy = require_uniqBy();
      var uniq = /* @__PURE__ */ uniqBy(identity);
      module.exports = uniq;
    }
  });

  // sdk/contracts/node_modules/ramda/src/intersection.js
  var require_intersection = __commonJS({
    "sdk/contracts/node_modules/ramda/src/intersection.js"(exports, module) {
      var _includes = require_includes();
      var _curry2 = require_curry2();
      var _filter = require_filter();
      var flip = require_flip();
      var uniq = require_uniq();
      var intersection = /* @__PURE__ */ _curry2(function intersection2(list1, list2) {
        var lookupList, filteredList;
        if (list1.length > list2.length) {
          lookupList = list1;
          filteredList = list2;
        } else {
          lookupList = list2;
          filteredList = list1;
        }
        return uniq(_filter(flip(_includes)(lookupList), filteredList));
      });
      module.exports = intersection;
    }
  });

  // sdk/contracts/node_modules/ramda/src/intersperse.js
  var require_intersperse = __commonJS({
    "sdk/contracts/node_modules/ramda/src/intersperse.js"(exports, module) {
      var _checkForMethod = require_checkForMethod();
      var _curry2 = require_curry2();
      var intersperse = /* @__PURE__ */ _curry2(
        /* @__PURE__ */ _checkForMethod("intersperse", function intersperse2(separator, list) {
          var out = [];
          var idx = 0;
          var length = list.length;
          while (idx < length) {
            if (idx === length - 1) {
              out.push(list[idx]);
            } else {
              out.push(list[idx], separator);
            }
            idx += 1;
          }
          return out;
        })
      );
      module.exports = intersperse;
    }
  });

  // sdk/contracts/node_modules/ramda/src/internal/_objectAssign.js
  var require_objectAssign = __commonJS({
    "sdk/contracts/node_modules/ramda/src/internal/_objectAssign.js"(exports, module) {
      var _has = require_has();
      function _objectAssign(target) {
        if (target == null) {
          throw new TypeError("Cannot convert undefined or null to object");
        }
        var output = Object(target);
        var idx = 1;
        var length = arguments.length;
        while (idx < length) {
          var source = arguments[idx];
          if (source != null) {
            for (var nextKey in source) {
              if (_has(nextKey, source)) {
                output[nextKey] = source[nextKey];
              }
            }
          }
          idx += 1;
        }
        return output;
      }
      module.exports = typeof Object.assign === "function" ? Object.assign : _objectAssign;
    }
  });

  // sdk/contracts/node_modules/ramda/src/objOf.js
  var require_objOf = __commonJS({
    "sdk/contracts/node_modules/ramda/src/objOf.js"(exports, module) {
      var _curry2 = require_curry2();
      var objOf = /* @__PURE__ */ _curry2(function objOf2(key, val) {
        var obj = {};
        obj[key] = val;
        return obj;
      });
      module.exports = objOf;
    }
  });

  // sdk/contracts/node_modules/ramda/src/internal/_stepCat.js
  var require_stepCat = __commonJS({
    "sdk/contracts/node_modules/ramda/src/internal/_stepCat.js"(exports, module) {
      var _objectAssign = require_objectAssign();
      var _identity = require_identity();
      var _isArrayLike = require_isArrayLike();
      var _isTransformer = require_isTransformer();
      var objOf = require_objOf();
      var _stepCatArray = {
        "@@transducer/init": Array,
        "@@transducer/step": function(xs, x) {
          xs.push(x);
          return xs;
        },
        "@@transducer/result": _identity
      };
      var _stepCatString = {
        "@@transducer/init": String,
        "@@transducer/step": function(a, b) {
          return a + b;
        },
        "@@transducer/result": _identity
      };
      var _stepCatObject = {
        "@@transducer/init": Object,
        "@@transducer/step": function(result, input) {
          return _objectAssign(result, _isArrayLike(input) ? objOf(input[0], input[1]) : input);
        },
        "@@transducer/result": _identity
      };
      function _stepCat(obj) {
        if (_isTransformer(obj)) {
          return obj;
        }
        if (_isArrayLike(obj)) {
          return _stepCatArray;
        }
        if (typeof obj === "string") {
          return _stepCatString;
        }
        if (typeof obj === "object") {
          return _stepCatObject;
        }
        throw new Error("Cannot create transformer for " + obj);
      }
      module.exports = _stepCat;
    }
  });

  // sdk/contracts/node_modules/ramda/src/into.js
  var require_into = __commonJS({
    "sdk/contracts/node_modules/ramda/src/into.js"(exports, module) {
      var _clone = require_clone();
      var _curry3 = require_curry3();
      var _isTransformer = require_isTransformer();
      var _reduce = require_reduce();
      var _stepCat = require_stepCat();
      var into = /* @__PURE__ */ _curry3(function into2(acc, xf, list) {
        return _isTransformer(acc) ? _reduce(xf(acc), acc["@@transducer/init"](), list) : _reduce(xf(_stepCat(acc)), _clone(acc, [], [], false), list);
      });
      module.exports = into;
    }
  });

  // sdk/contracts/node_modules/ramda/src/invert.js
  var require_invert = __commonJS({
    "sdk/contracts/node_modules/ramda/src/invert.js"(exports, module) {
      var _curry1 = require_curry1();
      var _has = require_has();
      var keys = require_keys();
      var invert = /* @__PURE__ */ _curry1(function invert2(obj) {
        var props = keys(obj);
        var len = props.length;
        var idx = 0;
        var out = {};
        while (idx < len) {
          var key = props[idx];
          var val = obj[key];
          var list = _has(val, out) ? out[val] : out[val] = [];
          list[list.length] = key;
          idx += 1;
        }
        return out;
      });
      module.exports = invert;
    }
  });

  // sdk/contracts/node_modules/ramda/src/invertObj.js
  var require_invertObj = __commonJS({
    "sdk/contracts/node_modules/ramda/src/invertObj.js"(exports, module) {
      var _curry1 = require_curry1();
      var keys = require_keys();
      var invertObj = /* @__PURE__ */ _curry1(function invertObj2(obj) {
        var props = keys(obj);
        var len = props.length;
        var idx = 0;
        var out = {};
        while (idx < len) {
          var key = props[idx];
          out[obj[key]] = key;
          idx += 1;
        }
        return out;
      });
      module.exports = invertObj;
    }
  });

  // sdk/contracts/node_modules/ramda/src/invoker.js
  var require_invoker = __commonJS({
    "sdk/contracts/node_modules/ramda/src/invoker.js"(exports, module) {
      var _curry2 = require_curry2();
      var _isFunction = require_isFunction();
      var curryN = require_curryN2();
      var toString = require_toString2();
      var invoker = /* @__PURE__ */ _curry2(function invoker2(arity, method) {
        return curryN(arity + 1, function() {
          var target = arguments[arity];
          if (target != null && _isFunction(target[method])) {
            return target[method].apply(target, Array.prototype.slice.call(arguments, 0, arity));
          }
          throw new TypeError(toString(target) + ' does not have a method named "' + method + '"');
        });
      });
      module.exports = invoker;
    }
  });

  // sdk/contracts/node_modules/ramda/src/is.js
  var require_is = __commonJS({
    "sdk/contracts/node_modules/ramda/src/is.js"(exports, module) {
      var _curry2 = require_curry2();
      var is = /* @__PURE__ */ _curry2(function is2(Ctor, val) {
        return val instanceof Ctor || val != null && (val.constructor === Ctor || Ctor.name === "Object" && typeof val === "object");
      });
      module.exports = is;
    }
  });

  // sdk/contracts/node_modules/ramda/src/isEmpty.js
  var require_isEmpty = __commonJS({
    "sdk/contracts/node_modules/ramda/src/isEmpty.js"(exports, module) {
      var _curry1 = require_curry1();
      var empty = require_empty();
      var equals = require_equals2();
      var isEmpty = /* @__PURE__ */ _curry1(function isEmpty2(x) {
        return x != null && equals(x, empty(x));
      });
      module.exports = isEmpty;
    }
  });

  // sdk/contracts/node_modules/ramda/src/join.js
  var require_join = __commonJS({
    "sdk/contracts/node_modules/ramda/src/join.js"(exports, module) {
      var invoker = require_invoker();
      var join = /* @__PURE__ */ invoker(1, "join");
      module.exports = join;
    }
  });

  // sdk/contracts/node_modules/ramda/src/juxt.js
  var require_juxt = __commonJS({
    "sdk/contracts/node_modules/ramda/src/juxt.js"(exports, module) {
      var _curry1 = require_curry1();
      var converge = require_converge();
      var juxt = /* @__PURE__ */ _curry1(function juxt2(fns) {
        return converge(function() {
          return Array.prototype.slice.call(arguments, 0);
        }, fns);
      });
      module.exports = juxt;
    }
  });

  // sdk/contracts/node_modules/ramda/src/keysIn.js
  var require_keysIn = __commonJS({
    "sdk/contracts/node_modules/ramda/src/keysIn.js"(exports, module) {
      var _curry1 = require_curry1();
      var keysIn = /* @__PURE__ */ _curry1(function keysIn2(obj) {
        var prop;
        var ks = [];
        for (prop in obj) {
          ks[ks.length] = prop;
        }
        return ks;
      });
      module.exports = keysIn;
    }
  });

  // sdk/contracts/node_modules/ramda/src/lastIndexOf.js
  var require_lastIndexOf = __commonJS({
    "sdk/contracts/node_modules/ramda/src/lastIndexOf.js"(exports, module) {
      var _curry2 = require_curry2();
      var _isArray = require_isArray();
      var equals = require_equals2();
      var lastIndexOf = /* @__PURE__ */ _curry2(function lastIndexOf2(target, xs) {
        if (typeof xs.lastIndexOf === "function" && !_isArray(xs)) {
          return xs.lastIndexOf(target);
        } else {
          var idx = xs.length - 1;
          while (idx >= 0) {
            if (equals(xs[idx], target)) {
              return idx;
            }
            idx -= 1;
          }
          return -1;
        }
      });
      module.exports = lastIndexOf;
    }
  });

  // sdk/contracts/node_modules/ramda/src/internal/_isNumber.js
  var require_isNumber = __commonJS({
    "sdk/contracts/node_modules/ramda/src/internal/_isNumber.js"(exports, module) {
      function _isNumber(x) {
        return Object.prototype.toString.call(x) === "[object Number]";
      }
      module.exports = _isNumber;
    }
  });

  // sdk/contracts/node_modules/ramda/src/length.js
  var require_length = __commonJS({
    "sdk/contracts/node_modules/ramda/src/length.js"(exports, module) {
      var _curry1 = require_curry1();
      var _isNumber = require_isNumber();
      var length = /* @__PURE__ */ _curry1(function length2(list) {
        return list != null && _isNumber(list.length) ? list.length : NaN;
      });
      module.exports = length;
    }
  });

  // sdk/contracts/node_modules/ramda/src/lens.js
  var require_lens = __commonJS({
    "sdk/contracts/node_modules/ramda/src/lens.js"(exports, module) {
      var _curry2 = require_curry2();
      var map = require_map2();
      var lens = /* @__PURE__ */ _curry2(function lens2(getter, setter) {
        return function(toFunctorFn) {
          return function(target) {
            return map(function(focus) {
              return setter(focus, target);
            }, toFunctorFn(getter(target)));
          };
        };
      });
      module.exports = lens;
    }
  });

  // sdk/contracts/node_modules/ramda/src/update.js
  var require_update = __commonJS({
    "sdk/contracts/node_modules/ramda/src/update.js"(exports, module) {
      var _curry3 = require_curry3();
      var adjust = require_adjust();
      var always = require_always();
      var update = /* @__PURE__ */ _curry3(function update2(idx, x, list) {
        return adjust(idx, always(x), list);
      });
      module.exports = update;
    }
  });

  // sdk/contracts/node_modules/ramda/src/lensIndex.js
  var require_lensIndex = __commonJS({
    "sdk/contracts/node_modules/ramda/src/lensIndex.js"(exports, module) {
      var _curry1 = require_curry1();
      var lens = require_lens();
      var nth = require_nth();
      var update = require_update();
      var lensIndex = /* @__PURE__ */ _curry1(function lensIndex2(n) {
        return lens(nth(n), update(n));
      });
      module.exports = lensIndex;
    }
  });

  // sdk/contracts/node_modules/ramda/src/paths.js
  var require_paths = __commonJS({
    "sdk/contracts/node_modules/ramda/src/paths.js"(exports, module) {
      var _curry2 = require_curry2();
      var _isInteger = require_isInteger();
      var nth = require_nth();
      var paths = /* @__PURE__ */ _curry2(function paths2(pathsArray, obj) {
        return pathsArray.map(function(paths3) {
          var val = obj;
          var idx = 0;
          var p;
          while (idx < paths3.length) {
            if (val == null) {
              return;
            }
            p = paths3[idx];
            val = _isInteger(p) ? nth(p, val) : val[p];
            idx += 1;
          }
          return val;
        });
      });
      module.exports = paths;
    }
  });

  // sdk/contracts/node_modules/ramda/src/path.js
  var require_path = __commonJS({
    "sdk/contracts/node_modules/ramda/src/path.js"(exports, module) {
      var _curry2 = require_curry2();
      var paths = require_paths();
      var path = /* @__PURE__ */ _curry2(function path2(pathAr, obj) {
        return paths([pathAr], obj)[0];
      });
      module.exports = path;
    }
  });

  // sdk/contracts/node_modules/ramda/src/lensPath.js
  var require_lensPath = __commonJS({
    "sdk/contracts/node_modules/ramda/src/lensPath.js"(exports, module) {
      var _curry1 = require_curry1();
      var assocPath = require_assocPath();
      var lens = require_lens();
      var path = require_path();
      var lensPath = /* @__PURE__ */ _curry1(function lensPath2(p) {
        return lens(path(p), assocPath(p));
      });
      module.exports = lensPath;
    }
  });

  // sdk/contracts/node_modules/ramda/src/lensProp.js
  var require_lensProp = __commonJS({
    "sdk/contracts/node_modules/ramda/src/lensProp.js"(exports, module) {
      var _curry1 = require_curry1();
      var assoc = require_assoc2();
      var lens = require_lens();
      var prop = require_prop();
      var lensProp = /* @__PURE__ */ _curry1(function lensProp2(k) {
        return lens(prop(k), assoc(k));
      });
      module.exports = lensProp;
    }
  });

  // sdk/contracts/node_modules/ramda/src/lt.js
  var require_lt = __commonJS({
    "sdk/contracts/node_modules/ramda/src/lt.js"(exports, module) {
      var _curry2 = require_curry2();
      var lt = /* @__PURE__ */ _curry2(function lt2(a, b) {
        return a < b;
      });
      module.exports = lt;
    }
  });

  // sdk/contracts/node_modules/ramda/src/lte.js
  var require_lte = __commonJS({
    "sdk/contracts/node_modules/ramda/src/lte.js"(exports, module) {
      var _curry2 = require_curry2();
      var lte = /* @__PURE__ */ _curry2(function lte2(a, b) {
        return a <= b;
      });
      module.exports = lte;
    }
  });

  // sdk/contracts/node_modules/ramda/src/mapAccum.js
  var require_mapAccum = __commonJS({
    "sdk/contracts/node_modules/ramda/src/mapAccum.js"(exports, module) {
      var _curry3 = require_curry3();
      var mapAccum = /* @__PURE__ */ _curry3(function mapAccum2(fn, acc, list) {
        var idx = 0;
        var len = list.length;
        var result = [];
        var tuple = [acc];
        while (idx < len) {
          tuple = fn(tuple[0], list[idx]);
          result[idx] = tuple[1];
          idx += 1;
        }
        return [tuple[0], result];
      });
      module.exports = mapAccum;
    }
  });

  // sdk/contracts/node_modules/ramda/src/mapAccumRight.js
  var require_mapAccumRight = __commonJS({
    "sdk/contracts/node_modules/ramda/src/mapAccumRight.js"(exports, module) {
      var _curry3 = require_curry3();
      var mapAccumRight = /* @__PURE__ */ _curry3(function mapAccumRight2(fn, acc, list) {
        var idx = list.length - 1;
        var result = [];
        var tuple = [acc];
        while (idx >= 0) {
          tuple = fn(tuple[0], list[idx]);
          result[idx] = tuple[1];
          idx -= 1;
        }
        return [tuple[0], result];
      });
      module.exports = mapAccumRight;
    }
  });

  // sdk/contracts/node_modules/ramda/src/mapObjIndexed.js
  var require_mapObjIndexed = __commonJS({
    "sdk/contracts/node_modules/ramda/src/mapObjIndexed.js"(exports, module) {
      var _curry2 = require_curry2();
      var _reduce = require_reduce();
      var keys = require_keys();
      var mapObjIndexed = /* @__PURE__ */ _curry2(function mapObjIndexed2(fn, obj) {
        return _reduce(function(acc, key) {
          acc[key] = fn(obj[key], key, obj);
          return acc;
        }, {}, keys(obj));
      });
      module.exports = mapObjIndexed;
    }
  });

  // sdk/contracts/node_modules/ramda/src/match.js
  var require_match = __commonJS({
    "sdk/contracts/node_modules/ramda/src/match.js"(exports, module) {
      var _curry2 = require_curry2();
      var match = /* @__PURE__ */ _curry2(function match2(rx, str) {
        return str.match(rx) || [];
      });
      module.exports = match;
    }
  });

  // sdk/contracts/node_modules/ramda/src/mathMod.js
  var require_mathMod = __commonJS({
    "sdk/contracts/node_modules/ramda/src/mathMod.js"(exports, module) {
      var _curry2 = require_curry2();
      var _isInteger = require_isInteger();
      var mathMod = /* @__PURE__ */ _curry2(function mathMod2(m, p) {
        if (!_isInteger(m)) {
          return NaN;
        }
        if (!_isInteger(p) || p < 1) {
          return NaN;
        }
        return (m % p + p) % p;
      });
      module.exports = mathMod;
    }
  });

  // sdk/contracts/node_modules/ramda/src/maxBy.js
  var require_maxBy = __commonJS({
    "sdk/contracts/node_modules/ramda/src/maxBy.js"(exports, module) {
      var _curry3 = require_curry3();
      var maxBy = /* @__PURE__ */ _curry3(function maxBy2(f, a, b) {
        return f(b) > f(a) ? b : a;
      });
      module.exports = maxBy;
    }
  });

  // sdk/contracts/node_modules/ramda/src/sum.js
  var require_sum = __commonJS({
    "sdk/contracts/node_modules/ramda/src/sum.js"(exports, module) {
      var add = require_add();
      var reduce = require_reduce2();
      var sum = /* @__PURE__ */ reduce(add, 0);
      module.exports = sum;
    }
  });

  // sdk/contracts/node_modules/ramda/src/mean.js
  var require_mean = __commonJS({
    "sdk/contracts/node_modules/ramda/src/mean.js"(exports, module) {
      var _curry1 = require_curry1();
      var sum = require_sum();
      var mean = /* @__PURE__ */ _curry1(function mean2(list) {
        return sum(list) / list.length;
      });
      module.exports = mean;
    }
  });

  // sdk/contracts/node_modules/ramda/src/median.js
  var require_median = __commonJS({
    "sdk/contracts/node_modules/ramda/src/median.js"(exports, module) {
      var _curry1 = require_curry1();
      var mean = require_mean();
      var median = /* @__PURE__ */ _curry1(function median2(list) {
        var len = list.length;
        if (len === 0) {
          return NaN;
        }
        var width = 2 - len % 2;
        var idx = (len - width) / 2;
        return mean(Array.prototype.slice.call(list, 0).sort(function(a, b) {
          return a < b ? -1 : a > b ? 1 : 0;
        }).slice(idx, idx + width));
      });
      module.exports = median;
    }
  });

  // sdk/contracts/node_modules/ramda/src/memoizeWith.js
  var require_memoizeWith = __commonJS({
    "sdk/contracts/node_modules/ramda/src/memoizeWith.js"(exports, module) {
      var _arity = require_arity();
      var _curry2 = require_curry2();
      var _has = require_has();
      var memoizeWith = /* @__PURE__ */ _curry2(function memoizeWith2(mFn, fn) {
        var cache = {};
        return _arity(fn.length, function() {
          var key = mFn.apply(this, arguments);
          if (!_has(key, cache)) {
            cache[key] = fn.apply(this, arguments);
          }
          return cache[key];
        });
      });
      module.exports = memoizeWith;
    }
  });

  // sdk/contracts/node_modules/ramda/src/mergeAll.js
  var require_mergeAll = __commonJS({
    "sdk/contracts/node_modules/ramda/src/mergeAll.js"(exports, module) {
      var _objectAssign = require_objectAssign();
      var _curry1 = require_curry1();
      var mergeAll = /* @__PURE__ */ _curry1(function mergeAll2(list) {
        return _objectAssign.apply(null, [{}].concat(list));
      });
      module.exports = mergeAll;
    }
  });

  // sdk/contracts/node_modules/ramda/src/mergeWithKey.js
  var require_mergeWithKey = __commonJS({
    "sdk/contracts/node_modules/ramda/src/mergeWithKey.js"(exports, module) {
      var _curry3 = require_curry3();
      var _has = require_has();
      var mergeWithKey = /* @__PURE__ */ _curry3(function mergeWithKey2(fn, l, r) {
        var result = {};
        var k;
        for (k in l) {
          if (_has(k, l)) {
            result[k] = _has(k, r) ? fn(k, l[k], r[k]) : l[k];
          }
        }
        for (k in r) {
          if (_has(k, r) && !_has(k, result)) {
            result[k] = r[k];
          }
        }
        return result;
      });
      module.exports = mergeWithKey;
    }
  });

  // sdk/contracts/node_modules/ramda/src/mergeDeepWithKey.js
  var require_mergeDeepWithKey = __commonJS({
    "sdk/contracts/node_modules/ramda/src/mergeDeepWithKey.js"(exports, module) {
      var _curry3 = require_curry3();
      var _isObject = require_isObject();
      var mergeWithKey = require_mergeWithKey();
      var mergeDeepWithKey = /* @__PURE__ */ _curry3(function mergeDeepWithKey2(fn, lObj, rObj) {
        return mergeWithKey(function(k, lVal, rVal) {
          if (_isObject(lVal) && _isObject(rVal)) {
            return mergeDeepWithKey2(fn, lVal, rVal);
          } else {
            return fn(k, lVal, rVal);
          }
        }, lObj, rObj);
      });
      module.exports = mergeDeepWithKey;
    }
  });

  // sdk/contracts/node_modules/ramda/src/mergeDeepLeft.js
  var require_mergeDeepLeft = __commonJS({
    "sdk/contracts/node_modules/ramda/src/mergeDeepLeft.js"(exports, module) {
      var _curry2 = require_curry2();
      var mergeDeepWithKey = require_mergeDeepWithKey();
      var mergeDeepLeft = /* @__PURE__ */ _curry2(function mergeDeepLeft2(lObj, rObj) {
        return mergeDeepWithKey(function(k, lVal, rVal) {
          return lVal;
        }, lObj, rObj);
      });
      module.exports = mergeDeepLeft;
    }
  });

  // sdk/contracts/node_modules/ramda/src/mergeDeepRight.js
  var require_mergeDeepRight = __commonJS({
    "sdk/contracts/node_modules/ramda/src/mergeDeepRight.js"(exports, module) {
      var _curry2 = require_curry2();
      var mergeDeepWithKey = require_mergeDeepWithKey();
      var mergeDeepRight = /* @__PURE__ */ _curry2(function mergeDeepRight2(lObj, rObj) {
        return mergeDeepWithKey(function(k, lVal, rVal) {
          return rVal;
        }, lObj, rObj);
      });
      module.exports = mergeDeepRight;
    }
  });

  // sdk/contracts/node_modules/ramda/src/mergeDeepWith.js
  var require_mergeDeepWith = __commonJS({
    "sdk/contracts/node_modules/ramda/src/mergeDeepWith.js"(exports, module) {
      var _curry3 = require_curry3();
      var mergeDeepWithKey = require_mergeDeepWithKey();
      var mergeDeepWith = /* @__PURE__ */ _curry3(function mergeDeepWith2(fn, lObj, rObj) {
        return mergeDeepWithKey(function(k, lVal, rVal) {
          return fn(lVal, rVal);
        }, lObj, rObj);
      });
      module.exports = mergeDeepWith;
    }
  });

  // sdk/contracts/node_modules/ramda/src/mergeLeft.js
  var require_mergeLeft = __commonJS({
    "sdk/contracts/node_modules/ramda/src/mergeLeft.js"(exports, module) {
      var _objectAssign = require_objectAssign();
      var _curry2 = require_curry2();
      var mergeLeft = /* @__PURE__ */ _curry2(function mergeLeft2(l, r) {
        return _objectAssign({}, r, l);
      });
      module.exports = mergeLeft;
    }
  });

  // sdk/contracts/node_modules/ramda/src/mergeRight.js
  var require_mergeRight = __commonJS({
    "sdk/contracts/node_modules/ramda/src/mergeRight.js"(exports, module) {
      var _objectAssign = require_objectAssign();
      var _curry2 = require_curry2();
      var mergeRight = /* @__PURE__ */ _curry2(function mergeRight2(l, r) {
        return _objectAssign({}, l, r);
      });
      module.exports = mergeRight;
    }
  });

  // sdk/contracts/node_modules/ramda/src/mergeWith.js
  var require_mergeWith = __commonJS({
    "sdk/contracts/node_modules/ramda/src/mergeWith.js"(exports, module) {
      var _curry3 = require_curry3();
      var mergeWithKey = require_mergeWithKey();
      var mergeWith = /* @__PURE__ */ _curry3(function mergeWith2(fn, l, r) {
        return mergeWithKey(function(_2, _l, _r) {
          return fn(_l, _r);
        }, l, r);
      });
      module.exports = mergeWith;
    }
  });

  // sdk/contracts/node_modules/ramda/src/min.js
  var require_min = __commonJS({
    "sdk/contracts/node_modules/ramda/src/min.js"(exports, module) {
      var _curry2 = require_curry2();
      var min = /* @__PURE__ */ _curry2(function min2(a, b) {
        return b < a ? b : a;
      });
      module.exports = min;
    }
  });

  // sdk/contracts/node_modules/ramda/src/minBy.js
  var require_minBy = __commonJS({
    "sdk/contracts/node_modules/ramda/src/minBy.js"(exports, module) {
      var _curry3 = require_curry3();
      var minBy = /* @__PURE__ */ _curry3(function minBy2(f, a, b) {
        return f(b) < f(a) ? b : a;
      });
      module.exports = minBy;
    }
  });

  // sdk/contracts/node_modules/ramda/src/internal/_modify.js
  var require_modify = __commonJS({
    "sdk/contracts/node_modules/ramda/src/internal/_modify.js"(exports, module) {
      var _isArray = require_isArray();
      var _isInteger = require_isInteger();
      function _modify(prop, fn, obj) {
        if (_isInteger(prop) && _isArray(obj)) {
          var arr = [].concat(obj);
          arr[prop] = fn(arr[prop]);
          return arr;
        }
        var result = {};
        for (var p in obj) {
          result[p] = obj[p];
        }
        result[prop] = fn(result[prop]);
        return result;
      }
      module.exports = _modify;
    }
  });

  // sdk/contracts/node_modules/ramda/src/modifyPath.js
  var require_modifyPath = __commonJS({
    "sdk/contracts/node_modules/ramda/src/modifyPath.js"(exports, module) {
      var _curry3 = require_curry3();
      var _isArray = require_isArray();
      var _isObject = require_isObject();
      var _has = require_has();
      var _assoc = require_assoc();
      var _modify = require_modify();
      var modifyPath = /* @__PURE__ */ _curry3(function modifyPath2(path, fn, object) {
        if (!_isObject(object) && !_isArray(object) || path.length === 0) {
          return object;
        }
        var idx = path[0];
        if (!_has(idx, object)) {
          return object;
        }
        if (path.length === 1) {
          return _modify(idx, fn, object);
        }
        var val = modifyPath2(Array.prototype.slice.call(path, 1), fn, object[idx]);
        if (val === object[idx]) {
          return object;
        }
        return _assoc(idx, val, object);
      });
      module.exports = modifyPath;
    }
  });

  // sdk/contracts/node_modules/ramda/src/modify.js
  var require_modify2 = __commonJS({
    "sdk/contracts/node_modules/ramda/src/modify.js"(exports, module) {
      var _curry3 = require_curry3();
      var modifyPath = require_modifyPath();
      var modify = /* @__PURE__ */ _curry3(function modify2(prop, fn, object) {
        return modifyPath([prop], fn, object);
      });
      module.exports = modify;
    }
  });

  // sdk/contracts/node_modules/ramda/src/modulo.js
  var require_modulo = __commonJS({
    "sdk/contracts/node_modules/ramda/src/modulo.js"(exports, module) {
      var _curry2 = require_curry2();
      var modulo = /* @__PURE__ */ _curry2(function modulo2(a, b) {
        return a % b;
      });
      module.exports = modulo;
    }
  });

  // sdk/contracts/node_modules/ramda/src/move.js
  var require_move = __commonJS({
    "sdk/contracts/node_modules/ramda/src/move.js"(exports, module) {
      var _curry3 = require_curry3();
      var move = /* @__PURE__ */ _curry3(function(from, to, list) {
        var length = list.length;
        var result = list.slice();
        var positiveFrom = from < 0 ? length + from : from;
        var positiveTo = to < 0 ? length + to : to;
        var item = result.splice(positiveFrom, 1);
        return positiveFrom < 0 || positiveFrom >= list.length || positiveTo < 0 || positiveTo >= list.length ? list : [].concat(result.slice(0, positiveTo)).concat(item).concat(result.slice(positiveTo, list.length));
      });
      module.exports = move;
    }
  });

  // sdk/contracts/node_modules/ramda/src/multiply.js
  var require_multiply = __commonJS({
    "sdk/contracts/node_modules/ramda/src/multiply.js"(exports, module) {
      var _curry2 = require_curry2();
      var multiply = /* @__PURE__ */ _curry2(function multiply2(a, b) {
        return a * b;
      });
      module.exports = multiply;
    }
  });

  // sdk/contracts/node_modules/ramda/src/partialObject.js
  var require_partialObject = __commonJS({
    "sdk/contracts/node_modules/ramda/src/partialObject.js"(exports, module) {
      var mergeDeepRight = require_mergeDeepRight();
      var _curry2 = require_curry2();
      module.exports = /* @__PURE__ */ _curry2((f, o) => (props) => f.call(exports, mergeDeepRight(o, props)));
    }
  });

  // sdk/contracts/node_modules/ramda/src/negate.js
  var require_negate = __commonJS({
    "sdk/contracts/node_modules/ramda/src/negate.js"(exports, module) {
      var _curry1 = require_curry1();
      var negate = /* @__PURE__ */ _curry1(function negate2(n) {
        return -n;
      });
      module.exports = negate;
    }
  });

  // sdk/contracts/node_modules/ramda/src/none.js
  var require_none = __commonJS({
    "sdk/contracts/node_modules/ramda/src/none.js"(exports, module) {
      var _complement = require_complement2();
      var _curry2 = require_curry2();
      var all = require_all();
      var none = /* @__PURE__ */ _curry2(function none2(fn, input) {
        return all(_complement(fn), input);
      });
      module.exports = none;
    }
  });

  // sdk/contracts/node_modules/ramda/src/nthArg.js
  var require_nthArg = __commonJS({
    "sdk/contracts/node_modules/ramda/src/nthArg.js"(exports, module) {
      var _curry1 = require_curry1();
      var curryN = require_curryN2();
      var nth = require_nth();
      var nthArg = /* @__PURE__ */ _curry1(function nthArg2(n) {
        var arity = n < 0 ? 1 : n + 1;
        return curryN(arity, function() {
          return nth(n, arguments);
        });
      });
      module.exports = nthArg;
    }
  });

  // sdk/contracts/node_modules/ramda/src/o.js
  var require_o = __commonJS({
    "sdk/contracts/node_modules/ramda/src/o.js"(exports, module) {
      var _curry3 = require_curry3();
      var o = /* @__PURE__ */ _curry3(function o2(f, g, x) {
        return f(g(x));
      });
      module.exports = o;
    }
  });

  // sdk/contracts/node_modules/ramda/src/internal/_of.js
  var require_of = __commonJS({
    "sdk/contracts/node_modules/ramda/src/internal/_of.js"(exports, module) {
      function _of(x) {
        return [x];
      }
      module.exports = _of;
    }
  });

  // sdk/contracts/node_modules/ramda/src/of.js
  var require_of2 = __commonJS({
    "sdk/contracts/node_modules/ramda/src/of.js"(exports, module) {
      var _curry1 = require_curry1();
      var _of = require_of();
      var of = /* @__PURE__ */ _curry1(_of);
      module.exports = of;
    }
  });

  // sdk/contracts/node_modules/ramda/src/omit.js
  var require_omit = __commonJS({
    "sdk/contracts/node_modules/ramda/src/omit.js"(exports, module) {
      var _curry2 = require_curry2();
      var omit = /* @__PURE__ */ _curry2(function omit2(names, obj) {
        var result = {};
        var index = {};
        var idx = 0;
        var len = names.length;
        while (idx < len) {
          index[names[idx]] = 1;
          idx += 1;
        }
        for (var prop in obj) {
          if (!index.hasOwnProperty(prop)) {
            result[prop] = obj[prop];
          }
        }
        return result;
      });
      module.exports = omit;
    }
  });

  // sdk/contracts/node_modules/ramda/src/on.js
  var require_on = __commonJS({
    "sdk/contracts/node_modules/ramda/src/on.js"(exports, module) {
      var curryN = require_curryN();
      var on = /* @__PURE__ */ curryN(4, [], function on2(f, g, a, b) {
        return f(g(a), g(b));
      });
      module.exports = on;
    }
  });

  // sdk/contracts/node_modules/ramda/src/once.js
  var require_once = __commonJS({
    "sdk/contracts/node_modules/ramda/src/once.js"(exports, module) {
      var _arity = require_arity();
      var _curry1 = require_curry1();
      var once = /* @__PURE__ */ _curry1(function once2(fn) {
        var called = false;
        var result;
        return _arity(fn.length, function() {
          if (called) {
            return result;
          }
          called = true;
          result = fn.apply(this, arguments);
          return result;
        });
      });
      module.exports = once;
    }
  });

  // sdk/contracts/node_modules/ramda/src/internal/_assertPromise.js
  var require_assertPromise = __commonJS({
    "sdk/contracts/node_modules/ramda/src/internal/_assertPromise.js"(exports, module) {
      var _isFunction = require_isFunction();
      var _toString = require_toString();
      function _assertPromise(name, p) {
        if (p == null || !_isFunction(p.then)) {
          throw new TypeError("`" + name + "` expected a Promise, received " + _toString(p, []));
        }
      }
      module.exports = _assertPromise;
    }
  });

  // sdk/contracts/node_modules/ramda/src/otherwise.js
  var require_otherwise = __commonJS({
    "sdk/contracts/node_modules/ramda/src/otherwise.js"(exports, module) {
      var _curry2 = require_curry2();
      var _assertPromise = require_assertPromise();
      var otherwise = /* @__PURE__ */ _curry2(function otherwise2(f, p) {
        _assertPromise("otherwise", p);
        return p.then(null, f);
      });
      module.exports = otherwise;
    }
  });

  // sdk/contracts/node_modules/ramda/src/over.js
  var require_over = __commonJS({
    "sdk/contracts/node_modules/ramda/src/over.js"(exports, module) {
      var _curry3 = require_curry3();
      var Identity = function(x) {
        return {
          value: x,
          map: function(f) {
            return Identity(f(x));
          }
        };
      };
      var over = /* @__PURE__ */ _curry3(function over2(lens, f, x) {
        return lens(function(y) {
          return Identity(f(y));
        })(x).value;
      });
      module.exports = over;
    }
  });

  // sdk/contracts/node_modules/ramda/src/pair.js
  var require_pair = __commonJS({
    "sdk/contracts/node_modules/ramda/src/pair.js"(exports, module) {
      var _curry2 = require_curry2();
      var pair = /* @__PURE__ */ _curry2(function pair2(fst, snd) {
        return [fst, snd];
      });
      module.exports = pair;
    }
  });

  // sdk/contracts/node_modules/ramda/src/internal/_createPartialApplicator.js
  var require_createPartialApplicator = __commonJS({
    "sdk/contracts/node_modules/ramda/src/internal/_createPartialApplicator.js"(exports, module) {
      var _arity = require_arity();
      var _curry2 = require_curry2();
      function _createPartialApplicator(concat) {
        return _curry2(function(fn, args) {
          return _arity(Math.max(0, fn.length - args.length), function() {
            return fn.apply(this, concat(args, arguments));
          });
        });
      }
      module.exports = _createPartialApplicator;
    }
  });

  // sdk/contracts/node_modules/ramda/src/partial.js
  var require_partial = __commonJS({
    "sdk/contracts/node_modules/ramda/src/partial.js"(exports, module) {
      var _concat = require_concat();
      var _createPartialApplicator = require_createPartialApplicator();
      var partial = /* @__PURE__ */ _createPartialApplicator(_concat);
      module.exports = partial;
    }
  });

  // sdk/contracts/node_modules/ramda/src/partialRight.js
  var require_partialRight = __commonJS({
    "sdk/contracts/node_modules/ramda/src/partialRight.js"(exports, module) {
      var _concat = require_concat();
      var _createPartialApplicator = require_createPartialApplicator();
      var flip = require_flip();
      var partialRight = /* @__PURE__ */ _createPartialApplicator(
        /* @__PURE__ */ flip(_concat)
      );
      module.exports = partialRight;
    }
  });

  // sdk/contracts/node_modules/ramda/src/partition.js
  var require_partition = __commonJS({
    "sdk/contracts/node_modules/ramda/src/partition.js"(exports, module) {
      var filter = require_filter2();
      var juxt = require_juxt();
      var reject = require_reject();
      var partition = /* @__PURE__ */ juxt([filter, reject]);
      module.exports = partition;
    }
  });

  // sdk/contracts/node_modules/ramda/src/pathEq.js
  var require_pathEq = __commonJS({
    "sdk/contracts/node_modules/ramda/src/pathEq.js"(exports, module) {
      var _curry3 = require_curry3();
      var equals = require_equals2();
      var path = require_path();
      var pathEq = /* @__PURE__ */ _curry3(function pathEq2(_path, val, obj) {
        return equals(path(_path, obj), val);
      });
      module.exports = pathEq;
    }
  });

  // sdk/contracts/node_modules/ramda/src/pathOr.js
  var require_pathOr = __commonJS({
    "sdk/contracts/node_modules/ramda/src/pathOr.js"(exports, module) {
      var _curry3 = require_curry3();
      var defaultTo = require_defaultTo();
      var path = require_path();
      var pathOr = /* @__PURE__ */ _curry3(function pathOr2(d, p, obj) {
        return defaultTo(d, path(p, obj));
      });
      module.exports = pathOr;
    }
  });

  // sdk/contracts/node_modules/ramda/src/pathSatisfies.js
  var require_pathSatisfies = __commonJS({
    "sdk/contracts/node_modules/ramda/src/pathSatisfies.js"(exports, module) {
      var _curry3 = require_curry3();
      var path = require_path();
      var pathSatisfies = /* @__PURE__ */ _curry3(function pathSatisfies2(pred, propPath, obj) {
        return pred(path(propPath, obj));
      });
      module.exports = pathSatisfies;
    }
  });

  // sdk/contracts/node_modules/ramda/src/pick.js
  var require_pick = __commonJS({
    "sdk/contracts/node_modules/ramda/src/pick.js"(exports, module) {
      var _curry2 = require_curry2();
      var pick = /* @__PURE__ */ _curry2(function pick2(names, obj) {
        var result = {};
        var idx = 0;
        while (idx < names.length) {
          if (names[idx] in obj) {
            result[names[idx]] = obj[names[idx]];
          }
          idx += 1;
        }
        return result;
      });
      module.exports = pick;
    }
  });

  // sdk/contracts/node_modules/ramda/src/pickAll.js
  var require_pickAll = __commonJS({
    "sdk/contracts/node_modules/ramda/src/pickAll.js"(exports, module) {
      var _curry2 = require_curry2();
      var pickAll = /* @__PURE__ */ _curry2(function pickAll2(names, obj) {
        var result = {};
        var idx = 0;
        var len = names.length;
        while (idx < len) {
          var name = names[idx];
          result[name] = obj[name];
          idx += 1;
        }
        return result;
      });
      module.exports = pickAll;
    }
  });

  // sdk/contracts/node_modules/ramda/src/pickBy.js
  var require_pickBy = __commonJS({
    "sdk/contracts/node_modules/ramda/src/pickBy.js"(exports, module) {
      var _curry2 = require_curry2();
      var pickBy = /* @__PURE__ */ _curry2(function pickBy2(test, obj) {
        var result = {};
        for (var prop in obj) {
          if (test(obj[prop], prop, obj)) {
            result[prop] = obj[prop];
          }
        }
        return result;
      });
      module.exports = pickBy;
    }
  });

  // sdk/contracts/node_modules/ramda/src/prepend.js
  var require_prepend = __commonJS({
    "sdk/contracts/node_modules/ramda/src/prepend.js"(exports, module) {
      var _concat = require_concat();
      var _curry2 = require_curry2();
      var prepend = /* @__PURE__ */ _curry2(function prepend2(el, list) {
        return _concat([el], list);
      });
      module.exports = prepend;
    }
  });

  // sdk/contracts/node_modules/ramda/src/product.js
  var require_product = __commonJS({
    "sdk/contracts/node_modules/ramda/src/product.js"(exports, module) {
      var multiply = require_multiply();
      var reduce = require_reduce2();
      var product = /* @__PURE__ */ reduce(multiply, 1);
      module.exports = product;
    }
  });

  // sdk/contracts/node_modules/ramda/src/useWith.js
  var require_useWith = __commonJS({
    "sdk/contracts/node_modules/ramda/src/useWith.js"(exports, module) {
      var _curry2 = require_curry2();
      var curryN = require_curryN2();
      var useWith = /* @__PURE__ */ _curry2(function useWith2(fn, transformers) {
        return curryN(transformers.length, function() {
          var args = [];
          var idx = 0;
          while (idx < transformers.length) {
            args.push(transformers[idx].call(this, arguments[idx]));
            idx += 1;
          }
          return fn.apply(this, args.concat(Array.prototype.slice.call(arguments, transformers.length)));
        });
      });
      module.exports = useWith;
    }
  });

  // sdk/contracts/node_modules/ramda/src/project.js
  var require_project = __commonJS({
    "sdk/contracts/node_modules/ramda/src/project.js"(exports, module) {
      var _map = require_map();
      var identity = require_identity2();
      var pickAll = require_pickAll();
      var useWith = require_useWith();
      var project = /* @__PURE__ */ useWith(_map, [pickAll, identity]);
      module.exports = project;
    }
  });

  // sdk/contracts/node_modules/ramda/src/internal/_promap.js
  var require_promap = __commonJS({
    "sdk/contracts/node_modules/ramda/src/internal/_promap.js"(exports, module) {
      function _promap(f, g, profunctor) {
        return function(x) {
          return g(profunctor(f(x)));
        };
      }
      module.exports = _promap;
    }
  });

  // sdk/contracts/node_modules/ramda/src/internal/_xpromap.js
  var require_xpromap = __commonJS({
    "sdk/contracts/node_modules/ramda/src/internal/_xpromap.js"(exports, module) {
      var _curry3 = require_curry3();
      var _xfBase = require_xfBase();
      var _promap = require_promap();
      var XPromap = /* @__PURE__ */ function() {
        function XPromap2(f, g, xf) {
          this.xf = xf;
          this.f = f;
          this.g = g;
        }
        XPromap2.prototype["@@transducer/init"] = _xfBase.init;
        XPromap2.prototype["@@transducer/result"] = _xfBase.result;
        XPromap2.prototype["@@transducer/step"] = function(result, input) {
          return this.xf["@@transducer/step"](result, _promap(this.f, this.g, input));
        };
        return XPromap2;
      }();
      var _xpromap = /* @__PURE__ */ _curry3(function _xpromap2(f, g, xf) {
        return new XPromap(f, g, xf);
      });
      module.exports = _xpromap;
    }
  });

  // sdk/contracts/node_modules/ramda/src/promap.js
  var require_promap2 = __commonJS({
    "sdk/contracts/node_modules/ramda/src/promap.js"(exports, module) {
      var _curry3 = require_curry3();
      var _dispatchable = require_dispatchable();
      var _promap = require_promap();
      var _xpromap = require_xpromap();
      var promap = /* @__PURE__ */ _curry3(
        /* @__PURE__ */ _dispatchable(["fantasy-land/promap", "promap"], _xpromap, _promap)
      );
      module.exports = promap;
    }
  });

  // sdk/contracts/node_modules/ramda/src/propEq.js
  var require_propEq = __commonJS({
    "sdk/contracts/node_modules/ramda/src/propEq.js"(exports, module) {
      var _curry3 = require_curry3();
      var prop = require_prop();
      var equals = require_equals2();
      var propEq = /* @__PURE__ */ _curry3(function propEq2(name, val, obj) {
        return equals(val, prop(name, obj));
      });
      module.exports = propEq;
    }
  });

  // sdk/contracts/node_modules/ramda/src/propIs.js
  var require_propIs = __commonJS({
    "sdk/contracts/node_modules/ramda/src/propIs.js"(exports, module) {
      var _curry3 = require_curry3();
      var prop = require_prop();
      var is = require_is();
      var propIs = /* @__PURE__ */ _curry3(function propIs2(type, name, obj) {
        return is(type, prop(name, obj));
      });
      module.exports = propIs;
    }
  });

  // sdk/contracts/node_modules/ramda/src/propOr.js
  var require_propOr = __commonJS({
    "sdk/contracts/node_modules/ramda/src/propOr.js"(exports, module) {
      var _curry3 = require_curry3();
      var defaultTo = require_defaultTo();
      var prop = require_prop();
      var propOr = /* @__PURE__ */ _curry3(function propOr2(val, p, obj) {
        return defaultTo(val, prop(p, obj));
      });
      module.exports = propOr;
    }
  });

  // sdk/contracts/node_modules/ramda/src/propSatisfies.js
  var require_propSatisfies = __commonJS({
    "sdk/contracts/node_modules/ramda/src/propSatisfies.js"(exports, module) {
      var _curry3 = require_curry3();
      var prop = require_prop();
      var propSatisfies = /* @__PURE__ */ _curry3(function propSatisfies2(pred, name, obj) {
        return pred(prop(name, obj));
      });
      module.exports = propSatisfies;
    }
  });

  // sdk/contracts/node_modules/ramda/src/props.js
  var require_props = __commonJS({
    "sdk/contracts/node_modules/ramda/src/props.js"(exports, module) {
      var _curry2 = require_curry2();
      var path = require_path();
      var props = /* @__PURE__ */ _curry2(function props2(ps, obj) {
        return ps.map(function(p) {
          return path([p], obj);
        });
      });
      module.exports = props;
    }
  });

  // sdk/contracts/node_modules/ramda/src/range.js
  var require_range = __commonJS({
    "sdk/contracts/node_modules/ramda/src/range.js"(exports, module) {
      var _curry2 = require_curry2();
      var _isNumber = require_isNumber();
      var range = /* @__PURE__ */ _curry2(function range2(from, to) {
        if (!(_isNumber(from) && _isNumber(to))) {
          throw new TypeError("Both arguments to range must be numbers");
        }
        var result = [];
        var n = from;
        while (n < to) {
          result.push(n);
          n += 1;
        }
        return result;
      });
      module.exports = range;
    }
  });

  // sdk/contracts/node_modules/ramda/src/reduceRight.js
  var require_reduceRight = __commonJS({
    "sdk/contracts/node_modules/ramda/src/reduceRight.js"(exports, module) {
      var _curry3 = require_curry3();
      var reduceRight = /* @__PURE__ */ _curry3(function reduceRight2(fn, acc, list) {
        var idx = list.length - 1;
        while (idx >= 0) {
          acc = fn(list[idx], acc);
          if (acc && acc["@@transducer/reduced"]) {
            acc = acc["@@transducer/value"];
            break;
          }
          idx -= 1;
        }
        return acc;
      });
      module.exports = reduceRight;
    }
  });

  // sdk/contracts/node_modules/ramda/src/reduceWhile.js
  var require_reduceWhile = __commonJS({
    "sdk/contracts/node_modules/ramda/src/reduceWhile.js"(exports, module) {
      var _curryN = require_curryN();
      var _reduce = require_reduce();
      var _reduced = require_reduced();
      var reduceWhile = /* @__PURE__ */ _curryN(4, [], function _reduceWhile(pred, fn, a, list) {
        return _reduce(function(acc, x) {
          return pred(acc, x) ? fn(acc, x) : _reduced(acc);
        }, a, list);
      });
      module.exports = reduceWhile;
    }
  });

  // sdk/contracts/node_modules/ramda/src/reduced.js
  var require_reduced2 = __commonJS({
    "sdk/contracts/node_modules/ramda/src/reduced.js"(exports, module) {
      var _curry1 = require_curry1();
      var _reduced = require_reduced();
      var reduced = /* @__PURE__ */ _curry1(_reduced);
      module.exports = reduced;
    }
  });

  // sdk/contracts/node_modules/ramda/src/times.js
  var require_times = __commonJS({
    "sdk/contracts/node_modules/ramda/src/times.js"(exports, module) {
      var _curry2 = require_curry2();
      var times = /* @__PURE__ */ _curry2(function times2(fn, n) {
        var len = Number(n);
        var idx = 0;
        var list;
        if (len < 0 || isNaN(len)) {
          throw new RangeError("n must be a non-negative number");
        }
        list = new Array(len);
        while (idx < len) {
          list[idx] = fn(idx);
          idx += 1;
        }
        return list;
      });
      module.exports = times;
    }
  });

  // sdk/contracts/node_modules/ramda/src/repeat.js
  var require_repeat = __commonJS({
    "sdk/contracts/node_modules/ramda/src/repeat.js"(exports, module) {
      var _curry2 = require_curry2();
      var always = require_always();
      var times = require_times();
      var repeat = /* @__PURE__ */ _curry2(function repeat2(value, n) {
        return times(always(value), n);
      });
      module.exports = repeat;
    }
  });

  // sdk/contracts/node_modules/ramda/src/replace.js
  var require_replace = __commonJS({
    "sdk/contracts/node_modules/ramda/src/replace.js"(exports, module) {
      var _curry3 = require_curry3();
      var replace = /* @__PURE__ */ _curry3(function replace2(regex, replacement, str) {
        return str.replace(regex, replacement);
      });
      module.exports = replace;
    }
  });

  // sdk/contracts/node_modules/ramda/src/scan.js
  var require_scan = __commonJS({
    "sdk/contracts/node_modules/ramda/src/scan.js"(exports, module) {
      var _curry3 = require_curry3();
      var scan = /* @__PURE__ */ _curry3(function scan2(fn, acc, list) {
        var idx = 0;
        var len = list.length;
        var result = [acc];
        while (idx < len) {
          acc = fn(acc, list[idx]);
          result[idx + 1] = acc;
          idx += 1;
        }
        return result;
      });
      module.exports = scan;
    }
  });

  // sdk/contracts/node_modules/ramda/src/sequence.js
  var require_sequence = __commonJS({
    "sdk/contracts/node_modules/ramda/src/sequence.js"(exports, module) {
      var _curry2 = require_curry2();
      var ap = require_ap();
      var map = require_map2();
      var prepend = require_prepend();
      var reduceRight = require_reduceRight();
      var sequence = /* @__PURE__ */ _curry2(function sequence2(of, traversable) {
        return typeof traversable.sequence === "function" ? traversable.sequence(of) : reduceRight(function(x, acc) {
          return ap(map(prepend, x), acc);
        }, of([]), traversable);
      });
      module.exports = sequence;
    }
  });

  // sdk/contracts/node_modules/ramda/src/set.js
  var require_set = __commonJS({
    "sdk/contracts/node_modules/ramda/src/set.js"(exports, module) {
      var _curry3 = require_curry3();
      var always = require_always();
      var over = require_over();
      var set = /* @__PURE__ */ _curry3(function set2(lens, v, x) {
        return over(lens, always(v), x);
      });
      module.exports = set;
    }
  });

  // sdk/contracts/node_modules/ramda/src/sort.js
  var require_sort = __commonJS({
    "sdk/contracts/node_modules/ramda/src/sort.js"(exports, module) {
      var _curry2 = require_curry2();
      var sort = /* @__PURE__ */ _curry2(function sort2(comparator, list) {
        return Array.prototype.slice.call(list, 0).sort(comparator);
      });
      module.exports = sort;
    }
  });

  // sdk/contracts/node_modules/ramda/src/sortBy.js
  var require_sortBy = __commonJS({
    "sdk/contracts/node_modules/ramda/src/sortBy.js"(exports, module) {
      var _curry2 = require_curry2();
      var sortBy = /* @__PURE__ */ _curry2(function sortBy2(fn, list) {
        return Array.prototype.slice.call(list, 0).sort(function(a, b) {
          var aa = fn(a);
          var bb = fn(b);
          return aa < bb ? -1 : aa > bb ? 1 : 0;
        });
      });
      module.exports = sortBy;
    }
  });

  // sdk/contracts/node_modules/ramda/src/sortWith.js
  var require_sortWith = __commonJS({
    "sdk/contracts/node_modules/ramda/src/sortWith.js"(exports, module) {
      var _curry2 = require_curry2();
      var sortWith = /* @__PURE__ */ _curry2(function sortWith2(fns, list) {
        return Array.prototype.slice.call(list, 0).sort(function(a, b) {
          var result = 0;
          var i = 0;
          while (result === 0 && i < fns.length) {
            result = fns[i](a, b);
            i += 1;
          }
          return result;
        });
      });
      module.exports = sortWith;
    }
  });

  // sdk/contracts/node_modules/ramda/src/split.js
  var require_split = __commonJS({
    "sdk/contracts/node_modules/ramda/src/split.js"(exports, module) {
      var invoker = require_invoker();
      var split = /* @__PURE__ */ invoker(1, "split");
      module.exports = split;
    }
  });

  // sdk/contracts/node_modules/ramda/src/splitAt.js
  var require_splitAt = __commonJS({
    "sdk/contracts/node_modules/ramda/src/splitAt.js"(exports, module) {
      var _curry2 = require_curry2();
      var length = require_length();
      var slice = require_slice();
      var splitAt = /* @__PURE__ */ _curry2(function splitAt2(index, array) {
        return [slice(0, index, array), slice(index, length(array), array)];
      });
      module.exports = splitAt;
    }
  });

  // sdk/contracts/node_modules/ramda/src/splitEvery.js
  var require_splitEvery = __commonJS({
    "sdk/contracts/node_modules/ramda/src/splitEvery.js"(exports, module) {
      var _curry2 = require_curry2();
      var slice = require_slice();
      var splitEvery = /* @__PURE__ */ _curry2(function splitEvery2(n, list) {
        if (n <= 0) {
          throw new Error("First argument to splitEvery must be a positive integer");
        }
        var result = [];
        var idx = 0;
        while (idx < list.length) {
          result.push(slice(idx, idx += n, list));
        }
        return result;
      });
      module.exports = splitEvery;
    }
  });

  // sdk/contracts/node_modules/ramda/src/splitWhen.js
  var require_splitWhen = __commonJS({
    "sdk/contracts/node_modules/ramda/src/splitWhen.js"(exports, module) {
      var _curry2 = require_curry2();
      var splitWhen = /* @__PURE__ */ _curry2(function splitWhen2(pred, list) {
        var idx = 0;
        var len = list.length;
        var prefix = [];
        while (idx < len && !pred(list[idx])) {
          prefix.push(list[idx]);
          idx += 1;
        }
        return [prefix, Array.prototype.slice.call(list, idx)];
      });
      module.exports = splitWhen;
    }
  });

  // sdk/contracts/node_modules/ramda/src/splitWhenever.js
  var require_splitWhenever = __commonJS({
    "sdk/contracts/node_modules/ramda/src/splitWhenever.js"(exports, module) {
      var _curryN = require_curryN();
      var splitWhenever = /* @__PURE__ */ _curryN(2, [], function splitWhenever2(pred, list) {
        var acc = [];
        var curr = [];
        for (var i = 0; i < list.length; i = i + 1) {
          if (!pred(list[i])) {
            curr.push(list[i]);
          }
          if ((i < list.length - 1 && pred(list[i + 1]) || i === list.length - 1) && curr.length > 0) {
            acc.push(curr);
            curr = [];
          }
        }
        return acc;
      });
      module.exports = splitWhenever;
    }
  });

  // sdk/contracts/node_modules/ramda/src/startsWith.js
  var require_startsWith = __commonJS({
    "sdk/contracts/node_modules/ramda/src/startsWith.js"(exports, module) {
      var _curry2 = require_curry2();
      var equals = require_equals2();
      var take = require_take();
      var startsWith = /* @__PURE__ */ _curry2(function(prefix, list) {
        return equals(take(prefix.length, list), prefix);
      });
      module.exports = startsWith;
    }
  });

  // sdk/contracts/node_modules/ramda/src/subtract.js
  var require_subtract = __commonJS({
    "sdk/contracts/node_modules/ramda/src/subtract.js"(exports, module) {
      var _curry2 = require_curry2();
      var subtract = /* @__PURE__ */ _curry2(function subtract2(a, b) {
        return Number(a) - Number(b);
      });
      module.exports = subtract;
    }
  });

  // sdk/contracts/node_modules/ramda/src/symmetricDifference.js
  var require_symmetricDifference = __commonJS({
    "sdk/contracts/node_modules/ramda/src/symmetricDifference.js"(exports, module) {
      var _curry2 = require_curry2();
      var concat = require_concat2();
      var difference = require_difference();
      var symmetricDifference = /* @__PURE__ */ _curry2(function symmetricDifference2(list1, list2) {
        return concat(difference(list1, list2), difference(list2, list1));
      });
      module.exports = symmetricDifference;
    }
  });

  // sdk/contracts/node_modules/ramda/src/symmetricDifferenceWith.js
  var require_symmetricDifferenceWith = __commonJS({
    "sdk/contracts/node_modules/ramda/src/symmetricDifferenceWith.js"(exports, module) {
      var _curry3 = require_curry3();
      var concat = require_concat2();
      var differenceWith = require_differenceWith();
      var symmetricDifferenceWith = /* @__PURE__ */ _curry3(function symmetricDifferenceWith2(pred, list1, list2) {
        return concat(differenceWith(pred, list1, list2), differenceWith(pred, list2, list1));
      });
      module.exports = symmetricDifferenceWith;
    }
  });

  // sdk/contracts/node_modules/ramda/src/takeLastWhile.js
  var require_takeLastWhile = __commonJS({
    "sdk/contracts/node_modules/ramda/src/takeLastWhile.js"(exports, module) {
      var _curry2 = require_curry2();
      var slice = require_slice();
      var takeLastWhile = /* @__PURE__ */ _curry2(function takeLastWhile2(fn, xs) {
        var idx = xs.length - 1;
        while (idx >= 0 && fn(xs[idx])) {
          idx -= 1;
        }
        return slice(idx + 1, Infinity, xs);
      });
      module.exports = takeLastWhile;
    }
  });

  // sdk/contracts/node_modules/ramda/src/internal/_xtakeWhile.js
  var require_xtakeWhile = __commonJS({
    "sdk/contracts/node_modules/ramda/src/internal/_xtakeWhile.js"(exports, module) {
      var _curry2 = require_curry2();
      var _reduced = require_reduced();
      var _xfBase = require_xfBase();
      var XTakeWhile = /* @__PURE__ */ function() {
        function XTakeWhile2(f, xf) {
          this.xf = xf;
          this.f = f;
        }
        XTakeWhile2.prototype["@@transducer/init"] = _xfBase.init;
        XTakeWhile2.prototype["@@transducer/result"] = _xfBase.result;
        XTakeWhile2.prototype["@@transducer/step"] = function(result, input) {
          return this.f(input) ? this.xf["@@transducer/step"](result, input) : _reduced(result);
        };
        return XTakeWhile2;
      }();
      var _xtakeWhile = /* @__PURE__ */ _curry2(function _xtakeWhile2(f, xf) {
        return new XTakeWhile(f, xf);
      });
      module.exports = _xtakeWhile;
    }
  });

  // sdk/contracts/node_modules/ramda/src/takeWhile.js
  var require_takeWhile = __commonJS({
    "sdk/contracts/node_modules/ramda/src/takeWhile.js"(exports, module) {
      var _curry2 = require_curry2();
      var _dispatchable = require_dispatchable();
      var _xtakeWhile = require_xtakeWhile();
      var slice = require_slice();
      var takeWhile = /* @__PURE__ */ _curry2(
        /* @__PURE__ */ _dispatchable(["takeWhile"], _xtakeWhile, function takeWhile2(fn, xs) {
          var idx = 0;
          var len = xs.length;
          while (idx < len && fn(xs[idx])) {
            idx += 1;
          }
          return slice(0, idx, xs);
        })
      );
      module.exports = takeWhile;
    }
  });

  // sdk/contracts/node_modules/ramda/src/internal/_xtap.js
  var require_xtap = __commonJS({
    "sdk/contracts/node_modules/ramda/src/internal/_xtap.js"(exports, module) {
      var _curry2 = require_curry2();
      var _xfBase = require_xfBase();
      var XTap = /* @__PURE__ */ function() {
        function XTap2(f, xf) {
          this.xf = xf;
          this.f = f;
        }
        XTap2.prototype["@@transducer/init"] = _xfBase.init;
        XTap2.prototype["@@transducer/result"] = _xfBase.result;
        XTap2.prototype["@@transducer/step"] = function(result, input) {
          this.f(input);
          return this.xf["@@transducer/step"](result, input);
        };
        return XTap2;
      }();
      var _xtap = /* @__PURE__ */ _curry2(function _xtap2(f, xf) {
        return new XTap(f, xf);
      });
      module.exports = _xtap;
    }
  });

  // sdk/contracts/node_modules/ramda/src/tap.js
  var require_tap = __commonJS({
    "sdk/contracts/node_modules/ramda/src/tap.js"(exports, module) {
      var _curry2 = require_curry2();
      var _dispatchable = require_dispatchable();
      var _xtap = require_xtap();
      var tap = /* @__PURE__ */ _curry2(
        /* @__PURE__ */ _dispatchable([], _xtap, function tap2(fn, x) {
          fn(x);
          return x;
        })
      );
      module.exports = tap;
    }
  });

  // sdk/contracts/node_modules/ramda/src/internal/_isRegExp.js
  var require_isRegExp = __commonJS({
    "sdk/contracts/node_modules/ramda/src/internal/_isRegExp.js"(exports, module) {
      function _isRegExp(x) {
        return Object.prototype.toString.call(x) === "[object RegExp]";
      }
      module.exports = _isRegExp;
    }
  });

  // sdk/contracts/node_modules/ramda/src/test.js
  var require_test = __commonJS({
    "sdk/contracts/node_modules/ramda/src/test.js"(exports, module) {
      var _cloneRegExp = require_cloneRegExp();
      var _curry2 = require_curry2();
      var _isRegExp = require_isRegExp();
      var toString = require_toString2();
      var test = /* @__PURE__ */ _curry2(function test2(pattern, str) {
        if (!_isRegExp(pattern)) {
          throw new TypeError("\u2018test\u2019 requires a value of type RegExp as its first argument; received " + toString(pattern));
        }
        return _cloneRegExp(pattern).test(str);
      });
      module.exports = test;
    }
  });

  // sdk/contracts/node_modules/ramda/src/andThen.js
  var require_andThen = __commonJS({
    "sdk/contracts/node_modules/ramda/src/andThen.js"(exports, module) {
      var _curry2 = require_curry2();
      var _assertPromise = require_assertPromise();
      var andThen = /* @__PURE__ */ _curry2(function andThen2(f, p) {
        _assertPromise("andThen", p);
        return p.then(f);
      });
      module.exports = andThen;
    }
  });

  // sdk/contracts/node_modules/ramda/src/toLower.js
  var require_toLower = __commonJS({
    "sdk/contracts/node_modules/ramda/src/toLower.js"(exports, module) {
      var invoker = require_invoker();
      var toLower = /* @__PURE__ */ invoker(0, "toLowerCase");
      module.exports = toLower;
    }
  });

  // sdk/contracts/node_modules/ramda/src/toPairs.js
  var require_toPairs = __commonJS({
    "sdk/contracts/node_modules/ramda/src/toPairs.js"(exports, module) {
      var _curry1 = require_curry1();
      var _has = require_has();
      var toPairs = /* @__PURE__ */ _curry1(function toPairs2(obj) {
        var pairs = [];
        for (var prop in obj) {
          if (_has(prop, obj)) {
            pairs[pairs.length] = [prop, obj[prop]];
          }
        }
        return pairs;
      });
      module.exports = toPairs;
    }
  });

  // sdk/contracts/node_modules/ramda/src/toPairsIn.js
  var require_toPairsIn = __commonJS({
    "sdk/contracts/node_modules/ramda/src/toPairsIn.js"(exports, module) {
      var _curry1 = require_curry1();
      var toPairsIn = /* @__PURE__ */ _curry1(function toPairsIn2(obj) {
        var pairs = [];
        for (var prop in obj) {
          pairs[pairs.length] = [prop, obj[prop]];
        }
        return pairs;
      });
      module.exports = toPairsIn;
    }
  });

  // sdk/contracts/node_modules/ramda/src/toUpper.js
  var require_toUpper = __commonJS({
    "sdk/contracts/node_modules/ramda/src/toUpper.js"(exports, module) {
      var invoker = require_invoker();
      var toUpper = /* @__PURE__ */ invoker(0, "toUpperCase");
      module.exports = toUpper;
    }
  });

  // sdk/contracts/node_modules/ramda/src/transduce.js
  var require_transduce = __commonJS({
    "sdk/contracts/node_modules/ramda/src/transduce.js"(exports, module) {
      var _reduce = require_reduce();
      var _xwrap = require_xwrap();
      var curryN = require_curryN2();
      var transduce = /* @__PURE__ */ curryN(4, function transduce2(xf, fn, acc, list) {
        return _reduce(xf(typeof fn === "function" ? _xwrap(fn) : fn), acc, list);
      });
      module.exports = transduce;
    }
  });

  // sdk/contracts/node_modules/ramda/src/transpose.js
  var require_transpose = __commonJS({
    "sdk/contracts/node_modules/ramda/src/transpose.js"(exports, module) {
      var _curry1 = require_curry1();
      var transpose = /* @__PURE__ */ _curry1(function transpose2(outerlist) {
        var i = 0;
        var result = [];
        while (i < outerlist.length) {
          var innerlist = outerlist[i];
          var j = 0;
          while (j < innerlist.length) {
            if (typeof result[j] === "undefined") {
              result[j] = [];
            }
            result[j].push(innerlist[j]);
            j += 1;
          }
          i += 1;
        }
        return result;
      });
      module.exports = transpose;
    }
  });

  // sdk/contracts/node_modules/ramda/src/traverse.js
  var require_traverse = __commonJS({
    "sdk/contracts/node_modules/ramda/src/traverse.js"(exports, module) {
      var _curry3 = require_curry3();
      var map = require_map2();
      var sequence = require_sequence();
      var traverse = /* @__PURE__ */ _curry3(function traverse2(of, f, traversable) {
        return typeof traversable["fantasy-land/traverse"] === "function" ? traversable["fantasy-land/traverse"](f, of) : typeof traversable.traverse === "function" ? traversable.traverse(f, of) : sequence(of, map(f, traversable));
      });
      module.exports = traverse;
    }
  });

  // sdk/contracts/node_modules/ramda/src/trim.js
  var require_trim = __commonJS({
    "sdk/contracts/node_modules/ramda/src/trim.js"(exports, module) {
      var _curry1 = require_curry1();
      var ws = "	\n\v\f\r \xA0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF";
      var zeroWidth = "\u200B";
      var hasProtoTrim = typeof String.prototype.trim === "function";
      var trim = !hasProtoTrim || /* @__PURE__ */ ws.trim() || !/* @__PURE__ */ zeroWidth.trim() ? /* @__PURE__ */ _curry1(function trim2(str) {
        var beginRx = new RegExp("^[" + ws + "][" + ws + "]*");
        var endRx = new RegExp("[" + ws + "][" + ws + "]*$");
        return str.replace(beginRx, "").replace(endRx, "");
      }) : /* @__PURE__ */ _curry1(function trim2(str) {
        return str.trim();
      });
      module.exports = trim;
    }
  });

  // sdk/contracts/node_modules/ramda/src/tryCatch.js
  var require_tryCatch = __commonJS({
    "sdk/contracts/node_modules/ramda/src/tryCatch.js"(exports, module) {
      var _arity = require_arity();
      var _concat = require_concat();
      var _curry2 = require_curry2();
      var tryCatch = /* @__PURE__ */ _curry2(function _tryCatch(tryer, catcher) {
        return _arity(tryer.length, function() {
          try {
            return tryer.apply(this, arguments);
          } catch (e) {
            return catcher.apply(this, _concat([e], arguments));
          }
        });
      });
      module.exports = tryCatch;
    }
  });

  // sdk/contracts/node_modules/ramda/src/unapply.js
  var require_unapply = __commonJS({
    "sdk/contracts/node_modules/ramda/src/unapply.js"(exports, module) {
      var _curry1 = require_curry1();
      var unapply = /* @__PURE__ */ _curry1(function unapply2(fn) {
        return function() {
          return fn(Array.prototype.slice.call(arguments, 0));
        };
      });
      module.exports = unapply;
    }
  });

  // sdk/contracts/node_modules/ramda/src/unary.js
  var require_unary = __commonJS({
    "sdk/contracts/node_modules/ramda/src/unary.js"(exports, module) {
      var _curry1 = require_curry1();
      var nAry = require_nAry();
      var unary = /* @__PURE__ */ _curry1(function unary2(fn) {
        return nAry(1, fn);
      });
      module.exports = unary;
    }
  });

  // sdk/contracts/node_modules/ramda/src/uncurryN.js
  var require_uncurryN = __commonJS({
    "sdk/contracts/node_modules/ramda/src/uncurryN.js"(exports, module) {
      var _curry2 = require_curry2();
      var curryN = require_curryN2();
      var uncurryN = /* @__PURE__ */ _curry2(function uncurryN2(depth, fn) {
        return curryN(depth, function() {
          var currentDepth = 1;
          var value = fn;
          var idx = 0;
          var endIdx;
          while (currentDepth <= depth && typeof value === "function") {
            endIdx = currentDepth === depth ? arguments.length : idx + value.length;
            value = value.apply(this, Array.prototype.slice.call(arguments, idx, endIdx));
            currentDepth += 1;
            idx = endIdx;
          }
          return value;
        });
      });
      module.exports = uncurryN;
    }
  });

  // sdk/contracts/node_modules/ramda/src/unfold.js
  var require_unfold = __commonJS({
    "sdk/contracts/node_modules/ramda/src/unfold.js"(exports, module) {
      var _curry2 = require_curry2();
      var unfold = /* @__PURE__ */ _curry2(function unfold2(fn, seed) {
        var pair = fn(seed);
        var result = [];
        while (pair && pair.length) {
          result[result.length] = pair[0];
          pair = fn(pair[1]);
        }
        return result;
      });
      module.exports = unfold;
    }
  });

  // sdk/contracts/node_modules/ramda/src/union.js
  var require_union = __commonJS({
    "sdk/contracts/node_modules/ramda/src/union.js"(exports, module) {
      var _concat = require_concat();
      var _curry2 = require_curry2();
      var compose = require_compose();
      var uniq = require_uniq();
      var union = /* @__PURE__ */ _curry2(
        /* @__PURE__ */ compose(uniq, _concat)
      );
      module.exports = union;
    }
  });

  // sdk/contracts/node_modules/ramda/src/internal/_xuniqWith.js
  var require_xuniqWith = __commonJS({
    "sdk/contracts/node_modules/ramda/src/internal/_xuniqWith.js"(exports, module) {
      var _curry2 = require_curry2();
      var _includesWith = require_includesWith();
      var _xfBase = require_xfBase();
      var XUniqWith = /* @__PURE__ */ function() {
        function XUniqWith2(pred, xf) {
          this.xf = xf;
          this.pred = pred;
          this.items = [];
        }
        XUniqWith2.prototype["@@transducer/init"] = _xfBase.init;
        XUniqWith2.prototype["@@transducer/result"] = _xfBase.result;
        XUniqWith2.prototype["@@transducer/step"] = function(result, input) {
          if (_includesWith(this.pred, input, this.items)) {
            return result;
          } else {
            this.items.push(input);
            return this.xf["@@transducer/step"](result, input);
          }
        };
        return XUniqWith2;
      }();
      var _xuniqWith = /* @__PURE__ */ _curry2(function _xuniqWith2(pred, xf) {
        return new XUniqWith(pred, xf);
      });
      module.exports = _xuniqWith;
    }
  });

  // sdk/contracts/node_modules/ramda/src/uniqWith.js
  var require_uniqWith = __commonJS({
    "sdk/contracts/node_modules/ramda/src/uniqWith.js"(exports, module) {
      var _curry2 = require_curry2();
      var _dispatchable = require_dispatchable();
      var _includesWith = require_includesWith();
      var _xuniqWith = require_xuniqWith();
      var uniqWith = /* @__PURE__ */ _curry2(
        /* @__PURE__ */ _dispatchable([], _xuniqWith, function(pred, list) {
          var idx = 0;
          var len = list.length;
          var result = [];
          var item;
          while (idx < len) {
            item = list[idx];
            if (!_includesWith(pred, item, result)) {
              result[result.length] = item;
            }
            idx += 1;
          }
          return result;
        })
      );
      module.exports = uniqWith;
    }
  });

  // sdk/contracts/node_modules/ramda/src/unionWith.js
  var require_unionWith = __commonJS({
    "sdk/contracts/node_modules/ramda/src/unionWith.js"(exports, module) {
      var _concat = require_concat();
      var _curry3 = require_curry3();
      var uniqWith = require_uniqWith();
      var unionWith = /* @__PURE__ */ _curry3(function unionWith2(pred, list1, list2) {
        return uniqWith(pred, _concat(list1, list2));
      });
      module.exports = unionWith;
    }
  });

  // sdk/contracts/node_modules/ramda/src/unless.js
  var require_unless = __commonJS({
    "sdk/contracts/node_modules/ramda/src/unless.js"(exports, module) {
      var _curry3 = require_curry3();
      var unless = /* @__PURE__ */ _curry3(function unless2(pred, whenFalseFn, x) {
        return pred(x) ? x : whenFalseFn(x);
      });
      module.exports = unless;
    }
  });

  // sdk/contracts/node_modules/ramda/src/unnest.js
  var require_unnest = __commonJS({
    "sdk/contracts/node_modules/ramda/src/unnest.js"(exports, module) {
      var _identity = require_identity();
      var chain = require_chain();
      var unnest = /* @__PURE__ */ chain(_identity);
      module.exports = unnest;
    }
  });

  // sdk/contracts/node_modules/ramda/src/until.js
  var require_until = __commonJS({
    "sdk/contracts/node_modules/ramda/src/until.js"(exports, module) {
      var _curry3 = require_curry3();
      var until = /* @__PURE__ */ _curry3(function until2(pred, fn, init) {
        var val = init;
        while (!pred(val)) {
          val = fn(val);
        }
        return val;
      });
      module.exports = until;
    }
  });

  // sdk/contracts/node_modules/ramda/src/unwind.js
  var require_unwind = __commonJS({
    "sdk/contracts/node_modules/ramda/src/unwind.js"(exports, module) {
      var _curry2 = require_curry2();
      var _isArray = require_isArray();
      var _map = require_map();
      var _assoc = require_assoc();
      var unwind = /* @__PURE__ */ _curry2(function(key, object) {
        if (!(key in object && _isArray(object[key]))) {
          return [object];
        }
        return _map(function(item) {
          return _assoc(key, item, object);
        }, object[key]);
      });
      module.exports = unwind;
    }
  });

  // sdk/contracts/node_modules/ramda/src/valuesIn.js
  var require_valuesIn = __commonJS({
    "sdk/contracts/node_modules/ramda/src/valuesIn.js"(exports, module) {
      var _curry1 = require_curry1();
      var valuesIn = /* @__PURE__ */ _curry1(function valuesIn2(obj) {
        var prop;
        var vs = [];
        for (prop in obj) {
          vs[vs.length] = obj[prop];
        }
        return vs;
      });
      module.exports = valuesIn;
    }
  });

  // sdk/contracts/node_modules/ramda/src/view.js
  var require_view = __commonJS({
    "sdk/contracts/node_modules/ramda/src/view.js"(exports, module) {
      var _curry2 = require_curry2();
      var Const = function(x) {
        return {
          value: x,
          "fantasy-land/map": function() {
            return this;
          }
        };
      };
      var view = /* @__PURE__ */ _curry2(function view2(lens, x) {
        return lens(Const)(x).value;
      });
      module.exports = view;
    }
  });

  // sdk/contracts/node_modules/ramda/src/when.js
  var require_when = __commonJS({
    "sdk/contracts/node_modules/ramda/src/when.js"(exports, module) {
      var _curry3 = require_curry3();
      var when = /* @__PURE__ */ _curry3(function when2(pred, whenTrueFn, x) {
        return pred(x) ? whenTrueFn(x) : x;
      });
      module.exports = when;
    }
  });

  // sdk/contracts/node_modules/ramda/src/where.js
  var require_where = __commonJS({
    "sdk/contracts/node_modules/ramda/src/where.js"(exports, module) {
      var _curry2 = require_curry2();
      var _has = require_has();
      var where = /* @__PURE__ */ _curry2(function where2(spec, testObj) {
        for (var prop in spec) {
          if (_has(prop, spec) && !spec[prop](testObj[prop])) {
            return false;
          }
        }
        return true;
      });
      module.exports = where;
    }
  });

  // sdk/contracts/node_modules/ramda/src/whereAny.js
  var require_whereAny = __commonJS({
    "sdk/contracts/node_modules/ramda/src/whereAny.js"(exports, module) {
      var _curry2 = require_curry2();
      var _has = require_has();
      var whereAny = /* @__PURE__ */ _curry2(function whereAny2(spec, testObj) {
        for (var prop in spec) {
          if (_has(prop, spec) && spec[prop](testObj[prop])) {
            return true;
          }
        }
        return false;
      });
      module.exports = whereAny;
    }
  });

  // sdk/contracts/node_modules/ramda/src/whereEq.js
  var require_whereEq = __commonJS({
    "sdk/contracts/node_modules/ramda/src/whereEq.js"(exports, module) {
      var _curry2 = require_curry2();
      var equals = require_equals2();
      var map = require_map2();
      var where = require_where();
      var whereEq = /* @__PURE__ */ _curry2(function whereEq2(spec, testObj) {
        return where(map(equals, spec), testObj);
      });
      module.exports = whereEq;
    }
  });

  // sdk/contracts/node_modules/ramda/src/without.js
  var require_without = __commonJS({
    "sdk/contracts/node_modules/ramda/src/without.js"(exports, module) {
      var _includes = require_includes();
      var _curry2 = require_curry2();
      var flip = require_flip();
      var reject = require_reject();
      var without = /* @__PURE__ */ _curry2(function(xs, list) {
        return reject(flip(_includes)(xs), list);
      });
      module.exports = without;
    }
  });

  // sdk/contracts/node_modules/ramda/src/xor.js
  var require_xor = __commonJS({
    "sdk/contracts/node_modules/ramda/src/xor.js"(exports, module) {
      var _curry2 = require_curry2();
      var xor = /* @__PURE__ */ _curry2(function xor2(a, b) {
        return Boolean(!a ^ !b);
      });
      module.exports = xor;
    }
  });

  // sdk/contracts/node_modules/ramda/src/xprod.js
  var require_xprod = __commonJS({
    "sdk/contracts/node_modules/ramda/src/xprod.js"(exports, module) {
      var _curry2 = require_curry2();
      var xprod = /* @__PURE__ */ _curry2(function xprod2(a, b) {
        var idx = 0;
        var ilen = a.length;
        var j;
        var jlen = b.length;
        var result = [];
        while (idx < ilen) {
          j = 0;
          while (j < jlen) {
            result[result.length] = [a[idx], b[j]];
            j += 1;
          }
          idx += 1;
        }
        return result;
      });
      module.exports = xprod;
    }
  });

  // sdk/contracts/node_modules/ramda/src/zip.js
  var require_zip = __commonJS({
    "sdk/contracts/node_modules/ramda/src/zip.js"(exports, module) {
      var _curry2 = require_curry2();
      var zip = /* @__PURE__ */ _curry2(function zip2(a, b) {
        var rv = [];
        var idx = 0;
        var len = Math.min(a.length, b.length);
        while (idx < len) {
          rv[idx] = [a[idx], b[idx]];
          idx += 1;
        }
        return rv;
      });
      module.exports = zip;
    }
  });

  // sdk/contracts/node_modules/ramda/src/zipObj.js
  var require_zipObj = __commonJS({
    "sdk/contracts/node_modules/ramda/src/zipObj.js"(exports, module) {
      var _curry2 = require_curry2();
      var zipObj = /* @__PURE__ */ _curry2(function zipObj2(keys, values) {
        var idx = 0;
        var len = Math.min(keys.length, values.length);
        var out = {};
        while (idx < len) {
          out[keys[idx]] = values[idx];
          idx += 1;
        }
        return out;
      });
      module.exports = zipObj;
    }
  });

  // sdk/contracts/node_modules/ramda/src/zipWith.js
  var require_zipWith = __commonJS({
    "sdk/contracts/node_modules/ramda/src/zipWith.js"(exports, module) {
      var _curry3 = require_curry3();
      var zipWith = /* @__PURE__ */ _curry3(function zipWith2(fn, a, b) {
        var rv = [];
        var idx = 0;
        var len = Math.min(a.length, b.length);
        while (idx < len) {
          rv[idx] = fn(a[idx], b[idx]);
          idx += 1;
        }
        return rv;
      });
      module.exports = zipWith;
    }
  });

  // sdk/contracts/node_modules/ramda/src/thunkify.js
  var require_thunkify = __commonJS({
    "sdk/contracts/node_modules/ramda/src/thunkify.js"(exports, module) {
      var curryN = require_curryN2();
      var _curry1 = require_curry1();
      var thunkify = /* @__PURE__ */ _curry1(function thunkify2(fn) {
        return curryN(fn.length, function createThunk() {
          var fnArgs = arguments;
          return function invokeThunk() {
            return fn.apply(this, fnArgs);
          };
        });
      });
      module.exports = thunkify;
    }
  });

  // sdk/contracts/node_modules/ramda/src/index.js
  var require_src = __commonJS({
    "sdk/contracts/node_modules/ramda/src/index.js"(exports, module) {
      module.exports = {};
      module.exports.F = require_F();
      module.exports.T = require_T();
      module.exports.__ = require__();
      module.exports.add = require_add();
      module.exports.addIndex = require_addIndex();
      module.exports.adjust = require_adjust();
      module.exports.all = require_all();
      module.exports.allPass = require_allPass();
      module.exports.always = require_always();
      module.exports.and = require_and();
      module.exports.any = require_any();
      module.exports.anyPass = require_anyPass();
      module.exports.ap = require_ap();
      module.exports.aperture = require_aperture2();
      module.exports.append = require_append();
      module.exports.apply = require_apply();
      module.exports.applySpec = require_applySpec();
      module.exports.applyTo = require_applyTo();
      module.exports.ascend = require_ascend();
      module.exports.assoc = require_assoc2();
      module.exports.assocPath = require_assocPath();
      module.exports.binary = require_binary();
      module.exports.bind = require_bind();
      module.exports.both = require_both();
      module.exports.call = require_call();
      module.exports.chain = require_chain();
      module.exports.clamp = require_clamp();
      module.exports.clone = require_clone2();
      module.exports.collectBy = require_collectBy();
      module.exports.comparator = require_comparator();
      module.exports.complement = require_complement();
      module.exports.compose = require_compose();
      module.exports.composeWith = require_composeWith();
      module.exports.concat = require_concat2();
      module.exports.cond = require_cond();
      module.exports.construct = require_construct();
      module.exports.constructN = require_constructN();
      module.exports.converge = require_converge();
      module.exports.count = require_count();
      module.exports.countBy = require_countBy();
      module.exports.curry = require_curry();
      module.exports.curryN = require_curryN2();
      module.exports.dec = require_dec();
      module.exports.defaultTo = require_defaultTo();
      module.exports.descend = require_descend();
      module.exports.difference = require_difference();
      module.exports.differenceWith = require_differenceWith();
      module.exports.dissoc = require_dissoc2();
      module.exports.dissocPath = require_dissocPath();
      module.exports.divide = require_divide();
      module.exports.drop = require_drop();
      module.exports.dropLast = require_dropLast2();
      module.exports.dropLastWhile = require_dropLastWhile2();
      module.exports.dropRepeats = require_dropRepeats();
      module.exports.dropRepeatsWith = require_dropRepeatsWith();
      module.exports.dropWhile = require_dropWhile();
      module.exports.either = require_either();
      module.exports.empty = require_empty();
      module.exports.endsWith = require_endsWith();
      module.exports.eqBy = require_eqBy();
      module.exports.eqProps = require_eqProps();
      module.exports.equals = require_equals2();
      module.exports.evolve = require_evolve();
      module.exports.filter = require_filter2();
      module.exports.find = require_find();
      module.exports.findIndex = require_findIndex();
      module.exports.findLast = require_findLast();
      module.exports.findLastIndex = require_findLastIndex();
      module.exports.flatten = require_flatten();
      module.exports.flip = require_flip();
      module.exports.forEach = require_forEach();
      module.exports.forEachObjIndexed = require_forEachObjIndexed();
      module.exports.fromPairs = require_fromPairs();
      module.exports.groupBy = require_groupBy();
      module.exports.groupWith = require_groupWith();
      module.exports.gt = require_gt();
      module.exports.gte = require_gte();
      module.exports.has = require_has2();
      module.exports.hasIn = require_hasIn();
      module.exports.hasPath = require_hasPath();
      module.exports.head = require_head();
      module.exports.identical = require_identical();
      module.exports.identity = require_identity2();
      module.exports.ifElse = require_ifElse();
      module.exports.inc = require_inc();
      module.exports.includes = require_includes2();
      module.exports.indexBy = require_indexBy();
      module.exports.indexOf = require_indexOf2();
      module.exports.init = require_init();
      module.exports.innerJoin = require_innerJoin();
      module.exports.insert = require_insert();
      module.exports.insertAll = require_insertAll();
      module.exports.intersection = require_intersection();
      module.exports.intersperse = require_intersperse();
      module.exports.into = require_into();
      module.exports.invert = require_invert();
      module.exports.invertObj = require_invertObj();
      module.exports.invoker = require_invoker();
      module.exports.is = require_is();
      module.exports.isEmpty = require_isEmpty();
      module.exports.isNil = require_isNil();
      module.exports.join = require_join();
      module.exports.juxt = require_juxt();
      module.exports.keys = require_keys();
      module.exports.keysIn = require_keysIn();
      module.exports.last = require_last();
      module.exports.lastIndexOf = require_lastIndexOf();
      module.exports.length = require_length();
      module.exports.lens = require_lens();
      module.exports.lensIndex = require_lensIndex();
      module.exports.lensPath = require_lensPath();
      module.exports.lensProp = require_lensProp();
      module.exports.lift = require_lift();
      module.exports.liftN = require_liftN();
      module.exports.lt = require_lt();
      module.exports.lte = require_lte();
      module.exports.map = require_map2();
      module.exports.mapAccum = require_mapAccum();
      module.exports.mapAccumRight = require_mapAccumRight();
      module.exports.mapObjIndexed = require_mapObjIndexed();
      module.exports.match = require_match();
      module.exports.mathMod = require_mathMod();
      module.exports.max = require_max();
      module.exports.maxBy = require_maxBy();
      module.exports.mean = require_mean();
      module.exports.median = require_median();
      module.exports.memoizeWith = require_memoizeWith();
      module.exports.mergeAll = require_mergeAll();
      module.exports.mergeDeepLeft = require_mergeDeepLeft();
      module.exports.mergeDeepRight = require_mergeDeepRight();
      module.exports.mergeDeepWith = require_mergeDeepWith();
      module.exports.mergeDeepWithKey = require_mergeDeepWithKey();
      module.exports.mergeLeft = require_mergeLeft();
      module.exports.mergeRight = require_mergeRight();
      module.exports.mergeWith = require_mergeWith();
      module.exports.mergeWithKey = require_mergeWithKey();
      module.exports.min = require_min();
      module.exports.minBy = require_minBy();
      module.exports.modify = require_modify2();
      module.exports.modifyPath = require_modifyPath();
      module.exports.modulo = require_modulo();
      module.exports.move = require_move();
      module.exports.multiply = require_multiply();
      module.exports.nAry = require_nAry();
      module.exports.partialObject = require_partialObject();
      module.exports.negate = require_negate();
      module.exports.none = require_none();
      module.exports.not = require_not();
      module.exports.nth = require_nth();
      module.exports.nthArg = require_nthArg();
      module.exports.o = require_o();
      module.exports.objOf = require_objOf();
      module.exports.of = require_of2();
      module.exports.omit = require_omit();
      module.exports.on = require_on();
      module.exports.once = require_once();
      module.exports.or = require_or();
      module.exports.otherwise = require_otherwise();
      module.exports.over = require_over();
      module.exports.pair = require_pair();
      module.exports.partial = require_partial();
      module.exports.partialRight = require_partialRight();
      module.exports.partition = require_partition();
      module.exports.path = require_path();
      module.exports.paths = require_paths();
      module.exports.pathEq = require_pathEq();
      module.exports.pathOr = require_pathOr();
      module.exports.pathSatisfies = require_pathSatisfies();
      module.exports.pick = require_pick();
      module.exports.pickAll = require_pickAll();
      module.exports.pickBy = require_pickBy();
      module.exports.pipe = require_pipe2();
      module.exports.pipeWith = require_pipeWith();
      module.exports.pluck = require_pluck();
      module.exports.prepend = require_prepend();
      module.exports.product = require_product();
      module.exports.project = require_project();
      module.exports.promap = require_promap2();
      module.exports.prop = require_prop();
      module.exports.propEq = require_propEq();
      module.exports.propIs = require_propIs();
      module.exports.propOr = require_propOr();
      module.exports.propSatisfies = require_propSatisfies();
      module.exports.props = require_props();
      module.exports.range = require_range();
      module.exports.reduce = require_reduce2();
      module.exports.reduceBy = require_reduceBy();
      module.exports.reduceRight = require_reduceRight();
      module.exports.reduceWhile = require_reduceWhile();
      module.exports.reduced = require_reduced2();
      module.exports.reject = require_reject();
      module.exports.remove = require_remove();
      module.exports.repeat = require_repeat();
      module.exports.replace = require_replace();
      module.exports.reverse = require_reverse();
      module.exports.scan = require_scan();
      module.exports.sequence = require_sequence();
      module.exports.set = require_set();
      module.exports.slice = require_slice();
      module.exports.sort = require_sort();
      module.exports.sortBy = require_sortBy();
      module.exports.sortWith = require_sortWith();
      module.exports.split = require_split();
      module.exports.splitAt = require_splitAt();
      module.exports.splitEvery = require_splitEvery();
      module.exports.splitWhen = require_splitWhen();
      module.exports.splitWhenever = require_splitWhenever();
      module.exports.startsWith = require_startsWith();
      module.exports.subtract = require_subtract();
      module.exports.sum = require_sum();
      module.exports.symmetricDifference = require_symmetricDifference();
      module.exports.symmetricDifferenceWith = require_symmetricDifferenceWith();
      module.exports.tail = require_tail();
      module.exports.take = require_take();
      module.exports.takeLast = require_takeLast();
      module.exports.takeLastWhile = require_takeLastWhile();
      module.exports.takeWhile = require_takeWhile();
      module.exports.tap = require_tap();
      module.exports.test = require_test();
      module.exports.andThen = require_andThen();
      module.exports.times = require_times();
      module.exports.toLower = require_toLower();
      module.exports.toPairs = require_toPairs();
      module.exports.toPairsIn = require_toPairsIn();
      module.exports.toString = require_toString2();
      module.exports.toUpper = require_toUpper();
      module.exports.transduce = require_transduce();
      module.exports.transpose = require_transpose();
      module.exports.traverse = require_traverse();
      module.exports.trim = require_trim();
      module.exports.tryCatch = require_tryCatch();
      module.exports.type = require_type();
      module.exports.unapply = require_unapply();
      module.exports.unary = require_unary();
      module.exports.uncurryN = require_uncurryN();
      module.exports.unfold = require_unfold();
      module.exports.union = require_union();
      module.exports.unionWith = require_unionWith();
      module.exports.uniq = require_uniq();
      module.exports.uniqBy = require_uniqBy();
      module.exports.uniqWith = require_uniqWith();
      module.exports.unless = require_unless();
      module.exports.unnest = require_unnest();
      module.exports.until = require_until();
      module.exports.unwind = require_unwind();
      module.exports.update = require_update();
      module.exports.useWith = require_useWith();
      module.exports.values = require_values();
      module.exports.valuesIn = require_valuesIn();
      module.exports.view = require_view();
      module.exports.when = require_when();
      module.exports.where = require_where();
      module.exports.whereAny = require_whereAny();
      module.exports.whereEq = require_whereEq();
      module.exports.without = require_without();
      module.exports.xor = require_xor();
      module.exports.xprod = require_xprod();
      module.exports.zip = require_zip();
      module.exports.zipObj = require_zipObj();
      module.exports.zipWith = require_zipWith();
      module.exports.thunkify = require_thunkify();
    }
  });

  // sdk/contracts/weavedb-bpt/actions/read/getCrons.js
  var require_getCrons = __commonJS({
    "sdk/contracts/weavedb-bpt/actions/read/getCrons.js"(exports, module) {
      var { isNil } = require_src();
      var getCrons = async (state, action) => {
        if (isNil(state.crons)) {
          state.crons = { lastExecuted: Math.round(Date.now() / 1e3), crons: {} };
        }
        return {
          result: state.crons
        };
      };
      module.exports = { getCrons };
    }
  });

  // sdk/contracts/weavedb-bpt/actions/read/getAlgorithms.js
  var require_getAlgorithms = __commonJS({
    "sdk/contracts/weavedb-bpt/actions/read/getAlgorithms.js"(exports, module) {
      var { isNil } = require_src();
      var getAlgorithms = async (state, action) => {
        if (isNil(state.auth.algorithms)) {
          state.auth.algorithms = ["secp256k1", "ed25519", "rsa256", "poseidon"];
        }
        return { result: state.auth.algorithms };
      };
      module.exports = { getAlgorithms };
    }
  });

  // sdk/contracts/weavedb-bpt/actions/read/getLinkedContract.js
  var require_getLinkedContract = __commonJS({
    "sdk/contracts/weavedb-bpt/actions/read/getLinkedContract.js"(exports, module) {
      var getLinkedContract = async (state, action) => {
        const contracts = state.contracts || {};
        return { result: contracts[action.input.query[0]] || null };
      };
      module.exports = { getLinkedContract };
    }
  });

  // sdk/contracts/weavedb-bpt/actions/read/getOwner.js
  var require_getOwner = __commonJS({
    "sdk/contracts/weavedb-bpt/actions/read/getOwner.js"(exports, module) {
      var { is, of } = require_src();
      var getOwner = async (state, action) => {
        let owner = state.owner || [];
        if (is(String)(owner))
          owner = of(owner);
        return { result: owner };
      };
      module.exports = { getOwner };
    }
  });

  // sdk/contracts/weavedb-bpt/actions/read/getRelayerJob.js
  var require_getRelayerJob = __commonJS({
    "sdk/contracts/weavedb-bpt/actions/read/getRelayerJob.js"(exports, module) {
      var getRelayerJob = async (state, action) => {
        const jobs = state.relayers || {};
        return { result: jobs[action.input.query[0]] || null };
      };
      module.exports = { getRelayerJob };
    }
  });

  // sdk/contracts/weavedb-bpt/actions/read/listRelayerJobs.js
  var require_listRelayerJobs = __commonJS({
    "sdk/contracts/weavedb-bpt/actions/read/listRelayerJobs.js"(exports, module) {
      var { keys } = require_src();
      var listRelayerJobs = async (state, action) => {
        return { result: keys(state.relayers || {}) };
      };
      module.exports = { listRelayerJobs };
    }
  });

  // sdk/contracts/node_modules/fpjson-lang/dist/cjs/index.js
  var require_cjs = __commonJS({
    "sdk/contracts/node_modules/fpjson-lang/dist/cjs/index.js"(exports, module) {
      var m = Object.create;
      var u = Object.defineProperty;
      var v = Object.getOwnPropertyDescriptor;
      var A = Object.getOwnPropertyNames;
      var j = Object.getPrototypeOf;
      var $ = Object.prototype.hasOwnProperty;
      var p = (i, s) => {
        for (var R in s)
          u(i, R, { get: s[R], enumerable: true });
      };
      var b = (i, s, R, o) => {
        if (s && typeof s == "object" || typeof s == "function")
          for (let f of A(s))
            !$.call(i, f) && f !== R && u(i, f, { get: () => s[f], enumerable: !(o = v(s, f)) || o.enumerable });
        return i;
      };
      var O = (i, s, R) => (R = i != null ? m(j(i)) : {}, b(s || !i || !i.__esModule ? u(R, "default", { value: i, enumerable: true }) : R, i));
      var S = (i) => b(u({}, "__esModule", { value: true }), i);
      var x = {};
      p(x, { default: () => w });
      module.exports = S(x);
      var e = O(require_src(), 1);
      var N = { Object, Array, String, Number, Boolean };
      var g = (i) => typeof i == "function";
      var c = (i, s = {}) => {
        if (e.isNil(i))
          return i;
        let R = e.curry((t) => {
          if (e.is(Array, t)) {
            let r = [];
            for (let n of t)
              r.push(R(n));
            return r;
          } else if (e.is(Object, t)) {
            let r = {};
            for (let n in t)
              r[n] = R(t[n]);
            return r;
          } else
            return e.is(String, t) ? t[0] === "%" ? e.tail(t) : (/^\$/.test(t) && (t = o(e.tail(t), true)), e.path(t.split("."))(s)) : t;
        }), o = e.curry((t, r) => R(t)), f = e.curry((t, r) => {
          let n = s;
          /^\$/.test(t) && (t = o(e.tail(t), true));
          let _2 = t.split(".");
          for (let y of e.init(_2))
            e.isNil(n[y]) && (n[y] = {}), n = n[y];
          return n[e.last(_2)] = r, r;
        }), l = null;
        if (g(i[0])) {
          let t = e.tail(i);
          l = i[0](...t);
        } else
          e.is(Array)(i) && i.length === 1 && i[0] === "__" ? l = e.__ : i[0] === "typ" ? l = N[i[1]] : i[0] === "reg" ? l = new RegExp(...e.tail(i)) : e.is(Array)(i) && (e.includes(i[0])(["let", "var", "$"]) || g(e[i[0]])) ? (l = e.compose(e.ifElse(e.o(e.gt(e.__, 0), e.length), e.apply(i[0] === "$" ? R : i[0] === "var" ? o : i[0] === "let" ? f : e[i[0]]), e.always(e[i[0]])), e.map((t) => c(t, s)), e.tail)(i), l = typeof l > "u" ? [] : l) : e.is(Object)(i) && e.is(String)(i.var) ? l = e.path(i.var.split("."))(s) : e.is(Array)(i) || e.is(Object)(i) ? l = e.map((t) => c(t, s))(i) : l = i;
        let a = null;
        return e.is(Array)(l) && e.is(String)(l[0]) && l[0] === "[]" ? a = e.tail(l) : a = g(l?.[0]) ? c(l, s) : l, a;
      };
      var w = c;
    }
  });

  // sdk/contracts/weavedb-bpt/lib/md5.js
  var require_md5 = __commonJS({
    "sdk/contracts/weavedb-bpt/lib/md5.js"(exports, module) {
      var md5 = function(e) {
        function h(a2, b2) {
          var c2, d2, e2, f2, g;
          e2 = a2 & 2147483648;
          f2 = b2 & 2147483648;
          c2 = a2 & 1073741824;
          d2 = b2 & 1073741824;
          g = (a2 & 1073741823) + (b2 & 1073741823);
          return c2 & d2 ? g ^ 2147483648 ^ e2 ^ f2 : c2 | d2 ? g & 1073741824 ? g ^ 3221225472 ^ e2 ^ f2 : g ^ 1073741824 ^ e2 ^ f2 : g ^ e2 ^ f2;
        }
        function k(a2, b2, c2, d2, e2, f2, g) {
          a2 = h(a2, h(h(b2 & c2 | ~b2 & d2, e2), g));
          return h(a2 << f2 | a2 >>> 32 - f2, b2);
        }
        function l(a2, b2, c2, d2, e2, f2, g) {
          a2 = h(a2, h(h(b2 & d2 | c2 & ~d2, e2), g));
          return h(a2 << f2 | a2 >>> 32 - f2, b2);
        }
        function m(a2, b2, d2, c2, e2, f2, g) {
          a2 = h(a2, h(h(b2 ^ d2 ^ c2, e2), g));
          return h(a2 << f2 | a2 >>> 32 - f2, b2);
        }
        function n(a2, b2, d2, c2, e2, f2, g) {
          a2 = h(a2, h(h(d2 ^ (b2 | ~c2), e2), g));
          return h(a2 << f2 | a2 >>> 32 - f2, b2);
        }
        function p(a2) {
          var b2 = "", d2 = "", c2;
          for (c2 = 0; 3 >= c2; c2++)
            d2 = a2 >>> 8 * c2 & 255, d2 = "0" + d2.toString(16), b2 += d2.substr(d2.length - 2, 2);
          return b2;
        }
        var f = [], q, r, s, t, a, b, c, d;
        e = function(a2) {
          a2 = a2.replace(/\r\n/g, "\n");
          for (var b2 = "", d2 = 0; d2 < a2.length; d2++) {
            var c2 = a2.charCodeAt(d2);
            128 > c2 ? b2 += String.fromCharCode(c2) : (127 < c2 && 2048 > c2 ? b2 += String.fromCharCode(c2 >> 6 | 192) : (b2 += String.fromCharCode(c2 >> 12 | 224), b2 += String.fromCharCode(c2 >> 6 & 63 | 128)), b2 += String.fromCharCode(c2 & 63 | 128));
          }
          return b2;
        }(e);
        f = function(b2) {
          var a2, c2 = b2.length;
          a2 = c2 + 8;
          for (var d2 = 16 * ((a2 - a2 % 64) / 64 + 1), e2 = Array(d2 - 1), f2 = 0, g = 0; g < c2; )
            a2 = (g - g % 4) / 4, f2 = g % 4 * 8, e2[a2] |= b2.charCodeAt(g) << f2, g++;
          a2 = (g - g % 4) / 4;
          e2[a2] |= 128 << g % 4 * 8;
          e2[d2 - 2] = c2 << 3;
          e2[d2 - 1] = c2 >>> 29;
          return e2;
        }(e);
        a = 1732584193;
        b = 4023233417;
        c = 2562383102;
        d = 271733878;
        for (e = 0; e < f.length; e += 16)
          q = a, r = b, s = c, t = d, a = k(a, b, c, d, f[e + 0], 7, 3614090360), d = k(d, a, b, c, f[e + 1], 12, 3905402710), c = k(c, d, a, b, f[e + 2], 17, 606105819), b = k(b, c, d, a, f[e + 3], 22, 3250441966), a = k(a, b, c, d, f[e + 4], 7, 4118548399), d = k(d, a, b, c, f[e + 5], 12, 1200080426), c = k(c, d, a, b, f[e + 6], 17, 2821735955), b = k(b, c, d, a, f[e + 7], 22, 4249261313), a = k(a, b, c, d, f[e + 8], 7, 1770035416), d = k(d, a, b, c, f[e + 9], 12, 2336552879), c = k(c, d, a, b, f[e + 10], 17, 4294925233), b = k(b, c, d, a, f[e + 11], 22, 2304563134), a = k(a, b, c, d, f[e + 12], 7, 1804603682), d = k(d, a, b, c, f[e + 13], 12, 4254626195), c = k(c, d, a, b, f[e + 14], 17, 2792965006), b = k(b, c, d, a, f[e + 15], 22, 1236535329), a = l(a, b, c, d, f[e + 1], 5, 4129170786), d = l(d, a, b, c, f[e + 6], 9, 3225465664), c = l(c, d, a, b, f[e + 11], 14, 643717713), b = l(b, c, d, a, f[e + 0], 20, 3921069994), a = l(a, b, c, d, f[e + 5], 5, 3593408605), d = l(d, a, b, c, f[e + 10], 9, 38016083), c = l(c, d, a, b, f[e + 15], 14, 3634488961), b = l(b, c, d, a, f[e + 4], 20, 3889429448), a = l(a, b, c, d, f[e + 9], 5, 568446438), d = l(d, a, b, c, f[e + 14], 9, 3275163606), c = l(c, d, a, b, f[e + 3], 14, 4107603335), b = l(b, c, d, a, f[e + 8], 20, 1163531501), a = l(a, b, c, d, f[e + 13], 5, 2850285829), d = l(d, a, b, c, f[e + 2], 9, 4243563512), c = l(c, d, a, b, f[e + 7], 14, 1735328473), b = l(b, c, d, a, f[e + 12], 20, 2368359562), a = m(a, b, c, d, f[e + 5], 4, 4294588738), d = m(d, a, b, c, f[e + 8], 11, 2272392833), c = m(c, d, a, b, f[e + 11], 16, 1839030562), b = m(b, c, d, a, f[e + 14], 23, 4259657740), a = m(a, b, c, d, f[e + 1], 4, 2763975236), d = m(d, a, b, c, f[e + 4], 11, 1272893353), c = m(c, d, a, b, f[e + 7], 16, 4139469664), b = m(b, c, d, a, f[e + 10], 23, 3200236656), a = m(a, b, c, d, f[e + 13], 4, 681279174), d = m(d, a, b, c, f[e + 0], 11, 3936430074), c = m(c, d, a, b, f[e + 3], 16, 3572445317), b = m(b, c, d, a, f[e + 6], 23, 76029189), a = m(a, b, c, d, f[e + 9], 4, 3654602809), d = m(d, a, b, c, f[e + 12], 11, 3873151461), c = m(c, d, a, b, f[e + 15], 16, 530742520), b = m(b, c, d, a, f[e + 2], 23, 3299628645), a = n(a, b, c, d, f[e + 0], 6, 4096336452), d = n(d, a, b, c, f[e + 7], 10, 1126891415), c = n(c, d, a, b, f[e + 14], 15, 2878612391), b = n(b, c, d, a, f[e + 5], 21, 4237533241), a = n(a, b, c, d, f[e + 12], 6, 1700485571), d = n(d, a, b, c, f[e + 3], 10, 2399980690), c = n(c, d, a, b, f[e + 10], 15, 4293915773), b = n(b, c, d, a, f[e + 1], 21, 2240044497), a = n(a, b, c, d, f[e + 8], 6, 1873313359), d = n(d, a, b, c, f[e + 15], 10, 4264355552), c = n(c, d, a, b, f[e + 6], 15, 2734768916), b = n(b, c, d, a, f[e + 13], 21, 1309151649), a = n(a, b, c, d, f[e + 4], 6, 4149444226), d = n(d, a, b, c, f[e + 11], 10, 3174756917), c = n(c, d, a, b, f[e + 2], 15, 718787259), b = n(b, c, d, a, f[e + 9], 21, 3951481745), a = h(a, q), b = h(b, r), c = h(c, s), d = h(d, t);
        return (p(a) + p(b) + p(c) + p(d)).toLowerCase();
      };
      module.exports = md5;
    }
  });

  // sdk/contracts/weavedb-bpt/lib/pure.js
  var require_pure = __commonJS({
    "sdk/contracts/weavedb-bpt/lib/pure.js"(exports, module) {
      var {
        complement,
        concat,
        without,
        split,
        uniq,
        path: _path,
        map,
        isNil,
        keys,
        difference,
        intersection,
        is,
        tail
      } = require_src();
      var fpjson = require_cjs();
      fpjson = fpjson.default || fpjson;
      var isValidID = (str) => /^[^\/]+$/.test(str) && !/^__.*__+$/.test(str) && !/^\.{1,2}$/.test(str);
      var isValidLen = (str, len) => len ? len >= str.length : Buffer.byteLength(str, "utf8") <= 1500;
      var isReserved = (str) => str === "__tokens__" || str === "__bridge__";
      var isValidDocName = (str, state) => {
        return isValidID(str) && isValidLen(str, state.max_doc_id_length);
      };
      var isValidName = (str, state) => {
        return isReserved(str) || isValidID(str) && isValidLen(str, state.max_collection_id_length);
      };
      var clone = (state) => JSON.parse(JSON.stringify(state));
      var replace$ = (arrs) => {
        if (typeof arrs === "string") {
          return arrs.slice(0, 2) === "l$" ? ["toLower", { var: arrs.slice(2) }] : arrs.slice(0, 2) === "u$" ? ["toUpper", { var: arrs.slice(2) }] : arrs.slice(0, 2) === "o$" ? [["complement", ["isNil"]], { var: arrs.slice(2) }] : arrs.slice(0, 2) === "x$" ? ["isNil", { var: arrs.slice(2) }] : arrs.slice(0, 2) === "!$" ? ["not", { var: arrs.slice(2) }] : arrs.slice(0, 2) === "$$" ? tail(arrs) : arrs[0] === "$" ? { var: tail(arrs) } : arrs;
        } else if (is(Array, arrs)) {
          if (arrs[0] === "toBatchAll") {
            return [
              [
                "pipe",
                ["var", "batch"],
                ["concat", ["__"], arrs[1]],
                ["let", "batch"]
              ]
            ];
          } else if (arrs[0] === "toBatch") {
            return [
              "pipe",
              ["var", "batch"],
              ["append", ["[]", ...arrs[1]]],
              ["let", "batch"]
            ];
          } else {
            for (const [i, v] of arrs.entries())
              arrs[i] = replace$(v);
          }
        } else if (typeof arrs === "object") {
          for (let k in arrs)
            arrs[k] = replace$(arrs[k]);
        }
        return arrs;
      };
      function bigIntFromBytes(byteArr) {
        let hexString = "";
        for (const byte of byteArr) {
          hexString += byte.toString(16).padStart(2, "0");
        }
        return BigInt("0x" + hexString);
      }
      var setElm = (k, d, rule_data) => {
        let obj = rule_data;
        let elm_path = k.split("#")[0].split(".");
        for (const [i, field] of elm_path.entries()) {
          if (i === elm_path.length - 1) {
            if (is(Object)(d) && d.__op === "data") {
              obj[field] = rule_data.request.auth.extra[d.key] ?? null;
            } else if (is(Object)(d) && d.__op === "arrayUnion") {
              if (complement(is)(Array, d.arr))
                throw Error("field is not array");
              if (complement(is)(Array, obj[field]))
                obj[field] = [];
              obj[field] = concat(obj[field], d.arr);
            } else if (is(Object)(d) && d.__op === "arrayRemove") {
              if (complement(is)(Array, d.arr))
                throw Error("field is not array");
              if (complement(is)(Array, obj[field]))
                obj[field] = [];
              obj[field] = without(d.arr, obj[field]);
            } else if (is(Object)(d) && d.__op === "inc") {
              if (isNaN(d.n))
                throw Error("field is not number");
              if (isNil(obj[field]))
                obj[field] = 0;
              obj[field] += d.n;
            } else if (is(Object)(d) && d.__op === "del") {
              delete obj[field];
            } else if (is(Object)(d) && d.__op === "ts") {
              obj[field] = rule_data.ts;
            } else if (is(Object)(d) && d.__op === "ms") {
              obj[field] = rule_data.ms;
            } else if (is(Object)(d) && d.__op === "signer") {
              obj[field] = rule_data.signer;
            } else {
              obj[field] = d;
            }
            break;
          } else if (isNil(obj[field]))
            obj[field] = {};
          obj = obj[field];
        }
        return obj;
      };
      var parse = (query, vars) => {
        if (is(Array, query)) {
          query = map((v) => is(Object, v) ? parse(v, vars) : v)(query);
        } else if (is(Object, query)) {
          if (is(String, query.var)) {
            return _path(query.var.split("."))(vars);
          } else {
            query = map((v) => parse(v, vars))(query);
          }
        }
        return query;
      };
      async function fpj(arr = [], obj = {}, fn = {}) {
        const exec = (v) => fpjson(replace$(clone(v)), obj);
        const cmd = async (arr2, ctx = {}) => {
          let val = null;
          let isBreak = false;
          if (!is(Array, arr2)) {
            val = exec(arr2);
          } else if (/^=\$/.test(arr2[0])) {
            ;
            [val, isBreak] = await cmd(arr2[1]);
            if (!isBreak)
              setElm(arr2[0].replace(/^=\$/, ""), val, obj);
          } else if (/^.+\(\)$/.test(arr2[0])) {
            if (!isNil(fn[arr2[0].slice(0, -2)])) {
              ;
              [val, isBreak] = await fn[arr2[0].slice(0, -2)](
                parse(replace$(arr2[1]), obj),
                obj,
                setElm
              );
            } else {
              throw Error(`unknown function ${arr2[0]}`);
            }
          } else if (arr2[0] === "break") {
            isBreak = true;
          } else if (arr2[0] === "[]") {
            for (let v of tail(arr2))
              await cmd(v);
          } else if (arr2[0] === "if") {
            if (exec(arr2[1])) {
              if (typeof arr2[2] === "undefined") {
                throw Error("wrong fpjson");
              } else {
                ;
                [val, isBreak] = await cmd(arr2[2]);
              }
            } else {
              ;
              [val, isBreak] = await cmd(arr2.slice(3), { if: true });
            }
          } else if (arr2[0] === "else") {
            if (ctx.if) {
              ;
              [val, isBreak] = await cmd(arr2[1]);
            } else {
              throw Error("wrong fpjson");
            }
          } else if (arr2[0] === "elif") {
            if (ctx.if) {
              if (exec(arr2[1])) {
                ;
                [val, isBreak] = await cmd(arr2[2]);
              } else {
                ;
                [val, isBreak] = await cmd(arr2.slice(3), { if: true });
              }
            } else {
              throw Error("wrong fpjson");
            }
          } else {
            val = exec(arr2);
          }
          return [val, isBreak];
        };
        for (const v of arr) {
          const [val, isBreak] = await cmd(v);
          if (isBreak)
            break;
        }
      }
      var ac_funcs = {
        split: (v, obj, set) => {
          let val = null;
          let isBreak = false;
          const elms = split(v[0], fpjson(v[1], obj));
          if (is(Array, v[2])) {
            for (const [i2, v2] of elms.entries()) {
              if (!isNil(v[2][i2]) && typeof v[2][i2] === "string" && /^=\$.+$/.test(v[2][i2])) {
                set(v[2][i2].replace(/^=\$/, ""), v2, obj);
              }
            }
          }
          return [val, isBreak];
        },
        mod: (v, obj, set) => {
          let val = null;
          let isBreak = false;
          for (const k3 in v) {
            set(`new.${k3}`, fpjson(v[k3], obj), obj);
          }
          return [val, isBreak];
        },
        fields: (v, obj, set) => {
          let val = null;
          let isBreak = false;
          let _keys = keys(obj.req);
          let fields = [];
          let required = [];
          for (let v2 of v) {
            const field = v2.replace(/^\*/, "");
            fields.push(field);
            if (/^\*/.test(v2))
              required.push(field);
          }
          if (difference(_keys, fields).length > 0 || difference(required, _keys).length > 0) {
            obj.request.allow = false;
            isBreak = true;
          }
          return [val, isBreak];
        },
        required_fields: (v, obj, set) => {
          let val = null;
          let isBreak = false;
          let _keys = keys(obj.req);
          let fields = v;
          if (difference(fields, _keys).length > 0) {
            obj.request.allow = false;
            isBreak = true;
          }
          return [val, isBreak];
        },
        disallowed_fields: (v, obj, set) => {
          let val = null;
          let isBreak = false;
          let _keys = keys(obj.req);
          let fields = v;
          if (intersection(_keys, fields).length > 0) {
            obj.request.allow = false;
            isBreak = true;
          }
          return [val, isBreak];
        },
        denyifall: (v, obj, set) => {
          let val = null;
          let isBreak = false;
          if (fpjson(["all", ["equals", true], v], obj)) {
            obj.request.allow = false;
            isBreak = true;
          }
          return [val, isBreak];
        },
        denyifany: (v, obj, set) => {
          let val = null;
          let isBreak = false;
          if (fpjson(["any", ["equals", true], v], obj)) {
            obj.request.allow = false;
            isBreak = true;
          }
          return [val, isBreak];
        },
        allowifall: (v, obj, set) => {
          let val = null;
          let isBreak = false;
          if (fpjson(["all", ["equals", true], v], obj)) {
            obj.request.allow = true;
            isBreak = true;
          }
          return [val, isBreak];
        },
        allow: (v, obj, set) => {
          let val = null;
          let isBreak = false;
          obj.request.allow = true;
          isBreak = true;
          return [val, isBreak];
        },
        deny: (v, obj, set) => {
          let val = null;
          let isBreak = false;
          obj.request.allow = false;
          isBreak = true;
          return [val, isBreak];
        },
        allowifany: (v, obj, set) => {
          let val = null;
          let isBreak = false;
          if (fpjson(["any", ["equals", true], v], obj)) {
            obj.request.allow = true;
            isBreak = true;
          }
          return [val, isBreak];
        },
        denyif: (v, obj, set) => {
          let val = null;
          let isBreak = false;
          if (fpjson(v, obj)) {
            obj.request.allow = false;
            isBreak = true;
          }
          return [val, isBreak];
        },
        allowif: (v, obj, set) => {
          let val = null;
          let isBreak = false;
          if (fpjson(v, obj)) {
            obj.request.allow = true;
            isBreak = true;
          }
          return [val, isBreak];
        },
        breakif: (v, obj, set) => {
          let val = null;
          let isBreak = false;
          if (fpjson(v, obj))
            isBreak = true;
          return [val, isBreak];
        }
      };
      module.exports = {
        isValidName,
        isValidDocName,
        clone,
        bigIntFromBytes,
        replace$,
        fpj,
        ac_funcs,
        setElm,
        parse
      };
    }
  });

  // sdk/contracts/weavedb-bpt/lib/utils-common.js
  var require_utils_common = __commonJS({
    "sdk/contracts/weavedb-bpt/lib/utils-common.js"(exports, module) {
      var {
        includes,
        init,
        of,
        isNil,
        tail,
        is,
        complement,
        concat,
        without
      } = require_src();
      var md5 = require_md5();
      var { clone, bigIntFromBytes } = require_pure();
      var read = async (contract, param, SmartWeave2) => {
        return (await SmartWeave2.contracts.viewContractState(contract, param)).result;
      };
      var err = (msg = `The wrong query`, contractErr = false) => {
        if (contractErr) {
          const error = typeof ContractError === "undefined" ? Error : ContractError;
          throw new error(msg);
        } else {
          throw msg;
        }
      };
      var getField = (data, path) => {
        if (path.length === 1) {
          return [path[0], data];
        } else {
          if (isNil(data[path[0]]))
            data[path[0]] = {};
          return getField(data[path[0]], tail(path));
        }
      };
      var mergeDataP = async (_data, new_data, extra = {}, overwrite = false, signer, SmartWeave2, action, state) => {
        let exists = true;
        if (isNil(_data.__data) || overwrite) {
          _data.__data = {};
          exists = false;
        }
        for (let k in new_data) {
          const path = exists ? k.split(".") : [k];
          const [field, obj] = getField(_data.__data, path);
          const d = new_data[k];
          if (is(Object)(d) && d.__op === "zkp") {
            const res = await read(
              state.contracts.polygonID,
              {
                function: "verify",
                proof: d.proof,
                pub_signals: d.pub_signals
              },
              SmartWeave2
            );
            obj[field] = res;
          } else if (is(Object)(d) && d.__op === "data") {
            obj[field] = extra[d.key] ?? null;
          } else if (is(Object)(d) && d.__op === "arrayUnion") {
            if (complement(is)(Array, d.arr))
              err();
            if (complement(is)(Array, obj[field]))
              obj[field] = [];
            obj[field] = concat(obj[field], d.arr);
          } else if (is(Object)(d) && d.__op === "arrayRemove") {
            if (complement(is)(Array, d.arr))
              err();
            if (complement(is)(Array, obj[field]))
              obj[field] = [];
            obj[field] = without(d.arr, obj[field]);
          } else if (is(Object)(d) && d.__op === "inc") {
            if (isNaN(d.n))
              err();
            if (isNil(obj[field]))
              obj[field] = 0;
            obj[field] += d.n;
          } else if (is(Object)(d) && d.__op === "del") {
            delete obj[field];
          } else if (is(Object)(d) && d.__op === "ts") {
            obj[field] = SmartWeave2.block.timestamp;
          } else if (is(Object)(d) && d.__op === "ms") {
            obj[field] = action.timestamp ?? SmartWeave2.block.timestamp * 1e3;
          } else if (is(Object)(d) && d.__op === "signer") {
            obj[field] = signer;
          } else {
            obj[field] = d;
          }
        }
        return _data;
      };
      var mergeData = (_data, new_data, extra = {}, overwrite = false, signer, SmartWeave2, action) => {
        let exists = true;
        if (isNil(_data.__data) || overwrite) {
          _data.__data = {};
          exists = false;
        }
        for (let k in new_data) {
          const path = exists ? k.split(".") : [k];
          const [field, obj] = getField(_data.__data, path);
          const d = new_data[k];
          if (is(Object)(d) && d.__op === "data") {
            obj[field] = extra[d.key] ?? null;
          } else if (is(Object)(d) && d.__op === "arrayUnion") {
            if (complement(is)(Array, d.arr))
              err();
            if (complement(is)(Array, obj[field]))
              obj[field] = [];
            obj[field] = concat(obj[field], d.arr);
          } else if (is(Object)(d) && d.__op === "arrayRemove") {
            if (complement(is)(Array, d.arr))
              err();
            if (complement(is)(Array, obj[field]))
              obj[field] = [];
            obj[field] = without(d.arr, obj[field]);
          } else if (is(Object)(d) && d.__op === "inc") {
            if (isNaN(d.n))
              err();
            if (isNil(obj[field]))
              obj[field] = 0;
            obj[field] += d.n;
          } else if (is(Object)(d) && d.__op === "del") {
            delete obj[field];
          } else if (is(Object)(d) && d.__op === "ts") {
            obj[field] = SmartWeave2.block.timestamp;
          } else if (is(Object)(d) && d.__op === "ms") {
            obj[field] = action.timestamp ?? SmartWeave2.block.timestamp * 1e3;
          } else if (is(Object)(d) && d.__op === "signer") {
            obj[field] = signer;
          } else {
            obj[field] = d;
          }
        }
        return _data;
      };
      var genId = async (action, salt, SmartWeave2) => {
        const id = md5(
          JSON.stringify({
            input: action.input,
            txid: SmartWeave2.transaction?.id ?? SmartWeave2.block?.height,
            timestamp: SmartWeave2.transaction?.timestamp ?? SmartWeave2.block?.timestamp
          })
        );
        return Buffer.from(id, "hex").toString("base64").replace(/\//g, "_").replace(/\+/g, "-");
      };
      var parse = async (state, action, _func, signer, salt, contractErr = true, SmartWeave2, kvs, type, fn) => {
        let func;
        if (!isNil(_func))
          func = _func.split(":")[0];
        const { data } = state;
        const { query } = action.input;
        const { relayer, jobID, extra } = action;
        let new_data = null;
        let path = null;
        let col;
        if (includes(func)([
          "delete",
          "getSchema",
          "getRules",
          "getAlgorithms",
          "removeRelayerJob",
          "getRelayerJob",
          "listCollections"
        ])) {
          path = query;
        } else {
          ;
          [new_data, ...path] = query;
          if (func === "add") {
            const id = await genId(action, salt, SmartWeave2);
            path.push(id);
            await fn.addNewDoc(id, SmartWeave2, state, kvs);
          } else if (includes(func)(["setRules", "addTrigger"]) && query.length % 2 === 1) {
            path = init(path);
          }
        }
        if (isNil(new_data) && !includes(func)([
          "listCollections",
          "delete",
          "getSchema",
          "getRules",
          "getAlgorithms",
          "getRelayerJob",
          "removeRelayerJob",
          "getRelayerJob"
        ]) || path.length === 0 && !includes(func)(["setAlgorithms", "listCollections"]) || path.length % 2 !== 0 && !includes(func)([
          "addRelayerJob",
          "removeRelayerJob",
          "getRelayerJob",
          "addIndex",
          "addTrigger",
          "removeTrigger",
          "removeIndex",
          "setSchema",
          "getSchema",
          "getAlgorithms",
          "setRules",
          "getRules",
          "linkContract",
          "unlinkContract"
        ])) {
          err(`the wrong query length[${query.length}] for ${func}`, contractErr);
        }
        let _data = null;
        let schema = null;
        let rules = null;
        let next_data;
        if (includes(func)([
          "addIndex",
          "addTrigger",
          "removeTrigger",
          "removeIndex",
          "setSchema",
          "getSchema",
          "setRules",
          "getRules"
        ])) {
          _data = await fn.getCol(
            data,
            path,
            signer,
            SmartWeave2,
            void 0,
            kvs,
            state
          );
          col = _data;
        } else if (!includes(func)([
          "setAlgorithms",
          "addRelayerJob",
          "removeRelayerJob",
          "getAlgorithms",
          "linkContract",
          "unlinkContract"
        ]) && path.length !== 0) {
          const doc = await fn.getDoc(
            data,
            path,
            signer,
            func,
            new_data,
            state.secure,
            relayer,
            jobID,
            extra,
            state,
            action,
            SmartWeave2,
            void 0,
            kvs,
            fn.get,
            type,
            _func
          );
          _data = doc.doc;
          ({ next_data, schema, rules, col } = doc);
        }
        let owner = state.owner || [];
        if (is(String)(owner))
          owner = of(owner);
        if (!isNil(state.auth) && includes(func)([
          "addRelayerJob",
          "removeRelayerJob",
          "addIndex",
          "addTrigger",
          "removeTrigger",
          "removeIndex",
          "setSchema",
          "setAlgorithms",
          "setRules",
          "unlinkContract",
          "linkContract",
          "unlinkContract"
        ]) && !includes(signer)(owner)) {
          err(
            `caller[${signer}] is not contract owner[${owner.join(", ")}]`,
            contractErr
          );
        }
        return { data, query, new_data, path, _data, schema, col, next_data };
      };
      module.exports = {
        err,
        read,
        getField,
        mergeData,
        mergeDataP,
        genId,
        parse
      };
    }
  });

  // sdk/contracts/weavedb-bpt/lib/keccak.js
  var require_keccak = __commonJS({
    "sdk/contracts/weavedb-bpt/lib/keccak.js"(exports, module) {
      function encode(str) {
        var out = [], p = 0;
        for (var i = 0; i < str.length; i++) {
          var c = str.charCodeAt(i);
          if (c < 128) {
            out[p++] = c;
          } else if (c < 2048) {
            out[p++] = c >> 6 | 192;
            out[p++] = c & 63 | 128;
          } else if ((c & 64512) == 55296 && i + 1 < str.length && (str.charCodeAt(i + 1) & 64512) == 56320) {
            c = 65536 + ((c & 1023) << 10) + (str.charCodeAt(++i) & 1023);
            out[p++] = c >> 18 | 240;
            out[p++] = c >> 12 & 63 | 128;
            out[p++] = c >> 6 & 63 | 128;
            out[p++] = c & 63 | 128;
          } else {
            out[p++] = c >> 12 | 224;
            out[p++] = c >> 6 & 63 | 128;
            out[p++] = c & 63 | 128;
          }
        }
        return new Uint8Array(out);
      }
      function number(n) {
        if (!Number.isSafeInteger(n) || n < 0)
          throw new Error(`Wrong positive integer: ${n}`);
      }
      function bool(b) {
        if (typeof b !== "boolean")
          throw new Error(`Expected boolean, not ${b}`);
      }
      function bytes(b, ...lengths) {
        if (!(b instanceof Uint8Array))
          throw new TypeError("Expected Uint8Array");
        if (lengths.length > 0 && !lengths.includes(b.length))
          throw new TypeError(
            `Expected Uint8Array of length ${lengths}, not of length=${b.length}`
          );
      }
      function hash(hash2) {
        if (typeof hash2 !== "function" || typeof hash2.create !== "function")
          throw new Error("Hash should be wrapped by utils.wrapConstructor");
        number(hash2.outputLen);
        number(hash2.blockLen);
      }
      function exists(instance, checkFinished = true) {
        if (instance.destroyed)
          throw new Error("Hash instance has been destroyed");
        if (checkFinished && instance.finished)
          throw new Error("Hash#digest() has already been called");
      }
      function output(out, instance) {
        bytes(out);
        const min = instance.outputLen;
        if (out.length < min) {
          throw new Error(
            `digestInto() expects output buffer of length at least ${min}`
          );
        }
      }
      var assert = {
        number,
        bool,
        bytes,
        hash,
        exists,
        output
      };
      function utf8ToBytes(str) {
        if (typeof str !== "string") {
          throw new TypeError(`utf8ToBytes expected string, got ${typeof str}`);
        }
        return encode(str);
      }
      function toBytes(data) {
        if (typeof data === "string")
          data = utf8ToBytes(data);
        if (!(data instanceof Uint8Array))
          throw new TypeError(
            `Expected input type is Uint8Array (got ${typeof data})`
          );
        return data;
      }
      function wrapConstructor(hashConstructor) {
        const hashC = (message) => {
          return hashConstructor().update(toBytes(message)).digest();
        };
        const tmp = hashConstructor();
        hashC.outputLen = tmp.outputLen;
        hashC.blockLen = tmp.blockLen;
        hashC.create = () => hashConstructor();
        return hashC;
      }
      var U32_MASK64 = BigInt(2 ** 32 - 1);
      var _32n = BigInt(32);
      function fromBig(n, le = false) {
        if (le)
          return { h: Number(n & U32_MASK64), l: Number(n >> _32n & U32_MASK64) };
        return {
          h: Number(n >> _32n & U32_MASK64) | 0,
          l: Number(n & U32_MASK64) | 0
        };
      }
      function split(lst, le = false) {
        let Ah = new Uint32Array(lst.length);
        let Al = new Uint32Array(lst.length);
        for (let i = 0; i < lst.length; i++) {
          const { h, l } = fromBig(lst[i], le);
          [Ah[i], Al[i]] = [h, l];
        }
        return [Ah, Al];
      }
      var toBig = (h, l) => BigInt(h >>> 0) << _32n | BigInt(l >>> 0);
      var shrSH = (h, l, s) => h >>> s;
      var shrSL = (h, l, s) => h << 32 - s | l >>> s;
      var rotrSH = (h, l, s) => h >>> s | l << 32 - s;
      var rotrSL = (h, l, s) => h << 32 - s | l >>> s;
      var rotrBH = (h, l, s) => h << 64 - s | l >>> s - 32;
      var rotrBL = (h, l, s) => h >>> s - 32 | l << 64 - s;
      var rotr32H = (h, l) => l;
      var rotr32L = (h, l) => h;
      var rotlSH = (h, l, s) => h << s | l >>> 32 - s;
      var rotlSL = (h, l, s) => l << s | h >>> 32 - s;
      var rotlBH = (h, l, s) => l << s - 32 | h >>> 64 - s;
      var rotlBL = (h, l, s) => h << s - 32 | l >>> 64 - s;
      function add(Ah, Al, Bh, Bl) {
        const l = (Al >>> 0) + (Bl >>> 0);
        return { h: Ah + Bh + (l / 2 ** 32 | 0) | 0, l: l | 0 };
      }
      var add3L = (Al, Bl, Cl) => (Al >>> 0) + (Bl >>> 0) + (Cl >>> 0);
      var add3H = (low, Ah, Bh, Ch) => Ah + Bh + Ch + (low / 2 ** 32 | 0) | 0;
      var add4L = (Al, Bl, Cl, Dl) => (Al >>> 0) + (Bl >>> 0) + (Cl >>> 0) + (Dl >>> 0);
      var add4H = (low, Ah, Bh, Ch, Dh) => Ah + Bh + Ch + Dh + (low / 2 ** 32 | 0) | 0;
      var add5L = (Al, Bl, Cl, Dl, El) => (Al >>> 0) + (Bl >>> 0) + (Cl >>> 0) + (Dl >>> 0) + (El >>> 0);
      var add5H = (low, Ah, Bh, Ch, Dh, Eh) => Ah + Bh + Ch + Dh + Eh + (low / 2 ** 32 | 0) | 0;
      var u64 = {
        fromBig,
        split,
        toBig,
        shrSH,
        shrSL,
        rotrSH,
        rotrSL,
        rotrBH,
        rotrBL,
        rotr32H,
        rotr32L,
        rotlSH,
        rotlSL,
        rotlBH,
        rotlBL,
        add,
        add3L,
        add3H,
        add4L,
        add4H,
        add5H,
        add5L
      };
      var [SHA3_PI, SHA3_ROTL, _SHA3_IOTA] = [[], [], []];
      var _0n = BigInt(0);
      var _1n = BigInt(1);
      var _2n = BigInt(2);
      var _7n = BigInt(7);
      var _256n = BigInt(256);
      var _0x71n = BigInt(113);
      for (let round = 0, R = _1n, x = 1, y = 0; round < 24; round++) {
        ;
        [x, y] = [y, (2 * x + 3 * y) % 5];
        SHA3_PI.push(2 * (5 * y + x));
        SHA3_ROTL.push((round + 1) * (round + 2) / 2 % 64);
        let t = _0n;
        for (let j = 0; j < 7; j++) {
          R = (R << _1n ^ (R >> _7n) * _0x71n) % _256n;
          if (R & _2n)
            t ^= _1n << (_1n << BigInt(j)) - _1n;
        }
        _SHA3_IOTA.push(t);
      }
      var [SHA3_IOTA_H, SHA3_IOTA_L] = u64.split(_SHA3_IOTA, true);
      var rotlH = (h, l, s) => s > 32 ? u64.rotlBH(h, l, s) : u64.rotlSH(h, l, s);
      var rotlL = (h, l, s) => s > 32 ? u64.rotlBL(h, l, s) : u64.rotlSL(h, l, s);
      var u32 = (arr) => new Uint32Array(arr.buffer, arr.byteOffset, Math.floor(arr.byteLength / 4));
      function keccakP(s, rounds = 24) {
        const B = new Uint32Array(5 * 2);
        for (let round = 24 - rounds; round < 24; round++) {
          for (let x = 0; x < 10; x++)
            B[x] = s[x] ^ s[x + 10] ^ s[x + 20] ^ s[x + 30] ^ s[x + 40];
          for (let x = 0; x < 10; x += 2) {
            const idx1 = (x + 8) % 10;
            const idx0 = (x + 2) % 10;
            const B0 = B[idx0];
            const B1 = B[idx0 + 1];
            const Th = rotlH(B0, B1, 1) ^ B[idx1];
            const Tl = rotlL(B0, B1, 1) ^ B[idx1 + 1];
            for (let y = 0; y < 50; y += 10) {
              s[x + y] ^= Th;
              s[x + y + 1] ^= Tl;
            }
          }
          let curH = s[2];
          let curL = s[3];
          for (let t = 0; t < 24; t++) {
            const shift = SHA3_ROTL[t];
            const Th = rotlH(curH, curL, shift);
            const Tl = rotlL(curH, curL, shift);
            const PI = SHA3_PI[t];
            curH = s[PI];
            curL = s[PI + 1];
            s[PI] = Th;
            s[PI + 1] = Tl;
          }
          for (let y = 0; y < 50; y += 10) {
            for (let x = 0; x < 10; x++)
              B[x] = s[y + x];
            for (let x = 0; x < 10; x++)
              s[y + x] ^= ~B[(x + 2) % 10] & B[(x + 4) % 10];
          }
          s[0] ^= SHA3_IOTA_H[round];
          s[1] ^= SHA3_IOTA_L[round];
        }
        B.fill(0);
      }
      var Hash = class {
        clone() {
          return this._cloneInto();
        }
      };
      var Keccak = class extends Hash {
        constructor(blockLen, suffix, outputLen, enableXOF = false, rounds = 24) {
          super();
          this.blockLen = blockLen;
          this.suffix = suffix;
          this.outputLen = outputLen;
          this.enableXOF = enableXOF;
          this.rounds = rounds;
          this.pos = 0;
          this.posOut = 0;
          this.finished = false;
          this.destroyed = false;
          assert.number(outputLen);
          if (0 >= this.blockLen || this.blockLen >= 200)
            throw new Error("Sha3 supports only keccak-f1600 function");
          this.state = new Uint8Array(200);
          this.state32 = u32(this.state);
        }
        keccak() {
          keccakP(this.state32, this.rounds);
          this.posOut = 0;
          this.pos = 0;
        }
        update(data) {
          assert.exists(this);
          const { blockLen, state } = this;
          data = toBytes(data);
          const len = data.length;
          for (let pos = 0; pos < len; ) {
            const take = Math.min(blockLen - this.pos, len - pos);
            for (let i = 0; i < take; i++)
              state[this.pos++] ^= data[pos++];
            if (this.pos === blockLen)
              this.keccak();
          }
          return this;
        }
        finish() {
          if (this.finished)
            return;
          this.finished = true;
          const { state, suffix, pos, blockLen } = this;
          state[pos] ^= suffix;
          if ((suffix & 128) !== 0 && pos === blockLen - 1)
            this.keccak();
          state[blockLen - 1] ^= 128;
          this.keccak();
        }
        writeInto(out) {
          assert.exists(this, false);
          assert.bytes(out);
          this.finish();
          const bufferOut = this.state;
          const { blockLen } = this;
          for (let pos = 0, len = out.length; pos < len; ) {
            if (this.posOut >= blockLen)
              this.keccak();
            const take = Math.min(blockLen - this.posOut, len - pos);
            out.set(bufferOut.subarray(this.posOut, this.posOut + take), pos);
            this.posOut += take;
            pos += take;
          }
          return out;
        }
        xofInto(out) {
          if (!this.enableXOF)
            throw new Error("XOF is not possible for this instance");
          return this.writeInto(out);
        }
        xof(bytes2) {
          assert.number(bytes2);
          return this.xofInto(new Uint8Array(bytes2));
        }
        digestInto(out) {
          assert.output(out, this);
          if (this.finished)
            throw new Error("digest() was already called");
          this.writeInto(out);
          this.destroy();
          return out;
        }
        digest() {
          return this.digestInto(new Uint8Array(this.outputLen));
        }
        destroy() {
          this.destroyed = true;
          this.state.fill(0);
        }
        _cloneInto(to) {
          const { blockLen, suffix, outputLen, rounds, enableXOF } = this;
          to || (to = new Keccak(blockLen, suffix, outputLen, enableXOF, rounds));
          to.state32.set(this.state32);
          to.pos = this.pos;
          to.posOut = this.posOut;
          to.finished = this.finished;
          to.rounds = rounds;
          to.suffix = suffix;
          to.outputLen = outputLen;
          to.enableXOF = enableXOF;
          to.destroyed = this.destroyed;
          return to;
        }
      };
      var gen = (suffix, blockLen, outputLen) => wrapConstructor(() => new Keccak(blockLen, suffix, outputLen));
      var keccak_256 = gen(1, 136, 256 / 8);
      function wrapHash(hash2) {
        return (msg) => {
          assert.bytes(msg);
          return hash2(msg);
        };
      }
      var __ = () => {
        const k = wrapHash(keccak_256);
        k.create = keccak_256.create;
        return k;
      };
      var keccak256 = __();
      module.exports = {
        keccak256,
        output,
        exists
      };
    }
  });

  // sdk/contracts/weavedb-bpt/lib/fn.js
  var require_fn = __commonJS({
    "sdk/contracts/weavedb-bpt/lib/fn.js"(exports, module) {
      var { is, concat, map } = require_src();
      var { keccak256 } = require_keccak();
      function hash([bufs, bytes = 20]) {
        let _bufs = map((v) => {
          let type = "utf8";
          let val = v;
          if (is(Array, v)) {
            val = v[0];
            type = v[1] ?? "utf8";
          }
          if (type === "hex" && val.startsWith("0x"))
            val = val.slice(2);
          return Buffer.from(val, type);
        })(bufs);
        return to64(keccak256(Buffer.concat(_bufs)));
      }
      function to64(from, type, bytes = 20) {
        return Buffer.from(from, type).slice(0, bytes).toString("base64").replace(/\//g, "_").replace(/\+/g, "-");
      }
      function toBase64([str, type = "hex", bytes = 20]) {
        if (str.startsWith("0x"))
          str = str.slice(2);
        return to64(str, type, bytes);
      }
      module.exports = {
        parse: async (str) => [JSON.parse(str), false],
        stringfy: async (json) => [JSON.stringify(json), false],
        toBatchAll: async (query, obj) => {
          obj.batch = concat(obj.batch, query);
          return [null, false];
        },
        toBatch: async (query, obj) => {
          obj.batch.push(query);
          return [null, false];
        },
        upsert: (execQuery) => async (query) => [await execQuery("upsert", query), false],
        delete: (execQuery) => async (query) => [await execQuery("delete", query), false],
        update: (execQuery) => async (query) => [await execQuery("update", query), false],
        set: (execQuery) => async (query) => [await execQuery("set", query), false],
        add: (execQuery) => async (query) => [await execQuery("add", query), false],
        batch: (execQuery) => async (query, obj) => {
          obj.batchExecuted = true;
          return [await execQuery("batch", query), false];
        },
        toBase64: (query) => [toBase64(query), false],
        hash: (query) => [hash(query), false]
      };
    }
  });

  // sdk/contracts/weavedb-bpt/lib/BPT.js
  var require_BPT = __commonJS({
    "sdk/contracts/weavedb-bpt/lib/BPT.js"(exports, module) {
      var {
        path,
        is,
        assoc,
        compose,
        pickAll,
        pluck,
        equals,
        init,
        concat,
        without,
        addIndex,
        range,
        splitAt,
        tail,
        indexOf,
        last,
        splitWhen,
        lt,
        objOf,
        flatten,
        zip,
        median,
        prop,
        isNil,
        map
      } = require_src();
      var BPT = class {
        constructor(order = 5, sort_fields = "number", kv, prefix, onCommit) {
          this.kv = kv;
          this.onCommit = onCommit;
          this.order = order;
          this.sort_fields = sort_fields;
          this.max_vals = this.order - 1;
          this.min_vals = Math.ceil(this.order / 2) - 1;
          this.prefix = prefix;
        }
        get = async (key, stats, _prefix) => stats?.[key] ?? await this.kv.get(key, _prefix ?? `${this.prefix}/`);
        put = async (key, val, stats, _prefix, nosave) => {
          if (!isNil(stats)) {
            stats[key] = val;
          } else {
            await this.kv.put(key, val, _prefix ?? `${this.prefix}/`, nosave);
          }
        };
        del = async (key, stats, _prefix, nosave) => {
          if (!isNil(stats)) {
            stats[key] = { __del__: true };
          } else {
            await this.kv.del(key, _prefix ?? `${this.prefix}/`, nosave);
          }
        };
        putData = async (key, val, stats, signer = null) => {
          const obj = { setter: signer, val };
          if (!isNil(stats)) {
            stats[`data/${key}`] = obj;
          } else {
            await this.put(`data/${key}`, obj, stats, "");
          }
        };
        delData = async (key, stats) => {
          if (!isNil(stats)) {
            stats[`data/${key}`] = { __del__: true };
          } else {
            await this.del(`data/${key}`, stats, "");
          }
        };
        putNode = async (node, stats) => await this.put(node.id, node, stats);
        data = async (key, cache = {}, stats) => {
          if (typeof cache[key] !== "undefined")
            return {
              key,
              val: cache[key]?.val ?? null,
              setter: cache[key]?.setter ?? null
            };
          let _data = await this.get(`data/${key}`, stats, "") ?? null;
          cache[key] = _data;
          return { key, val: _data?.val ?? null, setter: _data?.setter ?? null };
        };
        root = async (stats) => await this.get("root", stats) ?? null;
        setRoot = async (id, stats) => await this.put("root", id, stats) ?? null;
        isOver = (node, plus = 0) => node.vals.length + plus > this.max_vals;
        isUnder = (node, plus = 0) => node.vals.length + plus < this.min_vals;
        wrap = (val, key) => {
          let obj = { val };
          if (!isNil(val.__id__))
            obj.key = val.__id__;
          if (!isNil(key))
            obj.key = key;
          return obj;
        };
        compArr(va, vb) {
          const _va = is(Array, va) ? va : [va];
          const _vb = is(Array, vb) ? vb : [vb];
          let i = 0;
          while (true) {
            if (!equals(_va[i], _vb[i]))
              return _va[i] < _vb[i] ? 1 : -1;
            if (typeof _va[i] === "undefined" || typeof _vb[i] === "undefined")
              break;
            i++;
          }
          return 0;
        }
        comp(a, b, null_last = false, fields) {
          fields ??= this.sort_fields;
          if (typeof fields === "string") {
            return a.val === b.val ? 0 : a.val < b.val ? 1 : -1;
          } else {
            for (const v of fields) {
              const va = v[0] === "__id__" ? a.key : path(v[0].split("."), a.val) ?? null;
              const vb = v[0] === "__id__" ? b.key : path(v[0].split("."), b.val) ?? null;
              const bareComp = this.compArr(va, vb);
              if (bareComp !== 0) {
                return (isNil(va) ? (v[1] === "desc" ? -1 : 1) * (null_last ? -1 : 1) : isNil(vb) ? (v[1] === "desc" ? -1 : 1) * (null_last ? 1 : -1) : bareComp === 1 ? 1 : -1) * (v[1] === "desc" ? -1 : 1);
              }
            }
            return 0;
          }
        }
        async id(stats) {
          const count = (await this.get("count", stats) ?? -1) + 1;
          await this.put("count", count, stats);
          return count.toString();
        }
        async init(key, stats) {
          let new_node = {
            leaf: true,
            id: await this.id(stats),
            vals: [key],
            parent: null,
            next: null,
            prev: null
          };
          await this.putNode(new_node, stats);
          await this.setRoot(new_node.id, stats);
        }
        async search(val, key, stats, after = false) {
          let node = await this.get(key ?? await this.root(stats) ?? "0", stats);
          if (isNil(node))
            return null;
          if (node.leaf)
            return node;
          let i = 0;
          for (const v of node.vals) {
            if (isNil(val) || this.comp(val, node.leaf ? v : this.wrap(v), after) === 1) {
              return await this.search(val, node.children[i], stats, after);
            }
            i++;
          }
          return await this.search(val, node.children[i], stats, after);
        }
        async rsearch(val, key, stats, after = false) {
          let node = await this.get(key ?? await this.root(stats) ?? "0", stats);
          if (isNil(node))
            return null;
          if (node.leaf)
            return node;
          let i = node.vals.length - 1;
          while (i >= 0) {
            let v = node.vals[i];
            if (isNil(val) || this.comp(val, node.leaf ? v : this.wrap(v), !after) <= 0) {
              return await this.rsearch(val, node.children[i + 1], stats, after);
            }
            i--;
          }
          return await this.rsearch(val, node.children[0], stats, after);
        }
        async read(key) {
          let stats = {};
          const doc = (await this.searchByKey(key, stats))[0];
          return { key, val: doc?.val ?? null };
        }
        async getValsReverse(node, vals, index = 0, opt, cache = {}, inRange = null, stats) {
          for (let i = index; i >= 0; i--) {
            const v = node.vals[i];
            const val = await this.data(v, cache, stats);
            if (!isNil(opt.endAt)) {
              if (this.comp(val, this.wrap(opt.endAt)) > 0)
                return;
            } else if (!isNil(opt.endBefore)) {
              if (this.comp(val, this.wrap(opt.endBefore), true) >= 0)
                return;
            }
            vals.push(val);
            if (!isNil(opt.limit) && vals.length === opt.limit)
              return;
          }
          if (!isNil(node.prev)) {
            const prev = await this.get(node.prev, stats);
            await this.getValsReverse(
              prev,
              vals,
              prev.vals.length - 1,
              opt,
              cache,
              null,
              stats
            );
          }
        }
        async getVals(node, vals, index = 0, opt, cache = {}, inRange = null, stats) {
          for (let i = index; i < node.vals.length; i++) {
            const v = node.vals[i];
            const val = await this.data(v, cache, stats);
            if (!isNil(opt.endAt)) {
              if (this.comp(val, this.wrap(opt.endAt), true) < 0)
                return;
            } else if (!isNil(opt.endBefore)) {
              if (this.comp(val, this.wrap(opt.endBefore)) <= 0)
                return;
            }
            vals.push(val);
            if (!isNil(opt.limit) && vals.length === opt.limit)
              return;
          }
          if (!isNil(node.next)) {
            const next = await this.get(node.next, stats);
            await this.getVals(next, vals, 0, opt, cache, null, stats);
          }
        }
        async getValsReverseCursor(node, vals, index = 0, opt, cache = {}, inRange = null, stats) {
          let i = index;
          let vals_len = 0;
          return async () => {
            let ret = null;
            const getVal = async () => {
              while (i >= 0) {
                const v = node.vals[i];
                const val = await this.data(v, cache, stats);
                if (!isNil(opt.endAt)) {
                  if (this.comp(val, this.wrap(opt.endAt)) > 0) {
                    node = null;
                    return;
                  }
                } else if (!isNil(opt.endBefore)) {
                  if (this.comp(val, this.wrap(opt.endBefore), true) >= 0) {
                    node = null;
                    return;
                  }
                }
                ret = val;
                if (!isNil(opt.limit) && vals.length === opt.limit) {
                  node = null;
                  break;
                }
                i--;
                break;
              }
              if (isNil(ret)) {
                if (!isNil(node?.prev)) {
                  node = await this.get(node.prev, stats);
                  i = node.vals.length - 1;
                } else {
                  node = null;
                }
              }
            };
            while (!isNil(node) && isNil(ret))
              await getVal();
            return ret;
          };
        }
        async getValsCursor(node, vals, index = 0, opt, cache = {}, inRange = null, stats) {
          let i = index;
          let vals_len = 0;
          return async () => {
            let ret = null;
            const getVal = async () => {
              while (i < node.vals.length) {
                const v = node.vals[i];
                const val = await this.data(v, cache, stats);
                if (!isNil(opt.endAt)) {
                  if (this.comp(val, this.wrap(opt.endAt), true) < 0) {
                    node = null;
                    break;
                  }
                } else if (!isNil(opt.endBefore)) {
                  if (this.comp(val, this.wrap(opt.endBefore)) <= 0) {
                    node = null;
                    break;
                  }
                }
                ret = val;
                vals_len++;
                if (!isNil(opt.limit) && vals_len === opt.limit) {
                  node = null;
                  break;
                }
                i++;
                break;
              }
              if (isNil(ret)) {
                if (!isNil(node?.next)) {
                  node = await this.get(node.next, stats);
                  i = 0;
                } else {
                  node = null;
                }
              }
            };
            while (!isNil(node) && isNil(ret))
              await getVal();
            return ret;
          };
        }
        async findIndex(_index, node, val, cache, stats) {
          let index = _index;
          let isPrev = false;
          if (_index === 0) {
            isPrev = !isNil(node.prev);
          } else {
            _index ??= node.vals.length;
            for (let i = _index - 1; i >= 0; i--) {
              const _val = await this.data(node.vals[i], cache, stats);
              if (this.comp(_val, val) !== 0)
                break;
              index = i;
              if (i === 0)
                isPrev = !isNil(node.prev);
            }
          }
          if (isPrev) {
            let prev = await this.get(node.prev, stats);
            const [new_index, new_node] = await this.findIndex(
              null,
              prev,
              val,
              cache,
              stats
            );
            return !isNil(new_index) ? [new_index, new_node] : [_index, node];
          } else {
            return [index, node];
          }
        }
        async findLastIndex(_index, node, val, cache, stats) {
          let index = null;
          let isNext = false;
          if (_index >= node.vals.length - 1) {
            isNext = !isNil(node.next);
          } else {
            for (let i = _index + 1; i < node.vals.length; i++) {
              const _val = await this.data(node.vals[i], cache, stats);
              if (this.comp(_val, val) !== 0) {
                index = i;
                break;
              }
              if (i === node.vals.length - 1)
                isNext = !isNil(node.next);
            }
          }
          if (isNext) {
            let next = await this.get(node.next, stats);
            const [new_index, new_node] = await this.findLastIndex(
              -1,
              next,
              val,
              cache,
              stats
            );
            return !isNil(new_index) ? [new_index, new_node] : [_index, node];
          } else {
            return [index, node];
          }
        }
        async findLastGtIndex(_index, node, val, cache, stats) {
          let index = null;
          let isNext = false;
          if (_index >= node.vals.length - 1) {
            isNext = !isNil(node.next);
          } else {
            for (let i = _index + 1; i < node.vals.length; i++) {
              const _val = await this.data(node.vals[i], cache, stats);
              if (this.comp(_val, val) === -1) {
                index = i;
                break;
              }
              if (i === node.vals.length - 1)
                isNext = !isNil(node.next);
            }
          }
          if (isNext) {
            let next = await this.get(node.next, stats);
            const [new_index, new_node] = await this.findLastGtIndex(
              -1,
              next,
              val,
              cache,
              stats
            );
            return !isNil(new_index) ? [new_index, new_node] : [_index, node];
          } else {
            return [index, node];
          }
        }
        async findFirstLtIndex(_index, node, val, cache, stats) {
          let index = null;
          let isPrev = false;
          if (_index <= 0) {
            isPrev = !isNil(node.prev);
          } else {
            for (let i = _index - 1; i >= 0; i--) {
              const _val = await this.data(node.vals[i], cache, stats);
              if (this.comp(_val, val, true) === 1) {
                index = i;
                break;
              }
              if (i === 0)
                isPrev = !isNil(node.prev);
            }
          }
          if (isPrev) {
            let prev = await this.get(node.prev, stats);
            const [new_index, new_node] = await this.findFirstLtIndex(
              prev.vals.length,
              prev,
              val,
              cache,
              stats
            );
            return !isNil(new_index) ? [new_index, new_node] : [_index, node];
          } else {
            return [index, node];
          }
        }
        async range(opt = {}, cursor = false) {
          opt.limit ??= 1e3;
          if (opt.limit > 1e3)
            opt.limit = 1e3;
          let stats = {};
          let start = opt.startAt ?? opt.startAfter;
          if (!isNil(start))
            start = this.wrap(start);
          const after = isNil(opt.startAt) && !isNil(opt.startAfter);
          const first_node = await this[opt.reverse === true ? "rsearch" : "search"](
            start ?? void 0,
            void 0,
            stats,
            after
          );
          if (isNil(first_node))
            return cursor ? async () => null : [];
          let vals = [];
          let cache = {};
          let _node = first_node;
          let index = opt.reverse === true ? _node.vals.length - 1 : 0;
          let _index = index;
          if (opt.reverse === true) {
            if (!isNil(start)) {
              let [index2, smaller, greater] = await this.binarySearch(
                first_node,
                start,
                cache,
                stats,
                !after
              );
              if (!isNil(opt.startAt)) {
                _index = index2;
                if (!isNil(smaller))
                  _index = smaller;
              } else if (!isNil(opt.startAfter)) {
                _index = null;
                if (!isNil(smaller)) {
                  _index = smaller;
                } else if (!isNil(index2)) {
                  const [new_index, new_node] = await this.findFirstLtIndex(
                    index2,
                    first_node,
                    start,
                    cache,
                    stats
                  );
                  if (!isNil(new_index)) {
                    _index = new_index;
                    _node = new_node;
                  }
                }
              }
            }
          } else if (!isNil(start)) {
            let [index2, smaller, greater] = await this.binarySearch(
              first_node,
              start,
              cache,
              stats,
              after
            );
            if (!isNil(opt.startAt)) {
              _index = index2;
              if (!isNil(greater)) {
                _index = greater;
              } else if (!isNil(index2)) {
                const [new_index, new_node] = await this.findIndex(
                  _index,
                  first_node,
                  start,
                  cache,
                  stats
                );
                if (!isNil(new_index)) {
                  _index = new_index;
                  _node = new_node;
                }
              } else if (!isNil(smaller) && !isNil(first_node.next)) {
                const next = await this.get(first_node.next, stats);
                const [new_index, new_node] = await this.findLastGtIndex(
                  -1,
                  next,
                  start,
                  cache,
                  stats
                );
                if (!isNil(new_index)) {
                  _index = new_index;
                  _node = new_node;
                }
              }
            } else if (!isNil(opt.startAfter)) {
              _index = null;
              if (!isNil(greater)) {
                _index = greater;
              } else if (!isNil(index2)) {
                const [new_index, new_node] = await this.findLastIndex(
                  index2,
                  first_node,
                  start,
                  cache,
                  stats
                );
                if (!isNil(new_index)) {
                  _index = new_index;
                  _node = new_node;
                }
              } else if (!isNil(smaller) && !isNil(first_node.next)) {
                const next = await this.get(first_node.next, stats);
                const [new_index, new_node] = await this.findLastGtIndex(
                  -1,
                  next,
                  start,
                  cache,
                  stats
                );
                if (!isNil(new_index)) {
                  _index = new_index;
                  _node = new_node;
                }
              }
            }
          }
          if (!cursor) {
            if (!isNil(_index))
              await this[`getVals${opt.reverse === true ? "Reverse" : ""}`](
                _node,
                vals,
                _index,
                opt,
                cache,
                null,
                stats
              );
            return vals;
          } else {
            return await this[`getVals${opt.reverse === true ? "Reverse" : ""}Cursor`](_node, vals, _index, opt, cache, null, stats);
          }
        }
        async searchByKey(key, stats) {
          const val = await this.data(key, void 0, stats);
          if (isNil(val.val))
            return [null, null, null];
          let node = await this.search(val, void 0, stats);
          if (isNil(node))
            return [val, null, null];
          return [
            val,
            ...await this.searchNode(node, key, val, true, void 0, stats)
          ];
        }
        async binarySearch(node, val, cache = {}, stats, reverse) {
          let left = 0;
          let right = node.vals.length - 1;
          while (left <= right) {
            let mid = Math.floor((left + right) / 2);
            let midval = await this.data(node.vals[mid], cache, stats);
            if (this.comp(midval, val, reverse) === 0) {
              return [mid, null, null];
            } else if (this.comp(midval, val, reverse) === 1) {
              left = mid + 1;
            } else {
              right = mid - 1;
            }
          }
          return [
            null,
            right >= 0 ? right : null,
            left < node.vals.length ? left : null
          ];
        }
        async searchNode(node, key, val, first = false, cache = {}, stats) {
          let start = 0;
          let greater = null;
          let smaller = null;
          if (first) {
            ;
            [start, smaller, greater] = await this.binarySearch(
              node,
              val,
              cache,
              stats
            );
          }
          let isPrev = start === 0;
          if (start === null)
            return [null, null];
          if (start > 0) {
            for (let i = start - 1; i >= 0; i--) {
              const v = node.vals[i];
              if (v === key)
                return [i, node];
              const _val = await this.data(v, cache, stats);
              if (this.comp(_val, val) === 1)
                break;
              if (i === 0)
                isPrev = true;
            }
          }
          for (let i = 0; i < node.vals.length; i++) {
            const v = node.vals[i];
            if (v === key)
              return [i, node];
            const _val = await this.data(v, cache, stats);
            if (this.comp(val, _val) === 1) {
              if (isPrev)
                break;
              return [null, null];
            }
          }
          return isPrev && !isNil(node.prev) ? await this.searchNode(
            await this.get(node.prev, stats),
            key,
            val,
            false,
            cache,
            stats
          ) : [null, null];
        }
        async rmIndex(val_index, child_index, node, stats) {
          node.vals.splice(val_index, 1);
          node.children.splice(child_index, 1);
          if (node.vals.length === 0 || !isNil(node.parent) && this.isUnder(node)) {
            if (!isNil(node.parent)) {
              let parent = await this.get(node.parent, stats);
              let index = indexOf(node.id, parent.children);
              let isMerged = false;
              const isPrev = index > 0;
              const isNext = index + 1 < parent.children.length;
              let prev = null;
              let next = null;
              if (isPrev) {
                prev = await this.get(parent.children[index - 1], stats);
                if (!this.isUnder(prev, -1)) {
                  node.vals.unshift(parent.vals[index - 1]);
                  node.children.unshift(prev.children.pop());
                  parent.vals[index - 1] = prev.vals.pop();
                  await this.putNode(node, stats);
                  await this.putNode(prev, stats);
                  await this.putNode(parent, stats);
                  let child = await this.get(node.children[0], stats);
                  child.parent = node.id;
                  await this.putNode(child, stats);
                  isMerged = true;
                }
              }
              if (!isMerged && isNext) {
                next = await this.get(parent.children[index + 1], stats);
                if (!this.isUnder(next, -1)) {
                  node.vals.push(parent.vals[index]);
                  node.children.push(next.children.shift());
                  parent.vals[index] = next.vals.shift();
                  await this.putNode(node, stats);
                  await this.putNode(next, stats);
                  await this.putNode(parent, stats);
                  let child = await this.get(last(node.children), stats);
                  child.parent = node.id;
                  await this.putNode(child, stats);
                  isMerged = true;
                }
              }
              if (!isMerged && isPrev) {
                if (!this.isOver(prev, node.vals.length + 1)) {
                  prev.children = concat(prev.children, node.children);
                  for (const c of node.children) {
                    let child = await this.get(c, stats);
                    child.parent = prev.id;
                    await this.putNode(child, stats);
                  }
                  prev.vals.push(parent.vals[index - 1]);
                  prev.vals = concat(prev.vals, node.vals);
                  prev.next = node.next || null;
                  if (!isNil(node.next)) {
                    let next2 = await this.get(node.next, stats);
                    next2.prev = node.prev || null;
                    await this.putNode(next2, stats);
                  }
                  await this.putNode(prev, stats);
                  await this.rmIndex(index - 1, index, parent, stats);
                  isMerged = true;
                }
              }
              if (!isMerged && isNext) {
                if (!this.isOver(next, node.vals.length + 1)) {
                  next.children = concat(node.children, next.children);
                  for (const c of node.children) {
                    let child = await this.get(c, stats);
                    child.parent = next.id;
                    await this.putNode(child, stats);
                  }
                  next.vals.unshift(parent.vals[index]);
                  next.vals = concat(node.vals, next.vals);
                  next.prev = node.prev || null;
                  if (!isNil(node.prev)) {
                    let prev2 = await this.get(node.prev, stats);
                    prev2.next = node.next || null;
                    await this.putNode(prev2, stats);
                  }
                  await this.putNode(next, stats);
                  await this.rmIndex(index, index, parent, stats);
                  isMerged = true;
                }
              }
            } else if (node.vals.length === 0) {
              let root = null;
              for (const c of node.children) {
                let child = await this.get(c, stats);
                child.parent = null;
                root = c;
                await this.putNode(child, stats);
              }
              if (await this.root(stats) === node.id) {
                this.setRoot(root, stats);
                this.del(node.id, stats);
              }
            }
          } else {
            await this.putNode(node, stats);
          }
        }
        async updateIndexes(index, node, val, changed, stats) {
          if (index === 0 && !isNil(node.parent)) {
            let parent = await this.get(node.parent, stats);
            if (isNil(parent))
              return;
            let parent_index = indexOf(node.id, parent.children);
            if (node.leaf) {
              if (node.vals.length > 0) {
                val = this.pick(await this.data(node.vals[0], void 0, stats));
              } else if (!isNil(node.next)) {
                let next = await this.get(node.next, stats);
                val = this.pick(await this.data(next.vals[0], void 0, stats));
              } else {
                return;
              }
            }
            if (equals(val, changed) && parent_index > 0) {
              parent.vals[parent_index - 1] = val;
              await this.putNode(parent, stats);
            } else if (val !== changed && parent_index > 0) {
              parent.vals[parent_index - 1] = val;
              await this.putNode(parent, stats);
            } else if (parent_index === 0) {
              await this.updateIndexes(0, parent, val, changed, stats);
            }
          }
        }
        async balance(val, child_index, node, stats) {
          let merge_node = node;
          let merge_child_index = child_index;
          if (this.isUnder(node)) {
            if (!isNil(node.parent)) {
              let parent = await this.get(node.parent, stats);
              let index = indexOf(node.id, parent.children);
              let isMerged = false;
              const isPrev = index > 0;
              const isNext = index + 1 < parent.children.length;
              let prev = null;
              let next = null;
              if (isPrev) {
                prev ??= await this.get(parent.children[index - 1], stats);
                if (!this.isUnder(prev, -1)) {
                  isMerged = true;
                  node.vals.unshift(prev.vals.pop());
                  parent.vals[index - 1] = this.pick(
                    await this.data(node.vals[0], void 0, stats)
                  );
                  await this.putNode(prev, stats);
                  await this.putNode(node, stats);
                }
              }
              if (!isMerged && isNext) {
                next ??= await this.get(parent.children[index + 1], stats);
                if (!this.isUnder(next, -1)) {
                  isMerged = true;
                  node.vals.push(next.vals.shift());
                  parent.vals[index] = this.pick(
                    await this.data(next.vals[0], void 0, stats)
                  );
                  await this.putNode(next, stats);
                  await this.putNode(node, stats);
                }
              }
              if (!isMerged && isPrev) {
                if (!this.isOver(prev, node.vals.length)) {
                  prev.vals = concat(prev.vals, node.vals);
                  prev.next = node.next ?? null;
                  if (!isNil(node.prev) && !isNil(node.next)) {
                    let next2 = await this.get(node.next, stats);
                    next2.prev = node.prev;
                    await this.putNode(next2, stats);
                  }
                  await this.putNode(prev, stats);
                  await this.rmIndex(index - 1, index, parent, stats);
                  await this.del(node.id, stats);
                  isMerged = true;
                }
              }
              if (!isMerged && isNext) {
                if (!this.isOver(next, node.vals.length)) {
                  next.vals = concat(node.vals, next.vals);
                  next.prev = node.prev ?? null;
                  if (!isNil(node.prev) && !isNil(node.next)) {
                    let prev2 = await this.get(node.prev, stats);
                    prev2.next = node.next;
                    await this.putNode(prev2, stats);
                  }
                  merge_node = next;
                  merge_child_index = 0;
                  await this.putNode(next, stats);
                  await this.rmIndex(index, index, parent, stats);
                  await this.del(node.id, stats);
                  isMerged = true;
                }
              }
              await this.putNode(parent, stats);
            } else if (node.vals.length === 0) {
              await this.setRoot(null, stats);
              await this.del(node.id, stats);
            }
          }
          await this.updateIndexes(merge_child_index, merge_node, null, val, stats);
        }
        async delete(key, skipPut = false) {
          let stats = {};
          let [val, index, node] = await this.searchByKey(key, stats);
          if (isNil(node))
            return;
          node.vals = without([key], node.vals);
          await this.putNode(node, stats);
          await this.delData(key, stats);
          await this.balance(val, index, node, stats);
          await this.commit(stats, skipPut);
        }
        async _insert(key, val, node, stats) {
          let index = 0;
          let exists = false;
          for (let v of node.vals) {
            if (this.comp(val, await this.data(v, void 0, stats)) >= 0) {
              node.vals.splice(index, 0, key);
              exists = true;
              break;
            }
            index += 1;
          }
          if (!exists)
            node.vals.push(key);
        }
        async insert(key, val, skipPut = false, signer) {
          let stats = {};
          await this.putData(key, val, stats, signer);
          let _val = { key, val };
          let node = await this.search(_val, void 0, stats);
          if (isNil(node)) {
            await this.init(key, stats);
          } else {
            await this._insert(key, _val, node, stats);
            await this.putNode(node, stats);
            if (this.isOver(node))
              await this.split(node, stats);
          }
          await this.commit(stats, skipPut);
        }
        async commit(stats, skipPut = false) {
          for (let k in stats) {
            const prefix = k.match(/^data\//) === null ? `${this.prefix}/` : "";
            if (stats[k]?.__del__) {
              if (!skipPut || k.match(/^data\//) === null) {
                await this.del(k, void 0, prefix);
              } else if (skipPut) {
                await this.del(k, void 0, prefix, true);
              }
            } else {
              if (!skipPut || k.match(/^data\//) === null) {
                await this.put(k, stats[k], void 0, prefix);
              } else if (skipPut) {
                await this.put(k, stats[k], void 0, prefix, true);
              }
            }
          }
          if (!isNil(this.onCommit))
            this.onCommit(stats);
        }
        async splitChildren(node, new_node, stats) {
          if (!node.leaf) {
            const childrens = splitAt(node.vals.length + 1, node.children);
            node.children = childrens[0];
            new_node.children = childrens[1];
            for (const v of childrens[1]) {
              let child = await this.get(v, stats);
              child.parent = new_node.id;
              await this.putNode(child, stats);
            }
          }
        }
        async _split(node, stats) {
          let nodes = splitAt(Math.ceil(node.vals.length / 2))(node.vals);
          node.vals = node.leaf ? nodes[0] : init(nodes[0]);
          let new_node = {
            leaf: node.leaf,
            id: await this.id(stats),
            vals: nodes[1],
            prev: node.id,
            next: node.next ?? null
          };
          if (!isNil(node.next)) {
            let next = await this.get(node.next, stats);
            next.prev = new_node.id;
            await this.putNode(next, stats);
          }
          node.next = new_node.id;
          const top = node.leaf ? nodes[1][0] : last(nodes[0]);
          await this.splitChildren(node, new_node, stats);
          return [node.leaf ? await this.data(top, void 0, stats) : top, new_node];
        }
        async getParent(node, new_node, top, stats) {
          const isNewParent = isNil(node.parent);
          let parent = !isNewParent ? await this.get(node.parent, stats) : {
            leaf: false,
            id: await this.id(stats),
            vals: [top],
            children: [node.id, new_node.id]
          };
          if (!isNewParent) {
            const ind = indexOf(node.id, parent.children);
            parent.vals.splice(ind, 0, top);
            parent.children.splice(ind + 1, 0, new_node.id);
          }
          return [isNewParent, parent];
        }
        pick(obj) {
          if (typeof this.sort_fields === "string") {
            return obj.val;
          } else {
            let _obj = {};
            for (let v of pluck(0)(this.sort_fields)) {
              _obj[v] = v === "__id__" ? obj.key : obj.val[v] ?? null;
            }
            return _obj;
          }
        }
        async split(node, stats) {
          let [top, new_node] = await this._split(node, stats);
          let [isNewParent, parent] = await this.getParent(
            node,
            new_node,
            node.leaf ? this.pick(top) : top,
            stats
          );
          new_node.parent = parent.id;
          node.parent = parent.id;
          await this.putNode(new_node, stats);
          await this.putNode(parent, stats);
          await this.putNode(node, stats);
          if (isNewParent)
            await this.setRoot(parent.id, stats);
          if (this.isOver(parent))
            await this.split(parent, stats);
        }
      };
      module.exports = BPT;
    }
  });

  // sdk/contracts/weavedb-bpt/lib/index.js
  var require_lib = __commonJS({
    "sdk/contracts/weavedb-bpt/lib/index.js"(exports, module) {
      var {
        reverse,
        sortBy,
        prop,
        init,
        path,
        last,
        append,
        includes,
        o,
        concat,
        intersection,
        keys,
        uniq,
        is,
        clone,
        compose,
        join,
        flatten,
        isNil,
        without,
        map,
        difference,
        tail,
        splitEvery,
        equals
      } = require_src();
      var { err } = require_utils();
      var BPT = require_BPT();
      var md5 = require_md5();
      var idsorter = ["__id__", "asc"];
      var order = 100;
      var _KV = (kvs, SW) => ({
        get: async (key) => typeof kvs[key] !== "undefined" ? kvs[key] : await SW.kv.get(key),
        put: async (key, val) => kvs[key] = val
      });
      var KV = class {
        constructor(prefix = "default", kvs) {
          this.kvs = kvs;
          this.prefix = prefix;
          this.store = {};
        }
        async get(key, _prefix = "") {
          const data = await this.kvs.get(`${this.prefix}/${_prefix}/${key}`) ?? null;
          if (!isNil(data))
            this.store[key] = data;
          return data;
        }
        async put(key, val, _prefix = "", nosave = false) {
          if (!nosave)
            await this.kvs.put(`${this.prefix}/${_prefix}/${key}`, val);
          this.store[key] = val;
        }
        async del(key, _prefix = "", nosave = false) {
          if (!nosave)
            await this.kvs.put(`${this.prefix}/${_prefix}/${key}`, null);
          delete this.store[key];
        }
      };
      var getIndexes = async (path2, kvs, SW) => {
        const kv = new KV(`${path2.join("/")}/`, _KV(kvs, SW));
        const _sort_fields = [idsorter];
        const prefix = `${compose(join("/"), flatten)(_sort_fields)}`;
        const idtree = new BPT(order, _sort_fields, kv, prefix);
        return await kv.get("indexes") || {};
      };
      var validateSortFields = (sort_fields) => {
        let i = 0;
        for (let v of sort_fields) {
          if (v[1] === "array") {
            if (i !== 0)
              return false;
          } else if (!includes(v[1], ["asc", "desc"])) {
            return false;
          }
          i++;
        }
        if (sort_fields.length === 0 || sort_fields.length === 1 && sort_fields[0][0].split(".").length < 2) {
          return false;
        }
        return true;
      };
      var addFields = (val, fields, path2, top = false) => {
        for (let k in val) {
          if (!top)
            fields.push(append(k, path2).join("."));
          if (is(Object, val[k]) && !is(Array, val[k])) {
            addFields(val[k], fields, append(k, path2));
          }
        }
      };
      var addIndex = async (sort_fields, path2, kvs, SW) => {
        sort_fields = map((v) => v.length > 1 ? v : append("asc", v))(sort_fields);
        if (!validateSortFields(sort_fields))
          return;
        const kv = new KV(`${path2.join("/")}/`, _KV(kvs, SW));
        const prefix = `${compose(join("/"), flatten)([idsorter])}`;
        const idtree = new BPT(order, [idsorter], kv, prefix);
        let __indexes = await kv.get("indexes") || {};
        const newIndex = map(join("/"))(sort_fields).join("/");
        if (!isNil(__indexes[newIndex]))
          return;
        let docs = await idtree.range();
        const i_fields = compose(
          without(["__id__"]),
          map((v) => v[0])
        )(sort_fields);
        if (sort_fields[0][1] === "array") {
          let array_indexes = {};
          let kvs2 = {};
          for (let _data of docs) {
            const fields = keys(_data.val);
            const diff = difference(i_fields, fields);
            if (i_fields.length > 0 && diff.length === 0 && is(Array, _data.val[i_fields[0]])) {
              for (const v of _data.val[i_fields[0]]) {
                const prefix2 = `${compose(join("/"), flatten)(tail(sort_fields))}`;
                const _md5 = md5(JSON.stringify(v));
                const _prefix = `${sort_fields[0][0]}/array:${_md5}`;
                const key = `${_prefix}/${prefix2}`;
                let _tree = null;
                const akey = `${sort_fields[0][0]}/array:${_md5}/${map(
                  (v2) => v2.join("/")
                )(tail(sort_fields)).join("/")}`;
                if (isNil(kvs2[_md5])) {
                  array_indexes[_md5] = { order, key: akey };
                  _tree = new BPT(order, [...tail(sort_fields), idsorter], kv, key);
                } else {
                  _tree = kvs2[_md5];
                }
                await _tree.insert(_data.key, _data.val, true);
              }
            }
          }
          __indexes[newIndex] = {
            key: newIndex,
            items: array_indexes
          };
        } else {
          __indexes[newIndex] = { order, key: newIndex };
          const prefix2 = `${compose(join("/"), flatten)(sort_fields)}`;
          const tree = new BPT(order, [...sort_fields, idsorter], kv, prefix2);
          for (let _data of docs) {
            let fields = keys(_data.val);
            addFields(_data.val, fields, [], true);
            const diff = difference(i_fields, fields);
            if (i_fields.length > 0 && diff.length === 0) {
              await tree.insert(_data.key, _data.val, true);
            }
          }
        }
        await kv.put("indexes", __indexes);
      };
      var removeIndex = async (sort_fields, path2, kvs, SW) => {
        sort_fields = map((v) => v.length > 1 ? v : append("asc", v))(sort_fields);
        if (!validateSortFields(sort_fields))
          return;
        const kv = new KV(`${path2.join("/")}/`, _KV(kvs, SW));
        const prefix = `${compose(join("/"), flatten)([idsorter])}`;
        const idtree = new BPT(order, [idsorter], kv, prefix);
        let __indexes = await kv.get("indexes") || {};
        const newIndex = map(join("/"))(sort_fields).join("/");
        if (isNil(__indexes[newIndex]))
          return;
        let docs = await idtree.range();
        const i_fields = compose(
          without(["__id__"]),
          map((v) => v[0])
        )(sort_fields);
        if (sort_fields[0][1] === "array") {
          let array_indexes = {};
          let kvs2 = {};
          for (let _data of docs) {
            const fields = keys(_data.val);
            const diff = difference(i_fields, fields);
            if (i_fields.length > 0 && diff.length === 0 && is(Array, _data.val[i_fields[0]])) {
              for (const v of _data.val[i_fields[0]]) {
                const prefix2 = `${compose(join("/"), flatten)(tail(sort_fields))}`;
                const _md5 = md5(JSON.stringify(v));
                const _prefix = `${sort_fields[0][0]}/array:${_md5}`;
                const key = `${_prefix}/${prefix2}`;
                let _tree = null;
                const akey = `${sort_fields[0][0]}/array:${_md5}/${map(
                  (v2) => v2.join(":")
                )(tail(sort_fields)).join("/")}`;
                if (isNil(kvs2[_md5])) {
                  array_indexes[_md5] = { order, key: akey };
                  _tree = new BPT(order, [...tail(sort_fields), idsorter], kv, key);
                } else {
                  _tree = kvs2[_md5];
                }
                await _tree.delete(_data.key, true);
              }
            }
          }
        } else {
          const prefix2 = `${compose(join("/"), flatten)(sort_fields)}`;
          const tree = new BPT(order, [...sort_fields, idsorter], kv, prefix2);
          for (let _data of docs) {
            let fields = keys(_data.val);
            addFields(_data.val, fields, [], true);
            const diff = difference(i_fields, fields);
            if (i_fields.length > 0 && diff.length === 0) {
              await tree.delete(_data.key, true);
            }
          }
        }
        delete __indexes[newIndex];
        await kv.put("indexes", __indexes);
      };
      var del = async (id, path2, kvs, SW) => {
        const kv = new KV(`${path2.join("/")}/`, _KV(kvs, SW));
        const sort_fields = [idsorter];
        const prefix = `${compose(join("/"), flatten)(sort_fields)}`;
        const idtree = new BPT(order, [...sort_fields, idsorter], kv, prefix);
        const __data = await idtree.data(id);
        const _data = __data.val;
        const indexes = await kv.get("indexes") || {};
        for (const k in indexes) {
          const fields = keys(_data);
          const sp = splitEvery(2, k.split("/"));
          const i_fields = compose(
            without(["__id__"]),
            map((v) => v[0]),
            splitEvery(2)
          )(k.split("/"));
          const diff = difference(i_fields, fields);
          if (i_fields.length > 0 && diff.length === 0) {
            if (sp[0][1] === "array") {
              if (is(Array, _data[sp[0][0]])) {
                for (let v of _data[sp[0][0]]) {
                  const _md5 = md5(JSON.stringify(v));
                  const sort_fields2 = splitEvery(2, k.split("/"));
                  let akey = `${sort_fields2[0][0]}/array:${_md5}`;
                  if (sort_fields2.length > 1) {
                    akey += `/${map((v2) => v2.join("/"))(tail(sort_fields2)).join("/")}`;
                  }
                  if (isNil(indexes[k].items[_md5]))
                    continue;
                  const ar = sort_fields2[0];
                  let prefix2 = `${ar[0]}/array:${_md5}`;
                  const _sort_fields = sort_fields2.length === 1 ? [idsorter] : tail(sort_fields2);
                  if (sort_fields2.length > 1) {
                    prefix2 += "/" + compose(join("/"), flatten)(tail(sort_fields2));
                  }
                  const tree = new BPT(order, [..._sort_fields, idsorter], kv, prefix2);
                  await tree.delete(id, true);
                }
              }
            } else {
              const sort_fields2 = splitEvery(2, k.split("/"));
              const prefix2 = `${compose(join("/"), flatten)(sort_fields2)}`;
              const tree = new BPT(order, [...sort_fields2, idsorter], kv, prefix2);
              await tree.delete(id, true);
            }
          }
        }
        await idtree.delete(id);
        return { before: __data, after: { key: id, val: null, setter: null } };
      };
      var mod = (prev, next) => {
        let dels = [];
        let changes = [];
        let news = [];
        prev ??= {};
        next ??= {};
        const _keys = compose(uniq, flatten, map(keys))([prev, next]);
        for (const k of _keys) {
          if (!equals(prev[k], next[k])) {
            if (isNil(prev[k])) {
              news.push(k);
              if (is(Array, next[k])) {
                for (let v of next[k]) {
                  news.push(`${k}/array:${md5(JSON.stringify(v))}`);
                }
              }
            } else if (isNil(next[k])) {
              dels.push(k);
              if (is(Array, prev[k])) {
                for (let v of prev[k]) {
                  dels.push(`${k}/array:${md5(JSON.stringify(v))}`);
                }
              }
            } else {
              changes.push(k);
              if (is(Array, prev[k]) && is(Array, next[k])) {
                const _news = o(uniq, difference(next[k]))(prev[k]);
                const _dels = o(uniq, difference(prev[k]))(next[k]);
                for (let v of _news) {
                  news.push(`${k}/array:${md5(JSON.stringify(v))}`);
                }
                for (let v of _dels) {
                  dels.push(`${k}/array:${md5(JSON.stringify(v))}`);
                }
              } else if (is(Array, prev[k])) {
                for (let v of uniq(prev[k])) {
                  dels.push(`${k}/array:${md5(JSON.stringify(v))}`);
                }
              } else if (is(Array, next[k])) {
                for (let v of uniq(next[k])) {
                  news.push(`${k}/array:${md5(JSON.stringify(v))}`);
                }
              }
            }
          }
        }
        return { dels, changes, news };
      };
      var _update = async (data, id, old_data, idtree, kv, SW, signer) => {
        let { dels, changes, news } = mod(old_data.val, data);
        const indexes = await kv.get("indexes") || {};
        let _indexes = clone(indexes);
        let newkeys = {};
        for (const k of dels) {
          const sp = k.split("/");
          const isArray = sp[1]?.split(":")[0] === "array";
          const key = isArray ? k : `${k}/asc`;
          const prefix = isArray ? `${sp[0]}/${sp[1]}` : `${k}/asc`;
          newkeys[key] = true;
          const sort_fields = isArray ? [idsorter] : [[k, "asc"], idsorter];
          const _tree = new BPT(order, sort_fields, kv, prefix);
          await _tree.delete(id, true);
        }
        for (const k of news) {
          const sp = k.split("/");
          const isArray = sp[1]?.split(":")[0] === "array";
          const key = isArray ? k : `${k}/asc`;
          let prefix = isArray ? `${sp[0]}/${sp[1]}` : `${k}/asc`;
          newkeys[key] = true;
          if (isArray) {
            const akey = `${sp[0]}/array`;
            const item = sp[1].split(":")[1] ?? null;
            if (isNil(_indexes[akey]))
              _indexes[akey] = { key: akey, items: {} };
            if (!isNil(item) && isNil(_indexes[akey].items[item])) {
              _indexes[akey].items[item] = { key, order };
            }
            const sort_fields = splitEvery(2, k.split("/"));
            let _sort_fields = sort_fields.length === 1 ? [idsorter] : [...tail(sort_fields), idsorter];
            if (sort_fields.length > 1) {
              prefix += "/" + compose(join("/"), flatten)(tail(sort_fields));
            }
            const _tree = new BPT(order, sort_fields, kv, prefix);
            await _tree.insert(id, data, true);
          } else {
            if (isNil(_indexes[key]))
              _indexes[key] = { order, key };
            const sort_fields = [[k, "asc"], idsorter];
            const _tree = new BPT(order, sort_fields, kv, prefix);
            await _tree.insert(id, data, true);
          }
        }
        await kv.put("indexes", _indexes);
        let fields = keys(data);
        addFields(data, fields, [], true);
        let old_fields = keys(old_data.val);
        addFields(old_data.val, old_fields, [], true);
        for (const k in _indexes) {
          if (isNil(newkeys[k])) {
            const sort_fields = splitEvery(2, k.split("/"));
            const i_fields = compose(
              without(["__id__"]),
              map((v) => v[0]),
              splitEvery(2)
            )(k.split("/"));
            if (i_fields.length > 0) {
              if (sort_fields[0][1] === "array") {
                const arr_name = sort_fields[0][0];
                const new_arr_vals = is(Array, data[arr_name]) ? compose(
                  uniq,
                  map((v) => md5(JSON.stringify(v)))
                )(data[arr_name]) : [];
                const old_arr_vals = is(Array, old_data.val[arr_name]) ? compose(
                  uniq,
                  map((v) => md5(JSON.stringify(v)))
                )(old_data.val[arr_name]) : [];
                const val_added = difference(new_arr_vals, old_arr_vals);
                const val_removed = difference(old_arr_vals, new_arr_vals);
                const val_unchanged = intersection(old_arr_vals, new_arr_vals);
                const _fields = without([arr_name])(fields);
                const _old_fields = without([arr_name])(old_fields);
                const _i_fields = without([arr_name])(i_fields);
                const diff2 = difference(_i_fields, _fields);
                const old_diff2 = difference(_i_fields, _old_fields);
                if (diff2.length === 0 || old_diff2.length === 0) {
                  let isAdd = false;
                  let isDel = false;
                  if (intersection(_i_fields, news).length > 0)
                    isAdd = true;
                  if (intersection(_i_fields, changes).length > 0) {
                    isDel = true;
                    isAdd = true;
                  }
                  if (intersection(_i_fields, dels).length > 0) {
                    isDel = true;
                    isAdd = false;
                  }
                  const isChange = isAdd && isDel ? "change" : isAdd ? "add" : isDel ? "del" : "same";
                  let _add = [];
                  let _del = [];
                  let _change = [];
                  for (let v of val_added)
                    _add.push(v);
                  for (let v of val_removed)
                    _del.push(v);
                  for (let v of val_unchanged) {
                    if (isChange === "add") {
                      _add.push(v);
                    } else if (isChange === "del") {
                      _del.push(v);
                    } else if (isChange === "change") {
                      _change.push(v);
                    }
                  }
                  const sort_tail = map(join("/"))(tail(sort_fields)).join("/");
                  const getKey = (v) => `${arr_name}/array:${v}/${sort_tail}`;
                  const getPrefix = (v) => `${arr_name}/array:${v}/${compose(
                    join("/"),
                    flatten
                  )(tail(sort_fields))}`;
                  const ins = async (tree) => await tree.insert(id, data, true);
                  const del2 = async (tree) => await tree.delete(id, true);
                  const getTree = (v) => new BPT(order, [...tail(sort_fields), idsorter], kv, getPrefix(v));
                  for (let v of _add) {
                    const akey = getKey(v);
                    await ins(getTree(v));
                    if (isNil(_indexes[k].items[v])) {
                      _indexes[k].items[v] = { key: akey, order };
                    }
                  }
                  for (let v of _del)
                    await del2(getTree(v));
                  for (let v of _change) {
                    const _tree = getTree(v);
                    await del2(_tree);
                    await ins(_tree);
                  }
                }
              }
              const diff = difference(i_fields, fields);
              const old_diff = difference(i_fields, old_fields);
              if (diff.length === 0 || old_diff.length === 0) {
                let isAdd = false;
                let isDel = false;
                if (intersection(i_fields, news).length > 0)
                  isAdd = true;
                if (intersection(i_fields, changes).length > 0) {
                  isDel = true;
                  isAdd = true;
                }
                if (intersection(i_fields, dels).length > 0) {
                  isDel = true;
                  isAdd = false;
                }
                for (let v of i_fields) {
                  const sp = v.split(".");
                  if (sp.length > 1) {
                    let ndata = path(sp, data);
                    let odata = path(sp, old_data.val);
                    if (!equals(ndata, odata)) {
                      if (!isNil(odata))
                        isDel = true;
                      if (!isNil(ndata))
                        isAdd = true;
                      break;
                    }
                  }
                }
                if (isDel) {
                  const prefix = `${compose(join("/"), flatten)(sort_fields)}`;
                  const tree = new BPT(order, [...sort_fields, idsorter], kv, prefix);
                  await tree.delete(id, true);
                }
                if (isAdd) {
                  const sort_fields2 = splitEvery(2, k.split("/"));
                  const prefix = `${compose(join("/"), flatten)(sort_fields2)}`;
                  const tree = new BPT(order, [...sort_fields2, idsorter], kv, prefix);
                  await tree.insert(id, data, true);
                }
              }
            }
          }
        }
        await idtree.putData(id, data, void 0, signer);
        return { before: old_data, after: { key: id, val: data, setter: signer } };
      };
      var put = async (_data, id, path2, kvs, SW, signer, create = false) => {
        const kv = new KV(`${path2.join("/")}/`, _KV(kvs, SW));
        const prefix = `${compose(join("/"), flatten)([idsorter])}`;
        const idtree = new BPT(order, [idsorter], kv, prefix);
        let old_data = await idtree.data(id);
        if (!isNil(old_data?.val)) {
          if (create) {
            await del(id, path2, kvs, SW);
          } else {
            return await _update(_data, id, old_data, idtree, kv, SW, signer);
          }
        }
        await idtree.insert(id, _data, false, signer);
        const indexes = await kv.get("indexes") || {};
        let _indexes = clone(indexes);
        let idkey = "__id__/asc";
        if (isNil(_indexes[idkey])) {
          _indexes[idkey] = { order, key: idkey };
        }
        for (const k in _data) {
          const key = `${k}/asc`;
          if (isNil(indexes[key]))
            _indexes[key] = { order, key };
          const _tree = new BPT(order, [[k, "asc"], idsorter], kv, key);
          await _tree.insert(id, _data, true);
          if (is(Array, _data[k])) {
            for (let v of uniq(_data[k])) {
              const _prefix = `${k}/array`;
              const _md5 = md5(JSON.stringify(v));
              const key2 = `${_prefix}:${_md5}`;
              if (isNil(_indexes[_prefix]))
                _indexes[_prefix] = { key: _prefix, items: {} };
              if (isNil(_indexes[_prefix].items[_md5])) {
                _indexes[_prefix].items[_md5] = { order, key: key2 };
              }
              const _tree2 = new BPT(
                order,
                [idsorter],
                kv,
                `${k}/array:${md5(JSON.stringify(v))}`,
                function(stats) {
                }
              );
              await _tree2.insert(id, _data, true);
            }
          }
        }
        const fields = keys(_data);
        addFields(_data, fields, [], true);
        for (const k in indexes) {
          const i_fields = compose(
            without(["__id__"]),
            map((v) => v[0]),
            splitEvery(2)
          )(k.split("/"));
          const diff = difference(i_fields, fields);
          const isValid = i_fields.length > 1 || i_fields.length === 1 && i_fields[0].split(".").length > 1;
          if (isValid && diff.length === 0) {
            const sort_fields = splitEvery(2, k.split("/"));
            if (sort_fields[0][1] === "array") {
              if (!is(Array, _data[sort_fields[0][0]]))
                continue;
              for (let v of _data[sort_fields[0][0]]) {
                const prefix2 = `${compose(join("/"), flatten)(tail(sort_fields))}`;
                const _md5 = md5(JSON.stringify(v));
                const _prefix = `${sort_fields[0][0]}/array:${_md5}`;
                const key = `${_prefix}/${prefix2}`;
                const akey = `${sort_fields[0][0]}/array:${_md5}/${map(
                  (v2) => v2.join("/")
                )(tail(sort_fields)).join("/")}`;
                const _tree = new BPT(
                  order,
                  [...tail(sort_fields), idsorter],
                  kv,
                  key
                );
                if (isNil(_indexes[k].items[_md5])) {
                  _indexes[k].items[_md5] = { order, key: akey };
                }
                await _tree.insert(id, _data, true);
              }
            } else {
              const prefix2 = `${compose(join("/"), flatten)(sort_fields)}`;
              const tree = new BPT(order, [...sort_fields, idsorter], kv, prefix2);
              await tree.insert(id, _data, true);
            }
          }
        }
        await kv.put("indexes", _indexes);
        return { before: old_data, after: { key: id, val: _data, setter: signer } };
      };
      var pranges = async (_ranges, limit, kvs, SW, sortByTail = false, cur = {}) => {
        let curs = [];
        let res = [];
        for (let v of _ranges) {
          if (!isArrayIndex(v.prefix) && isNil(v.prefix) && v.sort.length === 1 && v.sort[0][1] === "desc") {
            v.sort[0][1] = "asc";
            v.opt ??= {};
            v.opt.reverse = true;
          }
          delete v.opt.limit;
          const kv = new KV(`${v.path.join("/")}/`, _KV(kvs, SW));
          let prefix = v.prefix ?? "";
          let suffix = `${compose(
            join("/"),
            flatten
          )(v.sort.length === 0 && prefix === "" ? [idsorter] : v.sort)}`;
          if (prefix !== "" && suffix !== "")
            suffix = `/${suffix}`;
          prefix += suffix;
          await checkIndex(prefix, v.path, kvs, SW);
          const tree = new BPT(order, [...v.sort, idsorter], kv, prefix);
          modOpt(v.opt, cur, tree);
          const _cur = { val: null, tree, cur: await tree.range(v.opt, true) };
          curs.push(_cur);
        }
        const comp = curs[0].tree.comp.bind(curs[0].tree);
        let sorter = curs[0].tree.sort_fields;
        if (!equals(last(sorter), idsorter))
          sorter.push(idsorter);
        if (sortByTail)
          sorter = tail(sorter);
        while (curs.length > 0) {
          const val = await curs[0].cur();
          curs[0].val = val;
          const cur2 = curs.shift();
          if (!isNil(val)) {
            let pushed2 = false;
            for (let i = res.length - 1; i >= 0; i--) {
              const _comp = comp(val, res[i], false, sorter);
              if (_comp === 0) {
                pushed2 = true;
                break;
              } else if (_comp < 0) {
                res.splice(i + 1, 0, val);
                pushed2 = true;
                break;
              }
            }
            if (!pushed2)
              res.unshift(val);
            const border = isNil(limit) ? null : res[limit - 1] || null;
            if (isNil(border) || comp(border, val) < 0) {
              let i = 0;
              let pushed = false;
              for (const v of curs) {
                if (!isNil(v.val)) {
                  if (comp(val, v.val, false, sorter) >= 0) {
                    curs.splice(i, 0, cur2);
                    pushed = true;
                    break;
                  }
                }
                i++;
              }
              if (!pushed)
                curs.push(cur2);
            }
          }
        }
        return isNil(limit) ? res : res.slice(0, limit);
      };
      var ranges = async (_ranges, limit, path2, kvs, SW, cur = {}) => {
        let res = [];
        let count = 0;
        let __ranges = _ranges;
        if (_ranges[0].sort.length === 1 && _ranges[0].sort[0][1] === "desc") {
          if (cur.sortRange) {
            __ranges = reverse(__ranges);
            for (let v of __ranges) {
              let new_range = {};
              if (!isNil(v.startAt)) {
                new_range["endAt"] = v.startAt;
                delete v.startAt;
              }
              if (!isNil(v.endAt)) {
                new_range["startAt"] = v.endAt;
                delete v.endAt;
              }
              if (!isNil(v.startAfter)) {
                new_range["endBefore"] = v.startAfter;
                delete v.startAfter;
              }
              if (!isNil(v.endBefore)) {
                new_range["startAfter"] = v.endBefore;
                delete v.endBefore;
              }
              for (let k in new_range) {
                v[k] = new_range[k];
              }
            }
          }
        }
        for (let v of __ranges) {
          if (!isNil(limit)) {
            v.opt ??= {};
            v.opt.limit = limit - count;
          }
          res = concat(res, await range(v.sort, v.opt, path2, kvs, SW, false, "", cur));
          count += res.length;
          if (!isNil(limit) && count >= limit)
            break;
        }
        return res;
      };
      var checkIndex = async (prefix, path2, kvs, SW) => {
        const indexes = await getIndexes(path2, kvs, SW);
        const sort_fields = compose(
          map((v) => {
            return [v[0], (v[1] || "asc").split(":")[0]];
          }),
          splitEvery(2)
        )(prefix.split("/"));
        const key = compose(join("/"), flatten)(sort_fields);
        if ((sort_fields.length > 1 || sort_fields[0][0].split(".").length > 1) && isNil(indexes[key])) {
          err(`missing index ${JSON.stringify(sort_fields)}`);
        }
      };
      var modOpt = (opt, cur = {}, tree) => {
        let reversed = {};
        if (opt.reverse) {
          let new_range = {};
          if (cur.reverse.start) {
            if (!isNil(opt.startAt)) {
              new_range.endAt = opt.startAt;
              delete opt.startAt;
              reversed.start = true;
            } else if (!isNil(opt.startAfter)) {
              new_range.endBefore = opt.startAfter;
              delete opt.startAfter;
              reversed.start = true;
            }
          }
          if (cur.reverse.end) {
            if (!isNil(opt.endAt)) {
              new_range.startAt = opt.endAt;
              delete opt.endAt;
              reversed.end = true;
            } else if (!isNil(opt.endBefore)) {
              new_range.startAfter = opt.endBefore;
              delete opt.endBefore;
              reversed.end = true;
            }
          }
          for (let k in new_range) {
            opt[k] = new_range[k];
          }
        }
        if (!isNil(cur.start)) {
          if (!isNil(opt.startAt)) {
            const comp = tree.comp(
              { key: cur.start[1].id, val: cur.start[1].data },
              { val: opt.startAt },
              opt.reverse,
              init(tree.sort_fields)
            );
            if (reversed.end && comp >= 0 || reversed.end !== true && comp <= 0) {
              delete opt.startAt;
              opt[cur.start[0]] = cur.start[1].data;
            }
          } else if (!isNil(opt.startAfter)) {
            const comp = tree.comp(
              { key: cur.start[1].id, val: cur.start[1].data },
              { val: opt.startAfter },
              opt.reverse,
              init(tree.sort_fields)
            );
            if (cur.start[0] === "startAt") {
              if (reversed.end && comp > 0 || reversed.end !== true && comp < 0) {
                delete opt.startAfter;
                opt[cur.start[0]] = cur.start[1].data;
              }
            } else {
              if (reversed.end && comp >= 0 || reversed.end !== true && comp <= 0) {
                opt.startAfter = cur.start[1].data;
              }
            }
          } else {
            opt[cur.start[0]] = cur.start[1].data;
          }
        }
        if (!isNil(cur.end)) {
          if (!isNil(opt.endAt)) {
            const comp = tree.comp(
              { key: cur.end[1].id, val: cur.end[1].data },
              { val: opt.endAt },
              opt.reverse,
              init(tree.sort_fields)
            );
            if (reversed.start && comp <= 0 || reversed.start !== true && comp >= 0) {
              delete opt.endAt;
              opt[cur.end[0]] = cur.end[1].data;
            }
          } else if (!isNil(opt.endBefore)) {
            const comp = tree.comp(
              { key: cur.end[1].id, val: cur.end[1].data },
              { val: opt.endBefore },
              opt.reverse,
              init(tree.sort_fields)
            );
            if (cur.end[0] === "endAt") {
              if (reversed.start && comp < 0 || reversed.start !== true && comp > 0) {
                delete opt.endBefore;
                opt[cur.end[0]] = cur.end[1].data;
              }
            } else {
              if (reversed.start && comp <= 0 || reversed.start !== true && comp >= 0) {
                opt.endBefore = cur.end[1].data;
              }
            }
          } else {
            opt[cur.end[0]] = cur.end[1].data;
          }
        }
        return opt;
      };
      var isArrayIndex = (prefix) => prefix?.split("/")[1]?.split(":")[0] === "array";
      var range = async (sort_fields, opt = {}, path2, kvs, SW, cursor = false, _prefix = "", cur = {}) => {
        const kv = new KV(`${path2.join("/")}/`, _KV(kvs, SW));
        if (!isArrayIndex(_prefix) && sort_fields.length === 1 && sort_fields[0][1] === "desc") {
          sort_fields[0][1] = "asc";
          opt.reverse = true;
        }
        const prefix = `${_prefix}${_prefix === "" || sort_fields.length === 0 ? "" : "/"}${compose(
          join("/"),
          flatten
        )(sort_fields.length === 0 && _prefix === "" ? [idsorter] : sort_fields)}`;
        await checkIndex(prefix, path2, kvs, SW);
        const tree = new BPT(order, [...sort_fields, idsorter], kv, prefix);
        const _opt = modOpt(clone(opt), cur, tree);
        return await tree.range(_opt, cursor);
      };
      var get = async (id, path2, kvs, SW) => {
        const kv = new KV(`${path2.join("/")}/`, _KV(kvs, SW));
        const prefix = `${compose(join("/"), flatten)([idsorter])}`;
        const tree = new BPT(order, [idsorter], kv, prefix);
        return await tree.data(id);
      };
      module.exports = {
        put,
        range,
        get,
        del,
        addIndex,
        getIndexes,
        removeIndex,
        mod,
        ranges,
        pranges
      };
    }
  });

  // sdk/contracts/weavedb-bpt/lib/jsonschema.js
  var require_jsonschema = __commonJS({
    "sdk/contracts/weavedb-bpt/lib/jsonschema.js"(exports, module) {
      var { read } = require_utils_common();
      module.exports = {
        validate: async (data, schema, state, SmartWeave2) => {
          let valid = false;
          let error = false;
          try {
            ;
            ({ valid, error } = await read(
              state.contracts.jsonschema,
              {
                function: "validate",
                data,
                schema
              },
              SmartWeave2
            ));
          } catch (e) {
            error = true;
          }
          return { error, valid };
        }
      };
    }
  });

  // sdk/contracts/weavedb-bpt/lib/utils.js
  var require_utils = __commonJS({
    "sdk/contracts/weavedb-bpt/lib/utils.js"(exports, module) {
      var fpjson = require_cjs();
      fpjson = fpjson.default || fpjson;
      var md5 = require_md5();
      var {
        of,
        mergeLeft,
        keys,
        symmetricDifference,
        uniq,
        sortBy,
        identity,
        reverse,
        indexOf,
        prop,
        assoc,
        tail,
        pluck,
        map,
        toString,
        splitWhen,
        complement,
        init,
        is,
        isNil,
        slice,
        includes,
        last,
        intersection,
        append,
        difference,
        path: _path,
        concat,
        without
      } = require_src();
      var {
        err,
        read,
        parse: _parse,
        genId,
        getField,
        mergeDataP
      } = require_utils_common();
      var {
        fpj,
        ac_funcs,
        clone,
        isValidName,
        isValidDocName,
        setElm,
        parse: __parse
      } = require_pure();
      var fn = require_fn();
      var { get: _get } = require_lib();
      var { validate } = require_jsonschema();
      var isEvolving = (state) => !isNil(state.evolveHistory) && !isNil(last(state.evolveHistory)) && isNil(last(state.evolveHistory).newVersion);
      var getCol = async (data, path, _signer, SmartWeave2, current_path = [], kvs, state) => await _getCol(path, _signer, SmartWeave2, current_path = [], kvs, state);
      var _getCol = async (path, _signer, SmartWeave2, current_path = [], kvs, state) => {
        const [col, id] = path;
        if (!isValidName(col, state))
          err(`collection id is not valid: ${col}`);
        let key = `data.${append(col)(current_path).join("/")}`;
        let data = await kv(kvs, SmartWeave2).get(`data.${current_path.join("/")}`) ?? {};
        if (isNil(data[col])) {
          await addNewCol(col, current_path, data, kvs, state, SmartWeave2);
        }
        let _data = await kv(kvs, SmartWeave2).get(key);
        if (isNil(_data)) {
          _data = { __docs: {} };
          await kv(kvs, SmartWeave2).put(key, _data);
        }
        if (isNil(id)) {
          return _data;
        } else {
          if (!isValidDocName(id, state))
            err(`doc id is not valid: ${id}`);
          current_path.push(col);
          current_path.push(id);
          return await _getCol(
            slice(2, path.length, path),
            _signer,
            SmartWeave2,
            current_path,
            kvs,
            state
          );
        }
      };
      var validateData = async ({
        func,
        secure,
        rules,
        doc,
        SmartWeave: SmartWeave2,
        state,
        action,
        _signer,
        relayer,
        jobID,
        extra,
        new_data,
        next_data,
        path,
        get,
        kvs
      }) => {
        if (!isNil(func)) {
          let [_func, ..._method] = func.split(":");
          _method = _method.join(":");
          if (includes(_func)(["set", "add", "update", "upsert", "delete"]) && (secure || !isNil(rules))) {
            let op = _func;
            if (includes(op)(["set", "add"]))
              op = "create";
            if (op === "create" && !isNil(doc.__data))
              op = "update";
            if (op === "upsert") {
              if (!isNil(doc.__data)) {
                op = "update";
              } else {
                op = "create";
              }
            }
            let allowed = false;
            let rule_data = {
              contract: {
                id: SmartWeave2.contract.id,
                version: state.version,
                owners: is(Array, state.owner) ? state.owner : [state.owner]
              },
              request: {
                caller: action.caller,
                func: _func,
                op,
                method: _method === "" ? op : _method,
                auth: { signer: _signer, relayer, jobID, extra },
                block: {
                  height: SmartWeave2.block.height,
                  timestamp: SmartWeave2.block.timestamp
                },
                transaction: {
                  id: SmartWeave2.transaction.id,
                  timestamp: action.timestamp ?? SmartWeave2.transaction.timestamp ?? SmartWeave2.block.timestamp * 1e3
                },
                resource: { data: new_data },
                id: last(path),
                path
              },
              resource: {
                data: doc.__data,
                setter: doc.setter,
                newData: next_data,
                id: last(path),
                path
              }
            };
            rule_data.signer = rule_data.request.auth.signer;
            rule_data.id = rule_data.request.id;
            rule_data.ts = rule_data.request.block.timestamp;
            rule_data.ms = rule_data.request.transaction.timestamp;
            rule_data.new = rule_data.resource.newData;
            rule_data.old = rule_data.resource.data;
            rule_data.req = rule_data.request.resource.data;
            const isAllowed = (_ops, request) => {
              if (_ops === "*")
                return true;
              const ops = _ops.split(",");
              let methods = uniq([
                "write",
                request.op,
                request.func,
                request.method,
                `${request.func}:${request.method}`,
                `${request.op}:${request.method}`,
                `write:${request.method}`
              ]);
              return intersection(ops)(methods).length > 0;
            };
            const _fn = {
              hash: fn.hash,
              toBase64: fn.toBase64,
              parse: fn.parse,
              stringify: fn.stringify,
              get: async (query) => {
                const val = (await get(
                  state,
                  {
                    input: {
                      function: "get",
                      query
                    }
                  },
                  void 0,
                  SmartWeave2,
                  kvs
                ))?.result ?? null;
                return [val, false];
              }
            };
            if (!isNil(rules)) {
              for (const v of rules || []) {
                if (isAllowed(v[0], rule_data.request)) {
                  await fpj(v[1], rule_data, { ..._fn, ...ac_funcs });
                }
              }
              allowed = rule_data.request.allow === true;
            }
            if (!allowed)
              err("operation not allowed");
            return rule_data.resource.newData;
          } else {
            return next_data;
          }
        }
      };
      var getDoc = async (data, path, _signer, func, new_data, secure = false, relayer, jobID, extra, state, action, SmartWeave2, current_path = [], kvs, get, type, _func) => {
        return await _getDoc(
          null,
          path,
          _signer,
          func,
          new_data,
          secure,
          relayer,
          jobID,
          extra,
          state,
          action,
          SmartWeave2,
          current_path,
          kvs,
          void 0,
          get,
          type,
          _func
        );
      };
      var addNewCol = async (_col, current_path, data, kvs, state, SmartWeave2) => {
        const full_path = append(_col, current_path).join("/");
        state.collections ??= {};
        state.collection_count ??= 0;
        state.collections[full_path] = { id: state.collection_count++, count: 0 };
        data[_col] = true;
        await kv(kvs, SmartWeave2).put(`data.${current_path.join("/")}`, data);
      };
      var _getDoc = async (data, path, _signer, func, new_data, secure = false, relayer, jobID, extra, state, action, SmartWeave2, current_path = [], kvs, doc, get, type, _func) => {
        data = await kv(kvs, SmartWeave2).get(`data.${current_path.join("/")}`) || {};
        const [_col, id] = path;
        if (!isValidName(_col, state))
          err(`collection id is not valid: ${_col}`);
        if (!isValidDocName(id, state))
          err(`doc id is not valid: ${id}`);
        if (isNil(data[_col])) {
          await addNewCol(_col, current_path, data, kvs, state, SmartWeave2);
        }
        current_path.push(_col);
        current_path.push(id);
        const col_key = `data.${current_path.slice(0, -1).join("/")}`;
        const doc_key = `data.${current_path.join("/")}`;
        const col = await kv(kvs, SmartWeave2).get(col_key) || { __docs: {} };
        const { rules, schema } = col;
        if (isNil(doc)) {
          doc = await _get(last(path), init(path), kvs, SmartWeave2);
          doc.__data = doc.val;
          doc.subs = {};
          delete doc.val;
        }
        if (!isNil(_signer) && isNil(doc.setter))
          doc.setter = _signer;
        let next_data = null;
        if (path.length === 2) {
          if (includes(func)(["set", "add"])) {
            next_data = (await mergeDataP(
              clone(doc),
              new_data,
              extra,
              true,
              _signer,
              SmartWeave2,
              action,
              state
            )).__data;
          } else if (includes(func)(["update", "upsert"])) {
            next_data = (await mergeDataP(
              clone(doc),
              new_data,
              extra,
              false,
              _signer,
              SmartWeave2,
              action,
              state
            )).__data;
          }
        }
        if (type !== "cron") {
          await validateData({
            func: _func,
            secure,
            rules,
            doc,
            SmartWeave: SmartWeave2,
            state,
            action,
            _signer,
            relayer,
            jobID,
            extra,
            new_data,
            next_data,
            path,
            get,
            kvs
          });
        }
        return path.length >= 4 ? await _getDoc(
          doc.subs,
          slice(2, path.length, path),
          _signer,
          func,
          new_data,
          secure,
          relayer,
          jobID,
          extra,
          state,
          action,
          SmartWeave2,
          current_path,
          kvs,
          doc,
          get,
          type,
          _func
        ) : {
          doc,
          schema,
          rules,
          col,
          next_data
        };
      };
      var addNewDoc = async (id, SmartWeave2, state, kvs) => {
        let tx_ids = await kv(kvs, SmartWeave2).get(`tx_ids.${SmartWeave2.transaction.id}`) || [];
        tx_ids.push(id);
        await kv(kvs, SmartWeave2).put(`tx_ids.${SmartWeave2.transaction.id}`, tx_ids);
      };
      var parse = async (state, action, func, signer, salt, contractErr = true, SmartWeave2, kvs, get, type) => {
        return await _parse(
          state,
          action,
          func,
          signer,
          salt,
          contractErr,
          SmartWeave2,
          kvs,
          type,
          { getDoc, getCol, addNewDoc, get }
        );
      };
      var kv = (kvs, SW) => ({
        get: async (key) => typeof kvs[key] !== "undefined" ? kvs[key] : await SW.kv.get(key),
        put: async (key, val) => {
          kvs[key] = val;
        }
      });
      var trigger = async (on, state, path, SmartWeave2, kvs, executeCron, depth, vars, timestamp) => {
        const trigger_key = `trigger.${init(path).join("/")}`;
        state.triggers ??= {};
        const triggers = state.triggers[trigger_key] ??= [];
        for (const t of triggers) {
          if (!includes(t.on)(on))
            continue;
          try {
            let _state = clone(state);
            let _kvs = clone(kvs);
            await executeCron(
              { crons: { jobs: t.func, version: t.version, key: t.key } },
              _state,
              SmartWeave2,
              _kvs,
              depth,
              { ...vars, batch: [] },
              timestamp
            );
            state = _state;
            for (const k in _kvs)
              kvs[k] = _kvs[k];
          } catch (e) {
            console.log(e);
          }
        }
        return state;
      };
      var _parser = (query) => {
        const [path, opt] = splitWhen(complement(is)(String), query);
        if (isNil(path) || path.length === 0)
          err(`the wrong path`);
        if (!is(Object, opt))
          err(`option must be an object`);
        let q = { path };
        let _filter = { "==": [] };
        let _keys = {};
        let _ranges = {};
        let _range_field = null;
        let _sort = null;
        let _startAt = null;
        let _startAfter = null;
        let _endAt = null;
        let _endBefore = null;
        let _startAtCursor = null;
        let _startAfterCursor = null;
        let _endAtCursor = null;
        let _endBeforeCursor = null;
        let _array_contains = null;
        let _array_contains_any = null;
        for (const v of clone(opt)) {
          if (is(Number)(v)) {
            if (isNil(q.limit)) {
              if (v > 1e3)
                err(`limit cannot be above 1000 [${v}]`);
              if (v !== Math.round(Math.abs(v)) || v < 1) {
                err(`limit must be a natural number [${v}]`);
              }
              q.limit = v;
            } else {
              err(`only one limit is allowed [${v}]`);
            }
          } else if (!is(Array)(v)) {
            err(`unknown query [${JSON.stringify(v)}]`);
          } else {
            if (v.length === 0) {
              err(`empty query option []`);
            } else if (v[0] === "startAt") {
              if (!isNil(_startAt) || !isNil(_startAfter) || !isNil(_startAtCursor) || !isNil(_startAfterCursor)) {
                err(`only one startAt/startAfter is allowed`);
              } else if (v.length <= 1) {
                err(`startAt has no value`);
              } else {
                if (v[1].__cursor__) {
                  _startAtCursor = v;
                  _startAtCursor[1].data.__id__ = _startAtCursor[1].id;
                } else {
                  _startAt = v;
                }
              }
            } else if (v[0] === "startAfter") {
              if (!isNil(_startAt) || !isNil(_startAfter) || !isNil(_startAtCursor) || !isNil(_startAfterCursor)) {
                err(`only one startAt/startAfter is allowed`);
              } else if (v.length <= 1) {
                err(`startAfter has no value`);
              } else {
                if (v[1].__cursor__) {
                  _startAfterCursor = v;
                  _startAfterCursor[1].data.__id__ = _startAfterCursor[1].id;
                } else {
                  _startAfter = v;
                }
              }
            } else if (v[0] === "endAt") {
              if (!isNil(_endAt) || !isNil(_endBefore) || !isNil(_endAtCursor) || !isNil(_endBeforeCursor)) {
                err(`only one endAt/endBefore is allowed`);
              } else if (v.length <= 1) {
                err(`endAt has no value`);
              } else {
                if (v[1].__cursor__) {
                  _endAtCursor = v;
                  _endAtCursor[1].data.__id__ = _endAtCursor[1].id;
                } else {
                  _endAt = v;
                }
              }
            } else if (v[0] === "endBefore") {
              if (!isNil(_endAt) || !isNil(_endBefore) || !isNil(_endAtCursor) || !isNil(_endBeforeCursor)) {
                err(`only one endAt/endBefore is allowed`);
              } else if (v.length <= 1) {
                err(`endBefore has no value`);
              } else {
                if (v[1].__cursor__) {
                  _endBeforeCursor = v;
                  _endBeforeCursor[1].data.__id__ = _endBeforeCursor[1].id;
                } else {
                  _endBefore = v;
                }
              }
            } else if (v.length === 3) {
              if (includes(v[1])([
                "==",
                "!=",
                ">",
                "<",
                ">=",
                "<=",
                "in",
                "not-in",
                "array-contains",
                "array-contains-any"
              ])) {
                if (includes(v[1], ["array-contains", "array-contains-any"])) {
                  if (!isNil(_filter["array-contains"]) || !isNil(_filter["array-contains-any"])) {
                    err(`only one array-contains/array-contains-any is allowed`);
                  }
                  if (v[1] === "array-contains-any" && !is(Array, v[2])) {
                    err(`array-contains-any must be an array ${JSON.stringify(v[2])}`);
                  }
                  _filter[v[1]] = v;
                } else if (includes(v[1], ["!=", "in", "not-in", ">", ">=", "<", "<="])) {
                  if (includes(v[1], ["in", "not-in"]) && !is(Array, v[2])) {
                    err(`${v[1]} must be an array [${JSON.stringify(v[2])}]`);
                  }
                  if (includes(v[1], [">", ">=", "<", "<="])) {
                    if (!isNil(_filter["!="]) || !isNil(_filter["in"]) || !isNil(_filter["not-in"])) {
                      err(`only one inequity is allowed [${JSON.stringify(v)}]`);
                    }
                    if (!isNil(_range_field) && _range_field !== v[0]) {
                      err(
                        `inequity has to be on the same field [${JSON.stringify(v)}]`
                      );
                    } else if (_ranges[v[1]] || v[1] === ">" && _ranges[">="] || v[1] === ">=" && _ranges[">"] || v[1] === "<" && _ranges["<="] || v[1] === "<=" && _ranges["<"]) {
                      err(`duplicate inequity [${JSON.stringify(v)}]`);
                    } else {
                      _filter.range ??= [];
                      _filter.range.push(v);
                      _range_field = v[0];
                      _ranges[v[1]] = true;
                    }
                  } else {
                    if (!isNil(_filter.range) || !isNil(_filter["!="]) || !isNil(_filter["in"]) || !isNil(_filter["not-in"])) {
                      err(`only one inequity is allowed [${JSON.stringify(v)}]`);
                    }
                    _filter[v[1]] = v;
                  }
                } else if (v[1] === "==") {
                  if (!isNil(_filter.range) || !isNil(_filter["!="]) || !isNil(_filter["in"]) || !isNil(_filter["not-in"])) {
                    err(`== must come before inequity [${JSON.stringify(v)}]`);
                  } else if (_keys[v[0]])
                    err(`only one == per field is allowed [${JSON.stringify(v)}]`);
                  _filter["=="].push(v);
                  _keys[v[0]] = true;
                } else {
                  if (!isNil(_filter[v[1]]))
                    err();
                  _filter[v[1]] = v;
                }
              } else {
                err(`The wrong where operant [${v[1]}]`);
              }
            } else if (v.length === 2) {
              if (includes(v[1])(["asc", "desc"])) {
                if (isNil(_sort)) {
                  _sort = [v];
                } else {
                  _sort.push(v);
                }
              } else {
                err(`sort order [${JSON.stringify(v[1])}] must be either asc or desc`);
              }
            } else if (v.length === 1) {
              if (isNil(_sort)) {
                _sort = [append("asc", v)];
              } else {
                _sort.push(append("asc", v));
              }
            } else {
              err(`unknown query option [${JSON.stringify(v)}]`);
            }
          }
        }
        q.limit ??= 1e3;
        q.start = _startAt ?? _startAfter ?? null;
        q.end = _endAt ?? _endBefore ?? null;
        q.startCursor = _startAtCursor ?? _startAfterCursor ?? null;
        q.endCursor = _endAtCursor ?? _endBeforeCursor ?? null;
        q.sort = _sort ?? [];
        q.reverse = { start: false, end: false };
        q.array = _filter["array-contains"] ?? _filter["array-contains-any"] ?? null;
        q.equals = _filter["=="];
        q.range = _filter.range ?? (!isNil(_filter.in) ? [_filter.in] : !isNil(_filter["not-in"]) ? [_filter["not-in"]] : !isNil(_filter["!="]) ? [_filter["!="]] : null);
        q.sortByTail = false;
        return q;
      };
      var checkStartEnd = (q) => {
        if (q.equals.length > 0 && !isNil(q.range)) {
          if (includes(q.range[0][0], pluck(0, q.equals))) {
            err(`== and range field must be different [${JSON.stringify(q.range)}]`);
          }
        }
        if ((!isNil(q.start) || !isNil(q.end)) && (q.equals.length > 0 || !isNil(q.range))) {
          err(
            `range [${JSON.stringify(
              q.start ?? q.end
            )}] cannot be used with ==/inequity`
          );
        }
        let start = null;
        let end = null;
        if (!isNil(q.start) || !isNil(q.end)) {
          if (!isNil(q.start)) {
            start ??= [];
            start[0] = q.start[0];
            start[1] ??= {};
            if (q.start[1]?.__cursor__) {
              start[1] = assoc("__id__", q.start[1].id, q.start[1].data);
            } else {
              for (const [i, v] of tail(q.start).entries()) {
                if (isNil(q.sort[i]))
                  err(`sort must exist for [${JSON.stringify(v)}]`);
                start[1][q.sort[i][0]] = v;
              }
            }
          } else if (!isNil(q.end)) {
            end ??= [];
            end[0] = q.end[0];
            end[1] ??= {};
            if (q.end[1]?.__cursor__) {
              end[1] = assoc("__id__", q.end[1].id, q.end[1].data);
            } else {
              for (const [i, v] of tail(q.end).entries()) {
                if (isNil(q.sort[i]))
                  err(`sort must exist for [${JSON.stringify(v)}]`);
                end[1][q.sort[i][0]] = v;
              }
            }
          }
        } else {
          for (const v of q.equals) {
            start ??= ["startAt"];
            end ??= ["endAt"];
            start[1] ??= {};
            end[1] ??= {};
            start[1][v[0]] = v[2];
            end[1][v[0]] = v[2];
          }
          for (const v of q.range || []) {
            if (v[1] === "<") {
              end ??= ["endBefore"];
              end[1] ??= {};
              if (end[0] === "endAt")
                end[0] = "endBefore";
              end[1][v[0]] = v[2];
              q.reverse.end = true;
            } else if (v[1] === "<=") {
              end ??= ["endAt"];
              end[1] ??= {};
              end[1][v[0]] = v[2];
              q.reverse.end = true;
            } else if (v[1] === ">") {
              start ??= ["startAfter"];
              start[1] ??= {};
              if (start[0] === "startAt")
                start[0] = "startAfter";
              start[1][v[0]] = v[2];
              q.reverse.start = true;
            } else if (v[1] === ">=") {
              start ??= ["startAt"];
              start[1] ??= {};
              start[1][v[0]] = v[2];
              q.reverse.start = true;
            }
          }
        }
        q.start = start;
        q.end = end;
      };
      var checkSort = (q) => {
        let sort = [];
        if (q.equals.length > 0) {
          const eq_keys = pluck(0, q.equals);
          const qkeys = pluck(0, q.sort);
          let ex = false;
          for (const v of qkeys) {
            if (!includes(v, eq_keys)) {
              ex = true;
            } else if (ex) {
              err(`the wrong sort ${JSON.stringify(q.sort)}`);
            }
          }
          const dups = intersection(eq_keys, qkeys);
          const imap = indexOf(prop(0), q.sort);
          let new_sort = slice(dups.length, q.sort.length, q.sort);
          for (const v of reverse(eq_keys)) {
            new_sort.unshift(imap[v] ?? [v, "asc"]);
            sort.unshift(imap[v] ?? [v, "asc"]);
          }
          q.sort = new_sort;
        }
        const next_index = sort.length;
        if (!isNil(q.range?.[0][0])) {
          if (q.sort.length === sort.length || q.range[0][1] === "in") {
            sort.push([q.range[0][0]]);
          } else if (!isNil(q.sort[next_index]) && q.range[0][0] !== q.sort[next_index][0]) {
            err(`the sort field at [${next_index}] must be [${q.range[0][0]}]`);
          }
          if (includes(q.range[0][1], ["!=", "in", "not-in"])) {
            const qkeys = pluck(0, q.sort);
            if (qkeys.length !== 0 && qkeys[next_index] !== q.range[0][0]) {
              if (includes(q.range[0][0], qkeys)) {
                err(`the wrong sort ${JSON.stringify(q.sort)}`);
              } else {
                q.sort.splice(q.equals.length, 0, [q.range[0][0], "asc"]);
                q.sortByTail = true;
              }
            }
          }
        }
        for (const [i, v] of (q.sort || []).entries()) {
          if (isNil(sort[i])) {
            sort[i] = v;
          } else if (sort[i][0] === v[0]) {
            if (!isNil(sort[i][1]) && !isNil(v[1]) && sort[i][1] !== v[1]) {
              err(`the wrong sort ${JSON.stringify(q.sort)}`);
            }
            if (isNil(sort[i][1]) && !isNil(v[1]))
              sort[i][1] = v[1];
          } else {
            err(`the wrong sort ${JSON.stringify(q.sort)}`);
          }
        }
        q.sort = map((v) => {
          if (isNil(v[1]))
            v[1] = "asc";
          return v;
        })(sort);
      };
      var buildQueries = (q) => {
        q.queries = [];
        if (!isNil(q.array)) {
          let opt = { limit: q.limit };
          if (!isNil(q.start))
            opt[q.start[0]] = q.start[1];
          if (!isNil(q.end))
            opt[q.end[0]] = q.end[1];
          if (q.array[1] === "array-contains-any") {
            for (let v of q.array[2]) {
              const prefix = `${q.array[0]}/array:${md5(JSON.stringify(v))}`;
              q.queries.push({ opt, prefix });
            }
            q.type = "pranges";
          } else {
            const prefix = `${q.array[0]}/array:${md5(JSON.stringify(q.array[2]))}`;
            q.queries.push({ opt, prefix });
            q.type = "range";
          }
        } else if (includes(q.range?.[0]?.[1], ["!=", "not-in", "in"])) {
          const op = q.range?.[0]?.[1];
          if (op === "!=") {
            let opt1 = {};
            let end = clone(q.end);
            end ??= ["endBefore"];
            end[1] ??= {};
            if (end[0] !== "endBefore")
              end[0] = "endBefore";
            end[1][q.range[0][0]] = q.range[0][2];
            opt1.endBefore = end[1];
            if (!isNil(q.start))
              opt1[q.start[0]] = q.start[1];
            let opt2 = {};
            let start = clone(q.start);
            start ??= ["startAfter"];
            start[1] ??= {};
            if (start[0] !== "startAfter")
              start[0] = "startAfter";
            start[1][q.range[0][0]] = q.range[0][2];
            opt2.startAfter = start[1];
            if (!isNil(q.end))
              opt2[q.end[0]] = q.end[1];
            q.queries = [{ opt: opt1 }, { opt: opt2 }];
            q.reverse.start = true;
            q.reverse.end = true;
            q.sortRange = true;
          } else if (op === "in") {
            let __ranges = sortBy(identity)(q.range[0][2]);
            for (let v of __ranges) {
              let opt = {};
              let start = clone(q.start);
              start ??= ["startAt"];
              start[1] ??= {};
              start[1][q.range[0][0]] = v;
              opt.startAt = start[1];
              let end = clone(q.end);
              end ??= ["endAt"];
              end[1] ??= {};
              end[1][q.range[0][0]] = v;
              opt.endAt = end[1];
              q.queries.push({ opt });
              q.sortRange = true;
              q.reverse.start = true;
              q.reverse.end = true;
            }
          } else if (op === "not-in") {
            let prev = null;
            let __ranges = sortBy(identity)(q.range[0][2]);
            for (let [i, v] of __ranges.entries()) {
              let opt = {};
              let start = clone(q.start);
              if (i !== 0) {
                start ??= ["startAfter"];
                start[1] ??= {};
                start[1][q.range[0][0]] = prev;
              }
              if (!isNil(start))
                opt[start[0]] = start[1];
              let end = clone(q.end);
              end ??= ["endBefore"];
              end[1] ??= {};
              end[1][q.range[0][0]] = v;
              opt.endBefore = end[1];
              q.queries.push({ opt });
              if (i == q.range[0][2].length - 1) {
                let opt2 = {};
                let start2 = clone(q.start);
                start2 ??= ["startAfter"];
                start2[1] ??= {};
                start2[1][q.range[0][0]] = v;
                opt2.startAfter = start2[1];
                let end2 = clone(q.end);
                if (!isNil(end2))
                  opt2[end2[0]] = end2[1];
                q.queries.push({ opt: opt2 });
              }
              prev = v;
            }
            q.sortRange = true;
            q.reverse.start = true;
            q.reverse.end = true;
          }
          q.type = q.sortByTail ? "pranges" : "ranges";
        } else {
          q.type = "range";
          let opt = { limit: q.limit };
          if (!isNil(q.start))
            opt[q.start[0]] = q.start[1];
          if (!isNil(q.end))
            opt[q.end[0]] = q.end[1];
          q.queries.push({ opt });
        }
      };
      var parseQuery = (query) => {
        const parsed = _parser(query);
        checkSort(parsed);
        checkStartEnd(parsed);
        buildQueries(parsed);
        return parsed;
      };
      function uint8ArrayToHexString(uint8Array) {
        let hexString = "0x";
        for (const e of uint8Array) {
          const hex = e.toString(16);
          hexString += hex.length === 1 ? `0${hex}` : hex;
        }
        return hexString;
      }
      var isHexStrict = (hex) => typeof hex === "string" && /^((-)?0x[0-9a-f]+|(0x))$/i.test(hex);
      var isUint8Array = (data) => data instanceof Uint8Array || data?.constructor?.name === "Uint8Array" || data?.constructor?.name === "Buffer";
      var isEVMAddress = (value, checkChecksum = true) => {
        if (typeof value !== "string" && !isUint8Array(value))
          return false;
        let valueToCheck;
        if (isUint8Array(value)) {
          valueToCheck = uint8ArrayToHexString(value);
        } else if (typeof value === "string" && !isHexStrict(value)) {
          valueToCheck = value.toLowerCase().startsWith("0x") ? value : `0x${value}`;
        } else {
          valueToCheck = value;
        }
        if (!/^(0x)?[0-9a-f]{40}$/i.test(valueToCheck))
          return false;
        if (/^(0x|0X)?[0-9a-f]{40}$/.test(valueToCheck) || /^(0x|0X)?[0-9A-F]{40}$/.test(valueToCheck)) {
          return true;
        }
        return true;
      };
      var wrapResult = (state, original_signer, SmartWeave2, extra) => ({
        state,
        result: mergeLeft(extra, {
          original_signer,
          transaction: {
            id: SmartWeave2?.transaction?.id || null,
            owner: SmartWeave2?.transaction?.owner || null,
            tags: SmartWeave2?.transaction?.tags || null,
            quantity: SmartWeave2?.transaction?.quantity || null,
            target: SmartWeave2?.transaction?.target || null,
            reward: SmartWeave2?.transaction?.reward || null,
            timestamp: SmartWeave2?.transaction?.timestamp || null
          },
          block: {
            height: SmartWeave2?.block?.height || null,
            timestamp: SmartWeave2?.block?.timestamp || null,
            indep_hash: SmartWeave2?.block?.indep_hash || null
          }
        })
      });
      var isOwner = (signer, state) => {
        let owner = state.owner || [];
        if (is(String)(owner))
          owner = of(owner);
        if (!includes(signer)(owner)) {
          err(`Signer[${signer}] is not the owner[${owner.join(", ")}].`);
        }
        return owner;
      };
      var validateSchema = async (schema, data, contractErr, state, SmartWeave2) => {
        if (!isNil(schema)) {
          const { error, valid } = await validate(
            data,
            clone(schema),
            state,
            SmartWeave2
          );
          if (!valid)
            err("invalid schema", contractErr);
        }
      };
      var auth = async (state, action, func, SmartWeave2, use_nonce = true, kvs, fn2) => {
        if (isNil(state.auth))
          return { signer: null, original_signer: null };
        const {
          query,
          nonce,
          signature,
          caller,
          type = "secp256k1",
          pubKey
        } = action.input;
        if (!includes(type)(
          state.auth.algorithms || [
            "secp256k1",
            "secp256k1-2",
            "ed25519",
            "rsa256"
          ]
        )) {
          err(`The wrong algorithm`);
        }
        let _caller = caller;
        let original_signer = null;
        const EIP712Domain = [
          { name: "name", type: "string" },
          { name: "version", type: "string" },
          { name: "verifyingContract", type: "string" }
        ];
        const domain = {
          name: state.auth.name,
          version: state.auth.version,
          verifyingContract: isNil(SmartWeave2.contract) ? "exm" : SmartWeave2.contract.id
        };
        const message = {
          nonce,
          query: JSON.stringify({ func, query })
        };
        const _data = {
          types: {
            EIP712Domain,
            Query: [
              { name: "query", type: "string" },
              { name: "nonce", type: "uint256" }
            ]
          },
          domain,
          primaryType: "Query",
          message
        };
        let signer = null;
        if (state.auth.skip_validation) {
          if (!isNil(action.input.signer))
            original_signer = action.input.signer;
          signer = caller;
        } else if (type === "ed25519") {
          const { isValid } = await read(
            state.contracts.dfinity,
            {
              function: "verify",
              data: _data,
              signature,
              signer: caller
            },
            SmartWeave2
          );
          if (isValid) {
            signer = caller;
          } else {
            err(`The wrong signature`);
          }
        } else if (type === "rsa256") {
          let encoded_data = JSON.stringify(_data);
          if (typeof TextEncoder !== "undefined") {
            const enc = new TextEncoder();
            encoded_data = enc.encode(encoded_data);
          }
          const _crypto = SmartWeave2.arweave.crypto || SmartWeave2.arweave.wallets.crypto;
          const isValid = await _crypto.verify(
            pubKey,
            encoded_data,
            Buffer.from(signature, "hex")
          );
          if (isValid) {
            signer = caller;
          } else {
            err(`The wrong signature`);
          }
        } else if (type == "secp256k1") {
          signer = (await read(
            state.contracts.ethereum,
            {
              function: "verify712",
              data: _data,
              signature
            },
            SmartWeave2
          )).signer;
        } else if (type == "secp256k1-2") {
          signer = (await read(
            state.contracts.ethereum,
            {
              function: "verify",
              data: _data,
              signature
            },
            SmartWeave2
          )).signer;
        }
        if (includes(type)(["secp256k1", "secp256k1-2"])) {
          if (/^0x/.test(signer))
            signer = signer.toLowerCase();
          if (/^0x/.test(_caller))
            _caller = _caller.toLowerCase();
        }
        const timestamp = isNil(action.timestamp) ? isNil(SmartWeave2.transaction.timestamp) ? Math.round(SmartWeave2.transaction.timestamp) : SmartWeave2.block.timestamp : Math.round(action.timestamp / 1e3);
        original_signer ??= signer;
        let _signer = signer;
        if (_signer !== _caller) {
          const link = await fn2.getAddressLink(_signer, state, kvs, SmartWeave2);
          if (!isNil(link)) {
            let _address = is(Object, link) ? link.address : link;
            let _expiry = is(Object, link) ? link.expiry || 0 : 0;
            if (_expiry === 0 || timestamp <= _expiry)
              _signer = _address;
          }
        }
        if (_signer !== _caller)
          err(`signer[${_signer}] is not caller[${_caller}]`);
        if (!isNil(action.input.signer) && action.input.signer !== original_signer) {
          err(`signer[${_signer}] is not caller[${_caller}]`);
        }
        if (use_nonce !== false)
          await fn2.useNonce(nonce, original_signer, state, kvs, SmartWeave2);
        return { signer: _signer, original_signer };
      };
      module.exports = {
        validateSchema,
        trigger,
        getDoc: _getDoc,
        getCol: _getCol,
        parse,
        kv,
        parseQuery,
        auth,
        isEVMAddress,
        err,
        isEvolving,
        wrapResult,
        isOwner,
        read
      };
    }
  });

  // sdk/contracts/weavedb-bpt/actions/read/getEvolve.js
  var require_getEvolve = __commonJS({
    "sdk/contracts/weavedb-bpt/actions/read/getEvolve.js"(exports, module) {
      var { pickAll } = require_src();
      var { isEvolving } = require_utils();
      var getEvolve = async (state, action) => {
        let evolve = pickAll(["canEvolve", "evolve"])(state);
        evolve.history = state.evolveHistory || [];
        evolve.isEvolving = isEvolving(state);
        return { result: evolve };
      };
      module.exports = { getEvolve };
    }
  });

  // sdk/contracts/weavedb-bpt/actions/read/getTriggers.js
  var require_getTriggers = __commonJS({
    "sdk/contracts/weavedb-bpt/actions/read/getTriggers.js"(exports, module) {
      var { err } = require_utils();
      var getTriggers = async (state, action, SmartWeave2) => {
        const path = action.input.query;
        if (path.length % 2 === 0)
          err();
        const trigger_key = `trigger.${path.join("/")}`;
        return { result: state.triggers?.[trigger_key] ?? [] };
      };
      module.exports = { getTriggers };
    }
  });

  // sdk/contracts/weavedb-bpt/actions/read/getBundlers.js
  var require_getBundlers = __commonJS({
    "sdk/contracts/weavedb-bpt/actions/read/getBundlers.js"(exports, module) {
      var getBundlers = async (state, action, SmartWeave2, kvs) => {
        return { result: state.bundlers ?? [] };
      };
      module.exports = { getBundlers };
    }
  });

  // sdk/contracts/weavedb-bpt/actions/read/getInfo.js
  var require_getInfo = __commonJS({
    "sdk/contracts/weavedb-bpt/actions/read/getInfo.js"(exports, module) {
      var { pick } = require_src();
      var { isEvolving, kv } = require_utils();
      var getInfo = async (state, action, SmartWeave2, kvs) => {
        let info = pick(
          [
            "auth",
            "canEvolve",
            "contracts",
            "evolve",
            "secure",
            "owner",
            "contracts",
            "bundlers",
            "hash",
            "rollup"
          ],
          state
        );
        info.version = state.version || null;
        info.evolveHistory = state.evolveHistory || [];
        info.isEvolving = isEvolving(state);
        info.rollup ??= { height: 0, hash: SmartWeave2.contract.id };
        info.bundlers ??= [];
        return { result: info };
      };
      module.exports = { getInfo };
    }
  });

  // sdk/contracts/weavedb-bpt/actions/read/getTokens.js
  var require_getTokens = __commonJS({
    "sdk/contracts/weavedb-bpt/actions/read/getTokens.js"(exports, module) {
      var getTokens = async (state, action, SmartWeave2, kvs) => {
        const tokens = state.tokens ?? { available: {}, locked: {} };
        const rollup = state.rollup ?? { height: 0, hash: SmartWeave2.contract.id };
        const last_token_lock_date = state.last_token_lock_date ?? 0;
        return { result: { tokens, rollup, last_token_lock_date } };
      };
      module.exports = { getTokens };
    }
  });

  // sdk/contracts/weavedb-bpt/actions/read/getAddressLink.js
  var require_getAddressLink = __commonJS({
    "sdk/contracts/weavedb-bpt/actions/read/getAddressLink.js"(exports, module) {
      var { is, isNil } = require_src();
      var { kv } = require_utils();
      var getAddressLink = async (state, action, SmartWeave2, kvs) => {
        const { address } = action.input.query;
        const link = await kv(kvs, SmartWeave2).get(`auth.${address.toLowerCase()}`);
        if (isNil(link))
          return { result: null };
        let _address = is(Object, link) ? link.address : link;
        let _expiry = is(Object, link) ? link.expiry || 0 : 0;
        return {
          result: { address: _address, expiry: _expiry }
        };
      };
      module.exports = { getAddressLink };
    }
  });

  // sdk/contracts/weavedb-bpt/actions/read/ids.js
  var require_ids = __commonJS({
    "sdk/contracts/weavedb-bpt/actions/read/ids.js"(exports, module) {
      var { kv } = require_utils();
      var ids = async (state, action, SmartWeave2, kvs) => {
        const { tx } = action.input;
        return {
          result: await kv(kvs, SmartWeave2).get(`tx_ids.${tx}`) || null
        };
      };
      module.exports = { ids };
    }
  });

  // sdk/contracts/weavedb-bpt/actions/read/validities.js
  var require_validities = __commonJS({
    "sdk/contracts/weavedb-bpt/actions/read/validities.js"(exports, module) {
      var { kv } = require_utils();
      var validities = async (state, action, SmartWeave2, kvs) => {
        const { tx } = action.input;
        return {
          result: await kv(kvs, SmartWeave2).get(`tx_validities.${tx}`) || null
        };
      };
      module.exports = { validities };
    }
  });

  // sdk/contracts/weavedb-bpt/actions/read/nonce.js
  var require_nonce = __commonJS({
    "sdk/contracts/weavedb-bpt/actions/read/nonce.js"(exports, module) {
      var { isNil } = require_src();
      var { kv, err } = require_utils();
      var nonce = async (state, action, SmartWeave2, kvs) => {
        let { address } = action.input;
        if (isNil(address))
          err(`No Address`);
        if (/^0x/.test(address))
          address = address.toLowerCase();
        return { result: await kv(kvs, SmartWeave2).get(`nonce.${address}`) || 0 };
      };
      module.exports = { nonce };
    }
  });

  // sdk/contracts/weavedb-bpt/actions/read/version.js
  var require_version = __commonJS({
    "sdk/contracts/weavedb-bpt/actions/read/version.js"(exports, module) {
      var { isNil } = require_src();
      var { err } = require_utils();
      var version = async (state, action) => {
        if (isNil(state.version))
          err(`No version assigned`);
        return { result: state.version };
      };
      module.exports = { version };
    }
  });

  // sdk/contracts/weavedb-bpt/actions/read/get.js
  var require_get = __commonJS({
    "sdk/contracts/weavedb-bpt/actions/read/get.js"(exports, module) {
      var {
        complement,
        assoc,
        tail,
        last,
        isNil,
        includes,
        any,
        map,
        clone
      } = require_src();
      var { kv, getDoc, parseQuery, err } = require_utils();
      var {
        ranges: _ranges,
        pranges: _pranges,
        range: _range
      } = require_lib();
      var md5 = require_md5();
      var get = async (state, action, cursor = false, SmartWeave2, kvs) => {
        let parsed = parseQuery(action.input.query);
        const { data } = state;
        if (parsed.path.length % 2 === 0) {
          const { doc: _data } = await getDoc(
            null,
            parsed.path,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            state,
            null,
            SmartWeave2,
            void 0,
            kvs
          );
          return {
            result: isNil(_data.__data) ? null : cursor ? {
              id: last(parsed.path),
              setter: _data.setter,
              data: _data.__data || null,
              __cursor__: true
            } : _data.__data || null
          };
        } else {
          let res = null;
          const { limit, path, sort } = parsed;
          if (parsed.type === "range") {
            res = await _range(
              clone(sort),
              parsed.queries[0].opt,
              path,
              kvs,
              SmartWeave2,
              false,
              parsed.queries[0].prefix,
              {
                start: parsed.startCursor,
                end: parsed.endCursor,
                reverse: parsed.reverse
              }
            );
          } else if (parsed.type === "ranges") {
            res = await _ranges(
              map((v) => ({
                ...v,
                sort: clone(sort)
              }))(parsed.queries),
              limit,
              path,
              kvs,
              SmartWeave2,
              {
                start: parsed.startCursor,
                end: parsed.endCursor,
                reverse: parsed.reverse,
                sortRange: parsed.sortRange
              }
            );
          } else if (parsed.type === "pranges") {
            res = await _pranges(
              map((v) => ({
                ...v,
                sort: clone(sort),
                path
              }))(parsed.queries),
              limit,
              kvs,
              SmartWeave2,
              parsed.sortByTail,
              {
                start: parsed.startCursor,
                end: parsed.endCursor,
                reverse: parsed.reverse
              }
            );
          }
          return {
            result: map(
              (v) => cursor ? {
                id: v.key,
                setter: v.setter,
                data: v.val,
                __cursor__: true
              } : v.val
            )(res)
          };
        }
      };
      module.exports = { get, parseQuery };
    }
  });

  // sdk/contracts/weavedb-bpt/actions/read/getSchema.js
  var require_getSchema = __commonJS({
    "sdk/contracts/weavedb-bpt/actions/read/getSchema.js"(exports, module) {
      var { isNil, mergeLeft } = require_src();
      var { parse } = require_utils();
      var getSchema = async (state, action, SmartWeave2, kvs) => {
        let { _data, data, query, new_data, path } = await parse(
          state,
          action,
          "getSchema",
          void 0,
          void 0,
          void 0,
          SmartWeave2,
          kvs
        );
        return { result: _data.schema || null };
      };
      module.exports = { getSchema };
    }
  });

  // sdk/contracts/weavedb-bpt/actions/read/getRules.js
  var require_getRules = __commonJS({
    "sdk/contracts/weavedb-bpt/actions/read/getRules.js"(exports, module) {
      var { parse } = require_utils();
      var getRules = async (state, action, SmartWeave2, kvs) => {
        let { _data, data, query, new_data, path } = await parse(
          state,
          action,
          "getRules",
          void 0,
          void 0,
          void 0,
          SmartWeave2,
          kvs
        );
        return { result: _data.rules || null };
      };
      module.exports = { getRules };
    }
  });

  // sdk/contracts/weavedb-bpt/actions/read/getIndexes.js
  var require_getIndexes = __commonJS({
    "sdk/contracts/weavedb-bpt/actions/read/getIndexes.js"(exports, module) {
      var { keys, map, split, isNil, splitEvery } = require_src();
      var { err } = require_utils();
      var { getIndexes: _getIndexes } = require_lib();
      var getIndexes = async (state, action, SmartWeave2, kvs) => {
        const path = action.input.query;
        if (path.length % 2 === 0)
          err();
        const index = keys(await _getIndexes(path, kvs, SmartWeave2));
        return {
          result: map((v) => splitEvery(2, split("/")(v)))(index || [])
        };
      };
      module.exports = { getIndexes };
    }
  });

  // sdk/contracts/weavedb-bpt/actions/read/listCollections.js
  var require_listCollections = __commonJS({
    "sdk/contracts/weavedb-bpt/actions/read/listCollections.js"(exports, module) {
      var { keys, isNil, mergeLeft } = require_src();
      var { kv, parse } = require_utils();
      var listCollections = async (state, action, SmartWeave2, kvs) => {
        let { _data, data, query, new_data, path } = await parse(
          state,
          action,
          "listCollections",
          void 0,
          void 0,
          void 0,
          SmartWeave2,
          kvs
        );
        return {
          result: keys(
            await kv(kvs, SmartWeave2).get(`data.${path.join("/")}`) || {}
          )
        };
      };
      module.exports = { listCollections };
    }
  });

  // sdk/contracts/weavedb-bpt/actions/read/getCollection.js
  var require_getCollection = __commonJS({
    "sdk/contracts/weavedb-bpt/actions/read/getCollection.js"(exports, module) {
      var { keys, isNil, mergeLeft } = require_src();
      var { err } = require_utils();
      var getCollection = async (state, action, SmartWeave2, kvs) => {
        if (isNil(action.input?.query?.[0]))
          err("collection ID not specified");
        return {
          result: state.collections?.[action.input.query[0]] ?? null
        };
      };
      module.exports = { getCollection };
    }
  });

  // sdk/contracts/weavedb-bpt/lib/validate.js
  var require_validate = __commonJS({
    "sdk/contracts/weavedb-bpt/lib/validate.js"(exports, module) {
      var { err, auth, kv } = require_utils();
      var getAddressLink = async (_signer, state, kvs, SmartWeave2) => {
        return await kv(kvs, SmartWeave2).get(`auth.${_signer}`);
      };
      var useNonce = async (nonce, original_signer, state, kvs, SmartWeave2) => {
        let next_nonce = (await kv(kvs, SmartWeave2).get(`nonce.${original_signer}`) || 0) + 1;
        if (next_nonce !== nonce) {
          err(
            `The wrong nonce[${nonce}] for ${original_signer}: expected ${next_nonce}`
          );
        }
        await kv(kvs, SmartWeave2).put(`nonce.${original_signer}`, next_nonce);
      };
      var validate = async (state, action, func, SmartWeave2, use_nonce = true, kvs) => await auth(state, action, func, SmartWeave2, use_nonce, kvs, {
        useNonce,
        getAddressLink
      });
      module.exports = { validate };
    }
  });

  // sdk/contracts/weavedb-bpt/lib/zkjson.js
  var require_zkjson = __commonJS({
    "sdk/contracts/weavedb-bpt/lib/zkjson.js"(exports, module) {
      var { isNil, splitEvery, flatten } = require_src();
      var ops = {
        $eq: 10,
        $ne: 11,
        $gt: 12,
        $gte: 13,
        $lt: 14,
        $lte: 15,
        $in: 16,
        $nin: 17,
        $contains: 18,
        $contains_any: 19,
        $contains_all: 20,
        $contains_none: 21
      };
      var opMap = {};
      for (let k in ops)
        opMap[ops[k]] = k;
      function encodePath(path) {
        const parts = [];
        let str = "";
        let num = 0;
        for (const s of path) {
          if (num == 2 && !(s == "." || s == "["))
            throw Error();
          if (s == ".") {
            if (num == 2) {
              num = 0;
            } else {
              parts.push(str);
              str = "";
            }
          } else if (s == "[") {
            if (num != 2) {
              if (str != "" || parts.length > 0)
                parts.push(str);
              str = "";
            }
            num = 1;
          } else if (s == "]") {
            if (num != 1)
              throw Error();
            num = 2;
            if (str == "" || Number.isNaN(+str))
              throw Error();
            parts.push(+str);
            str = "";
          } else {
            str += s;
          }
        }
        if (str != "")
          parts.push(str);
        if (parts.length == 0)
          parts.push("");
        let encoded = [parts.length];
        for (const p of parts) {
          if (typeof p == "number") {
            encoded = encoded.concat([0, 0, p]);
          } else {
            let plen = [p.length];
            if (p.length == 0)
              plen.push(1);
            encoded = encoded.concat([
              ...plen,
              ...p.split("").map((c) => c.charCodeAt(0))
            ]);
          }
        }
        return encoded;
      }
      function flattenPath(path) {
        let p = [path.length];
        for (const v of path) {
          p = p.concat(v);
        }
        return p;
      }
      function _encode(v, path = []) {
        let vals = [];
        if (typeof v == "number") {
          vals.push([path, encodeVal(v)]);
        } else if (typeof v == "boolean") {
          vals.push([path, encodeVal(v)]);
        } else if (v == null) {
          vals.push([path, encodeVal(v)]);
        } else if (typeof v == "string") {
          vals.push([path, encodeVal(v)]);
        } else if (Array.isArray(v)) {
          let i = 0;
          for (const v2 of v) {
            for (const v3 of _encode(v2, [...path, [0, 0, i]]))
              vals.push(v3);
            i++;
          }
        } else if (typeof v == "object") {
          for (const k in v) {
            const key = k.split("").map((c) => c.charCodeAt(0));
            for (let v4 of _encode(v[k], [
              ...path,
              [key.length, ...key.length == 0 ? [1] : key]
            ])) {
              vals.push(v4);
            }
          }
        }
        return vals;
      }
      function encode(json) {
        let flattened = _encode(json);
        flattened.sort((a, b) => {
          const isUndefined = (v) => typeof v == "undefined";
          const max = Math.max(a[0].length, b[0].length);
          if (max > 0) {
            for (let i = 0; i < max; i++) {
              const exA = !isUndefined(a[0][i]);
              const exB = !isUndefined(b[0][i]);
              if (exA && !exB)
                return 1;
              if (!exA && exB)
                return -1;
              const max2 = Math.max(a[0][i].length, b[0][i].length);
              if (max2 > 0) {
                for (let i2 = 0; i2 < max2; i2++) {
                  const vA = a[0][i][i2];
                  const vB = b[0][i][i2];
                  const exA2 = !isUndefined(vA);
                  const exB2 = !isUndefined(vB);
                  if (exA2 && !exB2)
                    return 1;
                  if (!exA2 && exB2)
                    return -1;
                  if (vA > vB)
                    return 1;
                  if (vA < vB)
                    return -1;
                }
              }
            }
          }
          return 0;
        });
        return flattened.reduce(
          (arr, v) => arr.concat([...flattenPath(v[0]), ...v[1]]),
          []
        );
      }
      function encodeVal(v) {
        let vals = [];
        if (typeof v == "number" || typeof v == "bigint") {
          const int = Number.isInteger(v);
          let moved = 0;
          let num = v;
          while (num % 1 != 0) {
            num *= 10;
            moved += 1;
          }
          vals = v < 0 ? [2, 0, moved, -num] : [2, 1, moved, num];
        } else if (typeof v == "boolean") {
          vals = [1, v ? 1 : 0];
        } else if (v == null) {
          vals = [0];
        } else if (typeof v == "string") {
          vals = [3, v.length, ...v.split("").map((c) => c.charCodeAt(0))];
        } else {
          vals = [4, ...encode(v)];
        }
        return vals;
      }
      function toSignal(arr) {
        const _arr = flatten(
          arr.map((n) => {
            let str = splitEvery(8, n.toString().split(""));
            let i2 = 0;
            str = str.map((s) => {
              const len = i2 == str.length - 1 ? s.length : 9;
              i2++;
              return len.toString() + s.join("");
            });
            return str;
          })
        );
        let _arr2 = [];
        let one = 0;
        let i = 0;
        let start = null;
        for (let v of _arr) {
          _arr2.push(v);
          if (v.length - 1 == 1) {
            if (start == null)
              start = i;
            one += v.length - 1;
            if (one == 9) {
              _arr2[start] = `0${one}${_arr2[start][1]}`;
              for (let i2 = start + 1; i2 <= i; i2++)
                _arr2[i2] = `${_arr2[i2][1]}`;
              one = 0;
              start = null;
            }
          } else {
            if (one > 2) {
              _arr2[start] = `0${one}${_arr2[start][1]}`;
              for (let i2 = start + 1; i2 < i; i2++)
                _arr2[i2] = `${_arr2[i2][1]}`;
            }
            one = 0;
            start = null;
          }
          i++;
        }
        if (one > 2) {
          _arr2[start] = `0${one}${_arr2[start][1]}`;
          for (let i2 = start + 1; i2 <= i - 1; i2++)
            _arr2[i2] = `${_arr2[i2][1]}`;
        }
        let _arr3 = [];
        let chain = null;
        let cur = 0;
        let num = "";
        for (let v of _arr2) {
          if (chain == null && +v[0] == 0) {
            chain = +v[1];
            cur = 1;
            num = v;
          } else if (chain != null) {
            num += v;
            cur++;
            if (chain == cur) {
              _arr3.push(num);
              chain = null;
              num = "";
              cur = 0;
            }
          } else {
            _arr3.push(v);
          }
        }
        if (chain != null)
          _arr3.push(num);
        let arrs2 = [];
        let len2 = 0;
        let str2 = "";
        for (let v of _arr3) {
          if (len2 + v.length > 75) {
            arrs2.push("1" + str2);
            if (+v[0] == 0) {
              let len3 = 75 - len2;
              if (len3 == 2 || len3 == 3) {
                arrs2[arrs2.length - 1] += `1${v[2]}`;
                let new_len = +v[1] - 1;
                if (new_len == 2) {
                  v = `1${v[3]}1${v[4]}`;
                } else {
                  v = `0${new_len}${v.slice(3)}`;
                }
              } else if (len3 > 3) {
                let new_len = +v[1] - 2;
                let old_len = 2;
                if (len3 == 4) {
                  arrs2[arrs2.length - 1] += `1${v[2]}1${v[3]}`;
                } else {
                  old_len = len3 - 2;
                  new_len = +v[1] - old_len;
                  arrs2[arrs2.length - 1] += `0${old_len}${v.slice(2, 2 + old_len)}`;
                }
                if (new_len == 1) {
                  v = `1${v[old_len + 2]}`;
                } else if (new_len == 2) {
                  v = `1${v[old_len + 2]}1${v[old_len + 3]}`;
                } else {
                  v = `0${new_len}${v.slice(old_len + 2)}`;
                }
              }
            }
            len2 = 0;
            str2 = "";
          }
          len2 += v.length;
          str2 += v;
        }
        if (str2 != "")
          arrs2.push("1" + str2);
        return arrs2;
      }
      function encodeQuery(v) {
        if (!Array.isArray(v))
          throw Error("query must be an array");
        const op = v[0];
        if (isNil(ops[op]))
          throw Error(`query not supported: ${op}`);
        return [ops[op], ...encodeVal(v[1])];
      }
      module.exports = {
        encode,
        encodePath,
        encodeVal,
        _encode,
        flattenPath,
        toSignal,
        encodeQuery
      };
    }
  });

  // sdk/contracts/weavedb-bpt/actions/write/add.js
  var require_add2 = __commonJS({
    "sdk/contracts/weavedb-bpt/actions/write/add.js"(exports, module) {
      var { includes, isNil, init, last } = require_src();
      var {
        parse,
        trigger,
        err,
        validateSchema,
        wrapResult
      } = require_utils();
      var { validate } = require_validate();
      var { put } = require_lib();
      var { encode, toSignal } = require_zkjson();
      var add = async (state, action, signer, salt = 0, contractErr = true, SmartWeave2, kvs, executeCron, depth = 1, type = "direct", get) => {
        if ((state.bundlers ?? []).length !== 0 && type === "direct") {
          err("only bundle queries are allowed");
        }
        let original_signer = null;
        if (isNil(signer)) {
          ;
          ({ signer, original_signer } = await validate(
            state,
            action,
            "add",
            SmartWeave2,
            true,
            kvs
          ));
        }
        let { _data, path, schema, next_data } = await parse(
          state,
          action,
          action.input.function,
          signer,
          salt,
          contractErr,
          SmartWeave2,
          kvs,
          get,
          type
        );
        if (type !== "cron" && includes(path[0])(["__tokens__", "__bridge__"])) {
          err(`${path[0]} cannot be updated directly`);
        }
        if (!isNil(_data.__data))
          err("doc already exists");
        await validateSchema(schema, next_data, contractErr, state, SmartWeave2);
        let { before, after } = await put(
          next_data,
          last(path),
          init(path),
          kvs,
          SmartWeave2,
          signer
        );
        if (!isNil(state.max_doc_size)) {
          let doc_size = null;
          try {
            const zkjson = toSignal(encode(after.val));
            doc_size = zkjson.length;
          } catch (e) {
            err("doc cannot be encoded");
          }
          if (doc_size !== null && doc_size > state.max_doc_size)
            err("doc too large");
        }
        if (isNil(before.val))
          state.collections[init(path).join("/")].count += 1;
        if (depth < 10) {
          state = await trigger(
            ["create"],
            state,
            path,
            SmartWeave2,
            kvs,
            executeCron,
            depth,
            {
              data: {
                path: init(path),
                before: before.val,
                after: after.val,
                id: last(path),
                setter: _data.setter
              }
            },
            action.timestamp
          );
        }
        return wrapResult(state, original_signer, SmartWeave2, {
          docID: last(path),
          doc: next_data,
          path: init(path)
        });
      };
      module.exports = { add };
    }
  });

  // sdk/contracts/weavedb-bpt/actions/write/set.js
  var require_set2 = __commonJS({
    "sdk/contracts/weavedb-bpt/actions/write/set.js"(exports, module) {
      var { includes, init, last, isNil } = require_src();
      var { encode, toSignal } = require_zkjson();
      var {
        validateSchema,
        wrapResult,
        err,
        parse,
        trigger
      } = require_utils();
      var { validate } = require_validate();
      var { put } = require_lib();
      var set = async (state, action, signer, contractErr = true, SmartWeave2, kvs, executeCron, depth = 1, type = "direct", get) => {
        if ((state.bundlers ?? []).length !== 0 && type === "direct") {
          err("only bundle queries are allowed");
        }
        let original_signer = null;
        if (isNil(signer)) {
          ;
          ({ signer, original_signer } = await validate(
            state,
            action,
            "set",
            SmartWeave2,
            true,
            kvs
          ));
        }
        let { path, schema, next_data } = await parse(
          state,
          action,
          action.input.function,
          signer,
          0,
          contractErr,
          SmartWeave2,
          kvs,
          get,
          type
        );
        if (type !== "cron" && includes(path[0])(["__tokens__", "__bridge__"])) {
          err(`${path[0]} cannot be updated directly`);
        }
        await validateSchema(schema, next_data, contractErr, state, SmartWeave2);
        let { before, after } = await put(
          next_data,
          last(path),
          init(path),
          kvs,
          SmartWeave2,
          signer,
          true
        );
        if (!isNil(state.max_doc_size)) {
          let doc_size = null;
          try {
            const zkjson = toSignal(encode(after.val));
            doc_size = zkjson.length;
          } catch (e) {
            err("doc cannot be encoded");
          }
          if (doc_size !== null && doc_size > state.max_doc_size)
            err("doc too large");
        }
        if (isNil(before.val))
          state.collections[init(path).join("/")].count += 1;
        if (depth < 10) {
          state = await trigger(
            ["create"],
            state,
            path,
            SmartWeave2,
            kvs,
            executeCron,
            depth,
            {
              data: {
                path: init(path),
                before: before.val,
                after: after.val,
                id: last(path),
                setter: after.setter
              }
            },
            action.timestamp
          );
        }
        return wrapResult(state, original_signer, SmartWeave2, {
          docID: last(path),
          doc: next_data,
          path: init(path)
        });
      };
      module.exports = { set };
    }
  });

  // sdk/contracts/weavedb-bpt/actions/write/update.js
  var require_update2 = __commonJS({
    "sdk/contracts/weavedb-bpt/actions/write/update.js"(exports, module) {
      var { includes, equals, isNil, init, last } = require_src();
      var {
        err,
        validateSchema,
        wrapResult,
        parse,
        trigger
      } = require_utils();
      var { validate } = require_validate();
      var { put } = require_lib();
      var update = async (state, action, signer, contractErr = true, SmartWeave2, kvs, executeCron, depth = 1, type = "direct", get) => {
        if ((state.bundlers ?? []).length !== 0 && type === "direct") {
          err("only bundle queries are allowed");
        }
        let original_signer = null;
        if (isNil(signer)) {
          ;
          ({ signer, original_signer } = await validate(
            state,
            action,
            "update",
            SmartWeave2,
            true,
            kvs
          ));
        }
        let { new_data, path, _data, schema, next_data } = await parse(
          state,
          action,
          action.input.function,
          signer,
          0,
          contractErr,
          SmartWeave2,
          kvs,
          get,
          type
        );
        if (type !== "cron" && includes(path[0])(["__tokens__", "__bridge__"])) {
          err(`${path[0]} cannot be updated directly`);
        }
        if (isNil(_data.__data))
          err(`Data doesn't exist`);
        await validateSchema(schema, next_data, contractErr, state, SmartWeave2);
        let { before, after } = await put(
          next_data,
          last(path),
          init(path),
          kvs,
          SmartWeave2,
          signer
        );
        const updated = !equals(before.val, after.val);
        if (updated && depth < 10) {
          state = await trigger(
            ["update"],
            state,
            path,
            SmartWeave2,
            kvs,
            executeCron,
            depth,
            {
              data: {
                path: init(path),
                before: before.val,
                after: after.val,
                id: last(path),
                setter: _data.setter
              }
            },
            action.timestamp
          );
        }
        return wrapResult(state, original_signer, SmartWeave2, {
          docID: last(path),
          doc: next_data,
          path: init(path)
        });
      };
      module.exports = { update };
    }
  });

  // sdk/contracts/weavedb-bpt/actions/write/upsert.js
  var require_upsert = __commonJS({
    "sdk/contracts/weavedb-bpt/actions/write/upsert.js"(exports, module) {
      var { includes, equals, isNil, init, last } = require_src();
      var {
        err,
        validateSchema,
        wrapResult,
        parse,
        trigger
      } = require_utils();
      var { validate } = require_validate();
      var { put } = require_lib();
      var { encode, toSignal } = require_zkjson();
      var upsert = async (state, action, signer, contractErr = true, SmartWeave2, kvs, executeCron, depth = 1, type = "direct", get) => {
        if ((state.bundlers ?? []).length !== 0 && type === "direct") {
          err("only bundle queries are allowed");
        }
        let original_signer = null;
        if (isNil(signer)) {
          ;
          ({ signer, original_signer } = await validate(
            state,
            action,
            "upsert",
            SmartWeave2,
            true,
            kvs
          ));
        }
        let { data, query, _signer, new_data, path, schema, _data, col, next_data } = await parse(
          state,
          action,
          action.input.function,
          signer,
          0,
          contractErr,
          SmartWeave2,
          kvs,
          get,
          type
        );
        if (type !== "cron" && includes(path[0])(["__tokens__", "__bridge__"])) {
          err(`${path[0]} cannot be updated directly`);
        }
        await validateSchema(schema, next_data, contractErr, state, SmartWeave2);
        _data.__data = next_data;
        let { before, after } = await put(
          next_data,
          last(path),
          init(path),
          kvs,
          SmartWeave2,
          signer
        );
        if (!isNil(state.max_doc_size)) {
          let doc_size = null;
          try {
            const zkjson = toSignal(encode(after.val));
            doc_size = zkjson.length;
          } catch (e) {
            err("doc cannot be encoded");
          }
          if (doc_size !== null && doc_size > state.max_doc_size)
            err("doc too large");
        }
        if (isNil(before.val))
          state.collections[init(path).join("/")].count += 1;
        const updated = !equals(before.val, after.val);
        if (updated && depth < 10) {
          state = await trigger(
            [isNil(before.val) ? "craete" : "update"],
            state,
            path,
            SmartWeave2,
            kvs,
            executeCron,
            depth,
            {
              data: {
                path: init(path),
                before: before.val,
                after: after.val,
                id: last(path),
                setter: _data.setter
              }
            },
            action.timestamp
          );
        }
        return wrapResult(state, original_signer, SmartWeave2, {
          docID: last(path),
          doc: next_data,
          path: init(path)
        });
      };
      module.exports = { upsert };
    }
  });

  // sdk/contracts/weavedb-bpt/actions/write/remove.js
  var require_remove2 = __commonJS({
    "sdk/contracts/weavedb-bpt/actions/write/remove.js"(exports, module) {
      var { includes, isNil, last, init } = require_src();
      var { parse, trigger, err, wrapResult } = require_utils();
      var { clone } = require_pure();
      var { validate } = require_validate();
      var { del } = require_lib();
      var remove = async (state, action, signer, contractErr = true, SmartWeave2, kvs, executeCron, depth = 1, type = "direct", get) => {
        if ((state.bundlers ?? []).length !== 0 && type === "direct") {
          err("only bundle queries are allowed");
        }
        let original_signer = null;
        if (isNil(signer)) {
          ;
          ({ signer, original_signer } = await validate(
            state,
            action,
            "delete",
            SmartWeave2,
            true,
            kvs
          ));
        }
        const { data, query, new_data, path, _data, col } = await parse(
          state,
          action,
          action.input.function,
          signer,
          0,
          contractErr,
          SmartWeave2,
          kvs,
          get,
          type
        );
        if (type !== "cron" && includes(path[0])(["__tokens__", "__bridge__"])) {
          err(`${path[0]} cannot be updated directly`);
        }
        if (isNil(_data.__data))
          err(`Data doesn't exist`);
        let { before, after } = await del(
          last(path),
          init(path),
          kvs,
          SmartWeave2,
          signer
        );
        if (!isNil(before.val))
          state.collections[init(path).join("/")].count -= 1;
        if (depth < 10) {
          state = await trigger(
            ["delete"],
            state,
            path,
            SmartWeave2,
            kvs,
            executeCron,
            depth,
            {
              data: {
                path: init(path),
                before: before.val,
                after: after.val,
                id: last(path),
                setter: _data.setter
              }
            },
            action.timestamp
          );
        }
        return wrapResult(state, original_signer, SmartWeave2, {
          docID: last(path),
          doc: null,
          path: init(path)
        });
      };
      module.exports = { remove };
    }
  });

  // sdk/contracts/weavedb-bpt/actions/write/query.js
  var require_query = __commonJS({
    "sdk/contracts/weavedb-bpt/actions/write/query.js"(exports, module) {
      var { includes, init, last, isNil, tail } = require_src();
      var { wrapResult, err, parse, trigger } = require_utils();
      var { validate } = require_validate();
      var { put } = require_lib();
      var { add } = require_add2();
      var { set } = require_set2();
      var { update } = require_update2();
      var { upsert } = require_upsert();
      var { remove } = require_remove2();
      var query = async (state, action, signer, contractErr = true, SmartWeave2, kvs, executeCron, depth = 1, type = "direct", get) => {
        if ((state.bundlers ?? []).length !== 0 && type === "direct") {
          err("only bundle queries are allowed");
        }
        let original_signer = null;
        if (isNil(signer)) {
          ;
          ({ signer, original_signer } = await validate(
            state,
            action,
            "query",
            SmartWeave2,
            true,
            kvs
          ));
        }
        const [func, ...input] = action.input.query;
        let action2 = {
          caller: action.caller,
          input: { function: func, query: input, caller: action.input.caller },
          timestamp: action.timestamp
        };
        if (!isNil(action.jobID))
          action2.jobID = action.jobID;
        if (!isNil(action.relayer))
          action2.relayer = action.relayer;
        if (!isNil(action.extra))
          action2.extra = action.extra;
        const params = [
          state,
          action2,
          signer,
          null,
          SmartWeave2,
          kvs,
          executeCron,
          void 0,
          type,
          get
        ];
        const [_func, ..._method] = func.split(":");
        if (_method.length < 1) {
          err(`method name required`);
        } else if (_method.length > 1) {
          err(`method name cannot contain ":"`);
        } else if (includes(_method[0])([
          "add",
          "set",
          "update",
          "upsert",
          "delete",
          "write",
          "create",
          "get"
        ])) {
          err(
            `method name cannot be add | set | update | upsert | delete | write | create | get`
          );
        }
        switch (_func) {
          case "add":
            return await add(
              state,
              action2,
              signer,
              void 0,
              null,
              SmartWeave2,
              kvs,
              executeCron,
              void 0,
              type,
              get
            );
          case "set":
            return await set(...params);
          case "update":
            return await update(...params);
          case "upsert":
            return await upsert(...params);
          case "delete":
            return await remove(...params);
          default:
            err(
              `No function supplied or function not recognised: "${action2.input.function}"`
            );
        }
        return wrapResult(state, original_signer, SmartWeave2);
      };
      module.exports = { query };
    }
  });

  // sdk/contracts/weavedb-bpt/actions/write/nostr.js
  var require_nostr = __commonJS({
    "sdk/contracts/weavedb-bpt/actions/write/nostr.js"(exports, module) {
      var { isNil } = require_src();
      var { err, read } = require_utils();
      var { set } = require_set2();
      var nostr = async (state, action, signer, contractErr = true, SmartWeave2, kvs, executeCron, depth = 1, type = "direct", get) => {
        if (isNil(state.nostr))
          err("nostr is disabled");
        if ((state.bundlers ?? []).length !== 0 && type === "direct") {
          err("only bundle queries are allowed");
        }
        const event = action.input.query;
        const { isValid } = await read(
          state.contracts.nostr,
          { function: "verify", event },
          SmartWeave2
        );
        if (!isValid)
          err(`The wrong signature`);
        let params = [
          state,
          {
            input: {
              query: [event, state.nostr, event.id],
              function: `set:${state.nostr}`
            }
          },
          event.pubkey,
          false,
          SmartWeave2,
          kvs,
          executeCron,
          void 0,
          "direct",
          get
        ];
        return await set(...params);
      };
      module.exports = { nostr };
    }
  });

  // sdk/contracts/weavedb-bpt/actions/write/tick.js
  var require_tick = __commonJS({
    "sdk/contracts/weavedb-bpt/actions/write/tick.js"(exports, module) {
      var { isNil, init, last } = require_src();
      var { err, wrapResult } = require_utils();
      var { validate } = require_validate();
      var tick = async (state, action, signer, contractErr = true, SmartWeave2, kvs, executeCron, depth = 1, type = "direct", get, count = 0) => {
        if (count === 0)
          err("no crons executed");
        if ((state.bundlers ?? []).length !== 0 && type === "direct") {
          err("only bundle queries are allowed");
        }
        let original_signer = null;
        if (isNil(signer)) {
          ;
          ({ signer, original_signer } = await validate(
            state,
            action,
            "tick",
            SmartWeave2,
            true,
            kvs
          ));
        }
        return wrapResult(state, original_signer, SmartWeave2);
      };
      module.exports = { tick };
    }
  });

  // sdk/contracts/weavedb-bpt/actions/write/creditNotice.js
  var require_creditNotice = __commonJS({
    "sdk/contracts/weavedb-bpt/actions/write/creditNotice.js"(exports, module) {
      var { err, wrapResult } = require_utils();
      var { includes, is, of, append, isNil } = require_src();
      var creditNotice = async (state, action, signer, contractErr = true, SmartWeave2, kvs, executeCron, depth = 1, type = "direct") => {
        let token = action.caller;
        state.tokens ??= { available: {}, locked: {} };
        state.tokens.available[token] ??= "0";
        if (isNil(action.input.Quantity) || Number.isNaN(action.input.Quantity) || !/^[0-9]+$/.test(action.input.Quantity)) {
          err(`Quantity is not a valid number: ${action.input.Quantity}`);
        }
        state.tokens.available[token] = (BigInt(state.tokens.available[token]) + BigInt(action.input.Quantity ?? "0")).toString();
        return wrapResult(state, token, SmartWeave2);
      };
      module.exports = { creditNotice };
    }
  });

  // sdk/contracts/weavedb-bpt/actions/write/withdrawToken.js
  var require_withdrawToken = __commonJS({
    "sdk/contracts/weavedb-bpt/actions/write/withdrawToken.js"(exports, module) {
      var { err, wrapResult } = require_utils();
      var { isNil } = require_src();
      var { update } = require_update2();
      var { validate } = require_validate();
      var withdrawToken = async (state, action, signer, contractErr = true, SmartWeave2, kvs, executeCron, depth = 1, type = "direct", get) => {
        let { token, to } = action.input.query;
        if (!/^[a-z0-9_-]{43}$/i.test(to))
          err("Invalid Arweave address.");
        state.tokens ??= {
          available: {},
          available_l2: {},
          locked: {},
          allocated: {}
        };
        let original_signer = null;
        if (isNil(signer)) {
          ;
          ({ signer, original_signer } = await validate(
            state,
            action,
            "withdrawToken",
            SmartWeave2,
            true,
            kvs
          ));
        }
        const _token = (await get(
          state,
          {
            caller: action.caller,
            input: {
              function: "get",
              query: ["__tokens__", ["key", "==", `${token}:${signer}`]]
            }
          },
          true,
          SmartWeave2,
          kvs
        ))?.result?.[0] || null;
        const withdraw = _token?.data?.withdraw ?? 0;
        if (withdraw === 0)
          err("No withdrawable token found");
        await update(
          state,
          {
            caller: action.caller,
            input: {
              function: "update",
              query: [{ withdraw: 0 }, "__tokens__", _token.id]
            }
          },
          signer,
          void 0,
          SmartWeave2,
          kvs,
          executeCron,
          void 0,
          "cron",
          get
        );
        state.tokens.allocated[token] = (BigInt(state.tokens.allocated[token]) - BigInt(withdraw)).toString();
        if (type === "bundle") {
          state.tokens.locked[token] = (BigInt(state.tokens.locked[token]) - BigInt(withdraw)).toString();
        }
        return wrapResult(state, original_signer, SmartWeave2, {
          events: [
            {
              type: "ao_message",
              attributes: [
                { key: "Target", value: token },
                { key: "Action", value: "Transfer" },
                { key: "Quantity", value: BigInt(withdraw).toString() },
                { key: "Recipient", value: to }
              ]
            }
          ]
        });
      };
      module.exports = { withdrawToken };
    }
  });

  // sdk/contracts/weavedb-bpt/actions/write/bridgeToken.js
  var require_bridgeToken = __commonJS({
    "sdk/contracts/weavedb-bpt/actions/write/bridgeToken.js"(exports, module) {
      var { err, wrapResult, isEVMAddress } = require_utils();
      var { isNil, includes } = require_src();
      var { update } = require_update2();
      var { add } = require_add2();
      var { validate } = require_validate();
      var bridgeToken = async (state, action, signer, contractErr = true, SmartWeave2, kvs, executeCron, depth = 1, type = "direct", get) => {
        let { token, to, amount, destination } = action.input.query;
        if (!includes(destination)(state.bridges ?? [])) {
          err(`Destination not allowed: ${destination}`);
        }
        if (!isEVMAddress(to))
          err("Invalid EVM address.");
        if (amount <= 0)
          err(`amount must be positive: ${amount}`);
        state.tokens ??= {
          available: {},
          available_l2: {},
          locked: {},
          allocated: {}
        };
        let original_signer = null;
        if (isNil(signer)) {
          ;
          ({ signer, original_signer } = await validate(
            state,
            action,
            "bridgeToken",
            SmartWeave2,
            true,
            kvs
          ));
        }
        const _token = (await get(
          state,
          {
            caller: action.caller,
            input: {
              function: "get",
              query: ["__tokens__", ["key", "==", `${token}:${signer}`]]
            }
          },
          true,
          SmartWeave2,
          kvs
        ))?.result?.[0] || null;
        const withdraw = _token?.data?.withdraw ?? 0;
        if (withdraw - amount < 0)
          err("Not enough withdrawable token");
        await update(
          state,
          {
            caller: action.caller,
            input: {
              function: "update",
              query: [
                { withdraw: { __op: "inc", n: -amount } },
                "__tokens__",
                _token.id
              ]
            }
          },
          signer,
          void 0,
          SmartWeave2,
          kvs,
          executeCron,
          void 0,
          "cron",
          get
        );
        await add(
          state,
          {
            caller: action.caller,
            input: {
              function: "add",
              query: [
                {
                  from: signer,
                  amount,
                  to,
                  token,
                  destination
                },
                "__bridge__"
              ]
            }
          },
          signer,
          void 0,
          void 0,
          SmartWeave2,
          kvs,
          executeCron,
          void 0,
          "cron",
          get
        );
        state.tokens.allocated[token] = (BigInt(state.tokens.allocated[token]) - BigInt(amount)).toString();
        if (type === "bundle") {
          state.tokens.locked[token] = (BigInt(state.tokens.locked[token]) - BigInt(amount)).toString();
        }
        return wrapResult(state, original_signer, SmartWeave2);
      };
      module.exports = { bridgeToken };
    }
  });

  // sdk/contracts/weavedb-bpt/actions/write/addOwner.js
  var require_addOwner = __commonJS({
    "sdk/contracts/weavedb-bpt/actions/write/addOwner.js"(exports, module) {
      var { err, isOwner, wrapResult } = require_utils();
      var { includes, is, of, append, isNil } = require_src();
      var { validate } = require_validate();
      var addOwner = async (state, action, signer, contractErr = true, SmartWeave2, kvs, executeCron, depth = 1, type = "direct") => {
        if ((state.bundlers ?? []).length !== 0 && type === "direct") {
          err("only bundle queries are allowed");
        }
        let original_signer = null;
        if (isNil(signer)) {
          ;
          ({ signer, original_signer } = await validate(
            state,
            action,
            "addOwner",
            SmartWeave2,
            true,
            kvs
          ));
        }
        const owner = isOwner(signer, state);
        if (!is(String)(action.input.query.address))
          err("Value must be string.");
        if (includes(action.input.query.address, owner)) {
          err("The owner already exists.");
        }
        state.owner = append(action.input.query.address, owner);
        return wrapResult(state, original_signer, SmartWeave2);
      };
      module.exports = { addOwner };
    }
  });

  // sdk/contracts/weavedb-bpt/actions/write/removeOwner.js
  var require_removeOwner = __commonJS({
    "sdk/contracts/weavedb-bpt/actions/write/removeOwner.js"(exports, module) {
      var { err, isOwner, wrapResult } = require_utils();
      var { isNil, without, includes, is, of } = require_src();
      var { validate } = require_validate();
      var removeOwner = async (state, action, signer, contractErr = true, SmartWeave2, kvs, executeCron, depth = 1, type = "direct") => {
        if ((state.bundlers ?? []).length !== 0 && type === "direct") {
          err("only bundle queries are allowed");
        }
        let original_signer = null;
        if (isNil(signer)) {
          ;
          ({ signer, original_signer } = await validate(
            state,
            action,
            "removeOwner",
            SmartWeave2,
            true,
            kvs
          ));
        }
        const owner = isOwner(signer, state);
        if (!is(String)(action.input.query.address)) {
          err("Value must be string.");
        }
        if (!includes(action.input.query.address, owner)) {
          err("The owner doesn't exist.");
        }
        state.owner = without([action.input.query.address], owner);
        return wrapResult(state, original_signer, SmartWeave2);
      };
      module.exports = { removeOwner };
    }
  });

  // sdk/contracts/weavedb-bpt/actions/write/setAlgorithms.js
  var require_setAlgorithms = __commonJS({
    "sdk/contracts/weavedb-bpt/actions/write/setAlgorithms.js"(exports, module) {
      var { isNil, is, intersection } = require_src();
      var { err, wrapResult, parse } = require_utils();
      var { validate } = require_validate();
      var setAlgorithms = async (state, action, signer, contractErr = true, SmartWeave2, kvs, executeCron, depth = 1, type = "direct") => {
        if ((state.bundlers ?? []).length !== 0 && type === "direct") {
          err("only bundle queries are allowed");
        }
        let original_signer = null;
        if (isNil(signer)) {
          ;
          ({ signer, original_signer } = await validate(
            state,
            action,
            "setAlgorithms",
            SmartWeave2,
            true,
            kvs
          ));
        }
        let { _data, data, query, new_data, path } = await parse(
          state,
          action,
          "setAlgorithms",
          signer,
          null,
          contractErr,
          SmartWeave2,
          kvs
        );
        if (!is(Array)(new_data) || intersection(new_data)(["secp256k1", "ed25519", "rsa256", "secp256k1-2"]).length !== new_data.length) {
          err(`The wrong algorithms`);
        }
        state.auth.algorithms = new_data;
        return wrapResult(state, original_signer, SmartWeave2);
      };
      module.exports = { setAlgorithms };
    }
  });

  // sdk/contracts/weavedb-bpt/actions/write/setCanEvolve.js
  var require_setCanEvolve = __commonJS({
    "sdk/contracts/weavedb-bpt/actions/write/setCanEvolve.js"(exports, module) {
      var { err, isOwner, wrapResult } = require_utils();
      var { isNil, is } = require_src();
      var { validate } = require_validate();
      var setCanEvolve = async (state, action, signer, contractErr = true, SmartWeave2, kvs, executeCron, depth = 1, type = "direct") => {
        if ((state.bundlers ?? []).length !== 0 && type === "direct") {
          err("only bundle queries are allowed");
        }
        let original_signer = null;
        if (isNil(signer)) {
          ;
          ({ signer, original_signer } = await validate(
            state,
            action,
            "setCanEvolve",
            SmartWeave2,
            true,
            kvs
          ));
        }
        const owner = isOwner(signer, state);
        if (!is(Boolean)(action.input.query.value)) {
          err("Value must be a boolean.");
        }
        state.canEvolve = action.input.query.value;
        return wrapResult(state, original_signer, SmartWeave2);
      };
      module.exports = { setCanEvolve };
    }
  });

  // sdk/contracts/weavedb-bpt/actions/write/setSecure.js
  var require_setSecure = __commonJS({
    "sdk/contracts/weavedb-bpt/actions/write/setSecure.js"(exports, module) {
      var { err, isOwner, wrapResult } = require_utils();
      var { isNil, is } = require_src();
      var { validate } = require_validate();
      var setSecure = async (state, action, signer, contractErr = true, SmartWeave2, kvs, executeCron, depth = 1, type = "direct") => {
        if ((state.bundlers ?? []).length !== 0 && type === "direct") {
          err("only bundle queries are allowed");
        }
        let original_signer = null;
        if (isNil(signer)) {
          ;
          ({ signer, original_signer } = await validate(
            state,
            action,
            "setSecure",
            SmartWeave2,
            true,
            kvs
          ));
        }
        const owner = isOwner(signer, state);
        if (!is(Boolean)(action.input.query.value))
          err("Value must be a boolean.");
        state.secure = action.input.query.value;
        return wrapResult(state, original_signer, SmartWeave2);
      };
      module.exports = { setSecure };
    }
  });

  // sdk/contracts/weavedb-bpt/actions/write/setSchema.js
  var require_setSchema = __commonJS({
    "sdk/contracts/weavedb-bpt/actions/write/setSchema.js"(exports, module) {
      var { isNil, mergeLeft } = require_src();
      var { kv, err, parse, wrapResult } = require_utils();
      var { clone } = require_pure();
      var { validate } = require_validate();
      var { validate: validator } = require_jsonschema();
      var setSchema = async (state, action, signer, contractErr = true, SmartWeave2, kvs, executeCron, depth = 1, type = "direct") => {
        if ((state.bundlers ?? []).length !== 0 && type === "direct") {
          err("only bundle queries are allowed");
        }
        let original_signer = null;
        if (isNil(signer)) {
          ;
          ({ signer, original_signer } = await validate(
            state,
            action,
            "setSchema",
            SmartWeave2,
            true,
            kvs
          ));
        }
        let { _data, data, query, new_data, path } = await parse(
          state,
          action,
          "setSchema",
          signer,
          null,
          contractErr,
          SmartWeave2,
          kvs
        );
        _data.schema = new_data;
        try {
          const { error } = await validator(
            void 0,
            clone(_data.schema),
            state,
            SmartWeave2
          );
          if (error)
            err("schema error");
        } catch (e) {
          err("schema error");
        }
        await kv(kvs, SmartWeave2).put(`data.${path.join("/")}`, _data);
        return wrapResult(state, original_signer, SmartWeave2);
      };
      module.exports = { setSchema };
    }
  });

  // sdk/contracts/weavedb-bpt/actions/write/addIndex.js
  var require_addIndex2 = __commonJS({
    "sdk/contracts/weavedb-bpt/actions/write/addIndex.js"(exports, module) {
      var { o, flatten, isNil, mergeLeft, includes } = require_src();
      var { err, wrapResult, parse } = require_utils();
      var { validate } = require_validate();
      var { addIndex: __addIndex } = require_lib();
      var addIndex = async (state, action, signer, contractErr = true, SmartWeave2, kvs, executeCron, depth = 1, type = "direct") => {
        if ((state.bundlers ?? []).length !== 0 && type === "direct") {
          err("only bundle queries are allowed");
        }
        let original_signer = null;
        if (isNil(signer)) {
          ;
          ({ signer, original_signer } = await validate(
            state,
            action,
            "addIndex",
            SmartWeave2,
            true,
            kvs
          ));
        }
        let { new_data, path } = await parse(
          state,
          action,
          "addIndex",
          signer,
          null,
          contractErr,
          SmartWeave2,
          kvs
        );
        if (o(includes("__id__"), flatten)(new_data)) {
          err("index cannot contain __id__");
        }
        await __addIndex(new_data, path, kvs, SmartWeave2, signer);
        return wrapResult(state, original_signer, SmartWeave2);
      };
      module.exports = { addIndex };
    }
  });

  // sdk/contracts/weavedb-bpt/actions/write/removeIndex.js
  var require_removeIndex = __commonJS({
    "sdk/contracts/weavedb-bpt/actions/write/removeIndex.js"(exports, module) {
      var { isNil } = require_src();
      var { err, wrapResult, parse } = require_utils();
      var { validate } = require_validate();
      var { removeIndex: __removeIndex } = require_lib();
      var removeIndex = async (state, action, signer, contractErr = true, SmartWeave2, kvs, executeCron, depth = 1, type = "direct") => {
        if ((state.bundlers ?? []).length !== 0 && type === "direct") {
          err("only bundle queries are allowed");
        }
        let original_signer = null;
        if (isNil(signer)) {
          ;
          ({ signer, original_signer } = await validate(
            state,
            action,
            "removeIndex",
            SmartWeave2,
            true,
            kvs
          ));
        }
        let { new_data, path } = await parse(
          state,
          action,
          "removeIndex",
          signer,
          null,
          contractErr,
          SmartWeave2,
          kvs
        );
        await __removeIndex(new_data, path, kvs, SmartWeave2, signer);
        return wrapResult(state, original_signer, SmartWeave2);
      };
      module.exports = { removeIndex };
    }
  });

  // sdk/contracts/weavedb-bpt/actions/write/setRules.js
  var require_setRules = __commonJS({
    "sdk/contracts/weavedb-bpt/actions/write/setRules.js"(exports, module) {
      var {
        insert,
        last,
        isNil,
        mergeLeft,
        includes,
        difference,
        is
      } = require_src();
      var { kv, parse, err, wrapResult } = require_utils();
      var { validate } = require_validate();
      var setRules = async (state, action, signer, contractErr = true, SmartWeave2, kvs, executeCron, depth = 1, type = "direct") => {
        if ((state.bundlers ?? []).length !== 0 && type === "direct") {
          err("only bundle queries are allowed");
        }
        let original_signer = null;
        if (isNil(signer)) {
          ;
          ({ signer, original_signer } = await validate(
            state,
            action,
            "setRules",
            SmartWeave2,
            true,
            kvs
          ));
        }
        let { _data, data, query, new_data, path } = await parse(
          state,
          action,
          "setRules",
          signer,
          null,
          contractErr,
          SmartWeave2,
          kvs
        );
        if (new_data.__op !== "del" && !is(Array, new_data)) {
          err("rules are not an array");
        }
        if (action.input.query.length % 2 === 1) {
          let __data = _data?.rules ?? [];
          let [key, index] = last(action.input.query).split("@");
          if (is(Object, __data) && !is(Array, __data)) {
            err("the current rules is not an array");
          }
          let exists = false;
          let left = [];
          for (let [i, v] of __data.entries()) {
            if (v[0] === key) {
              exists = true;
              index ??= i;
            } else {
              left.push(v);
            }
          }
          if (!exists)
            index ??= __data.length;
          if (!is(Number, +index))
            err("index is not a number");
          _data.rules = new_data.__op === "del" ? left : insert(index, [key, new_data], left);
        } else {
          for (let k in new_data) {
            if (!is(Array, new_data[k]))
              err("rules are not an array");
          }
          _data.rules = new_data;
        }
        await kv(kvs, SmartWeave2).put(`data.${path.join("/")}`, _data);
        return wrapResult(state, original_signer, SmartWeave2);
      };
      module.exports = { setRules };
    }
  });

  // sdk/contracts/weavedb-bpt/actions/write/removeCron.js
  var require_removeCron = __commonJS({
    "sdk/contracts/weavedb-bpt/actions/write/removeCron.js"(exports, module) {
      var { isNil } = require_src();
      var { err, isOwner, wrapResult, parse } = require_utils();
      var { validate } = require_validate();
      var removeCron = async (state, action, signer, contractErr = true, SmartWeave2, kvs, executeCron, depth = 1, type = "direct") => {
        if ((state.bundlers ?? []).length !== 0 && type === "direct") {
          err("only bundle queries are allowed");
        }
        let original_signer = null;
        if (isNil(signer)) {
          ;
          ({ signer, original_signer } = await validate(
            state,
            action,
            "removeCron",
            SmartWeave2,
            true,
            kvs
          ));
        }
        const owner = isOwner(signer, state);
        if (isNil(state.crons)) {
          const timestamp = isNil(action.timestamp) ? SmartWeave2.block.timestamp : Math.round(action.timestamp / 1e3);
          state.crons = { lastExecuted: timestamp, crons: {} };
        }
        const [key] = action.input.query;
        if (isNil(state.crons.crons[key]))
          err("cron doesn't exist");
        delete state.crons.crons[key];
        return wrapResult(state, original_signer, SmartWeave2);
      };
      module.exports = { removeCron };
    }
  });

  // sdk/contracts/weavedb-bpt/actions/write/addRelayerJob.js
  var require_addRelayerJob = __commonJS({
    "sdk/contracts/weavedb-bpt/actions/write/addRelayerJob.js"(exports, module) {
      var { isNil, is, intersection } = require_src();
      var { clone } = require_pure();
      var { err, wrapResult, parse } = require_utils();
      var { validate } = require_validate();
      var { validate: validator } = require_jsonschema();
      var addRelayerJob = async (state, action, signer, contractErr = true, SmartWeave2, kvs, executeCron, depth = 1, type = "direct") => {
        if ((state.bundlers ?? []).length !== 0 && type === "direct") {
          err("only bundle queries are allowed");
        }
        let original_signer = null;
        if (isNil(signer)) {
          ;
          ({ signer, original_signer } = await validate(
            state,
            action,
            "addRelayerJob",
            SmartWeave2,
            true,
            kvs
          ));
        }
        let { _data, data, query, new_data, path } = await parse(
          state,
          action,
          "addRelayerJob",
          signer,
          null,
          contractErr,
          SmartWeave2,
          kvs
        );
        const [jobID, job] = query;
        if (!isNil(job.relayers) && !is(Array, job.relayers)) {
          err("relayers must be Array");
        }
        if (!isNil(job.signers) && !is(Array, job.signers)) {
          err("signers must be Array");
        }
        if (!isNil(job.schema)) {
          try {
            const { error } = await validator(
              void 0,
              clone(job.schema),
              state,
              SmartWeave2
            );
            if (error)
              err("schema error");
          } catch (e) {
            err("schema error");
          }
        }
        if (isNil(state.relayers))
          state.relayers = {};
        state.relayers[jobID] = job;
        return wrapResult(state, original_signer, SmartWeave2);
      };
      module.exports = { addRelayerJob };
    }
  });

  // sdk/contracts/weavedb-bpt/actions/write/removeRelayerJob.js
  var require_removeRelayerJob = __commonJS({
    "sdk/contracts/weavedb-bpt/actions/write/removeRelayerJob.js"(exports, module) {
      var { isNil, is, intersection } = require_src();
      var { parse, clone, err, wrapResult } = require_utils();
      var { validate } = require_validate();
      var removeRelayerJob = async (state, action, signer, contractErr = true, SmartWeave2, kvs, executeCron, depth = 1, type = "direct") => {
        if ((state.bundlers ?? []).length !== 0 && type === "direct") {
          err("only bundle queries are allowed");
        }
        let original_signer = null;
        if (isNil(signer)) {
          ;
          ({ signer, original_signer } = await validate(
            state,
            action,
            "removeRelayerJob",
            SmartWeave2,
            true,
            kvs
          ));
        }
        let { _data, data, query, new_data, path } = await parse(
          state,
          action,
          "removeRelayerJob",
          signer,
          null,
          contractErr,
          SmartWeave2,
          kvs
        );
        const [jobID] = query;
        if (isNil(state.relayers[jobID]))
          err("relayer job doesn't exist");
        delete state.relayers[jobID];
        return wrapResult(state, original_signer, SmartWeave2);
      };
      module.exports = { removeRelayerJob };
    }
  });

  // sdk/contracts/weavedb-bpt/actions/write/linkContract.js
  var require_linkContract = __commonJS({
    "sdk/contracts/weavedb-bpt/actions/write/linkContract.js"(exports, module) {
      var { isNil, is } = require_src();
      var { validate } = require_validate();
      var { err, wrapResult, parse } = require_utils();
      var linkContract = async (state, action, signer, contractErr = true, SmartWeave2, kvs) => {
        let original_signer = null;
        if (isNil(signer)) {
          ;
          ({ signer, original_signer } = await validate(
            state,
            action,
            "linkContract",
            SmartWeave2,
            true,
            kvs
          ));
        }
        let { _data, data, query, new_data, path } = await parse(
          state,
          action,
          "linkContract",
          signer,
          null,
          contractErr,
          SmartWeave2,
          kvs
        );
        const [key, address] = action.input.query;
        if (isNil(key) || isNil(address)) {
          err(`Key or Address not specified`);
        }
        if (isNil(state.contracts))
          state.contracts = {};
        state.contracts[key] = address;
        return wrapResult(state, original_signer, SmartWeave2);
      };
      module.exports = { linkContract };
    }
  });

  // sdk/contracts/weavedb-bpt/actions/write/unlinkContract.js
  var require_unlinkContract = __commonJS({
    "sdk/contracts/weavedb-bpt/actions/write/unlinkContract.js"(exports, module) {
      var { isNil, is } = require_src();
      var { validate } = require_validate();
      var { err, wrapResult, parse } = require_utils();
      var unlinkContract = async (state, action, signer, contractErr = true, SmartWeave2, kvs) => {
        let original_signer = null;
        if (isNil(signer)) {
          ;
          ({ signer, original_signer } = await validate(
            state,
            action,
            "unlinkContract",
            SmartWeave2,
            true,
            kvs
          ));
        }
        let { _data, data, query, new_data, path } = await parse(
          state,
          action,
          "unlinkContract",
          signer,
          null,
          contractErr,
          SmartWeave2,
          kvs
        );
        const [key] = action.input.query;
        if (isNil(key)) {
          throw new ContractError(`Key not specified`);
        }
        if (isNil(state.contracts))
          state.contracts = {};
        delete state.contracts[key];
        return wrapResult(state, original_signer, SmartWeave2);
      };
      module.exports = { unlinkContract };
    }
  });

  // sdk/contracts/weavedb-bpt/actions/write/removeAddressLink.js
  var require_removeAddressLink = __commonJS({
    "sdk/contracts/weavedb-bpt/actions/write/removeAddressLink.js"(exports, module) {
      var { is, isNil } = require_src();
      var { validate } = require_validate();
      var { err, wrapResult, kv } = require_utils();
      var removeAddressLink = async (state, action, signer, contractErr = true, SmartWeave2, kvs) => {
        let original_signer = null;
        if (isNil(signer)) {
          ;
          ({ signer, original_signer } = await validate(
            state,
            action,
            "removeAddressLink",
            SmartWeave2,
            true,
            kvs
          ));
        }
        const { address } = action.input.query;
        const link = await kv(kvs, SmartWeave2).get(`auth.${address.toLowerCase()}`);
        if (isNil(link))
          err("link doesn't exist");
        let _address = is(Object, link) ? link.address : link;
        if (signer !== address.toLowerCase() && signer !== _address) {
          err("signer is neither owner nor delegator");
        }
        await kv(kvs, SmartWeave2).put(`auth.${address.toLowerCase()}`, null);
        return wrapResult(state, original_signer, SmartWeave2);
      };
      module.exports = { removeAddressLink };
    }
  });

  // sdk/contracts/weavedb-bpt/actions/write/addCron.js
  var require_addCron = __commonJS({
    "sdk/contracts/weavedb-bpt/actions/write/addCron.js"(exports, module) {
      var { isNil } = require_src();
      var { clone } = require_pure();
      var { err, isOwner, wrapResult } = require_utils();
      var { validate } = require_validate();
      var addCron = async (state, action, signer, contractErr = true, SmartWeave2, kvs, executeCron, depth = 1, type = "direct") => {
        if ((state.bundlers ?? []).length !== 0 && type === "direct") {
          err("only bundle queries are allowed");
        }
        let original_signer = null;
        if (isNil(signer)) {
          ;
          ({ signer, original_signer } = await validate(
            state,
            action,
            "addCron",
            SmartWeave2,
            true,
            kvs
          ));
        }
        const owner = isOwner(signer, state);
        const timestamp = isNil(action.timestamp) ? SmartWeave2.block.timestamp : Math.round(action.timestamp / 1e3);
        if (isNil(state.crons)) {
          state.crons = { lastExecuted: timestamp, crons: {} };
        }
        const [cron, key] = action.input.query;
        let _cron = clone(cron);
        if (isNil(_cron.start)) {
          _cron.start = timestamp;
        }
        if (timestamp > _cron.start) {
          err("start cannot be before the block time");
        }
        if (!isNil(_cron.end) && timestamp > _cron.end) {
          err("end cannot be before start");
        }
        if (isNil(_cron.jobs) || _cron.jobs.length === 0) {
          err("cron has no jobs");
        }
        if (isNil(_cron.span) || Number.isNaN(_cron.span * 1) || _cron.span <= 0) {
          err("span must be greater than 0");
        }
        state.crons.crons[key] = _cron;
        if (_cron.do) {
          try {
            await executeCron(
              { start: _cron.start, crons: _cron },
              state,
              SmartWeave2,
              kvs,
              action.timestamp
            );
          } catch (e) {
            console.log(e);
            err("cron failed to execute");
          }
        }
        return wrapResult(state, original_signer, SmartWeave2);
      };
      module.exports = { addCron };
    }
  });

  // sdk/contracts/weavedb-bpt/actions/write/addAddressLink.js
  var require_addAddressLink = __commonJS({
    "sdk/contracts/weavedb-bpt/actions/write/addAddressLink.js"(exports, module) {
      var { is, isNil } = require_src();
      var { read, err, wrapResult, kv } = require_utils();
      var { validate } = require_validate();
      var addAddressLink = async (state, action, signer, contractErr = true, SmartWeave2, _linkTo, kvs) => {
        let original_signer = null;
        if (isNil(signer)) {
          ;
          ({ signer, original_signer } = await validate(
            state,
            action,
            "addAddressLink",
            SmartWeave2,
            true,
            kvs
          ));
        }
        let _expiry = 0;
        let linkTo = null;
        let address = null;
        let linkToAddr = signer;
        if (!isNil(action.input.query.proof)) {
          const q = action.input.query;
          const res = await read(
            state.contracts.polygonID,
            {
              function: "verify",
              proof: q.proof,
              pub_signals: q.pub_signals
            },
            SmartWeave2
          );
          if (!res.valid)
            err("invalid proof");
          if (res.pub_signals.userID !== action.input.query.address) {
            err("DID mismatch");
          }
          if (BigInt(signer).toString().slice(0, 15) !== res.pub_signals.value[0].toString()) {
            err("the wrong proof");
          }
          address = signer;
          linkToAddr = res.pub_signals.userID;
        } else {
          const {
            address: _address,
            signature,
            expiry,
            linkTo: _linkTo2
          } = action.input.query;
          address = _address;
          linkTo = _linkTo2;
          if ((!isNil(linkTo) || !isNil(_linkTo2)) && linkTo !== _linkTo2)
            err("linkTo doesn't match");
          if (!isNil(expiry) && !is(Number, expiry))
            err("expiry must be a number");
          const { nonce } = action.input;
          _expiry = expiry || 0;
          const EIP712Domain = [
            { name: "name", type: "string" },
            { name: "version", type: "string" },
            { name: "verifyingContract", type: "string" }
          ];
          const domain = {
            name: state.auth.name,
            version: state.auth.version,
            verifyingContract: SmartWeave2.contract.id
          };
          let query = typeof expiry === "undefined" ? { address: signer } : { address: signer, expiry };
          if (!isNil(linkTo))
            query.linkTo = linkTo;
          const message = {
            nonce,
            query: JSON.stringify({
              func: "auth",
              query
            })
          };
          const data = {
            types: {
              EIP712Domain,
              Query: [
                { name: "query", type: "string" },
                { name: "nonce", type: "uint256" }
              ]
            },
            domain,
            primaryType: "Query",
            message
          };
          let signer2 = (await SmartWeave2.contracts.viewContractState(state.contracts.ethereum, {
            function: "verify712",
            data,
            signature
          })).result.signer;
          const _signer = signer2.toLowerCase();
          if (_signer !== address.toLowerCase())
            err();
        }
        const link = await kv(kvs, SmartWeave2).get(`auth.${address}`);
        const timestamp = isNil(action.timestamp) ? SmartWeave2.block.timestamp : Math.round(action.timestamp / 1e3);
        if (!isNil(link)) {
          let prev_expiry = is(Object, link) ? link.expiry || 0 : 0;
          if (timestamp < prev_expiry) {
            err("link already exists");
          }
        }
        await kv(kvs, SmartWeave2).put(`auth.${address.toLowerCase()}`, {
          address: linkTo || linkToAddr,
          expiry: _expiry === 0 ? 0 : timestamp + _expiry
        });
        return wrapResult(state, original_signer, SmartWeave2);
      };
      module.exports = { addAddressLink };
    }
  });

  // sdk/contracts/weavedb-bpt/actions/write/evolve.js
  var require_evolve2 = __commonJS({
    "sdk/contracts/weavedb-bpt/actions/write/evolve.js"(exports, module) {
      var { isNil, is, of, includes, mergeLeft } = require_src();
      var { err, isOwner, wrapResult } = require_utils();
      var { validate } = require_validate();
      var evolve = async (state, action, signer, contractErr = true, SmartWeave2, kvs) => {
        let original_signer = null;
        if (isNil(signer)) {
          ;
          ({ signer, original_signer } = await validate(
            state,
            action,
            "evolve",
            SmartWeave2,
            true,
            kvs
          ));
        }
        const owner = isOwner(signer, state);
        if (action.input.value !== action.input.query.value) {
          err("Values don't match.");
        }
        if (state.canEvolve) {
          state.evolve = action.input.value;
        } else {
          err(`This contract cannot evolve.`);
        }
        state.evolveHistory ||= [];
        state.evolveHistory.push({
          signer,
          block: SmartWeave2.block.height,
          date: SmartWeave2.block.timestamp,
          srcTxId: action.input.value,
          oldVersion: state.version
        });
        return wrapResult(state, original_signer, SmartWeave2);
      };
      module.exports = { evolve };
    }
  });

  // sdk/contracts/weavedb-bpt/actions/write/lockTokens.js
  var require_lockTokens = __commonJS({
    "sdk/contracts/weavedb-bpt/actions/write/lockTokens.js"(exports, module) {
      var { err, wrapResult } = require_utils();
      var { includes, is, of, append, isNil } = require_src();
      var lockTokens = async (state, action, signer, contractErr = true, SmartWeave2, kvs, executeCron, depth = 1, type = "direct") => {
        state.tokens ??= { available: {}, available_l2: {}, locked: {} };
        state.tokens.available_l2 ??= {};
        const height = action.extra.height;
        const last_token_lock_date = state.last_token_lock_date ?? 0;
        if (height <= state.last_token_lock_height)
          err("tokens already locked");
        if (last_token_lock_date !== action.extra.last_token_lock_date) {
          err("last_token_lock_date doesn't match");
        }
        const tokens = action.extra.tokens;
        for (const k in tokens) {
          state.tokens.available[k] ??= "0";
          state.tokens.available_l2[k] ??= "0";
          state.tokens.locked[k] ??= "0";
          if (type === "bundle") {
            state.tokens.available[k] = (BigInt(state.tokens.available[k]) - BigInt(tokens[k] ?? "0")).toString();
            state.tokens.locked[k] = (BigInt(state.tokens.locked[k]) + BigInt(tokens[k] ?? "0")).toString();
          }
          state.tokens.available_l2[k] = (BigInt(state.tokens.available_l2[k]) + BigInt(tokens[k] ?? "0")).toString();
        }
        state.last_tokens_lock_height = action.extra.height;
        return wrapResult(state, signer, SmartWeave2);
      };
      module.exports = { lockTokens };
    }
  });

  // sdk/contracts/weavedb-bpt/actions/write/relay.js
  var require_relay = __commonJS({
    "sdk/contracts/weavedb-bpt/actions/write/relay.js"(exports, module) {
      var {
        intersection,
        is,
        uniq,
        includes,
        map,
        toLower,
        init,
        last,
        isNil,
        head,
        nth
      } = require_src();
      var { err, read, validateSchema, wrapResult } = require_utils();
      var { validate } = require_validate();
      var { lockTokens } = require_lockTokens();
      var { add } = require_add2();
      var { set } = require_set2();
      var { update } = require_update2();
      var { upsert } = require_upsert();
      var { remove } = require_remove2();
      var { addAddressLink } = require_addAddressLink();
      var { query: _query } = require_query();
      var relay = async (state, action, signer, contractErr = true, SmartWeave2, kvs, executeCron, depth = 1, type = "direct", get, batch) => {
        if ((state.bundlers ?? []).length !== 0 && type === "direct") {
          err("only bundle queries are allowed");
        }
        let jobID = head(action.input.query);
        let input = nth(1, action.input.query);
        let query = nth(2, action.input.query);
        let relayer = type === "bundle" ? action.caller : null;
        const relayers = state.relayers || {};
        let action2 = {
          caller: action.caller,
          input,
          relayer,
          extra: query,
          jobID,
          timestamp: action.timestamp
        };
        let original_signer = null;
        if (type !== "bundle") {
          if (isNil(relayers[jobID]))
            err(`relayer jobID [${jobID}] doesn't exist`);
          if (input.jobID !== jobID)
            err(`jobID mismatch [${input.jobID}|${jobID}]`);
          if (relayers[jobID]?.internalWrites !== true) {
            if (isNil(signer)) {
              ;
              ({ signer, original_signer } = await validate(
                state,
                action,
                "relay",
                SmartWeave2,
                false,
                kvs
              ));
            }
            relayer = signer;
          } else {
            relayer = action.caller;
          }
          if (!isNil(relayers[jobID].relayers)) {
            const allowed_relayers = map((v) => /^0x.+$/.test(v) ? toLower(v) : v)(
              relayers[jobID].relayers || []
            );
          }
          if (includes(relayers[jobID].multisig_type)(["number", "percent"])) {
            const allowed_signers = map(toLower)(relayers[jobID].signers || []);
            let signers = [];
            if (is(Array)(action.input.multisigs)) {
              const data = {
                extra: action2.extra,
                jobID,
                params: input
              };
              for (const signature of action.input.multisigs) {
                const _signer = (await read(
                  state.contracts.ethereum,
                  {
                    function: "verify",
                    data,
                    signature
                  },
                  SmartWeave2
                )).signer;
                signers.push(_signer);
              }
            }
            const matched_signers = intersection(allowed_signers, signers);
            let min = 1;
            if (relayers[jobID].multisig_type === "percent") {
              min = Math.ceil(
                relayers[jobID].signers.length * (relayers[jobID].multisig || 100) / 100
              );
            } else if (relayers[jobID].multisig_type === "number") {
              min = relayers[jobID].multisig || 1;
            }
            if (matched_signers.length < min) {
              err(
                `not enough number of allowed signers [${matched_signers.length}/${min}] for the job[${jobID}]`
              );
            }
          }
          if (!isNil(relayers[jobID].schema)) {
            try {
              validateSchema(relayers[jobID].schema, query);
            } catch (e) {
              err("relayer data validation error");
            }
          }
        }
        const params = [
          state,
          action2,
          null,
          null,
          SmartWeave2,
          kvs,
          executeCron,
          void 0,
          type,
          get
        ];
        switch (action2.input.function) {
          case "add":
            return await add(
              state,
              action2,
              null,
              void 0,
              null,
              SmartWeave2,
              kvs,
              executeCron,
              void 0,
              type,
              get
            );
          case "lockTokens":
            return await lockTokens(...params);
          case "query":
            return await _query(...params);
          case "set":
            return await set(...params);
          case "update":
            return await update(...params);
          case "upsert":
            return await upsert(...params);
          case "delete":
            return await remove(...params);
          case "batch":
            return await batch(...params);
          case "addAddressLink":
            return await addAddressLink(
              state,
              action2,
              null,
              null,
              SmartWeave2,
              action2.extra.linkTo,
              kvs,
              executeCron,
              void 0,
              type,
              get
            );
          default:
            err(
              `No function supplied or function not recognised: "${action2.input.function}"`
            );
        }
        return wrapResult(state, original_signer, SmartWeave2);
      };
      module.exports = { relay };
    }
  });

  // sdk/contracts/weavedb-bpt/actions/write/addTrigger.js
  var require_addTrigger = __commonJS({
    "sdk/contracts/weavedb-bpt/actions/write/addTrigger.js"(exports, module) {
      var { insert, findIndex, propEq, isNil } = require_src();
      var { err, wrapResult, parse } = require_utils();
      var { validate } = require_validate();
      var addTrigger = async (state, action, signer, contractErr = true, SmartWeave2, kvs, executeCron, depth = 1, type = "direct") => {
        if ((state.bundlers ?? []).length !== 0 && type === "direct") {
          err("only bundle queries are allowed");
        }
        let original_signer = null;
        if (isNil(signer)) {
          ;
          ({ signer, original_signer } = await validate(
            state,
            action,
            "addTrigger",
            SmartWeave2,
            true,
            kvs
          ));
        }
        let { col, _data, data, query, new_data, path } = await parse(
          state,
          action,
          "addTrigger",
          signer,
          null,
          contractErr,
          SmartWeave2,
          kvs
        );
        const trigger_key = `trigger.${path.join("/")}`;
        state.triggers ??= {};
        state.triggers[trigger_key] ??= [];
        let { index, key, on, func, version } = action.input.query[0];
        const _index = findIndex(propEq("key", key), state.triggers[trigger_key]);
        version ??= 1;
        if (_index !== -1) {
          state.triggers[trigger_key][_index] = { key, on, func, version };
        } else if (isNil(index)) {
          state.triggers[trigger_key].push({ key, on, func, version });
        } else {
          state.triggers[trigger_key] = insert(
            index,
            { key, on, func, version },
            state.triggers[trigger_key]
          );
        }
        return wrapResult(state, original_signer, SmartWeave2);
      };
      module.exports = { addTrigger };
    }
  });

  // sdk/contracts/weavedb-bpt/actions/write/removeTrigger.js
  var require_removeTrigger = __commonJS({
    "sdk/contracts/weavedb-bpt/actions/write/removeTrigger.js"(exports, module) {
      var { insert, findIndex, propEq, isNil } = require_src();
      var { parse, err, wrapResult } = require_utils();
      var { validate } = require_validate();
      var removeTrigger = async (state, action, signer, contractErr = true, SmartWeave2, kvs, executeCron, depth = 1, type = "direct") => {
        if ((state.bundlers ?? []).length !== 0 && type === "direct") {
          err("only bundle queries are allowed");
        }
        let original_signer = null;
        if (isNil(signer)) {
          ;
          ({ signer, original_signer } = await validate(
            state,
            action,
            "removeTrigger",
            SmartWeave2,
            true,
            kvs
          ));
        }
        let { col, _data, data, query, new_data, path } = await parse(
          state,
          action,
          "removeTrigger",
          signer,
          null,
          contractErr,
          SmartWeave2,
          kvs
        );
        const trigger_key = `trigger.${path.join("/")}`;
        state.triggers ??= {};
        state.triggers[trigger_key] ??= [];
        let key = action.input.query[0];
        const _index = findIndex(propEq("key", key), state.triggers[trigger_key]);
        if (_index !== -1) {
          state.triggers[trigger_key].splice(_index, 1);
        } else {
          err("trigger doesn't exist");
        }
        return wrapResult(state, original_signer, SmartWeave2);
      };
      module.exports = { removeTrigger };
    }
  });

  // sdk/contracts/weavedb-bpt/actions/write/batch.js
  var require_batch = __commonJS({
    "sdk/contracts/weavedb-bpt/actions/write/batch.js"(exports, module) {
      var { includes, isNil, clone } = require_src();
      var { err, wrapResult, parse } = require_utils();
      var { validate } = require_validate();
      var { set } = require_set2();
      var { add } = require_add2();
      var { update } = require_update2();
      var { upsert } = require_upsert();
      var { remove } = require_remove2();
      var { query } = require_query();
      var { relay } = require_relay();
      var { setRules } = require_setRules();
      var { setSchema } = require_setSchema();
      var { setCanEvolve } = require_setCanEvolve();
      var { setSecure } = require_setSecure();
      var { setAlgorithms } = require_setAlgorithms();
      var { addIndex } = require_addIndex2();
      var { addOwner } = require_addOwner();
      var { addRelayerJob } = require_addRelayerJob();
      var { removeCron } = require_removeCron();
      var { removeIndex } = require_removeIndex();
      var { removeOwner } = require_removeOwner();
      var { removeRelayerJob } = require_removeRelayerJob();
      var { addTrigger } = require_addTrigger();
      var { removeTrigger } = require_removeTrigger();
      var batch = async (state, action, signer, contractErr = true, SmartWeave2, kvs, executeCron, depth = 1, type = "direct", get) => {
        if ((state.bundlers ?? []).length !== 0 && type === "direct") {
          err("only bundle queries are allowed");
        }
        let original_signer = null;
        if (isNil(signer)) {
          ;
          ({ signer, original_signer } = await validate(
            state,
            action,
            "batch",
            SmartWeave2,
            true,
            kvs
          ));
        }
        let _state = state;
        let i = 0;
        for (let v of action.input.query) {
          let [op, ...query2] = v;
          const _action = includes(op)(["addOwner", "removeOwner"]) ? {
            input: { function: op, query: { address: query2[0] } },
            caller: action.caller,
            timestamp: action.timestamp
          } : includes(op)(["setCanEvolve", "setSecure"]) ? {
            input: { function: op, query: { value: query2[0] } },
            caller: action.caller,
            timestamp: action.timestamp
          } : {
            input: { function: op, query: query2 },
            caller: action.caller,
            timestamp: action.timestamp
          };
          let res = null;
          const params = [
            _state,
            _action,
            signer,
            contractErr,
            SmartWeave2,
            kvs,
            executeCron,
            depth,
            type,
            get
          ];
          switch (op) {
            case "add":
              res = await add(
                _state,
                _action,
                signer,
                i,
                contractErr,
                SmartWeave2,
                kvs,
                executeCron,
                depth,
                type,
                get
              );
              break;
            case "set":
              res = await set(...params);
              break;
            case "relay":
              res = await relay(...params);
              break;
            case "query":
              res = await query2(...params);
              break;
            case "update":
              res = await update(...params);
              break;
            case "upsert":
              res = await upsert(...params);
              break;
            case "delete":
              res = await remove(...params);
              break;
            case "setRules":
              res = await setRules(...params);
              break;
            case "setSchema":
              res = await setSchema(...params);
              break;
            case "setCanEvolve":
              res = await setCanEvolve(...params);
              break;
            case "setSecure":
              res = await setSecure(...params);
              break;
            case "setAlgorithms":
              res = await setAlgorithms(...params);
              break;
            case "addIndex":
              res = await addIndex(...params);
              break;
            case "addOwner":
              res = await addOwner(...params);
              break;
            case "addRelayerJob":
              res = await addRelayerJob(...params);
              break;
            case "addCron":
              const { addCron } = require_addCron();
              res = await addCron(...params);
              break;
            case "removeCron":
              res = await removeCron(...params);
              break;
            case "removeIndex":
              res = await removeIndex(...params);
              break;
            case "removeOwner":
              res = await removeOwner(...params);
              break;
            case "removeRelayerJob":
              res = await removeRelayerJob(...params);
              break;
            case "addTrigger":
              res = await addTrigger(...params);
              break;
            case "removeTrigger":
              res = await removeTrigger(...params);
              break;
            default:
              const msg = `No function supplied or function not recognised: "${op}"`;
              if (contractErr) {
                err(msg);
              } else {
                throw msg;
              }
          }
          _state = res.state;
          i++;
        }
        return wrapResult(state, original_signer, SmartWeave2);
      };
      module.exports = { batch };
    }
  });

  // sdk/contracts/weavedb-bpt/actions/write/setBundlers.js
  var require_setBundlers = __commonJS({
    "sdk/contracts/weavedb-bpt/actions/write/setBundlers.js"(exports, module) {
      var { err, isOwner, wrapResult } = require_utils();
      var { includes, is, of, append, isNil } = require_src();
      var { validate } = require_validate();
      var setBundlers = async (state, action, signer, contractErr = true, SmartWeave2, kvs, executeCron, depth = 1, type = "direct") => {
        let original_signer = null;
        if (isNil(signer)) {
          ;
          ({ signer, original_signer } = await validate(
            state,
            action,
            "setBundlers",
            SmartWeave2,
            true,
            kvs
          ));
        }
        const owner = isOwner(signer, state);
        if (!is(Array)(action.input.query.bundlers))
          err("Value must be an array.");
        state.bundlers = action.input.query.bundlers;
        return wrapResult(state, original_signer, SmartWeave2);
      };
      module.exports = { setBundlers };
    }
  });

  // sdk/contracts/weavedb-bpt/actions/write/bundle.js
  var require_bundle = __commonJS({
    "sdk/contracts/weavedb-bpt/actions/write/bundle.js"(exports, module) {
      var { err, wrapResult, read, kv } = require_utils();
      var { clone } = require_pure();
      var { isNil, includes, map, addIndex: _addIndex, concat } = require_src();
      var { set } = require_set2();
      var { add } = require_add2();
      var { update } = require_update2();
      var { upsert } = require_upsert();
      var { remove } = require_remove2();
      var { relay } = require_relay();
      var { batch } = require_batch();
      var { query } = require_query();
      var { setRules } = require_setRules();
      var { setSchema } = require_setSchema();
      var { setCanEvolve } = require_setCanEvolve();
      var { setSecure } = require_setSecure();
      var { setAlgorithms } = require_setAlgorithms();
      var { addIndex } = require_addIndex2();
      var { addOwner } = require_addOwner();
      var { withdrawToken } = require_withdrawToken();
      var { bridgeToken } = require_bridgeToken();
      var { addRelayerJob } = require_addRelayerJob();
      var { removeCron } = require_removeCron();
      var { removeIndex } = require_removeIndex();
      var { removeOwner } = require_removeOwner();
      var { removeRelayerJob } = require_removeRelayerJob();
      var { addTrigger } = require_addTrigger();
      var { removeTrigger } = require_removeTrigger();
      var { setBundlers } = require_setBundlers();
      var getId = async (input, timestamp, SmartWeave2) => {
        const str = JSON.stringify({
          contractTxId: SmartWeave2.contract.id,
          input,
          timestamp
        });
        return SmartWeave2.arweave.utils.bufferTob64Url(
          await SmartWeave2.arweave.crypto.hash(
            SmartWeave2.arweave.utils.stringToBuffer(str)
          )
        );
      };
      var getHash = async (ids, SmartWeave2) => {
        return SmartWeave2.arweave.utils.bufferTob64(
          await SmartWeave2.arweave.crypto.hash(
            SmartWeave2.arweave.utils.concatBuffers(
              map((v2) => SmartWeave2.arweave.utils.stringToBuffer(v2))(ids)
            ),
            "SHA-384"
          )
        );
      };
      var getNewHash = async (last_hash, current_hash, SmartWeave2) => {
        const hashes = SmartWeave2.arweave.utils.concatBuffers([
          SmartWeave2.arweave.utils.stringToBuffer(last_hash),
          SmartWeave2.arweave.utils.stringToBuffer(current_hash)
        ]);
        return SmartWeave2.arweave.utils.bufferTob64(
          await SmartWeave2.arweave.crypto.hash(hashes, "SHA-384")
        );
      };
      var bundle = async (state, action, signer, contractErr = true, SmartWeave2, kvs, executeCron, depth = 1, type = "direct", get) => {
        const bundlers = state.bundlers ?? [];
        let isBundler = bundlers.length !== 0;
        if (isBundler && !includes(action.caller, bundlers)) {
          err(`bundler [${action.caller}] is not allowed`);
        }
        const original_signer = action.caller;
        const { data } = await read(
          state.contracts.bundler,
          {
            function: "inflate",
            data: action.input.query
          },
          SmartWeave2
        );
        const parsed = JSON.parse(data);
        let queries = null;
        if (isBundler) {
          let { hash: last_hash, height: h } = state.rollup ?? {
            height: 0,
            hash: SmartWeave2.contract.id
          };
          let ids = [];
          for (let [i, v] of parsed.q.entries()) {
            ids.push(await getId(v, parsed.t[i], SmartWeave2));
          }
          const current_hash = await getHash(ids, SmartWeave2);
          if (h + 1 !== parsed.n) {
            if (h + 1 < parsed.n) {
              let cached = await kv(kvs, SmartWeave2).get(`bundles.${parsed.n}`) ?? [];
              let validity2 = [];
              for (let [i, v] of parsed.q.entries()) {
                validity2.push([ids[i], parsed.n, 2]);
              }
              parsed.i = ids;
              parsed.ch = current_hash;
              cached.unshift({ ...parsed });
              await kv(kvs, SmartWeave2).put(`bundles.${parsed.n}`, cached);
              await kv(kvs, SmartWeave2).put(
                `tx_validities.${SmartWeave2.transaction.id}`,
                validity2
              );
              return wrapResult(state, original_signer, SmartWeave2, {
                validity: validity2,
                errors: []
              });
            } else {
              err(`the wrong bundle height [${h} => ${parsed.n}]`);
            }
          }
          const new_hash = await getNewHash(last_hash, current_hash, SmartWeave2);
          if (parsed.h !== new_hash) {
            err(`the wrong hash [${parsed.h}, ${new_hash}]`);
          }
          last_hash = new_hash;
          state.rollup = { height: parsed.n, hash: new_hash };
          queries = _addIndex(map)((v, i) => ({
            q: v,
            t: parsed.t[i],
            n: parsed.n,
            i: ids[i]
          }))(parsed.q);
          if (isNil(parsed.t) || parsed.q.length !== parsed.t.length) {
            err(`timestamp length is not equal to query length`);
          }
          let last = state.last_block ?? 0;
          for (let [i, v] of parsed.t.entries()) {
            if (last > v) {
              err(`the wrong timestamp[${i}]: ${last} <= ${v}`);
            }
            last = v;
          }
          state.last_block = last;
          let height = parsed.n + 1;
          while (true) {
            let _cached = await kv(kvs, SmartWeave2).get(`bundles.${height}`) ?? [];
            if (_cached.length === 0)
              break;
            await kv(kvs, SmartWeave2).put(`bundles.${height}`, null);
            let next = false;
            for (let [i, v] of _cached.entries()) {
              const new_hash2 = await getNewHash(last_hash, v.ch, SmartWeave2);
              if (v.h !== new_hash2)
                continue;
              for (let [i2, v2] of v.q.entries()) {
                queries.push({ q: v2, t: v.t[i2], n: height, i: v.i[i2] });
              }
              next = true;
              state.rollup = { height, hash: new_hash2 };
              last_hash = new_hash2;
              break;
            }
            if (!next)
              break;
            height++;
          }
        } else {
          queries = map((v) => ({ q: v }))(parsed);
        }
        let validity = [];
        let errors = [];
        let messages = [];
        let events = [];
        let attributes = [];
        for (const v of queries) {
          let valid = true;
          let error = null;
          const sw = {
            ...SmartWeave2,
            ...isBundler ? { transaction: { id: v.i, timestamp: v.t } } : {}
          };
          let params = [
            clone(state),
            { input: v.q, timestamp: isBundler ? v.t : null },
            void 0,
            false,
            sw,
            kvs,
            executeCron,
            void 0,
            "bundle",
            get
          ];
          try {
            const op = v.q.function;
            let res = null;
            switch (op) {
              case "relay":
                res = await relay(...params);
                break;
              case "batch":
                res = await batch(...params);
                break;
              case "add":
                res = await add(
                  clone(state),
                  { input: v.q, timestamp: isBundler ? v.t : null },
                  void 0,
                  void 0,
                  false,
                  sw,
                  kvs,
                  executeCron,
                  void 0,
                  "bundle"
                );
                break;
              case "query":
                res = await query(...params);
                break;
              case "set":
                res = await set(...params);
                break;
              case "update":
                res = await update(...params);
                break;
              case "upsert":
                res = await upsert(...params);
                break;
              case "delete":
                res = await remove(...params);
                break;
              case "setRules":
                res = await setRules(...params);
                break;
              case "setSchema":
                res = await setSchema(...params);
                break;
              case "setCanEvolve":
                res = await setCanEvolve(...params);
                break;
              case "setSecure":
                res = await setSecure(...params);
                break;
              case "setAlgorithms":
                res = await setAlgorithms(...params);
                break;
              case "addIndex":
                res = await addIndex(...params);
                break;
              case "addOwner":
                res = await addOwner(...params);
                break;
              case "addRelayerJob":
                res = await addRelayerJob(...params);
                break;
              case "addCron":
                const { addCron } = require_addCron();
                res = await addCron(...params);
                break;
              case "removeCron":
                res = await removeCron(...params);
                break;
              case "removeIndex":
                res = await removeIndex(...params);
                break;
              case "removeOwner":
                res = await removeOwner(...params);
                break;
              case "removeRelayerJob":
                res = await removeRelayerJob(...params);
                break;
              case "addTrigger":
                res = await addTrigger(...params);
                break;
              case "removeTrigger":
                res = await removeTrigger(...params);
                break;
              case "setBundlers":
                res = await setBundlers(...params);
                break;
              case "withdrawToken":
                res = await withdrawToken(...params);
                break;
              case "bridgeToken":
                res = await bridgeToken(...params);
                break;
              default:
                throw new Error(
                  `No function supplied or function not recognised: "${op}"`
                );
            }
            if (!isNil(res)) {
              state = res.state;
              messages = concat(messages, res?.result?.messages ?? []);
              events = concat(events, res?.result?.events ?? []);
              attributes = concat(attributes, res?.result?.attributes ?? []);
            }
          } catch (e) {
            console.log(e);
            error = e?.toString?.() || "unknown error";
            valid = false;
          }
          validity.push(isBundler ? [v.i, v.n, valid ? 0 : 1] : valid);
          errors.push(error);
        }
        await kv(kvs, SmartWeave2).put(
          `tx_validities.${SmartWeave2.transaction.id}`,
          validity
        );
        return wrapResult(state, original_signer, SmartWeave2, {
          validity,
          errors,
          messages,
          events,
          attributes
        });
      };
      module.exports = { bundle };
    }
  });

  // sdk/contracts/weavedb-bpt/lib/version.js
  var require_version2 = __commonJS({
    "sdk/contracts/weavedb-bpt/lib/version.js"(exports, module) {
      module.exports = "0.44.0";
    }
  });

  // sdk/contracts/weavedb-bpt/actions/write/migrate.js
  var require_migrate = __commonJS({
    "sdk/contracts/weavedb-bpt/actions/write/migrate.js"(exports, module) {
      var { isNil, is, of, includes, mergeLeft, last } = require_src();
      var { err, isEvolving, isOwner, wrapResult } = require_utils();
      var { validate } = require_validate();
      var version = require_version2();
      var migrate = async (state, action, signer, contractErr = true, SmartWeave2, kvs) => {
        let original_signer = null;
        if (isNil(signer)) {
          ;
          ({ signer, original_signer } = await validate(
            state,
            action,
            "migrate",
            SmartWeave2,
            true,
            kvs
          ));
        }
        const owner = isOwner(signer, state);
        if (version !== action.input.query.version) {
          err(`version doesn't match (${version} : ${action.input.query.version})`);
        }
        if (!isEvolving(state))
          err(`contract is not ready to migrate`);
        const old_version = state.version.split(".");
        const new_version = version.split(".");
        if (+old_version[0] === 0 && +new_version[0] === 0 && +old_version[1] < 27 && +new_version[1] >= 27) {
          err(`v${old_version} cannot be upgraded to v${new_version}`);
        }
        state.version = version;
        last(state.evolveHistory).newVersion = version;
        return wrapResult(state, original_signer, SmartWeave2);
      };
      module.exports = { migrate };
    }
  });

  // sdk/contracts/weavedb-bpt/lib/cron.js
  var require_cron = __commonJS({
    "sdk/contracts/weavedb-bpt/lib/cron.js"(exports, module) {
      var fpjson = require_cjs();
      fpjson = fpjson.default ?? fpjson;
      var fn = require_fn();
      var { get } = require_get();
      var { upsert } = require_upsert();
      var { update } = require_update2();
      var { add } = require_add2();
      var { remove } = require_remove2();
      var { set } = require_set2();
      var { batch } = require_batch();
      var ops = {
        get,
        upsert,
        update,
        add,
        delete: remove,
        set,
        batch
      };
      var {
        concat,
        append,
        mergeLeft,
        path,
        is,
        map,
        isNil,
        includes,
        sortBy,
        prop,
        head
      } = require_src();
      var { fpj, clone, replace$ } = require_pure();
      var executeCron = async (cron2, state, SmartWeave2, kvs, depth = 1, _vars = { batch: [] }, timestamp = null) => {
        let vars = mergeLeft(_vars, {
          block: {
            height: SmartWeave2.block.height,
            timestamp: SmartWeave2.block.timestamp
          },
          transaction: {
            id: SmartWeave2.transaction.id,
            timestamp: timestamp ?? SmartWeave2.transaction.timestamp ?? SmartWeave2.block.timestamp * 1e3
          }
        });
        const parse = (query) => {
          if (is(Array, query)) {
            query = map((v) => is(Object, v) ? parse(v) : v)(query);
          } else if (is(Object, query)) {
            if (is(String, query.var)) {
              return path(query.var.split("."))(vars);
            } else {
              query = map((v) => parse(v))(query);
            }
          }
          return query;
        };
        let batchExecuted = false;
        const execQuery = async (op, query) => {
          let params = [
            state,
            {
              caller: state.owner,
              input: { function: op, query: await parse(replace$(query)) },
              timestamp
            },
            true
          ];
          if (op === "add")
            params.push(0);
          params.push(false);
          params.push(SmartWeave2);
          params.push(kvs);
          params.push(executeCron);
          params.push(depth + 1);
          params.push("cron");
          params.push(ops.get);
          return await ops[op](...params);
        };
        if (cron2.crons.version === 2) {
          await fpj(replace$(cron2.crons.jobs), vars, {
            hash: fn.hash,
            parse: fn.parse,
            transfer: async (_query) => {
              const query = _query[0];
              const token = (await ops.get(
                state,
                {
                  caller: state.owner,
                  input: {
                    function: "get",
                    query: [
                      "__tokens__",
                      ["key", "==", `${query.token}:${query.from}`]
                    ]
                  }
                },
                true,
                SmartWeave2,
                kvs
              )).result[0] || null;
              const amount = token?.data?.amount ?? 0;
              if (query.amount > amount)
                return [null, false];
              await execQuery("update", [
                {
                  amount: { __op: "inc", n: -query.amount }
                },
                "__tokens__",
                token.id
              ]);
              const token2 = (await ops.get(
                state,
                {
                  caller: state.owner,
                  input: {
                    function: "get",
                    query: [
                      "__tokens__",
                      ["key", "==", `${query.token}:${query.to}`]
                    ]
                  }
                },
                true,
                SmartWeave2,
                kvs
              )).result[0] || null;
              if (isNil(token2)) {
                await execQuery("add", [
                  {
                    key: `${query.token}:${query.to}`,
                    amount: query.amount,
                    address: query.to,
                    token: query.token
                  },
                  "__tokens__"
                ]);
              } else {
                await execQuery("update", [
                  {
                    amount: { __op: "inc", n: query.amount }
                  },
                  "__tokens__",
                  token2.id
                ]);
              }
              return [null, false];
            },
            withdraw: async (_query) => {
              const query = _query[0];
              const token = (await ops.get(
                state,
                {
                  caller: state.owner,
                  input: {
                    function: "get",
                    query: [
                      "__tokens__",
                      ["key", "==", `${query.token}:${query.from}`]
                    ]
                  }
                },
                true,
                SmartWeave2,
                kvs
              )).result[0] || null;
              const amount = token?.data?.amount ?? 0;
              if (query.amount > amount)
                return [null, false];
              await execQuery("update", [
                {
                  amount: { __op: "inc", n: -query.amount },
                  withdraw: { __op: "inc", n: query.amount }
                },
                "__tokens__",
                token.id
              ]);
              return [null, false];
            },
            mint: async (_query) => {
              const query = _query[0];
              state.tokens.available_l2 ??= {};
              state.tokens.allocated ??= {};
              state.tokens.available_l2[query.token] ??= "0";
              state.tokens.allocated[query.token] ??= "0";
              if (BigInt(state.tokens.available_l2[query.token]) - BigInt(query.amount) < 0) {
                return [null, false];
              }
              state.tokens.available_l2[query.token] = (BigInt(state.tokens.available_l2[query.token]) - BigInt(query.amount)).toString();
              state.tokens.allocated[query.token] = (BigInt(state.tokens.allocated[query.token]) + BigInt(query.amount)).toString();
              const token = (await ops.get(
                state,
                {
                  caller: state.owner,
                  input: {
                    function: "get",
                    query: [
                      "__tokens__",
                      ["key", "==", `${query.token}:${query.to}`]
                    ]
                  }
                },
                true,
                SmartWeave2,
                kvs
              )).result[0] || null;
              if (token === null) {
                await execQuery("add", [
                  {
                    key: `${query.token}:${query.to}`,
                    amount: query.amount,
                    address: query.to,
                    token: query.token
                  },
                  "__tokens__"
                ]);
              } else {
                await execQuery("update", [
                  {
                    amount: { __op: "inc", n: query.amount }
                  },
                  "__tokens__",
                  token.id
                ]);
              }
              return [null, false];
            },
            toBase64: fn.toBase64,
            stringify: fn.stringify,
            upsert: fn.upsert(execQuery),
            delete: fn.delete(execQuery),
            update: fn.update(execQuery),
            set: fn.set(execQuery),
            add: fn.add(execQuery),
            batch: fn.batch(execQuery),
            toBatchAll: fn.toBatchAll,
            toBatch: fn.toBatch,
            get: async (query) => {
              const val = (await ops.get(
                state,
                {
                  caller: state.owner,
                  input: { function: "get", query },
                  timestamp
                },
                void 0,
                SmartWeave2,
                kvs
              )).result || null;
              return [val, false];
            }
          });
          if (!isNil(vars.batch) && vars.batch.length > 0 && vars.batchExecuted !== true) {
            await execQuery("batch", vars.batch);
          }
        } else {
          for (let job of cron2.crons.jobs) {
            let op = head(job);
            let _var = null;
            let query = null;
            if (op === "if") {
              if (!fpjson(job[1], vars))
                continue;
              job = job[2];
              op = head(job);
            }
            if (op === "ifelse") {
              job = fpjson(job[1], vars) ? job[2] : job[3];
              op = head(job);
            }
            if (op === "break")
              break;
            if (includes(op)(["get", "let"])) {
              _var = job[1];
              query = job[2];
            } else {
              query = job[1];
            }
            if (op === "do") {
              fpjson(query, vars);
            } else if (op === "let") {
              vars[_var] = fpjson(query, vars);
            } else if (op === "get") {
              const _default = job[3];
              vars[_var] = (await ops.get(
                state,
                {
                  caller: state.owner,
                  input: { function: "get", query: await parse(query) }
                },
                void 0,
                SmartWeave2,
                kvs
              )).result || _default;
            } else if (includes(op)(["set", "upsert", "add", "delete", "update", "batch"])) {
              let params = [
                state,
                {
                  caller: state.owner,
                  input: { function: op, query: await parse(query) }
                },
                true
              ];
              if (op === "add")
                params.push(0);
              params.push(false);
              params.push(SmartWeave2);
              params.push(kvs);
              params.push(executeCron);
              params.push(depth + 1);
              params.push("cron");
              params.push(ops.get);
              await ops[op](...params);
            }
          }
        }
      };
      var cron = async (state, SmartWeave2, _kvs = {}, timestamp) => {
        const now = SmartWeave2.block.timestamp;
        if (isNil(state.crons)) {
          state.crons = { lastExecuted: now, crons: {} };
        }
        const last = state.crons.lastExecuted;
        let crons = [];
        for (let k in state.crons.crons) {
          const v = state.crons.crons[k];
          let start = v.start;
          let end = v.end;
          let times = v.do ? 1 : 0;
          while (start <= now && (isNil(v.times) || v.times >= times)) {
            if (start > last && isNil(end) || end >= start) {
              if (start !== v.start || v.do)
                crons.push({ start, crons: v });
            }
            start += v.span;
            times += 1;
          }
        }
        crons = sortBy(prop("start"))(crons);
        let _state = clone(state);
        for (let cron2 of crons) {
          try {
            let kvs = { batch: [] };
            await executeCron(cron2, _state, SmartWeave2, kvs, timestamp);
            for (const k in kvs)
              _kvs[k] = kvs[k];
          } catch (e) {
            console.log(e);
          }
        }
        _state.crons.lastExecuted = SmartWeave2.block.timestamp;
        return { state: _state, count: crons.length };
      };
      module.exports = { cron, executeCron };
    }
  });

  // sdk/contracts/weavedb-bpt/contract.js
  var require_contract = __commonJS({
    "sdk/contracts/weavedb-bpt/contract.js"(exports, module) {
      var { hash } = require_hash();
      var { getCrons } = require_getCrons();
      var { getAlgorithms } = require_getAlgorithms();
      var { getLinkedContract } = require_getLinkedContract();
      var { getOwner } = require_getOwner();
      var { getRelayerJob } = require_getRelayerJob();
      var { listRelayerJobs } = require_listRelayerJobs();
      var { getEvolve } = require_getEvolve();
      var { getTriggers } = require_getTriggers();
      var { getBundlers } = require_getBundlers();
      var { getInfo } = require_getInfo();
      var { getTokens } = require_getTokens();
      var { getAddressLink } = require_getAddressLink();
      var { ids } = require_ids();
      var { validities } = require_validities();
      var { nonce } = require_nonce();
      var { version } = require_version();
      var { get } = require_get();
      var { getSchema } = require_getSchema();
      var { getRules } = require_getRules();
      var { getIndexes } = require_getIndexes();
      var { listCollections } = require_listCollections();
      var { getCollection } = require_getCollection();
      var { query } = require_query();
      var { nostr } = require_nostr();
      var { set } = require_set2();
      var { tick } = require_tick();
      var { upsert } = require_upsert();
      var { update } = require_update2();
      var { remove } = require_remove2();
      var { creditNotice } = require_creditNotice();
      var { withdrawToken } = require_withdrawToken();
      var { bridgeToken } = require_bridgeToken();
      var { addOwner } = require_addOwner();
      var { removeOwner } = require_removeOwner();
      var { setAlgorithms } = require_setAlgorithms();
      var { setCanEvolve } = require_setCanEvolve();
      var { setSecure } = require_setSecure();
      var { setSchema } = require_setSchema();
      var { addIndex } = require_addIndex2();
      var { removeIndex } = require_removeIndex();
      var { setRules } = require_setRules();
      var { removeCron } = require_removeCron();
      var { addRelayerJob } = require_addRelayerJob();
      var { removeRelayerJob } = require_removeRelayerJob();
      var { linkContract } = require_linkContract();
      var { unlinkContract } = require_unlinkContract();
      var { removeAddressLink } = require_removeAddressLink();
      var { addCron } = require_addCron();
      var { addAddressLink } = require_addAddressLink();
      var { evolve } = require_evolve2();
      var { add } = require_add2();
      var { batch } = require_batch();
      var { bundle } = require_bundle();
      var { relay } = require_relay();
      var { migrate } = require_migrate();
      var { addTrigger } = require_addTrigger();
      var { removeTrigger } = require_removeTrigger();
      var { setBundlers } = require_setBundlers();
      var { cron, executeCron } = require_cron();
      var { err, isEvolving } = require_utils();
      var { includes, isNil, keys, filter, compose, match } = require_src();
      var writes = [
        "relay",
        "set",
        "nostr",
        "setSchema",
        "setRules",
        "addIndex",
        "removeIndex",
        "add",
        "upsert",
        "remove",
        "batch",
        "bundle",
        "addCron",
        "removeCron",
        "setAlgorithms",
        "addRelayerJob",
        "linkContract",
        "unlinkContract",
        "setCanEvolve",
        "setSecure",
        "addOwner",
        "removeOwner",
        "addAddressLink",
        "removeAddressLink",
        "addTrigger",
        "removeTrigger",
        "setBundlers",
        "creditNotice",
        "withdrawToken",
        "bridgeToken"
      ];
      var addHash = (_SmartWeave) => async ({ state, result }) => {
        if (isNil(state.hash)) {
          state.hash = _SmartWeave.transaction.id;
        } else {
          const hashes = _SmartWeave.arweave.utils.concatBuffers([
            _SmartWeave.arweave.utils.stringToBuffer(state.hash),
            _SmartWeave.arweave.utils.stringToBuffer(_SmartWeave.transaction.id)
          ]);
          const hash2 = await _SmartWeave.arweave.crypto.hash(hashes, "SHA-384");
          state.hash = _SmartWeave.arweave.utils.bufferTob64(hash2);
        }
        return { state, result };
      };
      async function handle2(state, action, _SmartWeave) {
        let kvs = {};
        if (typeof SmartWeave !== "undefined")
          _SmartWeave = SmartWeave;
        if (isEvolving(state) && includes(action.input.function)(writes) && action.input.function !== "evolve") {
          err("contract needs migration");
        }
        let count = 0;
        try {
          let _kvs = {};
          ({ state, count } = await cron(state, _SmartWeave, _kvs));
          kvs = _kvs;
        } catch (e) {
          console.log(e);
        }
        const readParams = [state, action, _SmartWeave, kvs];
        const writeParams = [
          state,
          action,
          void 0,
          void 0,
          _SmartWeave,
          kvs,
          executeCron,
          void 0,
          void 0,
          get
        ];
        let res = null;
        switch (action.input.function) {
          case "get":
            return await get(state, action, false, _SmartWeave, kvs);
          case "cget":
            return await get(state, action, true, _SmartWeave, kvs);
          case "getAddressLink":
            return await getAddressLink(...readParams);
          case "listCollections":
            return await listCollections(...readParams);
          case "getCollection":
            return await getCollection(...readParams);
          case "getInfo":
            return await getInfo(...readParams);
          case "getTokens":
            return await getTokens(...readParams);
          case "getCrons":
            return await getCrons(...readParams);
          case "getAlgorithms":
            return await getAlgorithms(...readParams);
          case "getLinkedContract":
            return await getLinkedContract(...readParams);
          case "listRelayerJobs":
            return await listRelayerJobs(...readParams);
          case "getRelayerJob":
            return await getRelayerJob(...readParams);
          case "getIndexes":
            return await getIndexes(...readParams);
          case "getTriggers":
            return await getTriggers(...readParams);
          case "getSchema":
            return await getSchema(...readParams);
          case "getRules":
            return await getRules(...readParams);
          case "ids":
            return await ids(...readParams);
          case "validities":
            return await validities(...readParams);
          case "nonce":
            return await nonce(...readParams);
          case "hash":
            return await hash(...readParams);
          case "version":
            return await version(...readParams);
          case "getOwner":
            return await getOwner(...readParams);
          case "getBundlers":
            return await getBundlers(...readParams);
          case "getEvolve":
            return await getEvolve(...readParams);
          case "tick":
            return await addHash(_SmartWeave)(await tick(...writeParams, count));
          case "add":
            res = await addHash(_SmartWeave)(
              await add(
                state,
                action,
                void 0,
                void 0,
                void 0,
                _SmartWeave,
                kvs,
                executeCron,
                void 0,
                void 0,
                get
              )
            );
            break;
          case "query":
            res = await addHash(_SmartWeave)(await query(...writeParams));
            break;
          case "nostr":
            res = await addHash(_SmartWeave)(await nostr(...writeParams));
            break;
          case "set":
            res = await addHash(_SmartWeave)(await set(...writeParams));
            break;
          case "upsert":
            res = await addHash(_SmartWeave)(await upsert(...writeParams));
            break;
          case "update":
            res = await addHash(_SmartWeave)(await update(...writeParams));
            break;
          case "delete":
            res = await addHash(_SmartWeave)(await remove(...writeParams));
            break;
          case "batch":
            res = await addHash(_SmartWeave)(await batch(...writeParams));
            break;
          case "bundle":
            res = await addHash(_SmartWeave)(await bundle(...writeParams));
            break;
          case "relay":
            res = await addHash(_SmartWeave)(await relay(...writeParams, batch));
            break;
          case "addOwner":
            res = await addHash(_SmartWeave)(await addOwner(...writeParams));
            break;
          case "removeOwner":
            res = await addHash(_SmartWeave)(await removeOwner(...writeParams));
            break;
          case "setBundlers":
            res = await addHash(_SmartWeave)(await setBundlers(...writeParams));
            break;
          case "setAlgorithms":
            res = await addHash(_SmartWeave)(await setAlgorithms(...writeParams));
            break;
          case "setCanEvolve":
            res = await addHash(_SmartWeave)(await setCanEvolve(...writeParams));
            break;
          case "setSecure":
            res = await addHash(_SmartWeave)(await setSecure(...writeParams));
            break;
          case "setSchema":
            res = await addHash(_SmartWeave)(await setSchema(...writeParams));
            break;
          case "addIndex":
            res = await addHash(_SmartWeave)(await addIndex(...writeParams));
            break;
          case "removeIndex":
            res = await addHash(_SmartWeave)(await removeIndex(...writeParams));
            break;
          case "setRules":
            res = await addHash(_SmartWeave)(await setRules(...writeParams));
            break;
          case "removeCron":
            res = await addHash(_SmartWeave)(await removeCron(...writeParams));
            break;
          case "addRelayerJob":
            res = await addHash(_SmartWeave)(await addRelayerJob(...writeParams));
            break;
          case "removeRelayerJob":
            res = await addHash(_SmartWeave)(await removeRelayerJob(...writeParams));
            break;
          case "linkContract":
            res = await addHash(_SmartWeave)(await linkContract(...writeParams));
            break;
          case "unlinkContract":
            res = await addHash(_SmartWeave)(await unlinkContract(...writeParams));
            break;
          case "removeAddressLink":
            res = await addHash(_SmartWeave)(await removeAddressLink(...writeParams));
            break;
          case "addCron":
            res = await addHash(_SmartWeave)(await addCron(...writeParams));
            break;
          case "addTrigger":
            res = await addHash(_SmartWeave)(await addTrigger(...writeParams));
            break;
          case "removeTrigger":
            res = await addHash(_SmartWeave)(await removeTrigger(...writeParams));
            break;
          case "Credit-Notice":
            res = await addHash(_SmartWeave)(await creditNotice(...writeParams));
            break;
          case "withdrawToken":
            res = await addHash(_SmartWeave)(await withdrawToken(...writeParams));
            break;
          case "bridgeToken":
            res = await addHash(_SmartWeave)(await bridgeToken(...writeParams));
            break;
          case "addAddressLink":
            res = await addHash(_SmartWeave)(
              await addAddressLink(
                state,
                action,
                void 0,
                void 0,
                _SmartWeave,
                void 0,
                kvs,
                get
              )
            );
            break;
          case "evolve":
            res = await addHash(_SmartWeave)(await evolve(...writeParams));
            break;
          case "migrate":
            res = await addHash(_SmartWeave)(await migrate(...writeParams));
            break;
          default:
            err(
              `No function supplied or function not recognised: "${action.input.function}"`
            );
        }
        if (!isNil(res)) {
          for (let k in kvs)
            await _SmartWeave.kv.put(k, kvs[k]);
          res.result.kvs = kvs;
          return res;
        }
        return { state };
      }
      module.exports = { handle: handle2 };
    }
  });

  // contracts/weavedb-bpt/contract.js
  var import_contract = __toESM(require_contract());
  async function handle(state, action) {
    return await (0, import_contract.handle)(state, action);
  }

