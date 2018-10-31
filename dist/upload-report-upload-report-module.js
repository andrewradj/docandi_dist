(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["upload-report-upload-report-module"],{

/***/ "./src/app/pipes/money.pipe.ts":
/*!*************************************!*\
  !*** ./src/app/pipes/money.pipe.ts ***!
  \*************************************/
/*! exports provided: MoneyPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoneyPipe", function() { return MoneyPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MoneyPipe = /** @class */ (function () {
    function MoneyPipe() {
    }
    MoneyPipe.prototype.transform = function (val) {
        // Format the output to display any way you want here.
        // For instance:
        val = Number(val);
        if (val !== undefined && val !== null) {
            return val.toLocaleString('en-us');
        }
        else {
            return '';
        }
    };
    MoneyPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'money'
        })
    ], MoneyPipe);
    return MoneyPipe;
}());



/***/ }),

/***/ "./src/app/upload-report/components/file-review/file-review.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/upload-report/components/file-review/file-review.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sub-content {\r\n  padding-top: 30px;\r\n}  \r\n.text-16 {\r\n  font-size: 16px;\r\n}  \r\n.content-file-review {\r\n  height: 377px !important;\r\n}  \r\n.sub-table {\r\n    width: 60%;\r\n    margin: auto; }  \r\n.sub-table .table {\r\n      border: 1px solid #ccc; }  \r\n.sub-table th {\r\n      background: #f2f2f2;\r\n      text-transform: uppercase; }  \r\n.sub-table td {\r\n      text-align: left; }  \r\n.text-14 {\r\n    font-size: 14px; }  \r\n.blue {\r\n    color: #66b2d9; }  \r\n.text-left {\r\n    text-align: left; }  \r\n.text-right {\r\n    text-align: right; }  \r\n.no-padding {\r\n    padding: 0 !important; }  \r\n.no-margin {\r\n    margin: 0; }  \r\n.mt-10 {\r\n    margin-top: 10px; }  \r\n.mbt-20 {\r\n    margin-bottom: 20px; }  \r\n.mbt-40 {\r\n    margin-bottom: 40px; }  \r\n.mbt-50 {\r\n    margin-bottom: 50px !important; }  \r\n.sub-content h1 {\r\n    font-size: 20px;\r\n    font-weight: 800;\r\n    margin-top: 20px;\r\n    opacity: 0.6; }  \r\n.sub-content .content {\r\n    background: white;\r\n    height: 430px;\r\n    width: 545px;\r\n    box-shadow: 0px 2px 6px 3px rgba(161, 161, 161, 0.5);\r\n    border-radius: 5px;\r\n    margin: auto;\r\n    padding-top: 70px;\r\n    position: relative; }  \r\n.sub-content .content .icon-file-upload {\r\n      font-size: 25px;\r\n      color: #000;\r\n      font-size: 100px; }  \r\n.sub-content .content .active {\r\n      color: #8cc63f; }  \r\n.btn-next {\r\n    display: flex;\r\n    position: absolute;\r\n    bottom: 24px;\r\n    align-items: center;\r\n    width: 100%;\r\n    justify-content: space-between;\r\n    padding: 0 40px; }  \r\n.btn-next .btn {\r\n      width: 146px;\r\n      font-size: 18px;\r\n      background: #8cc63f;\r\n      border-color: #8cc63f; }  \r\n.btn-next .title {\r\n      color: #65b2d9;\r\n      cursor: pointer;\r\n      font-size: 16px; }  \r\n.sub-icon {\r\n    position: relative;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center; }  \r\n.sub-icon .icon-check-file {\r\n      position: absolute;\r\n      font-size: 43px;\r\n      color: #fff; }  \r\n.form-review {\r\n    width: 80%;\r\n    position: absolute;\r\n    top: 35px; }  \r\n.select-upload select {\r\n    border: none;\r\n    border-bottom: 1px solid #ccc;\r\n    font-weight: 700;\r\n    border-radius: 0;\r\n    box-shadow: none; }  \r\n.content-review-upload {\r\n    height: 356px !important;\r\n    width: 32% !important; }  \r\n.uploader {\r\n    border: 1px dotted #ccc;\r\n    background: #f2f2f2;\r\n    width: 80%;\r\n    padding: 65px 0 90px 0px; }  \r\n.warning-title {\r\n    color: #ff5149; }  \r\n.flex-uploader {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center; }  \r\nli {\r\n    list-style: none;\r\n    text-decoration: underline; }  \r\na {\r\n    text-decoration: none; }  \r\n/*# sourceMappingURL=main.css.map */\r\n  "

/***/ }),

/***/ "./src/app/upload-report/components/file-review/file-review.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/upload-report/components/file-review/file-review.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"sub-content text-center\">\n  <h1 class=\"mbt-50\">File Uploader</h1>\n  <div class=\"content content-file-review text-center flex-uploader no-padding\" style=\"min-height:470px !important\">\n    <div class=\"form-review\">\n      <div class=\"row mt-10\" *ngIf=\"currentFileName.three40bFile\">\n        <p class=\"col-sm-8 control-label text-16 text-left\">Filename</p>\n        <p class=\"col-sm-4 control-label text-16 text-left\">\n          <i class=\"fa fa-file\"></i> {{currentFileName.three40bFile}}</p>\n      </div>\n      <div class=\"row mt-10\" *ngIf=\"currentFileName.EMRFile\">\n        <p class=\"col-sm-8 control-label text-16 text-left\">Filename</p>\n        <p class=\"col-sm-4 control-label text-16 text-left\">\n          <i class=\"fa fa-file\"></i> {{currentFileName.EMRFile}}</p>\n      </div>\n      <div class=\"row mt-10\">\n        <p class=\"col-sm-8 control-label text-16 text-left\">Timeframe</p>\n        <div class=\"col-sm-4 select-upload text-left\">\n          {{date}}\n          <!-- <form #myForm=\"ngForm\" novalidate>\n            <my-date-picker name=\"mydate\" [options]=\"myDatePickerOptions\" [(ngModel)]=\"date\"  (dateChanged)=\"onDateChanged($event)\"></my-date-picker>\n          </form> -->\n        </div>\n      </div>\n      <div class=\"row mt-10\">\n        <div class=\"col-sm-8 select-upload text-left\">\n          <p class=\"text-16\">Total</p>\n        </div>\n        <div class=\"col-sm-4 select-upload text-left\">\n          <p class=\"text-16\">${{total}}</p>\n        </div>\n      </div>\n      <div class=\"row mt-10\">\n        <div class=\"col-sm-8 select-upload text-left\">\n          <p class=\"text-16\">Reconciliation</p>\n        </div>\n        <div class=\"col-sm-4 select-upload text-left\">\n          <p class=\"text-16\">(${{reconciliation}})</p>\n        </div>\n      </div>\n      <div class=\"row mt-10\">\n        <div class=\"col-sm-8 select-upload text-left\">\n          <p class=\"text-16\">Retail Net Increased Access Dollars</p>\n        </div>\n        <div class=\"col-sm-4 select-upload text-left\">\n          <p>${{increased}}</p>\n        </div>\n      </div>\n    </div>\n    <div class=\"btn-next\" *ngIf=\"!viewReport\">\n      <a class=\"title\" (click)=\"backtoStep2()\">Back</a>\n      <button type=\"button\" class=\"btn btn-success\" (click)=\"viewReport=true\">Submit</button>\n    </div>\n    <div class=\"btn-next\" *ngIf=\"viewReport\">\n      <a class=\"title\" (click)=\"gotoUpload()\">Upload Another File</a>\n      <button type=\"button\" class=\"btn btn-success\" (click)=\"submit()\">View Reports</button>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/upload-report/components/file-review/file-review.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/upload-report/components/file-review/file-review.component.ts ***!
  \*******************************************************************************/
/*! exports provided: FileReviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileReviewComponent", function() { return FileReviewComponent; });
/* harmony import */ var _shared_services_common_data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../shared/services/common-data.service */ "./src/app/shared/services/common-data.service.ts");
/* harmony import */ var _upload_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../upload-service.service */ "./src/app/upload-report/upload-service.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FileReviewComponent = /** @class */ (function () {
    function FileReviewComponent(service, common) {
        this.service = service;
        this.common = common;
        this.back = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.next = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.submited = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.viewReport = false;
    }
    FileReviewComponent.prototype.ngOnChanges = function () {
        if (this.data) {
            this.total = this.data.fields.total;
            this.reconciliation = this.data.fields.reconciliation;
            this.increased = this.data.fields.netIncrease;
            this.date = moment__WEBPACK_IMPORTED_MODULE_3__(this.data.timePeriod).format('MMM, YYYY');
            this.currentFileName = this.data.fields.currentFileName;
            console.log(this.currentFileName);
        }
    };
    FileReviewComponent.prototype.ngOnInit = function () {
        this.currentFileName = {
            three40bFile: null,
            EMRFile: null
        };
        this.date = { date: { year: 2018, month: 10, day: 9 } };
    };
    FileReviewComponent.prototype.onDateChanged = function (date) {
        console.log(date);
    };
    FileReviewComponent.prototype.backtoStep2 = function () {
        this.back.emit(2);
    };
    FileReviewComponent.prototype.gotoUpload = function () {
        this.back.emit(1);
    };
    FileReviewComponent.prototype.submit = function () {
        var _this = this;
        this.common.toggleLoading(true);
        this.service.getHistory().subscribe(function (data) {
            _this.common.toggleLoading(false);
            if (data.Status == "success") {
                _this.next.emit(4);
                _this.submited.next(data.Data);
            }
            else {
                alert(data.Message);
            }
        }, function (err) {
            alert('Server error');
            _this.common.toggleLoading(false);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"])
    ], FileReviewComponent.prototype, "back", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"])
    ], FileReviewComponent.prototype, "next", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"])
    ], FileReviewComponent.prototype, "submited", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        __metadata("design:type", Object)
    ], FileReviewComponent.prototype, "data", void 0);
    FileReviewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-file-review',
            template: __webpack_require__(/*! ./file-review.component.html */ "./src/app/upload-report/components/file-review/file-review.component.html"),
            styles: [__webpack_require__(/*! ./file-review.component.css */ "./src/app/upload-report/components/file-review/file-review.component.css")]
        }),
        __metadata("design:paramtypes", [_upload_service_service__WEBPACK_IMPORTED_MODULE_1__["UploadServiceService"], _shared_services_common_data_service__WEBPACK_IMPORTED_MODULE_0__["CommonDataService"]])
    ], FileReviewComponent);
    return FileReviewComponent;
}());



/***/ }),

/***/ "./src/app/upload-report/components/history/history.component.css":
/*!************************************************************************!*\
  !*** ./src/app/upload-report/components/history/history.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.content-scroll-table .sub-table {\r\n  height: 500px;\r\n}\r\n.sub-table {\r\n    width: 100%;\r\n    margin: auto; }\r\n.sub-table .table {\r\n      background: white;\r\n      border: 1px solid #ccc; }\r\n.sub-table th {\r\n      background: #f2f2f2;\r\n      text-transform: uppercase; }\r\n.sub-table td {\r\n      text-align: left; }\r\n.sidebar {\r\n    background-color: #3e484d; }\r\n.sidebar ul {\r\n      padding: 0; }\r\n.sidebar ul li {\r\n        cursor: pointer;\r\n        color: #fff;\r\n        padding: 10px 0 10px 20px;\r\n        font-size: 16px; }\r\n.sidebar ul li:hover {\r\n          background: #282c2f; }\r\n.text-14 {\r\n    font-size: 14px; }\r\n.text-trans {\r\n    text-transform: uppercase; }\r\n.red {\r\n    color: #ff7b75; }\r\n.blue {\r\n    color: #66b2d9; }\r\n.green {\r\n    color: #8cc63f; }\r\n.gray {\r\n    color: #e2e2e2; }\r\n.text-left {\r\n    text-align: left; }\r\n.text-right {\r\n    text-align: right; }\r\n.no-padding {\r\n    padding: 0 !important; }\r\n.no-margin {\r\n    margin: 0; }\r\n.mt-10 {\r\n    margin-top: 10px; }\r\n.mbt-20 {\r\n    margin-bottom: 20px; }\r\n.mbt-40 {\r\n    margin-bottom: 40px; }\r\n.mbt-50 {\r\n    margin-bottom: 50px !important; }\r\n.pl-20 {\r\n    padding-left: 20px; }\r\n.pr-20 {\r\n    padding-right: 20px; }\r\n.sub-content {\r\n      padding-top: 5px;\r\n    }\r\n.sub-content h1 {\r\n    font-size: 20px;\r\n    font-weight: 800;\r\n    margin-top: 20px;\r\n    opacity: 0.6; }\r\n.sub-content .content {\r\n    height: 430px;\r\n    width: 37%;\r\n    box-shadow: 0px 2px 6px 3px rgba(161, 161, 161, 0.5);\r\n    border-radius: 5px;\r\n    margin: auto;\r\n    padding-top: 70px;\r\n    position: relative; }\r\n.sub-content .content .icon-file-upload {\r\n      font-size: 25px;\r\n      color: #000;\r\n      font-size: 100px; }\r\n.sub-content .content .active {\r\n      color: #8cc63f; }\r\n.btn-next {\r\n    display: flex;\r\n    position: absolute;\r\n    bottom: 24px;\r\n    align-items: center;\r\n    width: 100%;\r\n    justify-content: space-between;\r\n    padding: 0 40px; }\r\n.btn-next .btn {\r\n      width: 200px;\r\n      font-size: 18px;\r\n      background: #8cc63f;\r\n      border-color: #8cc63f; }\r\n.btn-next .title {\r\n      color: #65b2d9;\r\n      font-size: 16px; }\r\n.sub-icon {\r\n    position: relative;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center; }\r\n.sub-icon .icon-check-file {\r\n      position: absolute;\r\n      font-size: 43px;\r\n      color: #fff; }\r\n.form-review {\r\n    width: 80%;\r\n    position: absolute;\r\n    top: 35px; }\r\n.select-upload select {\r\n    border: none;\r\n    border-bottom: 1px solid #ccc;\r\n    font-weight: 700;\r\n    border-radius: 0;\r\n    box-shadow: none; }\r\n.content-review-upload {\r\n    height: 356px !important;\r\n    width: 32% !important; }\r\n.uploader {\r\n    border: 1px dotted #ccc;\r\n    background: #f2f2f2;\r\n    width: 80%;\r\n    padding: 65px 0 90px 0px; }\r\n.warning-title {\r\n    color: #ff5149; }\r\n.flex-uploader {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center; }\r\n.form-data-map {\r\n    width: 100%;\r\n    overflow: hidden; }\r\n.form-data-map .sub-title {\r\n      padding: 20px 20px 15px 20px;\r\n      background: #f2f2f2; }\r\n.content-map-data {\r\n    padding-top: 0px !important;\r\n    width: 37%;\r\n    box-shadow: 0px 2px 6px 3px rgba(161, 161, 161, 0.5);\r\n    border-radius: 5px;\r\n    margin: auto; }\r\n.check-right {\r\n    justify-content: space-between;\r\n    display: flex;\r\n    border-bottom: 1px solid #ccc; }\r\n.check-right i {\r\n      font-size: 20px;\r\n      cursor: pointer; }\r\n.btn-right {\r\n    padding: 20px; }\r\n.btn-right .btn {\r\n      width: 180px;\r\n      font-size: 18px;\r\n      background: #8cc63f;\r\n      border-color: #8cc63f; }\r\n.pd-icon {\r\n    padding-right: 37px; }\r\n.sub-content .text-title {\r\n    font-size: 16px;\r\n    font-weight: 500;\r\n    margin-bottom: 27px; }\r\n.content-drop {\r\n    border: 1px solid #ccc;\r\n    border-radius: 5px;\r\n    float: right;\r\n    margin-right: 36px;\r\n    margin-top: 10px; }\r\n.content-drop p {\r\n      border-bottom: 1px solid #ccc;\r\n      text-align: left;\r\n      padding: 4px 35px;\r\n      margin: 0; }\r\nli {\r\n    list-style: none; }\r\na {\r\n    text-decoration: none; }\r\nbody {\r\n    overflow: hidden; }\r\n/*# sourceMappingURL=main.css.map */\r\n  "

