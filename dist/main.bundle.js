webpackJsonp([2,5],{

/***/ 121:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"app/components/statistics/statistics.module": [
		279,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
module.exports = webpackAsyncContext;
webpackAsyncContext.id = 121;


/***/ }),

/***/ 122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(149);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 126:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__(125);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExtendedMaterialModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

//add custom elements needed in app

var ExtendedMaterialModule = (function () {
    function ExtendedMaterialModule() {
    }
    ExtendedMaterialModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MaterialModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MdTabsModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MdButtonModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MdSelectModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MdDatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MdNativeDateModule */],
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MaterialModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MdTabsModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MdButtonModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MdSelectModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MdDatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MdNativeDateModule */],
            ]
        })
    ], ExtendedMaterialModule);
    return ExtendedMaterialModule;
}());

//# sourceMappingURL=material.module.js.map

/***/ }),

/***/ 131:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_services_index__ = __webpack_require__(22);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
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
    function AppComponent(translationService) {
        this.translationService = translationService;
        this.title = translationService.get('title');
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* Component */])({
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* ViewEncapsulation */].None,
            selector: 'app-root',
            template: __webpack_require__(216),
            styles: [__webpack_require__(208)]
        }),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_services_index__["c" /* TranslationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_services_index__["c" /* TranslationService */]) === "function" && _a || Object])
    ], AppComponent);
    return AppComponent;
    var _a;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 132:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__material_material_module__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_routes__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_hammerjs__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__index__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__firebase_config__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angularfire2__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angularfire2_database__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_angularfire2_auth__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_index__ = __webpack_require__(22);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





//import { Logger } from "angular2-logger/core";


//routes








var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                // Components / Directives/ Pipes
                __WEBPACK_IMPORTED_MODULE_9__index__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_9__index__["b" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_9__index__["c" /* CategoryComponent */],
                __WEBPACK_IMPORTED_MODULE_9__index__["d" /* ScannerComponent */],
                __WEBPACK_IMPORTED_MODULE_9__index__["e" /* TakePictureComponent */],
                __WEBPACK_IMPORTED_MODULE_9__index__["f" /* DiagramComponent */],
                __WEBPACK_IMPORTED_MODULE_9__index__["g" /* AuthComponent */],
                __WEBPACK_IMPORTED_MODULE_9__index__["h" /* Error404Component */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_11_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_10__firebase_config__["a" /* firebaseConfig */]),
                __WEBPACK_IMPORTED_MODULE_12_angularfire2_database__["a" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_13_angularfire2_auth__["a" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_7__app_routes__["a" /* appRoutes */]),
                __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_6__material_material_module__["a" /* ExtendedMaterialModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_14__services_index__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_14__services_index__["b" /* BudgetService */],
                __WEBPACK_IMPORTED_MODULE_14__services_index__["c" /* TranslationService */],
                __WEBPACK_IMPORTED_MODULE_14__services_index__["d" /* AuthentificatedActivator */],
                __WEBPACK_IMPORTED_MODULE_14__services_index__["e" /* CategoryRouteActivator */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_9__index__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 133:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_routeActivators_index__ = __webpack_require__(79);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return appRoutes; });


var appRoutes = [
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_0__index__["g" /* AuthComponent */] },
    { path: 'categories', component: __WEBPACK_IMPORTED_MODULE_0__index__["c" /* CategoryComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_1__services_routeActivators_index__["a" /* AuthentificatedActivator */]] },
    // { path: 'statistics/:category', component: StatisticsComponent, canActivate: [AuthentificatedActivator, CategoryRouteActivator] },
    { path: 'add', component: __WEBPACK_IMPORTED_MODULE_0__index__["d" /* ScannerComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_1__services_routeActivators_index__["a" /* AuthentificatedActivator */]] },
    { path: '404', component: __WEBPACK_IMPORTED_MODULE_0__index__["h" /* Error404Component */] },
    { path: '', redirectTo: '/categories', pathMatch: 'full' },
    { path: 'statistics/:category', loadChildren: 'app/components/statistics/statistics.module#StatisticsModule', canActivate: [__WEBPACK_IMPORTED_MODULE_1__services_routeActivators_index__["a" /* AuthentificatedActivator */], __WEBPACK_IMPORTED_MODULE_1__services_routeActivators_index__["b" /* CategoryRouteActivator */]] },
];
//# sourceMappingURL=app.routes.js.map

