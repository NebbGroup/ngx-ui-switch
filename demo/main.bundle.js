webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n\n<div class=\"container mt-3\">\n  <app-demo></app-demo>\n</div>\n\n<div class=\"mt-5\">\n  <github-link></github-link>\n  <app-footer></app-footer>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_package_json__ = __webpack_require__("../../../../../src/lib/package.json");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_package_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__lib_package_json__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(t) {
        this.t = t;
        var title = [t.getTitle()];
        if (__WEBPACK_IMPORTED_MODULE_2__lib_package_json___default.a) {
            title.push(__WEBPACK_IMPORTED_MODULE_2__lib_package_json___default.a.version + " Demo");
        }
        t.setTitle(title.join(' '));
    }
    AppComponent.prototype.ngOnInit = function () { };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: ["\n    :host {\n      width: 80%;\n      display: block;\n      margin: 0 auto;\n      height: 600px;\n    }\n  "],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* Title */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* Title */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lib_public_api__ = __webpack_require__("../../../../../src/lib/public_api.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__demo_demo_component__ = __webpack_require__("../../../../../src/app/demo/demo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__footer_footer_component__ = __webpack_require__("../../../../../src/app/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__header_header_component__ = __webpack_require__("../../../../../src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__github_link_github_link_component__ = __webpack_require__("../../../../../src/app/github-link/github-link.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__demo_demo_component__["a" /* DemoComponent */],
            __WEBPACK_IMPORTED_MODULE_7__footer_footer_component__["a" /* FooterComponent */],
            __WEBPACK_IMPORTED_MODULE_8__header_header_component__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_9__github_link_github_link_component__["a" /* GithubLinkComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_4__lib_public_api__["a" /* UiSwitchModule */]
        ],
        entryComponents: [],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/demo/demo.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row justify-content-center\">\n  <div class=\"col-lg-10 col-sm-12\">\n    <h3>checked</h3>\n    <p>\n        <ui-switch checked></ui-switch>\n        <ui-switch [checked]=\"false\"></ui-switch>\n    </p>\n\n    <h3>disabled</h3>\n    <p>\n        <ui-switch disabled></ui-switch>\n        <ui-switch checked [disabled]=\"true\"></ui-switch>\n    </p>\n\n    <h3>two way binding</h3>\n    <p>\n        <ui-switch [(ngModel)]=\"enable\"></ui-switch> {{enable}}\n    </p>\n\n    <h3>change</h3>\n    <p>\n        <ui-switch (change)=\"onChange()\"></ui-switch> change count {{count}}\n    </p>\n\n    <h3>size</h3>\n    <p>\n        <ui-switch size=\"small\"></ui-switch>\n        <ui-switch></ui-switch>\n        <ui-switch size=\"large\"></ui-switch>\n    </p>\n\n    <h3>reverse</h3>\n    <p>\n        <ui-switch reverse></ui-switch>\n    </p>\n\n    <h3>color</h3>\n    <p>\n        <ui-switch></ui-switch>\n        <ui-switch color=\"blue\"></ui-switch>\n        <ui-switch color=\"red\"></ui-switch>\n    </p>\n\n    <h3>switchColor</h3>\n    <p>\n        <ui-switch switchColor=\"red\"></ui-switch>\n        <ui-switch switchColor=\"blue\"></ui-switch>\n    </p>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/demo/demo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DemoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DemoComponent = (function () {
    function DemoComponent() {
        this.enable = true;
        this.count = 0;
    }
    DemoComponent.prototype.ngOnInit = function () { };
    DemoComponent.prototype.onSubmit = function () { };
    DemoComponent.prototype.onChange = function () {
        this.count++;
    };
    return DemoComponent;
}());
DemoComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-demo',
        template: __webpack_require__("../../../../../src/app/demo/demo.component.html")
    }),
    __metadata("design:paramtypes", [])
], DemoComponent);

//# sourceMappingURL=demo.component.js.map

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
        this.version = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* VERSION */].full;
    }
    FooterComponent.prototype.ngOnInit = function () { };
    return FooterComponent;
}());
FooterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-footer',
        template: "\n  <footer class=\"footer mb-4 mt-2\">\n    Demo using Angular {{version}}\n    <br>\n    Released under the\n    <a href=\"https://github.com/webcat12345/ngx-ui-switch/blob/master/LICENSE\">MIT</a> license.\n    <a href=\"https://github.com/webcat12345/ngx-ui-switch\">View source</a>.\n  </footer>\n  ",
        styles: ["\n  .footer {\n    line-height: 2;\n    text-align: center;\n    font-size: 12px;\n    color: #999;\n  }\n  "],
    }),
    __metadata("design:paramtypes", [])
], FooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ "../../../../../src/app/github-link/github-link.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GithubLinkComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/* tslint:disable:max-line-length */

