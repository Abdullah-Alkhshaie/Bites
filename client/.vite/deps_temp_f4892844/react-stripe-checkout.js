import {
  require_react
} from "./chunk-ZSN3XFJS.js";
import {
  __commonJS
} from "./chunk-2GTGKKMZ.js";

// node_modules/react-is/cjs/react-is.development.js
var require_react_is_development = __commonJS({
  "node_modules/react-is/cjs/react-is.development.js"(exports) {
    "use strict";
    if (true) {
      (function() {
        "use strict";
        var hasSymbol = typeof Symbol === "function" && Symbol.for;
        var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for("react.element") : 60103;
        var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for("react.portal") : 60106;
        var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for("react.fragment") : 60107;
        var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for("react.strict_mode") : 60108;
        var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for("react.profiler") : 60114;
        var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for("react.provider") : 60109;
        var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for("react.context") : 60110;
        var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for("react.async_mode") : 60111;
        var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for("react.concurrent_mode") : 60111;
        var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for("react.forward_ref") : 60112;
        var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for("react.suspense") : 60113;
        var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for("react.suspense_list") : 60120;
        var REACT_MEMO_TYPE = hasSymbol ? Symbol.for("react.memo") : 60115;
        var REACT_LAZY_TYPE = hasSymbol ? Symbol.for("react.lazy") : 60116;
        var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for("react.block") : 60121;
        var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for("react.fundamental") : 60117;
        var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for("react.responder") : 60118;
        var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for("react.scope") : 60119;
        function isValidElementType(type) {
          return typeof type === "string" || typeof type === "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
          type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === "object" && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
        }
        function typeOf(object) {
          if (typeof object === "object" && object !== null) {
            var $$typeof = object.$$typeof;
            switch ($$typeof) {
              case REACT_ELEMENT_TYPE:
                var type = object.type;
                switch (type) {
                  case REACT_ASYNC_MODE_TYPE:
                  case REACT_CONCURRENT_MODE_TYPE:
                  case REACT_FRAGMENT_TYPE:
                  case REACT_PROFILER_TYPE:
                  case REACT_STRICT_MODE_TYPE:
                  case REACT_SUSPENSE_TYPE:
                    return type;
                  default:
                    var $$typeofType = type && type.$$typeof;
                    switch ($$typeofType) {
                      case REACT_CONTEXT_TYPE:
                      case REACT_FORWARD_REF_TYPE:
                      case REACT_LAZY_TYPE:
                      case REACT_MEMO_TYPE:
                      case REACT_PROVIDER_TYPE:
                        return $$typeofType;
                      default:
                        return $$typeof;
                    }
                }
              case REACT_PORTAL_TYPE:
                return $$typeof;
            }
          }
          return void 0;
        }
        var AsyncMode = REACT_ASYNC_MODE_TYPE;
        var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
        var ContextConsumer = REACT_CONTEXT_TYPE;
        var ContextProvider = REACT_PROVIDER_TYPE;
        var Element = REACT_ELEMENT_TYPE;
        var ForwardRef = REACT_FORWARD_REF_TYPE;
        var Fragment = REACT_FRAGMENT_TYPE;
        var Lazy = REACT_LAZY_TYPE;
        var Memo = REACT_MEMO_TYPE;
        var Portal = REACT_PORTAL_TYPE;
        var Profiler = REACT_PROFILER_TYPE;
        var StrictMode = REACT_STRICT_MODE_TYPE;
        var Suspense = REACT_SUSPENSE_TYPE;
        var hasWarnedAboutDeprecatedIsAsyncMode = false;
        function isAsyncMode(object) {
          {
            if (!hasWarnedAboutDeprecatedIsAsyncMode) {
              hasWarnedAboutDeprecatedIsAsyncMode = true;
              console["warn"]("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.");
            }
          }
          return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
        }
        function isConcurrentMode(object) {
          return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
        }
        function isContextConsumer(object) {
          return typeOf(object) === REACT_CONTEXT_TYPE;
        }
        function isContextProvider(object) {
          return typeOf(object) === REACT_PROVIDER_TYPE;
        }
        function isElement(object) {
          return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
        }
        function isForwardRef(object) {
          return typeOf(object) === REACT_FORWARD_REF_TYPE;
        }
        function isFragment(object) {
          return typeOf(object) === REACT_FRAGMENT_TYPE;
        }
        function isLazy(object) {
          return typeOf(object) === REACT_LAZY_TYPE;
        }
        function isMemo(object) {
          return typeOf(object) === REACT_MEMO_TYPE;
        }
        function isPortal(object) {
          return typeOf(object) === REACT_PORTAL_TYPE;
        }
        function isProfiler(object) {
          return typeOf(object) === REACT_PROFILER_TYPE;
        }
        function isStrictMode(object) {
          return typeOf(object) === REACT_STRICT_MODE_TYPE;
        }
        function isSuspense(object) {
          return typeOf(object) === REACT_SUSPENSE_TYPE;
        }
        exports.AsyncMode = AsyncMode;
        exports.ConcurrentMode = ConcurrentMode;
        exports.ContextConsumer = ContextConsumer;
        exports.ContextProvider = ContextProvider;
        exports.Element = Element;
        exports.ForwardRef = ForwardRef;
        exports.Fragment = Fragment;
        exports.Lazy = Lazy;
        exports.Memo = Memo;
        exports.Portal = Portal;
        exports.Profiler = Profiler;
        exports.StrictMode = StrictMode;
        exports.Suspense = Suspense;
        exports.isAsyncMode = isAsyncMode;
        exports.isConcurrentMode = isConcurrentMode;
        exports.isContextConsumer = isContextConsumer;
        exports.isContextProvider = isContextProvider;
        exports.isElement = isElement;
        exports.isForwardRef = isForwardRef;
        exports.isFragment = isFragment;
        exports.isLazy = isLazy;
        exports.isMemo = isMemo;
        exports.isPortal = isPortal;
        exports.isProfiler = isProfiler;
        exports.isStrictMode = isStrictMode;
        exports.isSuspense = isSuspense;
        exports.isValidElementType = isValidElementType;
        exports.typeOf = typeOf;
      })();
    }
  }
});

