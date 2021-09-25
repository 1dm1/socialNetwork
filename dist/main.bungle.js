/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./framework/main.js":
/*!***************************!*\
  !*** ./framework/main.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_app_rouser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/app.rouser */ \"./framework/utils/app.rouser.js\");\n/* harmony import */ var _utils_getting_users__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/getting-users */ \"./framework/utils/getting-users.js\");\n/* harmony import */ var _user_pages_user_pages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-pages/user-pages */ \"./framework/user-pages/user-pages.js\");\n/* harmony import */ var _framework_utils_elementCreator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../framework/utils/elementCreator */ \"./framework/utils/elementCreator.js\");\n\n\n\n\n\n\n\nconst currentUrl = window.location.hash\n\n\n\n\n\n\ncreateComponent(currentUrl,_utils_app_rouser__WEBPACK_IMPORTED_MODULE_0__.appRoutes);\n\nwindow.addEventListener('hashchange', (e) => {\n    goToUser(e.target.location.hash, _utils_app_rouser__WEBPACK_IMPORTED_MODULE_0__.appRoutes)\n    \n})\n\n\n\nfunction goToUser(url,routeArr) {\n    const container = document.querySelector('.container')\n    const homePageBlock = (0,_framework_utils_elementCreator__WEBPACK_IMPORTED_MODULE_3__.default)({block: 'div',class: 'home_page'})\n    \n\n    let route = routeArr.find(r => r.path === url)\n\n\n    if(typeof route === 'undefined') {\n        const notPage = routeArr.find(r => r.path === '**')\n        clearBlock(container)\n        homePageBlock.innerHTML = notPage.component.template\n\n    }else {\n        clearBlock(container)\n        route.component()\n    }\n\n    container.append(homePageBlock);\n}\n\n\n\n\nfunction createComponent(url,arrRousers) {\n    _utils_getting_users__WEBPACK_IMPORTED_MODULE_1__.users.then(date => date.forEach(user => {\n        arrRousers.push({path: `#user/${user.id}`, component: _user_pages_user_pages__WEBPACK_IMPORTED_MODULE_2__.userPages})\n    }))\n    .then(() => goToUser(url,_utils_app_rouser__WEBPACK_IMPORTED_MODULE_0__.appRoutes)) \n    \n}\n\n\n\nfunction clearBlock(block) {\n    block.innerHTML = ''\n}\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://socialwea/./framework/main.js?");

/***/ }),

/***/ "./framework/user-pages/home-page.js":
/*!*******************************************!*\
  !*** ./framework/user-pages/home-page.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"homePage\": () => (/* binding */ homePage)\n/* harmony export */ });\n/* harmony import */ var _framework_utils_renderName__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../framework/utils/renderName */ \"./framework/utils/renderName.js\");\n/* harmony import */ var _utils_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/component */ \"./framework/utils/component.js\");\n/* harmony import */ var _utils_getting_users__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/getting-users */ \"./framework/utils/getting-users.js\");\n\n\n\n\n\n\n\nfunction homePage() {\n    _utils_getting_users__WEBPACK_IMPORTED_MODULE_2__.users.then(date => date.forEach(user => {\n        createComponents(user)\n    })) \n}\n\nfunction createComponents({name,id}) {\n   const user = {\n        selector: 'user',\n        template: `\n            <a class=\"user_name\" href=\"user/${id}\" > ${(0,_framework_utils_renderName__WEBPACK_IMPORTED_MODULE_0__.renderName)(name)} </a>\n        `,\n        id: id\n    }\n    ;(0,_utils_component__WEBPACK_IMPORTED_MODULE_1__.component)(user)\n}\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://socialwea/./framework/user-pages/home-page.js?");

/***/ }),

/***/ "./framework/user-pages/not-found.js":
/*!*******************************************!*\
  !*** ./framework/user-pages/not-found.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"notFound\": () => (/* binding */ notFound)\n/* harmony export */ });\n\n\n\n\nconst notFound = {\n    selector: 'app-not-found',\n    template: `\n        <div>такого href не сущевствует</div>\n        <a href=\"#\">Перейти на другую страницу</a>\n    `\n}\n\n//# sourceURL=webpack://socialwea/./framework/user-pages/not-found.js?");

/***/ }),

