webpackJsonp([1],{

/***/ "../../../../../client async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../client async recursive";

/***/ }),

/***/ "../../../../../client/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../client/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n\r\n<div class=\"container-fluid text-center\">    \r\n  <div class=\"row content\">\r\n    <div class=\"col-xs-1 sidenav\">\r\n      <app-sidebar-left></app-sidebar-left>\r\n    </div>\r\n    <div class=\"col-xs-7 text-left\">\r\n       <router-outlet></router-outlet>\r\n    </div>\r\n    <div class=\"col-xs-4 sidenav\">\r\n      <app-sidebar-right></app-sidebar-right>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<app-footer></app-footer>"

/***/ }),

/***/ "../../../../../client/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'The Website';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../client/app/app.component.html"),
        styles: [__webpack_require__("../../../../../client/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../client/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_shared_module__ = __webpack_require__("../../../../../client/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__common_chat_chat_service__ = __webpack_require__("../../../../../client/app/common/chat/chat.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__auth_register_register_service__ = __webpack_require__("../../../../../client/app/auth/register/register.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__auth_login_login_service__ = __webpack_require__("../../../../../client/app/auth/login/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__("../../../../../client/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__common_navbar_navbar_component__ = __webpack_require__("../../../../../client/app/common/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__common_footer_footer_component__ = __webpack_require__("../../../../../client/app/common/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__common_sidebar_left_sidebar_left_component__ = __webpack_require__("../../../../../client/app/common/sidebar-left/sidebar-left.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__common_sidebar_right_sidebar_right_component__ = __webpack_require__("../../../../../client/app/common/sidebar-right/sidebar-right.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__home_home_component__ = __webpack_require__("../../../../../client/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__common_chat_chat_component__ = __webpack_require__("../../../../../client/app/common/chat/chat.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__auth_login_login_component__ = __webpack_require__("../../../../../client/app/auth/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__auth_register_register_component__ = __webpack_require__("../../../../../client/app/auth/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__forum_forum_component__ = __webpack_require__("../../../../../client/app/forum/forum.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__play_play_component__ = __webpack_require__("../../../../../client/app/play/play.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Required Modules






// Services



// Main Application Components







// Router Components




// Initialize routes array with index / HomeComponent
var appRoutes = [{
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_14__home_home_component__["a" /* HomeComponent */],
    }];
// Initialize custom routes array
var routerComponents = [
    __WEBPACK_IMPORTED_MODULE_16__auth_login_login_component__["a" /* LoginComponent */],
    __WEBPACK_IMPORTED_MODULE_17__auth_register_register_component__["a" /* RegisterComponent */],
    __WEBPACK_IMPORTED_MODULE_18__forum_forum_component__["a" /* ForumComponent */],
    __WEBPACK_IMPORTED_MODULE_19__play_play_component__["a" /* PlayComponent */]
];
// Do not use the word 'Component' in any custom-components
routerComponents.forEach(function (comp) {
    appRoutes.push({
        path: comp.name.replace('Component', '').toLowerCase(),
        component: comp
    });
});
// Take invalid routes and redirect users to index
appRoutes.push({
    path: '**',
    redirectTo: '/'
});
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_15__common_chat_chat_component__["a" /* ChatComponent */],
            __WEBPACK_IMPORTED_MODULE_10__common_navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_11__common_footer_footer_component__["a" /* FooterComponent */],
            __WEBPACK_IMPORTED_MODULE_12__common_sidebar_left_sidebar_left_component__["a" /* SidebarLeftComponent */],
            __WEBPACK_IMPORTED_MODULE_13__common_sidebar_right_sidebar_right_component__["a" /* SidebarRightComponent */],
            __WEBPACK_IMPORTED_MODULE_14__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_18__forum_forum_component__["a" /* ForumComponent */],
            __WEBPACK_IMPORTED_MODULE_19__play_play_component__["a" /* PlayComponent */],
            __WEBPACK_IMPORTED_MODULE_16__auth_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_17__auth_register_register_component__["a" /* RegisterComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(appRoutes),
            __WEBPACK_IMPORTED_MODULE_5__shared_shared_module__["a" /* SharedModule */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_6__common_chat_chat_service__["a" /* ChatService */],
            __WEBPACK_IMPORTED_MODULE_8__auth_login_login_service__["a" /* LoginService */],
            __WEBPACK_IMPORTED_MODULE_7__auth_register_register_service__["a" /* RegisterService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../client/app/auth/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../client/app/auth/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Login</h1>\r\n<br/>\r\n<form (ngSubmit)=\"login()\" *ngIf=\"active\" [formGroup]=\"loginForm\" novalidate>\r\n  <div class=\"form-group row\">\r\n    <div class=\"col-xs-8\">\r\n        <div *ngIf=\"formErrors.topLevel\" class=\"alert alert-danger\" [innerHTML]=\"formErrors.topLevel\"></div>\r\n    </div>\r\n  </div>\r\n  <div class=\"form-group row\">\r\n    <div class=\"col-xs-4\">\r\n      <label for=\"email\">Email Address:</label>\r\n      <input class=\"form-control\" [(ngModel)]=\"user.email\" name=\"email\" type=\"email\" formControlName=\"email\">\r\n    </div>\r\n    <div class=\"col-xs-8\">\r\n        <div *ngIf=\"formErrors.email\" class=\"alert alert-danger\" [innerHTML]=\"formErrors.email\"></div>\r\n    </div>\r\n  </div>\r\n  <div class=\"form-group row\">\r\n    <div class=\"col-xs-4\">\r\n      <label for=\"password\">Password:</label>\r\n      <input class=\"form-control\" [(ngModel)]=\"user.password\" name=\"password\" type=\"password\" formControlName=\"password\">\r\n    </div>\r\n    <div class=\"col-xs-8\">\r\n        <div *ngIf=\"formErrors.password\" class=\"alert alert-danger\" [innerHTML]=\"formErrors.password\"></div>\r\n    </div>\r\n  </div>\r\n  <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"loginForm.invalid\">Login</button>\r\n</form>"

/***/ }),

/***/ "../../../../../client/app/auth/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_service__ = __webpack_require__("../../../../../client/app/auth/login/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__ = __webpack_require__("../../../../../client/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_viewModels_User_js__ = __webpack_require__("../../../../../client/app/shared/viewModels/User.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginComponent = (function () {
    // Inject services into our constructor
    function LoginComponent(fb, router, loginService, sharedModule) {
        this.fb = fb;
        this.router = router;
        this.loginService = loginService;
        this.sharedModule = sharedModule;
    }
    LoginComponent.prototype.ngOnInit = function () {
        // Create a new user VM from the User interface
        this.user = new __WEBPACK_IMPORTED_MODULE_5__shared_viewModels_User_js__["b" /* modelLogin */]();
        this.formErrors = JSON.parse(JSON.stringify(this.user));
        this.validationMessages = this.sharedModule.validationMessages;
        // Create the form logic and enable the form
        this.buildForm();
        this.active = true;
    }; // end onInit function
    LoginComponent.prototype.buildForm = function () {
        var _this = this;
        // use Regex patterns for "simple" matching
        var patterns = this.sharedModule.patterns;
        // Create our form and set any validation rules 
        this.loginForm = this.fb.group({
            'email': [this.user.email, [
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].pattern(patterns['email'])
                ]
            ],
            'password': [this.user.password, [
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required
                ]
            ]
        });
        // Subscribe and call this function if data in the form changes
        this.loginForm.valueChanges.subscribe(function (data) { return _this.sharedModule.onValueChanged(_this, 'loginForm', data); });
        this.sharedModule.onValueChanged(this, 'loginForm'); // set validation messages now
    }; // end buildForm function
    LoginComponent.prototype.login = function () {
        var _this = this;
        // We have passed all client-side validation, save the user
        this.loginService.getUser(this.user).then(function (user) {
            // Navigate to the login page upon success
            if (user && user.length > 0) {
                // TODO: Do something to save the user data
                console.log(user);
                _this.router.navigateByUrl('/');
            }
            else {
                _this.formErrors['topLevel'] = _this.sharedModule.validationMessages['auth']['incorrectLogin'];
            } // end if we got a valid user from data
        }, function (err) {
            console.log(err);
        });
    }; // end register function
    return LoginComponent;
}()); // end class RegisterComponent
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])('loginForm'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* FormGroup */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* FormGroup */]) === "function" && _a || Object)
], LoginComponent.prototype, "currentForm", void 0);
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../client/app/auth/login/login.component.html"),
        styles: [__webpack_require__("../../../../../client/app/auth/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* FormBuilder */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__login_service__["a" /* LoginService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__["a" /* SharedModule */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__["a" /* SharedModule */]) === "function" && _e || Object])
], LoginComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../client/app/auth/login/login.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginService = (function () {
    function LoginService(http) {
        this.http = http;
    }
    LoginService.prototype.getUser = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post('/api/login', data)
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    }; // end function getUser
    return LoginService;
}()); // end class RegisterService
LoginService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], LoginService);

var _a;
//# sourceMappingURL=login.service.js.map

/***/ }),