/***/ }),

/***/ 134:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_index__ = __webpack_require__(22);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthComponent = (function () {
    function AuthComponent(auth, translationService) {
        this.auth = auth;
        this.translationService = translationService;
        this.key = 'login';
        this.login = translationService.getAllForComponent(this.key);
    }
    AuthComponent.prototype.signInWithGoogle = function () {
        var result = this.auth.signInWithGoogle();
    };
    AuthComponent.prototype.signInWithFacebook = function () {
        var result = this.auth.signInWithFacebook();
    };
    AuthComponent.prototype.signOut = function () {
        this.auth.signOut();
    };
    AuthComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* Component */])({
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* ViewEncapsulation */].None,
            selector: 'login',
            template: __webpack_require__(217),
            styles: [__webpack_require__(209)]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_index__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_index__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_index__["c" /* TranslationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_index__["c" /* TranslationService */]) === "function" && _b || Object])
    ], AuthComponent);
    return AuthComponent;
    var _a, _b;
}());

//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ 135:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_services_index__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_categories__ = __webpack_require__(48);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CategoryComponent = (function () {
    function CategoryComponent(budgetService, translationService, router) {
        this.budgetService = budgetService;
        this.translationService = translationService;
        this.router = router;
        this.list = __WEBPACK_IMPORTED_MODULE_3__models_categories__["a" /* CATEGORIES */];
        this.key = 'categories';
        this.title = translationService.get(this.key);
    }
    CategoryComponent.prototype.setActiveCategory = function ($event) {
        this.category = $event.category;
    };
    CategoryComponent.prototype.getStatistics = function (category) {
        this.activeCategory = category;
        this.router.navigate(["/statistics/" + category]);
    };
    //todo: add sorting by groups, time....
    CategoryComponent.prototype.getAllSpends = function () {
        if (this.category === null)
            return [];
        var result = this.budgetService.getAllSpends(this.category);
        console.log('dataList', result);
        return result;
    };
    CategoryComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* Component */])({
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* ViewEncapsulation */].None,
            selector: 'categories',
            template: __webpack_require__(218),
            styles: [__webpack_require__(210)]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_app_services_index__["b" /* BudgetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_services_index__["b" /* BudgetService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_app_services_index__["c" /* TranslationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_services_index__["c" /* TranslationService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object])
    ], CategoryComponent);
    return CategoryComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=categories.component.js.map

/***/ }),

/***/ 136:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DiagramComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DiagramComponent = (function () {
    function DiagramComponent() {
    }
    DiagramComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* Component */])({
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* ViewEncapsulation */].None,
            selector: 'diagram',
            template: __webpack_require__(219),
            styles: [__webpack_require__(211)]
        }),
        __metadata("design:paramtypes", [])
    ], DiagramComponent);
    return DiagramComponent;
}());

//# sourceMappingURL=diagram.component.js.map

/***/ }),

/***/ 137:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Error404Component; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Error404Component = (function () {
    function Error404Component() {
    }
    Error404Component = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* Component */])({
            template: "\n    <h1 class=\"errorMessage\">404'd</h1>\n  ",
            styles: ["\n    .errorMessage { \n      margin-top:150px; \n      font-size: 170px;\n      text-align: center; \n    }"]
        }),
        __metadata("design:paramtypes", [])
    ], Error404Component);
    return Error404Component;
}());

//# sourceMappingURL=_404.component.js.map

/***/ }),

/***/ 138:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
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
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* Input */])(),
        __metadata("design:type", String)
    ], HeaderComponent.prototype, "title", void 0);
    HeaderComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* Component */])({
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* ViewEncapsulation */].None,
            selector: 'header',
            template: __webpack_require__(220),
            styles: [__webpack_require__(212)]
        })
    ], HeaderComponent);
    return HeaderComponent;
}());

