"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./app/page.js":
/*!*********************!*\
  !*** ./app/page.js ***!
  \*********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n// import { useFormik } from 'formik';\nfunction Home() {\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const links = [\n        {\n            path: \"/\",\n            label: \"Personal info\"\n        },\n        {\n            path: \"/select-plan\",\n            label: \"Select your plan\"\n        },\n        {\n            path: \"/pick-add-ons\",\n            label: \"Pick add-ons\"\n        },\n        {\n            path: \"/finishing-up\",\n            label: \"Finishing up\"\n        }\n    ];\n    // const validate = (values) => {\n    //   const errors = {};\n    //   if (!values.email) {\n    //     errors.email = 'Valid email required';\n    //   } else if (\n    //     !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\\.[A-Z]{2,4}$/i.test(values.email)\n    //   ) {\n    //     errors.email = 'Valid email required';\n    //   }\n    //   return errors;\n    // };\n    // const formik = useFormik({\n    //   initialValues: {\n    //     email: '',\n    //   },\n    //   validate,\n    // });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n            className: \"box-border w-full h-screen m-0 p-0\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"items-center justify-center overflow-hidden\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex w-full\",\n                        id: \"sidebarwrapper\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                src: \"./bg-sidebar-mobile.svg\",\n                                alt: \"sidebar-mobile\",\n                                width: 320,\n                                height: 80,\n                                objectFit: \"fill\",\n                                className: \"w-full\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Devintel\\\\multi-step-form\\\\app\\\\page.js\",\n                                lineNumber: 42,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"absolute flex items-center justify-center w-full mt-6\",\n                                id: \"sidebar\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex flex-row gap-4 text-white text-center items-center\",\n                                    id: \"steps\",\n                                    children: [\n                                        links.map({\n                                            path,\n                                            label\n                                        }),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                                            href: \"/\",\n                                            passHref: true,\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"font-bold border rounded-full h-10 w-10 inline-block p-2 m-0 \".concat(router.pathname === \"/\" ? \"active:bg-light-blue active:text-black active:border-none\" : \"text-white\"),\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                    className: \"w-full h-full\",\n                                                    children: \"1\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\Devintel\\\\multi-step-form\\\\app\\\\page.js\",\n                                                    lineNumber: 56,\n                                                    columnNumber: 19\n                                                }, this)\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Devintel\\\\multi-step-form\\\\app\\\\page.js\",\n                                                lineNumber: 55,\n                                                columnNumber: 17\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Devintel\\\\multi-step-form\\\\app\\\\page.js\",\n                                            lineNumber: 54,\n                                            columnNumber: 17\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\Devintel\\\\multi-step-form\\\\app\\\\page.js\",\n                                    lineNumber: 51,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Devintel\\\\multi-step-form\\\\app\\\\page.js\",\n                                lineNumber: 50,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Devintel\\\\multi-step-form\\\\app\\\\page.js\",\n                        lineNumber: 41,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        id: \"cardbg\",\n                        className: \"items-center justify-center bg-light-gray px-4 pt-6 pb-[58px]\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            id: \"cardcontent\",\n                            className: \"w-full mt-[-98px] mb-9 px-4 py-10 flex flex-col justify-between bg-white rounded-lg shadow relative\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                        className: \"mb-2 text-2xl font-bold text-marine-blue\",\n                                        children: \"Personal info\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Devintel\\\\multi-step-form\\\\app\\\\page.js\",\n                                        lineNumber: 68,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"text-cool-gray\",\n                                        children: \"Please provide your name, email address, and phone number.\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Devintel\\\\multi-step-form\\\\app\\\\page.js\",\n                                        lineNumber: 69,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                                        autoComplete: \"off\",\n                                        className: \"mt-4\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                id: \"name\",\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                                        className: \"text-sm text-marine-blue\",\n                                                        children: \"Name\"\n                                                    }, void 0, false, {\n                                                        fileName: \"C:\\\\Users\\\\Devintel\\\\multi-step-form\\\\app\\\\page.js\",\n                                                        lineNumber: 74,\n                                                        columnNumber: 21\n                                                    }, this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                        className: \"w-full p-2.5 border rounded-lg text-sm\",\n                                                        type: \"text\",\n                                                        name: \"name\",\n                                                        id: \"name\",\n                                                        placeholder: \"e.g. Stephen King\"\n                                                    }, void 0, false, {\n                                                        fileName: \"C:\\\\Users\\\\Devintel\\\\multi-step-form\\\\app\\\\page.js\",\n                                                        lineNumber: 75,\n                                                        columnNumber: 21\n                                                    }, this)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"C:\\\\Users\\\\Devintel\\\\multi-step-form\\\\app\\\\page.js\",\n                                                lineNumber: 73,\n                                                columnNumber: 19\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                id: \"email\",\n                                                className: \"mt-3\",\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"article\", {\n                                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                                            className: \"text-sm text-marine-blue\",\n                                                            children: \"Email Address\"\n                                                        }, void 0, false, {\n                                                            fileName: \"C:\\\\Users\\\\Devintel\\\\multi-step-form\\\\app\\\\page.js\",\n                                                            lineNumber: 86,\n                                                            columnNumber: 23\n                                                        }, this)\n                                                    }, void 0, false, {\n                                                        fileName: \"C:\\\\Users\\\\Devintel\\\\multi-step-form\\\\app\\\\page.js\",\n                                                        lineNumber: 85,\n                                                        columnNumber: 21\n                                                    }, this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                        className: \"block w-full p-2.5 border rounded-lg text-sm bg-white\",\n                                                        type: \"email\",\n                                                        name: \"email\",\n                                                        id: \"email\",\n                                                        placeholder: \"e.g. stephenking@lorem.com\",\n                                                        required: true\n                                                    }, void 0, false, {\n                                                        fileName: \"C:\\\\Users\\\\Devintel\\\\multi-step-form\\\\app\\\\page.js\",\n                                                        lineNumber: 88,\n                                                        columnNumber: 21\n                                                    }, this)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"C:\\\\Users\\\\Devintel\\\\multi-step-form\\\\app\\\\page.js\",\n                                                lineNumber: 84,\n                                                columnNumber: 19\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                id: \"phone\",\n                                                className: \"mt-3\",\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                                        className: \"text-sm text-marine-blue\",\n                                                        children: \"Phone Number\"\n                                                    }, void 0, false, {\n                                                        fileName: \"C:\\\\Users\\\\Devintel\\\\multi-step-form\\\\app\\\\page.js\",\n                                                        lineNumber: 99,\n                                                        columnNumber: 21\n                                                    }, this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                        className: \"w-full p-2.5 border rounded-lg text-sm\",\n                                                        type: \"tel\",\n                                                        name: \"phone\",\n                                                        id: \"phone\",\n                                                        placeholder: \"e.g. +1 234 567 890\"\n                                                    }, void 0, false, {\n                                                        fileName: \"C:\\\\Users\\\\Devintel\\\\multi-step-form\\\\app\\\\page.js\",\n                                                        lineNumber: 100,\n                                                        columnNumber: 21\n                                                    }, this)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"C:\\\\Users\\\\Devintel\\\\multi-step-form\\\\app\\\\page.js\",\n                                                lineNumber: 98,\n                                                columnNumber: 19\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\Devintel\\\\multi-step-form\\\\app\\\\page.js\",\n                                        lineNumber: 72,\n                                        columnNumber: 17\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Devintel\\\\multi-step-form\\\\app\\\\page.js\",\n                                lineNumber: 66,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Devintel\\\\multi-step-form\\\\app\\\\page.js\",\n                            lineNumber: 65,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Devintel\\\\multi-step-form\\\\app\\\\page.js\",\n                        lineNumber: 64,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-right pr-4 pb-3\",\n                        id: \"btn-wrapper\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"bg-marine-blue border p-2.5 rounded-md mt-3 text-white font-medium\",\n                            id: \"button\",\n                            children: \"Next Step\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Devintel\\\\multi-step-form\\\\app\\\\page.js\",\n                            lineNumber: 115,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Devintel\\\\multi-step-form\\\\app\\\\page.js\",\n                        lineNumber: 114,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Devintel\\\\multi-step-form\\\\app\\\\page.js\",\n                lineNumber: 39,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Devintel\\\\multi-step-form\\\\app\\\\page.js\",\n            lineNumber: 38,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_s(Home, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFHO2tDQUN2Qyw0RUFBQ29COzRCQUNDdEIsV0FBVTs0QkFDVkUsSUFBRztzQ0FDSjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRYjtHQXJId0JSOztRQUNQRixzREFBU0E7OztLQURGRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvcGFnZS5qcz9iZTY3Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L25hdmlnYXRpb24nO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbi8vIGltcG9ydCB7IHVzZUZvcm1payB9IGZyb20gJ2Zvcm1payc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCBsaW5rcyA9IFtcbiAgICB7cGF0aDogJy8nLCBsYWJlbDogJ1BlcnNvbmFsIGluZm8nfSxcbiAgICB7cGF0aDogJy9zZWxlY3QtcGxhbicsIGxhYmVsOiAnU2VsZWN0IHlvdXIgcGxhbid9LFxuICAgIHtwYXRoOiAnL3BpY2stYWRkLW9ucycsIGxhYmVsOiAnUGljayBhZGQtb25zJ30sXG4gICAge3BhdGg6ICcvZmluaXNoaW5nLXVwJywgbGFiZWw6ICdGaW5pc2hpbmcgdXAnfVxuICBdXG4gIC8vIGNvbnN0IHZhbGlkYXRlID0gKHZhbHVlcykgPT4ge1xuICAvLyAgIGNvbnN0IGVycm9ycyA9IHt9O1xuICAvLyAgIGlmICghdmFsdWVzLmVtYWlsKSB7XG4gIC8vICAgICBlcnJvcnMuZW1haWwgPSAnVmFsaWQgZW1haWwgcmVxdWlyZWQnO1xuICAvLyAgIH0gZWxzZSBpZiAoXG4gIC8vICAgICAhL15bQS1aMC05Ll8lKy1dK0BbQS1aMC05Li1dK1xcLltBLVpdezIsNH0kL2kudGVzdCh2YWx1ZXMuZW1haWwpXG4gIC8vICAgKSB7XG4gIC8vICAgICBlcnJvcnMuZW1haWwgPSAnVmFsaWQgZW1haWwgcmVxdWlyZWQnO1xuICAvLyAgIH1cbiAgLy8gICByZXR1cm4gZXJyb3JzO1xuICAvLyB9O1xuXG4gIC8vIGNvbnN0IGZvcm1payA9IHVzZUZvcm1payh7XG4gIC8vICAgaW5pdGlhbFZhbHVlczoge1xuICAvLyAgICAgZW1haWw6ICcnLFxuICAvLyAgIH0sXG4gIC8vICAgdmFsaWRhdGUsXG4gIC8vIH0pO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImJveC1ib3JkZXIgdy1mdWxsIGgtc2NyZWVuIG0tMCBwLTBcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgb3ZlcmZsb3ctaGlkZGVuXCI+XG4gICAgICAgICAgey8qIFNpZGViYXIgYW5kIFN0ZXAgSW5kaWNhdG9ycyAqL31cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggdy1mdWxsXCIgaWQ9XCJzaWRlYmFyd3JhcHBlclwiPlxuICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgIHNyYz1cIi4vYmctc2lkZWJhci1tb2JpbGUuc3ZnXCJcbiAgICAgICAgICAgICAgYWx0PVwic2lkZWJhci1tb2JpbGVcIlxuICAgICAgICAgICAgICB3aWR0aD17MzIwfVxuICAgICAgICAgICAgICBoZWlnaHQ9ezgwfVxuICAgICAgICAgICAgICBvYmplY3RGaXQ9XCJmaWxsXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHctZnVsbCBtdC02XCIgaWQ9XCJzaWRlYmFyXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBnYXAtNCB0ZXh0LXdoaXRlIHRleHQtY2VudGVyIGl0ZW1zLWNlbnRlclwiIGlkPVwic3RlcHNcIj5cbiAgICAgICAgICAgICAgICB7LyogU3RlcCBJbmRpY2F0b3JzICovfVxuICAgICAgICAgICAgICAgIHtsaW5rcy5tYXAoKHsgcGF0aCwgbGFiZWwgfSkpfVxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCIgcGFzc0hyZWY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Bmb250LWJvbGQgYm9yZGVyIHJvdW5kZWQtZnVsbCBoLTEwIHctMTAgaW5saW5lLWJsb2NrIHAtMiBtLTAgJHtyb3V0ZXIucGF0aG5hbWUgPT09ICcvJyA/IFwiYWN0aXZlOmJnLWxpZ2h0LWJsdWUgYWN0aXZlOnRleHQtYmxhY2sgYWN0aXZlOmJvcmRlci1ub25lXCIgOiBcInRleHQtd2hpdGVcIn1gfT5cbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInctZnVsbCBoLWZ1bGxcIj4xPC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIHsvKiBDYXJkIENvbnRlbnQgKi99XG4gICAgICAgICAgPGRpdiBpZD1cImNhcmRiZ1wiIGNsYXNzTmFtZT1cIml0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBiZy1saWdodC1ncmF5IHB4LTQgcHQtNiBwYi1bNThweF1cIj5cbiAgICAgICAgICAgIDxkaXYgaWQ9XCJjYXJkY29udGVudFwiIGNsYXNzTmFtZT1cInctZnVsbCBtdC1bLTk4cHhdIG1iLTkgcHgtNCBweS0xMCBmbGV4IGZsZXgtY29sIGp1c3RpZnktYmV0d2VlbiBiZy13aGl0ZSByb3VuZGVkLWxnIHNoYWRvdyByZWxhdGl2ZVwiPlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIHsvKiBQZXJzb25hbCBJbmZvIEZvcm0gKi99XG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cIm1iLTIgdGV4dC0yeGwgZm9udC1ib2xkIHRleHQtbWFyaW5lLWJsdWVcIj5QZXJzb25hbCBpbmZvPC9oMT5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWNvb2wtZ3JheVwiPlxuICAgICAgICAgICAgICAgICAgUGxlYXNlIHByb3ZpZGUgeW91ciBuYW1lLCBlbWFpbCBhZGRyZXNzLCBhbmQgcGhvbmUgbnVtYmVyLlxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8Zm9ybSBhdXRvQ29tcGxldGU9XCJvZmZcIiBjbGFzc05hbWU9XCJtdC00XCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwibmFtZVwiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LW1hcmluZS1ibHVlXCI+TmFtZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBwLTIuNSBib3JkZXIgcm91bmRlZC1sZyB0ZXh0LXNtXCJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgbmFtZT1cIm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgIGlkPVwibmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJlLmcuIFN0ZXBoZW4gS2luZ1wiXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cImVtYWlsXCIgY2xhc3NOYW1lPVwibXQtM1wiPlxuICAgICAgICAgICAgICAgICAgICA8YXJ0aWNsZT5cbiAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LW1hcmluZS1ibHVlXCI+RW1haWwgQWRkcmVzczwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDwvYXJ0aWNsZT5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgdy1mdWxsIHAtMi41IGJvcmRlciByb3VuZGVkLWxnIHRleHQtc20gYmctd2hpdGVcIlxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgICBpZD1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cImUuZy4gc3RlcGhlbmtpbmdAbG9yZW0uY29tXCJcbiAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJwaG9uZVwiIGNsYXNzTmFtZT1cIm10LTNcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1tYXJpbmUtYmx1ZVwiPlBob25lIE51bWJlcjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBwLTIuNSBib3JkZXIgcm91bmRlZC1sZyB0ZXh0LXNtXCJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGVsXCJcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicGhvbmVcIlxuICAgICAgICAgICAgICAgICAgICAgIGlkPVwicGhvbmVcIlxuICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiZS5nLiArMSAyMzQgNTY3IDg5MFwiXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICB7LyogTmV4dCBTdGVwIEJ1dHRvbiAqL31cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtcmlnaHQgcHItNCBwYi0zXCIgaWQ9XCJidG4td3JhcHBlclwiPlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1tYXJpbmUtYmx1ZSBib3JkZXIgcC0yLjUgcm91bmRlZC1tZCBtdC0zIHRleHQtd2hpdGUgZm9udC1tZWRpdW1cIlxuICAgICAgICAgICAgICBpZD1cImJ1dHRvblwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIE5leHQgU3RlcFxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9zZWN0aW9uPlxuICAgIDwvPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiSW1hZ2UiLCJ1c2VSb3V0ZXIiLCJMaW5rIiwiSG9tZSIsInJvdXRlciIsImxpbmtzIiwicGF0aCIsImxhYmVsIiwic2VjdGlvbiIsImNsYXNzTmFtZSIsImRpdiIsImlkIiwic3JjIiwiYWx0Iiwid2lkdGgiLCJoZWlnaHQiLCJvYmplY3RGaXQiLCJtYXAiLCJocmVmIiwicGFzc0hyZWYiLCJwYXRobmFtZSIsInAiLCJoMSIsImZvcm0iLCJhdXRvQ29tcGxldGUiLCJpbnB1dCIsInR5cGUiLCJuYW1lIiwicGxhY2Vob2xkZXIiLCJhcnRpY2xlIiwicmVxdWlyZWQiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.js\n"));

/***/ })

});