/***/ "../../../../../client/app/auth/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../client/app/auth/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Register</h1>\r\n<br/>\r\n<form (ngSubmit)=\"register()\" *ngIf=\"active\" [formGroup]=\"registerForm\" novalidate>\r\n  <div class=\"form-group row\">\r\n    <div class=\"col-xs-4\">\r\n      <label for=\"username\">Display Name:</label>\r\n      <input class=\"form-control\" [(ngModel)]=\"user.username\" name=\"username\" type=\"text\" formControlName=\"username\">\r\n    </div>\r\n    <div class=\"col-xs-8\">\r\n        <div *ngIf=\"formErrors.username\" class=\"alert alert-danger\" [innerHTML]=\"formErrors.username\"></div>\r\n    </div>\r\n  </div>\r\n  <div class=\"form-group row\">\r\n    <div class=\"col-xs-4\">\r\n      <label for=\"email\">Email Address:</label>\r\n      <input class=\"form-control\" [(ngModel)]=\"user.email\" name=\"email\" type=\"email\" formControlName=\"email\">\r\n    </div>\r\n    <div class=\"col-xs-8\">\r\n        <div *ngIf=\"formErrors.email\" class=\"alert alert-danger\" [innerHTML]=\"formErrors.email\"></div>\r\n    </div>\r\n  </div>\r\n  <div class=\"form-group row\">\r\n    <div class=\"col-xs-4\">\r\n      <label for=\"password\">Password:</label>\r\n      <input validateEqual=\"confirm_password\" class=\"form-control\" [(ngModel)]=\"user.password\" name=\"password\" type=\"password\" \r\n             formControlName=\"password\" reverse=\"true\">\r\n    </div>\r\n    <div class=\"col-xs-8\">\r\n        <div *ngIf=\"formErrors.password\" class=\"alert alert-danger\" [innerHTML]=\"formErrors.password\"></div>\r\n    </div>\r\n  </div>\r\n  <div class=\"form-group row\">\r\n    <div class=\"col-xs-4\">\r\n      <label for=\"confirm_password\">Confirm Password:</label>\r\n      <input validateEqual=\"password\" class=\"form-control\" [(ngModel)]=\"confirm_password\" name=\"confirm_password\" type=\"password\" \r\n             formControlName=\"confirm_password\">\r\n    </div>\r\n    <div class=\"col-xs-8\">\r\n        <div *ngIf=\"formErrors.confirm_password\" class=\"alert alert-danger\" [innerHTML]=\"formErrors.confirm_password\"></div>\r\n    </div>\r\n  </div>\r\n  <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"registerForm.invalid\">Sign Up</button>\r\n</form>"

