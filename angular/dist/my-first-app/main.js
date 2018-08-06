(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_main_home_main_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../home/home-main/home-main.component */ "./src/home/home-main/home-main.component.ts");
/* harmony import */ var _top_new_release_new_release_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../top/new-release/new-release.component */ "./src/top/new-release/new-release.component.ts");
/* harmony import */ var _home_side_category_side_category_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../home/side-category/side-category.component */ "./src/home/side-category/side-category.component.ts");
/* harmony import */ var _top_adults_adults_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../top/adults/adults.component */ "./src/top/adults/adults.component.ts");
/* harmony import */ var _top_kids_books_kids_books_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../top/kids-books/kids-books.component */ "./src/top/kids-books/kids-books.component.ts");
/* harmony import */ var _top_bestsellers_bestsellers_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../top/bestsellers/bestsellers.component */ "./src/top/bestsellers/bestsellers.component.ts");
/* harmony import */ var _top_books_details_books_details_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../top/books-details/books-details.component */ "./src/top/books-details/books-details.component.ts");
/* harmony import */ var _checkout_payment_payment_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../checkout/payment/payment.component */ "./src/checkout/payment/payment.component.ts");
/* harmony import */ var _top_arts_arts_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../top/arts/arts.component */ "./src/top/arts/arts.component.ts");
/* harmony import */ var _top_biographies_biographies_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../top/biographies/biographies.component */ "./src/top/biographies/biographies.component.ts");
/* harmony import */ var _top_computer_computer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../top/computer/computer.component */ "./src/top/computer/computer.component.ts");
/* harmony import */ var _top_entertainment_entertainment_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../top/entertainment/entertainment.component */ "./src/top/entertainment/entertainment.component.ts");
/* harmony import */ var _top_history_history_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../top/history/history.component */ "./src/top/history/history.component.ts");
/* harmony import */ var _top_top_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../top/top.component */ "./src/top/top.component.ts");
/* harmony import */ var _top_topbest_topbest_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../top/topbest/topbest.component */ "./src/top/topbest/topbest.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: _home_home_main_home_main_component__WEBPACK_IMPORTED_MODULE_2__["HomeMainComponent"] },
    { path: 'books-detail', component: _top_books_details_books_details_component__WEBPACK_IMPORTED_MODULE_8__["BooksDetailsComponent"] },
    { path: 'books-details/:bookid', component: _top_books_details_books_details_component__WEBPACK_IMPORTED_MODULE_8__["BooksDetailsComponent"] },
    { path: 'new-release', component: _top_new_release_new_release_component__WEBPACK_IMPORTED_MODULE_3__["NewReleaseComponent"] },
    { path: 'side-category', component: _home_side_category_side_category_component__WEBPACK_IMPORTED_MODULE_4__["SideCategoryComponent"] },
    { path: 'adults', component: _top_adults_adults_component__WEBPACK_IMPORTED_MODULE_5__["AdultsComponent"] },
    { path: 'kids-books', component: _top_kids_books_kids_books_component__WEBPACK_IMPORTED_MODULE_6__["KidsBooksComponent"] },
    // { path: 'kids-books/:bookid', component: KidsBooksComponent },
    { path: 'bestsellers', component: _top_bestsellers_bestsellers_component__WEBPACK_IMPORTED_MODULE_7__["BestsellersComponent"] },
    { path: 'payment', component: _checkout_payment_payment_component__WEBPACK_IMPORTED_MODULE_9__["PaymentComponent"] },
    { path: 'arts', component: _top_arts_arts_component__WEBPACK_IMPORTED_MODULE_10__["ArtsComponent"] },
    { path: 'biographies', component: _top_biographies_biographies_component__WEBPACK_IMPORTED_MODULE_11__["BiographiesComponent"] },
    { path: 'computer', component: _top_computer_computer_component__WEBPACK_IMPORTED_MODULE_12__["ComputerComponent"] },
    { path: 'entertainment', component: _top_entertainment_entertainment_component__WEBPACK_IMPORTED_MODULE_13__["EntertainmentComponent"] },
    { path: 'history', component: _top_history_history_component__WEBPACK_IMPORTED_MODULE_14__["HistoryComponent"] },
    { path: 'top', component: _top_top_component__WEBPACK_IMPORTED_MODULE_15__["TopComponent"] },
    { path: 'topbest', component: _top_topbest_topbest_component__WEBPACK_IMPORTED_MODULE_16__["TopbestComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n    <app-top-nav></app-top-nav>\n    <!-- <app-home-slider></app-home-slider> -->\n    <!-- <app-products></app-products> -->\n    <!-- <app-footer></app-footer> -->\n</div>  "

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-in-memory-web-api */ "./node_modules/angular-in-memory-web-api/index.js");
/* harmony import */ var _in_memory_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./in-memory-data.service */ "./src/app/in-memory-data.service.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_top_nav_top_nav_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../home/top-nav/top-nav.component */ "./src/home/top-nav/top-nav.component.ts");
/* harmony import */ var _home_home_slider_home_slider_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../home/home-slider/home-slider.component */ "./src/home/home-slider/home-slider.component.ts");
/* harmony import */ var _top_top_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../top/top.component */ "./src/top/top.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _home_home_main_home_main_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../home/home-main/home-main.component */ "./src/home/home-main/home-main.component.ts");
/* harmony import */ var _home_footer_footer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../home/footer/footer.component */ "./src/home/footer/footer.component.ts");
/* harmony import */ var _login_login_signup_login_signup_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../login/login-signup/login-signup.component */ "./src/login/login-signup/login-signup.component.ts");
/* harmony import */ var _top_new_release_new_release_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../top/new-release/new-release.component */ "./src/top/new-release/new-release.component.ts");
/* harmony import */ var _home_side_category_side_category_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../home/side-category/side-category.component */ "./src/home/side-category/side-category.component.ts");
/* harmony import */ var _top_adults_adults_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../top/adults/adults.component */ "./src/top/adults/adults.component.ts");
/* harmony import */ var _top_kids_books_kids_books_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../top/kids-books/kids-books.component */ "./src/top/kids-books/kids-books.component.ts");
/* harmony import */ var _top_bestsellers_bestsellers_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../top/bestsellers/bestsellers.component */ "./src/top/bestsellers/bestsellers.component.ts");
/* harmony import */ var _top_books_details_books_details_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../top/books-details/books-details.component */ "./src/top/books-details/books-details.component.ts");
/* harmony import */ var _checkout_mycart_mycart_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../checkout/mycart/mycart.component */ "./src/checkout/mycart/mycart.component.ts");
/* harmony import */ var _checkout_payment_payment_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../checkout/payment/payment.component */ "./src/checkout/payment/payment.component.ts");
/* harmony import */ var _checkout_order_placed_order_placed_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../checkout/order-placed/order-placed.component */ "./src/checkout/order-placed/order-placed.component.ts");
/* harmony import */ var _top_arts_arts_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../top/arts/arts.component */ "./src/top/arts/arts.component.ts");
/* harmony import */ var _top_biographies_biographies_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../top/biographies/biographies.component */ "./src/top/biographies/biographies.component.ts");
/* harmony import */ var _top_entertainment_entertainment_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../top/entertainment/entertainment.component */ "./src/top/entertainment/entertainment.component.ts");
/* harmony import */ var _top_computer_computer_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../top/computer/computer.component */ "./src/top/computer/computer.component.ts");
/* harmony import */ var _top_history_history_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../top/history/history.component */ "./src/top/history/history.component.ts");
/* harmony import */ var _top_topbest_topbest_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../top/topbest/topbest.component */ "./src/top/topbest/topbest.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




























// import { loginComponent } from '../checkout/login/login.component' ;
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _home_top_nav_top_nav_component__WEBPACK_IMPORTED_MODULE_6__["TopNavComponent"],
                _home_home_slider_home_slider_component__WEBPACK_IMPORTED_MODULE_7__["HomeSliderComponent"],
                _home_home_main_home_main_component__WEBPACK_IMPORTED_MODULE_10__["HomeMainComponent"],
                _home_footer_footer_component__WEBPACK_IMPORTED_MODULE_11__["FooterComponent"],
                _login_login_signup_login_signup_component__WEBPACK_IMPORTED_MODULE_12__["LoginSignupComponent"],
                _top_new_release_new_release_component__WEBPACK_IMPORTED_MODULE_13__["NewReleaseComponent"],
                _home_side_category_side_category_component__WEBPACK_IMPORTED_MODULE_14__["SideCategoryComponent"],
                _top_adults_adults_component__WEBPACK_IMPORTED_MODULE_15__["AdultsComponent"],
                _top_kids_books_kids_books_component__WEBPACK_IMPORTED_MODULE_16__["KidsBooksComponent"],
                _top_bestsellers_bestsellers_component__WEBPACK_IMPORTED_MODULE_17__["BestsellersComponent"],
                _top_books_details_books_details_component__WEBPACK_IMPORTED_MODULE_18__["BooksDetailsComponent"],
                _top_top_component__WEBPACK_IMPORTED_MODULE_8__["TopComponent"],
                _checkout_mycart_mycart_component__WEBPACK_IMPORTED_MODULE_19__["MycartComponent"],
                _checkout_payment_payment_component__WEBPACK_IMPORTED_MODULE_20__["PaymentComponent"],
                _checkout_order_placed_order_placed_component__WEBPACK_IMPORTED_MODULE_21__["OrderPlacedComponent"],
                _top_arts_arts_component__WEBPACK_IMPORTED_MODULE_22__["ArtsComponent"],
                _top_biographies_biographies_component__WEBPACK_IMPORTED_MODULE_23__["BiographiesComponent"],
                _top_entertainment_entertainment_component__WEBPACK_IMPORTED_MODULE_24__["EntertainmentComponent"],
                _top_computer_computer_component__WEBPACK_IMPORTED_MODULE_25__["ComputerComponent"],
                _top_history_history_component__WEBPACK_IMPORTED_MODULE_26__["HistoryComponent"],
                _top_topbest_topbest_component__WEBPACK_IMPORTED_MODULE_27__["TopbestComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_2__["HttpModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"],
                angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_3__["HttpClientInMemoryWebApiModule"].forRoot(_in_memory_data_service__WEBPACK_IMPORTED_MODULE_4__["InMemoryDataService"], { dataEncapsulation: false })
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/books.service.ts":
/*!**********************************!*\
  !*** ./src/app/books.service.ts ***!
  \**********************************/
/*! exports provided: BooksService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BooksService", function() { return BooksService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./message.service */ "./src/app/message.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BooksService = /** @class */ (function () {
    // private booksUrl = 'localhost:8080/books/';  // URL to web api
    //url = 'http://localhost:8080';
    function BooksService(http, messageService) {
        this.http = http;
        this.messageService = messageService;
    }
    /** GET products from the server */
    BooksService.prototype.getAdultBooks = function () {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({ 'Accept': 'application/json' });
        return this.http.get("/books/category/8", { headers: headers });
    };
    BooksService.prototype.getBooksbyid = function (id) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({ 'Accept': 'application/json' });
        return this.http.get("/books/" + id, { headers: headers });
    };
    BooksService.prototype.getKidsBooks = function () {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({ 'Accept': 'application/json' });
        return this.http.get("/books/category/9 ", { headers: headers });
    };
    BooksService.prototype.getNewBooks = function () {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({ 'Accept': 'application/json' });
        return this.http.get("/books/category/6", { headers: headers });
    };
    BooksService.prototype.getBestBooks = function () {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({ 'Accept': 'application/json' });
        return this.http.get("/books/category/7", { headers: headers });
    };
    BooksService.prototype.getArtsBooks = function () {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({ 'Accept': 'application/json' });
        return this.http.get("/books/category/1", { headers: headers });
    };
    BooksService.prototype.getBioBooks = function () {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({ 'Accept': 'application/json' });
        return this.http.get("/books/category/2", { headers: headers });
    };
    BooksService.prototype.getCompBooks = function () {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({ 'Accept': 'application/json' });
        return this.http.get("/books/category/3", { headers: headers });
    };
    BooksService.prototype.getEntBooks = function () {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({ 'Accept': 'application/json' });
        return this.http.get("/books/category/4", { headers: headers });
    };
    BooksService.prototype.getHistBooks = function () {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({ 'Accept': 'application/json' });
        return this.http.get("/books/category/5", { headers: headers });
    };
    BooksService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"],
            _message_service__WEBPACK_IMPORTED_MODULE_2__["MessageService"]])
    ], BooksService);
    return BooksService;
}());