//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ 139:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__header_header_component__ = __webpack_require__(138);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__header_header_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__categories_categories_component__ = __webpack_require__(135);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__categories_categories_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__scanner_scanner_component__ = __webpack_require__(140);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__scanner_scanner_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__takePicture_takePicture_component__ = __webpack_require__(141);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_3__takePicture_takePicture_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__diagram_diagram_component__ = __webpack_require__(136);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_4__diagram_diagram_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__auth_login_component__ = __webpack_require__(134);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_5__auth_login_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__errors_404_component__ = __webpack_require__(137);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_6__errors_404_component__["a"]; });




//export * from './statistics/statistics.component'
//export * from './statistics-list/statistics-list.component'



//# sourceMappingURL=index.js.map

/***/ }),

/***/ 140:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_buyingItem__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_categories__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_index__ = __webpack_require__(22);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScannerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//import { DialogComponent, DialogService } from "ng2-bootstrap-modal"
///////models///////



var ScannerComponent = (function () {
    function ScannerComponent(translateService) {
        this.translateService = translateService;
        this.list = __WEBPACK_IMPORTED_MODULE_2__models_categories__["a" /* CATEGORIES */];
        this.title = translateService.get('addGoods');
    }
    /**
     * Save Buying Item
     */
    ScannerComponent.prototype.saveBuyingItem = function () {
        var item = new __WEBPACK_IMPORTED_MODULE_1__models_buyingItem__["a" /* default */]('', '', new Date());
        //category add item
    };
    ScannerComponent.prototype.close = function () {
    };
    ScannerComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* Component */])({
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* ViewEncapsulation */].None,
            selector: 'scanner',
            template: __webpack_require__(221),
            styles: [__webpack_require__(213)]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_index__["c" /* TranslationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_index__["c" /* TranslationService */]) === "function" && _a || Object])
    ], ScannerComponent);
    return ScannerComponent;
    var _a;
}());

//# sourceMappingURL=scanner.component.js.map

/***/ }),

/***/ 141:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_index__ = __webpack_require__(22);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TakePictureComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TakePictureComponent = (function () {
    function TakePictureComponent(translateService) {
        this.translateService = translateService;
        //this.title = translateService.get('addGoods')
    }
    TakePictureComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* Component */])({
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* ViewEncapsulation */].None,
            selector: 'take-picture',
            template: __webpack_require__(222),
            styles: [__webpack_require__(214)]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_index__["c" /* TranslationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_index__["c" /* TranslationService */]) === "function" && _a || Object])
    ], TakePictureComponent);
    return TakePictureComponent;
    var _a;
}());

//# sourceMappingURL=takePicture.component.js.map

/***/ }),

/***/ 142:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return firebaseConfig; });
var firebaseConfig = {
    apiKey: 'AIzaSyDUmDOQ1FAQhwYnIzSwEPYlAHv6vB9eUAo',
    authDomain: 'mybudget-4202c.firebaseapp.com',
    databaseURL: 'https://mybudget-4202c.firebaseio.com',
    projectId: 'mybudget-4202c',
    storageBucket: 'mybudget-4202c.appspot.com',
    messagingSenderId: '584037351620'
    //  identifier: '584037351620-dv77dkjetdaikndp8vocut4vc0blmetu.apps.googleusercontent.com',
    //  secret: '9Uabkm9qvHyKKph91UlV1752'
};
//# sourceMappingURL=firebase.config.js.map

/***/ }),