/***/ }),

/***/ "../../../../../client/app/auth/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__register_service__ = __webpack_require__("../../../../../client/app/auth/register/register.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__ = __webpack_require__("../../../../../client/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_viewModels_User_js__ = __webpack_require__("../../../../../client/app/shared/viewModels/User.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RegisterComponent = (function () {
    // Inject services into our constructor
    function RegisterComponent(registerService, fb, router, sharedModule) {
        this.registerService = registerService;
        this.fb = fb;
        this.router = router;
        this.sharedModule = sharedModule;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        // Create a new user VM from the User interface
        this.user = new __WEBPACK_IMPORTED_MODULE_5__shared_viewModels_User_js__["a" /* modelRegister */]();
        // Setup form errors and validation messages
        this.formErrors = JSON.parse(JSON.stringify(this.user));
        this.validationMessages = this.sharedModule.validationMessages;
        // Create the form logic and enable the form
        this.buildForm();
        this.active = true;
    }; // end onInit function
    RegisterComponent.prototype.buildForm = function () {
        var _this = this;
        // use Regex patterns for "simple" matching
        var patterns = this.sharedModule.patterns;
        // Create our form and set any validation rules 
        this.registerForm = this.fb.group({
            'username': [this.user.username, [
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].pattern(patterns['username']),
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].minLength(4),
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].maxLength(24),
                ]
            ],
            'email': [this.user.email, [
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].pattern(patterns['email'])
                ]
            ],
            'password': [this.user.password, [
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required
                ]
            ],
            'confirm_password': [this.confirm_password, [
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required
                ]
            ]
        });
        // Subscribe and call this function if data in the form changes
        this.registerForm.valueChanges.subscribe(function (data) { return _this.sharedModule.onValueChanged(_this, 'registerForm', data); });
        this.sharedModule.onValueChanged(this, 'registerForm');
    }; // end buildForm function
    RegisterComponent.prototype.register = function () {
        var _this = this;
        // We have passed all client-side validation, save the user
        this.registerService.createUser(this.user).then(function (user) {
            // Navigate to the login page upon success
            _this.router.navigateByUrl('/login');
        }, function (err) {
            console.log(err);
        });
    }; // end register function
    return RegisterComponent;
}()); // end class RegisterComponent
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])('registerForm'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* FormGroup */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* FormGroup */]) === "function" && _a || Object)
], RegisterComponent.prototype, "currentForm", void 0);
RegisterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-register',
        template: __webpack_require__("../../../../../client/app/auth/register/register.component.html"),
        styles: [__webpack_require__("../../../../../client/app/auth/register/register.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__register_service__["a" /* RegisterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__register_service__["a" /* RegisterService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* FormBuilder */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__["a" /* SharedModule */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__["a" /* SharedModule */]) === "function" && _e || Object])
], RegisterComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ "../../../../../client/app/auth/register/register.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegisterService = (function () {
    function RegisterService(http) {
        this.http = http;
    }
    RegisterService.prototype.createUser = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post('/api/register', data)
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    }; // end function createUser
    return RegisterService;
}()); // end class RegisterService
RegisterService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], RegisterService);