/***/ }),

/***/ "./src/app/upload-report/components/history/history.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/upload-report/components/history/history.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"sub-content text-center\">\n  <h1 class=\"mbt-50\">Data Submission History</h1>\n  <div class=\"container\">\n    <div class=\"sub-table\">\n      <table class=\"table\">\n        <thead>\n          <tr>\n            <th>data timeframe</th>\n            <th>340B FINANCIAL</th>\n            <th>emr</th>\n            <th>submitted by</th>\n            <th>submitted</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let item of data\" [hidden]=\"!item.financial_url && !item.emr_url\">\n            <td>{{item.date}}</td>\n            <td>\n              <label *ngIf=\"item.financial_url\">Yes</label>\n              <p *ngIf=\"!item.financial_url\" class=\"warning-title\">\n                <i class=\"fa fa-exclamation-triangle\"></i> no data submitted\n                <label class=\"blue\" (click)=\"gotoUpload()\" style=\"cursor:pointer\">upload now</label>\n              </p>\n            </td>\n            <td>\n              <label *ngIf=\"item.emr_url\">Yes</label>\n              <label *ngIf=\"!item.emr_url\">No</label>\n            </td>\n            <td>{{item.fullname}}</td>\n            <td>{{item.updated_at}}</td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/upload-report/components/history/history.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/upload-report/components/history/history.component.ts ***!
  \***********************************************************************/
/*! exports provided: HistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryComponent", function() { return HistoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
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
    function HistoryComponent() {
        this.back = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    HistoryComponent.prototype.ngOnInit = function () {
    };
    HistoryComponent.prototype.ngOnChanges = function () {
        if (this.data) {
            for (var i = 0; i < this.data.length; i++) {
                this.data[i].date = moment__WEBPACK_IMPORTED_MODULE_1__(this.data[i].date).format('MMM, YYYY');
                this.data[i].updated_at = moment__WEBPACK_IMPORTED_MODULE_1__(this.data[i].updated_at).format('MMM DD, YYYY');
            }
        }
    };
    HistoryComponent.prototype.gotoUpload = function () {
        this.back.emit(1);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], HistoryComponent.prototype, "data", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], HistoryComponent.prototype, "back", void 0);
    HistoryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-history',
            template: __webpack_require__(/*! ./history.component.html */ "./src/app/upload-report/components/history/history.component.html"),
            styles: [__webpack_require__(/*! ./history.component.css */ "./src/app/upload-report/components/history/history.component.css")]
        })
    ], HistoryComponent);
    return HistoryComponent;
}());



/***/ }),

/***/ "./src/app/upload-report/components/map-data/map-data.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/upload-report/components/map-data/map-data.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".scroll-map-data {\r\n  width: 610px;\r\n  margin: auto;\r\n  overflow-y: auto;\r\n  \r\n}\r\n.scroll-map-data .content-map-data {\r\n  height: 500px;\r\n}\r\n.sub-table {\r\n    width: 60%;\r\n    margin: auto; }\r\n.sub-table .table {\r\n      border: 1px solid #ccc; }\r\n.sub-table th {\r\n      background: #f2f2f2;\r\n      text-transform: uppercase; }\r\n.sub-table td {\r\n      text-align: left; }\r\n.sidebar {\r\n    background-color: #3e484d; }\r\n.sidebar ul {\r\n      padding: 0; }\r\n.sidebar ul li {\r\n        cursor: pointer;\r\n        color: #fff;\r\n        padding: 10px 0 10px 20px;\r\n        font-size: 16px; }\r\n.sidebar ul li:hover {\r\n          background: #282c2f; }\r\n.text-14 {\r\n    font-size: 14px; }\r\n.text-trans {\r\n    text-transform: uppercase; }\r\n.red {\r\n    color: #ff7b75; }\r\n.blue {\r\n    color: #66b2d9; }\r\n.green {\r\n    color: #8cc63f; }\r\n.gray {\r\n    color: #e2e2e2; }\r\n.text-left {\r\n    text-align: left; }\r\n.text-right {\r\n    text-align: right; }\r\n.no-padding {\r\n    padding: 0 !important; }\r\n.no-margin {\r\n    margin: 0; }\r\n.mt-10 {\r\n    margin-top: 10px; }\r\n.mbt-20 {\r\n    margin-bottom: 20px; }\r\n.mbt-40 {\r\n    margin-bottom: 40px; }\r\n.mbt-50 {\r\n    margin-bottom: 50px !important; }\r\n.pl-20 {\r\n    padding-left: 20px; }\r\n.pr-20 {\r\n    padding-right: 20px; }\r\n.sub-content h1 {\r\n    font-size: 20px;\r\n    font-weight: 800;\r\n    margin-top: 20px;\r\n    opacity: 0.6; }\r\n.sub-content .content {\r\n    background: white;\r\n    height: 430px;\r\n    width: 37%;\r\n    box-shadow: 0px 2px 6px 3px rgba(161, 161, 161, 0.5);\r\n    border-radius: 5px;\r\n    margin: auto;\r\n    padding-top: 70px;\r\n    position: relative; }\r\n.sub-content .content .icon-file-upload {\r\n      font-size: 25px;\r\n      color: #000;\r\n      font-size: 100px; }\r\n.sub-content .content .active {\r\n      color: #8cc63f; }\r\n.btn-next {\r\n    display: flex;\r\n    position: absolute;\r\n    bottom: 24px;\r\n    align-items: center;\r\n    width: 100%;\r\n    justify-content: space-between;\r\n    padding: 0 40px; }\r\n.btn-next .btn {\r\n      width: 200px;\r\n      font-size: 18px;\r\n      background: #8cc63f;\r\n      border-color: #8cc63f; }\r\n.btn-next .title {\r\n      color: #65b2d9;\r\n      cursor: pointer;\r\n      font-size: 16px; }\r\n.sub-icon {\r\n    position: relative;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center; }\r\n.sub-icon .icon-check-file {\r\n      position: absolute;\r\n      font-size: 43px;\r\n      color: #fff; }\r\n.form-review {\r\n    width: 80%;\r\n    position: absolute;\r\n    top: 35px; }\r\n.select-upload select {\r\n    border: none;\r\n    border-bottom: 1px solid #ccc;\r\n    font-weight: 700;\r\n    border-radius: 0;\r\n    box-shadow: none; }\r\n.content-review-upload {\r\n    height: 356px !important;\r\n    width: 32% !important; }\r\n.uploader {\r\n    border: 1px dotted #ccc;\r\n    background: #f2f2f2;\r\n    width: 80%;\r\n    padding: 65px 0 90px 0px; }\r\n.warning-title {\r\n    color: #ff5149; }\r\n.flex-uploader {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center; }\r\n.form-data-map {\r\n    background: white;\r\n    width: 100%;\r\n    overflow: hidden; }\r\n.form-data-map .sub-title {\r\n      padding: 20px 20px 15px 20px;\r\n      background: #f2f2f2; }\r\n.content-map-data {\r\n    padding-top: 0px !important;\r\n    width: 610px;\r\n    box-shadow: 0px 2px 6px 3px rgba(161, 161, 161, 0.5);\r\n    border-radius: 5px;\r\n    margin: auto; }\r\n.check-right {\r\n    justify-content: space-between;\r\n    display: flex;\r\n    border-bottom: 1px solid #ccc; }\r\n.check-right i {\r\n      font-size: 20px;\r\n      cursor: pointer; }\r\n.btn-right {\r\n    padding: 20px; }\r\n.btn-right .btn {\r\n      width: 120px;\r\n      font-size: 18px;\r\n      background: #8cc63f;\r\n      border-color: #8cc63f; }\r\n.pd-icon {\r\n    padding-right: 37px; }\r\n.sub-content {\r\n    padding-top: 25px;\r\n  }\r\n.sub-content .text-title {\r\n    font-size: 16px;\r\n    font-weight: 500;\r\n    margin-bottom: 27px; }\r\n.content-drop {\r\n    border: 1px solid #ccc;\r\n    border-radius: 5px;\r\n    float: right;\r\n    margin-right: 36px;\r\n    margin-top: 10px; }\r\n.content-drop p {\r\n      border-bottom: 1px solid #ccc;\r\n      text-align: left;\r\n      padding: 4px 35px;\r\n      margin: 0; }\r\nli {\r\n    list-style: none; }\r\na {\r\n    text-decoration: none; }\r\nbody {\r\n    overflow: hidden; }\r\n/*# sourceMappingURL=main.css.map */\r\n  "

/***/ }),

/***/ "./src/app/upload-report/components/map-data/map-data.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/upload-report/components/map-data/map-data.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"sub-content text-center\">\n  <h1 class=\"\">Map Data</h1>\n  <p class=\"text-title\">Map your files to Doc & I.\n    <!-- <span class=\"red\">\n      <i class=\"fa fa-exclamation-triangle\"></i> 6 fields need review</span> -->\n  </p>\n  <div class=\"scroll-map-data\">\n    <div class=\"content-map-data\">\n      <div class=\"form-data-map\">\n        <div class=\"row sub-title\">\n          <label class=\"col-sm-6 control-label text-trans text-left\">doc & i</label>\n          <label class=\"col-sm-6 control-label text-trans text-left\">your fields</label>\n        </div>\n        <div class=\"row pl-20 mt-10\" *ngFor=\"let f of fields\">\n          <div class=\"col-sm-6 select-upload text-left\">\n            <p>{{f}}</p>\n          </div>\n          <div class=\"col-sm-6 select-upload text-left pd-icon\">\n            <div class=\"check-right\">\n              <p>{{f}}</p>\n              <div class=\"icon-right\">\n                <!-- <i class=\"gray fa fa-chevron-down\"></i>\n                <i class=\"fa fa-question-circle\"></i> -->\n                <i class=\" green fa fa-check-circle\"></i>\n              </div>\n            </div>\n          </div>\n          <div class=\"content-drop\" hidden>\n            <p>Claim Type</p>\n            <p>Claim Type</p>\n            <p>Claim Type</p>\n            <p>Claim Type</p>\n          </div>\n        </div>\n        <div class=\"btn-right text-right\">\n          <button type=\"button\" class=\"btn btn-success\" (click)=\"nextStep()\">Next</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/upload-report/components/map-data/map-data.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/upload-report/components/map-data/map-data.component.ts ***!
  \*************************************************************************/
/*! exports provided: MapDataComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapDataComponent", function() { return MapDataComponent; });
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

var MapDataComponent = /** @class */ (function () {
    function MapDataComponent() {
        this.next = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.fields = [];
    }
    MapDataComponent.prototype.ngOnInit = function () {
    };
    MapDataComponent.prototype.ngOnChanges = function () {
        this.fields = this.data.fields.listAtribute;
    };
    MapDataComponent.prototype.nextStep = function () {
        this.next.emit(3);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], MapDataComponent.prototype, "next", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], MapDataComponent.prototype, "data", void 0);
    MapDataComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-map-data',
            template: __webpack_require__(/*! ./map-data.component.html */ "./src/app/upload-report/components/map-data/map-data.component.html"),
            styles: [__webpack_require__(/*! ./map-data.component.css */ "./src/app/upload-report/components/map-data/map-data.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MapDataComponent);
    return MapDataComponent;
}());



/***/ }),

