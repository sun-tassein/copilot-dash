"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ColorModeContext: () => (/* binding */ ColorModeContext),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/styles */ \"./node_modules/@mui/material/styles/index.js\");\n/* harmony import */ var _mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/CssBaseline */ \"./node_modules/@mui/material/CssBaseline/index.js\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst ColorModeContext = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createContext({\n    toggleColorMode: ()=>{}\n});\nfunction MyApp(param) {\n    let { Component, pageProps } = param;\n    _s();\n    const [mode, setMode] = react__WEBPACK_IMPORTED_MODULE_1__.useState('light');\n    const colorMode = react__WEBPACK_IMPORTED_MODULE_1__.useMemo({\n        \"MyApp.useMemo[colorMode]\": ()=>({\n                toggleColorMode: ({\n                    \"MyApp.useMemo[colorMode]\": ()=>{\n                        setMode({\n                            \"MyApp.useMemo[colorMode]\": (prevMode)=>prevMode === 'light' ? 'dark' : 'light'\n                        }[\"MyApp.useMemo[colorMode]\"]);\n                    }\n                })[\"MyApp.useMemo[colorMode]\"]\n            })\n    }[\"MyApp.useMemo[colorMode]\"], []);\n    const theme = react__WEBPACK_IMPORTED_MODULE_1__.useMemo({\n        \"MyApp.useMemo[theme]\": ()=>(0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__.createTheme)({\n                palette: {\n                    mode\n                }\n            })\n    }[\"MyApp.useMemo[theme]\"], [\n        mode\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ColorModeContext.Provider, {\n        value: colorMode,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__.ThemeProvider, {\n            theme: theme,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\nikola.radic\\\\Desktop\\\\js\\\\copilot-4\\\\my-next-app\\\\pages\\\\_app.js\",\n                    lineNumber: 34,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                        ...pageProps\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\nikola.radic\\\\Desktop\\\\js\\\\copilot-4\\\\my-next-app\\\\pages\\\\_app.js\",\n                        lineNumber: 36,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\nikola.radic\\\\Desktop\\\\js\\\\copilot-4\\\\my-next-app\\\\pages\\\\_app.js\",\n                    lineNumber: 35,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\nikola.radic\\\\Desktop\\\\js\\\\copilot-4\\\\my-next-app\\\\pages\\\\_app.js\",\n            lineNumber: 33,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\nikola.radic\\\\Desktop\\\\js\\\\copilot-4\\\\my-next-app\\\\pages\\\\_app.js\",\n        lineNumber: 32,\n        columnNumber: 5\n    }, this);\n}\n_s(MyApp, \"d4Wg7a/ehJsJwQbDoYd9huIJFWY=\");\n_c = MyApp;\nMyApp.propTypes = {\n    Component: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().elementType).isRequired,\n    pageProps: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().object).isRequired\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\nvar _c;\n$RefreshReg$(_c, \"MyApp\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBK0I7QUFDSTtBQUMrQjtBQUNkO0FBQ1Y7QUFFbkMsTUFBTU0saUNBQW1CTixnREFBbUIsQ0FBQztJQUFFUSxpQkFBaUIsS0FBTztBQUFFLEdBQUc7QUFFbkYsU0FBU0MsTUFBTSxLQUF3QjtRQUF4QixFQUFFQyxTQUFTLEVBQUVDLFNBQVMsRUFBRSxHQUF4Qjs7SUFDYixNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR2IsMkNBQWMsQ0FBQztJQUV2QyxNQUFNZSxZQUFZZiwwQ0FBYTtvQ0FDN0IsSUFBTztnQkFDTFEsZUFBZTtnREFBRTt3QkFDZks7d0RBQVEsQ0FBQ0ksV0FBY0EsYUFBYSxVQUFVLFNBQVM7O29CQUN6RDs7WUFDRjttQ0FDQSxFQUFFO0lBR0osTUFBTUMsUUFBUWxCLDBDQUFhO2dDQUN6QixJQUNFRyxpRUFBV0EsQ0FBQztnQkFDVmdCLFNBQVM7b0JBQ1BQO2dCQUNGO1lBQ0Y7K0JBQ0Y7UUFBQ0E7S0FBSztJQUdSLHFCQUNFLDhEQUFDTixpQkFBaUJjLFFBQVE7UUFBQ0MsT0FBT047a0JBQ2hDLDRFQUFDYiwrREFBYUE7WUFBQ2dCLE9BQU9BOzs4QkFDcEIsOERBQUNkLGlFQUFXQTs7Ozs7OEJBQ1osOERBQUNDLDBEQUFNQTs4QkFDTCw0RUFBQ0s7d0JBQVcsR0FBR0MsU0FBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtsQztHQWhDU0Y7S0FBQUE7QUFrQ1RBLE1BQU1hLFNBQVMsR0FBRztJQUNoQlosV0FBV1QsK0RBQXFCLENBQUN1QixVQUFVO0lBQzNDYixXQUFXViwwREFBZ0IsQ0FBQ3VCLFVBQVU7QUFDeEM7QUFFQSxpRUFBZWYsS0FBS0EsRUFBQyIsInNvdXJjZXMiOlsiQzpcXFVzZXJzXFxuaWtvbGEucmFkaWNcXERlc2t0b3BcXGpzXFxjb3BpbG90LTRcXG15LW5leHQtYXBwXFxwYWdlc1xcX2FwcC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgVGhlbWVQcm92aWRlciwgY3JlYXRlVGhlbWUgfSBmcm9tICdAbXVpL21hdGVyaWFsL3N0eWxlcyc7XG5pbXBvcnQgQ3NzQmFzZWxpbmUgZnJvbSAnQG11aS9tYXRlcmlhbC9Dc3NCYXNlbGluZSc7XG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0JztcblxuZXhwb3J0IGNvbnN0IENvbG9yTW9kZUNvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KHsgdG9nZ2xlQ29sb3JNb2RlOiAoKSA9PiB7fSB9KTtcblxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG4gIGNvbnN0IFttb2RlLCBzZXRNb2RlXSA9IFJlYWN0LnVzZVN0YXRlKCdsaWdodCcpO1xuXG4gIGNvbnN0IGNvbG9yTW9kZSA9IFJlYWN0LnVzZU1lbW8oXG4gICAgKCkgPT4gKHtcbiAgICAgIHRvZ2dsZUNvbG9yTW9kZTogKCkgPT4ge1xuICAgICAgICBzZXRNb2RlKChwcmV2TW9kZSkgPT4gKHByZXZNb2RlID09PSAnbGlnaHQnID8gJ2RhcmsnIDogJ2xpZ2h0JykpO1xuICAgICAgfSxcbiAgICB9KSxcbiAgICBbXVxuICApO1xuXG4gIGNvbnN0IHRoZW1lID0gUmVhY3QudXNlTWVtbyhcbiAgICAoKSA9PlxuICAgICAgY3JlYXRlVGhlbWUoe1xuICAgICAgICBwYWxldHRlOiB7XG4gICAgICAgICAgbW9kZSxcbiAgICAgICAgfSxcbiAgICAgIH0pLFxuICAgIFttb2RlXVxuICApO1xuXG4gIHJldHVybiAoXG4gICAgPENvbG9yTW9kZUNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e2NvbG9yTW9kZX0+XG4gICAgICA8VGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWV9PlxuICAgICAgICA8Q3NzQmFzZWxpbmUgLz5cbiAgICAgICAgPExheW91dD5cbiAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICAgIDwvTGF5b3V0PlxuICAgICAgPC9UaGVtZVByb3ZpZGVyPlxuICAgIDwvQ29sb3JNb2RlQ29udGV4dC5Qcm92aWRlcj5cbiAgKTtcbn1cblxuTXlBcHAucHJvcFR5cGVzID0ge1xuICBDb21wb25lbnQ6IFByb3BUeXBlcy5lbGVtZW50VHlwZS5pc1JlcXVpcmVkLFxuICBwYWdlUHJvcHM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwOyJdLCJuYW1lcyI6WyJSZWFjdCIsIlByb3BUeXBlcyIsIlRoZW1lUHJvdmlkZXIiLCJjcmVhdGVUaGVtZSIsIkNzc0Jhc2VsaW5lIiwiTGF5b3V0IiwiQ29sb3JNb2RlQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ0b2dnbGVDb2xvck1vZGUiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsIm1vZGUiLCJzZXRNb2RlIiwidXNlU3RhdGUiLCJjb2xvck1vZGUiLCJ1c2VNZW1vIiwicHJldk1vZGUiLCJ0aGVtZSIsInBhbGV0dGUiLCJQcm92aWRlciIsInZhbHVlIiwicHJvcFR5cGVzIiwiZWxlbWVudFR5cGUiLCJpc1JlcXVpcmVkIiwib2JqZWN0Il0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n"));

/***/ })

});