// node_modules/react-is/index.js
var require_react_is = __commonJS({
  "node_modules/react-is/index.js"(exports, module) {
    "use strict";
    if (false) {
      module.exports = null;
    } else {
      module.exports = require_react_is_development();
    }
  }
});

// node_modules/object-assign/index.js
var require_object_assign = __commonJS({
  "node_modules/object-assign/index.js"(exports, module) {
    "use strict";
    var getOwnPropertySymbols = Object.getOwnPropertySymbols;
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    var propIsEnumerable = Object.prototype.propertyIsEnumerable;
    function toObject(val) {
      if (val === null || val === void 0) {
        throw new TypeError("Object.assign cannot be called with null or undefined");
      }
      return Object(val);
    }
    function shouldUseNative() {
      try {
        if (!Object.assign) {
          return false;
        }
        var test1 = new String("abc");
        test1[5] = "de";
        if (Object.getOwnPropertyNames(test1)[0] === "5") {
          return false;
        }
        var test2 = {};
        for (var i = 0; i < 10; i++) {
          test2["_" + String.fromCharCode(i)] = i;
        }
        var order2 = Object.getOwnPropertyNames(test2).map(function(n) {
          return test2[n];
        });
        if (order2.join("") !== "0123456789") {
          return false;
        }
        var test3 = {};
        "abcdefghijklmnopqrst".split("").forEach(function(letter) {
          test3[letter] = letter;
        });
        if (Object.keys(Object.assign({}, test3)).join("") !== "abcdefghijklmnopqrst") {
          return false;
        }
        return true;
      } catch (err) {
        return false;
      }
    }
    module.exports = shouldUseNative() ? Object.assign : function(target, source) {
      var from;
      var to = toObject(target);
      var symbols;
      for (var s = 1; s < arguments.length; s++) {
        from = Object(arguments[s]);
        for (var key in from) {
          if (hasOwnProperty.call(from, key)) {
            to[key] = from[key];
          }
        }
        if (getOwnPropertySymbols) {
          symbols = getOwnPropertySymbols(from);
          for (var i = 0; i < symbols.length; i++) {
            if (propIsEnumerable.call(from, symbols[i])) {
              to[symbols[i]] = from[symbols[i]];
            }
          }
        }
      }
      return to;
    };
  }
});

// node_modules/prop-types/lib/ReactPropTypesSecret.js
var require_ReactPropTypesSecret = __commonJS({
  "node_modules/prop-types/lib/ReactPropTypesSecret.js"(exports, module) {
    "use strict";
    var ReactPropTypesSecret = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
    module.exports = ReactPropTypesSecret;
  }
});

// node_modules/prop-types/lib/has.js
var require_has = __commonJS({
  "node_modules/prop-types/lib/has.js"(exports, module) {
    module.exports = Function.call.bind(Object.prototype.hasOwnProperty);
  }
});

// node_modules/prop-types/checkPropTypes.js
var require_checkPropTypes = __commonJS({
  "node_modules/prop-types/checkPropTypes.js"(exports, module) {
    "use strict";
    var printWarning = function() {
    };
    if (true) {
      ReactPropTypesSecret = require_ReactPropTypesSecret();
      loggedTypeFailures = {};
      has = require_has();
      printWarning = function(text) {
        var message = "Warning: " + text;
        if (typeof console !== "undefined") {
          console.error(message);
        }
        try {
          throw new Error(message);
        } catch (x) {
        }
      };
    }
    var ReactPropTypesSecret;
    var loggedTypeFailures;
    var has;
    function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
      if (true) {
        for (var typeSpecName in typeSpecs) {
          if (has(typeSpecs, typeSpecName)) {
            var error;
            try {
              if (typeof typeSpecs[typeSpecName] !== "function") {
                var err = Error(
                  (componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
                );
                err.name = "Invariant Violation";
                throw err;
              }
              error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
            } catch (ex) {
              error = ex;
            }
            if (error && !(error instanceof Error)) {
              printWarning(
                (componentName || "React class") + ": type specification of " + location + " `" + typeSpecName + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof error + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
              );
            }
            if (error instanceof Error && !(error.message in loggedTypeFailures)) {
              loggedTypeFailures[error.message] = true;
              var stack = getStack ? getStack() : "";
              printWarning(
                "Failed " + location + " type: " + error.message + (stack != null ? stack : "")
              );
            }
          }
        }
      }
    }
    checkPropTypes.resetWarningCache = function() {
      if (true) {
        loggedTypeFailures = {};
      }
    };
    module.exports = checkPropTypes;
  }
});