/***/ "./framework/user-pages/user-pages.js":
/*!********************************************!*\
  !*** ./framework/user-pages/user-pages.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"userPages\": () => (/* binding */ userPages)\n/* harmony export */ });\n/* harmony import */ var _framework_utils_renderName__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../framework/utils/renderName */ \"./framework/utils/renderName.js\");\n/* harmony import */ var _utils_getting_users__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/getting-users */ \"./framework/utils/getting-users.js\");\n/* harmony import */ var _framework_utils_elementCreator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../framework/utils/elementCreator */ \"./framework/utils/elementCreator.js\");\n/* harmony import */ var _utils_apiMiddleware__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/apiMiddleware */ \"./framework/utils/apiMiddleware.js\");\n\n\n\n\n\n\n\n\nconst USER_BLOCK = (0,_framework_utils_elementCreator__WEBPACK_IMPORTED_MODULE_2__.default)({block: 'div', class: 'user_block'})\n\n\nfunction userPages() {\n    let usersId = window.location.hash.slice(6)\n    _utils_getting_users__WEBPACK_IMPORTED_MODULE_1__.users.then(responce => {\n        responce.forEach(user => {\n           if(user.id === +usersId) {\n            createUserPage(user)\n            \n           }\n        })\n    })\n}\n\nfunction createUserPage(user) {\n\n    const container = document.querySelector('.container')\n    USER_BLOCK.innerHTML = ''\n    container.innerHTML = ''\n    \n    createInfoPersone(user)\n    createPostList(user)\n    createForm()\n\n    \n    container.appendChild(USER_BLOCK);\n    \n\n\n    \n}\n\n\nfunction createInfoPersone(user) {\n\n    const userNameBlock = (0,_framework_utils_elementCreator__WEBPACK_IMPORTED_MODULE_2__.default)({ block: 'div', class: 'user_name', child: [(0,_framework_utils_renderName__WEBPACK_IMPORTED_MODULE_0__.renderName)(user.name)] })\n    const wrapUserBlock = (0,_framework_utils_elementCreator__WEBPACK_IMPORTED_MODULE_2__.default)({ block: 'div', class: 'wrapper_user', child: [userNameBlock] })\n\n    \n    const userName = (0,_framework_utils_elementCreator__WEBPACK_IMPORTED_MODULE_2__.default)({block: 'li',content: `username: ${user.username}`})\n    const info_block = (0,_framework_utils_elementCreator__WEBPACK_IMPORTED_MODULE_2__.default)({block: 'li',content: `name: ${user.name}`})\n    const address = (0,_framework_utils_elementCreator__WEBPACK_IMPORTED_MODULE_2__.default)({block: 'li', content: `city: ${user.address.city}`})\n    const phone = (0,_framework_utils_elementCreator__WEBPACK_IMPORTED_MODULE_2__.default)({block: 'li', content: `phone: ${user.phone}`})\n    const website = (0,_framework_utils_elementCreator__WEBPACK_IMPORTED_MODULE_2__.default)({block: 'li',content: `website: ${user.website}`})\n\n    const parentLi = (0,_framework_utils_elementCreator__WEBPACK_IMPORTED_MODULE_2__.default)({block: 'ul' ,child: [userName,info_block,address,phone,website]})\n    \n\n    const userInfoBlock = (0,_framework_utils_elementCreator__WEBPACK_IMPORTED_MODULE_2__.default)({block: 'div',class: 'user_info_block',child: [wrapUserBlock,parentLi]}) \n    USER_BLOCK.append(userInfoBlock)\n}\n\n\n\n\n\n\n\nfunction createPostList(user) {\n\n    \n    const postList = (0,_framework_utils_elementCreator__WEBPACK_IMPORTED_MODULE_2__.default)({block: 'div',class: 'post_list'})\n    USER_BLOCK.append(postList);\n    \n\n    user.posts.forEach(post => {\n        createPost(post)\n    })\n\n\n    postList.addEventListener('click',(e) => {\n       if(e.target.classList.contains('delete_post')) {\n            const parentPostBlock = e.target.closest('.content');\n            parentPostBlock.remove();\n        } \n       \n    })\n    \n\n    \n    \n}\n\n\nfunction createPost (post) { \n    const parentBlock = USER_BLOCK.querySelector('.post_list');\n    const deletePost = (0,_framework_utils_elementCreator__WEBPACK_IMPORTED_MODULE_2__.default)({block:'div',class:'delete_post'})\n    const titleBlock = (0,_framework_utils_elementCreator__WEBPACK_IMPORTED_MODULE_2__.default)({ block: 'div', class: 'title',child: [post.title]})\n    const bodyBlock = (0,_framework_utils_elementCreator__WEBPACK_IMPORTED_MODULE_2__.default)({ block: 'div', class: 'body',child: [post.body] })\n    const wrapTextBlock = (0,_framework_utils_elementCreator__WEBPACK_IMPORTED_MODULE_2__.default)({ block: 'div', class: 'wrapper_text', child: [titleBlock, bodyBlock]})\n    const wrapper = (0,_framework_utils_elementCreator__WEBPACK_IMPORTED_MODULE_2__.default)({ block: 'div', class: 'content', child: [wrapTextBlock,deletePost] })\n    parentBlock.prepend(wrapper);\n}\n\n\n\n\n\n\n\n\n\n\nfunction createForm() {\n    const button = (0,_framework_utils_elementCreator__WEBPACK_IMPORTED_MODULE_2__.default)({block: 'button',content: 'submit',attribute:[{type:'submit'}]})\n    const textTitle = (0,_framework_utils_elementCreator__WEBPACK_IMPORTED_MODULE_2__.default)({block: 'textarea',attribute: [{required: 'required'},{name: 'title'}] })\n    const textName = (0,_framework_utils_elementCreator__WEBPACK_IMPORTED_MODULE_2__.default)({block: 'textarea',attribute: [{required: 'required'},{name: 'body'}] })\n    const form = (0,_framework_utils_elementCreator__WEBPACK_IMPORTED_MODULE_2__.default)({block: 'form',id:'createPostForm',class: 'user_form', attribute: [{name: 'test'}],child: [textTitle,textName,button]})\n\n    const formBlock = (0,_framework_utils_elementCreator__WEBPACK_IMPORTED_MODULE_2__.default)({block: 'div',class: 'form_block',child: [form]})\n\n    form.addEventListener('submit',e => {\n        e.preventDefault();\n        const form = new FormData(e.target);\n        const data = {\n            title: form.get('title'),\n            body: form.get('body'),\n        }\n        ;(0,_utils_apiMiddleware__WEBPACK_IMPORTED_MODULE_3__.default)('POST','/posts',data)\n        createPost(data);\n\n        const textArea = e.target.querySelectorAll('textarea')\n        textArea.forEach(item => {\n            item.value = ''\n        })\n    })\n    console.log()\n\n    USER_BLOCK.append(formBlock)\n \n}\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://socialwea/./framework/user-pages/user-pages.js?");