/***/ }),

/***/ "./src/app/in-memory-data.service.ts":
/*!*******************************************!*\
  !*** ./src/app/in-memory-data.service.ts ***!
  \*******************************************/
/*! exports provided: InMemoryDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InMemoryDataService", function() { return InMemoryDataService; });
var InMemoryDataService = /** @class */ (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var books = [{
                book_id: 1234,
                book_category_id: 1,
                book_name: 'Answer and Question',
                book_desc: 'Very good book for competative exams',
                book_price: 250,
                book_author: 'Martin John',
                book_image_url: ' pari ',
                book_rating: 5
            },
        ];
        return { books: books };
    };
    return InMemoryDataService;
}());



/***/ }),

/***/ "./src/app/message.service.ts":
/*!************************************!*\
  !*** ./src/app/message.service.ts ***!
  \************************************/
/*! exports provided: MessageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageService", function() { return MessageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MessageService = /** @class */ (function () {
    function MessageService() {
        this.messages = [];
    }
    MessageService.prototype.add = function (message) {
        this.messages.push(message);
    };
    MessageService.prototype.clear = function () {
        this.messages = [];
    };
    MessageService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' })
    ], MessageService);
    return MessageService;
}());



/***/ }),

/***/ "./src/checkout/mycart/mycart.component.css":
/*!**************************************************!*\
  !*** ./src/checkout/mycart/mycart.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/checkout/mycart/mycart.component.html":
/*!***************************************************!*\
  !*** ./src/checkout/mycart/mycart.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  mycart works!\n</p>\n"

/***/ }),

/***/ "./src/checkout/mycart/mycart.component.ts":
/*!*************************************************!*\
  !*** ./src/checkout/mycart/mycart.component.ts ***!
  \*************************************************/
/*! exports provided: MycartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MycartComponent", function() { return MycartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MycartComponent = /** @class */ (function () {
    function MycartComponent() {
    }
    MycartComponent.prototype.ngOnInit = function () {
    };
    MycartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-mycart',
            template: __webpack_require__(/*! ./mycart.component.html */ "./src/checkout/mycart/mycart.component.html"),
            styles: [__webpack_require__(/*! ./mycart.component.css */ "./src/checkout/mycart/mycart.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MycartComponent);
    return MycartComponent;
}());



/***/ }),

/***/ "./src/checkout/order-placed/order-placed.component.css":
/*!**************************************************************!*\
  !*** ./src/checkout/order-placed/order-placed.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/checkout/order-placed/order-placed.component.html":
/*!***************************************************************!*\
  !*** ./src/checkout/order-placed/order-placed.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <p>\n  order-placed works!\n</p> -->\n\n\n<p>\n    Hi Customer,\n\n    Order successfully placed.\n    \n    We are pleased to confirm your order no OD211616369533914000. \n    Thank you for shopping with us!\n</p>\n<button class=\"btn btn-primary btn-primaryk\" type=\"submit\" routerLink=\"/home\">Continue Shopping</button>\n"

/***/ }),

/***/ "./src/checkout/order-placed/order-placed.component.ts":
/*!*************************************************************!*\
  !*** ./src/checkout/order-placed/order-placed.component.ts ***!
  \*************************************************************/
/*! exports provided: OrderPlacedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderPlacedComponent", function() { return OrderPlacedComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var OrderPlacedComponent = /** @class */ (function () {
    function OrderPlacedComponent() {
    }
    OrderPlacedComponent.prototype.ngOnInit = function () {
    };
    OrderPlacedComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-order-placed',
            template: __webpack_require__(/*! ./order-placed.component.html */ "./src/checkout/order-placed/order-placed.component.html"),
            styles: [__webpack_require__(/*! ./order-placed.component.css */ "./src/checkout/order-placed/order-placed.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], OrderPlacedComponent);
    return OrderPlacedComponent;
}());



/***/ }),

/***/ "./src/checkout/payment/payment.component.css":
/*!****************************************************!*\
  !*** ./src/checkout/payment/payment.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/checkout/payment/payment.component.html":
/*!*****************************************************!*\
  !*** ./src/checkout/payment/payment.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <p>\n  payment works!\n</p> -->\n\n<div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-8\">\n        <br>\n        <h4>Billing address</h4>\n        \n          <div class=\"row\">\n                    <div class=\"col-md-6\">\n                      <label for=\"firstName\">First Name</label>\n                      <input type=\"text\" class=\"form-control\" id=\"firstName\" required>\n                    </div>\n                  \n                  <div class=\"col-md-6\">\n                      <label for=\"lastName\">Last Name</label>\n                      <input type=\"text\" class=\"form-control\" id=\"lastName\" required>\n                    </div>\n                </div>\n  \n                <div class=\"row\">\n                    <div class=\"col-md-6\">\n                      <label for=\"email\">Email</label>\n                      <input type=\"text\" class=\"form-control\" id=\"email\" required>\n                    </div>\n                  \n                  <div class=\"col-md-6\">\n                      <label for=\"phone\">Phone</label>\n                      <input type=\"text\" class=\"form-control\" id=\"phone\" required>\n                    </div>\n                </div>\n  \n                <div class=\"row\">\n                    <div class=\"col-md-12\">\n                      <label for=\"address\">Address</label>\n                      <input type=\"text\" class=\"form-control\" id=\"address\" required>\n                    </div>\t\n              </div>\n  \n                <div class=\"row\">\n                    <div class=\"col-md-12\">\n                      <label for=\"address1\">Address(Optional)</label>\n                      <input type=\"text\" class=\"form-control\" id=\"address1\" required>\n                    </div>\n                </div>\n  \n                               \n                <br>\n                \n                <hr>\n  \n                <div class=\"custom-control custom-checkbox\">\n            <input type=\"checkbox\" class=\"custom-control-input\" id=\"sameaddress\"/>\n            <label class=\"custom-control-label\" for=\"sameaddress\">Shipping address is the same as my billing address</label>\n          </div>\n  \n          <div class=\"custom-control custom-checkbox\">\n            <input type=\"checkbox\" class=\"custom-control-input\" id=\"saveinfo\"/>\n            <label class=\"custom-control-label\" for=\"saveinfo\">Save this information for next time</label>\n          </div>\n  \n          <hr>\n  \n          <h4>Payment Info</h4>\n  \n          <div class=\"custom-control custom-checkbox\">\n            <input type=\"checkbox\" class=\"custom-control-input\" id=\"creditcard\"/>\n            <label class=\"custom-control-label\" for=\"creditcard\">Credit Card</label>\n          </div>\n  \n          <div class=\"custom-control custom-checkbox\">\n            <input type=\"checkbox\" class=\"custom-control-input\" id=\"debitcard\"/>\n            <label class=\"custom-control-label\" for=\"debitcard\">Debit Card</label>\n          </div>\n  \n          <div class=\"custom-control custom-checkbox\">\n            <input type=\"checkbox\" class=\"custom-control-input\" id=\"netbank\"/>\n            <label class=\"custom-control-label\" for=\"netbank\">Net Banking</label>\n          </div>\n  \n          <br>\n  \n          <div class=\"row\">\n                    <div class=\"col-md-6\">\n                      <label for=\"nameoncard\">Name on card</label>\n                      <input type=\"text\" class=\"form-control\" id=\"nameoncard\" required>\n                    </div>\n                  \n                  <div class=\"col-md-6\">\n                      <label for=\"cardnumber\">Credit Card Number</label>\n                      <input type=\"text\" class=\"form-control\" id=\"cardnumber\" required>\n                    </div>\n                </div>\n  \n                <div class=\"row\">\n                    <div class=\"col-md-4\">\n                      <label for=\"expiration\">Expiration</label>\n                      <input type=\"date\" class=\"form-control\" id=\"expiration\" required>\n                    </div>\n                  \n                  <div class=\"col-md-2\">\n                      <label for=\"cvv\">CVV</label>\n                      <input type=\"text\" class=\"form-control\" id=\"cvv\" required>\n                    </div>\n                </div>\n  \n                <hr>\n  \n                <button class=\"btn btn-primary btn-success\" type=\"submit\" routerLink=\"/order_details\">Place Order</button> &nbsp;\n                <button class=\"btn btn-primary btn-primary\" type=\"submit\" routerLink=\"/home\">Continue Shopping</button>\n\n                <br>\n  \n          </div>    \t\n  </div>\n"

/***/ }),