/***/ "./src/app/upload-report/components/upload/upload.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/upload-report/components/upload/upload.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".no-boder .drop-zone{\r\n  border: none !important;\r\n}\r\n\r\n.sub-table {\r\n    width: 60%;\r\n    margin: auto; }\r\n\r\n.sub-table .table {\r\n      border: 1px solid #ccc; }\r\n\r\n.sub-table th {\r\n      background: #f2f2f2;\r\n      text-transform: uppercase; }\r\n\r\n.sub-table td {\r\n      text-align: left; }\r\n\r\n.text-14 {\r\n    font-size: 14px; }\r\n\r\n.blue {\r\n    color: #66b2d9; }\r\n\r\n.text-left {\r\n    text-align: left; }\r\n\r\n.text-right {\r\n    text-align: right; }\r\n\r\n.no-padding {\r\n    padding: 0 !important; }\r\n\r\n.no-margin {\r\n    margin: 0; }\r\n\r\n.mt-10 {\r\n    margin-top: 10px; }\r\n\r\n.mbt-20 {\r\n    margin-bottom: 20px; }\r\n\r\n.mbt-40 {\r\n    margin-bottom: 40px; }\r\n\r\n.mbt-50 {\r\n    margin-bottom: 50px !important; }\r\n\r\n.sub-content  {\r\n    padding-top: 30px;\r\n  }\r\n\r\n.sub-content h1 {\r\n    font-size: 20px;\r\n    font-weight: 800;\r\n    margin-top: 20px;\r\n    opacity: 1.0; }\r\n\r\n.sub-content .content {\r\n    background: white;\r\n    height: 430px;\r\n    width: 545px;\r\n    box-shadow: 0px 2px 6px 3px rgba(161, 161, 161, 0.5);\r\n    border-radius: 5px;\r\n    margin: auto;\r\n    padding-top: 70px;\r\n    position: relative; }\r\n\r\n.sub-content .content .icon-file-upload {\r\n      font-size: 25px;\r\n      color: #000;\r\n      font-size: 100px; }\r\n\r\n.sub-content .content .active {\r\n      color: #8cc63f; }\r\n\r\n.btn-next {\r\n    display: flex;\r\n    position: absolute;\r\n    bottom: 24px;\r\n    align-items: center;\r\n    width: 100%;\r\n    justify-content: space-between;\r\n    padding: 0 40px; }\r\n\r\n.btn-next .btn {\r\n      width: 120px;\r\n      font-size: 18px;\r\n      background: #8cc63f;\r\n      border-color: #8cc63f; }\r\n\r\n.btn-next .title {\r\n      color: #65b2d9;\r\n      cursor: pointer;\r\n      font-size: 16px; }\r\n\r\n.sub-icon {\r\n    position: relative;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center; }\r\n\r\n.sub-icon .icon-check-file {\r\n      position: absolute;\r\n      font-size: 43px;\r\n      color: #fff; }\r\n\r\n.form-review {\r\n    width: 82%;\r\n    position: absolute;\r\n    top: 35px; }\r\n\r\n.select-upload select {\r\n    border: none;\r\n    border-bottom: 1px solid #ccc;\r\n    font-weight: 700;\r\n    border-radius: 0;\r\n    box-shadow: none; }\r\n\r\n.content-review-upload {\r\n    height: 356px !important;\r\n    width: 32% !important; }\r\n\r\n.uploader {\r\n    border: 2px dotted black;\r\n    background: #f2f2f2;\r\n    width: 80%;\r\n    padding: 65px 0 90px 0px; }\r\n\r\n.warning-title {\r\n    color: #ff5149; }\r\n\r\n.flex-uploader {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center; }\r\n\r\nli {\r\n    list-style: none;\r\n    text-decoration: underline; }\r\n\r\na {\r\n    text-decoration: none; }\r\n\r\n.sub-content[_ngcontent-c7] {\r\n      padding-top: 5px;\r\n      background: linear-gradient(to bottom, #fff 0, #a3d7e5 100%);\r\n      height: 100%;\r\n    }\r\n\r\n/*# sourceMappingURL=main.css.map */\r\n  "

/***/ }),

/***/ "./src/app/upload-report/components/upload/upload.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/upload-report/components/upload/upload.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"sub-content text-center\" [hidden]=\"step != 1\">\n  <h1 class=\"mbt-50\">File Uploader</h1>\n  <div class=\"content text-center flex-uploader no-padding\">\n    <div class=\"uploader\">\n      Drag and Drop CSV or Xlsx File to Upload\n      <p class=\"warning-title\">\n        <i class=\"fa fa-exclamation-triangle\" *ngIf=\"errorText\"></i> {{errorText}}</p>\n      <div class=\"no-boder\">\n        <file-drop (onFileDrop)=\"dropped($event)\" [customstyle]=\"myStyle\" (click)=\"chooseFile()\">\n          <i class=\"fa fa-file icon-file-upload\">\n          </i>\n          <input type=\"file\" id=\"file340b\" hidden accept=\".xlsx, .csv\" (change)=\"openChooseFile($event)\">\n        </file-drop>\n      </div>\n    </div>\n    <p class=\"warning-title\" *ngIf=\"currentFileName.three40bFile\" (click)=\"step = 3\">Return to {{currentFileName.three40bFile}}</p>\n  </div>\n</div>\n<div class=\"sub-content text-center\" [hidden]=\"step != 2\">\n  <div class=\"progress\">\n    <div class=\"progress-bar progress-bar-info progress-bar-striped\" role=\"progressbar\" [attr.aria-valuenow]=\"progress\" aria-valuemin=\"0\"\n      aria-valuemax=\"100\" style=\"min-width: 2em;\" [style.width]=\"(progress/100)*100 + '%'\">\n      {{progress}}%\n    </div>\n  </div>\n  <h1 class=\"mbt-50\">File Uploader</h1>\n  <div class=\"content text-center\">\n    <div>\n      <p class=\"text-14 mbt-20\">Uploading:filename.cvs & filename.cvs</p>\n      <div class=\"sub-icon\">\n        <i class=\"fa fa-copy icon-file-upload\"></i>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"sub-content text-center\" [hidden]=\"step != 3\">\n  <h1 class=\"mbt-50\">File Uploader</h1>\n  <div class=\"content text-center\">\n    <div>\n      <p class=\"text-14\">Uploaded: {{currentFileName.three40bFile}}</p>\n      <div class=\"sub-icon\">\n        <i class=\"fa fa-file active icon-file-upload\"></i>\n        <i class=\"fa fa-check-circle icon-check-file\"></i>\n      </div>\n      <div class=\"btn-next\">\n        <label *ngIf=\"!EMRFile && !uploadERM\" class=\"title\">{{currentFileName.three40bFile}}</label>\n        <label *ngIf=\"!EMRFile && uploadERM\" class=\"title\" (click)=\"step=1;currentTypeDrop=2\"> Upload Your Electronic Medical Record</label>\n        <!-- <input type=\"file\" id=\"file\" hidden accept=\".xlsx, .csv\" (change)=\"addEMRFile($event)\"> -->\n         <label *ngIf=\"EMRFile\" class=\"title\" for=\"file\">{{currentFileName.EMRFile}}</label>\n        <button type=\"button\" *ngIf=\"uploadERM\" (click)=\"upload()\" class=\"btn btn-info\">Next</button>\n        <button type=\"button\" *ngIf=\"!uploadERM\" (click)=\"uploadERM=true\" class=\"btn btn-info\">Next</button>\n      </div>\n    </div>\n  </div>\n</div>\n<!-- modal -->\n<div class=\"modal fade\" id=\"missingModal\" role=\"dialog\">\n  <div class=\"modal-dialog\">\n\n    <!-- Modal content-->\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        \n        <h4 class=\"modal-title\">You have uploaded a document which have missing information related to Retail Net Increased Access Dollars . Please\n          re-check the document and re-upload or fill in the data for following field.</h4>\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n      </div>\n      <div class=\"modal-body\">\n        <input class=\"form-control\" [(ngModel)]=\"retail_net_increased_access_dollars\" />\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-info\" data-dismiss=\"modal\" (click)=\"upload()\">OK</button>\n      </div>\n    </div>\n\n  </div>\n</div>\n\n<!-- modal error-->\n<div class=\"modal fade\" id=\"modal-error\" role=\"dialog\">\n  <div class=\"modal-dialog\">\n\n    <!-- Modal content-->\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n      </div>\n      <div class=\"modal-body\">\n        <h4 class=\"modal-title\">{{error}}</h4>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">OK</button>\n      </div>\n    </div>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/upload-report/components/upload/upload.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/upload-report/components/upload/upload.component.ts ***!
  \*********************************************************************/
/*! exports provided: UploadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadComponent", function() { return UploadComponent; });
/* harmony import */ var _shared_services_common_data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../shared/services/common-data.service */ "./src/app/shared/services/common-data.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _upload_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../upload-service.service */ "./src/app/upload-report/upload-service.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UploadComponent = /** @class */ (function () {
    function UploadComponent(zone, cdr, service, common) {
        this.zone = zone;
        this.cdr = cdr;
        this.service = service;
        this.common = common;
        this.files = [];
        this.step = 1;
        this.progress = 0;
        this.currentTypeDrop = 1;
        this.dataUpload = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    UploadComponent.prototype.ngOnInit = function () {
        this.refreshFile();
    };
    UploadComponent.prototype.refreshFile = function () {
        this.three40bFile = null;
        this.EMRFile = null;
        this.currentFileName = {
            three40bFile: null,
            EMRFile: null
        };
    };
    UploadComponent.prototype.dropped = function (event) {
        var _this = this;
        this.cdr.detectChanges();
        this.errorText = "";
        this.progress = 0;
        var files = event.files;
        if (files.length > 1) {
            alert('chon 1 file thoi');
        }
        else {
            for (var _i = 0, _a = event.files; _i < _a.length; _i++) {
                var file = _a[_i];
                var fileEntry = file.fileEntry;
                fileEntry.file(function (file) {
                    var type = _this.service.getTypeFile(file);
                    _this.zone.run(function () {
                        if (type == "xlsx" || type == "csv") {
                            _this.step = 2;
                            _this.addFile(file);
                            _this.startUpload();
                        }
                        else {
                            _this.errorText = "This file type is not supported.";
                        }
                    });
                });
            }
        }
    };
    UploadComponent.prototype.openChooseFile = function (event) {
        console.log(this.currentTypeDrop);
        var file = event.target.files[0];
        var type = this.service.getTypeFile(file);
        if (this.currentTypeDrop == 1) {
            this.currentFileName.three40bFile = file.name;
        }
        if (type == "xlsx" || type == "csv") {
            this.step = 2;
            this.addFile(file);
            this.startUpload();
        }
        else {
            alert('This file type is not supported, please choose CSV file');
        }
    };
    UploadComponent.prototype.addFile = function (file) {
        if (this.currentTypeDrop == 1) {
            this.three40bFile = file;
            this.currentFileName.three40bFile = file.name;
        }
        else {
            this.EMRFile = file;
            this.currentFileName.EMRFile = file.name;
        }
    };
    UploadComponent.prototype.startUpload = function () {
        var _this = this;
        var action = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["interval"])(100).subscribe(function (x) {
            if (_this.progress < 100) {
                _this.progress += 10;
            }
            if (_this.progress == 100) {
                _this.step = 3;
                action.unsubscribe();
            }
        });
    };
    UploadComponent.prototype.uploadSuccess = function () {
        this.progress = 100;
    };
    UploadComponent.prototype.chooseFile = function () {
        $('#file340b').click();
    };
    UploadComponent.prototype.upload = function () {
        var _this = this;
        this.common.toggleLoading(true);
        this.uploadERM = false;
        this.service.getContentFile(this.three40bFile, this.EMRFile, this.retail_net_increased_access_dollars).subscribe(function (data) {
            _this.common.toggleLoading(false);
            if (data.Status == "success") {
                data.Data.currentFileName = _this.currentFileName;
                _this.dataUpload.emit({
                    fields: data.Data
                });
                _this.refreshFile();
            }
            else if (data.Status == 0) {
                $('#missingModal').modal('show');
            }
            else if (data.Status == 1) {
                _this.error = data.Message;
                $('#modal-error').modal('show');
            }
        }, function (err) {
            _this.common.toggleLoading(false);
            alert('Server Error');
        }, function () {
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], UploadComponent.prototype, "dataUpload", void 0);
    UploadComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-upload',
            template: __webpack_require__(/*! ./upload.component.html */ "./src/app/upload-report/components/upload/upload.component.html"),
            styles: [__webpack_require__(/*! ./upload.component.css */ "./src/app/upload-report/components/upload/upload.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _upload_service_service__WEBPACK_IMPORTED_MODULE_3__["UploadServiceService"], _shared_services_common_data_service__WEBPACK_IMPORTED_MODULE_0__["CommonDataService"]])
    ], UploadComponent);
    return UploadComponent;
}());



/***/ }),

/***/ "./src/app/upload-report/report/erm/erm.component.css":
/*!************************************************************!*\
  !*** ./src/app/upload-report/report/erm/erm.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".chart-icon{\r\n    font-size: 25px;\r\n    \r\n}\r\n.sub-chart {\r\n    /* overflow: hidden; */\r\n \r\n    padding-top:10px;\r\n    padding-bottom: 20px;\r\n  }\r\n.control-label{\r\n    margin-top: 0.5rem;\r\n  }\r\n  "

/***/ }),

