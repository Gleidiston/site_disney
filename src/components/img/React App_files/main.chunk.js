(this["webpackJsonpsousa"] = this["webpackJsonpsousa"] || []).push([["main"],{

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/routes */ "./src/components/routes/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/media/gleidiston/PROGRAMAS INSTALADOS/Projetos_js/sousa/src/App.js";
 // import "rbg/index.js";




function App() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_components_routes__WEBPACK_IMPORTED_MODULE_1__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }, this);
}

_c = App;
/* harmony default export */ __webpack_exports__["default"] = (App);

var _c;

__webpack_require__.$Refresh$.register(_c, "App");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/card/index.js":
/*!**************************************!*\
  !*** ./src/components/card/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Cards; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style */ "./src/components/card/style.js");
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Card */ "./node_modules/@material-ui/core/esm/Card/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/CardMedia */ "./node_modules/@material-ui/core/esm/CardMedia/index.js");
/* harmony import */ var _img_Elevantinho_jpeg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../img/Elevantinho.jpeg */ "./src/components/img/Elevantinho.jpeg");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/media/gleidiston/PROGRAMAS INSTALADOS/Projetos_js/sousa/src/components/card/index.js";


 // import Typography from "@material-ui/core/Typography";





function Cards({
  picture,
  title
}) {
  const classes = Object(_style__WEBPACK_IMPORTED_MODULE_1__["styles"])();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
    className: classes.quatro,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_2__["default"], {
      className: classes.root,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_4__["default"], {
        className: classes.card,
        image: _img_Elevantinho_jpeg__WEBPACK_IMPORTED_MODULE_5__["default"]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_2__["default"], {
      className: classes.root,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_4__["default"], {
        className: classes.card,
        image: _img_Elevantinho_jpeg__WEBPACK_IMPORTED_MODULE_5__["default"]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_2__["default"], {
      className: classes.root,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_4__["default"], {
        className: classes.card,
        image: _img_Elevantinho_jpeg__WEBPACK_IMPORTED_MODULE_5__["default"]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_2__["default"], {
      className: classes.root,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_4__["default"], {
        className: classes.card,
        image: _img_Elevantinho_jpeg__WEBPACK_IMPORTED_MODULE_5__["default"]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 5
  }, this);
}
_c = Cards;
Cards.propTypes = {
  picture: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  title: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string
};
Cards.defaultProps = {
  picture: "",
  title: ""
};

var _c;

__webpack_require__.$Refresh$.register(_c, "Cards");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/card/style.js":
/*!**************************************!*\
  !*** ./src/components/card/style.js ***!
  \**************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);


const styles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["makeStyles"])(() => ({
  root: {
    display: "flex",
    alignItens: "center",
    height: 343,
    width: 388,
    marginTop: 15
  },
  quatro: {
    display: "flex",
    justifyContent: "space-between",
    background: "#EDEDED",
    width: "84.5%",
    height: "65%"
  },
  card: {
    display: "flex",
    height: "65%",
    width: "100%"
  }
}));

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/cardFive/index.js":
/*!******************************************!*\
  !*** ./src/components/cardFive/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CardFive; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style */ "./src/components/cardFive/style.js");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Card */ "./node_modules/@material-ui/core/esm/Card/index.js");
/* harmony import */ var _material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/CardMedia */ "./node_modules/@material-ui/core/esm/CardMedia/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/media/gleidiston/PROGRAMAS INSTALADOS/Projetos_js/sousa/src/components/cardFive/index.js";





function CardFive() {
  const classes = Object(_style__WEBPACK_IMPORTED_MODULE_1__["styles"])();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
    className: classes.Contener,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_2__["default"], {
      className: classes.Card,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_3__["default"], {
        className: classes.Img
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }, this);
}
_c = CardFive;

var _c;

__webpack_require__.$Refresh$.register(_c, "CardFive");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/cardFive/style.js":
/*!******************************************!*\
  !*** ./src/components/cardFive/style.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);



const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/cardFour/index.js":
/*!******************************************!*\
  !*** ./src/components/cardFour/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CardFour; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style */ "./src/components/cardFour/style.js");
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Card */ "./node_modules/@material-ui/core/esm/Card/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/media/gleidiston/PROGRAMAS INSTALADOS/Projetos_js/sousa/src/components/cardFour/index.js";




function CardFour() {
  const classes = Object(_style__WEBPACK_IMPORTED_MODULE_1__["styles"])();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
    className: classes.Contener,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_2__["default"], {
      className: classes.Anuncio
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 5
  }, this);
}
_c = CardFour;

var _c;

__webpack_require__.$Refresh$.register(_c, "CardFour");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/cardFour/style.js":
/*!******************************************!*\
  !*** ./src/components/cardFour/style.js ***!
  \******************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);


const styles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["makeStyles"])(() => ({
  Contener: {
    display: "flex",
    justifyContent: "center",
    marginTop: 25,
    width: "84.5%",
    height: 310
  },
  Anuncio: {
    width: "60%",
    height: 240,
    background: "#FAFAFA"
  }
}));

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/cardTree/index.js":
/*!******************************************!*\
  !*** ./src/components/cardTree/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CardTree; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style */ "./src/components/cardTree/style.js");
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Card */ "./node_modules/@material-ui/core/esm/Card/index.js");
/* harmony import */ var _material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/CardMedia */ "./node_modules/@material-ui/core/esm/CardMedia/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _img_Coringa_jpeg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../img/Coringa.jpeg */ "./src/components/img/Coringa.jpeg");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/media/gleidiston/PROGRAMAS INSTALADOS/Projetos_js/sousa/src/components/cardTree/index.js";