/***/ "./src/checkout/payment/payment.component.ts":
/*!***************************************************!*\
  !*** ./src/checkout/payment/payment.component.ts ***!
  \***************************************************/
/*! exports provided: PaymentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentComponent", function() { return PaymentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PaymentComponent = /** @class */ (function () {
    function PaymentComponent() {
    }
    PaymentComponent.prototype.ngOnInit = function () {
    };
    PaymentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-payment',
            template: __webpack_require__(/*! ./payment.component.html */ "./src/checkout/payment/payment.component.html"),
            styles: [__webpack_require__(/*! ./payment.component.css */ "./src/checkout/payment/payment.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PaymentComponent);
    return PaymentComponent;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/home/footer/footer.component.css":
/*!**********************************************!*\
  !*** ./src/home/footer/footer.component.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer {\n    padding: 20px;\n    text-align: center;\n    background: #ddd;\n}"

/***/ }),

/***/ "./src/home/footer/footer.component.html":
/*!***********************************************!*\
  !*** ./src/home/footer/footer.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <p>\n  footer works!\n</p> -->\n\n<footer class=\"container-fluid\">\n  <p>Footer Text</p>\n</footer>"

/***/ }),

/***/ "./src/home/footer/footer.component.ts":
/*!*********************************************!*\
  !*** ./src/home/footer/footer.component.ts ***!
  \*********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/home/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/home/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/home/home-main/home-main.component.css":
/*!****************************************************!*\
  !*** ./src/home/home-main/home-main.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/home/home-main/home-main.component.html":
/*!*****************************************************!*\
  !*** ./src/home/home-main/home-main.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <p>\n  home-main works!\n</p> -->\n    <app-home-slider></app-home-slider>\n    <app-top></app-top>"

/***/ }),

/***/ "./src/home/home-main/home-main.component.ts":
/*!***************************************************!*\
  !*** ./src/home/home-main/home-main.component.ts ***!
  \***************************************************/
/*! exports provided: HomeMainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeMainComponent", function() { return HomeMainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeMainComponent = /** @class */ (function () {
    function HomeMainComponent() {
    }
    HomeMainComponent.prototype.ngOnInit = function () {
    };
    HomeMainComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home-main',
            template: __webpack_require__(/*! ./home-main.component.html */ "./src/home/home-main/home-main.component.html"),
            styles: [__webpack_require__(/*! ./home-main.component.css */ "./src/home/home-main/home-main.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeMainComponent);
    return HomeMainComponent;
}());



/***/ }),

/***/ "./src/home/home-slider/home-slider.component.css":
/*!********************************************************!*\
  !*** ./src/home/home-slider/home-slider.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".jumbotron{\n    width:50%;\n    height:50%;\n\n    }"

/***/ }),

/***/ "./src/home/home-slider/home-slider.component.html":
/*!*********************************************************!*\
  !*** ./src/home/home-slider/home-slider.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <p>\n  home-slider works!\n</p> -->\n\n<div class=\"container-fluid\">\n<div id=\"myCarousel\" class=\"carousel slide\" data-ride=\"carousel\" >\n    <!-- Indicators -->\n    <ol class=\"carousel-indicators\">\n      <li data-target=\"#myCarousel\" data-slide-to=\"0\"></li>\n      <li data-target=\"#myCarousel\" data-slide-to=\"1\"></li>\n      <li data-target=\"#myCarousel\" data-slide-to=\"2\"></li>\n    </ol>\n  \n    <!-- Wrapper for slides -->\n    <div class=\"carousel-inner\">\n      <div class=\"item active\">\n        <img src=\"../../assets/images/booksnook-baner.jpg\" class=\"img-fluid\" alt=\"Responsive image\">\n        <div class=\"carousel-caption\">\n        </div>\n      </div>\n  \n      <div class=\"item \">\n        <img src=\"../../assets/images/Books_banner.png\" class=\"img-fluid\" alt=\"Responsive image\">\n        <div class=\"carousel-caption\">\n        </div>\n      </div>\n  \n      <div class=\"item\">\n        <img src=\"../../assets/images/bestseller.jpg\" alt=\"category_3\">\n        <div class=\"carousel-caption\">\n        </div>\n      </div>\n    </div>\n  \n    <!-- Left and right controls -->\n    <a class=\"left carousel-control\" href=\"#myCarousel\" data-slide=\"prev\">\n      <span class=\"glyphicon glyphicon-chevron-left\"></span>\n      <span class=\"sr-only\">Previous</span>\n    </a>\n    <a class=\"right carousel-control\" href=\"#myCarousel\" data-slide=\"next\">\n      <span class=\"glyphicon glyphicon-chevron-right\"></span>\n      <span class=\"sr-only\">Next</span>\n    </a>\n  </div>\n  </div>\n  <br>\n  <br>\n  "

/***/ }),

/***/ "./src/home/home-slider/home-slider.component.ts":
/*!*******************************************************!*\
  !*** ./src/home/home-slider/home-slider.component.ts ***!
  \*******************************************************/
/*! exports provided: HomeSliderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeSliderComponent", function() { return HomeSliderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeSliderComponent = /** @class */ (function () {
    function HomeSliderComponent() {
    }
    HomeSliderComponent.prototype.ngOnInit = function () {
    };
    HomeSliderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home-slider',
            template: __webpack_require__(/*! ./home-slider.component.html */ "./src/home/home-slider/home-slider.component.html"),
            styles: [__webpack_require__(/*! ./home-slider.component.css */ "./src/home/home-slider/home-slider.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeSliderComponent);
    return HomeSliderComponent;
}());



/***/ }),

/***/ "./src/home/side-category/side-category.component.css":
/*!************************************************************!*\
  !*** ./src/home/side-category/side-category.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  .navbar {\n      margin-bottom: 0;\n      border-radius: 0;\n  }\n      \n  .sidenav {\n    padding-top: 20px;\n    /* margin: 10px; */\n    background-color:white;\n    /* height: 650px; */\n  }\n      \n  .header-label {\n    /* color: white; */\n    font-size: 20px;\n    text-transform: uppercase !important;\n    font-family: 'Comic Sans MS', cursive, sans-serif;\n    /* background-color:#2861ba; */\n  }\n      \n  .checkbox {\n    color:#337ab7;\n  }\n      \n  ul {\n    font-size: 16px;\n    -webkit-padding-start: 10px;\n    list-style-type: none; \n  }\n      \n  li {\n    font-family: 'Comic Sans MS', cursive, sans-serif;\n\n  }\n      \n  hr {\n    margin:10px;\n    color: cadetblue;\n    border-width: 5px;\n}"

/***/ }),

/***/ "./src/home/side-category/side-category.component.html":
/*!*************************************************************!*\
  !*** ./src/home/side-category/side-category.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n <div class=\"col-md-2  sidenav table-bordered\">\n    <div class=\"table\">\n        <h5 class=\"header-label\"> Category</h5>\n        <hr>\n        <ul>\n         <div><li ><a routerLink=\"../kids-books\">Kids</a></li></div>\n         <div><li ><a routerLink=\"../arts\">Arts&Photography</a></li></div>\n         <div><li ><a routerLink=\"../biographies\">Biographies</a></li></div>\n         <div><li ><a routerLink=\"../entertainment\">Entertainment</a></li></div>\n         <div><li ><a routerLink=\"../computer\">ComputerBooks</a></li></div>\n         <div><li ><a routerLink=\"../history\">History</a></li></div>\n         <!--<div> <li class=\"glyphicon glyphicon-menu-right\"><a routerLink=\"../adults\">Adults</a></li></div> -->\n        </ul>\n    \n    </div>\n  </div> \n  <!-- <h5 class=\"header-label\"> Categories </h5>\n  <div>\n    <ul>\n      <li><a routerLink=\"../home\">Category 1</a></li>\n      <li><a routerLink=\"../home\">Category 2</a></li>\n      <li><a routerLink=\"../home\">Category 3</a></li>\n      </ul>\n    </div>\n    \n    <h5 class=\"header-label\"> Language </h5>\n  <div class=\"checkbox\">\n      <label><input type=\"checkbox\" value=\"\">English</label>\n    </div>\n    <div class=\"checkbox\">\n      <label><input type=\"checkbox\" value=\"\">Telugu</label>\n    </div>\n    <div class=\"checkbox\">\n      <label><input type=\"checkbox\" value=\"\">Hindi</label>\n    </div>\n    <div class=\"checkbox\">\n      <label><input type=\"checkbox\" value=\"\">Marati</label>\n    </div>\n    <div class=\"checkbox\">\n      <label><input type=\"checkbox\" value=\"\">Sanskrit</label> -->\n    <!-- </div>  -->\n\n"

/***/ }),

/***/ "./src/home/side-category/side-category.component.ts":
/*!***********************************************************!*\
  !*** ./src/home/side-category/side-category.component.ts ***!
  \***********************************************************/
/*! exports provided: SideCategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideCategoryComponent", function() { return SideCategoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SideCategoryComponent = /** @class */ (function () {
    function SideCategoryComponent() {
    }
    SideCategoryComponent.prototype.ngOnInit = function () {
    };
    SideCategoryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-side-category',
            template: __webpack_require__(/*! ./side-category.component.html */ "./src/home/side-category/side-category.component.html"),
            styles: [__webpack_require__(/*! ./side-category.component.css */ "./src/home/side-category/side-category.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SideCategoryComponent);
    return SideCategoryComponent;
}());



/***/ }),

/***/ "./src/home/top-nav/top-nav.component.css":
/*!************************************************!*\
  !*** ./src/home/top-nav/top-nav.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "nav {\n    background-color:#2861ba;\n    \n    }\n/* .navbar-default .navbar-brand:hover {\n       color: white;\n}\n\n.navbar-brand { \n    color:white;\n    font-size: 30px;\n    }  */\n.navbar-nav>li>a {   \n    color:white;   \n    font-size: 20px; }\n/* .navbar-brand>a{\n    color:white;\n   }  */\n.navbar-default  {\n     color: white;\n     position: 0;\n\n   }\na:hover ,li a:hover {\n       background-color: #0754cf;\n       text-decoration: unset;\n   }\nli {\n    font-size: 20px;\n   }\n   "

/***/ }),