/***/ "./src/app/upload-report/report/erm/erm.component.html":
/*!*************************************************************!*\
  !*** ./src/app/upload-report/report/erm/erm.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  <div class=\"container container-sub\">\n    <div class=\"sub-chart\">\n      <div class=\"row\">\n        <div class=\"col-md-4\">\n          <form class=\"form-horizontal\">\n            <div class=\"form-group\">\n              <label class=\"col-sm-4 control-label\" style=\"text-align: center\">Statement Date</label>\n              <div class=\"col-sm-8\" style=\"z-index: 10\">\n                <ng-datepicker [(ngModel)]=\"fromDate\" (ngModelChange)=\"changeDate()\"  [ngModelOptions]=\"{standalone: true}\"></ng-datepicker>\n                <!-- <input type=\"date\" (change)=\"changeDate()\" class=\"form-control\" [(ngModel)]=\"fromDate\" name=\"fromdate\"> -->\n      \n              </div>\n            </div>\n          </form>\n        </div>\n        <div class=\"col-md-4\">\n          <form class=\"form-horizontal\">\n            <div class=\"form-group\">\n              <label class=\" col-sm-4  control-label\">Date Range</label>\n              <div class=\"col-sm-8\">\n                <select class=\"form-control\" [(ngModel)]=\"range_date\" (change)=\"changeDate()\" name=\"daterange\">\n                  <option [value]=\"1\">1 Month</option>\n                  <option [value]=\"2\">2 Months</option>\n                  <option [value]=\"3\">3 Months</option>\n                  <option [value]=\"4\">4 Months</option>\n                  <option [value]=\"5\">5 Months</option>\n                  <option [value]=\"6\">6 Months</option>\n                  <option [value]=\"7\">7 Months</option>\n                  <option [value]=\"8\">8 Months</option>\n                  <option [value]=\"9\">9 Months</option>\n                  <option [value]=\"10\">10 Months</option>\n                  <option [value]=\"11\">11 Months</option>\n                  <option [value]=\"12\">12 Months</option>\n                </select>\n              </div>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"chart6\">\n      <div class=\"row\">\n        <div class=\"col-xs-6\">\n          <div class=\"admin-metrics-340b-chart-box-1\">\n            <!-- <h2 class=\"admin-metrics-340b-top-title\" style=\"padding-top: 22px; padding-bottom: 10px;\">Contract Capture Rate</h2> -->\n            <div id=\"chart-contract\"></div>\n            <!-- <chart [options]=\"Option\"></chart> -->\n            <div class=\"chart-icon\">\n              {{rateContracted}} %\n            </div>\n            <!-- <div class=\"note-chart\">\n                    <div class=\"note-chart-box\">\n                        <div class=\"box-left blue\">\n\n                        </div>\n                        <p class=\"text\">{{rateContracted}}% Contracted ({{contracted}})</p>\n                    </div>\n                    <div class=\"note-chart-box\">\n                        <div class=\"box-left grey\">\n\n                        </div>\n                        <p class=\"text\">{{100 - rateContracted}}% Noncontracted ({{noncontracted}})</p>\n                    </div>\n                </div> -->\n          </div>\n        </div>\n        <div class=\"col-xs-6\">\n          <div id=\"chart-pharmacy\"></div>\n        </div>\n      </div>\n    </div>\n    <br/>\n    <div class=\"content-table table\">\n      <!-- <table class=\"table\">\n        <thead>\n          <tr>\n            <th>TOTAL</th>\n            <th>PHARMACY</th>\n            <th>QTY</th>\n            <th>ADDRESS</th>\n            <th>CITY</th>\n            <th>CONTRACTED</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let pharmacy of pharmacySumary\">\n            <td>{{pharmacy.total}}</td>\n            <td>{{pharmacy.pharmacy}}</td>\n            <td><div *ngFor=\"let item of pharmacy.listStore\">{{item.qty}}</div></td>\n            <td><div *ngFor=\"let item of pharmacy.listStore\">{{item.address}}</div></td>\n            <td><div *ngFor=\"let item of pharmacy.listStore\">{{item.city}}</div></td>\n            <td><div *ngFor=\"let item of pharmacy.listStore\">{{item.contracted==1?'Yes':'No'}}</div></td>\n          </tr>\n        </tbody>\n      </table> -->\n      <table [mfData]=\"pharmacySumary\" #mf=\"mfDataTable\" [mfRowsOnPage]=\"10\" class=\"table\">\n        <thead>\n          <tr>\n            <th class=\"text-center\">\n              <!-- <mfDefaultSorter by=\"total\">TOTAL </mfDefaultSorter> -->\n            </th>\n            <th class=\"text-center\">\n              PHARMACY\n            </th>\n            <th class=\"text-center\">\n              QTY\n            </th>\n            <th class=\"text-center\">\n              ADDRESS\n            </th>\n            <th class=\"text-center\">\n              CITY\n            </th>\n            <th class=\"text-center\">\n              CONTRACTED\n            </th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let item of mf.data\">\n            <td class=\"text-center\">{{item.total}}</td>\n            <td class=\"text-center\">{{item.pharmacy}}</td>\n            <td class=\"text-center\">\n              <div *ngFor=\"let data of item.listStore\">{{data.qty}}</div>\n            </td>\n            <td class=\"text-center\">\n              <div *ngFor=\"let data of item.listStore\">{{data.address}}</div>\n            </td>\n            <td class=\"text-center\">\n              <div *ngFor=\"let data of item.listStore\">{{data.city}}</div>\n            </td>\n            <td class=\"text-center\">\n              <div *ngFor=\"let data of item.listStore\">{{data.contracted==1?'Yes':'No'}}</div>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n\n"

/***/ }),

/***/ "./src/app/upload-report/report/erm/erm.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/upload-report/report/erm/erm.component.ts ***!
  \***********************************************************/
/*! exports provided: ErmComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErmComponent", function() { return ErmComponent; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_common_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../shared/services/common-data.service */ "./src/app/shared/services/common-data.service.ts");
/* harmony import */ var _upload_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../upload-service.service */ "./src/app/upload-report/upload-service.service.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ErmComponent = /** @class */ (function () {
    function ErmComponent(service, commonService, router) {
        var _this = this;
        this.service = service;
        this.commonService = commonService;
        this.router = router;
        this.typeChart5 = 'total';
        this.totalRx = 0;
        this.totalPatientSaving = 0;
        this.totalRevenue = 0;
        this.range_date = 12;
        this.getDataERM = function (from, range_date) {
            from = moment__WEBPACK_IMPORTED_MODULE_4__(from).format('YYYY-MM-DD');
            _this.service.getErmData(from, range_date).subscribe(function (data) {
                if (data.Status == "access is denied") {
                    localStorage.clear();
                    _this.router.navigate(['/', 'login']);
                }
                else {
                    var result = data.Data;
                    _this.contracted = Number(result.contracted);
                    _this.noncontracted = Number(result.Noncontracted);
                    _this.rateContracted = Number((_this.contracted / (_this.contracted + _this.noncontracted)).toFixed(2)) * 100;
                    _this.initchartContract(result.contracted, _this.noncontracted);
                    result.pharmacyBreakdown.sort(function (a, b) {
                        return b.y - a.y;
                    });
                    _this.initChartPharmacy(result.pharmacyBreakdown);
                    _this.pharmacySumary = result.pharmacySumary;
                    console.log(data);
                }
            });
        };
        this.fromDate = new Date('2018-1-1');
    }
    ErmComponent.prototype.ngOnInit = function () {
        this.fromDate = new Date('2018-1-1');
        this.getDataERM(this.fromDate, this.range_date);
    };
    ErmComponent.prototype.ngAfterViewInit = function () {
    };
    ErmComponent.prototype.initchartContract = function (contracted, noncontracted) {
        contracted = Number(contracted);
        noncontracted = Number(noncontracted);
        Highcharts.chart('chart-contract', {
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: 0,
                width: 294,
                height: 334,
                backgroundColor: 'transparent'
                //plotShadow: false
            },
            pie: {
                size: 100
            },
            title: {
                text: 'Contract Capture Rate'
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.y}</b>',
            },
            plotOptions: {
                pie: {
                    size: 210,
                    center: ['50%', '40%'],
                    dataLabels: {
                        enabled: false
                    },
                    showInLegend: true
                }
            },
            legend: {
                align: 'center',
                verticalAlign: 'bottom',
                layout: 'vertical',
                title: { text: '' },
                itemStyle: {
                    fontWeight: 'normal',
                    fontSize: '18px'
                },
                symbolWidth: 12,
                symbolRadius: 6,
                enabled: true,
                labelFormatter: function () {
                    return '(' + this.rate + '%) ' + this.name + ' (' + this.y + ')';
                }
            },
            series: [{
                    type: 'pie',
                    name: 'Quantity',
                    innerSize: '70%',
                    data: [
                        { name: 'Contracted', y: contracted, rate: this.rateContracted },
                        { name: 'Non Contracted', y: noncontracted, rate: 100 - this.rateContracted },
                    ]
                }]
        });
    };
    ErmComponent.prototype.initChartPharmacy = function (data) {
        for (var i = 0; i < data.length; i++) {
            data[i].name = data[i].pharmacy;
        }
        console.log(data);
        Highcharts.chart('chart-pharmacy', {
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: 'pie'
            },
            title: {
                text: 'Pharmacy Breakdown'
            },
            tooltip: {
                pointFormat: '<b>{point.y}</b>',
            },
            legend: {
                enabled: true,
                labelFormatter: function () {
                    return this.name + " (" + this.percentage.toFixed(2) + "%)";
                }
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    showInLegend: true,
                    dataLabels: {
                        enabled: false,
                        format: '{point.percentage:.1f} %',
                        distance: -50,
                        filter: {
                            property: 'percentage',
                            operator: '>',
                            value: 4
                        }
                    }
                }
            },
            series: [{
                    showInLegend: true,
                    colorByPoint: true,
                    data: data
                }]
        });
    };
    ErmComponent.prototype.changeDate = function () {
        // this.getData(this.fromDate, this.range_date)
        this.getDataERM(this.fromDate, this.range_date);
    };
    ErmComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-erm',
            template: __webpack_require__(/*! ./erm.component.html */ "./src/app/upload-report/report/erm/erm.component.html"),
            styles: [__webpack_require__(/*! ./erm.component.css */ "./src/app/upload-report/report/erm/erm.component.css")]
        }),
        __metadata("design:paramtypes", [_upload_service_service__WEBPACK_IMPORTED_MODULE_3__["UploadServiceService"], _shared_services_common_data_service__WEBPACK_IMPORTED_MODULE_2__["CommonDataService"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]])
    ], ErmComponent);
    return ErmComponent;
}());



/***/ }),

/***/ "./src/app/upload-report/report/finacial/finacial.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/upload-report/report/finacial/finacial.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sub-chart {\r\n  /* overflow: hidden; */\r\n  \r\n  padding-top:10px;\r\n  padding-bottom: 20px;\r\n}\r\n\r\n.btn-next-pre a {\r\n  width: 40px;\r\n  height:40px;\r\n  border-radius: 50%;\r\n  background: #b3bcbf;\r\n  color: #fff;\r\n  font-size:16px;\r\n  display: flex;\r\n  justify-content: center;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  margin-left:15px;\r\n}\r\n\r\n.btn-next-pre .btn-flex {\r\n  display: flex;\r\n  align-items: center;\r\n  width: 145px;\r\n  justify-content:center;\r\n  margin: auto;\r\n}\r\n\r\n.content-table {\r\n  margin-top:25px;\r\n  padding-bottom:30px;\r\n  background: #fff;\r\n\r\n}\r\n\r\n.container{\r\n  padding-bottom: 40px;\r\n}\r\n\r\n.content-table th {\r\n  background: #f2f2f2;\r\n}\r\n\r\n.bottom-chart {\r\n  margin-top:20px;\r\n}\r\n\r\n.total-sub {\r\n  height:90px;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  background: #e7f2f5;\r\n}\r\n\r\n.total-sub p {\r\n  color: #646565;\r\n  margin:0;\r\n}\r\n\r\n.group-buttons{\r\n  position: relative;\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.group-buttons .button{\r\n  background: #f5f5f5;\r\n  color: #646565;\r\n  display: inline-block;\r\n    font-weight: normal;\r\n    text-align: center;\r\n    white-space: nowrap;\r\n    vertical-align: middle;\r\n    cursor: pointer;\r\n    -webkit-user-select: none;\r\n       -moz-user-select: none;\r\n        -ms-user-select: none;\r\n            user-select: none;\r\n    border: 1px solid transparent;\r\n    padding: 0.375rem 1rem;\r\n    font-size: 0.875rem;\r\n    line-height: 1.5;\r\n    transition: all 0.2s ease-in-out;\r\n    text-decoration: none;\r\n    width: auto;\r\n    float: left;\r\n}\r\n\r\n.group-buttons .button.active{\r\n  background: #36a3f7;\r\n  color: #fff;\r\n}\r\n\r\n.group-buttons .button:first-child:not(:last-child){\r\n  border-top-right-radius: 0;\r\n    border-bottom-right-radius: 0;\r\n}\r\n\r\n.table-provider {\r\n  width: 100%;\r\n}\r\n\r\nlabel{\r\n  margin-top: 0.5rem;\r\n}"

/***/ }),