var _a;
//# sourceMappingURL=register.service.js.map

/***/ }),

/***/ "../../../../../client/app/common/chat/chat.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".chat\r\n{\r\n    list-style: none;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\n.chat li\r\n{\r\n    margin-bottom: 10px;\r\n    padding-bottom: 5px;\r\n    border-bottom: 1px dotted #B3A9A9;\r\n}\r\n\r\n.chat li.left .chat-body\r\n{\r\n    margin-left: 60px;\r\n}\r\n\r\n.chat li.right .chat-body\r\n{\r\n    margin-right: 60px;\r\n}\r\n\r\n\r\n.chat li .chat-body p\r\n{\r\n    margin: 0;\r\n    color: #777777;\r\n}\r\n\r\n.panel .slidedown .glyphicon, .chat .glyphicon\r\n{\r\n    margin-right: 5px;\r\n}\r\n\r\n.panel-body\r\n{\r\n    overflow-y: scroll;   \r\n}\r\n\r\n.joinroom\r\n{\r\n    height: 250px;\r\n}\r\n\r\n.messageroom\r\n{\r\n    height: 400px;\r\n}\r\n\r\n::-webkit-scrollbar-track\r\n{\r\n    box-shadow: inset 0 0 6px rgba(0,0,0,0.3);\r\n    background-color: #F5F5F5;\r\n}\r\n\r\n::-webkit-scrollbar\r\n{\r\n    width: 12px;\r\n    background-color: #F5F5F5;\r\n}\r\n\r\n::-webkit-scrollbar-thumb\r\n{\r\n    box-shadow: inset 0 0 6px rgba(0,0,0,.3);\r\n    background-color: #555;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../client/app/common/chat/chat.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n            <div class=\"panel panel-primary\" *ngIf=\"joinned; else joinroom\">\r\n                <div class=\"panel-heading\">\r\n                    <span class=\"glyphicon glyphicon-comment\"></span> {{ msgData.room }}\r\n                    <div class=\"btn-group pull-right\">\r\n                        <button type=\"button\" class=\"btn btn-default btn-xs\" (click)=\"logout()\">\r\n                            Logout\r\n                        </button>\r\n                    </div>\r\n                </div>\r\n                <div #scrollMe class=\"panel-body messageroom\">\r\n                    <ul class=\"chat\">\r\n                        <li *ngFor=\"let c of chats\">\r\n                          <div class=\"left clearfix\" *ngIf=\"c.nickname===msgData.nickname; else rightchat\">\r\n                            <span class=\"chat-img pull-left\">\r\n                              <img src=\"http://placehold.it/50/55C1E7/fff&text=ME\" alt=\"User Avatar\" class=\"img-circle\" />\r\n                            </span>\r\n                            <div class=\"chat-body clearfix\">\r\n                                <div class=\"header\">\r\n                                    <strong class=\"primary-font\">{{ c.nickname }}</strong> <small class=\"pull-right text-muted\">\r\n                                        <span class=\"glyphicon glyphicon-time\"></span>{{ c.updated_at | date: 'medium' }}</small>\r\n                                </div>\r\n                                <p>{{ c.message }}</p>\r\n                            </div>\r\n                          </div>\r\n                          <ng-template #rightchat>\r\n                            <div class=\"right clearfix\">\r\n                              <span class=\"chat-img pull-right\">\r\n                                <img src=\"http://placehold.it/50/FA6F57/fff&text=U\" alt=\"User Avatar\" class=\"img-circle\" />\r\n                              </span>\r\n                              <div class=\"chat-body clearfix\">\r\n                                  <div class=\"header\">\r\n                                      <small class=\" text-muted\"><span class=\"glyphicon glyphicon-time\"></span>{{ c.updated_at | date: 'medium' }}</small>\r\n                                      <strong class=\"pull-right primary-font\">{{ c.nickname }}</strong>\r\n                                  </div>\r\n                                  <p>{{ c.message }}</p>\r\n                              </div>\r\n                            </div>\r\n                          </ng-template>\r\n                        </li>\r\n                    </ul>\r\n                </div>\r\n                <div class=\"panel-footer\">\r\n                  <form (ngSubmit)=\"sendMessage()\" #msgForm=\"ngForm\">\r\n                    <div class=\"input-group\">\r\n                        <input type=\"hidden\" [(ngModel)]=\"msgData.room\" name=\"room\" />\r\n                        <input type=\"hidden\" [(ngModel)]=\"msgData.nickname\" name=\"nickname\" />\r\n                        <input id=\"btn-input\" type=\"text\" [(ngModel)]=\"msgData.message\" name=\"message\" class=\"form-control input-sm\" placeholder=\"Type your message here...\" required=\"\" />\r\n                        <span class=\"input-group-btn\">\r\n                            <button class=\"btn btn-warning btn-sm\" id=\"btn-chat\" [disabled]=\"!msgForm.form.valid\">\r\n                                Send</button>\r\n                        </span>\r\n                    </div>\r\n                  </form>\r\n                </div>\r\n            </div>\r\n            <ng-template #joinroom>\r\n              <div class=\"panel panel-primary\">\r\n                <div class=\"panel-body joinroom\">\r\n                  <h1>Select Chat Room</h1>\r\n                  <form (ngSubmit)=\"joinRoom()\" #joinForm=\"ngForm\">\r\n                    <div class=\"form-group\">\r\n                      <input type=\"text\" class=\"form-control\" [(ngModel)]=\"newUser.nickname\" name=\"nickname\" placeholder=\"Nickname\" required />\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                      <select class=\"form-control\" [(ngModel)]=\"newUser.room\" name=\"room\" required>\r\n                        <option value=\"\" disabled selected hidden>Choose room...</option>\r\n                        <option value=\"Gaming\">Gaming</option>\r\n                        <option value=\"Programming\">Programming</option>\r\n                        <option value=\"Ideas\">Ideas</option>\r\n                        <option value=\"Random\">Random</option>\r\n                      </select>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                      <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!joinForm.form.valid\">Join</button>\r\n                    </div>\r\n                  </form>\r\n                </div>\r\n              </div>\r\n            </ng-template>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../client/app/common/chat/chat.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__chat_service__ = __webpack_require__("../../../../../client/app/common/chat/chat.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_socket_io_client__ = __webpack_require__("../../../../socket.io-client/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_socket_io_client__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ChatComponent = (function () {
    function ChatComponent(chatService) {
        this.chatService = chatService;
        this.joinned = false;
        this.newUser = { nickname: '', room: '' };
        this.msgData = { room: '', nickname: '', message: '' };
        this.socket = __WEBPACK_IMPORTED_MODULE_2_socket_io_client__('http://localhost:4000');
    }
    ChatComponent.prototype.ngOnInit = function () {
        var user = JSON.parse(localStorage.getItem("user"));
        if (user !== null) {
            this.getChatByRoom(user.room);
            this.msgData = { room: user.room, nickname: user.nickname, message: '' };
            this.joinned = true;
            this.scrollToBottom();
        }
        this.socket.on('new-message', function (data) {
            var user = JSON.parse(localStorage.getItem("user"));
            if (user && data.message.room === user.room) {
                console.log(data.message);
                this.chats.push(data.message);
                this.msgData = { room: user.room, nickname: user.nickname, message: '' };
                this.scrollToBottom();
            }
        }.bind(this));
    }; // end function ngOnInit
    ChatComponent.prototype.ngAfterViewChecked = function () {
        this.scrollToBottom();
    }; // end function ngAfterViewChecked
    ChatComponent.prototype.scrollToBottom = function () {
        try {
            this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
        }
        catch (err) { }
    }; // end function scrollToBottom
    ChatComponent.prototype.getChatByRoom = function (room) {
        var _this = this;
        this.chatService.getChatByRoom(room).then(function (res) {
            _this.chats = res;
        }, function (err) {
            console.log(err);
        });
    }; // end function getChatByRoom
    ChatComponent.prototype.joinRoom = function () {
        var date = new Date();
        localStorage.setItem("user", JSON.stringify(this.newUser));
        this.getChatByRoom(this.newUser.room);
        this.msgData = { room: this.newUser.room, nickname: this.newUser.nickname, message: '' };
        this.joinned = true;
        this.socket.emit('save-message', { room: this.newUser.room, nickname: this.newUser.nickname, message: 'Join this room', updated_at: date });
    }; // end function joinRoom
    ChatComponent.prototype.sendMessage = function () {
        var _this = this;
        this.chatService.saveChat(this.msgData).then(function (result) {
            _this.socket.emit('save-message', result);
        }, function (err) {
            console.log(err);
        });
    }; // end function sendMessage
    ChatComponent.prototype.logout = function () {
        var date = new Date();
        var user = JSON.parse(localStorage.getItem("user"));
        this.socket.emit('save-message', { room: user.room, nickname: user.nickname, message: 'Left this room', updated_at: date });
        localStorage.removeItem("user");
        this.joinned = false;
    }; // end function logout
    return ChatComponent;
}()); // end class ChatComponent
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])('scrollMe'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ElementRef */]) === "function" && _a || Object)
], ChatComponent.prototype, "myScrollContainer", void 0);
ChatComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-chat',
        template: __webpack_require__("../../../../../client/app/common/chat/chat.component.html"),
        styles: [__webpack_require__("../../../../../client/app/common/chat/chat.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__chat_service__["a" /* ChatService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__chat_service__["a" /* ChatService */]) === "function" && _b || Object])
], ChatComponent);