/***/ "./src/home/top-nav/top-nav.component.html":
/*!*************************************************!*\
  !*** ./src/home/top-nav/top-nav.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<nav class=\"navbar navbar-default\">\n    <div class=\"container-fluid\">\n        <!-- <a routerLink=\"/home\"><span class=\"glyphicon glyphicon-book\"></span> Booksnook</a> -->\n      <!-- Brand and toggle get grouped for better mobile display -->\n    \n      <div class=\"navbar-header\">\n          <!-- <a routerLink=\"/home\" style=\"font-size: 25px; color: white\"><span class=\"glyphicon glyphicon-book\"></span> Booksnook</a> -->\n\n        <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\" aria-expanded=\"false\">\n          <span class=\"sr-only\">Toggle navigation</span>\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>\n        </button>\n        <a routerLink=\"/home\" style=\"font-size: 25px; color: #ffe11b\"><span class=\"glyphicon glyphicon-book fixed-bottom\"></span> Booksnook</a>\n      </div>\n  \n      <!-- Collect the nav links, forms, and other content for toggling -->\n      <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n        <ul class=\"nav navbar-nav\">\n         <li><a routerLink=\"/adults\">Adults</a></li>\n         <li><a routerLink=\"/kids-books\">Kids</a></li>\n        </ul>\n        <ul class=\"nav navbar-nav navbar-right\">\n          <li><a href=\"\"><span class=\"glyphicon glyphicon-shopping-cart\"></span> My Cart</a></li>\n        </ul>\n        <div>\n        <form class=\"navbar-form navbar-right\">\n          <div class=\"form-group\">\n            <input type=\"text\" class=\"form-control\" placeholder=\"Search\">\n          <button type=\"submit\" class=\"btn btn-warning\">Search</button>\n          </div>\n        </form>\n        </div>\n      </div><!-- /.navbar-collapse -->\n    </div><!-- /.container-fluid -->\n  </nav>\n\n\n  <router-outlet></router-outlet>"

/***/ }),

/***/ "./src/home/top-nav/top-nav.component.ts":
/*!***********************************************!*\
  !*** ./src/home/top-nav/top-nav.component.ts ***!
  \***********************************************/
/*! exports provided: TopNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopNavComponent", function() { return TopNavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TopNavComponent = /** @class */ (function () {
    function TopNavComponent() {
    }
    TopNavComponent.prototype.ngOnInit = function () {
    };
    TopNavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-top-nav',
            template: __webpack_require__(/*! ./top-nav.component.html */ "./src/home/top-nav/top-nav.component.html"),
            styles: [__webpack_require__(/*! ./top-nav.component.css */ "./src/home/top-nav/top-nav.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TopNavComponent);
    return TopNavComponent;
}());



/***/ }),

/***/ "./src/login/login-signup/login-signup.component.css":
/*!***********************************************************!*\
  !*** ./src/login/login-signup/login-signup.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/login/login-signup/login-signup.component.html":
/*!************************************************************!*\
  !*** ./src/login/login-signup/login-signup.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <p>\n  login-signup works!\n</p> -->\n\n<div id=\"myModal\" class=\"modal fade\" role=\"dialog\">\n      <div class=\"modal-dialog\">\n    \n        <!-- Modal content-->\n        <div class=\"modal-content\">\n            \n            <label for=\"\">Email address</label>\n            <input type=\"email\" class=\"form-control\" id=\"\" placeholder=\"Enter email\">\n\n            <label for=\"\">Password</label>\n            <input type=\"password\" class=\"form-control\" id=\"\" placeholder=\"Password\">\n\n            <label>\n              <input type=\"checkbox\"> Remember Me\n            </label>\n            <div class=\"modal-footer\">\n          <button type=\"submit\" class=\"btn btn-default btn-success\">Login</button>\n          <button type=\"submit\" class=\"btn btn-default btn-danger\" data-dismiss=\"modal\" routerLink=\"/home\">Cancel</button>\n          <button type=\"button\" class=\"btn btn-default btn-primary\">New ? Signup</button>\n          </div>\n        </div>\n    \n      </div>\n    </div>"

/***/ }),

/***/ "./src/login/login-signup/login-signup.component.ts":
/*!**********************************************************!*\
  !*** ./src/login/login-signup/login-signup.component.ts ***!
  \**********************************************************/
/*! exports provided: LoginSignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginSignupComponent", function() { return LoginSignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoginSignupComponent = /** @class */ (function () {
    function LoginSignupComponent() {
    }
    LoginSignupComponent.prototype.ngOnInit = function () {
    };
    LoginSignupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login-signup',
            template: __webpack_require__(/*! ./login-signup.component.html */ "./src/login/login-signup/login-signup.component.html"),
            styles: [__webpack_require__(/*! ./login-signup.component.css */ "./src/login/login-signup/login-signup.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LoginSignupComponent);
    return LoginSignupComponent;
}());



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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "./src/top/adults/adults.component.css":
/*!*********************************************!*\
  !*** ./src/top/adults/adults.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.product-thumb {\n    padding: 15px 0px;\n    display: inline-block;\n    vertical-align: top;\n    max-width: 80%;\n    max-height: 80%;\n    /* width: 200px;\n    height: 350px; */\n    text-align: center;\n    box-sizing: border-box;\n    font-family: Roboto, Arial, sans-serif;\n    letter-spacing: 0;\n}\n\nem {\n    color: black;\n    font-size: 12px;\n}\n\nh2 {\n    font-size: 25px;\n    text-decoration: underline;\n    font-family: 'Comic Sans MS', cursive, sans-serif;\n    color: rgb(46, 46, 48);\n  }\n\n.wrap {\n    white-space: nowrap; \n    width: 200px; \n    overflow: hidden;\n    text-overflow: ellipsis; \n  }\n\n  \n"

/***/ }),

/***/ "./src/top/adults/adults.component.html":
/*!**********************************************!*\
  !*** ./src/top/adults/adults.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <app-side-category></app-side-category>\n</div>\n<div class=\" col-md-9 col-lg-9 col-sm-12\">\n  <h2>Adults</h2>\n  <hr>\n  <div class=\"row\">\n    <div class=\"col-md-3\" *ngFor=\"let books of bookList\">\n      <div class=\"thumbnail product-thumb\">\n        <a routerLink=\"/books-details/{{ books.id }}\" style=\"cursor: pointer\">\n          <!-- <img src=\"../../assets/images/imageNotAvailable.jpg\" alt=\"Lights\" style=\"width:100%\" > -->\n          <span >\n            <img src=\"../../assets/images/{{ books.id }}.jpg\" alt=\"Lights\" width=\"100%\" class=\"img-fluid rounded\">\n          </span>\n          <div class=\"product-brand\">\n            <p class=\"wrap\">{{ books.name }}\n              <br>\n              <em> by {{ books.author }}</em>\n            </p>\n          </div>\n        </a>\n        <!-- <p>Description:{{ books.description }}</p> -->\n        <p>₹ {{ books.price }}</p>\n        <!-- <p>Author: {{ books.author }}</p> -->\n        <div style=\"vertical-align: baseline\">\n          <button type=\"button\" class=\"btn btn-success\" routerLink=\"/books-details/{{ books.id }}\">\n            <span class=\"glyphicon glyphicon-plus-sign\"></span> Add to cart\n          </button>\n        </div>\n      </div>\n    </div>"

/***/ }),

/***/ "./src/top/adults/adults.component.ts":
/*!********************************************!*\
  !*** ./src/top/adults/adults.component.ts ***!
  \********************************************/
/*! exports provided: AdultsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdultsComponent", function() { return AdultsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_books_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app/books.service */ "./src/app/books.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdultsComponent = /** @class */ (function () {
    function AdultsComponent(route, booksService) {
        this.route = route;
        this.booksService = booksService;
        this.bookList = [];
    }
    AdultsComponent.prototype.ngOnInit = function () {
        this.getAdultBooks();
    };
    AdultsComponent.prototype.getAdultBooks = function () {
        var _this = this;
        this.booksService.getAdultBooks()
            .subscribe(function (books) {
            _this.bookList = books.json();
        });
    };
    AdultsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-adults',
            template: __webpack_require__(/*! ./adults.component.html */ "./src/top/adults/adults.component.html"),
            styles: [__webpack_require__(/*! ./adults.component.css */ "./src/top/adults/adults.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _app_books_service__WEBPACK_IMPORTED_MODULE_2__["BooksService"]])
    ], AdultsComponent);
    return AdultsComponent;
}());



/***/ }),

/***/ "./src/top/arts/arts.component.css":
/*!*****************************************!*\
  !*** ./src/top/arts/arts.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.product-thumb {\n    padding: 15px 0px;\n    display: inline-block;\n    vertical-align: top;\n    max-width: 80%;\n    max-height: 80%;\n    /* width: 200px;\n    height: 350px; */\n    text-align: center;\n    box-sizing: border-box;\n    font-family: Roboto, Arial, sans-serif;\n    letter-spacing: 0;\n}\n\nem {\n    color: black;\n    font-size: 12px;\n}\n\nh2 {\n    font-size: 25px;\n    text-decoration: underline;\n    font-family: 'Comic Sans MS', cursive, sans-serif;\n    color: rgb(46, 46, 48);\n  }\n\n.wrap {\n    white-space: nowrap; \n    width: 200px; \n    overflow: hidden;\n    text-overflow: ellipsis; \n  }\n\n"

/***/ }),

/***/ "./src/top/arts/arts.component.html":
/*!******************************************!*\
  !*** ./src/top/arts/arts.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <p>\n  arts works!\n</p> -->\n\n<app-side-category></app-side-category>\n<div><h2> Arts & Photography</h2></div>\n<hr>\n<div class=\"col-sm-9\">\n  <div class=\"row\">\n    <div class=\"col-md-3\" *ngFor=\"let books of bookList\">\n      <div class=\"thumbnail product-thumb\">\n          <a routerLink=\"/books-details/{{ books.id }}\" style=\"cursor: pointer\">\n            <!-- <img src=\"../../assets/images/imageNotAvailable.jpg\" alt=\"Lights\" style=\"width:100%\" > -->\n            <img src=\"../../assets/images/{{books.id}}.jpg\" alt=\"Lights\" width=\"100%\" class=\"img-fluid rounded\">\n            <div class=\"product-brand\"> \n              <p class=\"wrap\">{{ books.name }}<br> <em> by {{ books.author }}</em></p>\n            </div>\n          </a>\n          <!-- <p>Description:{{ books.description }}</p> -->\n        <p>₹ {{ books.price }}</p>\n        <!-- <p>Author: {{ books.author }}</p> -->\n        <button type=\"button\" class=\"btn btn-success\" routerLink=\"/books-details/{{ books.id }}\" style=\"cursor: pointer\">\n          <span class=\"glyphicon glyphicon-plus-sign\"></span> Add to cart\n        </button>\n        \n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/top/arts/arts.component.ts":
/*!****************************************!*\
  !*** ./src/top/arts/arts.component.ts ***!
  \****************************************/