/***/ "./src/app/upload-report/report/finacial/finacial.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/upload-report/report/finacial/finacial.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  <div class=\"container container-sub\">\n    <div class=\"sub-chart\">\n      <div class=\"row\">\n        <div class=\"col-md-4\">\n          <form class=\"form-horizontal\">\n            <div class=\"form-group\">\n              <label class=\"col-sm-4 control-label\" style=\"text-align: center\">Statement Date</label>\n              <div class=\"col-sm-8\" style=\"z-index: 10\">\n                  <!-- <dp-date-picker #dayPicker></dp-date-picker> -->\n                  <ng-datepicker  [(ngModel)]=\"fromDate\" (ngModelChange)=\"changeDate()\" name=\"fromDate\" [ngModelOptions]=\"{standalone: true}\"></ng-datepicker >\n                <!-- <input type=\"date\" (change)=\"changeDate()\" class=\"form-control\" [(ngModel)]=\"fromDate\" name=\"fromdate\"> -->\n              </div>\n            </div>\n          </form>\n        </div>\n        <div class=\"col-md-4\">\n          <form class=\"form-horizontal\">\n            <div class=\"form-group\">\n              <label class=\"col-sm-4 control-label\">Date Range</label>\n              <div class=\"col-sm-8\">\n                <select class=\"form-control\" [(ngModel)]=\"range_date\" (change)=\"changeDate()\" name=\"daterange\" >\n                  <option [value]=\"1\">1 Month</option>\n                  <option [value]=\"2\">2 Months</option>\n                  <option [value]=\"3\">3 Months</option>\n                  <option [value]=\"4\">4 Months</option>\n                  <option [value]=\"5\">5 Months</option>\n                  <option [value]=\"6\">6 Months</option>\n                  <option [value]=\"7\">7 Months</option>\n                  <option [value]=\"8\">8 Months</option>\n                  <option [value]=\"9\">9 Months</option>\n                  <option [value]=\"10\">10 Months</option>\n                  <option [value]=\"11\">11 Months</option>\n                  <option [value]=\"12\">12 Months</option>\n                </select>\n                <!-- <input type=\"date\" (change)=\"changeDate()\" class=\"form-control\" [(ngModel)]=\"toDate\" name=\"fromdate\"> -->\n              </div>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"group-buttons\">\n      <a (click)=\"changeChart5('total')\" class=\"button btn-info\" [class.active]=\"typeChart5=='total'\">Total Revenue</a>\n      <a (click)=\"changeChart5('net')\" class=\"button bnt-info\" [class.active]=\"typeChart5=='net'\">Net Revenue</a>\n    </div>\n    <div class=\"chart5\">\n      <div id=\"chart5\" class=\"content-chart-sub\"></div>\n    </div>\n    <div class=\"btn-next-pre text-center\">\n      <!-- <div class=\"btn-flex\">\n        <a>\n          <i class=\"fa fa-caret-left\"></i>\n        </a>\n        <a>\n          <i class=\"fa fa-caret-right\"></i>\n        </a>\n      </div> -->\n    </div>\n\n    <div class=\"content-table table\">\n      <table [mfData]=\"prescriberData\" #mf=\"mfDataTable\" [mfRowsOnPage]=\"10\" class=\"table-provider\">\n        <thead>\n          <tr>\n            <th class=\"text-center\">\n              <mfDefaultSorter by=\"prescriberName\">PROVIDER </mfDefaultSorter>\n            </th>\n            <th class=\"text-center\">\n              <mfDefaultSorter by=\"totalRx\">TOTAL # OF 340B RX'S</mfDefaultSorter>\n            </th>\n            <th class=\"text-center\">\n              <mfDefaultSorter by=\"Uninsured\"># OF UNINSURED</mfDefaultSorter>\n            </th>\n            <th class=\"text-center\">\n              <mfDefaultSorter by=\"Insured\"># OF INSURED</mfDefaultSorter>\n            </th>\n            <th class=\"text-center\">\n              <mfDefaultSorter by=\"patientSaving\">PATIENT SAVINGS</mfDefaultSorter>\n            </th>\n            <th class=\"text-center\">\n              <mfDefaultSorter by=\"totalRevenue\">REVENUE</mfDefaultSorter>\n            </th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let item of mf.data\">\n            <td class=\"text-center\">{{item.prescriberName}}</td>\n            <td class=\"text-center\">{{item.totalRx}}</td>\n            <td class=\"text-center\">{{item.Uninsured}}</td>\n            <td class=\"text-center\">{{item.Insured}}</td>\n            <td class=\"text-center\">${{item.patientSaving| money}}</td>\n            <td class=\"text-center\">${{item.totalRevenue| money}}</td>\n          </tr>\n        </tbody>\n      </table>\n\n      <!-- <ng-table [config]=\"config\"  [rows]=\"prescriberData\"\n        [columns]=\"columns\">\n      </ng-table> -->\n      <!-- <table class=\"table\">\n        <thead>\n          <tr>\n            <th>PROVIDER</th>\n            <th>TOTAL # OF 340B RX'S</th>\n            <th># OF UNINSURED</th>\n            <th># OF INSURED</th>\n            <th>PATIENT SAVINGS</th>\n            <th>REVENUE</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let item of prescriberData\">\n            <td>{{item.prescriberName}}</td>\n            <td>{{item.totalRx}}</td>\n            <td>{{item.Uninsured}}</td>\n            <td>{{item.Insured}}</td>\n            <td>{{item.patientSaving}}</td>\n            <td>{{item.totalRevenue}}</td>\n          </tr>\n        </tbody>\n      </table> -->\n    </div>\n    <div class=\"chart6\">\n      <div class=\"row\">\n        <div class=\"col-xs-5\">\n          <div id=\"chart-saving\"></div>\n        </div>\n        <div class=\"col-xs-7\">\n          <div id=\"chart-contact\"></div>\n        </div>\n      </div>\n    </div>\n    <div class=\"bottom-chart\">\n      <div class=\"row\">\n        <div class=\"col-md-4\">\n          <div class=\"total-sub\">\n            <div>\n              <h2>{{totalRx}}</h2>\n              <p>Total 340B Rx's</p>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md-4\">\n          <div class=\"total-sub\">\n            <div>\n              <h2>${{totalRevenue| money}}</h2>\n              <p>Total Revenue</p>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md-4\">\n          <div class=\"total-sub\">\n            <div>\n              <h2>${{totalPatientSaving| money}}</h2>\n              <p>Total Patient Savings</p>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n"

/***/ }),

/***/ "./src/app/upload-report/report/finacial/finacial.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/upload-report/report/finacial/finacial.component.ts ***!
  \*********************************************************************/
/*! exports provided: FinacialComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FinacialComponent", function() { return FinacialComponent; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_common_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../shared/services/common-data.service */ "./src/app/shared/services/common-data.service.ts");
/* harmony import */ var _upload_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../upload-service.service */ "./src/app/upload-report/upload-service.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FinacialComponent = /** @class */ (function () {
    function FinacialComponent(service, commonService, router) {
        this.service = service;
        this.commonService = commonService;
        this.router = router;
        this.fromDate = new Date('2018-1-1');
        this.range_date = 12;
        this.prescriberData = [];
        this.typeChart5 = 'total';
        this.totalRx = 0;
        this.totalPatientSaving = 0;
        this.totalRevenue = 0;
    }
    FinacialComponent.prototype.ngOnInit = function () {
        // this.fromDate = new Date('2018-1-1');
        this.getData(this.fromDate, this.range_date);
    };
    FinacialComponent.prototype.ngAfterViewInit = function () {
        this.initChart5(null);
        this.initChartSaving(null);
        this.initchartContact(null);
    };
    FinacialComponent.prototype.initChart5 = function (data, type) {
        // 'December 2017', 'January 2018', 'February 2018'
        var time = ['Baseline'];
        var chartData = [];
        if (data) {
            for (var i = 1; i < data.length; i++) {
                time.push(data[i].time);
            }
            for (var i = 0; i < data.length; i++) {
                chartData.push(Number(data[i][type]));
            }
        }
        Highcharts.chart('chart5', {
            chart: {
                type: 'line'
            },
            title: {
                text: "$" + this.averageTotalRevenue + " | $" + this.averageNetRevenue + " average revenue for " + this.monthNumber + " months"
            },
            subtitle: {
            // text: `$${this.averageTotalRevenue} | $${this.averageNetRevenue} average revenue for ${this.monthNumber} months`
            },
            xAxis: {
                categories: time
            },
            yAxis: {
                title: {
                    text: ' '
                },
                labels: {
                    formatter: function () {
                        return ' $' + this.value.toLocaleString('en-us');
                    }
                }
            },
            tooltip: {
                pointFormat: "Value: {point.y:.2f} mm"
            },
            legend: {
                enabled: false
            },
            plotOptions: {
                line: {
                    dataLabels: {
                        enabled: true,
                        formatter: function () {
                            return '$' + this.y.toLocaleString('en-us');
                        }
                    },
                    enableMouseTracking: false
                }
            },
            series: [{
                    name: 'data',
                    data: chartData
                }]
        });
    };
    FinacialComponent.prototype.initChartSaving = function (data) {
        Highcharts.chart('chart-saving', {
            chart: {
                type: 'column'
            },
            title: {
                text: 'Uninsured Patient Saving'
            },
            xAxis: {
                type: 'category'
            },
            yAxis: {
                title: {
                    text: ''
                },
                labels: {
                    formatter: function () {
                        return '';
                    }
                }
            },
            legend: {
                enabled: false
            },
            plotOptions: {
                series: {
                    borderWidth: 0,
                    dataLabels: {
                        enabled: true,
                        formatter: function () {
                            return '$' + this.y.toFixed(2);
                        }
                    }
                }
            },
            tooltip: {
                headerFormat: '',
                pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>${point.y:.2f}</b><br/>',
                formatter: function () {
                    return this.key + ": $" + this.y.toFixed(2);
                }
            },
            "series": [
                {
                    "colorByPoint": true,
                    "data": [
                        {
                            "name": "Total Patient Savings",
                            "y": data ? Number(data.totalPatientSaving) : 0
                        },
                        {
                            "name": "Average Patient Savings Per Rx",
                            "y": data ? Number(data.Average) : 0
                        }
                    ]
                }
            ],
        });
    };
    FinacialComponent.prototype.initchartContact = function (data) {
        var test = [];
        if (data) {
            for (var i = 0; i < data.length; i++) {
                test[i] = {
                    name: data[i].pharmacy_location,
                    y: Number(data[i].percent)
                };
            }
            console.log(test);
        }
        Highcharts.chart('chart-contact', {
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: 'pie'
            },
            title: {
                text: 'Contract Pharmacy Rx Breakdown'
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            legend: {
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'top',
                y: 5,
                padding: 50
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: false
                    },
                    showInLegend: true
                }
            },
            series: [{
                    name: 'Brands',
                    colorByPoint: true,
                    data: test
                }]
        });
    };
    FinacialComponent.prototype.changeDate = function () {
        // console.log(this.toDate)
        // console.log(this.range_date)
        this.getData(this.fromDate, this.range_date);
    };
    FinacialComponent.prototype.getData = function (fromDate, range_date) {
        var _this = this;
        this.commonService.toggleLoading(true);
        var formatData = [];
        fromDate = moment__WEBPACK_IMPORTED_MODULE_4__(fromDate).format('YYYY-MM-DD');
        this.service.getPrescriberdata(fromDate, range_date).subscribe(function (res) {
            _this.commonService.toggleLoading(false);
            if (res.Status == "access is denied") {
                localStorage.clear();
                _this.router.navigate(['/', 'login']);
            }
            else {
                var data = res.Data;
                if (data) {
                    _this.initChartSaving(data.patientSavingData);
                    if (data.pharmacyData.length > 0) {
                        _this.initchartContact(data.pharmacyData);
                    }
                    _this.prescriberData = data.prescriberData;
                    _this.netRevenueData = data.netRevenueData;
                    _this.totalRevenueData = data.totalRevenueData;
                    _this.totalRx = data.totalRx.totalRx;
                    _this.totalRevenue = data.totalRx.totalRevenue;
                    _this.totalPatientSaving = data.patientSavingData.totalPatientSaving;
                    _this.monthNumber = data.monthNumber;
                    _this.averageTotalRevenue = data.averageTotalRevenue;
                    _this.averageNetRevenue = data.averageNetRevenue;
                    _this.handleChart5();
                }
            }
        }, function (err) {
            _this.commonService.toggleLoading(false);
        });
    };
    FinacialComponent.prototype.changeChart5 = function (type) {
        this.typeChart5 = type;
        this.handleChart5();
    };
    FinacialComponent.prototype.handleChart5 = function () {
        if (this.typeChart5 == 'total') {
            this.initChart5(this.totalRevenueData, 'retail_net_increased_access_dollars');
        }
        else {
            this.initChart5(this.netRevenueData, 'net_revenue');
        }
    };
    FinacialComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-finacial',
            template: __webpack_require__(/*! ./finacial.component.html */ "./src/app/upload-report/report/finacial/finacial.component.html"),
            styles: [__webpack_require__(/*! ./finacial.component.css */ "./src/app/upload-report/report/finacial/finacial.component.css")]
        }),
        __metadata("design:paramtypes", [_upload_service_service__WEBPACK_IMPORTED_MODULE_2__["UploadServiceService"], _shared_services_common_data_service__WEBPACK_IMPORTED_MODULE_1__["CommonDataService"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]])
    ], FinacialComponent);
    return FinacialComponent;
}());



/***/ }),

/***/ "./src/app/upload-report/report/map/map.component.css":
/*!************************************************************!*\
  !*** ./src/app/upload-report/report/map/map.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#map {\r\n  height: 100vh;\r\n}\r\n\r\n.ml-10 {\r\n  margin-left: 10px;\r\n}\r\n\r\n.pdr-0 {\r\n    padding-right: 0 !important;\r\n}\r\n\r\n.pdl-0 {\r\n    padding-left: 0 !important;\r\n}\r\n\r\n.content-maps {\r\n  position: fixed;\r\n  top: 60px;\r\n  z-index: 999;\r\n  right: 0;\r\n  left: 16.7%;\r\n}\r\n\r\n.content-maps .form-inline {\r\n  display: flex;\r\n  \r\n}\r\n\r\n.content-maps .form-group {\r\n  display: flex;\r\n  align-items: center;\r\n  padding-right: 20px;\r\n}\r\n\r\n.content-maps .form-group label {\r\n  padding-right: 10px;\r\n  margin:0;\r\n}\r\n\r\n.content-maps .form-top {\r\n  background: #f8f4ec;\r\n  padding: 10px 0 10px 45px;\r\n}\r\n\r\n.content-maps .form-top .date-form {\r\n  margin-left: 20px;\r\n  \r\n}\r\n\r\n.content-maps .btn-filter {\r\n  background: #2196F3;\r\n\r\n}\r\n\r\n.content-maps .btn-filter i {\r\n  color: #fff;\r\n}\r\n\r\n.content-maps .form-top .btn-submit {\r\n  margin-left: 20px;\r\n}\r\n\r\n.scroll-content-maps {\r\n  overflow-y: scroll;\r\n  height: 400px;\r\n  padding-top: 10px\r\n}\r\n\r\n.content-select {\r\n  padding: 60px 40px 30px 45px;\r\n  background: #f8f4ec;\r\n}\r\n\r\n.button-footer {\r\n  display: flex;\r\n  justify-content: flex-end;\r\n  padding-top: 15px\r\n}\r\n\r\n.content-select .link-page {\r\n  color: #36a3f7;\r\n  font-size: 20px;\r\n  margin-right: 10px;\r\n}\r\n\r\n.text-select {\r\n  display: block;\r\n  position: relative;\r\n  padding-left: 30px;\r\n  margin-bottom: 12px;\r\n  cursor: pointer;\r\n  font-size: 15px;\r\n  font-weight: 500;\r\n  -webkit-user-select: none;\r\n  -moz-user-select: none;\r\n  -ms-user-select: none;\r\n  user-select: none;\r\n  color: #343a40;\r\n}\r\n\r\n.text-select input {\r\n  position: absolute;\r\n  opacity: 0;\r\n  cursor: pointer;\r\n}\r\n\r\n.checkmark {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  height: 19px;\r\n  width: 19px;\r\n  background-color: #fff;\r\n  border-radius: 50%;\r\n}\r\n\r\n.text-select:hover input~.checkmark {\r\n  background-color: #fff;\r\n}\r\n\r\n.text-select input:checked~.checkmark {\r\n  background-color: #fff;\r\n  border: 1px solid #ccc;\r\n}\r\n\r\n.checkmark:after {\r\n  content: \"\";\r\n  position: absolute;\r\n  display: none;\r\n}\r\n\r\n.text-select input:checked~.checkmark:after {\r\n  display: block;\r\n}\r\n\r\n.text-select .checkmark:after {\r\n  top: 1px;\r\n  left: 1px;\r\n  width: 15px;\r\n  height: 15px;\r\n  border-radius: 50%;\r\n  background: #2196F3;\r\n}\r\n\r\n.text-checkbox {\r\n  display: block;\r\n  position: relative;\r\n  padding-left: 30px;\r\n  margin-bottom: 12px;\r\n  cursor: pointer;\r\n  font-size: 13px;\r\n  font-weight: 500;\r\n  -webkit-user-select: none;\r\n  -moz-user-select: none;\r\n  -ms-user-select: none;\r\n  user-select: none;\r\n  color: #343a40;\r\n}\r\n\r\n.text-checkbox input {\r\n  position: absolute;\r\n  opacity: 0;\r\n  cursor: pointer;\r\n}\r\n\r\n.checkmark-check {\r\n  position: absolute;\r\n  top: -5px;\r\n  left: 0;\r\n  height: 25px;\r\n  width: 25px;\r\n  background-color: #fff;\r\n}\r\n\r\n.text-checkbox:hover input~.checkmark-check {\r\n  background-color: #fff;\r\n}\r\n\r\n.text-checkbox input:checked~.checkmark-check {\r\n  background-color: #fff;\r\n  border: 1px solid #ccc;\r\n}\r\n\r\n.checkmark-check:after {\r\n  content: \"\";\r\n  position: absolute;\r\n  display: none;\r\n}\r\n\r\n.text-checkbox input:checked~.checkmark-check:after {\r\n  display: block;\r\n}\r\n\r\n.text-checkbox .checkmark-check:after {\r\n  left: 9px;\r\n  top: 5px;\r\n  width: 5px;\r\n  height: 10px;\r\n  border: solid #2196F3;\r\n  border-width: 0 3px 3px 0;\r\n  -webkit-transform: rotate(45deg);\r\n  transform: rotate(45deg);\r\n}\r\n\r\n/*# sourceMappingURL=main.css.map */\r\n"

