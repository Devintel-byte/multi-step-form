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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n// import { useFormik } from 'formik';\nfunction Home() {\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const currentRoute = router.pathname;\n    const links = [\n        {\n            path: \"/\",\n            label: \"1\"\n        },\n        {\n            path: \"/select-plan\",\n            label: \"2\"\n        },\n        {\n            path: \"/pick-add-ons\",\n            label: \"3\"\n        },\n        {\n            path: \"/finishing-up\",\n            label: \"4\"\n        }\n    ];\n    // const validate = (values) => {\n    //   const errors = {};\n    //   if (!values.email) {\n    //     errors.email = 'Valid email required';\n    //   } else if (\n    //     !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\\.[A-Z]{2,4}$/i.test(values.email)\n    //   ) {\n    //     errors.email = 'Valid email required';\n    //   }\n    //   return errors;\n    // };\n    // const formik = useFormik({\n    //   initialValues: {\n    //     email: '',\n    //   },\n    //   validate,\n    // });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n            className: \"box-border w-full h-screen m-0 p-0\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"items-center justify-center overflow-hidden\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex w-full\",\n                        id: \"sidebarwrapper\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                src: \"./bg-sidebar-mobile.svg\",\n                                alt: \"sidebar-mobile\",\n                                width: 320,\n                                height: 80,\n                                objectFit: \"fill\",\n                                className: \"w-full\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Devintel\\\\multi-step-form\\\\app\\\\page.js\",\n                                lineNumber: 43,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"absolute flex items-center justify-center w-full mt-6\",\n                                id: \"sidebar\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex flex-row gap-4 text-white text-center items-center\",\n                                    id: \"steps\",\n                                    children: links.map((param)=>/*#__PURE__*/ {\n                                        let { path, label } = param;\n                                        return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                                            href: path,\n                                            passHref: true,\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"font-bold border rounded-full h-10 w-10 bg-light-blue inline-block p-2 m-0 \".concat(currentRoute === path ? \"active:bg-light-blue active:text-black active:border-none\" : \"text-white\"),\n                                                children: label\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Devintel\\\\multi-step-form\\\\app\\\\page.js\",\n                                                lineNumber: 56,\n                                                columnNumber: 21\n                                            }, this)\n                                        }, path, false, {\n                                            fileName: \"C:\\\\Users\\\\Devintel\\\\multi-step-form\\\\app\\\\page.js\",\n                                            lineNumber: 55,\n                                            columnNumber: 19\n                                        }, this);\n                                    })\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Devintel\\\\multi-step-form\\\\app\\\\page.js\",\n                                    lineNumber: 52,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Devintel\\\\multi-step-form\\\\app\\\\page.js\",\n                                lineNumber: 51,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Devintel\\\\multi-step-form\\\\app\\\\page.js\",\n                        lineNumber: 42,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        id: \"cardbg\",\n                        className: \"items-center justify-center bg-light-gray px-4 pt-6 pb-[58px]\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            id: \"cardcontent\",\n                            className: \"w-full mt-[-98px] mb-9 px-4 py-10 flex flex-col justify-between bg-white rounded-lg shadow relative\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                        className: \"mb-2 text-2xl font-bold text-marine-blue\",\n                                        children: \"Personal info\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Devintel\\\\multi-step-form\\\\app\\\\page.js\",\n                                        lineNumber: 70,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"text-cool-gray\",\n                                        children: \"Please provide your name, email address, and phone number.\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Devintel\\\\multi-step-form\\\\app\\\\page.js\",\n                                        lineNumber: 71,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                                        autoComplete: \"off\",\n                                        className: \"mt-4\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                id: \"name\",\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                                        className: \"text-sm text-marine-blue\",\n                                                        children: \"Name\"\n                                                    }, void 0, false, {\n                                                        fileName: \"C:\\\\Users\\\\Devintel\\\\multi-step-form\\\\app\\\\page.js\",\n                                                        lineNumber: 76,\n                                                        columnNumber: 21\n                                                    }, this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                        className: \"w-full p-2.5 border rounded-lg text-sm\",\n                                                        type: \"text\",\n                                                        name: \"name\",\n                                                        id: \"name\",\n                                                        placeholder: \"e.g. Stephen King\"\n                                                    }, void 0, false, {\n                                                        fileName: \"C:\\\\Users\\\\Devintel\\\\multi-step-form\\\\app\\\\page.js\",\n                                                        lineNumber: 77,\n                                                        columnNumber: 21\n                                                    }, this)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"C:\\\\Users\\\\Devintel\\\\multi-step-form\\\\app\\\\page.js\",\n                                                lineNumber: 75,\n                                                columnNumber: 19\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                id: \"email\",\n                                                className: \"mt-3\",\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"article\", {\n                                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                                            className: \"text-sm text-marine-blue\",\n                                                            children: \"Email Address\"\n                                                        }, void 0, false, {\n                                                            fileName: \"C:\\\\Users\\\\Devintel\\\\multi-step-form\\\\app\\\\page.js\",\n                                                            lineNumber: 88,\n                                                            columnNumber: 23\n                                                        }, this)\n                                                    }, void 0, false, {\n                                                        fileName: \"C:\\\\Users\\\\Devintel\\\\multi-step-form\\\\app\\\\page.js\",\n                                                        lineNumber: 87,\n                                                        columnNumber: 21\n                                                    }, this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                        className: \"block w-full p-2.5 border rounded-lg text-sm bg-white\",\n                                                        type: \"email\",\n                                                        name: \"email\",\n                                                        id: \"email\",\n                                                        placeholder: \"e.g. stephenking@lorem.com\",\n                                                        required: true\n                                                    }, void 0, false, {\n                                                        fileName: \"C:\\\\Users\\\\Devintel\\\\multi-step-form\\\\app\\\\page.js\",\n                                                        lineNumber: 90,\n                                                        columnNumber: 21\n                                                    }, this)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"C:\\\\Users\\\\Devintel\\\\multi-step-form\\\\app\\\\page.js\",\n                                                lineNumber: 86,\n                                                columnNumber: 19\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                id: \"phone\",\n                                                className: \"mt-3\",\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                                        className: \"text-sm text-marine-blue\",\n                                                        children: \"Phone Number\"\n                                                    }, void 0, false, {\n                                                        fileName: \"C:\\\\Users\\\\Devintel\\\\multi-step-form\\\\app\\\\page.js\",\n                                                        lineNumber: 101,\n                                                        columnNumber: 21\n                                                    }, this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                        className: \"w-full p-2.5 border rounded-lg text-sm\",\n                                                        type: \"tel\",\n                                                        name: \"phone\",\n                                                        id: \"phone\",\n                                                        placeholder: \"e.g. +1 234 567 890\"\n                                                    }, void 0, false, {\n                                                        fileName: \"C:\\\\Users\\\\Devintel\\\\multi-step-form\\\\app\\\\page.js\",\n                                                        lineNumber: 102,\n                                                        columnNumber: 21\n                                                    }, this)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"C:\\\\Users\\\\Devintel\\\\multi-step-form\\\\app\\\\page.js\",\n                                                lineNumber: 100,\n                                                columnNumber: 19\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\Devintel\\\\multi-step-form\\\\app\\\\page.js\",\n                                        lineNumber: 74,\n                                        columnNumber: 17\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Devintel\\\\multi-step-form\\\\app\\\\page.js\",\n                                lineNumber: 68,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Devintel\\\\multi-step-form\\\\app\\\\page.js\",\n                            lineNumber: 67,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Devintel\\\\multi-step-form\\\\app\\\\page.js\",\n                        lineNumber: 66,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-right pr-4 pb-3\",\n                        id: \"btn-wrapper\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                            href: \"./select-plan\",\n                            passHref: true,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"bg-marine-blue border p-2.5 rounded-md mt-3 text-white font-medium\",\n                                id: \"button\",\n                                children: \"Next Step\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Devintel\\\\multi-step-form\\\\app\\\\page.js\",\n                                lineNumber: 118,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Devintel\\\\multi-step-form\\\\app\\\\page.js\",\n                            lineNumber: 117,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Devintel\\\\multi-step-form\\\\app\\\\page.js\",\n                        lineNumber: 116,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Devintel\\\\multi-step-form\\\\app\\\\page.js\",\n                lineNumber: 40,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Devintel\\\\multi-step-form\\\\app\\\\page.js\",\n            lineNumber: 39,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_s(Home, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RSxJQUFHO2tDQUN2Qyw0RUFBQ1gsa0RBQUlBOzRCQUFDa0IsTUFBSzs0QkFBZ0JDLFFBQVE7c0NBQ25DLDRFQUFDVztnQ0FDQ3JCLFdBQVU7Z0NBQ1ZFLElBQUc7MENBQ0o7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFTYjtHQXpId0JWOztRQUNQRixzREFBU0E7OztLQURGRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvcGFnZS5qcz9iZTY3Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L25hdmlnYXRpb24nO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbi8vIGltcG9ydCB7IHVzZUZvcm1payB9IGZyb20gJ2Zvcm1payc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCBjdXJyZW50Um91dGUgPSByb3V0ZXIucGF0aG5hbWU7XG4gIGNvbnN0IGxpbmtzID0gW1xuICAgIHtwYXRoOiAnLycsIGxhYmVsOiAnMSd9LFxuICAgIHtwYXRoOiAnL3NlbGVjdC1wbGFuJywgbGFiZWw6ICcyJ30sXG4gICAge3BhdGg6ICcvcGljay1hZGQtb25zJywgbGFiZWw6ICczJ30sXG4gICAge3BhdGg6ICcvZmluaXNoaW5nLXVwJywgbGFiZWw6ICc0J31cbiAgXVxuICAvLyBjb25zdCB2YWxpZGF0ZSA9ICh2YWx1ZXMpID0+IHtcbiAgLy8gICBjb25zdCBlcnJvcnMgPSB7fTtcbiAgLy8gICBpZiAoIXZhbHVlcy5lbWFpbCkge1xuICAvLyAgICAgZXJyb3JzLmVtYWlsID0gJ1ZhbGlkIGVtYWlsIHJlcXVpcmVkJztcbiAgLy8gICB9IGVsc2UgaWYgKFxuICAvLyAgICAgIS9eW0EtWjAtOS5fJSstXStAW0EtWjAtOS4tXStcXC5bQS1aXXsyLDR9JC9pLnRlc3QodmFsdWVzLmVtYWlsKVxuICAvLyAgICkge1xuICAvLyAgICAgZXJyb3JzLmVtYWlsID0gJ1ZhbGlkIGVtYWlsIHJlcXVpcmVkJztcbiAgLy8gICB9XG4gIC8vICAgcmV0dXJuIGVycm9ycztcbiAgLy8gfTtcblxuICAvLyBjb25zdCBmb3JtaWsgPSB1c2VGb3JtaWsoe1xuICAvLyAgIGluaXRpYWxWYWx1ZXM6IHtcbiAgLy8gICAgIGVtYWlsOiAnJyxcbiAgLy8gICB9LFxuICAvLyAgIHZhbGlkYXRlLFxuICAvLyB9KTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJib3gtYm9yZGVyIHctZnVsbCBoLXNjcmVlbiBtLTAgcC0wXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIG92ZXJmbG93LWhpZGRlblwiPlxuICAgICAgICAgIHsvKiBTaWRlYmFyIGFuZCBTdGVwIEluZGljYXRvcnMgKi99XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHctZnVsbFwiIGlkPVwic2lkZWJhcndyYXBwZXJcIj5cbiAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICBzcmM9XCIuL2JnLXNpZGViYXItbW9iaWxlLnN2Z1wiXG4gICAgICAgICAgICAgIGFsdD1cInNpZGViYXItbW9iaWxlXCJcbiAgICAgICAgICAgICAgd2lkdGg9ezMyMH1cbiAgICAgICAgICAgICAgaGVpZ2h0PXs4MH1cbiAgICAgICAgICAgICAgb2JqZWN0Rml0PVwiZmlsbFwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciB3LWZ1bGwgbXQtNlwiIGlkPVwic2lkZWJhclwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cgZ2FwLTQgdGV4dC13aGl0ZSB0ZXh0LWNlbnRlciBpdGVtcy1jZW50ZXJcIiBpZD1cInN0ZXBzXCI+XG4gICAgICAgICAgICAgICAgey8qIFN0ZXAgSW5kaWNhdG9ycyAqL31cbiAgICAgICAgICAgICAgICB7bGlua3MubWFwKCh7IHBhdGgsIGxhYmVsIH0pID0+IChcbiAgICAgICAgICAgICAgICAgIDxMaW5rIGtleT17cGF0aH0gaHJlZj17cGF0aH0gcGFzc0hyZWY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgZm9udC1ib2xkIGJvcmRlciByb3VuZGVkLWZ1bGwgaC0xMCB3LTEwIGJnLWxpZ2h0LWJsdWUgaW5saW5lLWJsb2NrIHAtMiBtLTAgJHtjdXJyZW50Um91dGUgPT09IHBhdGggPyBcImFjdGl2ZTpiZy1saWdodC1ibHVlIGFjdGl2ZTp0ZXh0LWJsYWNrIGFjdGl2ZTpib3JkZXItbm9uZVwiIDogXCJ0ZXh0LXdoaXRlXCJ9YH0+XG4gICAgICAgICAgICAgICAgICAgIHtsYWJlbH1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICB7LyogQ2FyZCBDb250ZW50ICovfVxuICAgICAgICAgIDxkaXYgaWQ9XCJjYXJkYmdcIiBjbGFzc05hbWU9XCJpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgYmctbGlnaHQtZ3JheSBweC00IHB0LTYgcGItWzU4cHhdXCI+XG4gICAgICAgICAgICA8ZGl2IGlkPVwiY2FyZGNvbnRlbnRcIiBjbGFzc05hbWU9XCJ3LWZ1bGwgbXQtWy05OHB4XSBtYi05IHB4LTQgcHktMTAgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWJldHdlZW4gYmctd2hpdGUgcm91bmRlZC1sZyBzaGFkb3cgcmVsYXRpdmVcIj5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICB7LyogUGVyc29uYWwgSW5mbyBGb3JtICovfVxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJtYi0yIHRleHQtMnhsIGZvbnQtYm9sZCB0ZXh0LW1hcmluZS1ibHVlXCI+UGVyc29uYWwgaW5mbzwvaDE+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1jb29sLWdyYXlcIj5cbiAgICAgICAgICAgICAgICAgIFBsZWFzZSBwcm92aWRlIHlvdXIgbmFtZSwgZW1haWwgYWRkcmVzcywgYW5kIHBob25lIG51bWJlci5cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPGZvcm0gYXV0b0NvbXBsZXRlPVwib2ZmXCIgY2xhc3NOYW1lPVwibXQtNFwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cIm5hbWVcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1tYXJpbmUtYmx1ZVwiPk5hbWU8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgcC0yLjUgYm9yZGVyIHJvdW5kZWQtbGcgdGV4dC1zbVwiXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJuYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICBpZD1cIm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiZS5nLiBTdGVwaGVuIEtpbmdcIlxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJlbWFpbFwiIGNsYXNzTmFtZT1cIm10LTNcIj5cbiAgICAgICAgICAgICAgICAgICAgPGFydGljbGU+XG4gICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1tYXJpbmUtYmx1ZVwiPkVtYWlsIEFkZHJlc3M8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8L2FydGljbGU+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIHctZnVsbCBwLTIuNSBib3JkZXIgcm91bmRlZC1sZyB0ZXh0LXNtIGJnLXdoaXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgICAgaWQ9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJlLmcuIHN0ZXBoZW5raW5nQGxvcmVtLmNvbVwiXG4gICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwicGhvbmVcIiBjbGFzc05hbWU9XCJtdC0zXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtbWFyaW5lLWJsdWVcIj5QaG9uZSBOdW1iZXI8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgcC0yLjUgYm9yZGVyIHJvdW5kZWQtbGcgdGV4dC1zbVwiXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRlbFwiXG4gICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInBob25lXCJcbiAgICAgICAgICAgICAgICAgICAgICBpZD1cInBob25lXCJcbiAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cImUuZy4gKzEgMjM0IDU2NyA4OTBcIlxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgey8qIE5leHQgU3RlcCBCdXR0b24gKi99XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXJpZ2h0IHByLTQgcGItM1wiIGlkPVwiYnRuLXdyYXBwZXJcIj5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy4vc2VsZWN0LXBsYW4nIHBhc3NIcmVmPlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1tYXJpbmUtYmx1ZSBib3JkZXIgcC0yLjUgcm91bmRlZC1tZCBtdC0zIHRleHQtd2hpdGUgZm9udC1tZWRpdW1cIlxuICAgICAgICAgICAgICBpZD1cImJ1dHRvblwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIE5leHQgU3RlcFxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9zZWN0aW9uPlxuICAgIDwvPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiSW1hZ2UiLCJ1c2VSb3V0ZXIiLCJMaW5rIiwiSG9tZSIsInJvdXRlciIsImN1cnJlbnRSb3V0ZSIsInBhdGhuYW1lIiwibGlua3MiLCJwYXRoIiwibGFiZWwiLCJzZWN0aW9uIiwiY2xhc3NOYW1lIiwiZGl2IiwiaWQiLCJzcmMiLCJhbHQiLCJ3aWR0aCIsImhlaWdodCIsIm9iamVjdEZpdCIsIm1hcCIsImhyZWYiLCJwYXNzSHJlZiIsImgxIiwicCIsImZvcm0iLCJhdXRvQ29tcGxldGUiLCJpbnB1dCIsInR5cGUiLCJuYW1lIiwicGxhY2Vob2xkZXIiLCJhcnRpY2xlIiwicmVxdWlyZWQiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.js\n"));

/***/ })

});