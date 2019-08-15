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

module.exports = "<div class=\"page\">\n  <div class=\"header\">\n    <h1>&nbsp; Ashley Paul</h1>\n    <div class=\"subtitle\">\n      Candidate for B.S. in Computer Information System ~ Aspiring Front-end Developer\n    </div>\n  </div>\n  <hr class=\"line\">\n  <mat-tab-group class=\"tabs-theme\">\n    <mat-tab label=\"WELCOME\">\n      <div class=\"table page\">\n        <div class=\"row\">\n          <div class=\"column left\">\n            <i class=\"material-icons md-36 orange\">looks</i><br>\n            <img src=\"assets/images/profile.png\" class=\"responsive\">\n            <h2>CONTACT ME</h2>\n            <i class=\"material-icons md-36\">phone_iphone</i>\n            <p>\n              (207) 337 - 2915\n            </p>\n            <i class=\"material-icons md-36\">email</i>\n            <p>\n              paul_ashl@bentley.edu\n            </p>\n            <i class=\"material-icons md-36\">location_on</i>\n            <p>\n              175 Forest Street, Mailbox #2155 <br>\n              Waltham, MA 02452\n            </p>\n            <a target=\"_blank\" href=\"https://www.linkedin.com/in/its-ashley-paul\">\n              <img src=\"assets/images/linkedin.png\">\n            </a>\n            <p>\n              LinkedIn\n            </p>\n            <img src=\"assets/images/yay.gif\" class=\"responsive\">\n            <p>Thanks for visiting!</p>\n          </div>\n\n          <div class=\"column right\">\n            <h2>ABOUT ME</h2>\n            <p>\n              My name is Ashley Paul and I am an aspiring front-end developer and a candidate for a B.S. in Computer\n              Information Systems. I will be graduating from Bentley University in the Spring of 2020. I have had three\n              amazing internships for two incredible companies working towards one goal, preparing for my future. I've\n              learned programming languages, team work, agile methodologies, and much of what goes into successful\n              software development. I love what I have been introduced to, and am excited to see where it takes me!<br>\n              <br>\n              <i class=\"material-icons md-36\">offline_bolt</i>\n            </p>\n            <h2>SKILLS</h2>\n            <div class=\"skills\">\n              <p>\n                <strong>\n                  <span *ngFor=\"let skill of skills\">{{skill.skill}}<mat-progress-bar class=\"rainbow\" mode=\"determinate\" value={{skill.percentage}}></mat-progress-bar></span>\n                </strong>\n              </p>\n            </div>\n          </div>\n        </div>\n      </div>\n    </mat-tab>\n    <mat-tab label=\"EDUCATION\">\n      <div class=\"experience\">\n        <div id=\"company\" class=\"company\">Bentley University</div>\n        <div id=\"location\" class=\"location\">Waltham, MA</div><br><br>\n        <strong class=\"position\">Computer Information Systems</strong><br>\n        <p>\n          Graduation Date: May 16th, 2020<br>\n          GPA: 3.69<br>\n          Major GPA: 3.94/4.0\n        </p>\n\n        <hr>\n        <div id=\"company\" class=\"company\">IES Abroad Milan</div>\n        <div id=\"location\" class=\"location\">Milano, Italy</div><br><br>\n        <strong class=\"position\">Business Studies Program</strong><br>\n        <p>\n          Fall Semester 2018\n        </p>\n\n      </div>\n    </mat-tab>\n    <mat-tab label=\"PROFESSIONAL EXPERIENCE\">\n      <div class=\"experience\">\n        <div id=\"company\" class=\"company\">CIS Sandbox - Bentley University</div>\n        <div id=\"location\" class=\"location\">Waltham, MA</div><br><br>\n        <div><strong id=\"position\" class=\"position\">Computer Information Systems Department Tutor</strong></div>\n        <div id=\"time\" class=\"time\">Spring 2019 - Current</div><br>\n        <p>\n          o Prepare peers to succeed in CIS and IT courses I have previously taken by clarifying questions on projects\n          and homework<br>\n          o Promote the cutting-edge technology presentations and educational events to students and campus partners<br>\n          o Grow the social media presence of the CIS Sandbox to pique interest in the social learning space\n        </p>\n\n        <hr>\n        <div id=\"company\" class=\"company\">McGraw-Hill Education</div>\n        <div id=\"location\" class=\"location\">Boston, MA</div><br><br>\n        <div><strong id=\"position\" class=\"position\">Software Engineer Intern</strong></div>\n        <div id=\"time\" class=\"time\">Summer 2019</div><br>\n        <p>\n          o Maintained a shared component library used by 70+ UI developers to increase the velocity of scrum teams<br>\n          o Learned the framework Angular to correct bugs, provide detailed documentation, and write effective tests<br>\n          o Improved the accessibility, documentation, and internationalization of more than 25 presentational\n          components<br>\n          o Followed Agile & Scrum methodologies with a UI development team of 5 within the digital platform group at\n          MHE\n        </p>\n\n        <hr>\n        <div id=\"company\" class=\"company\">Partners4Innovation - Digital 360</div>\n        <div id=\"location\" class=\"location\">Milan, Italy</div><br><br>\n        <div><strong id=\"position\" class=\"position\">Data Analyst Intern</strong></div>\n        <div id=\"time\" class=\"time\">Fall 2018</div><br>\n        <p>\n          o Researched recommendation engines for effective and efficient implementation methods<br>\n          o Constructed a Collaborative Filtering Recommender System in Python using Jupyter Notebook<br>\n          o Evaluated recommender systems using precision and recall<br>\n          o Learned algorithmic techniques, focusing on matrix factorization for accurate predictions\n        </p>\n\n        <hr>\n        <div id=\"company\" class=\"company\">McGraw-Hill Education</div>\n        <div id=\"location\" class=\"location\">Boston, MA</div><br><br>\n        <div><strong id=\"position\" class=\"position\">Software Engineer Intern</strong></div>\n        <div id=\"time\" class=\"time\">Summer 2019</div><br>\n        <p>\n          o Created an interactive dashboard with Superset to analyze performance metrics from three teams in our\n          Digital Platform Groupo Created an interactive dashboard with Superset to analyze performance metrics from\n          three teams in our Digital Platform Group<br>\n          o Designed, implemented, and tested a Flutter mobile app using the programming language Dart in Visual Studio\n          Code<br>\n          o Attended daily meetings to plan, organize, and set goals for both group and individual tasks following Agile\n          and Scrum methodologies\n        </p>\n\n        <hr>\n      </div>\n    </mat-tab>\n  </mat-tab-group>\n\n  <hr class=\"line2\"><br>\n  <div id=\"run\" class=\"responsive\">\n    <i class=\"material-icons md-36 light\">star</i>&nbsp;&nbsp;&nbsp;\n    <i class=\"material-icons md-36 light\">star</i>&nbsp;&nbsp;&nbsp;\n    <i class=\"material-icons md-36 light\">star</i>\n  </div>\n</div>"

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