/***/ }),

/***/ "./src/app/upload-report/report/map/map.component.html":
/*!*************************************************************!*\
  !*** ./src/app/upload-report/report/map/map.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n  <div class=\"content-maps\">\r\n    <div class=\"form-top\">\r\n      <div class=\"form-inline\">\r\n        <div class=\"form-group\">\r\n          <label>From</label>\r\n          <ng-datepicker [(ngModel)]=\"fromDate\" (ngModelChange)=\"changeDate()\"></ng-datepicker>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label>Date Range</label>\r\n     \r\n          <select class=\"form-control\" [(ngModel)]=\"range_date\" (change)=\"changeDate()\" name=\"daterange\">\r\n            <option [value]=\"1\">1 Month</option>\r\n            <option [value]=\"2\">2 Months</option>\r\n            <option [value]=\"3\">3 Months</option>\r\n            <option [value]=\"4\">4 Months</option>\r\n            <option [value]=\"5\">5 Months</option>\r\n            <option [value]=\"6\">6 Months</option>\r\n            <option [value]=\"7\">7 Months</option>\r\n            <option [value]=\"8\">8 Months</option>\r\n            <option [value]=\"9\">9 Months</option>\r\n            <option [value]=\"10\">10 Months</option>\r\n            <option [value]=\"11\">11 Months</option>\r\n            <option [value]=\"12\">12 Months</option>\r\n          </select>\r\n       \r\n        </div>\r\n        <button (click)=\"hideFilter=!hideFilter\" class=\"btn btn-info btn-filter\">\r\n          <i class=\"fa fa-filter\" aria-hidden=\"true\"></i> Filter</button>\r\n      </div>\r\n    </div>\r\n    <div>\r\n      <div class=\"content-select\" [hidden]=\"hideFilter\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-4\">\r\n            <div *ngFor=\"let option of fillterOption\">\r\n              <label class=\"text-select\">{{option.name}}\r\n                <input type=\"radio\" checked=\"checked\" [(ngModel)]=\"optionFilter\" [value]=\"option.value\" name=\"option\" (change)=\"handlePharmacies()\">\r\n                <span class=\"checkmark\"></span>\r\n              </label>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-8 scroll-content-maps\">\r\n            <div *ngFor=\"let item of listPharmacy\" class=\"col-md-6\">\r\n              <label class=\"text-checkbox\">{{item.pharmacy_name}}, {{item.address}}, {{item.city}}, {{item.state}}\r\n                <input type=\"checkbox\" [(ngModel)]=\"item.checked\">\r\n                <span class=\"checkmark-check\"></span>\r\n              </label>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"button-footer\">\r\n          <a class=\"link-page\" role=\"button\" (click)=\"clearFilters()\">Clear Filters</a>\r\n          <button class=\"btn btn-info\" (click)=\"filter()\">Apply</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n  <div id=\"map\"></div>\r\n\r\n"

/***/ }),

/***/ "./src/app/upload-report/report/map/map.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/upload-report/report/map/map.component.ts ***!
  \***********************************************************/
/*! exports provided: MapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapComponent", function() { return MapComponent; });
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _upload_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../upload-service.service */ "./src/app/upload-report/upload-service.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MapComponent = /** @class */ (function () {
    function MapComponent(service, http) {
        this.service = service;
        this.http = http;
        this.fromDate = new Date('2017-1-1');
        // toDate: any = new Date();
        this.range_date = 12;
        this.pointArray = new google.maps.MVCArray([]);
        this.bounds = new google.maps.LatLngBounds();
        this.listPharmacyDisplay = [];
        this.hideFilter = true;
        this.heatPoint = [];
        this.infoWindows = [];
        this.fillterOption = [
            {
                name: "All",
                value: 'all'
            },
            {
                name: "Non-Contracted",
                value: "nonContracted"
            }, {
                name: "Contracted",
                value: "contracted"
            }, {
                name: "Specific Pharmacies",
                value: "specific"
            }
        ];
        this.optionFilter = "all";
    }
    MapComponent.prototype.ngOnInit = function () {
        this.initMap();
        this.getMapData(this.fromDate, this.range_date);
    };
    MapComponent.prototype.initMap = function (heatData) {
        var sanFrancisco = new google.maps.LatLng(37.774546, -122.433523);
        this.map = new google.maps.Map(document.getElementById('map'), {
            zoom: 1,
            center: sanFrancisco
        });
        var heatmap = new google.maps.visualization.HeatmapLayer({
            data: heatData ? heatData : this.pointArray,
            map: this.map,
            radius: 100
        });
        if (heatData) {
            if (heatData.length > 1) {
                this.map.fitBounds(this.bounds);
            }
        }
    };
    MapComponent.prototype.changeDate = function () {
        this.getMapData(this.fromDate, this.range_date);
    };
    MapComponent.prototype.getMapData = function (from, range_date) {
        var _this = this;
        from = moment__WEBPACK_IMPORTED_MODULE_3__(from).format('YYYY-MM-DD');
        this.service.getMapData(from, range_date).subscribe(function (data) {
            if (data.Status == 'success') {
                var results = data.Data;
                _this.listPharmacy = results;
                _this.setPoint(results);
                _this.handlePharmacies();
            }
            else {
                alert(data.Message);
            }
        });
    };
    MapComponent.prototype.setPoint = function (results) {
        var _this = this;
        var heatPoint = [];
        for (var i = 0; i < results.length; i++) {
            var point = new google.maps.LatLng(results[i].latitude, results[i].longitude);
            heatPoint.push(point);
            this.bounds.extend(point);
        }
        this.initMap(heatPoint);
        setTimeout(function () {
            for (var i = 0; i < results.length; i++) {
                _this.createMarker(results[i], results[i].latitude, results[i].longitude);
            }
        }, 1000);
    };
    MapComponent.prototype.clearFilters = function () {
        this.handlePharmacies();
    };
    MapComponent.prototype.filter = function () {
        this.hideFilter = true;
        var heatmapData = [];
        for (var i = 0; i < this.listPharmacy.length; i++) {
            if (this.listPharmacy[i].checked) {
                heatmapData.push(this.listPharmacy[i]);
            }
        }
        this.setPoint(heatmapData);
    };
    MapComponent.prototype.handlePharmacies = function () {
        switch (this.optionFilter) {
            case 'all':
                this.listPharmacy.map(function (item) {
                    item.checked = true;
                });
                break;
            case 'nonContracted':
                this.listPharmacy.map(function (item) {
                    if (item.contracted == 0) {
                        item.checked = true;
                    }
                    else {
                        item.checked = false;
                    }
                });
                break;
            case 'contracted':
                this.listPharmacy.map(function (item) {
                    if (item.contracted == 1) {
                        item.checked = true;
                    }
                    else {
                        item.checked = false;
                    }
                });
                break;
            case 'specific':
                this.listPharmacy.map(function (item) {
                    item.checked = false;
                });
                break;
        }
    };
    MapComponent.prototype.createMarker = function (pharmacy, lat, lng) {
        var _this = this;
        console.log(pharmacy);
        var content = " <div class=\"walgreen\">\n    <div class=\"walgreen-content\">\n      <div class=\"walgreen-left\">\n        <img src=\"" + pharmacy.logo + "\">\n        <div class=\"text-footer\" style=\"background:#ff514a;color:white;font-weight: bold;text-align: center;\">" + (pharmacy.contracted ? 'Contracted' : 'Non-Contracted') + "</div>\n      </div>\n      <div class=\"walgreen-right\">\n        <div class=\"walgreen-right-content\">\n          <h4 class=\"walgreen-title\">" + pharmacy.pharmacy_name + "</h4>\n          <div class=\"walgreen-text\">\n            <p>" + pharmacy.address + "</p>\n            <p>" + pharmacy.city + "," + pharmacy.state + " " + pharmacy.zip + "</p>\n            <br/>\n            <p><strong>" + pharmacy.rx_count + " total Rx</strong></p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>";
        var marker = new google.maps.Marker({
            map: this.map,
            icon: {
                labelOrigin: new google.maps.Point(13, -8),
                url: pharmacy.contracted ? 'assets/images/doc_and_i_icon_sm.png' : 'assets/images/icons8-plus-50.png'
            },
            position: {
                lat: Number(lat),
                lng: Number(lng)
            }
        });
        var infowindowOption = {
            content: content
        };
        var infowindow = new google.maps.InfoWindow(infowindowOption);
        this.infoWindows.push(infowindow);
        marker.addListener('click', function (data) {
            _this.closeInfowindow();
            infowindow.open(_this.map, marker);
        });
    };
    MapComponent.prototype.closeInfowindow = function () {
        for (var i = 0; i < this.infoWindows.length; i++) {
            this.infoWindows[i].close();
        }
    };
    MapComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-map',
            template: __webpack_require__(/*! ./map.component.html */ "./src/app/upload-report/report/map/map.component.html"),
            styles: [__webpack_require__(/*! ./map.component.css */ "./src/app/upload-report/report/map/map.component.css")]
        }),
        __metadata("design:paramtypes", [_upload_service_service__WEBPACK_IMPORTED_MODULE_1__["UploadServiceService"], _angular_http__WEBPACK_IMPORTED_MODULE_0__["Http"]])
    ], MapComponent);
    return MapComponent;
}());



/***/ }),

/***/ "./src/app/upload-report/report/report.component.css":
/*!***********************************************************!*\
  !*** ./src/app/upload-report/report/report.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".admin-metrics {\r\n  background: #f9f9f9;\r\n  /* padding-bottom: 40px; */\r\n}\r\n.pdr {\r\n  padding-right: 0 !important;\r\n  padding-left: 0 !important;\r\n}\r\n.left-side{\r\n  padding-left: 0;\r\n  padding-right: 0;\r\n}"

/***/ }),

/***/ "./src/app/upload-report/report/report.component.html":
/*!************************************************************!*\
  !*** ./src/app/upload-report/report/report.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"admin-metrics\">\n  <div class=\"wrapper-dashboard_v1\">\n    <div class=\"wrapper-dashboard_v1--inner\">\n      <div class=\"row\">\n        <div class=\"col-md-2 left-side\">\n          <div class=\"dashboard_col_left dashboard_col_left-respon\">\n            <ul class=\"db-list-tab\">\n              <li>\n                <a (click)=\"goto('finacial')\" [class.active]=\"currentPage=='finacial'\">Finacial Statements</a>\n              </li>\n              <li>\n                <a (click)=\"goto('erm')\" [class.active]=\"currentPage=='erm'\">EMR</a>\n              </li>\n              <li>\n                <a  (click)=\"goto('map')\" [class.active]=\"currentPage=='map'\">Pharmacy Heat Map</a>\n              </li>\n            </ul>\n          </div>\n        </div>\n        <div class=\"col-md-10 pdr\">\n        <router-outlet></router-outlet>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/upload-report/report/report.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/upload-report/report/report.component.ts ***!
  \**********************************************************/
/*! exports provided: ReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportComponent", function() { return ReportComponent; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ReportComponent = /** @class */ (function () {
    function ReportComponent(router) {
        var _this = this;
        this.router = router;
        router.events.subscribe(function (val) {
            var arr = val.url.split('/');
            _this.currentPage = arr[arr.length - 1];
            console.log(_this.currentPage);
        });
    }
    ReportComponent.prototype.ngOnInit = function () {
    };
    ReportComponent.prototype.goto = function (page) {
        this.currentPage = page;
        this.router.navigate(['/upload-report/report', page]);
    };
    ReportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-report',
            template: __webpack_require__(/*! ./report.component.html */ "./src/app/upload-report/report/report.component.html"),
            styles: [__webpack_require__(/*! ./report.component.css */ "./src/app/upload-report/report/report.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]])
    ], ReportComponent);
    return ReportComponent;
}());



