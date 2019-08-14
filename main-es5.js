(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page\">\n\n  <div class=\"header\">\n    <h1>&nbsp; Ashley Paul</h1>\n    <div class=\"subtitle\">\n      Candidate for a Bachelor of Science in Computer Information Systems\n    </div>\n  </div>\n\n  <mat-tab-group class=\"tabs-theme\">\n    <mat-tab label=\"WELCOME\">\n      <div class=\"row\">\n        <div class=\"column left\">\n          <h2>ABOUT</h2>\n          <p>\n            intro will be here :)\n          </p>\n          <h2>CONTACT ME</h2>\n          <img>\n          <p>\n            (207) 337 - 2915\n          </p>\n          <img>\n          <p>\n            paul_ashl@bentley.edu\n          </p>\n          <img>\n          <p>\n            175 Forest Street, Mailbox #2155 <br>\n            Waltham, MA 02452\n          </p>\n          <ul>\n            <li>\n              <h2><a target=\"_blank\" href=\"https://www.linkedin.com/in/its-ashley-paul\">LinkedIn</a></h2>\n            </li>\n          </ul>\n        </div>\n\n        <div class=\"column right\">\n          <h2>SKILLS</h2>\n          <div class=\"skills\">\n            <p>\n              <strong>\n                Angular<br>\n                CSS/SCSS<br>\n                Dart<br>\n                GitHub<br>\n                HTML<br>\n                Java<br>\n                Javascript / Typescript<br>\n                Jira<br>\n                Json<br>\n                mySQL<br>\n                Oracle<br>\n                Python<br>\n                SQL<br>\n                Visual Studio Code<br>\n              </strong>\n            </p>\n          </div>\n        </div>\n      </div>\n    </mat-tab>\n    <mat-tab label=\"EDUCATION\">\n      Content 2\n    </mat-tab>\n    <mat-tab label=\"PROFESSIONAL EXPERIENCE\">\n      Content 3\n    </mat-tab>\n  </mat-tab-group>\n</div>"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".page {\n  text-align: left;\n  background: #F2F2F2;\n  color: #2E4159;\n  font-size: 20px;\n}\n\n.header {\n  text-align: left;\n  background: #A8C1EA;\n  color: #5B83A6;\n  font-size: 50px;\n  padding-top: 30px;\n  padding-left: 0px;\n  padding-bottom: 0px;\n}\n\n.subtitle {\n  text-align: left;\n  background: #5B83A6;\n  color: white;\n  font-size: 30px;\n  padding-left: 5px;\n  padding-top: 0px;\n}\n\n.column {\n  float: left;\n  padding: 10px;\n}\n\n.left {\n  text-align: center;\n  background: #f2f2f2;\n  width: 41%;\n  color: #2E4159;\n  font-size: 20px;\n  height: 750px;\n}\n\n.right {\n  text-align: center;\n  background: #F2F2F2;\n  width: 56%;\n  color: #2E4159;\n  font-size: 20px;\n  float: right;\n  height: 750px;\n}\n\n.row:after {\n  content: \" \";\n  display: table;\n  clear: both;\n}\n\n.skills {\n  color: #5B83A6;\n  font-size: 23px;\n  text-align: left;\n  line-height: 200%;\n  padding-left: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hc2hsZXlwYXVsL2l0cy1hc2hsZXktcGF1bC9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FDQ0o7O0FERUE7RUFDSSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUNDSjs7QURFQTtFQUNJLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURFQTtFQUNJLFdBQUE7RUFDQSxhQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FDQ0o7O0FERUE7RUFDSSxZQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7QUNDSjs7QURFQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFnZSB7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBiYWNrZ3JvdW5kOiAjRjJGMkYyO1xuICAgIGNvbG9yOiAjMkU0MTU5O1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLmhlYWRlciB7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBiYWNrZ3JvdW5kOiAjQThDMUVBO1xuICAgIGNvbG9yOiAjNUI4M0E2O1xuICAgIGZvbnQtc2l6ZTogNTBweDtcbiAgICBwYWRkaW5nLXRvcDogMzBweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMHB4O1xufVxuXG4uc3VidGl0bGUge1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgYmFja2dyb3VuZDogIzVCODNBNjtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICAgIHBhZGRpbmctbGVmdDogNXB4O1xuICAgIHBhZGRpbmctdG9wOiAwcHg7XG59XG5cbi5jb2x1bW4ge1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHBhZGRpbmc6IDEwcHg7XG59XG5cbi5sZWZ0IHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZDogI2YyZjJmMjtcbiAgICB3aWR0aDogNDElO1xuICAgIGNvbG9yOiAjMkU0MTU5O1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBoZWlnaHQ6IDc1MHB4O1xufVxuXG4ucmlnaHQge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kOiAjRjJGMkYyO1xuICAgIHdpZHRoOiA1NiU7XG4gICAgY29sb3I6ICMyRTQxNTk7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBoZWlnaHQ6IDc1MHB4O1xufVxuXG4ucm93OmFmdGVyIHtcbiAgICBjb250ZW50OiBcIiBcIjtcbiAgICBkaXNwbGF5OiB0YWJsZTtcbiAgICBjbGVhcjogYm90aDtcbn1cblxuLnNraWxscyB7XG4gICAgY29sb3I6ICM1QjgzQTY7XG4gICAgZm9udC1zaXplOiAyM3B4O1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgbGluZS1oZWlnaHQ6IDIwMCU7XG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xufVxuIiwiLnBhZ2Uge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBiYWNrZ3JvdW5kOiAjRjJGMkYyO1xuICBjb2xvcjogIzJFNDE1OTtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4uaGVhZGVyIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgYmFja2dyb3VuZDogI0E4QzFFQTtcbiAgY29sb3I6ICM1QjgzQTY7XG4gIGZvbnQtc2l6ZTogNTBweDtcbiAgcGFkZGluZy10b3A6IDMwcHg7XG4gIHBhZGRpbmctbGVmdDogMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMHB4O1xufVxuXG4uc3VidGl0bGUge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBiYWNrZ3JvdW5kOiAjNUI4M0E2O1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gIHBhZGRpbmctdG9wOiAwcHg7XG59XG5cbi5jb2x1bW4ge1xuICBmbG9hdDogbGVmdDtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuLmxlZnQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6ICNmMmYyZjI7XG4gIHdpZHRoOiA0MSU7XG4gIGNvbG9yOiAjMkU0MTU5O1xuICBmb250LXNpemU6IDIwcHg7XG4gIGhlaWdodDogNzUwcHg7XG59XG5cbi5yaWdodCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogI0YyRjJGMjtcbiAgd2lkdGg6IDU2JTtcbiAgY29sb3I6ICMyRTQxNTk7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBoZWlnaHQ6IDc1MHB4O1xufVxuXG4ucm93OmFmdGVyIHtcbiAgY29udGVudDogXCIgXCI7XG4gIGRpc3BsYXk6IHRhYmxlO1xuICBjbGVhcjogYm90aDtcbn1cblxuLnNraWxscyB7XG4gIGNvbG9yOiAjNUI4M0E2O1xuICBmb250LXNpemU6IDIzcHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGxpbmUtaGVpZ2h0OiAyMDAlO1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'its-ashley-paul';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm5/tabs.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__["MatTabsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/ashleypaul/its-ashley-paul/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map