function CardTree() {
  const classes = Object(_style__WEBPACK_IMPORTED_MODULE_1__["styles"])();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
    className: classes.CardTree,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
      className: classes.Texto1,
      children: "Em 2021"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
      className: classes.CardCard,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_2__["default"], {
        className: classes.Card2,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_3__["default"], {
          className: classes.card,
          image: _img_Coringa_jpeg__WEBPACK_IMPORTED_MODULE_5__["default"]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_2__["default"], {
        className: classes.Card2,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_3__["default"], {
          className: classes.card,
          image: _img_Coringa_jpeg__WEBPACK_IMPORTED_MODULE_5__["default"]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 5
  }, this);
}
_c = CardTree;

var _c;

__webpack_require__.$Refresh$.register(_c, "CardTree");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/cardTree/style.js":
/*!******************************************!*\
  !*** ./src/components/cardTree/style.js ***!
  \******************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);


const styles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["makeStyles"])(() => ({
  CardTree: {
    display: "flex",
    flexDirection: "column",
    width: "84.5%",
    height: 610,
    backgroundColor: "#EDEDED",
    alignItems: "center",
    textAlign: "center"
  },
  Texto1: {
    fontSize: 40,
    textAlign: "center"
  },
  CardCard: {
    display: "flex",
    justifyContent: "space-between",
    width: "87.6%"
  },
  Card2: {
    display: "flex",
    justifyContent: "center",
    marginTop: 45,
    height: 475,
    width: 687
  },
  card: {
    height: "80%",
    width: "100%"
  }
}));

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/cardTwo/index.js":
/*!*****************************************!*\
  !*** ./src/components/cardTwo/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CardTwo; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style */ "./src/components/cardTwo/style.js");
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Card */ "./node_modules/@material-ui/core/esm/Card/index.js");
/* harmony import */ var _material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/CardMedia */ "./node_modules/@material-ui/core/esm/CardMedia/index.js");
/* harmony import */ var _img_Maravilha_jpeg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../img/Maravilha.jpeg */ "./src/components/img/Maravilha.jpeg");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/media/gleidiston/PROGRAMAS INSTALADOS/Projetos_js/sousa/src/components/cardTwo/index.js";


 // import PropTypes from "prop-types";




