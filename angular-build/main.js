(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/skylerhogan/Desktop/Dev/orbit-report/orbit-report/src/main.ts */"zUnb");


/***/ }),

/***/ "AytR":
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
const environment = {
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

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _satellite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./satellite */ "oSRY");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _orbit_list_orbit_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./orbit-list/orbit-list.component */ "rdjL");
/* harmony import */ var _orbit_counts_orbit_counts_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./orbit-counts/orbit-counts.component */ "fWtK");




class AppComponent {
    constructor() {
        this.title = 'orbit-report';
        this.sourceList = [];
        this.displayList = [];
        let satellitesUrl = 'https://handlers.education.launchcode.org/static/satellites.json';
        window.fetch(satellitesUrl).then(function (response) {
            response.json().then(function (data) {
                let fetchedSatellites = data.satellites;
                for (let i = 0; i < fetchedSatellites.length; i++) {
                    let satellite = new _satellite__WEBPACK_IMPORTED_MODULE_0__["Satellite"](fetchedSatellites[i].name, fetchedSatellites[i].type, fetchedSatellites[i].launchDate, fetchedSatellites[i].orbitType, fetchedSatellites[i].operational);
                    this.sourceList.push(satellite);
                }
                ;
                this.displayList = this.sourceList.slice(0);
            }.bind(this));
        }.bind(this));
    }
    search(searchTerm) {
        let matchingSatellites = [];
        searchTerm = searchTerm.toLowerCase();
        for (let i = 0; i < this.sourceList.length; i++) {
            let name = this.sourceList[i].name.toLowerCase();
            let type = this.sourceList[i].type.toLowerCase();
            let orbitType = this.sourceList[i].orbitType.toLowerCase();
            if (name.indexOf(searchTerm) >= 0) {
                matchingSatellites.push(this.sourceList[i]);
            }
            else if (type.indexOf(searchTerm) >= 0) {
                matchingSatellites.push(this.sourceList[i]);
            }
            else if (orbitType.indexOf(searchTerm) >= 0) {
                matchingSatellites.push(this.sourceList[i]);
            }
        }
        // assign this.displayList to be the array of matching satellites
        // this will cause Angular to re-make the table, but now only containing matches
        this.displayList = matchingSatellites;
    }
}
AppComponent.??fac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 8, vars: 2, consts: [[3, "satellites"], [1, "search-form"], ["placeholder", "Sirius 1", 3, "keyup.enter"], ["searchTerm", ""], [3, "click"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](0, "app-orbit-list", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "input", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("keyup.enter", function AppComponent_Template_input_keyup_enter_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????reference"](3); return ctx.search(_r0.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](4, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function AppComponent_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????reference"](3); return ctx.search(_r0.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](5, "Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](6, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](7, "app-orbit-counts", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("satellites", ctx.displayList);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("satellites", ctx.displayList);
    } }, directives: [_orbit_list_orbit_list_component__WEBPACK_IMPORTED_MODULE_2__["OrbitListComponent"], _orbit_counts_orbit_counts_component__WEBPACK_IMPORTED_MODULE_3__["OrbitCountsComponent"]], styles: [".search-form[_ngcontent-%COMP%] {\n  margin-bottom: 40px;\n}\n\n.searchTerm[_ngcontent-%COMP%] {\n  font-size: 18px;\n  border-radius: 4px;\n}\n\nbutton[_ngcontent-%COMP%] {\n  font-family: \"OpenSans\";\n  font-weight: bold;\n  margin-left: 10px;\n  color: #eef1ec;\n  background-color: #34495e;\n  border-color: #d5ccbc;\n  border-radius: 4px;\n  padding: 2px 5px;\n  font-size: 18px;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCx5QkFBeUI7RUFDekIscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGVBQWU7QUFDakIiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VhcmNoLWZvcm0ge1xuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xufVxuXG4uc2VhcmNoVGVybSB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuXG5idXR0b24ge1xuICBmb250LWZhbWlseTogXCJPcGVuU2Fuc1wiO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIGNvbG9yOiAjZWVmMWVjO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQ0OTVlO1xuICBib3JkZXItY29sb3I6ICNkNWNjYmM7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgcGFkZGluZzogMnB4IDVweDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4iXX0= */"] });