/*! exports provided: ArtsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArtsComponent", function() { return ArtsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_books_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app/books.service */ "./src/app/books.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ArtsComponent = /** @class */ (function () {
    function ArtsComponent(route, booksService) {
        this.route = route;
        this.booksService = booksService;
        this.books = [];
        this.bookList = [];
    }
    ArtsComponent.prototype.ngOnInit = function () {
        this.getArtsBooks();
    };
    ArtsComponent.prototype.getArtsBooks = function () {
        var _this = this;
        this.booksService.getArtsBooks()
            .subscribe(function (books) {
            _this.bookList = books.json();
        });
    };
    ArtsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-arts',
            template: __webpack_require__(/*! ./arts.component.html */ "./src/top/arts/arts.component.html"),
            styles: [__webpack_require__(/*! ./arts.component.css */ "./src/top/arts/arts.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _app_books_service__WEBPACK_IMPORTED_MODULE_2__["BooksService"]])
    ], ArtsComponent);
    return ArtsComponent;
}());



/***/ }),

/***/ "./src/top/bestsellers/bestsellers.component.css":
/*!*******************************************************!*\
  !*** ./src/top/bestsellers/bestsellers.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.product-thumb {\n    padding: 15px 0px;\n    display: inline-block;\n    vertical-align: top;\n    max-width: 80%;\n    max-height: 80%;\n    /* width: 200px;\n    height: 350px; */\n    text-align: center;\n    box-sizing: border-box;\n    font-family: Roboto, Arial, sans-serif;\n    letter-spacing: 0;\n}\n\nem {\n    color: black;\n    font-size: 12px;\n}\n\nh2 {\n    font-size: 25px;\n    text-decoration: underline;\n    font-family: 'Comic Sans MS', cursive, sans-serif;\n    color: rgb(46, 46, 48);\n  }\n\n.wrap {\n    white-space: nowrap; \n    width: 200px; \n    overflow: hidden;\n    text-overflow: ellipsis; \n  }\n"

/***/ }),

/***/ "./src/top/bestsellers/bestsellers.component.html":
/*!********************************************************!*\
  !*** ./src/top/bestsellers/bestsellers.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <p>\n  best sellers!\n</p> -->\n\n<app-side-category></app-side-category>\n<div><h2>Best Sellers</h2></div>\n<hr>\n<div class=\"col-sm-9\">\n  <div class=\"row\">\n    <div class=\"col-md-3\" *ngFor=\"let books of bookList\">\n      <div class=\"thumbnail product-thumb\">\n          <a routerLink=\"/books-details/{{ books.id}}\" style=\"cursor: pointer\">\n            <!-- <img src=\"../../assets/images/imageNotAvailable.jpg\" alt=\"Lights\" style=\"width:100%\" > -->\n            <img src=\"../../assets/images/{{books.id}}.jpg\" alt=\"Lights\" width=\"100%\" class=\"img-fluid rounded\">\n            <div class=\"product-brand\"> \n              <p class=\"wrap\">{{ books.name }}<br> <em> by {{ books.author }}</em></p>\n            </div>\n          </a>\n          <!-- <p>Description:{{ books.description }}</p> -->\n        <p>₹ {{ books.price }}</p>\n        <!-- <p>Author: {{ books.author }}</p> -->\n        <button type=\"button\" class=\"btn btn-success\" routerLink=\"/books-details/{{ books.id }}\">\n          <span class=\"glyphicon glyphicon-plus-sign\"></span> Add to cart\n        </button>\n        \n  </div>\n</div>\n"

/***/ }),

/***/ "./src/top/bestsellers/bestsellers.component.ts":
/*!******************************************************!*\
  !*** ./src/top/bestsellers/bestsellers.component.ts ***!
  \******************************************************/
/*! exports provided: BestsellersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BestsellersComponent", function() { return BestsellersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_books_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app/books.service */ "./src/app/books.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BestsellersComponent = /** @class */ (function () {
    function BestsellersComponent(route, booksService) {
        this.route = route;
        this.booksService = booksService;
        this.books = [];
        this.bookList = [];
    }
    BestsellersComponent.prototype.ngOnInit = function () {
        this.getBestBooks();
    };
    BestsellersComponent.prototype.getBestBooks = function () {
        var _this = this;
        this.booksService.getBestBooks()
            .subscribe(function (books) {
            _this.bookList = books.json();
        });
    };
    BestsellersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-bestsellers',
            template: __webpack_require__(/*! ./bestsellers.component.html */ "./src/top/bestsellers/bestsellers.component.html"),
            styles: [__webpack_require__(/*! ./bestsellers.component.css */ "./src/top/bestsellers/bestsellers.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _app_books_service__WEBPACK_IMPORTED_MODULE_2__["BooksService"]])
    ], BestsellersComponent);
    return BestsellersComponent;
}());



/***/ }),

/***/ "./src/top/biographies/biographies.component.css":
/*!*******************************************************!*\
  !*** ./src/top/biographies/biographies.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.product-thumb {\n    padding: 15px 0px;\n    display: inline-block;\n    vertical-align: top;\n    max-width: 80%;\n    max-height: 80%;\n    /* width: 200px;\n    height: 350px; */\n    text-align: center;\n    box-sizing: border-box;\n    font-family: Roboto, Arial, sans-serif;\n    letter-spacing: 0;\n}\nem {\n    color: black;\n    font-size: 12px;\n}\nh2 {\n    font-size: 25px;\n    text-decoration: underline;\n    font-family: 'Comic Sans MS', cursive, sans-serif;\n    color: rgb(48, 47, 46);\n  }\n.wrap {\n    white-space: nowrap; \n    width: 200px; \n    overflow: hidden;\n    text-overflow: ellipsis; \n  }\n\n"

/***/ }),

/***/ "./src/top/biographies/biographies.component.html":
/*!********************************************************!*\
  !*** ./src/top/biographies/biographies.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <p>\n  biographies !\n</p> -->\n\n<app-side-category></app-side-category>\n<div><h2>Biographies</h2></div>\n<hr>\n<div class=\"col-sm-9\">\n  <div class=\"row\">\n    <div class=\"col-md-3\" *ngFor=\"let books of bookList\">\n      <div class=\"thumbnail product-thumb\">\n          <a routerLink=\"/books-details/{{ books.id }}\" style=\"cursor: pointer\">\n            <!-- <img src=\"../../assets/images/imageNotAvailable.jpg\" alt=\"Lights\" style=\"width:100%\" > -->\n            <img src=\"../../assets/images/{{books.id}}.jpg\" alt=\"Lights\" width=\"100%\" class=\"img-fluid rounded\">\n            <div class=\"product-brand\"> \n              <p class=\"wrap\">{{ books.name }}<br> <em> by {{ books.author }}</em></p>\n            </div>\n          </a>\n          <!-- <p>Description:{{ books.description }}</p> -->\n        <p>₹ {{ books.price }}</p>\n        <!-- <p>Author: {{ books.author }}</p> -->\n        <button type=\"button\" class=\"btn btn-success\" routerLink=\"/books-details/{{ books.id }}\" style=\"cursor: pointer\">\n          <span class=\"glyphicon glyphicon-plus-sign\"></span> Add to cart\n        </button>\n        \n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/top/biographies/biographies.component.ts":
/*!******************************************************!*\
  !*** ./src/top/biographies/biographies.component.ts ***!
  \******************************************************/
/*! exports provided: BiographiesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BiographiesComponent", function() { return BiographiesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_books_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app/books.service */ "./src/app/books.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BiographiesComponent = /** @class */ (function () {
    function BiographiesComponent(route, booksService) {
        this.route = route;
        this.booksService = booksService;
        this.books = [];
        this.bookList = [];
    }
    BiographiesComponent.prototype.ngOnInit = function () {
        this.getBioBooks();
    };
    BiographiesComponent.prototype.getBioBooks = function () {
        var _this = this;
        this.booksService.getBioBooks()
            .subscribe(function (books) {
            _this.bookList = books.json();
        });
    };
    BiographiesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-biographies',
            template: __webpack_require__(/*! ./biographies.component.html */ "./src/top/biographies/biographies.component.html"),
            styles: [__webpack_require__(/*! ./biographies.component.css */ "./src/top/biographies/biographies.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _app_books_service__WEBPACK_IMPORTED_MODULE_2__["BooksService"]])
    ], BiographiesComponent);
    return BiographiesComponent;
}());



/***/ }),

/***/ "./src/top/books-details/books-details.component.css":
/*!***********************************************************!*\
  !*** ./src/top/books-details/books-details.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".myfont {\n    font-family: 'Comic Sans MS', cursive, sans-serif;\n}"

/***/ }),