function CardTwo({
  picture,
  title
}) {
  const classes = Object(_style__WEBPACK_IMPORTED_MODULE_1__["styles"])();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
    className: classes.CardTwo,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
      className: classes.SpaceCards,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_2__["default"], {
        className: classes.Root,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_3__["default"], {
          className: classes.card,
          image: _img_Maravilha_jpeg__WEBPACK_IMPORTED_MODULE_4__["default"]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_2__["default"], {
        className: classes.Root,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_3__["default"], {
          className: classes.card,
          image: _img_Maravilha_jpeg__WEBPACK_IMPORTED_MODULE_4__["default"]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 5
  }, this);
}
_c = CardTwo;

var _c;

__webpack_require__.$Refresh$.register(_c, "CardTwo");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/cardTwo/style.js":
/*!*****************************************!*\
  !*** ./src/components/cardTwo/style.js ***!
  \*****************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);


const styles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["makeStyles"])(() => ({
  CardTwo: {
    display: "flex",
    justifyContent: "center",
    width: "84.5%",
    height: "65vh",
    backgroundColor: "#051336",
    alignItems: "center"
  },
  SpaceCards: {
    display: "flex",
    justifyContent: "space-between",
    width: "87.6%",
    alignItens: "flex-end",
    marginTop: 65
  },
  Root: {
    display: "flex",
    alignItens: "center",
    height: 450,
    width: 687,
    background: "#FAFAFA"
  },
  card: {
    height: "80%",
    width: "100%"
  }
}));

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/header/index.js":
/*!****************************************!*\
  !*** ./src/components/header/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Header; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");
/* harmony import */ var _material_ui_core_InputBase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/InputBase */ "./node_modules/@material-ui/core/esm/InputBase/index.js");
/* harmony import */ var _material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/Search */ "./node_modules/@material-ui/icons/Search.js");
/* harmony import */ var _material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./style */ "./src/components/header/style.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/media/gleidiston/PROGRAMAS INSTALADOS/Projetos_js/sousa/src/components/header/index.js";
 // import AppBar from "@material-ui/core/AppBar";



 // import Divider from "@material-ui/core/Divider";
// import Typography from "@material-ui/core/Typography";





function Header() {
  const classes = Object(_style__WEBPACK_IMPORTED_MODULE_6__["styles"])();
  return (
    /*#__PURE__*/
    // <AppBar className={classes.container} position="fixed">
    Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
      className: classes.buttons,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
          href: "#text-buttons",
          className: classes.nomes,
          children: "DISNEY"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 7
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
        style: {
          paddingRight: "2%"
        },
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
          href: "#text-buttons",
          className: classes.nomes,
          children: "FILMES"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 7
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
          href: "#text-buttons",
          className: classes.nomes,
          children: "TV"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 7
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
          href: "#text-buttons",
          className: classes.nomes,
          children: "NOVIDADES"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 7
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
          href: "#text-buttons",
          className: classes.nomes,
          children: "MAIS"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 7
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_1__["default"], {
            component: "form",
            className: classes.paper,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_5__["default"], {
              className: classes.iconButton,
              children: " "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 44,
              columnNumber: 13
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_material_ui_core_InputBase__WEBPACK_IMPORTED_MODULE_2__["default"], {
              className: classes.input
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 45,
              columnNumber: 13
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_5__["default"], {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_3___default.a, {
                ClassName: classes.icon
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 47,
                columnNumber: 15
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 46,
              columnNumber: 13
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 7
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 5
    }, this) // </AppBar>

  );
}
_c = Header;

var _c;

__webpack_require__.$Refresh$.register(_c, "Header");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/header/style.js":
/*!****************************************!*\
  !*** ./src/components/header/style.js ***!
  \****************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);


const styles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["makeStyles"])(() => ({
  buttons: {
    display: "flex",
    justifyContent: "space-around",
    margin: "0 3.5%",
    maxWidth: "100%",
    height: "50%",
    alignItems: "center",
    right: "10%",
    marginTop: 14
  },
  nomes: {
    fontWeight: "1000",
    font: "inherit",
    paddingRight: "2%"
  },
  paper: {
    display: "flex",
    width: " 34vh ",
    height: 35,
    backgroundColor: "#DCDCDC"
  },
  icon: {
    justifyContent: "flex-end",
    height: 500,
    backgroundColor: "#000000"
  }
}));

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/img/Coringa.jpeg":
/*!*****************************************!*\
  !*** ./src/components/img/Coringa.jpeg ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/Coringa.c3208a42.jpeg");

/***/ }),

/***/ "./src/components/img/Elevantinho.jpeg":
/*!*********************************************!*\
  !*** ./src/components/img/Elevantinho.jpeg ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/jpeg;base64,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");

/***/ }),

/***/ "./src/components/img/Harry_5.jpg":
/*!****************************************!*\
  !*** ./src/components/img/Harry_5.jpg ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/Harry_5.c1a06804.jpg");

/***/ }),