/***/ }),

/***/ "./framework/utils/apiMiddleware.js":
/*!******************************************!*\
  !*** ./framework/utils/apiMiddleware.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ api)\n/* harmony export */ });\n\n\nconst BASE_URL = 'https://jsonplaceholder.typicode.com';\n\n\n\nfunction api (method, url, body = {}) {\n    const data = {method}\n    if(!['GET','DELETE'].includes(method)) {\n        data.body = JSON.stringify(body);\n        \n    }\n    \n    return fetch(`${BASE_URL}${url}`, data).then(response => response.json())\n    .catch((e) => {\n        console.log(e);\n    })\n}\n\n\n\n\n\n//# sourceURL=webpack://socialwea/./framework/utils/apiMiddleware.js?");

/***/ }),

/***/ "./framework/utils/app.rouser.js":
/*!***************************************!*\
  !*** ./framework/utils/app.rouser.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"appRoutes\": () => (/* binding */ appRoutes)\n/* harmony export */ });\n/* harmony import */ var _user_pages_home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../user-pages/home-page */ \"./framework/user-pages/home-page.js\");\n/* harmony import */ var _user_pages_not_found__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../user-pages/not-found */ \"./framework/user-pages/not-found.js\");\n\n\n\n\n\n\nconst appRoutes = [\n    {\n        path: '',\n        component: _user_pages_home_page__WEBPACK_IMPORTED_MODULE_0__.homePage\n    },\n    {  \n        path: '**',\n        component: _user_pages_not_found__WEBPACK_IMPORTED_MODULE_1__.notFound\n    },\n    \n]\n\n\n\n\n//# sourceURL=webpack://socialwea/./framework/utils/app.rouser.js?");

/***/ }),