/***/ "./src/top/books-details/books-details.component.html":
/*!************************************************************!*\
  !*** ./src/top/books-details/books-details.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <p>\n  books-details works!\n</p> -->\n\n<div class=\"container\" style=\"background-color: white\" >\n    <div class=\"row\">\n      <div class=\"col-md-4 col-sm-4\">\n        <div class=\"product-image\">\n          <div class=\"view hm-zoom z-depth-2\" style=\"cursor: pointer\">\n              <!-- <img src=\"../../assets/images/imageNotAvailable.jpg\" alt=\"Lights\" style=\"width:100%\" > -->\n            <img src=\"../../assets/images/{{bookdetail.id}}.jpg\" alt=\"Lights\" width=\"80%\" class=\"img-fluid rounded\">\n          </div>\n          <br>\n          <div >\n            \n           <!-- <button class=\"btn btn-primary\" routerLink=\"/viewcart\">Add to Cart</button>-->\n           <button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#exampleModal\" style=\"width:100%; height:100%\">\n              Add to cart\n            </button>\n            \n            <!-- Modal -->\n            <div class=\"modal fade\" id=\"exampleModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n              <div class=\"modal-dialog\" role=\"document\">\n                <div class=\"modal-content\">\n                  <!-- <div class=\"modal-header\">\n                    <h5 class=\"modal-title\" id=\"exampleModalLabel\">Cart</h5>\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                      <span aria-hidden=\"true\">&times;</span>\n                    </button>\n                  </div> -->\n                  <div class=\"modal-body\">\n                    Your Product has been added to the cart successfully.\n                    \n                  </div>\n                  <div class=\"modal-footer\">\n                    <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\" routerLink=\"/home\">Continue Shopping</button>\n                    <!-- <button type=\"button\" class=\"btn btn-primary\">Save changes</button> -->\n                  </div>\n                </div>\n              </div>\n            </div>    \n           &nbsp; &nbsp; \n           <!-- <button class=\"btn btn-success\">Buy Now</button> -->\n           <!-- <button class=\"btn btn-success\" routerLink=\"/payment\">Buy Now</button> -->\n          </div>\n        </div>\n      </div>\n      <div class=\"col-sm-8 myfont\">\n        <div class=\"product-detail\">\n          <h5 class=\"product-head\" style=\"font-weight: bold ; font-size: 20px\">Book Details</h5>\n          <table class=\"table\" cellspacing=\"0\" style=\"max-height: 28px \">\n            <tbody>\n              <tr>\n                <th scope=\"row\">Book Name</th>\n                <td>\n                  {{bookdetail.name}}\n                </td>\n              </tr>\n              <tr>\n                <th scope=\"row\">Book Author</th>\n                <td>\n                  {{bookdetail.author}}\n                </td>\n              </tr>\n              <tr>\n                <th scope=\"row\">Price</th>\n                <td>\n                  {{bookdetail.price}}\n                </td>\n              </tr>\n              <tr>\n                <th scope=\"row\">Rating</th>\n                <td>\n                  {{bookdetail.rating}}\n                </td>\n              </tr>\n              <tr>\n                <th scope=\"row\">Rating Count</th>\n                <td>\n                  {{bookdetail.ratingCount}}\n                </td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/top/books-details/books-details.component.ts":
/*!**********************************************************!*\
  !*** ./src/top/books-details/books-details.component.ts ***!
  \**********************************************************/
/*! exports provided: BooksDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BooksDetailsComponent", function() { return BooksDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_books_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app/books.service */ "./src/app/books.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BooksDetailsComponent = /** @class */ (function () {
    function BooksDetailsComponent(route, booksService) {
        this.route = route;
        this.booksService = booksService;
        this.bookdetail = [];
        this.showbookdetail = '';
    }
    BooksDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            console.log(params['bookid']);
            _this.getBooksbyid(params['bookid']);
        });
    };
    BooksDetailsComponent.prototype.getBooksbyid = function (id) {
        var _this = this;
        this.booksService.getBooksbyid(id)
            .subscribe(function (books) {
            _this.bookdetail = books.json();
            // alert (this.bookdetail.name)
            _this.showbookdetail = 'true';
            console.log(_this.bookdetail.name);
        });
    };
    BooksDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-books-details',
            template: __webpack_require__(/*! ./books-details.component.html */ "./src/top/books-details/books-details.component.html"),
            styles: [__webpack_require__(/*! ./books-details.component.css */ "./src/top/books-details/books-details.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _app_books_service__WEBPACK_IMPORTED_MODULE_2__["BooksService"]])
    ], BooksDetailsComponent);
    return BooksDetailsComponent;
}());



/***/ }),

/***/ "./src/top/computer/computer.component.css":
/*!*************************************************!*\
  !*** ./src/top/computer/computer.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.product-thumb {\n    padding: 15px 0px;\n    display: inline-block;\n    vertical-align: top;\n    max-width: 80%;\n    max-height: 80%;\n    /* width: 200px;\n    height: 350px; */\n    text-align: center;\n    box-sizing: border-box;\n    font-family: Roboto, Arial, sans-serif;\n    letter-spacing: 0;\n}\n\nem {\n    color: black;\n    font-size: 12px;\n}\n\nh2 {\n    font-size: 25px;\n    text-decoration: underline;\n    font-family: 'Comic Sans MS', cursive, sans-serif;\n    color: rgb(46, 46, 48);\n  }\n\n.wrap {\n    white-space: nowrap; \n    width: 200px; \n    overflow: hidden;\n    text-overflow: ellipsis; \n  }\n\n"

/***/ }),

/***/ "./src/top/computer/computer.component.html":
/*!**************************************************!*\
  !*** ./src/top/computer/computer.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <p>\n  computer works!\n</p> -->\n\n\n<app-side-category></app-side-category>\n<div><h2>Computer Books </h2></div>\n<hr>\n<div class=\"col-sm-9\">\n  <div class=\"row\">\n    <div class=\"col-md-3\" *ngFor=\"let books of bookList\">\n      <div class=\"thumbnail product-thumb\">\n          <a routerLink=\"/books-details/{{ books.id }}\" style=\"cursor: pointer\">\n            <!-- <img src=\"../../assets/images/imageNotAvailable.jpg\" alt=\"Lights\" style=\"width:100%\" > -->\n            <img src=\"../../assets/images/{{books.id}}.jpg\" alt=\"Lights\" width=\"100%\" class=\"img-fluid rounded\">\n            <div class=\"product-brand\"> \n              <p class=\"wrap\">{{ books.name }}<br> <em> by {{ books.author }}</em></p>\n            </div>\n          </a>\n          <p>₹ {{ books.price }}</p>\n          <button type=\"button\" class=\"btn btn-success\" routerLink=\"/books-details/{{ books.id }}\" style=\"cursor: pointer\">\n            <span class=\"glyphicon glyphicon-plus-sign\"></span> Add to cart\n          </button>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/top/computer/computer.component.ts":
/*!************************************************!*\
  !*** ./src/top/computer/computer.component.ts ***!
  \************************************************/
/*! exports provided: ComputerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComputerComponent", function() { return ComputerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_books_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app/books.service */ "./src/app/books.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ComputerComponent = /** @class */ (function () {
    function ComputerComponent(route, booksService) {
        this.route = route;
        this.booksService = booksService;
        this.books = [];
        this.bookList = [];
    }
    ComputerComponent.prototype.ngOnInit = function () {
        this.getCompBooks();
    };
    ComputerComponent.prototype.getCompBooks = function () {
        var _this = this;
        this.booksService.getCompBooks()
            .subscribe(function (books) {
            _this.bookList = books.json();
        });
    };
    ComputerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-computer',
            template: __webpack_require__(/*! ./computer.component.html */ "./src/top/computer/computer.component.html"),
            styles: [__webpack_require__(/*! ./computer.component.css */ "./src/top/computer/computer.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _app_books_service__WEBPACK_IMPORTED_MODULE_2__["BooksService"]])
    ], ComputerComponent);
    return ComputerComponent;
}());



/***/ }),

/***/ "./src/top/entertainment/entertainment.component.css":
/*!***********************************************************!*\
  !*** ./src/top/entertainment/entertainment.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.product-thumb {\n    padding: 15px 0px;\n    display: inline-block;\n    vertical-align: top;\n    max-width: 80%;\n    max-height: 80%;\n    /* width: 200px;\n    height: 350px; */\n    text-align: center;\n    box-sizing: border-box;\n    font-family: Roboto, Arial, sans-serif;\n    letter-spacing: 0;\n}\n\nem {\n    color: black;\n    font-size: 12px;\n}\n\nh2 {\n    font-size: 25px;\n    text-decoration: underline;\n    font-family: 'Comic Sans MS', cursive, sans-serif;\n    color: rgb(46, 46, 48);\n  }\n\n.wrap {\n    white-space: nowrap; \n    width: 200px; \n    overflow: hidden;\n    text-overflow: ellipsis; \n  }\n\n"

/***/ }),

/***/ "./src/top/entertainment/entertainment.component.html":
/*!************************************************************!*\
  !*** ./src/top/entertainment/entertainment.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <p>\n  entertainment works!\n</p> -->\n\n<!-- <p>\n  biographies !\n</p> -->\n\n<app-side-category></app-side-category>\n<div><h2>Entertainment</h2></div>\n<hr>\n<div class=\"col-sm-9\">\n  <div class=\"row\">\n    <div class=\"col-md-3\" *ngFor=\"let books of bookList\">\n      <div class=\"thumbnail product-thumb\">\n          <a routerLink=\"/books-details/{{ books.id }}\" style=\"cursor: pointer\">\n            <!-- <img src=\"../../assets/images/imageNotAvailable.jpg\" alt=\"Lights\" style=\"width:100%\" > -->\n            <img src=\"../../assets/images/{{books.id}}.jpg\" alt=\"Lights\" width=\"100%\" class=\"img-fluid rounded\">\n            <div class=\"product-brand\"> \n              <p class=\"wrap\">{{ books.name }}<br> <em> by {{ books.author }}</em></p>\n            </div>\n          </a>\n          <!-- <p>Description:{{ books.description }}</p> -->\n        <p>₹ {{ books.price }}</p>\n        <!-- <p>Author: {{ books.author }}</p> -->\n        <button type=\"button\" class=\"btn btn-success\" routerLink=\"/books-details/{{ books.id }}\" style=\"cursor: pointer\">\n          <span class=\"glyphicon glyphicon-plus-sign\"></span> Add to cart\n        </button>\n        \n  </div>\n</div>\n\n\n"

/***/ }),

/***/ "./src/top/entertainment/entertainment.component.ts":
/*!**********************************************************!*\
  !*** ./src/top/entertainment/entertainment.component.ts ***!
  \**********************************************************/
/*! exports provided: EntertainmentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntertainmentComponent", function() { return EntertainmentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_books_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app/books.service */ "./src/app/books.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EntertainmentComponent = /** @class */ (function () {
    function EntertainmentComponent(route, booksService) {
        this.route = route;
        this.booksService = booksService;
        this.books = [];
        this.bookList = [];
    }
    EntertainmentComponent.prototype.ngOnInit = function () {
        this.getEntBooks();
    };
    EntertainmentComponent.prototype.getEntBooks = function () {
        var _this = this;
        this.booksService.getEntBooks()
            .subscribe(function (books) {
            _this.bookList = books.json();
        });
    };
    EntertainmentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-entertainment',
            template: __webpack_require__(/*! ./entertainment.component.html */ "./src/top/entertainment/entertainment.component.html"),
            styles: [__webpack_require__(/*! ./entertainment.component.css */ "./src/top/entertainment/entertainment.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _app_books_service__WEBPACK_IMPORTED_MODULE_2__["BooksService"]])
    ], EntertainmentComponent);
    return EntertainmentComponent;
}());



