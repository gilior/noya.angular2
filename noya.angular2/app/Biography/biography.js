"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var base_component_1 = require("../common/base.component");
var router_1 = require("@angular/router");
var services = require("../services/services");
var dal = require("../dal/models");
var Biography = (function (_super) {
    __extends(Biography, _super);
    function Biography(dataService, router, injector) {
        var _this = _super.call(this, injector) || this;
        _this.dataService = dataService;
        _this.router = router;
        _this.injector = injector;
        return _this;
    }
    //@HostBinding('@routeAnimation') routeAnimation = true;
    //@HostBinding('style.display') display = 'block';
    //@HostBinding('style.position') position = 'absolute';
    Biography.prototype.ngOnInit = function () {
        var _this = this;
        var req = { Language: dal.Language.Hebrew };
        this.dataService.ConnectToApiData(req, 'api/Data/GetCV').subscribe(function (res) { _this.cvs = res.CVs; }, function (err) { console.error('error in Biography in ngOnInit: ' + err.ErrorText); }, function () { });
    };
    return Biography;
}(base_component_1.BaseComponent));
Biography = __decorate([
    core_1.Component({
        templateUrl: "./biography.html",
        moduleId: module.id,
    }),
    __metadata("design:paramtypes", [services.DataService, router_1.Router, core_1.Injector])
], Biography);
exports.Biography = Biography;
//# sourceMappingURL=biography.js.map