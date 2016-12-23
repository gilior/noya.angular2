/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
/* tslint:disable */
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var import0 = require('../../../app/Home/home');
var import1 = require('@angular/core/src/linker/view');
var import3 = require('@angular/core/src/linker/view_utils');
var import4 = require('@angular/core/src/metadata/view');
var import5 = require('@angular/core/src/linker/view_type');
var import6 = require('@angular/core/src/change_detection/constants');
var import7 = require('@angular/core/src/linker/component_factory');
var import8 = require('@angular/router/src/router');
var import9 = require('../../../app/services/services');
var Wrapper_Home = (function () {
    function Wrapper_Home(p0, p1, p2, p3) {
        this._changed = false;
        this.context = new import0.Home(p0, p1, p2, p3);
    }
    Wrapper_Home.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_Home.prototype.ngOnDestroy = function () {
    };
    Wrapper_Home.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        if (!throwOnChange) {
            if ((view.numberOfChecks === 0)) {
                this.context.ngOnInit();
            }
        }
        return changed;
    };
    Wrapper_Home.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_Home.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        return result;
    };
    Wrapper_Home.prototype.subscribe = function (view, _eventHandler) {
        this._eventHandler = _eventHandler;
    };
    return Wrapper_Home;
}());
exports.Wrapper_Home = Wrapper_Home;
var renderType_Home_Host = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, [], {});
var View_Home_Host0 = (function (_super) {
    __extends(View_Home_Host0, _super);
    function View_Home_Host0(viewUtils, parentView, parentIndex, parentElement) {
        _super.call(this, View_Home_Host0, renderType_Home_Host, import5.ViewType.HOST, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways);
    }
    View_Home_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer, 'ng-component', import3.EMPTY_INLINE_ARRAY, rootSelector, null);
        this.compView_0 = new View_Home0(this.viewUtils, this, 0, this._el_0);
        this._Home_0_3 = new Wrapper_Home(this.injectorGet(import8.Router, this.parentIndex), this.injector(0), this.injectorGet(import9.DataService, this.parentIndex), this.injectorGet(import9.CacheManager, this.parentIndex));
        this.compView_0.create(this._Home_0_3.context);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return new import7.ComponentRef_(0, this, this._el_0, this._Home_0_3.context);
    };
    View_Home_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import0.Home) && (0 === requestNodeIndex))) {
            return this._Home_0_3.context;
        }
        return notFoundResult;
    };
    View_Home_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this._Home_0_3.ngDoCheck(this, this._el_0, throwOnChange);
        this.compView_0.internalDetectChanges(throwOnChange);
        if (!throwOnChange) {
            if ((this.numberOfChecks === 0)) {
                this._Home_0_3.context.ngAfterViewInit();
            }
        }
    };
    View_Home_Host0.prototype.destroyInternal = function () {
        this.compView_0.destroy();
    };
    View_Home_Host0.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_Home_Host0;
}(import1.AppView));
exports.HomeNgFactory = new import7.ComponentFactory('ng-component', View_Home_Host0, import0.Home);
var styles_Home = [];
var renderType_Home = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, styles_Home, {});
var View_Home0 = (function (_super) {
    __extends(View_Home0, _super);
    function View_Home0(viewUtils, parentView, parentIndex, parentElement) {
        _super.call(this, View_Home0, renderType_Home, import5.ViewType.COMPONENT, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways);
    }
    View_Home0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.parentElement);
        this._text_0 = this.renderer.createText(parentRenderNode, '\n', null);
        this._text_1 = this.renderer.createText(parentRenderNode, '\n', null);
        this._el_2 = import3.createRenderElement(this.renderer, parentRenderNode, 'img', new import3.InlineArray8(8, 'alt', '', 'class', 'img-responsive ugly-align', 'src', '../../Content/Images/Gallery/Workshops_for_children_during_Hanukkah.png', 'style', 'max-height:900px'), null);
        this._text_3 = this.renderer.createText(parentRenderNode, '\n\n\n', null);
        this._text_4 = this.renderer.createText(parentRenderNode, '\n\n\n\n\n\n\n', null);
        this.init(null, (this.renderer.directRenderer ? null : [
            this._text_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._text_4
        ]), null);
        return null;
    };
    return View_Home0;
}(import1.AppView));
exports.View_Home0 = View_Home0;
//# sourceMappingURL=home.ngfactory.js.map