// node_modules/prop-types/factoryWithTypeCheckers.js
var require_factoryWithTypeCheckers = __commonJS({
  "node_modules/prop-types/factoryWithTypeCheckers.js"(exports, module) {
    "use strict";
    var ReactIs = require_react_is();
    var assign = require_object_assign();
    var ReactPropTypesSecret = require_ReactPropTypesSecret();
    var has = require_has();
    var checkPropTypes = require_checkPropTypes();
    var printWarning = function() {
    };
    if (true) {
      printWarning = function(text) {
        var message = "Warning: " + text;
        if (typeof console !== "undefined") {
          console.error(message);
        }
        try {
          throw new Error(message);
        } catch (x) {
        }
      };
    }
    function emptyFunctionThatReturnsNull() {
      return null;
    }
    module.exports = function(isValidElement, throwOnDirectAccess) {
      var ITERATOR_SYMBOL = typeof Symbol === "function" && Symbol.iterator;
      var FAUX_ITERATOR_SYMBOL = "@@iterator";
      function getIteratorFn(maybeIterable) {
        var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
        if (typeof iteratorFn === "function") {
          return iteratorFn;
        }
      }
      var ANONYMOUS = "<<anonymous>>";
      var ReactPropTypes = {
        array: createPrimitiveTypeChecker("array"),
        bigint: createPrimitiveTypeChecker("bigint"),
        bool: createPrimitiveTypeChecker("boolean"),
        func: createPrimitiveTypeChecker("function"),
        number: createPrimitiveTypeChecker("number"),
        object: createPrimitiveTypeChecker("object"),
        string: createPrimitiveTypeChecker("string"),
        symbol: createPrimitiveTypeChecker("symbol"),
        any: createAnyTypeChecker(),
        arrayOf: createArrayOfTypeChecker,
        element: createElementTypeChecker(),
        elementType: createElementTypeTypeChecker(),
        instanceOf: createInstanceTypeChecker,
        node: createNodeChecker(),
        objectOf: createObjectOfTypeChecker,
        oneOf: createEnumTypeChecker,
        oneOfType: createUnionTypeChecker,
        shape: createShapeTypeChecker,
        exact: createStrictShapeTypeChecker
      };
      function is(x, y) {
        if (x === y) {
          return x !== 0 || 1 / x === 1 / y;
        } else {
          return x !== x && y !== y;
        }
      }
      function PropTypeError(message, data) {
        this.message = message;
        this.data = data && typeof data === "object" ? data : {};
        this.stack = "";
      }
      PropTypeError.prototype = Error.prototype;
      function createChainableTypeChecker(validate) {
        if (true) {
          var manualPropTypeCallCache = {};
          var manualPropTypeWarningCount = 0;
        }
        function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
          componentName = componentName || ANONYMOUS;
          propFullName = propFullName || propName;
          if (secret !== ReactPropTypesSecret) {
            if (throwOnDirectAccess) {
              var err = new Error(
                "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
              );
              err.name = "Invariant Violation";
              throw err;
            } else if (typeof console !== "undefined") {
              var cacheKey = componentName + ":" + propName;
              if (!manualPropTypeCallCache[cacheKey] && // Avoid spamming the console because they are often not actionable except for lib authors
              manualPropTypeWarningCount < 3) {
                printWarning(
                  "You are manually calling a React.PropTypes validation function for the `" + propFullName + "` prop on `" + componentName + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
                );
                manualPropTypeCallCache[cacheKey] = true;
                manualPropTypeWarningCount++;
              }
            }
          }
          if (props[propName] == null) {
            if (isRequired) {
              if (props[propName] === null) {
                return new PropTypeError("The " + location + " `" + propFullName + "` is marked as required " + ("in `" + componentName + "`, but its value is `null`."));
              }
              return new PropTypeError("The " + location + " `" + propFullName + "` is marked as required in " + ("`" + componentName + "`, but its value is `undefined`."));
            }
            return null;
          } else {
            return validate(props, propName, componentName, location, propFullName);
          }
        }
        var chainedCheckType = checkType.bind(null, false);
        chainedCheckType.isRequired = checkType.bind(null, true);
        return chainedCheckType;
      }
      function createPrimitiveTypeChecker(expectedType) {
        function validate(props, propName, componentName, location, propFullName, secret) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== expectedType) {
            var preciseType = getPreciseType(propValue);
            return new PropTypeError(
              "Invalid " + location + " `" + propFullName + "` of type " + ("`" + preciseType + "` supplied to `" + componentName + "`, expected ") + ("`" + expectedType + "`."),
              { expectedType }
            );
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createAnyTypeChecker() {
        return createChainableTypeChecker(emptyFunctionThatReturnsNull);
      }
      function createArrayOfTypeChecker(typeChecker) {
        function validate(props, propName, componentName, location, propFullName) {
          if (typeof typeChecker !== "function") {
            return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside arrayOf.");
          }
          var propValue = props[propName];
          if (!Array.isArray(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected an array."));
          }
          for (var i = 0; i < propValue.length; i++) {
            var error = typeChecker(propValue, i, componentName, location, propFullName + "[" + i + "]", ReactPropTypesSecret);
            if (error instanceof Error) {
              return error;
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createElementTypeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          if (!isValidElement(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected a single ReactElement."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createElementTypeTypeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          if (!ReactIs.isValidElementType(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected a single ReactElement type."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createInstanceTypeChecker(expectedClass) {
        function validate(props, propName, componentName, location, propFullName) {
          if (!(props[propName] instanceof expectedClass)) {
            var expectedClassName = expectedClass.name || ANONYMOUS;
            var actualClassName = getClassName(props[propName]);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + actualClassName + "` supplied to `" + componentName + "`, expected ") + ("instance of `" + expectedClassName + "`."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createEnumTypeChecker(expectedValues) {
        if (!Array.isArray(expectedValues)) {
          if (true) {
            if (arguments.length > 1) {
              printWarning(
                "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
              );
            } else {
              printWarning("Invalid argument supplied to oneOf, expected an array.");
            }
          }
          return emptyFunctionThatReturnsNull;
        }
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          for (var i = 0; i < expectedValues.length; i++) {
            if (is(propValue, expectedValues[i])) {
              return null;
            }
          }
          var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
            var type = getPreciseType(value);
            if (type === "symbol") {
              return String(value);
            }
            return value;
          });
          return new PropTypeError("Invalid " + location + " `" + propFullName + "` of value `" + String(propValue) + "` " + ("supplied to `" + componentName + "`, expected one of " + valuesString + "."));
        }
        return createChainableTypeChecker(validate);
      }
      function createObjectOfTypeChecker(typeChecker) {
        function validate(props, propName, componentName, location, propFullName) {
          if (typeof typeChecker !== "function") {
            return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside objectOf.");
          }
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== "object") {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected an object."));
          }
          for (var key in propValue) {
            if (has(propValue, key)) {
              var error = typeChecker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
              if (error instanceof Error) {
                return error;
              }
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createUnionTypeChecker(arrayOfTypeCheckers) {
        if (!Array.isArray(arrayOfTypeCheckers)) {
          true ? printWarning("Invalid argument supplied to oneOfType, expected an instance of array.") : void 0;
          return emptyFunctionThatReturnsNull;
        }
        for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
          var checker = arrayOfTypeCheckers[i];
          if (typeof checker !== "function") {
            printWarning(
              "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + getPostfixForTypeWarning(checker) + " at index " + i + "."
            );
            return emptyFunctionThatReturnsNull;
          }
        }
        function validate(props, propName, componentName, location, propFullName) {
          var expectedTypes = [];
          for (var i2 = 0; i2 < arrayOfTypeCheckers.length; i2++) {
            var checker2 = arrayOfTypeCheckers[i2];
            var checkerResult = checker2(props, propName, componentName, location, propFullName, ReactPropTypesSecret);
            if (checkerResult == null) {
              return null;
            }
            if (checkerResult.data && has(checkerResult.data, "expectedType")) {
              expectedTypes.push(checkerResult.data.expectedType);
            }
          }
          var expectedTypesMessage = expectedTypes.length > 0 ? ", expected one of type [" + expectedTypes.join(", ") + "]" : "";
          return new PropTypeError("Invalid " + location + " `" + propFullName + "` supplied to " + ("`" + componentName + "`" + expectedTypesMessage + "."));
        }
        return createChainableTypeChecker(validate);
      }
      function createNodeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
          if (!isNode(props[propName])) {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` supplied to " + ("`" + componentName + "`, expected a ReactNode."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function invalidValidatorError(componentName, location, propFullName, key, type) {
        return new PropTypeError(
          (componentName || "React class") + ": " + location + " type `" + propFullName + "." + key + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + type + "`."
        );
      }
      function createShapeTypeChecker(shapeTypes) {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== "object") {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` " + ("supplied to `" + componentName + "`, expected `object`."));
          }
          for (var key in shapeTypes) {
            var checker = shapeTypes[key];
            if (typeof checker !== "function") {
              return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
            }
            var error = checker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
            if (error) {
              return error;
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createStrictShapeTypeChecker(shapeTypes) {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== "object") {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` " + ("supplied to `" + componentName + "`, expected `object`."));
          }
          var allKeys = assign({}, props[propName], shapeTypes);
          for (var key in allKeys) {
            var checker = shapeTypes[key];
            if (has(shapeTypes, key) && typeof checker !== "function") {
              return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
            }
            if (!checker) {
              return new PropTypeError(
                "Invalid " + location + " `" + propFullName + "` key `" + key + "` supplied to `" + componentName + "`.\nBad object: " + JSON.stringify(props[propName], null, "  ") + "\nValid keys: " + JSON.stringify(Object.keys(shapeTypes), null, "  ")
              );
            }
            var error = checker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
            if (error) {
              return error;
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function isNode(propValue) {
        switch (typeof propValue) {
          case "number":
          case "string":
          case "undefined":
            return true;
          case "boolean":
            return !propValue;
          case "object":
            if (Array.isArray(propValue)) {
              return propValue.every(isNode);
            }
            if (propValue === null || isValidElement(propValue)) {
              return true;
            }
            var iteratorFn = getIteratorFn(propValue);
            if (iteratorFn) {
              var iterator = iteratorFn.call(propValue);
              var step;
              if (iteratorFn !== propValue.entries) {
                while (!(step = iterator.next()).done) {
                  if (!isNode(step.value)) {
                    return false;
                  }
                }
              } else {
                while (!(step = iterator.next()).done) {
                  var entry = step.value;
                  if (entry) {
                    if (!isNode(entry[1])) {
                      return false;
                    }
                  }
                }
              }
            } else {
              return false;
            }
            return true;
          default:
            return false;
        }
      }
      function isSymbol(propType, propValue) {
        if (propType === "symbol") {
          return true;
        }
        if (!propValue) {
          return false;
        }
        if (propValue["@@toStringTag"] === "Symbol") {
          return true;
        }
        if (typeof Symbol === "function" && propValue instanceof Symbol) {
          return true;
        }
        return false;
      }
      function getPropType(propValue) {
        var propType = typeof propValue;
        if (Array.isArray(propValue)) {
          return "array";
        }
        if (propValue instanceof RegExp) {
          return "object";
        }
        if (isSymbol(propType, propValue)) {
          return "symbol";
        }
        return propType;
      }
      function getPreciseType(propValue) {
        if (typeof propValue === "undefined" || propValue === null) {
          return "" + propValue;
        }
        var propType = getPropType(propValue);
        if (propType === "object") {
          if (propValue instanceof Date) {
            return "date";
          } else if (propValue instanceof RegExp) {
            return "regexp";
          }
        }
        return propType;
      }
      function getPostfixForTypeWarning(value) {
        var type = getPreciseType(value);
        switch (type) {
          case "array":
          case "object":
            return "an " + type;
          case "boolean":
          case "date":
          case "regexp":
            return "a " + type;
          default:
            return type;
        }
      }
      function getClassName(propValue) {
        if (!propValue.constructor || !propValue.constructor.name) {
          return ANONYMOUS;
        }
        return propValue.constructor.name;
      }
      ReactPropTypes.checkPropTypes = checkPropTypes;
      ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
      ReactPropTypes.PropTypes = ReactPropTypes;
      return ReactPropTypes;
    };
  }
});

// node_modules/prop-types/index.js
var require_prop_types = __commonJS({
  "node_modules/prop-types/index.js"(exports, module) {
    if (true) {
      ReactIs = require_react_is();
      throwOnDirectAccess = true;
      module.exports = require_factoryWithTypeCheckers()(ReactIs.isElement, throwOnDirectAccess);
    } else {
      module.exports = null();
    }
    var ReactIs;
    var throwOnDirectAccess;
  }
});

// node_modules/react-stripe-checkout/dist/main.js
var require_main = __commonJS({
  "node_modules/react-stripe-checkout/dist/main.js"(exports) {
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _extends = Object.assign || function(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
    var _createClass = function() {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor)
            descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      return function(Constructor, protoProps, staticProps) {
        if (protoProps)
          defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();
    var _react = require_react();
    var _react2 = _interopRequireDefault(_react);
    var _propTypes = require_prop_types();
    var _propTypes2 = _interopRequireDefault(_propTypes);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _possibleConstructorReturn(self, call) {
      if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
      if (superClass)
        Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }
    var scriptLoading = false;
    var scriptLoaded = false;
    var scriptDidError = false;
    var ReactStripeCheckout = function(_React$Component) {
      _inherits(ReactStripeCheckout2, _React$Component);
      function ReactStripeCheckout2(props) {
        _classCallCheck(this, ReactStripeCheckout2);
        var _this = _possibleConstructorReturn(this, (ReactStripeCheckout2.__proto__ || Object.getPrototypeOf(ReactStripeCheckout2)).call(this, props));
        _this.onScriptLoaded = function() {
          if (!ReactStripeCheckout2.stripeHandler) {
            ReactStripeCheckout2.stripeHandler = StripeCheckout.configure({
              key: _this.props.stripeKey
            });
            if (_this.hasPendingClick) {
              _this.showStripeDialog();
            }
          }
        };
        _this.onScriptError = function() {
          for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this.hideLoadingDialog();
          if (_this.props.onScriptError) {
            _this.props.onScriptError.apply(_this, args);
          }
        };
        _this.onClosed = function() {
          for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
          }
          if (_this._isMounted)
            _this.setState({ open: false });
          if (_this.props.closed) {
            _this.props.closed.apply(_this, args);
          }
        };
        _this.onOpened = function() {
          for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
            args[_key3] = arguments[_key3];
          }
          _this.setState({ open: true });
          if (_this.props.opened) {
            _this.props.opened.apply(_this, args);
          }
        };
        _this.getConfig = function() {
          return ["token", "image", "name", "description", "amount", "locale", "currency", "panelLabel", "zipCode", "shippingAddress", "billingAddress", "email", "allowRememberMe", "bitcoin", "alipay", "alipayReusable"].reduce(function(config, key) {
            return _extends({}, config, _this.props.hasOwnProperty(key) && _defineProperty({}, key, _this.props[key]));
          }, {
            opened: _this.onOpened,
            closed: _this.onClosed
          });
        };
        _this.onClick = function() {
          if (_this.props.disabled) {
            return;
          }
          if (scriptDidError) {
            try {
              throw new Error("Tried to call onClick, but StripeCheckout failed to load");
            } catch (x) {
            }
          } else if (ReactStripeCheckout2.stripeHandler) {
            _this.showStripeDialog();
          } else {
            _this.showLoadingDialog();
            _this.hasPendingClick = true;
          }
        };
        _this.handleOnMouseDown = function() {
          _this.setState({
            buttonActive: true
          });
        };
        _this.handleOnMouseUp = function() {
          _this.setState({
            buttonActive: false
          });
        };
        _this.state = {
          open: false,
          buttonActive: false
        };
        return _this;
      }
      _createClass(ReactStripeCheckout2, [{
        key: "componentDidMount",
        value: function componentDidMount() {
          var _this2 = this;
          this._isMounted = true;
          if (scriptLoaded) {
            return;
          }
          if (scriptLoading) {
            return;
          }
          scriptLoading = true;
          var script = document.createElement("script");
          if (typeof this.props.onScriptTagCreated === "function") {
            this.props.onScriptTagCreated(script);
          }
          script.src = "https://checkout.stripe.com/checkout.js";
          script.async = 1;
          this.loadPromise = function() {
            var canceled = false;
            var promise = new Promise(function(resolve, reject) {
              script.onload = function() {
                scriptLoaded = true;
                scriptLoading = false;
                resolve();
                _this2.onScriptLoaded();
              };
              script.onerror = function(event) {
                scriptDidError = true;
                scriptLoading = false;
                reject(event);
                _this2.onScriptError(event);
              };
            });
            var wrappedPromise = new Promise(function(accept, cancel) {
              promise.then(function() {
                return canceled ? cancel({ isCanceled: true }) : accept();
              });
              promise.catch(function(error) {
                return canceled ? cancel({ isCanceled: true }) : cancel(error);
              });
            });
            return {
              promise: wrappedPromise,
              cancel: function cancel() {
                canceled = true;
              }
            };
          }();
          this.loadPromise.promise.then(this.onScriptLoaded).catch(this.onScriptError);
          document.body.appendChild(script);
        }
      }, {
        key: "componentDidUpdate",
        value: function componentDidUpdate() {
          if (!scriptLoading) {
            this.updateStripeHandler();
          }
        }
      }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
          this._isMounted = false;
          if (this.loadPromise) {
            this.loadPromise.cancel();
          }
          if (ReactStripeCheckout2.stripeHandler && this.state.open) {
            ReactStripeCheckout2.stripeHandler.close();
          }
        }
      }, {
        key: "updateStripeHandler",
        value: function updateStripeHandler() {
          if (!ReactStripeCheckout2.stripeHandler || this.props.reconfigureOnUpdate) {
            ReactStripeCheckout2.stripeHandler = StripeCheckout.configure({
              key: this.props.stripeKey
            });
          }
        }
      }, {
        key: "showLoadingDialog",
        value: function showLoadingDialog() {
          if (this.props.showLoadingDialog) {
            for (var _len4 = arguments.length, args = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
              args[_key4] = arguments[_key4];
            }
            this.props.showLoadingDialog.apply(this, args);
          }
        }
      }, {
        key: "hideLoadingDialog",
        value: function hideLoadingDialog() {
          if (this.props.hideLoadingDialog) {
            for (var _len5 = arguments.length, args = Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
              args[_key5] = arguments[_key5];
            }
            this.props.hideLoadingDialog.apply(this, args);
          }
        }
      }, {
        key: "showStripeDialog",
        value: function showStripeDialog() {
          this.hideLoadingDialog();
          ReactStripeCheckout2.stripeHandler.open(this.getConfig());
        }
      }, {
        key: "renderDefaultStripeButton",
        value: function renderDefaultStripeButton() {
          return _react2.default.createElement(
            "button",
            _extends({}, _defineProperty({}, this.props.triggerEvent, this.onClick), {
              className: this.props.className,
              onMouseDown: this.handleOnMouseDown,
              onFocus: this.handleOnMouseDown,
              onMouseUp: this.handleOnMouseUp,
              onMouseOut: this.handleOnMouseUp,
              onBlur: this.handleOnMouseUp,
              style: _extends({}, {
                overflow: "hidden",
                display: "inline-block",
                background: "linear-gradient(#28a0e5,#015e94)",
                border: 0,
                padding: 1,
                textDecoration: "none",
                borderRadius: 5,
                boxShadow: "0 1px 0 rgba(0,0,0,0.2)",
                cursor: "pointer",
                visibility: "visible",
                userSelect: "none"
              }, this.state.buttonActive && {
                background: "#005d93"
              }, this.props.style)
            }),
            _react2.default.createElement(
              "span",
              {
                style: _extends({}, {
                  backgroundImage: "linear-gradient(#7dc5ee,#008cdd 85%,#30a2e4)",
                  fontFamily: '"Helvetica Neue",Helvetica,Arial,sans-serif',
                  fontSize: 14,
                  position: "relative",
                  padding: "0 12px",
                  display: "block",
                  height: 30,
                  lineHeight: "30px",
                  color: "#fff",
                  fontWeight: "bold",
                  boxShadow: "inset 0 1px 0 rgba(255,255,255,0.25)",
                  textShadow: "0 -1px 0 rgba(0,0,0,0.25)",
                  borderRadius: 4
                }, this.state.buttonActive && {
                  color: "#eee",
                  boxShadow: "inset 0 1px 0 rgba(0,0,0,0.1)",
                  backgroundImage: "linear-gradient(#008cdd,#008cdd 85%,#239adf)"
                }, this.props.textStyle)
              },
              this.props.label
            )
          );
        }
      }, {
        key: "renderDisabledButton",
        value: function renderDisabledButton() {
          return _react2.default.createElement(
            "button",
            {
              disabled: true,
              style: {
                background: "rgba(0,0,0,0.2)",
                overflow: "hidden",
                display: "inline-block",
                border: 0,
                padding: 1,
                textDecoration: "none",
                borderRadius: 5,
                userSelect: "none"
              }
            },
            _react2.default.createElement(
              "span",
              {
                style: {
                  boxShadow: "inset 0 1px 0 rgba(255,255,255,0.25)",
                  fontFamily: '"Helvetica Neue",Helvetica,Arial,sans-serif',
                  fontSize: 14,
                  position: "relative",
                  padding: "0 12px",
                  display: "block",
                  height: 30,
                  lineHeight: "30px",
                  borderRadius: 4,
                  color: "#999",
                  background: "#f8f9fa",
                  textShadow: "0 1px 0 rgba(255,255,255,0.5)"
                }
              },
              this.props.label
            )
          );
        }
      }, {
        key: "render",
        value: function render() {
          if (this.props.desktopShowModal === true && !this.state.open) {
            this.onClick();
          } else if (this.props.desktopShowModal === false && this.state.open) {
            ReactStripeCheckout2.stripeHandler.close();
          }
          var ComponentClass = this.props.ComponentClass;
          if (this.props.children) {
            return _react2.default.createElement(ComponentClass, _extends({}, _defineProperty({}, this.props.triggerEvent, this.onClick), {
              children: this.props.children
            }));
          }
          return this.props.disabled ? this.renderDisabledButton() : this.renderDefaultStripeButton();
        }
      }]);
      return ReactStripeCheckout2;
    }(_react2.default.Component);
    ReactStripeCheckout.defaultProps = {
      className: "StripeCheckout",
      label: "Pay With Card",
      locale: "auto",
      ComponentClass: "span",
      reconfigureOnUpdate: false,
      triggerEvent: "onClick"
    };
    ReactStripeCheckout.propTypes = {
      // Opens / closes the checkout modal by value
      // WARNING: does not work on mobile due to browser security restrictions
      // NOTE: Must be set to false when receiving token to prevent modal from
      //       opening automatically after closing
      desktopShowModal: _propTypes2.default.bool,
      triggerEvent: _propTypes2.default.oneOf(["onClick", "onTouchTap", "onTouchStart"]),
      // If included, will render the default blue button with label text.
      // (Requires including stripe-checkout.css or adding the .styl file
      // to your pipeline)
      label: _propTypes2.default.string,
      // Custom styling for default button
      style: _propTypes2.default.object,
      // Custom styling for <span> tag inside default button
      textStyle: _propTypes2.default.object,
      // Prevents any events from opening the popup
      // Adds the disabled prop to the button and adjusts the styling as well
      disabled: _propTypes2.default.bool,
      // Named component to wrap button (eg. div)
      ComponentClass: _propTypes2.default.string,
      // Show a loading indicator
      showLoadingDialog: _propTypes2.default.func,
      // Hide the loading indicator
      hideLoadingDialog: _propTypes2.default.func,
      // Run this method when the scrupt fails to load. Will run if the internet
      // connection is offline when attemting to load the script.
      onScriptError: _propTypes2.default.func,
      // Runs when the script tag is created, but before it is added to the DOM
      onScriptTagCreated: _propTypes2.default.func,
      // By default, any time the React component is updated, it will call
      // StripeCheckout.configure, which may result in additional XHR calls to the
      // stripe API.  If you know the first configuration is all you need, you
      // can set this to false.  Subsequent updates will affect the StripeCheckout.open
      // (e.g. different prices)
      reconfigureOnUpdate: _propTypes2.default.bool,
      // =====================================================
      // Required by stripe
      // see Stripe docs for more info:
      //   https://stripe.com/docs/checkout#integration-custom
      // =====================================================
      // Your publishable key (test or live).
      // can't use "key" as a prop in react, so have to change the keyname
      stripeKey: _propTypes2.default.string.isRequired,
      // The callback to invoke when the Checkout process is complete.
      //   function(token)
      //     token is the token object created.
      //     token.id can be used to create a charge or customer.
      //     token.email contains the email address entered by the user.
      token: _propTypes2.default.func.isRequired,
      // ==========================
      // Highly Recommended Options
      // ==========================
      // Name of the company or website.
      name: _propTypes2.default.string,
      // A description of the product or service being purchased.
      description: _propTypes2.default.string,
      // A relative URL pointing to a square image of your brand or product. The
      // recommended minimum size is 128x128px. The recommended image types are
      // .gif, .jpeg, and .png.
      image: _propTypes2.default.string,
      // The amount (in cents) that's shown to the user. Note that you will still
      // have to explicitly include it when you create a charge using the API.
      amount: _propTypes2.default.number,
      // Specify auto to display Checkout in the user's preferred language, if
      // available. English will be used by default.
      //
      // https://stripe.com/docs/checkout#supported-languages
      // for more info.
      locale: _propTypes2.default.oneOf([
        "auto",
        // (Default) Automatically chosen by checkout
        "zh",
        // Simplified Chinese
        "da",
        // Danish
        "nl",
        // Dutch
        "en",
        // English
        "fr",
        // French
        "de",
        // German
        "it",
        // Italian
        "ja",
        // Japanease
        "no",
        // Norwegian
        "es",
        // Spanish
        "sv"
      ]),
      // ==============
      // Optional Props
      // ==============
      // The currency of the amount (3-letter ISO code). The default is USD.
      currency: _propTypes2.default.oneOf([
        "AED",
        "AFN",
        "ALL",
        "AMD",
        "ANG",
        "AOA",
        "ARS",
        "AUD",
        "AWG",
        "AZN",
        "BAM",
        "BBD",
        // eslint-disable-line comma-spacing
        "BDT",
        "BGN",
        "BIF",
        "BMD",
        "BND",
        "BOB",
        "BRL",
        "BSD",
        "BWP",
        "BZD",
        "CAD",
        "CDF",
        // eslint-disable-line comma-spacing
        "CHF",
        "CLP",
        "CNY",
        "COP",
        "CRC",
        "CVE",
        "CZK",
        "DJF",
        "DKK",
        "DOP",
        "DZD",
        "EEK",
        // eslint-disable-line comma-spacing
        "EGP",
        "ETB",
        "EUR",
        "FJD",
        "FKP",
        "GBP",
        "GEL",
        "GIP",
        "GMD",
        "GNF",
        "GTQ",
        "GYD",
        // eslint-disable-line comma-spacing
        "HKD",
        "HNL",
        "HRK",
        "HTG",
        "HUF",
        "IDR",
        "ILS",
        "INR",
        "ISK",
        "JMD",
        "JPY",
        "KES",
        // eslint-disable-line comma-spacing
        "KGS",
        "KHR",
        "KMF",
        "KRW",
        "KYD",
        "KZT",
        "LAK",
        "LBP",
        "LKR",
        "LRD",
        "LSL",
        "LTL",
        // eslint-disable-line comma-spacing
        "LVL",
        "MAD",
        "MDL",
        "MGA",
        "MKD",
        "MNT",
        "MOP",
        "MRO",
        "MUR",
        "MVR",
        "MWK",
        "MXN",
        // eslint-disable-line comma-spacing
        "MYR",
        "MZN",
        "NAD",
        "NGN",
        "NIO",
        "NOK",
        "NPR",
        "NZD",
        "PAB",
        "PEN",
        "PGK",
        "PHP",
        // eslint-disable-line comma-spacing
        "PKR",
        "PLN",
        "PYG",
        "QAR",
        "RON",
        "RSD",
        "RUB",
        "RWF",
        "SAR",
        "SBD",
        "SCR",
        "SEK",
        // eslint-disable-line comma-spacing
        "SGD",
        "SHP",
        "SLL",
        "SOS",
        "SRD",
        "STD",
        "SVC",
        "SZL",
        "THB",
        "TJS",
        "TOP",
        "TRY",
        // eslint-disable-line comma-spacing
        "TTD",
        "TWD",
        "TZS",
        "UAH",
        "UGX",
        "USD",
        "UYU",
        "UZS",
        "VND",
        "VUV",
        "WST",
        "XAF",
        // eslint-disable-line comma-spacing
        "XCD",
        "XOF",
        "XPF",
        "YER",
        "ZAR",
        "ZMW"
      ]),
      // The label of the payment button in the Checkout form (e.g. “Subscribe”,
      // “Pay {{amount}}”, etc.). If you include {{amount}}, it will be replaced
      // by the provided amount. Otherwise, the amount will be appended to the
      // end of your label.
      panelLabel: _propTypes2.default.string,
      // Specify whether Checkout should validate the billing ZIP code (true or
      // false)
      zipCode: _propTypes2.default.bool,
      // Specify whether Checkout should collect the user's billing address
      // (true or false). The default is false.
      billingAddress: _propTypes2.default.bool,
      // Specify whether Checkout should collect the user's shipping address
      // (true or false). The default is false.
      shippingAddress: _propTypes2.default.bool,
      // Specify whether Checkout should validate the billing ZIP code (true or
      // false). The default is false.
      email: _propTypes2.default.string,
      // Specify whether to include the option to "Remember Me" for future
      // purchases (true or false). The default is true.
      allowRememberMe: _propTypes2.default.bool,
      // Specify whether to accept Bitcoin in Checkout. The default is false.
      bitcoin: _propTypes2.default.bool,
      // Specify whether to accept Alipay ('auto', true, or false). The default
      // is false.
      alipay: _propTypes2.default.oneOf(["auto", true, false]),
      // Specify if you need reusable access to the customer's Alipay account
      // (true or false). The default is false.
      alipayReusable: _propTypes2.default.bool,
      // function() The callback to invoke when Checkout is opened (not supported
      // in IE6 and IE7).
      opened: _propTypes2.default.func,
      // function() The callback to invoke when Checkout is closed (not supported
      // in IE6 and IE7).
      closed: _propTypes2.default.func
    };
    ReactStripeCheckout._isMounted = false;
    exports.default = ReactStripeCheckout;
  }
});
export default require_main();
/*! Bundled license information:

react-is/cjs/react-is.development.js:
  (** @license React v16.13.1
   * react-is.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

object-assign/index.js:
  (*
  object-assign
  (c) Sindre Sorhus
  @license MIT
  *)
*/
//# sourceMappingURL=react-stripe-checkout.js.map