var _a, _b;
//# sourceMappingURL=chat.component.js.map

/***/ }),

/***/ "../../../../../client/app/common/chat/chat.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ChatService = (function () {
    function ChatService(http) {
        this.http = http;
    }
    ChatService.prototype.getChatByRoom = function (room) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get('/api/chat/' + room)
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    }; // end function getChatByRoom
    ChatService.prototype.saveChat = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post('/api/chat', data)
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    }; // end function saveChat
    return ChatService;
}()); // end class ChatService
ChatService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], ChatService);

var _a;
//# sourceMappingURL=chat.service.js.map

/***/ }),

/***/ "../../../../../client/app/common/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* Set black background color, white text and some padding */\r\nfooter {\r\n    background-color: #068b8a;\r\n    color: white;\r\n    padding: 15px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../client/app/common/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer class=\"container-fluid text-center\">\r\n  <p>Footer Text</p>\r\n</footer>"

/***/ }),

/***/ "../../../../../client/app/common/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
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
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    return FooterComponent;
}());
FooterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-footer',
        template: __webpack_require__("../../../../../client/app/common/footer/footer.component.html"),
        styles: [__webpack_require__("../../../../../client/app/common/footer/footer.component.css")]
    }),
    __metadata("design:paramtypes", [])
], FooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ "../../../../../client/app/common/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* You can add global styles to this file, and also import other style files */\r\n.navbar-default {\r\n  background-color: #068b8a;\r\n  border-color: #068b8a;\r\n}\r\n.navbar-default .navbar-brand {\r\n  color: #ffffff;\r\n}\r\n.navbar-default .navbar-brand:hover,\r\n.navbar-default .navbar-brand:focus {\r\n  color: #ffffff;\r\n}\r\n.navbar-default .navbar-text {\r\n  color: #ffffff;\r\n}\r\n.navbar-default .navbar-nav > li > a {\r\n  color: #ffffff;\r\n}\r\n.navbar-default .navbar-nav > li > a:hover,\r\n.navbar-default .navbar-nav > li > a:focus {\r\n  color: #ffffff;\r\n}\r\n.navbar-default .navbar-nav > li > .dropdown-menu {\r\n  background-color: #068b8a;\r\n}\r\n.navbar-default .navbar-nav > li > .dropdown-menu > li > a {\r\n  color: #ffffff;\r\n}\r\n.navbar-default .navbar-nav > li > .dropdown-menu > li > a:hover,\r\n.navbar-default .navbar-nav > li > .dropdown-menu > li > a:focus {\r\n  color: #ffffff;\r\n  background-color: #000000;\r\n}\r\n.navbar-default .navbar-nav > li > .dropdown-menu > li.divider {\r\n  background-color: #000000;\r\n}\r\n.navbar-default .navbar-nav .open .dropdown-menu > .active > a,\r\n.navbar-default .navbar-nav .open .dropdown-menu > .active > a:hover,\r\n.navbar-default .navbar-nav .open .dropdown-menu > .active > a:focus {\r\n  color: #ffffff;\r\n  background-color: #000000;\r\n}\r\n.navbar-default .navbar-nav > .active > a,\r\n.navbar-default .navbar-nav > .active > a:hover,\r\n.navbar-default .navbar-nav > .active > a:focus {\r\n  color: #ffffff;\r\n  background-color: #000000;\r\n}\r\n.navbar-default .navbar-nav > .open > a,\r\n.navbar-default .navbar-nav > .open > a:hover,\r\n.navbar-default .navbar-nav > .open > a:focus {\r\n  color: #ffffff;\r\n  background-color: #000000;\r\n}\r\n.navbar-default .navbar-toggle {\r\n  border-color: #068b8a;\r\n}\r\n.navbar-default .navbar-toggle:hover,\r\n.navbar-default .navbar-toggle:focus {\r\n  background-color: #000000;\r\n}\r\n.navbar-default .navbar-toggle .icon-bar {\r\n  background-color: #ffffff;\r\n}\r\n.navbar-default .navbar-collapse,\r\n.navbar-default .navbar-form {\r\n  border-color: #068b8a;\r\n}\r\n.navbar-default .navbar-link {\r\n  color: #ffffff;\r\n}\r\n.navbar-default .navbar-link:hover {\r\n  color: #ffffff;\r\n}\r\n\r\n@media (max-width: 767px) {\r\n  .navbar-default .navbar-nav .open .dropdown-menu > li > a {\r\n    color: #ffffff;\r\n  }\r\n  .navbar-default .navbar-nav .open .dropdown-menu > li > a:hover,\r\n  .navbar-default .navbar-nav .open .dropdown-menu > li > a:focus {\r\n    color: #ffffff;\r\n  }\r\n  .navbar-default .navbar-nav .open .dropdown-menu > .active > a,\r\n  .navbar-default .navbar-nav .open .dropdown-menu > .active > a:hover,\r\n  .navbar-default .navbar-nav .open .dropdown-menu > .active > a:focus {\r\n    color: #ffffff;\r\n    background-color: #000000;\r\n  }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../client/app/common/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"navbar-header\">\r\n      <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#myNavbar\">\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>                        \r\n      </button>\r\n      <a class=\"navbar-brand\" routerLink=\"/\">The Website</a>\r\n    </div>\r\n    <div class=\"collapse navbar-collapse\" id=\"myNavbar\">\r\n      <ul class=\"nav navbar-nav\">\r\n        <li routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{ exact: true }\"><a routerLink=\"/\">Home</a></li>\r\n        <li routerLinkActive=\"active\"><a routerLink=\"/forum\">Forum</a></li>\r\n        <li routerLinkActive=\"active\"><a routerLink=\"/play\">Play</a></li>\r\n      </ul>\r\n      <ul class=\"nav navbar-nav navbar-right\">\r\n        <li routerLinkActive=\"active\"><a routerLink=\"/login\"><span class=\"glyphicon glyphicon-log-in\"></span> Login</a></li>\r\n        <li routerLinkActive=\"active\"><a routerLink=\"/register\"><span class=\"glyphicon glyphicon-user\"></span> Register</a></li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</nav>"