var GithubLinkComponent = (function () {
    function GithubLinkComponent() {
        this.username = 'webcat12345';
        this.repo = 'ngx-ui-switch';
    }
    GithubLinkComponent.prototype.href = function (username, repo) {
        return "https://github.com/" + username + "/" + repo;
    };
    return GithubLinkComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], GithubLinkComponent.prototype, "username", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], GithubLinkComponent.prototype, "repo", void 0);
GithubLinkComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'github-link',
        styles: ["\n  .githubLink {\n    text-decoration: none;\n  }\n  div {\n    text-align: center;\n  }\n  "],
        template: "\n  <div>\n    <a class=\"githubLink\" [href]=\"href(username, repo)\">\n      <svg fill=\"#181717\" height=\"32\" aria-labelledby=\"title\" role=\"img\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\" fill-rule=\"evenodd\" clip-rule=\"evenodd\" stroke-linejoin=\"round\" stroke-miterlimit=\"1.414\">\n        <title>GitHub icon</title>\n        <path d=\"M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12\"/>\n      </svg>\n    </a>\n  </div>\n  ",
    }),
    __metadata("design:paramtypes", [])
], GithubLinkComponent);

//# sourceMappingURL=github-link.component.js.map

/***/ }),

/***/ "../../../../../src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<a href=\"https://github.com/webcat12345/ngx-ui-switch\" class=\"hidden-xs\">\n  <img\n    style=\"position: absolute; top: 0; right: 0; border: 0; z-index: 2000\"\n    src=\"https://camo.githubusercontent.com/38ef81f8aca64bb9a64448d0d70f1308ef5341ab/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f6461726b626c75655f3132313632312e706e67\"\n    alt=\"Fork me on GitHub\"\n    data-canonical-src=\"https://s3.amazonaws.com/github/ribbons/forkme_right_darkblue_121621.png\">\n</a>\n\n<nav class=\"navbar navbar-expand-md navbar-dark bg-dark fixed-top\">\n  <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-controls=\"navbar\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <a class=\"navbar-brand\" href=\"#\">ngx ui switch</a>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbar\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#demo\">Demo</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"https://github.com/webcat12345/ngx-ui-switch#installation\">Installation</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"https://webcat12345.github.io/ngx-ui-switch/docs/\">Documentation</a>\n      </li>\n    </ul>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () { };
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-header',
        template: __webpack_require__("../../../../../src/app/header/header.component.html")
    }),
    __metadata("design:paramtypes", [])
], HeaderComponent);

//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/lib/package.json":
/***/ (function(module, exports) {

module.exports = {"name":"ngx-ui-switch","version":"1.4.4","description":"switch button for angular4","bugs":"https://github.com/webcat12345/ngx-ui-switch/issues","homepage":"https://github.com/webcat12345/ngx-ui-switch#readme","repository":"https://github.com/webcat12345/ngx-ui-switch.git","license":"MIT","author":"webcat12345","keywords":["angular2","angular4","ngx","ng2","uiswitch","switch","ui"],"main":"./ui-switch.umd.js","module":"./ui-switch.es5.js","es2015":"./ui-switch.es2015.js","typings":"./index.d.ts","peerDependencies":{"@angular/core":">=4.3.0 <=6.0.0","@angular/common":">=4.3.0 <=6.0.0","rxjs":"^5.4.0"}}

/***/ }),

/***/ "../../../../../src/lib/public_api.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ui_switch_ui_switch_component__ = __webpack_require__("../../../../../src/lib/ui-switch/ui-switch.component.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ui_switch_ui_switch_module__ = __webpack_require__("../../../../../src/lib/ui-switch/ui-switch.module.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__ui_switch_ui_switch_module__["a"]; });


//# sourceMappingURL=public_api.js.map

/***/ }),

