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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! formik */ \"(app-pages-browser)/./node_modules/formik/dist/formik.esm.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nfunction Home() {\n    _s();\n    const validate = (values)=>{\n        const errors = {};\n        if (!values.email) {\n            errors.email = \"Valid email required\";\n        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\\.[A-Z]{2,4}$/i.test(values.email)) {\n            errors.email = \"Valid email required\";\n        }\n        return errors;\n    };\n    const formik = (0,formik__WEBPACK_IMPORTED_MODULE_1__.useFormik)({\n        initialValues: {\n            email: \"\"\n        },\n        validate\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n            className: \"m-0 p-0 box-border h-screen\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        id: \"sidebarwrapper\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            id: \"sidebar\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                id: \"steps\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Devintel\\\\multi-step-form\\\\app\\\\page.js\",\n                                lineNumber: 32,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Devintel\\\\multi-step-form\\\\app\\\\page.js\",\n                            lineNumber: 31,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Devintel\\\\multi-step-form\\\\app\\\\page.js\",\n                        lineNumber: 30,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        id: \"cardbg\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            id: \"cardcontent\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                    className: \"text-xl font-bold mb-2\",\n                                    children: \"Personal info\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Devintel\\\\multi-step-form\\\\app\\\\page.js\",\n                                    lineNumber: 38,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: \"Please provide your name, email address, and phone number.\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Devintel\\\\multi-step-form\\\\app\\\\page.js\",\n                                    lineNumber: 39,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                                    autoComplete: \"off\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            id: \"name\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                                    className: \"text-sm\",\n                                                    children: \"Name\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\Devintel\\\\multi-step-form\\\\app\\\\page.js\",\n                                                    lineNumber: 42,\n                                                    columnNumber: 17\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                    className: \"w-full border border-solid text-sm p-2.5\",\n                                                    type: \"text\",\n                                                    name: \"name\",\n                                                    id: \"name\",\n                                                    placeholder: \"e.g. Stephen King\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\Devintel\\\\multi-step-form\\\\app\\\\page.js\",\n                                                    lineNumber: 43,\n                                                    columnNumber: 17\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\Devintel\\\\multi-step-form\\\\app\\\\page.js\",\n                                            lineNumber: 41,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            id: \"email\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                                    className: \"text-sm\",\n                                                    children: \"Email Address\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\Devintel\\\\multi-step-form\\\\app\\\\page.js\",\n                                                    lineNumber: 51,\n                                                    columnNumber: 17\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                    className: \"w-full border border-solid text-sm p-2.5\",\n                                                    type: \"email\",\n                                                    name: \"email\",\n                                                    id: \"email\",\n                                                    placeholder: \"e.g. stephenking@lorem.com\",\n                                                    value: formik.values.email\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\Devintel\\\\multi-step-form\\\\app\\\\page.js\",\n                                                    lineNumber: 52,\n                                                    columnNumber: 17\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\Devintel\\\\multi-step-form\\\\app\\\\page.js\",\n                                            lineNumber: 50,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            id: \"phone\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                                    className: \"text-sm\",\n                                                    children: \"Phone Number\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\Devintel\\\\multi-step-form\\\\app\\\\page.js\",\n                                                    lineNumber: 61,\n                                                    columnNumber: 17\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                    className: \"w-full border border-solid text-sm p-2.5\",\n                                                    type: \"tel\",\n                                                    name: \"phone\",\n                                                    id: \"phone\",\n                                                    placeholder: \"e.g. +1 234 567 890\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\Devintel\\\\multi-step-form\\\\app\\\\page.js\",\n                                                    lineNumber: 62,\n                                                    columnNumber: 17\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\Devintel\\\\multi-step-form\\\\app\\\\page.js\",\n                                            lineNumber: 60,\n                                            columnNumber: 17\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\Devintel\\\\multi-step-form\\\\app\\\\page.js\",\n                                    lineNumber: 40,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Devintel\\\\multi-step-form\\\\app\\\\page.js\",\n                            lineNumber: 37,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Devintel\\\\multi-step-form\\\\app\\\\page.js\",\n                        lineNumber: 36,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Devintel\\\\multi-step-form\\\\app\\\\page.js\",\n                lineNumber: 29,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Devintel\\\\multi-step-form\\\\app\\\\page.js\",\n            lineNumber: 28,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_s(Home, \"B/4rI4IXClQ7sG7psKj+pOuRe5Q=\", false, function() {\n    return [\n        formik__WEBPACK_IMPORTED_MODULE_1__.useFormik\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9wYWdlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ2tDO0FBRW5CLFNBQVNDOztJQUN0QixNQUFNQyxXQUFXLENBQUNDO1FBQ2hCLE1BQU1DLFNBQVMsQ0FBQztRQUVoQixJQUFJLENBQUNELE9BQU9FLEtBQUssRUFBRTtZQUNqQkQsT0FBT0MsS0FBSyxHQUFHO1FBQ2pCLE9BQU8sSUFDTCxDQUFDLDRDQUE0Q0MsSUFBSSxDQUFDSCxPQUFPRSxLQUFLLEdBQzlEO1lBQ0FELE9BQU9DLEtBQUssR0FBRztRQUNqQjtRQUVBLE9BQU9EO0lBQ1Q7SUFFQSxNQUFNRyxTQUFTUCxpREFBU0EsQ0FBQztRQUN2QlEsZUFBZTtZQUNiSCxPQUFPO1FBQ1Q7UUFDQUg7SUFDRjtJQUVBLHFCQUNFO2tCQUNFLDRFQUFDTztZQUFRQyxXQUFVO3NCQUNqQiw0RUFBQ0M7O2tDQUNDLDhEQUFDQTt3QkFBSUMsSUFBRztrQ0FDTiw0RUFBQ0Q7NEJBQUlDLElBQUc7c0NBQ04sNEVBQUNEO2dDQUFJQyxJQUFHOzs7Ozs7Ozs7Ozs7Ozs7O2tDQUlaLDhEQUFDRDt3QkFBSUMsSUFBRztrQ0FDTiw0RUFBQ0Q7NEJBQUlDLElBQUc7OzhDQUNOLDhEQUFDQztvQ0FBR0gsV0FBVTs4Q0FBeUI7Ozs7Ozs4Q0FDdkMsOERBQUNJOzhDQUFFOzs7Ozs7OENBQ0gsOERBQUNDO29DQUFLQyxjQUFhOztzREFDakIsOERBQUNMOzRDQUFJQyxJQUFHOzs4REFDUiw4REFBQ0s7b0RBQU1QLFdBQVU7OERBQVU7Ozs7Ozs4REFDM0IsOERBQUNRO29EQUFNUixXQUFVO29EQUNqQlMsTUFBSztvREFDTEMsTUFBSztvREFDTFIsSUFBRztvREFDSFMsYUFBWTs7Ozs7Ozs7Ozs7O3NEQUdaLDhEQUFDVjs0Q0FBSUMsSUFBRzs7OERBQ1IsOERBQUNLO29EQUFNUCxXQUFVOzhEQUFVOzs7Ozs7OERBQzNCLDhEQUFDUTtvREFBTVIsV0FBVTtvREFDakJTLE1BQUs7b0RBQ0xDLE1BQUs7b0RBQ0xSLElBQUc7b0RBQ0hTLGFBQVk7b0RBQ1pDLE9BQU9mLE9BQU9KLE1BQU0sQ0FBQ0UsS0FBSzs7Ozs7Ozs7Ozs7O3NEQUcxQiw4REFBQ007NENBQUlDLElBQUc7OzhEQUNSLDhEQUFDSztvREFBTVAsV0FBVTs4REFBVTs7Ozs7OzhEQUMzQiw4REFBQ1E7b0RBQU1SLFdBQVU7b0RBQ2pCUyxNQUFLO29EQUNMQyxNQUFLO29EQUNMUixJQUFHO29EQUNIUyxhQUFZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVU1QjtHQXhFd0JwQjs7UUFlUEQsNkNBQVNBOzs7S0FmRkMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL3BhZ2UuanM/YmU2NyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcbmltcG9ydCB7IHVzZUZvcm1payB9IGZyb20gXCJmb3JtaWtcIlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCB2YWxpZGF0ZSA9ICh2YWx1ZXMpID0+IHtcbiAgICBjb25zdCBlcnJvcnMgPSB7fTtcblxuICAgIGlmICghdmFsdWVzLmVtYWlsKSB7XG4gICAgICBlcnJvcnMuZW1haWwgPSBcIlZhbGlkIGVtYWlsIHJlcXVpcmVkXCI7XG4gICAgfSBlbHNlIGlmIChcbiAgICAgICEvXltBLVowLTkuXyUrLV0rQFtBLVowLTkuLV0rXFwuW0EtWl17Miw0fSQvaS50ZXN0KHZhbHVlcy5lbWFpbClcbiAgICApIHtcbiAgICAgIGVycm9ycy5lbWFpbCA9IFwiVmFsaWQgZW1haWwgcmVxdWlyZWRcIlxuICAgIH1cblxuICAgIHJldHVybiBlcnJvcnM7XG4gIH1cblxuICBjb25zdCBmb3JtaWsgPSB1c2VGb3JtaWsoe1xuICAgIGluaXRpYWxWYWx1ZXM6IHtcbiAgICAgIGVtYWlsOiBcIlwiXG4gICAgfSwgXG4gICAgdmFsaWRhdGVcbiAgfSlcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJtLTAgcC0wIGJveC1ib3JkZXIgaC1zY3JlZW5cIj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8ZGl2IGlkPVwic2lkZWJhcndyYXBwZXJcIj5cbiAgICAgICAgICAgIDxkaXYgaWQ9XCJzaWRlYmFyXCI+XG4gICAgICAgICAgICAgIDxkaXYgaWQ9XCJzdGVwc1wiPjwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2IGlkPVwiY2FyZGJnXCI+XG4gICAgICAgICAgICA8ZGl2IGlkPVwiY2FyZGNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1ib2xkIG1iLTJcIj5QZXJzb25hbCBpbmZvPC9oMT5cbiAgICAgICAgICAgICAgPHA+UGxlYXNlIHByb3ZpZGUgeW91ciBuYW1lLCBlbWFpbCBhZGRyZXNzLCBhbmQgcGhvbmUgbnVtYmVyLjwvcD5cbiAgICAgICAgICAgICAgPGZvcm0gYXV0b0NvbXBsZXRlPVwib2ZmXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cIm5hbWVcIj5cbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwidGV4dC1zbVwiPk5hbWU8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJ3LWZ1bGwgYm9yZGVyIGJvcmRlci1zb2xpZCB0ZXh0LXNtIHAtMi41XCIgXG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIiBcbiAgICAgICAgICAgICAgICBuYW1lPVwibmFtZVwiIFxuICAgICAgICAgICAgICAgIGlkPVwibmFtZVwiIFxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiZS5nLiBTdGVwaGVuIEtpbmdcIi8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiZW1haWxcIj5cbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwidGV4dC1zbVwiPkVtYWlsIEFkZHJlc3M8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJ3LWZ1bGwgYm9yZGVyIGJvcmRlci1zb2xpZCB0ZXh0LXNtIHAtMi41XCIgXG4gICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCIgXG4gICAgICAgICAgICAgICAgbmFtZT1cImVtYWlsXCIgXG4gICAgICAgICAgICAgICAgaWQ9XCJlbWFpbFwiIFxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiZS5nLiBzdGVwaGVua2luZ0Bsb3JlbS5jb21cIlxuICAgICAgICAgICAgICAgIHZhbHVlPXtmb3JtaWsudmFsdWVzLmVtYWlsfSAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cInBob25lXCI+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInRleHQtc21cIj5QaG9uZSBOdW1iZXI8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJ3LWZ1bGwgYm9yZGVyIGJvcmRlci1zb2xpZCB0ZXh0LXNtIHAtMi41XCIgXG4gICAgICAgICAgICAgICAgdHlwZT1cInRlbFwiIFxuICAgICAgICAgICAgICAgIG5hbWU9XCJwaG9uZVwiIFxuICAgICAgICAgICAgICAgIGlkPVwicGhvbmVcIiBcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cImUuZy4gKzEgMjM0IDU2NyA4OTBcIi8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9zZWN0aW9uPlxuICAgIDwvPlxuICApXG59XG4iXSwibmFtZXMiOlsidXNlRm9ybWlrIiwiSG9tZSIsInZhbGlkYXRlIiwidmFsdWVzIiwiZXJyb3JzIiwiZW1haWwiLCJ0ZXN0IiwiZm9ybWlrIiwiaW5pdGlhbFZhbHVlcyIsInNlY3Rpb24iLCJjbGFzc05hbWUiLCJkaXYiLCJpZCIsImgxIiwicCIsImZvcm0iLCJhdXRvQ29tcGxldGUiLCJsYWJlbCIsImlucHV0IiwidHlwZSIsIm5hbWUiLCJwbGFjZWhvbGRlciIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.js\n"));

/***/ })

});