/***/ }),

/***/ "../../../../../client/app/common/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-navbar',
        template: __webpack_require__("../../../../../client/app/common/navbar/navbar.component.html"),
        styles: [__webpack_require__("../../../../../client/app/common/navbar/navbar.component.css")]
    }),
    __metadata("design:paramtypes", [])
], NavbarComponent);

//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ "../../../../../client/app/common/sidebar-left/sidebar-left.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../client/app/common/sidebar-left/sidebar-left.component.html":
/***/ (function(module, exports) {

module.exports = "<p><a href=\"#\">Link 1</a></p>\r\n<p><a href=\"#\">Link 2</a></p>\r\n<p><a href=\"#\">Link 3</a></p>"

/***/ }),

/***/ "../../../../../client/app/common/sidebar-left/sidebar-left.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarLeftComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SidebarLeftComponent = (function () {
    function SidebarLeftComponent() {
    }
    SidebarLeftComponent.prototype.ngOnInit = function () {
    };
    return SidebarLeftComponent;
}());
SidebarLeftComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-sidebar-left',
        template: __webpack_require__("../../../../../client/app/common/sidebar-left/sidebar-left.component.html"),
        styles: [__webpack_require__("../../../../../client/app/common/sidebar-left/sidebar-left.component.css")]
    }),
    __metadata("design:paramtypes", [])
], SidebarLeftComponent);