;


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _orbit_list_orbit_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./orbit-list/orbit-list.component */ "rdjL");
/* harmony import */ var _orbit_counts_orbit_counts_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./orbit-counts/orbit-counts.component */ "fWtK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");





class AppModule {
}
AppModule.??fac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????defineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"]] });
AppModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????defineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["????setNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"],
        _orbit_list_orbit_list_component__WEBPACK_IMPORTED_MODULE_2__["OrbitListComponent"],
        _orbit_counts_orbit_counts_component__WEBPACK_IMPORTED_MODULE_3__["OrbitCountsComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]] }); })();


/***/ }),

/***/ "fWtK":
/*!********************************************************!*\
  !*** ./src/app/orbit-counts/orbit-counts.component.ts ***!
  \********************************************************/
/*! exports provided: OrbitCountsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrbitCountsComponent", function() { return OrbitCountsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class OrbitCountsComponent {
    constructor() { }
    ngOnInit() {
    }
    countType(type) {
        let total = 0;
        for (let satellite of this.satellites) {
            if (satellite.type === type) {
                total++;
            }
        }
        return total;
    }
}
OrbitCountsComponent.??fac = function OrbitCountsComponent_Factory(t) { return new (t || OrbitCountsComponent)(); };
OrbitCountsComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: OrbitCountsComponent, selectors: [["app-orbit-counts"]], inputs: { satellites: "satellites" }, decls: 31, vars: 7, consts: [[1, "counts"]], template: function OrbitCountsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Satellite Counts:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, " Total: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, " Space Debris: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, " Communication: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, " Probe: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, " Positioning: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, " Space Station: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28, " Telescope: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.satellites.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.countType("Space Debris"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.countType("Communication"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.countType("Probe"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.countType("Positioning"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.countType("Space Station"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.countType("Telescope"));
    } }, styles: [".counts[_ngcontent-%COMP%] {\n  background: #34495e;\n  color: #fff;\n  border-radius: 5px;\n  width: 225px;\n}\n\n.counts[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  padding: 8px;\n}\n\n.counts[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  float: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9yYml0LWNvdW50cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtBQUNkIiwiZmlsZSI6Im9yYml0LWNvdW50cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvdW50cyB7XG4gIGJhY2tncm91bmQ6ICMzNDQ5NWU7XG4gIGNvbG9yOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHdpZHRoOiAyMjVweDtcbn1cblxuLmNvdW50cyBkaXYge1xuICBwYWRkaW5nOiA4cHg7XG59XG5cbi5jb3VudHMgc3BhbiB7XG4gIGZsb2F0OiByaWdodDtcbn1cbiJdfQ== */"] });
;


/***/ }),

/***/ "oSRY":
/*!******************************!*\
  !*** ./src/app/satellite.ts ***!
  \******************************/
/*! exports provided: Satellite */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Satellite", function() { return Satellite; });
class Satellite {
    constructor(name, type, launchDate, orbitType, operational) {
        this.name = name;
        this.type = type;
        this.launchDate = launchDate;
        this.orbitType = orbitType;
        this.operational = operational;
    }
    ;
    checkDebris() {
        if (this.type === "Space Debris")
            return true;
    }
    ;
}
;


/***/ }),

/***/ "rdjL":
/*!****************************************************!*\
  !*** ./src/app/orbit-list/orbit-list.component.ts ***!
  \****************************************************/