/***/ "../../../../../src/lib/ui-switch/ui-switch.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UiSwitchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UI_SWITCH_CONTROL_VALUE_ACCESSOR = {
    provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NG_VALUE_ACCESSOR */],
    /* tslint:disable-next-line: no-use-before-declare */
    useExisting: Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_22" /* forwardRef */])(function () { return UiSwitchComponent; }),
    multi: true
};
var UiSwitchComponent = (function () {
    function UiSwitchComponent() {
        this.size = 'medium';
        this.change = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.color = 'rgb(100, 189, 99)';
        this.switchOffColor = '';
        this.switchColor = '#fff';
        this.defaultBgColor = '#fff';
        this.defaultBoColor = '#dfdfdf';
        this.onTouchedCallback = function (v) { };
        this.onChangeCallback = function (v) { };
    }
    Object.defineProperty(UiSwitchComponent.prototype, "checked", {
        get: function () {
            return this._checked;
        },
        set: function (v) {
            this._checked = v !== false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UiSwitchComponent.prototype, "disabled", {
        get: function () {
            return this._disabled;
        },
        set: function (v) {
            this._disabled = v !== false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UiSwitchComponent.prototype, "reverse", {
        get: function () {
            return this._reverse;
        },
        set: function (v) {
            this._reverse = v !== false;
        },
        enumerable: true,
        configurable: true
    });
    UiSwitchComponent.prototype.getColor = function (flag) {
        if (flag === void 0) { flag = ''; }
        if (flag === 'borderColor') {
            return this.defaultBoColor;
        }
        if (flag === 'switchColor') {
            if (this.reverse) {
                return !this.checked ? this.switchColor : this.switchOffColor || this.switchColor;
            }
            return this.checked ? this.switchColor : this.switchOffColor || this.switchColor;
        }
        if (this.reverse) {
            return !this.checked ? this.color : this.defaultBgColor;
        }
        return this.checked ? this.color : this.defaultBgColor;
    };
    UiSwitchComponent.prototype.onToggle = function () {
        if (this.disabled) {
            return;
        }
        this.checked = !this.checked;
        this.change.emit(this.checked);
        this.onChangeCallback(this.checked);
        this.onTouchedCallback(this.checked);
    };
    UiSwitchComponent.prototype.writeValue = function (obj) {
        if (obj !== this.checked) {
            this.checked = !!obj;
        }
    };
    UiSwitchComponent.prototype.registerOnChange = function (fn) {
        this.onChangeCallback = fn;
    };
    UiSwitchComponent.prototype.registerOnTouched = function (fn) {
        this.onTouchedCallback = fn;
    };
    UiSwitchComponent.prototype.setDisabledState = function (isDisabled) {
        this.disabled = isDisabled;
    };
    return UiSwitchComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], UiSwitchComponent.prototype, "size", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
    __metadata("design:type", Object)
], UiSwitchComponent.prototype, "change", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], UiSwitchComponent.prototype, "color", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], UiSwitchComponent.prototype, "switchOffColor", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], UiSwitchComponent.prototype, "switchColor", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], UiSwitchComponent.prototype, "defaultBgColor", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], UiSwitchComponent.prototype, "defaultBoColor", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], UiSwitchComponent.prototype, "checked", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], UiSwitchComponent.prototype, "disabled", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], UiSwitchComponent.prototype, "reverse", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* HostListener */])('click'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UiSwitchComponent.prototype, "onToggle", null);
UiSwitchComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'ui-switch',
        template: "\n    <span class=\"switch\"\n    [class.checked]=\"checked\"\n    [class.disabled]=\"disabled\"\n    [class.switch-large]=\"size === 'large'\"\n    [class.switch-medium]=\"size === 'medium'\"\n    [class.switch-small]=\"size === 'small'\"\n    [style.background-color]=\"getColor()\"\n    [style.border-color]=\"getColor('borderColor')\"\n    >\n    <small [style.background]=\"getColor('switchColor')\">\n    </small>\n    </span>\n  ",
        styles: ["\n    .switch {\n    background: #f00;\n    border: 1px solid #dfdfdf;\n    position: relative;\n    display: inline-block;\n    box-sizing: content-box;\n    overflow: visible;\n    padding: 0;\n    margin: 0;\n    cursor: pointer;\n    box-shadow: rgb(223, 223, 223) 0 0 0 0 inset;\n    transition: 0.3s ease-out all;\n    -webkit-transition: 0.3s ease-out all;\n    }\n\n    small {\n    border-radius: 100%;\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);\n    position: absolute;\n    top: 0;\n    left: 0;\n    transition: 0.3s ease-out all;\n    -webkit-transition: 0.3s ease-out all;\n    }\n\n    .switch-large {\n    width: 66px;\n    height: 40px;\n    border-radius: 40px;\n    }\n\n    .switch-large small {\n    width: 40px;\n    height: 40px;\n    }\n\n    .switch-medium {\n    width: 50px;\n    height: 30px;\n    border-radius: 30px;\n    }\n\n    .switch-medium small {\n    width: 30px;\n    height: 30px;\n    }\n\n    .switch-small {\n    width: 33px;\n    height: 20px;\n    border-radius: 20px;\n    }\n\n    .switch-small small {\n    width: 20px;\n    height: 20px;\n    }\n\n    .checked {\n    background: rgb(100, 189, 99);\n    border-color: rgb(100, 189, 99);\n    }\n\n    .switch-large.checked small {\n    left: 26px;\n    }\n\n    .switch-medium.checked small {\n    left: 20px;\n    }\n\n    .switch-small.checked small {\n    left: 13px;\n    }\n\n    .disabled {\n    opacity: .50;\n    cursor: not-allowed;\n    }\n    "],
        providers: [UI_SWITCH_CONTROL_VALUE_ACCESSOR]
    })
], UiSwitchComponent);

//# sourceMappingURL=ui-switch.component.js.map

/***/ }),

/***/ "../../../../../src/lib/ui-switch/ui-switch.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UiSwitchModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ui_switch_component__ = __webpack_require__("../../../../../src/lib/ui-switch/ui-switch.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var UiSwitchModule = (function () {
    function UiSwitchModule() {
    }
    return UiSwitchModule;
}());
UiSwitchModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_1__ui_switch_component__["a" /* UiSwitchComponent */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__ui_switch_component__["a" /* UiSwitchComponent */]
        ]
    })
], UiSwitchModule);

//# sourceMappingURL=ui-switch.module.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map