//# sourceMappingURL=sidebar-left.component.js.map

/***/ }),

/***/ "../../../../../client/app/common/sidebar-right/sidebar-right.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../client/app/common/sidebar-right/sidebar-right.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"well\">\r\n  <app-chat></app-chat>\r\n</div>"

/***/ }),

/***/ "../../../../../client/app/common/sidebar-right/sidebar-right.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarRightComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SidebarRightComponent = (function () {
    function SidebarRightComponent() {
    }
    SidebarRightComponent.prototype.ngOnInit = function () {
    };
    return SidebarRightComponent;
}());
SidebarRightComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-sidebar-right',
        template: __webpack_require__("../../../../../client/app/common/sidebar-right/sidebar-right.component.html"),
        styles: [__webpack_require__("../../../../../client/app/common/sidebar-right/sidebar-right.component.css")]
    }),
    __metadata("design:paramtypes", [])
], SidebarRightComponent);

//# sourceMappingURL=sidebar-right.component.js.map

/***/ }),

/***/ "../../../../../client/app/forum/forum.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../client/app/forum/forum.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  forum works!\r\n</p>\r\n"

/***/ }),

/***/ "../../../../../client/app/forum/forum.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForumComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ForumComponent = (function () {
    function ForumComponent() {
    }
    ForumComponent.prototype.ngOnInit = function () {
    };
    return ForumComponent;
}());
ForumComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-forum',
        template: __webpack_require__("../../../../../client/app/forum/forum.component.html"),
        styles: [__webpack_require__("../../../../../client/app/forum/forum.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ForumComponent);

//# sourceMappingURL=forum.component.js.map

/***/ }),

/***/ "../../../../../client/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../client/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Welcome</h1>\r\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>\r\n<hr>\r\n<h3>Test</h3>\r\n<p>Lorem ipsum...</p>"

/***/ }),

/***/ "../../../../../client/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../client/app/home/home.component.html"),
        styles: [__webpack_require__("../../../../../client/app/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../client/app/play/play.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../client/app/play/play.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  play works!\r\n</p>\r\n"

/***/ }),

/***/ "../../../../../client/app/play/play.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlayComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PlayComponent = (function () {
    function PlayComponent() {
    }
    PlayComponent.prototype.ngOnInit = function () {
    };
    return PlayComponent;
}());
PlayComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-play',
        template: __webpack_require__("../../../../../client/app/play/play.component.html"),
        styles: [__webpack_require__("../../../../../client/app/play/play.component.css")]
    }),
    __metadata("design:paramtypes", [])
], PlayComponent);