/*! exports provided: OrbitListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrbitListComponent", function() { return OrbitListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");


function OrbitListComponent_tr_14_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "th", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function OrbitListComponent_tr_14_Template_th_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r3); const satellite_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r2.sort(satellite_r1.type); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const satellite_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](satellite_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("warning", satellite_r1.checkDebris());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", satellite_r1.type, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](satellite_r1.operational);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](satellite_r1.orbitType);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](satellite_r1.launchDate);
} }
class OrbitListComponent {
    constructor() { }
    ngOnInit() {
    }
    sort(column) {
        // array.sort modifies the array, sorting the items based on the given compare function
        this.satellites.sort(function (a, b) {
            if (a[column] < b[column]) {
                return -1;
            }
            else if (a[column] > b[column]) {
                return 1;
            }
            return 0;
        });
    }
}
OrbitListComponent.??fac = function OrbitListComponent_Factory(t) { return new (t || OrbitListComponent)(); };
OrbitListComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: OrbitListComponent, selectors: [["app-orbit-list"]], inputs: { satellites: "satellites" }, decls: 15, vars: 1, consts: [[1, "header-row"], [1, "sortable", "header", 3, "click"], [1, "header"], [4, "ngFor", "ngForOf"], [3, "click"]], template: function OrbitListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Orbit Report");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "tr", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "th", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function OrbitListComponent_Template_th_click_4_listener() { return ctx.sort("name"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "th", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function OrbitListComponent_Template_th_click_6_listener() { return ctx.sort("type"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "Operational");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "Orbit Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "Launch Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](14, OrbitListComponent_tr_14_Template, 11, 7, "tr", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.satellites);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], styles: [".warning[_ngcontent-%COMP%] {\n  background-color: #964343;\n  color: #eef1ec;\n}\n\ntable[_ngcontent-%COMP%] {\n  color: #111;\n  border-radius: 5px;\n  overflow: hidden;\n  margin: 12px 0;\n  min-width: 300px;\n  background: #d5ccbc;\n}\n\n.header[_ngcontent-%COMP%] {\n  font-weight: bold;\n  background-color: #d5ccbc;\n  color: #313641;\n}\n\n.header-row[_ngcontent-%COMP%] {\n  background: #34495e;\n  color: #eef1ec;\n}\n\nth[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {\n  text-align: left;\n  margin: 5px 10px;\n  padding: 6px;\n  font-weight: normal;\n}\n\ntr[_ngcontent-%COMP%]:nth-child(even) {\n  background-color: #eef1ec;\n}\n\n.sortable[_ngcontent-%COMP%] {\n  cursor: pointer;\n  color: #eef1ec;\n  font-weight: bold;\n  background-color: #34495e;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9yYml0LWxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUF5QjtFQUN6QixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIseUJBQXlCO0VBQ3pCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsY0FBYztBQUNoQjs7QUFFQTs7RUFFRSxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsY0FBYztFQUNkLGlCQUFpQjtFQUNqQix5QkFBeUI7QUFDM0IiLCJmaWxlIjoib3JiaXQtbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndhcm5pbmcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTY0MzQzO1xuICBjb2xvcjogI2VlZjFlYztcbn1cblxudGFibGUge1xuICBjb2xvcjogIzExMTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBtYXJnaW46IDEycHggMDtcbiAgbWluLXdpZHRoOiAzMDBweDtcbiAgYmFja2dyb3VuZDogI2Q1Y2NiYztcbn1cblxuLmhlYWRlciB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDVjY2JjO1xuICBjb2xvcjogIzMxMzY0MTtcbn1cblxuLmhlYWRlci1yb3cge1xuICBiYWNrZ3JvdW5kOiAjMzQ0OTVlO1xuICBjb2xvcjogI2VlZjFlYztcbn1cblxudGgsXG50ZCB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIG1hcmdpbjogNXB4IDEwcHg7XG4gIHBhZGRpbmc6IDZweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbn1cblxudHI6bnRoLWNoaWxkKGV2ZW4pIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZjFlYztcbn1cblxuLnNvcnRhYmxlIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBjb2xvcjogI2VlZjFlYztcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzNDQ5NWU7XG59Il19 */"] });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map