module.exports = ".page {\n  text-align: left;\n  background: #F2F2F2;\n  color: #2E4159;\n  font-size: 20px;\n}\n\n.header {\n  text-align: left;\n  background: #C7CEEA;\n  color: #2E4159;\n  font-size: 50px;\n  padding-top: 30px;\n}\n\n.subtitle {\n  text-align: left;\n  background-color: #5B83A6;\n  color: white;\n  font-size: 20px;\n  padding-left: 43px;\n  padding-right: 30px;\n}\n\n.table {\n  display: table;\n}\n\n.row {\n  display: table-row;\n}\n\n.column {\n  float: left;\n  padding: 10px;\n  display: table-cell;\n}\n\n.left {\n  text-align: center;\n  background: #f2f2f2;\n  width: 30%;\n  color: #2E4159;\n  font-size: 20px;\n}\n\n.right {\n  text-align: center;\n  background: #F2F2F2;\n  width: 50%;\n  color: #2E4159;\n  font-size: 20px;\n  float: right;\n  padding-right: 30px;\n}\n\n.skills {\n  color: #5B83A6;\n  font-size: 20px;\n  text-align: left;\n  line-height: 200%;\n  padding-left: 20px;\n}\n\nhr.line {\n  height: 5%;\n  width: 99%;\n  position: absolute;\n  background: linear-gradient(90deg, #FFB7B2 0%, #FFDAC1 25%, #9CB6D9 50%, #C7CEEA 75%, #A8C1EA 100%);\n  background-size: 1800% 1800%;\n  -webkit-animation: rainbow 10s ease infinite;\n          animation: rainbow 10s ease infinite;\n}\n\nhr.line2 {\n  height: 10%;\n  width: 99%;\n  position: absolute;\n  background: linear-gradient(90deg, #FFB7B2 0%, #FFDAC1 25%, #9CB6D9 50%, #C7CEEA 75%, #A8C1EA 100%);\n  background-size: 1800% 1800%;\n  -webkit-animation: rainbow 10s ease infinite;\n          animation: rainbow 10s ease infinite;\n}\n\n@-webkit-keyframes rainbow {\n  0% {\n    background-position: 0% 82%;\n  }\n  50% {\n    background-position: 100% 19%;\n  }\n  100% {\n    background-position: 0% 82%;\n  }\n}\n\n@keyframes rainbow {\n  0% {\n    background-position: 0% 82%;\n  }\n  50% {\n    background-position: 100% 19%;\n  }\n  100% {\n    background-position: 0% 82%;\n  }\n}\n\n.material-icons.md-36 {\n  font-size: 36px;\n  color: #5B83A6;\n}\n\n.material-icons.md-36.orange {\n  font-size: 36px;\n  color: #FF9800;\n}\n\n.material-icons.md-36.light {\n  font-size: 36px;\n  color: #FFDAC1;\n}\n\n.experience {\n  text-align: left;\n  background: #F2F2F2;\n  color: #2E4159;\n  font-size: 20px;\n  padding-left: 20px;\n}\n\n#company, #location {\n  display: inline;\n}\n\n.company {\n  float: left;\n  background: #f2f2f2;\n  color: #2E4159;\n  font-size: 25px;\n}\n\n.location {\n  float: right;\n  padding-right: 40px;\n  background: #f2f2f2;\n  color: #2E4159;\n  font-size: 20px;\n}\n\n#position, #time {\n  display: inline;\n}\n\n.position {\n  float: left;\n  background: linear-gradient(90deg, #FFB7B2 0%, #FFDAC1 25%, #9CB6D9 50%, #C7CEEA 75%, #A8C1EA 100%);\n  color: #2E4159;\n  font-size: 20px;\n}\n\n.time {\n  float: right;\n  padding-right: 40px;\n  background: #f2f2f2;\n  color: #2E4159;\n  font-size: 20px;\n}\n\n.responsive {\n  width: 100%;\n  max-width: 300px;\n  height: auto;\n}\n\n#run {\n  position: absolute;\n  -webkit-animation: run 10s infinite;\n          animation: run 10s infinite;\n}\n\n@-webkit-keyframes run {\n  0% {\n    left: 0;\n  }\n  50% {\n    left: 89%;\n  }\n  100% {\n    left: 0;\n  }\n}\n\n@keyframes run {\n  0% {\n    left: 0;\n  }\n  50% {\n    left: 89%;\n  }\n  100% {\n    left: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hc2hsZXlwYXVsL2l0cy1hc2hsZXktcGF1bC9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FDQ0o7O0FERUE7RUFDSSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ0NKOztBREVBO0VBQ0ksZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQ0NKOztBRENBO0VBQ0ksY0FBQTtBQ0VKOztBRENBO0VBQ0ksa0JBQUE7QUNFSjs7QURDQTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUNFSjs7QURDQTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUNFSjs7QURDQTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUNFSjs7QURDQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDRUo7O0FEQ0E7RUFDSSxVQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUdBQUE7RUFDQSw0QkFBQTtFQUNBLDRDQUFBO1VBQUEsb0NBQUE7QUNFSjs7QUREQTtFQUNJLFdBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxtR0FBQTtFQUNBLDRCQUFBO0VBQ0EsNENBQUE7VUFBQSxvQ0FBQTtBQ0lKOztBREZBO0VBQ0k7SUFBRywyQkFBQTtFQ01MO0VETEU7SUFBSSw2QkFBQTtFQ1FOO0VEUEU7SUFBSywyQkFBQTtFQ1VQO0FBQ0Y7O0FEZEE7RUFDSTtJQUFHLDJCQUFBO0VDTUw7RURMRTtJQUFJLDZCQUFBO0VDUU47RURQRTtJQUFLLDJCQUFBO0VDVVA7QUFDRjs7QURSQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0FDVUo7O0FEUEE7RUFDSSxlQUFBO0VBQ0EsY0FBQTtBQ1VKOztBRFJBO0VBQ0ksZUFBQTtFQUNBLGNBQUE7QUNXSjs7QURSQTtFQUNJLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDV0o7O0FEUkE7RUFDSSxlQUFBO0FDV0o7O0FEUkE7RUFDSSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQ1dKOztBRFRBO0VBQ0ksWUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQ1lKOztBRFRBO0VBQ0ksZUFBQTtBQ1lKOztBRFRBO0VBQ0ksV0FBQTtFQUNBLG1HQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUNZSjs7QURUQTtFQUNJLFlBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUNZSjs7QURUQTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUNZSjs7QURUQTtFQUNJLGtCQUFBO0VBQ0EsbUNBQUE7VUFBQSwyQkFBQTtBQ1lKOztBRFRBO0VBQ0k7SUFBSyxPQUFBO0VDYVA7RURaRTtJQUFLLFNBQUE7RUNlUDtFRGRFO0lBQU0sT0FBQTtFQ2lCUjtBQUNGOztBRHJCQTtFQUNJO0lBQUssT0FBQTtFQ2FQO0VEWkU7SUFBSyxTQUFBO0VDZVA7RURkRTtJQUFNLE9BQUE7RUNpQlI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYWdlIHtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIGJhY2tncm91bmQ6ICNGMkYyRjI7XG4gICAgY29sb3I6ICMyRTQxNTk7XG4gICAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4uaGVhZGVyIHtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIGJhY2tncm91bmQ6ICNDN0NFRUE7XG4gICAgY29sb3I6ICMyRTQxNTk7XG4gICAgZm9udC1zaXplOiA1MHB4O1xuICAgIHBhZGRpbmctdG9wOiAzMHB4O1xufVxuXG4uc3VidGl0bGUge1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzVCODNBNjtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIHBhZGRpbmctbGVmdDogNDNweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAzMHB4O31cblxuLnRhYmxlIHtcbiAgICBkaXNwbGF5OiB0YWJsZTsgXG59XG5cbi5yb3cge1xuICAgIGRpc3BsYXk6IHRhYmxlLXJvdztcbn1cblxuLmNvbHVtbiB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xufVxuXG4ubGVmdCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQ6ICNmMmYyZjI7XG4gICAgd2lkdGg6IDMwJTtcbiAgICBjb2xvcjogIzJFNDE1OTtcbiAgICBmb250LXNpemU6IDIwcHg7XG59XG5cbi5yaWdodCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQ6ICNGMkYyRjI7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBjb2xvcjogIzJFNDE1OTtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIHBhZGRpbmctcmlnaHQ6IDMwcHg7XG59XG5cbi5za2lsbHMge1xuICAgIGNvbG9yOiAjNUI4M0E2O1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIGxpbmUtaGVpZ2h0OiAyMDAlO1xuICAgIHBhZGRpbmctbGVmdDogMjBweDtcbn1cblxuaHIubGluZSB7XG4gICAgaGVpZ2h0OiA1JTtcbiAgICB3aWR0aDogOTklO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICNGRkI3QjIgMCUsICNGRkRBQzEgMjUlLCAjOUNCNkQ5IDUwJSwgI0M3Q0VFQSA3NSUsICNBOEMxRUEgMTAwJSk7XG4gICAgYmFja2dyb3VuZC1zaXplOiAxODAwJSAxODAwJTtcbiAgICBhbmltYXRpb246IHJhaW5ib3cgMTBzIGVhc2UgaW5maW5pdGU7fVxuaHIubGluZTIge1xuICAgIGhlaWdodDogMTAlO1xuICAgIHdpZHRoOiA5OSU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgI0ZGQjdCMiAwJSwgI0ZGREFDMSAyNSUsICM5Q0I2RDkgNTAlLCAjQzdDRUVBIDc1JSwgI0E4QzFFQSAxMDAlKTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDE4MDAlIDE4MDAlO1xuICAgIGFuaW1hdGlvbjogcmFpbmJvdyAxMHMgZWFzZSBpbmZpbml0ZTt9XG5cbkBrZXlmcmFtZXMgcmFpbmJvdyB7IFxuICAgIDAle2JhY2tncm91bmQtcG9zaXRpb246MCUgODIlfVxuICAgIDUwJXtiYWNrZ3JvdW5kLXBvc2l0aW9uOjEwMCUgMTklfVxuICAgIDEwMCV7YmFja2dyb3VuZC1wb3NpdGlvbjowJSA4MiV9XG59XG5cbi5tYXRlcmlhbC1pY29ucy5tZC0zNiB7IFxuICAgIGZvbnQtc2l6ZTogMzZweDtcbiAgICBjb2xvcjogIzVCODNBNjtcbn1cblxuLm1hdGVyaWFsLWljb25zLm1kLTM2Lm9yYW5nZSB7IFxuICAgIGZvbnQtc2l6ZTogMzZweDtcbiAgICBjb2xvcjogI0ZGOTgwMDtcbn1cbi5tYXRlcmlhbC1pY29ucy5tZC0zNi5saWdodCB7IFxuICAgIGZvbnQtc2l6ZTogMzZweDtcbiAgICBjb2xvcjogI0ZGREFDMTtcbn1cblxuLmV4cGVyaWVuY2Uge1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgYmFja2dyb3VuZDogI0YyRjJGMjtcbiAgICBjb2xvcjogIzJFNDE1OTtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xufVxuXG4jY29tcGFueSwgI2xvY2F0aW9uIHtcbiAgICBkaXNwbGF5OmlubGluZTtcbn1cblxuLmNvbXBhbnkge1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIGJhY2tncm91bmQ6ICNmMmYyZjI7XG4gICAgY29sb3I6ICMyRTQxNTk7XG4gICAgZm9udC1zaXplOiAyNXB4O1xufVxuLmxvY2F0aW9uIHtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgcGFkZGluZy1yaWdodDogNDBweDtcbiAgICBiYWNrZ3JvdW5kOiAjZjJmMmYyO1xuICAgIGNvbG9yOiAjMkU0MTU5O1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuI3Bvc2l0aW9uLCAjdGltZSB7XG4gICAgZGlzcGxheTppbmxpbmU7XG59XG5cbi5wb3NpdGlvbiB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjRkZCN0IyIDAlLCAjRkZEQUMxIDI1JSwgIzlDQjZEOSA1MCUsICNDN0NFRUEgNzUlLCAjQThDMUVBIDEwMCUpO1xuICAgIGNvbG9yOiAjMkU0MTU5O1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLnRpbWUge1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBwYWRkaW5nLXJpZ2h0OiA0MHB4O1xuICAgIGJhY2tncm91bmQ6ICNmMmYyZjI7XG4gICAgY29sb3I6ICMyRTQxNTk7XG4gICAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4ucmVzcG9uc2l2ZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWF4LXdpZHRoOiAzMDBweDtcbiAgICBoZWlnaHQ6IGF1dG87XG4gIH1cblxuI3J1biB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGFuaW1hdGlvbjogcnVuIDEwcyBpbmZpbml0ZTtcbn1cblxuQGtleWZyYW1lcyBydW4ge1xuICAgIDAlIHsgbGVmdDogMDt9XG4gICAgNTAleyBsZWZ0IDogODklO31cbiAgICAxMDAleyBsZWZ0OiAwO31cbn1cbiIsIi5wYWdlIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgYmFja2dyb3VuZDogI0YyRjJGMjtcbiAgY29sb3I6ICMyRTQxNTk7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLmhlYWRlciB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGJhY2tncm91bmQ6ICNDN0NFRUE7XG4gIGNvbG9yOiAjMkU0MTU5O1xuICBmb250LXNpemU6IDUwcHg7XG4gIHBhZGRpbmctdG9wOiAzMHB4O1xufVxuXG4uc3VidGl0bGUge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNUI4M0E2O1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgcGFkZGluZy1sZWZ0OiA0M3B4O1xuICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xufVxuXG4udGFibGUge1xuICBkaXNwbGF5OiB0YWJsZTtcbn1cblxuLnJvdyB7XG4gIGRpc3BsYXk6IHRhYmxlLXJvdztcbn1cblxuLmNvbHVtbiB7XG4gIGZsb2F0OiBsZWZ0O1xuICBwYWRkaW5nOiAxMHB4O1xuICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xufVxuXG4ubGVmdCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogI2YyZjJmMjtcbiAgd2lkdGg6IDMwJTtcbiAgY29sb3I6ICMyRTQxNTk7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLnJpZ2h0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiAjRjJGMkYyO1xuICB3aWR0aDogNTAlO1xuICBjb2xvcjogIzJFNDE1OTtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmbG9hdDogcmlnaHQ7XG4gIHBhZGRpbmctcmlnaHQ6IDMwcHg7XG59XG5cbi5za2lsbHMge1xuICBjb2xvcjogIzVCODNBNjtcbiAgZm9udC1zaXplOiAyMHB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBsaW5lLWhlaWdodDogMjAwJTtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xufVxuXG5oci5saW5lIHtcbiAgaGVpZ2h0OiA1JTtcbiAgd2lkdGg6IDk5JTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICNGRkI3QjIgMCUsICNGRkRBQzEgMjUlLCAjOUNCNkQ5IDUwJSwgI0M3Q0VFQSA3NSUsICNBOEMxRUEgMTAwJSk7XG4gIGJhY2tncm91bmQtc2l6ZTogMTgwMCUgMTgwMCU7XG4gIGFuaW1hdGlvbjogcmFpbmJvdyAxMHMgZWFzZSBpbmZpbml0ZTtcbn1cblxuaHIubGluZTIge1xuICBoZWlnaHQ6IDEwJTtcbiAgd2lkdGg6IDk5JTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICNGRkI3QjIgMCUsICNGRkRBQzEgMjUlLCAjOUNCNkQ5IDUwJSwgI0M3Q0VFQSA3NSUsICNBOEMxRUEgMTAwJSk7XG4gIGJhY2tncm91bmQtc2l6ZTogMTgwMCUgMTgwMCU7XG4gIGFuaW1hdGlvbjogcmFpbmJvdyAxMHMgZWFzZSBpbmZpbml0ZTtcbn1cblxuQGtleWZyYW1lcyByYWluYm93IHtcbiAgMCUge1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAlIDgyJTtcbiAgfVxuICA1MCUge1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDEwMCUgMTklO1xuICB9XG4gIDEwMCUge1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAlIDgyJTtcbiAgfVxufVxuLm1hdGVyaWFsLWljb25zLm1kLTM2IHtcbiAgZm9udC1zaXplOiAzNnB4O1xuICBjb2xvcjogIzVCODNBNjtcbn1cblxuLm1hdGVyaWFsLWljb25zLm1kLTM2Lm9yYW5nZSB7XG4gIGZvbnQtc2l6ZTogMzZweDtcbiAgY29sb3I6ICNGRjk4MDA7XG59XG5cbi5tYXRlcmlhbC1pY29ucy5tZC0zNi5saWdodCB7XG4gIGZvbnQtc2l6ZTogMzZweDtcbiAgY29sb3I6ICNGRkRBQzE7XG59XG5cbi5leHBlcmllbmNlIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgYmFja2dyb3VuZDogI0YyRjJGMjtcbiAgY29sb3I6ICMyRTQxNTk7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xufVxuXG4jY29tcGFueSwgI2xvY2F0aW9uIHtcbiAgZGlzcGxheTogaW5saW5lO1xufVxuXG4uY29tcGFueSB7XG4gIGZsb2F0OiBsZWZ0O1xuICBiYWNrZ3JvdW5kOiAjZjJmMmYyO1xuICBjb2xvcjogIzJFNDE1OTtcbiAgZm9udC1zaXplOiAyNXB4O1xufVxuXG4ubG9jYXRpb24ge1xuICBmbG9hdDogcmlnaHQ7XG4gIHBhZGRpbmctcmlnaHQ6IDQwcHg7XG4gIGJhY2tncm91bmQ6ICNmMmYyZjI7XG4gIGNvbG9yOiAjMkU0MTU5O1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbiNwb3NpdGlvbiwgI3RpbWUge1xuICBkaXNwbGF5OiBpbmxpbmU7XG59XG5cbi5wb3NpdGlvbiB7XG4gIGZsb2F0OiBsZWZ0O1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICNGRkI3QjIgMCUsICNGRkRBQzEgMjUlLCAjOUNCNkQ5IDUwJSwgI0M3Q0VFQSA3NSUsICNBOEMxRUEgMTAwJSk7XG4gIGNvbG9yOiAjMkU0MTU5O1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbi50aW1lIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBwYWRkaW5nLXJpZ2h0OiA0MHB4O1xuICBiYWNrZ3JvdW5kOiAjZjJmMmYyO1xuICBjb2xvcjogIzJFNDE1OTtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4ucmVzcG9uc2l2ZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDMwMHB4O1xuICBoZWlnaHQ6IGF1dG87XG59XG5cbiNydW4ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGFuaW1hdGlvbjogcnVuIDEwcyBpbmZpbml0ZTtcbn1cblxuQGtleWZyYW1lcyBydW4ge1xuICAwJSB7XG4gICAgbGVmdDogMDtcbiAgfVxuICA1MCUge1xuICAgIGxlZnQ6IDg5JTtcbiAgfVxuICAxMDAlIHtcbiAgICBsZWZ0OiAwO1xuICB9XG59Il19 */"

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
/* harmony import */ var _skills_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./skills.service */ "./src/app/skills.service.ts");