/***/ 143:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase_app__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthService = (function () {
    function AuthService(afAuth) {
        var _this = this;
        this.afAuth = afAuth;
        afAuth.authState.subscribe(function (user) {
            _this.authenticated = !!user;
            _this.uid = user ? user.uid : null;
        });
    }
    AuthService.prototype.isLoggedIn = function () {
        return this.authenticated;
    };
    AuthService.prototype.signIn = function (provider) {
        return this.afAuth.auth.signInWithPopup(provider)
            .then(function (result) {
            var token = result.credential.accessToken;
            var user = result.uid;
            console.log('logged in', result);
        })
            .catch(function (error) { return console.error('AuthService#signIn() :', error); });
    };
    AuthService.prototype.signInWithGoogle = function () {
        return this.signIn(new __WEBPACK_IMPORTED_MODULE_2_firebase_app__["auth"].GoogleAuthProvider());
    };
    AuthService.prototype.signInWithFacebook = function () {
        return this.signIn(new __WEBPACK_IMPORTED_MODULE_2_firebase_app__["auth"].FacebookAuthProvider());
    };
    AuthService.prototype.signOut = function () {
        this.afAuth.auth.signOut();
    };
    AuthService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["b" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["b" /* AngularFireAuth */]) === "function" && _a || Object])
    ], AuthService);
    return AuthService;
    var _a;
}());

//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ 144:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_models_buyingItem__ = __webpack_require__(77);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BudgetService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//models

//constants
var item = new __WEBPACK_IMPORTED_MODULE_2__components_models_buyingItem__["a" /* default */]("Fruits", "30$", new Date());
var BudgetService = (function () {
    function BudgetService(af) {
        this.af = af;
    }
    BudgetService.prototype.getAllSpends = function (group) {
        this.spends = this.af.list('/spends', { query: { orderByChild: 'group', equalTo: group } });
        return this.spends;
    };
    BudgetService.prototype.addItem = function (item) {
        var id = '123'; //autogenerate guid
        item.id = id;
        //return this.spends.push(item)
    };
    BudgetService.prototype.updateItem = function (item) {
        //return this.spends.update(item.id, item)
    };
    BudgetService.prototype.deleteItem = function (item) {
        //return this.spends.remove(item.id)
    };
    BudgetService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["b" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["b" /* AngularFireDatabase */]) === "function" && _a || Object])
    ], BudgetService);
    return BudgetService;
    var _a;
}());

//# sourceMappingURL=budget.service.js.map

/***/ }),

/***/ 145:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(50);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthentificatedActivator; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthentificatedActivator = (function () {
    function AuthentificatedActivator(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    AuthentificatedActivator.prototype.canActivate = function () {
        console.log(this.auth);
        return true;
        //todo: change to Observable
        // let authenticatedPromise = this.auth.map(user => !!user).toPromise()
        // authenticatedPromise.then(authenticated => {
        //     if (!authenticated) 
        //         this.router.navigate([ '/login' ]);
        //     return authenticated
        // })
        // return authenticatedPromise
    };
    AuthentificatedActivator = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["c" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["b" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["b" /* AngularFireAuth */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */]) === "function" && _b || Object])
    ], AuthentificatedActivator);
    return AuthentificatedActivator;
    var _a, _b;
}());

//# sourceMappingURL=authentificated-activator.service.js.map

/***/ }),

/***/ 146:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_models_categories__ = __webpack_require__(48);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryRouteActivator; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CategoryRouteActivator = (function () {
    function CategoryRouteActivator(router) {
        this.router = router;
    }
    CategoryRouteActivator.prototype.canActivate = function (route) {
        var categoryExists = __WEBPACK_IMPORTED_MODULE_2__components_models_categories__["a" /* CATEGORIES */].some(function (category) { return category.value.toLowerCase() === route.params['category'].toLowerCase(); });
        console.log(route.params['category']);
        // if (!categoryExists)
        //     this.router.navigate(['/404'])
        return categoryExists;
    };
    CategoryRouteActivator = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["c" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */]) === "function" && _a || Object])
    ], CategoryRouteActivator);
    return CategoryRouteActivator;
    var _a;
}());

//# sourceMappingURL=category-route-activator.service.js.map

/***/ }),

/***/ 147:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__translators_translate_en__ = __webpack_require__(148);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TranslationService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

//translators