//# sourceMappingURL=play.component.js.map

/***/ }),

/***/ "../../../../../client/app/shared/directives/equal-validator.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EqualValidator; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var EqualValidator = EqualValidator_1 = (function () {
    function EqualValidator(validateEqual, reverse) {
        this.validateEqual = validateEqual;
        this.reverse = reverse;
    }
    Object.defineProperty(EqualValidator.prototype, "isReverse", {
        get: function () {
            if (!this.reverse)
                return false;
            return this.reverse === 'true' ? true : false;
        } // end function isReverse
        ,
        enumerable: true,
        configurable: true
    });
    EqualValidator.prototype.validate = function (c) {
        // self value
        var v = c.value;
        // control vlaue
        var e = c.root.get(this.validateEqual);
        // value not equal
        if (e && v !== e.value && !this.isReverse) {
            return {
                validateEqual: false
            };
        } // end if value not equal
        // value equal and reverse
        if (e && v === e.value && this.isReverse) {
            delete e.errors['validateEqual'];
            if (!Object.keys(e.errors).length)
                e.setErrors(null);
        } // end if value equal
        // value not equal and reverse
        if (e && v !== e.value && this.isReverse) {
            e.setErrors({ validateEqual: false });
        } // end if value not equal
        return null;
    }; // end function validate
    return EqualValidator;
}()); // end class EqualValidator
EqualValidator = EqualValidator_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* Directive */])({
        selector: '[validateEqual][formControlName],[validateEqual][formControl],[validateEqual][ngModel]',
        providers: [
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* NG_VALIDATORS */], useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* forwardRef */])(function () { return EqualValidator_1; }), multi: true }
        ]
    }),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Attribute */])('validateEqual')),
    __param(1, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Attribute */])('reverse')),
    __metadata("design:paramtypes", [String, String])
], EqualValidator);

var EqualValidator_1;
//# sourceMappingURL=equal-validator.directive.js.map

/***/ }),

/***/ "../../../../../client/app/shared/shared.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__directives_equal_validator_directive__ = __webpack_require__("../../../../../client/app/shared/directives/equal-validator.directive.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SharedModule = (function () {
    function SharedModule() {
        // Shared validation messages among forms
        this.validationMessages = {
            'username': {
                'required': 'Display name is required.',
                'minlength': 'Display name must be at least 4 characters.',
                'maxlength': 'Display name cannot be longer than 24 characters.',
                'pattern': 'Display name is invalid.',
            },
            'email': {
                'required': 'Email is required.',
                'pattern': 'Email is invalid.'
            },
            'password': {
                'required': 'Password is required.'
            },
            'confirm_password': {
                'required': 'Confirmation password is required.',
                'validateEqual': 'Confirmation password must match original password.'
            },
            'auth': {
                'incorrectLogin': 'Incorrect email address or password.'
            }
        };
        // Shared regex patterns among forms
        this.patterns = {
            'username': '^[a-zA-Z0-9]+([-_\.][a-zA-Z0-9]+)*([a-zA-Z0-9])*$',
            'email': /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
        };
    }
    // Shared 'onValueChanged' function for validating forms
    SharedModule.prototype.onValueChanged = function (component, formKey, data) {
        if (!component[formKey]) {
            return;
        }
        var form = component[formKey];
        for (var field in component.formErrors) {
            // clear previous error message (if any)
            component.formErrors[field] = '';
            var control = form.get(field);
            if (control && control.dirty && !control.valid) {
                var messages = this.validationMessages[field];
                component.formErrors[field] = '<ul>';
                for (var key in control.errors) {
                    component.formErrors[field] += '<li>' + messages[key] + '</li>';
                } // end for loop over all the errors
                component.formErrors[field] += '</ul>';
            } // end if the field has been modified and invalid
        } // end for loop over all form errors
    }; // end onValueChanged function
    return SharedModule;
}()); // end class SharedModule
SharedModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["d" /* CommonModule */]],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__directives_equal_validator_directive__["a" /* EqualValidator */]],
        exports: [__WEBPACK_IMPORTED_MODULE_2__directives_equal_validator_directive__["a" /* EqualValidator */], __WEBPACK_IMPORTED_MODULE_1__angular_common__["d" /* CommonModule */]]
    })
], SharedModule);

//# sourceMappingURL=shared.module.js.map

/***/ }),

/***/ "../../../../../client/app/shared/viewModels/User.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = modelRegister;
/* harmony export (immutable) */ __webpack_exports__["b"] = modelLogin;
// Create custom view models for our different forms
function modelRegister () {
    this.username = "";
    this.email = "";
    this.password = "";
    this.confirm_password = "";
};// end interface class User

function modelLogin () {
    this.email = "";
    this.password = "";
};// end interface class User

/***/ }),

/***/ "../../../../../client/environments/environment.ts":
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

/***/ "../../../../../client/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../client/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../client/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../client/main.ts");


/***/ })

},[1]);
//# sourceMappingURL=main.bundle.js.map