/***/ "./framework/utils/component.js":
/*!**************************************!*\
  !*** ./framework/utils/component.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"component\": () => (/* binding */ component)\n/* harmony export */ });\n/* harmony import */ var _framework_utils_elementCreator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../framework/utils/elementCreator */ \"./framework/utils/elementCreator.js\");\n\n\n\n\nfunction component(user) {\n    \n    const parentBlock = document.querySelector('.home_page')\n    if(!parentBlock) throw new Error(`Component with ${user.selector} not found`)\n    const element = (0,_framework_utils_elementCreator__WEBPACK_IMPORTED_MODULE_0__.default)({block: 'div',class: 'wrapper_user',content: user.template})\n    element.addEventListener('click',() => {\n        location.href = `http://localhost:3000/#user/${user.id}`\n    })\n    \n    \n    parentBlock.append(element)\n}\n\n\n  \n\n\n\n\n\n\n//# sourceURL=webpack://socialwea/./framework/utils/component.js?");

/***/ }),

/***/ "./framework/utils/elementCreator.js":
/*!*******************************************!*\
  !*** ./framework/utils/elementCreator.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ elementCreater)\n/* harmony export */ });\nfunction elementCreater (data) {\n    \n    let block;\n    if(!data?.block) return\n    block = document.createElement(data.block)\n\n    // if(data.block = 'a') {\n    //     block.href = `#/user/${data.id}`\n    //     block.setAttribute('data',`/users/${data.id}`)\n    // }\n\n    data.class && block.classList.add(data.class)\n    data.id && block.setAttribute('id', data.id)\n    if(data.content) block.innerHTML = data.content\n    \n    if(data.attribute) {\n        data.attribute.forEach(item => {\n            for(let i in item) {\n                block.setAttribute(i,item[i]);\n            }\n        })\n    }\n\n    if(data.child?.length) {\n        data.child.forEach(item => {\n            block.append(item)\n        })\n    }\n    return block\n}\n\n//# sourceURL=webpack://socialwea/./framework/utils/elementCreator.js?");

/***/ }),

/***/ "./framework/utils/getting-users.js":
/*!******************************************!*\
  !*** ./framework/utils/getting-users.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"users\": () => (/* binding */ users)\n/* harmony export */ });\n/* harmony import */ var _apiMiddleware__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./apiMiddleware */ \"./framework/utils/apiMiddleware.js\");\n\n\nconst users = Promise.all([(0,_apiMiddleware__WEBPACK_IMPORTED_MODULE_0__.default)('GET', '/posts'),(0,_apiMiddleware__WEBPACK_IMPORTED_MODULE_0__.default)('GET', '/users')]).then(response => {\n    const [posts,users] = response\n    getUsersPost(posts,users)\n    return users  \n})\n\nfunction getUsersPost (posts,users) {\n    users.forEach(user => {\n        createPostList(posts,user)\n    })\n}\n\nfunction createPostList(posts,user) {\n    const postArr = []\n    posts.forEach(post => {\n        if(post.userId === user.id) {\n            postArr.push({\n                title: post.title,\n                body: post.body\n            })\n            user.posts = postArr\n        }\n    })\n}\n\n\n\n\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://socialwea/./framework/utils/getting-users.js?");

/***/ }),

/***/ "./framework/utils/renderName.js":
/*!***************************************!*\
  !*** ./framework/utils/renderName.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderName\": () => (/* binding */ renderName)\n/* harmony export */ });\nfunction renderName(str) {\n    \n    let names = str.split(' ')\n    let initials = names[0].substring(0, 1).toUpperCase();\n    \n    if (names.length > 1) {\n        initials += names[names.length - 1].substring(0, 1).toUpperCase();\n    }\n    return initials;\n}\n\n//# sourceURL=webpack://socialwea/./framework/utils/renderName.js?");

/***/ }),

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _framework_main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./framework/main */ \"./framework/main.js\");\n// import {routes} from './routes'\n// // import UniversalRouter from 'universal-router'\n// import {initUsersPosts} from './src/js/pages/posts/createPostList/js'\n// import initCreatePost from './src/js/pages/users/userDetails/js'\n\n// import {createUserWiew} from './src/js/pages/users/js'\n\n\n\n\n// createUserWiew();\n\n\n\n\n\n\n// export const router = new UniversalRouter(routes)\n\n// const textBlock = document.querySelectorAll('.test_block');\n// textBlock.forEach((block,index) => {\n//   const arr = ['/posts','/users']\n//   block.addEventListener('click',(e) => {\n//     router.resolve(`/users/${index}`).then(html => {\n//       document.body.innerHTML = html // renders: <h1>Posts</h1>\n//     })\n    \n//   })\n// })\n\n// initUsersPosts();\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://socialwea/./main.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./main.js");
/******/ 	
/******/ })()
;