/***/ }),

/***/ "./src/app/upload-report/submit-history/submit-history.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/upload-report/submit-history/submit-history.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sub-chart {\r\n  overflow: hidden;\r\n  padding-top:10px;\r\n}\r\n.btn-next-pre {\r\n  background: #fff;\r\n  padding-bottom: 20px;\r\n}\r\n.btn-next-pre a {\r\n  width: 40px;\r\n  height:40px;\r\n  border-radius: 50%;\r\n  background: #b3bcbf;\r\n  color: #fff;\r\n  font-size:16px;\r\n  display: flex;\r\n  justify-content: center;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  margin-left:15px;\r\n}\r\n.btn-next-pre .btn-flex {\r\n  display: flex;\r\n  align-items: center;\r\n  width: 145px;\r\n  justify-content:center;\r\n  margin: auto;\r\n}\r\n.content-table {\r\n  margin-top:25px;\r\n  padding-bottom:30px;\r\n  background: #fff;\r\n\r\n}\r\n.content-table th {\r\n  background: #f2f2f2;\r\n}\r\n.bottom-chart {\r\n  margin-top:20px;\r\n}\r\n.total-sub {\r\n  height:90px;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  background: #e7f2f5;\r\n}\r\n.total-sub p {\r\n  color: #646565;\r\n  margin:0;\r\n}\r\n.group-buttons{\r\n  position: relative;\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  margin-bottom: 10px;\r\n}\r\n.group-buttons .button{\r\n  background: #f5f5f5;\r\n  color: #646565;\r\n  display: inline-block;\r\n    font-weight: normal;\r\n    text-align: center;\r\n    white-space: nowrap;\r\n    vertical-align: middle;\r\n    cursor: pointer;\r\n    -webkit-user-select: none;\r\n       -moz-user-select: none;\r\n        -ms-user-select: none;\r\n            user-select: none;\r\n    border: 1px solid transparent;\r\n    padding: 0.375rem 1rem;\r\n    font-size: 0.875rem;\r\n    line-height: 1.5;\r\n    transition: all 0.2s ease-in-out;\r\n    text-decoration: none;\r\n    width: auto;\r\n    float: left;\r\n}\r\n.group-buttons .button.active{\r\n  background: #8CC63F;\r\n  color: #fff;\r\n}\r\n.group-buttons .button:first-child:not(:last-child){\r\n  border-top-right-radius: 0;\r\n    border-bottom-right-radius: 0;\r\n}\r\n.table-provider {\r\n  width: 100%;\r\n}\r\n.item-text-table {\r\n  white-space: nowrap;\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n  width: 305px;\r\n  margin: auto;\r\n}\r\n.upload_label{\r\n  cursor: pointer;\r\n}"

/***/ }),

/***/ "./src/app/upload-report/submit-history/submit-history.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/upload-report/submit-history/submit-history.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"m-grid__item m-grid__item--fluid  m-grid m-grid--ver-desktop m-grid--desktop \tm-container m-container--responsive m-container--xxl m-page__container m-body\" >\t\n        <div class=\"animate\">\n            <div class=\"header\">\n                <h4 class=\"header-title\">Data Submission History</h4>\n            </div>\n            <br/>\n                <div class=\"m-portlet m-portlet--mobile\">\n                    <!-- <div class=\"m-portlet__head\">\n                    <div class=\"m-portlet__head-caption\">\n                        <div class=\"m-portlet__head-title\">\n                        <h4 class=\"header-title\">\n                            \n                        </h4>\n                        </div>\n                    </div>\n                    <div class=\"m-portlet__head-tools\">\t\t\t\n\n                    </div>\n                    </div> -->\n                    <div class=\"m-portlet__body\">\n                    <!--begin: Datatable -->\n                    <div class=\" m_datatable m-datatable m-datatable--default m-datatable--loaded m-datatable--scroll\" id=\"local_data\">\n                        <table  [mfData]=\"history\" #mf=\"mfDataTable\" [mfRowsOnPage]=\"rowsOnPage\" class=\"m-datatable__table table table-striped tablesorter-blue table-admin-metrics\" style=\"display: block; min-height: 300px; overflow-x: auto;\">\n                            <thead class=\"m-datatable__head\">\n                                 <tr class=\"m-datatable__row\">\n                                    <th  class=\"m-datatable__cell text-center\" style=\"width: 20%\"> <mfDefaultSorter by=\"date\">Data timeframe </mfDefaultSorter></th>\n                                    <th  class=\"m-datatable__cell text-center\" style=\"width: 20%\">340B FINANCIAL STATEMENT</th>\n                                    <th  class=\"m-datatable__cell text-center\" style=\"width: 10%\">EMR</th>\n                                    <th  class=\"m-datatable__cell text-center\" style=\"width: 10%\">submitted by</th>\n                                    <th  class=\"m-datatable__cell text-center\" style=\"width: 20%\">submitted date</th>\n                                    <th  class=\"m-datatable__cell text-center\" style=\"width: 20%\"></th>                             \n                                </tr>\n                            </thead>\n                            <tbody class=\"m-datatable__body\">\n                                <tr data-row=\"0\" class=\"m-datatable__row\" *ngFor=\"let item of mf.data; let i = index\" style=\"table-layout: fixed;\">\n                                    <td data-field=\"OrderID\" class=\"m-datatable__cell text-center\" >{{item.time}}      \n                                    </td>\n                                    <td class=\"m-datatable__cell text-center\"><span><span class=\"item-text-table text-success\" *ngIf=\"item.financial_url\">Yes</span>&nbsp;\n                                        <span class=\"item-text-table text-danger\" *ngIf=\"!item.financial_url\">No</span>&nbsp;\n                                        <label class=\"upload_label\" for=\"financial_url_{{i}}\">\n                                          <i class=\"fa fa-file-upload\" aria-hidden=\"true\"></i>\n                                        </label>\n                                        <label class=\"upload_label\" *ngIf=\"item.financial_url\" (click)=\"confirmDeleteFile(item,1)\">&nbsp;\n                                          <i class=\"fa fa-trash\" aria-hidden=\"true\"></i>\n                                        </label>\n                                        <input type=\"file\" hidden accept=\".xlsx, .csv\" (change)=\"uploadfile(1,$event,item.time,item.is_base_line)\" id=\"financial_url_{{i}}\"\n                                        /></span>\n                                    </td>\n                                    <td  class=\"m-datatable__cell text-center\" style=\"width: 10%\"><span>\n                                        <span class=\"item-text-table text-success\" *ngIf=\"item.emr_url\">Yes</span>&nbsp;\n                                        <span class=\"item-text-table text-danger\" *ngIf=\"!item.emr_url\">No</span>&nbsp;\n                                        <label class=\"upload_label\" for=\"emr_url_{{i}}\">\n                                          <i class=\"fa fa-upload\" aria-hidden=\"true\"></i>\n                                        </label>&nbsp;\n                                        <label class=\"upload_label\" *ngIf=\"item.emr_url\" (click)=\"confirmDeleteFile(item,2)\">\n                                          <i class=\"fa fa-trash\" aria-hidden=\"true\"></i>\n                                        </label>\n                                        <input type=\"file\" hidden accept=\".xlsx, .csv\" id=\"emr_url_{{i}}\" (change)=\"uploadfile(2,$event,item.time,item.is_base_line)\"\n                                        /></span>\n                                    </td>\n                                    <td class=\"m-datatable__cell text-center\" style=\"width: 10%\">{{item.fullname}}</td>\n                                    <td  class=\"m-datatable__cell text-center\" style=\"width: 20%\">{{item.updated_at}}</td>\n                                    <td class=\"m-datatable__cell text-center\" style=\"width: 20%\">\n                                    \t\t\t\t\t\n                                        <a  class=\"m-portlet__nav-link btn m-btn m-btn--hover-info m-btn--icon m-btn--icon-only m-btn--pill\" [routerLink]=\"['/upload-report/upload']\" placement=\"top\" ngbTooltip=\"Reload\" ngbTooltipClass=\"m-tooltip\"><i class=\"la la-refresh\" ></i>                            \n                                        </a>\t\t\t\t\t\t  \t\t\t\t\t    \t\t\n                                        <button  class=\"m-portlet__nav-link btn m-btn m-btn--hover-info m-btn--icon m-btn--icon-only m-btn--pill\" [disabled]=\"!item.financial_url && !item.emr_url\" (click)=\"confirmDelete(item)\">                            <i class=\"la la-remove\"></i>                        \n                                        </button>\t\t\t\t\t\n                                    </td>\n                                </tr>\n                            </tbody>\n                        </table>\n                        <!-- <div >\n                                <pagination-controls (pageChange)=\"page = $event\" style=\"\n                                    color: black;\n                                    font-size: 1rem;\n                                    font-weight: 400;\n                                    line-height: 1.428571428571429;\n                                \"></pagination-controls>\n                            </div> -->\n                    </div>\n                </div>\n            </div>\n\n    <!-- Modal confirm delete location-->\n    <div class=\"modal fade\" id=\"confirmDelete\" role=\"dialog\">\n        <div class=\"modal-dialog\">\n          <!-- Modal content-->\n          <div class=\"modal-content\">\n            <div class=\"modal-header\">\n              <h4 class=\"modal-title\">Confirm delete history</h4>\n            </div>\n            <div class=\"modal-body\">\n              Are you sure delete this?\n            </div>\n            <div class=\"modal-footer\">\n              <button class=\"btn btn-info\" (click)=\"deleteHistory()\">Delete</button>\n              <button class=\"btn btn-info\" data-dismiss=\"modal\">Cancel</button>\n            </div>\n          </div>\n        </div>\n      </div>\n    <!-- delete File -->\n    <div class=\"modal fade\" id=\"confirmDeleteFile\" role=\"dialog\">\n        <div class=\"modal-dialog\">\n          <!-- Modal content-->\n          <div class=\"modal-content\">\n            <div class=\"modal-header\">\n              <h4 class=\"modal-title\">Confirm delete file</h4>\n            </div>\n            <div class=\"modal-body\">\n              Are you sure delete this file?\n            </div>\n            <div class=\"modal-footer\">\n              <button class=\"btn btn-info\" (click)=\"deleteFile()\">Delete</button>\n              <button class=\"btn btn-info\" data-dismiss=\"modal\">Cancel</button>\n            </div>\n          </div>\n        </div>\n      </div>\n      \n    <style>\n    .animate{\n        width:100%;\n    }\n    .header-title{\n        font-size: 1.5rem;\n        font-weight: 600;\n    }\n    .m-datatable.m-datatable--default>.m-datatable__table>.m-datatable__head .m-datatable__row>.m-datatable__cell, .m-datatable.m-datatable--default>.m-datatable__table>.m-datatable__body .m-datatable__row>.m-datatable__cell, .m-datatable.m-datatable--default>.m-datatable__table>.m-datatable__foot .m-datatable__row>.m-datatable__cell {\n      font-weight: 500;\n      font-size: 1.1rem\n    }\n     \n     </style>\n    "

/***/ }),

/***/ "./src/app/upload-report/submit-history/submit-history.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/upload-report/submit-history/submit-history.component.ts ***!
  \**************************************************************************/
/*! exports provided: SubmitHistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubmitHistoryComponent", function() { return SubmitHistoryComponent; });
/* harmony import */ var _shared_services_common_data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../shared/services/common-data.service */ "./src/app/shared/services/common-data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _upload_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../upload-service.service */ "./src/app/upload-report/upload-service.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SubmitHistoryComponent = /** @class */ (function () {
    function SubmitHistoryComponent(service, router, common) {
        this.service = service;
        this.router = router;
        this.common = common;
    }
    SubmitHistoryComponent.prototype.ngOnInit = function () {
        this.getHistory();
    };
    SubmitHistoryComponent.prototype.getHistory = function () {
        var _this = this;
        this.common.toggleLoading(true);
        this.service.getSubmitHistory().subscribe(function (res) {
            _this.common.toggleLoading(false);
            if (res.Status == "access is denied") {
                localStorage.clear();
                _this.router.navigate(['/', 'login']);
            }
            else {
                _this.history = res.Data;
                _this.rowsOnPage = _this.history.length;
            }
        }, function (err) {
            _this.common.toggleLoading(false);
        });
    };
    SubmitHistoryComponent.prototype.confirmDelete = function (data) {
        console.log(data);
        this.flagItemDelete = data;
        $('#confirmDelete').modal('show');
    };
    SubmitHistoryComponent.prototype.deleteHistory = function () {
        var _this = this;
        this.service.deleteHistory(this.flagItemDelete.time).subscribe(function (res) {
            $('#confirmDelete').modal('hide');
            if (res.Status == "access is denied") {
                localStorage.clear();
                _this.router.navigate(['/', 'login']);
            }
            else {
                _this.getHistory();
            }
        });
    };
    SubmitHistoryComponent.prototype.uploadfile = function (type, event, time, base_line) {
        var _this = this;
        this.common.toggleLoading(true);
        var file = event.target.files[0];
        this.service.uploadspecific(file, type, time, base_line).subscribe(function (data) {
            _this.common.toggleLoading(false);
            _this.getHistory();
        }, function (err) {
            _this.common.toggleLoading(false);
        });
    };
    SubmitHistoryComponent.prototype.confirmDeleteFile = function (item, type) {
        this.currentFile = item;
        // this.currentFileDelete = item.time;
        this.currentFileTypeDelete = type;
        $('#confirmDeleteFile').modal('show');
    };
    SubmitHistoryComponent.prototype.deleteFile = function () {
        var _this = this;
        $('#confirmDeleteFile').modal('hide');
        this.common.toggleLoading(true);
        this.service.deletespecific(this.currentFile.time, this.currentFileTypeDelete, this.currentFile.is_base_line).subscribe(function (res) {
            _this.common.toggleLoading(false);
            if (res.Status == "access is denied") {
                localStorage.clear();
                _this.router.navigate(['/', 'login']);
            }
            else {
                _this.getHistory();
            }
        }, function (err) {
            _this.common.toggleLoading(false);
        });
    };
    SubmitHistoryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-submit-history',
            template: __webpack_require__(/*! ./submit-history.component.html */ "./src/app/upload-report/submit-history/submit-history.component.html"),
            styles: [__webpack_require__(/*! ./submit-history.component.css */ "./src/app/upload-report/submit-history/submit-history.component.css")]
        }),
        __metadata("design:paramtypes", [_upload_service_service__WEBPACK_IMPORTED_MODULE_2__["UploadServiceService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _shared_services_common_data_service__WEBPACK_IMPORTED_MODULE_0__["CommonDataService"]])
    ], SubmitHistoryComponent);
    return SubmitHistoryComponent;
}());