var TranslationService = (function () {
    function TranslationService() {
    }
    TranslationService.prototype.get = function (key) {
        return __WEBPACK_IMPORTED_MODULE_1__translators_translate_en__["a" /* TRANSLATE */][key] || key;
    };
    TranslationService.prototype.getAllForComponent = function (key) {
        return __WEBPACK_IMPORTED_MODULE_1__translators_translate_en__["a" /* TRANSLATE */][key] || {};
    };
    TranslationService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])()
    ], TranslationService);
    return TranslationService;
}());

//# sourceMappingURL=translation.service.js.map

/***/ }),

/***/ 148:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TRANSLATE; });
var TRANSLATE = {
    'title': 'My budget',
    'categories': 'Categories',
    'addGoods': 'Add good\'s information',
    'login': {
        'title': 'Calculate your personal budget',
        'signInInfo': 'Please sign in with',
        'googleSignIn': 'Sign in with Google',
        'facebookSignIn': 'Sign in with Facebook'
    }
};
//# sourceMappingURL=translate.en.js.map

/***/ }),

/***/ 149:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 208:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)();
// imports


// module
exports.push([module.i, "app-root {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: row wrap;\n          flex-flow: row wrap;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n  -webkit-box-align: stretch;\n      -ms-flex-align: stretch;\n          align-items: stretch;\n  text-align: center;\n  height: 100%;\n  min-height: 100%; }\n  app-root > * {\n    -webkit-box-flex: 1;\n        -ms-flex: 1 100%;\n            flex: 1 100%; }\n  app-root .content {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    height: 100%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 209:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)();
// imports


// module
exports.push([module.i, "login {\n  position: absolute;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: column wrap;\n          flex-flow: column wrap;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -ms-flex-line-pack: distribute;\n      align-content: space-around;\n  padding: 10%;\n  top: 25%;\n  /*Update css for medium and big screens*/\n  /* Medium screens */\n  /* Laptops screens */\n  /* Large screens ----------- */ }\n  login .sign-in-section {\n    margin: 10% 0;\n    font-size: 0.8em; }\n    login .sign-in-section button {\n      position: relative;\n      width: 100%;\n      border: 1px solid grey;\n      background-color: #f9f9f9;\n      margin: 5px;\n      height: 70px; }\n      login .sign-in-section button .google-icon,\n      login .sign-in-section button .facebook-icon {\n        position: absolute;\n        max-height: 50px;\n        left: 5%;\n        top: 15%; }\n      login .sign-in-section button em {\n        margin-left: 40px; }\n    login .sign-in-section .section-info {\n      font-size: 0.8em;\n      color: grey; }\n  @media only screen and (min-width: 768px) {\n    login {\n      top: 5%;\n      left: 10%; } }\n  @media only screen and (min-width: 1224px) {\n    login {\n      left: 23%;\n      top: 5%; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 210:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)();
// imports


// module
exports.push([module.i, "categories {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  background-color: #FEFEFF;\n  position: relative; }\n  categories .section-header {\n    background-color: #f1f6f5;\n    font-size: 20px;\n    margin-bottom: 2px;\n    position: fixed;\n    top: 0;\n    width: 100%;\n    /* Medium screens */\n    /* Laptops screens */ }\n    categories .section-header div.container {\n      background-color: #E1ECEB;\n      padding: 5px 0; }\n    @media only screen and (min-width: 768px) {\n      categories .section-header {\n        position: static; } }\n    @media only screen and (min-width: 1224px) {\n      categories .section-header {\n        position: static; } }\n  categories .category-content {\n    margin-top: 45%;\n    margin-bottom: 50px;\n    background-color: #FEFEFF;\n    overflow-y: scroll;\n    font-size: 0.8em;\n    /* Medium screens */ }\n    categories .category-content .container {\n      height: 100%; }\n      categories .category-content .container .category {\n        border-top: 1px solid #f9f9f9;\n        margin: 5px 0;\n        padding: 15px 5px;\n        clear: both;\n        /* highlighted, hover should work */ }\n        categories .category-content .container .category.highlighted, categories .category-content .container .category.hover {\n          color: red; }\n        categories .category-content .container .category .category-name {\n          width: 100%; }\n        categories .category-content .container .category .cost-info {\n          font-size: 0.6em;\n          float: right; }\n        categories .category-content .container .category.hp {\n          border-left: 3px solid #E1ECEB; }\n        categories .category-content .container .category.gr {\n          border-left: 3px solid #E9E5EC; }\n        categories .category-content .container .category.eq {\n          border-left: 3px solid #EACBCB; }\n        categories .category-content .container .category.hb {\n          border-left: 3px solid #D2B7D4; }\n        categories .category-content .container .category.pt {\n          border-left: 3px solid #EDE9CF; }\n    @media only screen and (min-width: 768px) {\n      categories .category-content {\n        margin-top: 10%; }\n        categories .category-content .container .category {\n          width: 45%;\n          margin: 5px;\n          border: 1px solid #f9f9f9;\n          float: left;\n          clear: none;\n          padding: 25px 5px; } }\n  categories .add-spent-container {\n    background: #E1ECEB;\n    position: fixed;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    bottom: 0;\n    /* Medium screens */ }\n    categories .add-spent-container,\n    categories .add-spent-container button {\n      width: 100%; }\n    @media only screen and (min-width: 768px) {\n      categories .add-spent-container {\n        display: none; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 211:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 212:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)();
// imports


// module
exports.push([module.i, "header {\n  display: none;\n  /* Medium screens */ }\n  @media all and (min-width: 700px) {\n    header {\n      background-color: #dcc7de;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center; }\n      header div.container {\n        background-color: #D2B7D4;\n        margin: 0;\n        padding: 10px; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 213:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)();
// imports


// module
exports.push([module.i, "scanner .section-header {\n  background-color: #f1f6f5;\n  font-size: 20px;\n  margin-bottom: 2px; }\n  scanner .section-header div.container {\n    background-color: #E1ECEB;\n    padding: 5px 0; }\n\nscanner .section-content {\n  background-color: #FEFEFF; }\n  scanner .section-content .container {\n    background-color: #f9f9f9;\n    height: 100%; }\n    scanner .section-content .container form {\n      padding: 25px 25px 10px 20px; }\n    scanner .section-content .container ul {\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n          -ms-flex-flow: row wrap;\n              flex-flow: row wrap;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      padding: 0;\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center; }\n      scanner .section-content .container ul li {\n        background-color: #E1ECEB;\n        color: #000;\n        padding: 10px;\n        margin: 10px 2px;\n        border: 1px solid #d9d9d9;\n        border-radius: 2px;\n        font-size: 12px;\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex; }\n        scanner .section-content .container ul li:active, scanner .section-content .container ul li:focus {\n          background-color: #EDE9CF;\n          color: #FEFEFF; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 214:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 216:
/***/ (function(module, exports) {

module.exports = "<header [title]=\"title\"></header>\n<div class=\"content\">\n    <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ 217:
/***/ (function(module, exports) {

module.exports = "<h2 class=\"main-header\">{{login.title | uppercase}}</h2>\n<section class=\"sign-in-section\">\n    <div class=\"section-info\"><em>{{login.signInInfo}}</em></div>\n    <button md-button type=\"button\" (click)=\"signInWithGoogle()\">\n        <img class=\"google-icon\" src=\"/assets/google_logo.png\"/>\n        <em>{{login.googleSignIn}}</em>\n    </button>\n    <button md-button type=\"button\" (click)=\"signInWithFacebook()\">\n        <img class=\"facebook-icon\" src=\"/assets/facebook_logo.png\"/> \n        <em>{{login.facebookSignIn}}</em>\n    </button>\n</section>"

/***/ }),

/***/ 218:
/***/ (function(module, exports) {

module.exports = "<div class=\"section-header\">\n    <div class=\"container\">\n        {{title}}\n    </div>\n    <diagram></diagram>\n</div>\n\n<div class=\"category-content\">\n    <div class=\"container\">\n        <div class=\"category\" [ngClass]=\"(category.alias + ' ' + (activeCategory === category.value ? 'highlighted' : ''))\" *ngFor=\"let category of list\" (click)=\"getStatistics(category.value)\">\n            <div class=\"category-name\">{{category.value}}</div>\n            <span class=\"cost-info\">Spent $10 per month</span>\n            \n        </div>\n    </div>\n</div>\n<section class=\"add-spent-container\">\n    <button md-button type=\"button\" [routerLink]=\"['/add']\"><i>Add spent</i></button>\n</section>\n\n\n"

/***/ }),

/***/ 219:
/***/ (function(module, exports) {

module.exports = "<section class=\"graphics-container\">\n        Diagram container\n    </section>"

/***/ }),

/***/ 22:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__budget_service__ = __webpack_require__(144);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__budget_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__translation_service__ = __webpack_require__(147);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__translation_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__routeActivators_index__ = __webpack_require__(79);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_2__routeActivators_index__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_2__routeActivators_index__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_service__ = __webpack_require__(143);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_3__auth_service__["a"]; });




//# sourceMappingURL=index.js.map

/***/ }),

/***/ 220:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <h2>{{title}}</h2>\n</div>"

/***/ }),

/***/ 221:
/***/ (function(module, exports) {

module.exports = "<div class=\"section-header nav-part\">\n    <div class=\"container\">\n        <a [routerLink]=\"['/categories']\">Categories</a>\n    </div>\n</div>\n<div class=\"section-header\">\n    <div class=\"container\">        \n        {{title}}\n    </div>\n</div>\n<div class=\"section-content\">\n    <div class=\"container\">\n        <form>\n            <div class=\"form-group\">\n                <label>Description</label>\n                <input class=\"form-control\"/>\n            </div>\n            <div class=\"form-group\">\n                <label>Price</label>\n                <input class=\"form-control\"/>\n            </div>\n            <take-picture></take-picture>\n            \n            <div class=\"form-group\">\n                <label>Please choose group:</label>\n                <ul>\n                    <li *ngFor=\"let category of list\">{{category}}</li>\n                </ul>\n                <div>OR</div>\n                <label>Add new group</label>\n                <input class=\"form-control\"/>\n            </div>\n        </form>\n        <div class=\"footer\">\n            <button type=\"submit\" (click)=\"saveBuyingItem()\"> Save Changes </button>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ 222:
/***/ (function(module, exports) {

module.exports = "<div class=\"camera-container\">\n    <h1><i class=\"fa fa-camera\"></i></h1>\n    <p class=\"lead\">\n        Take a good picture of a huge, printed text.\n    </p>\n    <figure class=\"not-ready\">\n        <video autoplay></video>\n    </figure>\n\n    <button class=\"btn btn-lg btn-success\" disabled id=\"takePicture\">Take a picture</button>\n</div>"

/***/ }),

/***/ 276:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(122);


/***/ }),

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CATEGORIES; });
var CATEGORIES = [
    {
        alias: 'hp',
        value: 'Home Payment'
    },
    {
        alias: 'gr',
        value: 'Grocery'
    },
    {
        alias: 'eq',
        value: 'Equipment'
    },
    {
        alias: 'hb',
        value: 'Hobby'
    },
    {
        alias: 'pt',
        value: 'Parties'
    }
];
//# sourceMappingURL=categories.js.map

/***/ }),

/***/ 77:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var BuyingItem = (function () {
    function BuyingItem(description, price, date) {
        this.description = description;
        this.price = price;
        this.date = date;
        this.description = description;
        this.price = price;
        this.date = date;
    }
    return BuyingItem;
}());
/* harmony default export */ __webpack_exports__["a"] = BuyingItem;
//# sourceMappingURL=buyingItem.js.map

/***/ }),

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_component__ = __webpack_require__(131);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__app_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_index__ = __webpack_require__(139);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__components_index__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__components_index__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_1__components_index__["c"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_1__components_index__["d"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_1__components_index__["e"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_1__components_index__["f"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_1__components_index__["g"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__authentificated_activator_service__ = __webpack_require__(145);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__authentificated_activator_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__category_route_activator_service__ = __webpack_require__(146);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__category_route_activator_service__["a"]; });


//# sourceMappingURL=index.js.map

/***/ })

},[276]);
//# sourceMappingURL=main.bundle.js.map