/***/ "./src/components/img/Maravilha.jpeg":
/*!*******************************************!*\
  !*** ./src/components/img/Maravilha.jpeg ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/jpeg;base64,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");

/***/ }),

/***/ "./src/components/routes/index.js":
/*!****************************************!*\
  !*** ./src/components/routes/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Routes; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _pages_home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../pages/home */ "./src/pages/home/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/media/gleidiston/PROGRAMAS INSTALADOS/Projetos_js/sousa/src/components/routes/index.js";




function Routes() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["BrowserRouter"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Switch"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
        exact: true,
        path: "/",
        component: _pages_home__WEBPACK_IMPORTED_MODULE_2__["default"]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }, this);
}
_c = Routes;

var _c;

__webpack_require__.$Refresh$.register(_c, "Routes");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App */ "./src/App.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/media/gleidiston/PROGRAMAS INSTALADOS/Projetos_js/sousa/src/index.js";




react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.StrictMode, {
  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_App__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }, undefined)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 8,
  columnNumber: 3
}, undefined), document.getElementById('root'));

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/pages/home/index.js":
/*!*********************************!*\
  !*** ./src/pages/home/index.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style */ "./src/pages/home/style.js");
/* harmony import */ var _components_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/card */ "./src/components/card/index.js");
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/header */ "./src/components/header/index.js");
/* harmony import */ var _components_img_Harry_5_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/img/Harry_5.jpg */ "./src/components/img/Harry_5.jpg");
/* harmony import */ var _components_cardTwo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/cardTwo */ "./src/components/cardTwo/index.js");
/* harmony import */ var _components_cardTree__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/cardTree */ "./src/components/cardTree/index.js");
/* harmony import */ var _components_cardFour__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/cardFour */ "./src/components/cardFour/index.js");
/* harmony import */ var _components_cardFive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/cardFive */ "./src/components/cardFive/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/media/gleidiston/PROGRAMAS INSTALADOS/Projetos_js/sousa/src/pages/home/index.js";










function Home() {
  const classes = Object(_style__WEBPACK_IMPORTED_MODULE_1__["styles"])();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_components_header__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
      className: classes.topo,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
        className: classes.top
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
      className: classes.logo,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("img", {
        className: classes.img,
        src: _components_img_Harry_5_jpg__WEBPACK_IMPORTED_MODULE_4__["default"],
        alt: ""
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_components_card__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_components_cardTwo__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_components_cardTree__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_components_cardFour__WEBPACK_IMPORTED_MODULE_7__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_components_cardFive__WEBPACK_IMPORTED_MODULE_8__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 5
  }, this);
}
_c = Home;

var _c;

__webpack_require__.$Refresh$.register(_c, "Home");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/pages/home/style.js":
/*!*********************************!*\
  !*** ./src/pages/home/style.js ***!
  \*********************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);


const styles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["makeStyles"])(() => ({
  topo: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
    height: "3%",
    marginTop: "2%",
    backgroundColor: "#FFFFFF"
  },
  top: {
    display: "flex",
    width: "51.5%",
    height: "248px",
    backgroundColor: "#FAFAFA"
  },
  logo: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "80%",
    marginTop: 16
  },
  img: {
    width: "84.5%",
    maxWidth: "100%"
  }
}));

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ 1:
/*!**********************************************************************************************************************************************************************************************!*\
  !*** multi (webpack)/hot/dev-server.js ./node_modules/@pmmmwh/react-refresh-webpack-plugin/client/ReactRefreshEntry.js ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \**********************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /media/gleidiston/PROGRAMAS INSTALADOS/Projetos_js/sousa/node_modules/webpack/hot/dev-server.js */"./node_modules/webpack/hot/dev-server.js");
__webpack_require__(/*! /media/gleidiston/PROGRAMAS INSTALADOS/Projetos_js/sousa/node_modules/@pmmmwh/react-refresh-webpack-plugin/client/ReactRefreshEntry.js */"./node_modules/@pmmmwh/react-refresh-webpack-plugin/client/ReactRefreshEntry.js");
__webpack_require__(/*! /media/gleidiston/PROGRAMAS INSTALADOS/Projetos_js/sousa/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /media/gleidiston/PROGRAMAS INSTALADOS/Projetos_js/sousa/src/index.js */"./src/index.js");


/***/ })

},[[1,"runtime-main","vendors~main"]]]);
//# sourceMappingURL=main.chunk.js.map