/***/ }),

/***/ "./src/app/upload-report/upload-data/upload-data.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/upload-report/upload-data/upload-data.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".upload-page{\r\n  /* height:calc(100vh - 50px); */\r\n  height: 103vh;\r\n  background: linear-gradient(to bottom, #fff 0, #a3d7e5 100%);\r\n}\r\n.three40-b-page {\r\n  /* width: 570px; */\r\n  margin-left: 45%;\r\n}\r\n.icon-slider {\r\n  padding:0;\r\n}\r\n.three40-b-page ul.status li:before {\r\n  width: 0 !important;\r\n}"

/***/ }),

/***/ "./src/app/upload-report/upload-data/upload-data.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/upload-report/upload-data/upload-data.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"upload-page\">\n  <app-upload (dataUpload)=\"getContentFile($event)\" *ngIf=\"step==1\"></app-upload>\n  <app-map-data (next)=\"gotoStep($event)\" *ngIf=\"step==2\" [data]=\"contentFields\"></app-map-data>\n  <app-file-review [hidden]=\"step!=3\" (back)=\"gotoStep($event)\" [data]=\"contentFields\" (next)=\"gotoStep($event)\" (submited)=\"onGetHistory($event)\"></app-file-review>\n  <app-history [hidden]=\"step!=4\" [data]=\"history\" (back)=\"gotoStep($event)\"></app-history>\n  <div class=\"row three40-b-page\" *ngIf=\"step!=4\">\n    <div class=\"col-offset-4 col-4\">\n      <ul class=\"status icon-slider\">\n        <li [class]=\"step==1?'done':''\"></li>\n        <li [class]=\"step==2?'done':''\"></li>\n        <li [class]=\"step==3?'done':''\"></li>\n      </ul>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/upload-report/upload-data/upload-data.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/upload-report/upload-data/upload-data.component.ts ***!
  \********************************************************************/
/*! exports provided: UploadDataComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadDataComponent", function() { return UploadDataComponent; });
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

var UploadDataComponent = /** @class */ (function () {
    function UploadDataComponent() {
        this.step = 1;
    }
    UploadDataComponent.prototype.ngOnInit = function () {
    };
    UploadDataComponent.prototype.getContentFile = function (fields) {
        this.contentFields = fields;
        this.step = 2;
    };
    UploadDataComponent.prototype.nextToStep3 = function (event) {
        this.step = 3;
    };
    UploadDataComponent.prototype.gotoStep = function (step) {
        this.step = step;
    };
    UploadDataComponent.prototype.backToSep2 = function (event) {
        this.step = 2;
    };
    UploadDataComponent.prototype.onGetHistory = function (data) {
        this.history = data;
        console.log(this.history);
    };
    UploadDataComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-upload-data',
            template: __webpack_require__(/*! ./upload-data.component.html */ "./src/app/upload-report/upload-data/upload-data.component.html"),
            styles: [__webpack_require__(/*! ./upload-data.component.css */ "./src/app/upload-report/upload-data/upload-data.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UploadDataComponent);
    return UploadDataComponent;
}());



/***/ }),

/***/ "./src/app/upload-report/upload-report.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/upload-report/upload-report.module.ts ***!
  \*******************************************************/
/*! exports provided: UploadReportModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadReportModule", function() { return UploadReportModule; });
/* harmony import */ var _pipes_money_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../pipes/money.pipe */ "./src/app/pipes/money.pipe.ts");
/* harmony import */ var angular2_datatable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular2-datatable */ "./node_modules/angular2-datatable/index.js");
/* harmony import */ var angular2_datatable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(angular2_datatable__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _upload_data_upload_data_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./upload-data/upload-data.component */ "./src/app/upload-report/upload-data/upload-data.component.ts");
/* harmony import */ var _components_map_data_map_data_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/map-data/map-data.component */ "./src/app/upload-report/components/map-data/map-data.component.ts");
/* harmony import */ var _components_file_review_file_review_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/file-review/file-review.component */ "./src/app/upload-report/components/file-review/file-review.component.ts");
/* harmony import */ var _components_history_history_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/history/history.component */ "./src/app/upload-report/components/history/history.component.ts");
/* harmony import */ var _components_upload_upload_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/upload/upload.component */ "./src/app/upload-report/components/upload/upload.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_file_drop__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-file-drop */ "./node_modules/ngx-file-drop/esm5/ngx-file-drop.js");
/* harmony import */ var _upload_service_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./upload-service.service */ "./src/app/upload-report/upload-service.service.ts");
/* harmony import */ var _report_report_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./report/report.component */ "./src/app/upload-report/report/report.component.ts");
/* harmony import */ var _report_finacial_finacial_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./report/finacial/finacial.component */ "./src/app/upload-report/report/finacial/finacial.component.ts");
/* harmony import */ var _report_erm_erm_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./report/erm/erm.component */ "./src/app/upload-report/report/erm/erm.component.ts");
/* harmony import */ var _report_map_map_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./report/map/map.component */ "./src/app/upload-report/report/map/map.component.ts");
/* harmony import */ var ng2_datepicker__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng2-datepicker */ "./node_modules/ng2-datepicker/dist/bundles/ng2-datepicker.umd.js");
/* harmony import */ var ng2_datepicker__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(ng2_datepicker__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _submit_history_submit_history_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./submit-history/submit-history.component */ "./src/app/upload-report/submit-history/submit-history.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















// import { NKDatetimeModule } from 'ng2-datetime/ng2-datetime';

// import { LoadingModule } from 'ngx-loading';

var routes = [
    {
        path: '', redirectTo: 'upload', pathMatch: 'full'
    }, {
        path: 'upload', component: _upload_data_upload_data_component__WEBPACK_IMPORTED_MODULE_5__["UploadDataComponent"]
    }, {
        path: 'report', component: _report_report_component__WEBPACK_IMPORTED_MODULE_13__["ReportComponent"], children: [
            { path: '', redirectTo: 'finacial', pathMatch: 'full' },
            { path: 'finacial', component: _report_finacial_finacial_component__WEBPACK_IMPORTED_MODULE_14__["FinacialComponent"] },
            { path: 'erm', component: _report_erm_erm_component__WEBPACK_IMPORTED_MODULE_15__["ErmComponent"] },
            { path: 'map', component: _report_map_map_component__WEBPACK_IMPORTED_MODULE_16__["MapComponent"] }
        ]
    },
    { path: 'history', component: _submit_history_submit_history_component__WEBPACK_IMPORTED_MODULE_18__["SubmitHistoryComponent"] }
];
var UploadReportModule = /** @class */ (function () {
    function UploadReportModule() {
    }
    UploadReportModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                ngx_file_drop__WEBPACK_IMPORTED_MODULE_11__["FileDropModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                // NKDatetimeModule,
                ng2_datepicker__WEBPACK_IMPORTED_MODULE_17__["NgDatepickerModule"],
                angular2_datatable__WEBPACK_IMPORTED_MODULE_1__["DataTableModule"],
                // LoadingModule,
                _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterModule"].forChild(routes)
            ],
            declarations: [_upload_data_upload_data_component__WEBPACK_IMPORTED_MODULE_5__["UploadDataComponent"], _components_map_data_map_data_component__WEBPACK_IMPORTED_MODULE_6__["MapDataComponent"], _components_file_review_file_review_component__WEBPACK_IMPORTED_MODULE_7__["FileReviewComponent"], _components_history_history_component__WEBPACK_IMPORTED_MODULE_8__["HistoryComponent"], _components_upload_upload_component__WEBPACK_IMPORTED_MODULE_9__["UploadComponent"], _report_report_component__WEBPACK_IMPORTED_MODULE_13__["ReportComponent"], _report_finacial_finacial_component__WEBPACK_IMPORTED_MODULE_14__["FinacialComponent"], _report_erm_erm_component__WEBPACK_IMPORTED_MODULE_15__["ErmComponent"],
                _report_map_map_component__WEBPACK_IMPORTED_MODULE_16__["MapComponent"],
                _pipes_money_pipe__WEBPACK_IMPORTED_MODULE_0__["MoneyPipe"],
                _submit_history_submit_history_component__WEBPACK_IMPORTED_MODULE_18__["SubmitHistoryComponent"]],
            providers: [_upload_service_service__WEBPACK_IMPORTED_MODULE_12__["UploadServiceService"]]
        })
    ], UploadReportModule);
    return UploadReportModule;
}());



/***/ }),

/***/ "./src/app/upload-report/upload-service.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/upload-report/upload-service.service.ts ***!
  \*********************************************************/
/*! exports provided: UploadServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadServiceService", function() { return UploadServiceService; });
/* harmony import */ var _shared_services_http_method__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../shared/services/http.method */ "./src/app/shared/services/http.method.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UploadServiceService = /** @class */ (function () {
    function UploadServiceService(http, http_method) {
        this.http = http;
        this.http_method = http_method;
        this.baseUrl = this.http_method.baseUrl;
    }
    UploadServiceService.prototype.getTypeFile = function (file) {
        var name = file.name;
        var type = name.split('.').pop();
        return type;
    };
    UploadServiceService.prototype.getContentFile = function (financial, emr, retail_net_increased_access_dollars) {
        var user;
        if (localStorage.getItem('user')) {
            user = JSON.parse(localStorage.getItem('user'));
        }
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["RequestOptions"]({ withCredentials: true });
        var formData = new FormData();
        formData.append('financial', financial, financial.name);
        if (retail_net_increased_access_dollars) {
            formData.append('retail_net_increased_access_dollars', retail_net_increased_access_dollars);
        }
        if (emr) {
            formData.append('emr', emr, emr.name);
        }
        formData.append('hcf_id', user.health_care_facility_id);
        return this.http.post(this.baseUrl + "report/upload", formData, options).map(function (res) { return res.json(); });
    };
    UploadServiceService.prototype.getHistory = function () {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]({ 'Content-Type': 'application/json' });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["RequestOptions"]({ withCredentials: true });
        var token = this.getLogintoken();
        var url = this.baseUrl + "hcf/uploadhistory?loginToken=" + token;
        return this.http.get(url, options).map(function (res) { return res.json(); });
    };
    UploadServiceService.prototype.getLogintoken = function () {
        if (JSON.parse(localStorage.getItem('currentUser'))) {
            var currentUser = JSON.parse(localStorage.getItem('currentUser'));
            return currentUser.login_token;
        }
        else {
            return null;
        }
    };
    UploadServiceService.prototype.getPrescriberdata = function (from, date_range) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]({ 'Content-Type': 'application/json' });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["RequestOptions"]({ withCredentials: true });
        var token = this.getLogintoken();
        var url = this.baseUrl + ("report/prescriberdata?from_date=" + from + "&date_range=" + date_range);
        return this.http.get(url, options).map(function (res) { return res.json(); });
    };
    UploadServiceService.prototype.getErmData = function (from, to) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]({ 'Content-Type': 'application/json' });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["RequestOptions"]({ withCredentials: true });
        var token = this.getLogintoken();
        var url = this.baseUrl + ("report/emrdata?from_date=" + from + "&date_range=" + to);
        return this.http.get(url, options).map(function (res) { return res.json(); });
    };
    UploadServiceService.prototype.getMapData = function (from, to) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]({ 'Content-Type': 'application/json' });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["RequestOptions"]({ withCredentials: true });
        var token = this.getLogintoken();
        var url = this.baseUrl + ("report/heatmap?from_date=" + from + "&date_range=" + to);
        return this.http.get(url, options).map(function (res) { return res.json(); });
    };
    UploadServiceService.prototype.getSubmitHistory = function () {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]({ 'Content-Type': 'application/json' });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["RequestOptions"]({ withCredentials: true });
        var token = this.getLogintoken();
        var url = this.baseUrl + "report/uploadhistory?loginToken=" + token;
        return this.http.get(url, options).map(function (res) { return res.json(); });
    };
    UploadServiceService.prototype.deleteHistory = function (date) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]({ 'Content-Type': 'application/json' });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["RequestOptions"]({ withCredentials: true });
        var token = this.getLogintoken();
        var url = this.baseUrl + "report/deletemonthly?timeframe=" + date + "&loginToken=" + token;
        return this.http.get(url, options).map(function (res) { return res.json(); });
    };
    UploadServiceService.prototype.uploadspecific = function (file, type, time_frame, is_base_line) {
        var user;
        if (localStorage.getItem('user')) {
            user = JSON.parse(localStorage.getItem('user'));
        }
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["RequestOptions"]({ withCredentials: true });
        var formData = new FormData();
        formData.append('type', type);
        formData.append('file', file, file.name);
        formData.append('time_frame', time_frame);
        formData.append('is_base_line', is_base_line);
        return this.http.post(this.baseUrl + "repport/uploadspecific", formData, options).map(function (res) { return res.json(); });
    };
    UploadServiceService.prototype.deletespecific = function (time, type, baseline) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]({ 'Content-Type': 'application/json' });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["RequestOptions"]({ withCredentials: true });
        var token = this.getLogintoken();
        var url = this.baseUrl + "report/deletespecific";
        var request = { time_frame: time, type: type, is_base_line: baseline };
        return this.http.post(url, request, options).map(function (res) { return res.json(); });
    };
    UploadServiceService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"], _shared_services_http_method__WEBPACK_IMPORTED_MODULE_0__["HttpMethod"]])
    ], UploadServiceService);
    return UploadServiceService;
}());



/***/ })

}]);
//# sourceMappingURL=upload-report-upload-report-module.js.map