var AppComponent = /** @class */ (function () {
    function AppComponent(skillsService) {
        this.skillsService = skillsService;
        this.title = 'its-ashley-paul';
    }
    AppComponent.prototype.ngOnInit = function () {
        this.showSkills();
    };
    AppComponent.prototype.showSkills = function () {
        var _this = this;
        this.skillsService.getSkills()
            .subscribe(function (skills) {
            _this.skills = skills;
            console.log('this.skills1', _this.skills);
        });
    };
    AppComponent.ctorParameters = function () { return [
        { type: _skills_service__WEBPACK_IMPORTED_MODULE_2__["SkillsService"] }
    ]; };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            providers: [_skills_service__WEBPACK_IMPORTED_MODULE_2__["SkillsService"]],
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_skills_service__WEBPACK_IMPORTED_MODULE_2__["SkillsService"]])
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
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/esm5/progress-bar.es5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");









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
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_7__["MatProgressBarModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/skills.service.ts":
/*!***********************************!*\
  !*** ./src/app/skills.service.ts ***!
  \***********************************/
/*! exports provided: SkillsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillsService", function() { return SkillsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var SkillsService = /** @class */ (function () {
    function SkillsService(http) {
        this.http = http;
        this.skillsData = '../assets/skills.json';
    }
    SkillsService.prototype.getSkills = function () {
        return this.http.get(this.skillsData);
    };
    SkillsService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    SkillsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], SkillsService);
    return SkillsService;
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