/***/ }),

/***/ "./src/top/history/history.component.css":
/*!***********************************************!*\
  !*** ./src/top/history/history.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.product-thumb {\n    padding: 15px 0px;\n    display: inline-block;\n    vertical-align: top;\n    max-width: 80%;\n    max-height: 80%;\n    /* width: 200px;\n    height: 350px; */\n    text-align: center;\n    box-sizing: border-box;\n    font-family: Roboto, Arial, sans-serif;\n    letter-spacing: 0;\n}\n\nem {\n    color: black;\n    font-size: 12px;\n}\n\nh2 {\n    font-size: 25px;\n    text-decoration: underline;\n    font-family: 'Comic Sans MS', cursive, sans-serif;\n    color: rgb(46, 46, 48);\n  }\n\n.wrap {\n    white-space: nowrap; \n    width: 200px; \n    overflow: hidden;\n    text-overflow: ellipsis; \n  }\n\n"

/***/ }),

/***/ "./src/top/history/history.component.html":
/*!************************************************!*\
  !*** ./src/top/history/history.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <p>\n  history works!\n</p> -->\n\n<!-- <p>\n  entertainment works!\n</p> -->\n\n<!-- <p>\n  biographies !\n</p> -->\n\n<app-side-category></app-side-category>\n<div><h2>History</h2></div>\n<hr>\n<div class=\"col-sm-9\">\n  <div class=\"row\">\n    <div class=\"col-md-3\" *ngFor=\"let books of bookList\">\n      <div class=\"thumbnail product-thumb\">\n          <a routerLink=\"/books-details/{{ books.id }}\" style=\"cursor: pointer\">\n            <!-- <img src=\"../../assets/images/imageNotAvailable.jpg\" alt=\"Lights\" style=\"width:100%\" > -->\n            <img src=\"../../assets/images/{{books.id}}.jpg\" alt=\"Lights\" width=\"100%\" class=\"img-fluid rounded\">\n            <div class=\"product-brand\"> \n              <p class=\"wrap\">{{ books.name }}<br> <em> by {{ books.author }}</em></p>\n            </div>\n          </a>\n          <!-- <p>Description:{{ books.description }}</p> -->\n        <p>₹ {{ books.price }}</p>\n        <!-- <p>Author: {{ books.author }}</p> -->\n        <button type=\"button\" class=\"btn btn-success\" routerLink=\"/books-details/{{ books.id }}\" style=\"cursor: pointer\">\n          <span class=\"glyphicon glyphicon-plus-sign\"></span> Add to cart\n        </button>\n        \n  </div>\n</div>\n\n\n\n"

/***/ }),

/***/ "./src/top/history/history.component.ts":
/*!**********************************************!*\
  !*** ./src/top/history/history.component.ts ***!
  \**********************************************/
/*! exports provided: HistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryComponent", function() { return HistoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_books_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app/books.service */ "./src/app/books.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HistoryComponent = /** @class */ (function () {
    function HistoryComponent(route, booksService) {
        this.route = route;
        this.booksService = booksService;
        this.books = [];
        this.bookList = [];
    }
    HistoryComponent.prototype.ngOnInit = function () {
        this.getHistBooks();
    };
    HistoryComponent.prototype.getHistBooks = function () {
        var _this = this;
        this.booksService.getHistBooks()
            .subscribe(function (books) {
            _this.bookList = books.json();
        });
    };
    HistoryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-history',
            template: __webpack_require__(/*! ./history.component.html */ "./src/top/history/history.component.html"),
            styles: [__webpack_require__(/*! ./history.component.css */ "./src/top/history/history.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _app_books_service__WEBPACK_IMPORTED_MODULE_2__["BooksService"]])
    ], HistoryComponent);
    return HistoryComponent;
}());



/***/ }),

/***/ "./src/top/kids-books/kids-books.component.css":
/*!*****************************************************!*\
  !*** ./src/top/kids-books/kids-books.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.product-thumb {\n    padding: 15px 0px;\n    display: inline-block;\n    vertical-align: top;\n    max-width: 80%;\n    max-height: 80%;\n    /* width: 200px;\n    height: 350px; */\n    text-align: center;\n    box-sizing: border-box;\n    font-family: Roboto, Arial, sans-serif;\n    letter-spacing: 0;\n}\nem {\n    color: black;\n    font-size: 12px;\n}\nh2 {\n    font-size: 25px;\n    text-decoration: underline;\n    font-family: 'Comic Sans MS', cursive, sans-serif;\n    color: rgb(46, 46, 48);\n  }\n.wrap {\n    white-space: nowrap; \n    width: 200px; \n    overflow: hidden;\n    text-overflow: ellipsis; \n  }\n"

/***/ }),

/***/ "./src/top/kids-books/kids-books.component.html":
/*!******************************************************!*\
  !*** ./src/top/kids-books/kids-books.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <p>\n  kids-books works!\n</p> -->\n\n<app-side-category></app-side-category>\n  <div><h2>Kids Books</h2></div>\n  <hr>\n  <div class=\"col-sm-9\">\n    <div class=\"row\">\n      <div class=\"col-md-3\" *ngFor=\"let books of bookList\">\n        <div class=\"thumbnail product-thumb\">\n            <a routerLink=\"/books-details/{{ books.id}}\" style=\"cursor: pointer\">\n              <!-- <img src=\"../../assets/images/imageNotAvailable.jpg\" alt=\"Lights\" style=\"width:100%\" > -->\n              <img src=\"../../assets/images/{{books.id}}.jpg\" alt=\"Lights\" width=\"100%\" class=\"img-fluid rounded\">\n              <div class=\"product-brand\"> \n                <p class=\"wrap\">{{ books.name }}<br> <em> by {{ books.author }}</em></p>\n              </div>\n            </a>\n            <!-- <p>Description:{{ books.description }}</p> -->\n          <p>₹ {{ books.price }}</p>\n          <!-- <p>Author: {{ books.author }}</p> -->\n          <button type=\"button\" class=\"btn btn-success\" routerLink=\"/books-details/{{ books.id }}\" style=\"cursor: pointer\">\n            <span class=\"glyphicon glyphicon-plus-sign\"></span> Add to cart\n          </button>\n          \n    </div>\n  </div>\n  "

/***/ }),

/***/ "./src/top/kids-books/kids-books.component.ts":
/*!****************************************************!*\
  !*** ./src/top/kids-books/kids-books.component.ts ***!
  \****************************************************/
/*! exports provided: KidsBooksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KidsBooksComponent", function() { return KidsBooksComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_books_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app/books.service */ "./src/app/books.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var KidsBooksComponent = /** @class */ (function () {
    function KidsBooksComponent(route, booksService) {
        this.route = route;
        this.booksService = booksService;
        this.books = [];
        this.bookList = [];
    }
    KidsBooksComponent.prototype.ngOnInit = function () {
        this.getKidsBooks();
    };
    KidsBooksComponent.prototype.getKidsBooks = function () {
        var _this = this;
        this.booksService.getKidsBooks()
            .subscribe(function (books) {
            _this.bookList = books.json();
        });
    };
    KidsBooksComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-kids-books',
            template: __webpack_require__(/*! ./kids-books.component.html */ "./src/top/kids-books/kids-books.component.html"),
            styles: [__webpack_require__(/*! ./kids-books.component.css */ "./src/top/kids-books/kids-books.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _app_books_service__WEBPACK_IMPORTED_MODULE_2__["BooksService"]])
    ], KidsBooksComponent);
    return KidsBooksComponent;
}());



/***/ }),

/***/ "./src/top/new-release/new-release.component.css":
/*!*******************************************************!*\
  !*** ./src/top/new-release/new-release.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.product-thumb {\n    padding: 25px 15px;\n    display: inline-block;\n    vertical-align: top;\n    width: 80%;\n    width: 200px;\n    height: 350px;\n    text-align: center;\n    box-sizing: border-box;\n    font-family: Roboto, Arial, sans-serif;\n    letter-spacing: 0;\n}\n\nem {\n    color: black;\n    font-size: 12px;\n}\n\nh2 {\n    font-size: 25px;\n    text-decoration: underline;\n    font-family: 'Comic Sans MS', cursive, sans-serif;\n    color: rgb(46, 46, 48);\n  }\n\n.wrap {\n    white-space: nowrap; \n    width: 200px; \n    overflow: hidden;\n    text-overflow: ellipsis; \n  }"

/***/ }),

/***/ "./src/top/new-release/new-release.component.html":
/*!********************************************************!*\
  !*** ./src/top/new-release/new-release.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <p>\n  adults works!\n</p> -->\n\n<app-side-category></app-side-category>\n<div class=\"underline\"><h2>New Releases </h2></div>\n<hr>\n<div class=\"col-sm-9\">\n  <div class=\"row\">\n    <div class=\"col-md-3\" *ngFor=\"let books of bookList\">\n      <div class=\"thumbnail product-thumb\">\n          <a routerLink=\"/books-details/{{ books.id}}\" style=\"cursor: pointer\">\n            <!-- <img src=\"../../assets/images/imageNotAvailable.jpg\" alt=\"Lights\" style=\"width:100%\" > -->\n            <img src=\"../../assets/images/{{books.id}}.jpg\" alt=\"Lights\" width=\"100%\" class=\"img-fluid rounded\">\n            <div class=\"product-brand\"> \n              <p class=\"wrap\">{{ books.name }}<br> <em> by {{ books.author }}</em></p>\n            </div>\n          </a>\n          <!-- <p>Description:{{ books.description }}</p> -->\n        <p>₹ {{ books.price }}</p>\n        <!-- <p>Author: {{ books.author }}</p> -->\n        <button type=\"button\" class=\"btn btn-success\" routerLink=\"/books-details/{{ books.id }}\" style=\"cursor: pointer\">\n          <span class=\"glyphicon glyphicon-plus-sign\"></span> Add to cart\n        </button>\n        \n  </div>\n</div>\n"

/***/ }),

/***/ "./src/top/new-release/new-release.component.ts":
/*!******************************************************!*\
  !*** ./src/top/new-release/new-release.component.ts ***!
  \******************************************************/
/*! exports provided: NewReleaseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewReleaseComponent", function() { return NewReleaseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_books_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app/books.service */ "./src/app/books.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NewReleaseComponent = /** @class */ (function () {
    function NewReleaseComponent(route, booksService) {
        this.route = route;
        this.booksService = booksService;
        this.books = [];
        this.bookList = [];
    }
    NewReleaseComponent.prototype.ngOnInit = function () {
        this.getNewBooks();
    };
    NewReleaseComponent.prototype.getNewBooks = function () {
        var _this = this;
        this.booksService.getNewBooks()
            .subscribe(function (books) {
            _this.bookList = books.json();
        });
    };
    NewReleaseComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-new-release',
            template: __webpack_require__(/*! ./new-release.component.html */ "./src/top/new-release/new-release.component.html"),
            styles: [__webpack_require__(/*! ./new-release.component.css */ "./src/top/new-release/new-release.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _app_books_service__WEBPACK_IMPORTED_MODULE_2__["BooksService"]])
    ], NewReleaseComponent);
    return NewReleaseComponent;
}());



/***/ }),

/***/ "./src/top/top.component.css":
/*!***********************************!*\
  !*** ./src/top/top.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\nheader {\n    font-size: 20px;\n    margin-top: 10px;\n    margin-bottom: 10px;\n}\n\n\n.product-thumb {\n    padding: 25px 15px;\n    display: inline-block;\n    vertical-align: top;\n    width: 80%;\n    width: 200px;\n    height: 350px;\n    text-align: center;\n    box-sizing: border-box;\n    font-family: Roboto, Arial, sans-serif;\n    letter-spacing: 0;\n    background-color: white;\n    margin-bottom: 20px;\n    border: 0px;\n}\n\n\nem {\n    color: black;\n    font-size: 12px;\n}\n\n\nh2 {\n    text-decoration: underline;\n    font-family: 'Times New Roman', Times, serif;\n  }\n\n\nh3 {\n    height: 32px;\n}\n\n\n.breadcrumb {\n    background-color:white;\n    font-size: 20px;\n    font-family: 'Comic Sans MS', cursive, sans-serif;\n    margin: 0px;\n}\n\n\nhr {\n    margin:10px;\n    color: cadetblue;\n    border-width: 5px;\n}\n\n\n.wrap {\n    white-space: nowrap; \n    width: 200px; \n    overflow: hidden;\n    text-overflow: ellipsis; \n  }\n"

/***/ }),

/***/ "./src/top/top.component.html":
/*!************************************!*\
  !*** ./src/top/top.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-side-category></app-side-category>\n  <div class=\" container-fluid col-sm-10\">\n  <div style=\"background-color: white\">\n      <nav aria-label=\"breadcrumb\">\n          <ol class=\"breadcrumb\">\n            <li class=\"breadcrumb-item\" aria-current=\"page\">New Release</li>\n            <a routerLink=\"/new-release\"><h4 style=\"float:right ; padding-right: 5px; font-weight: bold\">> View All</h4></a>\n          </ol>\n        </nav> \n        <hr>\n   \n  <div class=\"row\">\n    <div class=\"col-md-3\" *ngFor=\"let books of bookList\">\n      <div class=\" thumbnail product-thumb\">\n          <a routerLink=\"/books-details/{{ books.id}}\" style=\"cursor: pointer\">\n            <!-- <img src= \"../assets/images/adults_book_2.jpg\" alt=\"Lights\" style=\"width:100% \"> -->\n            <img src=\"../../assets/images/{{books.id}}.jpg\" alt=\"Lights\" width=\"100%\" class=\"img-fluid rounded\">\n            <div class=\"product-brand\"> \n              <p class=\"wrap\">{{ books.name }}<br> <em> by {{ books.author }}</em></p>\n            </div>\n          </a>\n          <!-- <p>Description:{{ books.description }}</p> -->\n        <p>₹ {{ books.price }}</p>\n        <!-- <p>Author: {{ books.author }}</p> -->\n        <button type=\"button\" class=\"btn btn-success\" routerLink=\"/books-details/{{ books.id }}\" style=\"cursor: pointer\">\n          <span class=\"glyphicon glyphicon-plus-sign\"></span> Add to cart\n        </button>\n        \n      </div>\n    </div>\n  </div>\n</div>\n\n<app-topbest></app-topbest>\n</div>\n\n\n"

/***/ }),

/***/ "./src/top/top.component.ts":
/*!**********************************!*\
  !*** ./src/top/top.component.ts ***!
  \**********************************/
/*! exports provided: TopComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopComponent", function() { return TopComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_books_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app/books.service */ "./src/app/books.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TopComponent = /** @class */ (function () {
    function TopComponent(route, booksService) {
        this.route = route;
        this.booksService = booksService;
        this.books = [];
        this.bookList = [];
    }
    TopComponent.prototype.ngOnInit = function () {
        this.getNewBooks();
    };
    TopComponent.prototype.getNewBooks = function () {
        var _this = this;
        this.booksService.getNewBooks()
            .subscribe(function (books) {
            _this.bookList = books.json();
        });
    };
    TopComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-top',
            template: __webpack_require__(/*! ./top.component.html */ "./src/top/top.component.html"),
            styles: [__webpack_require__(/*! ./top.component.css */ "./src/top/top.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _app_books_service__WEBPACK_IMPORTED_MODULE_2__["BooksService"]])
    ], TopComponent);
    return TopComponent;
}());



/***/ }),

/***/ "./src/top/topbest/topbest.component.css":
/*!***********************************************!*\
  !*** ./src/top/topbest/topbest.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\nheader {\n    font-size: 20px;\n    margin-top: 10px;\n    margin-bottom: 10px;\n}\n\n\n/* .product-thumb {\n    padding: 15px 0px;\n    display: inline-block;\n    vertical-align: top;\n    max-width: 80%;\n    max-height: 80%;\n     width: 200px;\n    height: 350px; \n    text-align: center;\n    box-sizing: border-box;\n    font-family: Roboto, Arial, sans-serif;\n    letter-spacing: 0;\n    background-color: white;\n} */\n\n\n.product-thumb {\n    padding: 25px 15px;\n    display: inline-block;\n    vertical-align: top;\n    width: 80%;\n    width: 200px;\n    height: 350px;\n    text-align: center;\n    box-sizing: border-box;\n    font-family: Roboto, Arial, sans-serif;\n    letter-spacing: 0;\n    background-color: white;\n    margin-bottom: 20px;\n    border: 0px;\n}\n\n\nem {\n    color: black;\n    font-size: 12px;\n}\n\n\nh2 {\n    text-decoration: underline;\n    font-family: 'Times New Roman', Times, serif;\n  }\n\n\nh3 {\n    height: 32px;\n}\n\n\n.breadcrumb {\n    background-color:white;\n    font-size: 20px;\n    font-family: 'Comic Sans MS', cursive, sans-serif;\n    margin: 0px;\n}\n\n\nhr {\n    margin:10px;\n    color: cadetblue;\n    border-width: 5px;\n}\n\n\n.wrap {\n    white-space: nowrap; \n    width: 200px; \n    overflow: hidden;\n    text-overflow: ellipsis; \n  }\n"

/***/ }),

/***/ "./src/top/topbest/topbest.component.html":
/*!************************************************!*\
  !*** ./src/top/topbest/topbest.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " <br>\n    <div class=\" container-fluid\" style=\"background-color: white\">\n        <nav aria-label=\"breadcrumb\" >\n            <ol class=\"breadcrumb\">\n              <li class=\"breadcrumb-item\" aria-current=\"page\">Best Seller</li>\n              <a routerLink=\"/bestsellers\"><h4 style=\"float:right ; padding-right: 5px\">> View All</h4></a>\n            </ol>\n          </nav> \n          <hr>\n      \n    <div class=\"row\">\n      <div class=\"col-md-3\" *ngFor=\"let books of bookList\">\n        <div class=\" thumbnail product-thumb\">\n            <a routerLink=\"/books-details/{{ books.id}}\" style=\"cursor: pointer\">\n              <!-- <img src=\"../../assets/images/imageNotAvailable.jpg\" alt=\"Lights\" style=\"width:100%\" > -->\n              <img src=\"../../assets/images/{{books.id}}.jpg\" alt=\"Lights\" width=\"100%\" class=\"img-fluid rounded\">\n              <div class=\"product-brand\"> \n                <p class=\"wrap\">{{ books.name }}<br> <em> by {{ books.author }}</em></p>\n              </div>\n            </a>\n          <p>₹ {{ books.price }}</p>\n          <button type=\"button\" class=\"btn btn-success\" routerLink=\"/books-details/{{ books.id }}\" style=\"cursor: pointer\">\n            <span class=\"glyphicon glyphicon-plus-sign\"></span> Add to cart\n          </button>\n          \n        </div>\n      </div>\n    </div>\n  </div>\n\n"

/***/ }),

/***/ "./src/top/topbest/topbest.component.ts":
/*!**********************************************!*\
  !*** ./src/top/topbest/topbest.component.ts ***!
  \**********************************************/
/*! exports provided: TopbestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopbestComponent", function() { return TopbestComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_books_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app/books.service */ "./src/app/books.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TopbestComponent = /** @class */ (function () {
    function TopbestComponent(route, booksService) {
        this.route = route;
        this.booksService = booksService;
        this.books = [];
        this.bookList = [];
    }
    TopbestComponent.prototype.ngOnInit = function () {
        this.getBestBooks();
    };
    TopbestComponent.prototype.getBestBooks = function () {
        var _this = this;
        this.booksService.getBestBooks()
            .subscribe(function (books) {
            _this.bookList = books.json();
        });
    };
    TopbestComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-topbest',
            template: __webpack_require__(/*! ./topbest.component.html */ "./src/top/topbest/topbest.component.html"),
            styles: [__webpack_require__(/*! ./topbest.component.css */ "./src/top/topbest/topbest.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _app_books_service__WEBPACK_IMPORTED_MODULE_2__["BooksService"]])
    ], TopbestComponent);
    return TopbestComponent;
}());



/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/vagrant/pageturners-api/angular/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map