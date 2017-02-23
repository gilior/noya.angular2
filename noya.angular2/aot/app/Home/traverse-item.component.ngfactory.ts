/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from '../../../app/Home/traverse-item.component';
import * as import1 from '@angular/core/src/change_detection/change_detection_util';
import * as import2 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/render/api';
import * as import5 from '@angular/core/src/metadata/view';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/constants';
import * as import8 from '@angular/core/src/linker/component_factory';
import * as import9 from '../../../app/services/services';
import * as import10 from './traverse-item.component.css.shim.ngstyle';
import * as import11 from '@angular/core/src/animation/animation_transition';
import * as import12 from '@angular/core/src/animation/animation_sequence_player';
import * as import13 from '@angular/core/src/animation/animation_styles';
import * as import14 from '@angular/core/src/animation/animation_style_util';
import * as import15 from '@angular/core/src/animation/animation_keyframe';
import * as import16 from '@angular/core/src/animation/animation_player';
import * as import17 from '@angular/core/src/linker/view_container';
import * as import18 from '../../node_modules/@angular/common/src/directives/ng_if.ngfactory';
import * as import19 from '../../../app/pipes/pipes';
import * as import20 from '@angular/core/src/linker/template_ref';
import * as import21 from '@angular/platform-browser/src/security/dom_sanitization_service';
import * as import22 from '@angular/common/src/directives/ng_if';
import * as import23 from '@angular/core/src/security';
export class Wrapper_TraverseItemComponent {
  /*private*/ _eventHandler:Function;
  context:import0.TraverseItemComponent;
  /*private*/ _changed:boolean;
  /*private*/ _expr_0:any;
  constructor(p0:any) {
    this._changed = false;
    this.context = new import0.TraverseItemComponent(p0);
    this._expr_0 = import1.UNINITIALIZED;
  }
  ngOnDetach(view:import2.AppView<any>,componentView:import2.AppView<any>,el:any):void {
  }
  ngOnDestroy():void {
  }
  check_traverseItem(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_0,currValue))) {
      this._changed = true;
      this.context.traverseItem = currValue;
      this._expr_0 = currValue;
    }
  }
  ngDoCheck(view:import2.AppView<any>,el:any,throwOnChange:boolean):boolean {
    var changed:any = this._changed;
    this._changed = false;
    if (!throwOnChange) { if ((view.numberOfChecks === 0)) { this.context.ngOnInit(); } }
    return changed;
  }
  checkHost(view:import2.AppView<any>,componentView:import2.AppView<any>,el:any,throwOnChange:boolean):void {
  }
  handleEvent(eventName:string,$event:any):boolean {
    var result:boolean = true;
    return result;
  }
  subscribe(view:import2.AppView<any>,_eventHandler:any):void {
    this._eventHandler = _eventHandler;
  }
}
var renderType_TraverseItemComponent_Host:import4.RenderComponentType = import3.createRenderComponentType('',0,import5.ViewEncapsulation.None,([] as any[]),{});
class View_TraverseItemComponent_Host0 extends import2.AppView<any> {
  _el_0:any;
  compView_0:import2.AppView<import0.TraverseItemComponent>;
  _TraverseItemComponent_0_3:Wrapper_TraverseItemComponent;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_TraverseItemComponent_Host0,renderType_TraverseItemComponent_Host,import6.ViewType.HOST,viewUtils,parentView,parentIndex,parentElement,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer,'traverse-item',import3.EMPTY_INLINE_ARRAY,rootSelector,(null as any));
    this.compView_0 = new View_TraverseItemComponent0(this.viewUtils,this,0,this._el_0);
    this._TraverseItemComponent_0_3 = new Wrapper_TraverseItemComponent(this.injectorGet(import9.DataService,this.parentIndex));
    this.compView_0.create(this._TraverseItemComponent_0_3.context);
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [this._el_0]),(null as any));
    return new import8.ComponentRef_<any>(0,this,this._el_0,this._TraverseItemComponent_0_3.context);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.TraverseItemComponent) && (0 === requestNodeIndex))) { return this._TraverseItemComponent_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._TraverseItemComponent_0_3.ngDoCheck(this,this._el_0,throwOnChange);
    this.compView_0.internalDetectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_0.destroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
export const TraverseItemComponentNgFactory:import8.ComponentFactory<import0.TraverseItemComponent> = new import8.ComponentFactory<import0.TraverseItemComponent>('traverse-item',View_TraverseItemComponent_Host0,import0.TraverseItemComponent);
const styles_TraverseItemComponent:any[] = [import10.styles];
var TraverseItemComponent_flyInOut_states:any = {
  'in': {'transform': 'translateX(0)'},
  '*': {},
  'void': {}
}
;
function TraverseItemComponent_flyInOut_factory(view:import2.AppView<any>,element:any,currentState:any,nextState:any):import11.AnimationTransition {
  var previousPlayers:any = view.animationContext.getAnimationPlayers(element,((nextState == 'void')? (null as any): 'flyInOut'));
  var collectedStyles:any = {};
  var player:any = (null as any);
  var totalTime:any = 0;
  var defaultStateStyles:any = TraverseItemComponent_flyInOut_states['*'];
  var startStateStyles:any = TraverseItemComponent_flyInOut_states[currentState];
  if ((startStateStyles == (null as any))) { (startStateStyles = defaultStateStyles); }
  var endStateStyles:any = TraverseItemComponent_flyInOut_states[nextState];
  if ((endStateStyles == (null as any))) { (endStateStyles = defaultStateStyles); }
  if (((player == (null as any)) && ((currentState == 'void') && true))) {
      player = new import12.AnimationSequencePlayer([view.renderer.animate(element,new import13.AnimationStyles(import14.collectAndResolveStyles(collectedStyles,[
        startStateStyles,
        {'transform': 'translateX(-100%)'}
      ]
      )),import14.balanceAnimationKeyframes(collectedStyles,endStateStyles,[
        new import15.AnimationKeyframe(0,new import13.AnimationStyles(import14.collectAndResolveStyles(collectedStyles,[{}]))),
        new import15.AnimationKeyframe(1,new import13.AnimationStyles(import14.collectAndResolveStyles(collectedStyles,[{}])))
      ]
    ),1000,0,(null as any),previousPlayers)]);
    totalTime = 1000;
  }
  if (((player == (null as any)) && (true && (nextState == 'void')))) {
      player = new import12.AnimationSequencePlayer([view.renderer.animate(element,new import13.AnimationStyles(import14.collectAndResolveStyles(collectedStyles,[startStateStyles])),[
        new import15.AnimationKeyframe(0,new import13.AnimationStyles(import14.collectAndResolveStyles(collectedStyles,[{'transform': 'true'}]))),
        new import15.AnimationKeyframe(1,new import13.AnimationStyles(import14.collectAndResolveStyles(collectedStyles,[{'transform': 'translateX(100%)'}])))
      ]
    ,1000,0,(null as any),previousPlayers)]);
    totalTime = 1000;
  }
  if ((player == (null as any))) { (player = new import16.NoOpAnimationPlayer()); }
  player.onDone(():void => {
    player.destroy();
    import14.renderStyles(element,view.renderer,import14.prepareFinalAnimationStyles(startStateStyles,endStateStyles));
  });
  new import12.AnimationSequencePlayer(previousPlayers).destroy();
  import14.renderStyles(element,view.renderer,import14.clearStyles(startStateStyles));
  view.animationContext.queueAnimation(element,'flyInOut',player);
  return new import11.AnimationTransition(player,currentState,nextState,totalTime);
}
var TraverseItemComponent_modalState_states:any = {
  'block': {'opacity': '1'},
  'none': {'opacity': '0'},
  '*': {}
}
;
function TraverseItemComponent_modalState_factory(view:import2.AppView<any>,element:any,currentState:any,nextState:any):import11.AnimationTransition {
  var previousPlayers:any = view.animationContext.getAnimationPlayers(element,((nextState == 'void')? (null as any): 'modalState'));
  var collectedStyles:any = {};
  var player:any = (null as any);
  var totalTime:any = 0;
  var defaultStateStyles:any = TraverseItemComponent_modalState_states['*'];
  var startStateStyles:any = TraverseItemComponent_modalState_states[currentState];
  if ((startStateStyles == (null as any))) { (startStateStyles = defaultStateStyles); }
  var endStateStyles:any = TraverseItemComponent_modalState_states[nextState];
  if ((endStateStyles == (null as any))) { (endStateStyles = defaultStateStyles); }
  if ((player == (null as any))) { (player = new import16.NoOpAnimationPlayer()); }
  player.onDone(():void => {
    player.destroy();
    import14.renderStyles(element,view.renderer,import14.prepareFinalAnimationStyles(startStateStyles,endStateStyles));
  });
  new import12.AnimationSequencePlayer(previousPlayers).destroy();
  import14.renderStyles(element,view.renderer,import14.clearStyles(startStateStyles));
  view.animationContext.queueAnimation(element,'modalState',player);
  return new import11.AnimationTransition(player,currentState,nextState,totalTime);
}
var TraverseItemComponent_contentImageState_states:any = {
  'active': {
    'opacity': '1',
    'hidden': 'false',
    'display': 'inline'
  }
  ,
  'inactive': {
    'opacity': '0',
    'hidden': 'true',
    'display': 'none'
  }
  ,
  '*': {}
}
;
function TraverseItemComponent_contentImageState_factory(view:import2.AppView<any>,element:any,currentState:any,nextState:any):import11.AnimationTransition {
  var previousPlayers:any = view.animationContext.getAnimationPlayers(element,((nextState == 'void')? (null as any): 'contentImageState'));
  var collectedStyles:any = {};
  var player:any = (null as any);
  var totalTime:any = 0;
  var defaultStateStyles:any = TraverseItemComponent_contentImageState_states['*'];
  var startStateStyles:any = TraverseItemComponent_contentImageState_states[currentState];
  if ((startStateStyles == (null as any))) { (startStateStyles = defaultStateStyles); }
  var endStateStyles:any = TraverseItemComponent_contentImageState_states[nextState];
  if ((endStateStyles == (null as any))) { (endStateStyles = defaultStateStyles); }
  if (((player == (null as any)) && ((currentState == 'inactive') && (nextState == 'active')))) {
      player = new import12.AnimationSequencePlayer([view.renderer.animate(element,new import13.AnimationStyles(import14.collectAndResolveStyles(collectedStyles,[
        startStateStyles,
        {'opacity': '0'}
      ]
      )),import14.balanceAnimationKeyframes(collectedStyles,endStateStyles,[
        new import15.AnimationKeyframe(0,new import13.AnimationStyles(import14.collectAndResolveStyles(collectedStyles,[{}]))),
        new import15.AnimationKeyframe(1,new import13.AnimationStyles(import14.collectAndResolveStyles(collectedStyles,[{}])))
      ]
    ),1000,0,(null as any),previousPlayers)]);
    totalTime = 1000;
  }
  if ((player == (null as any))) { (player = new import16.NoOpAnimationPlayer()); }
  player.onDone(():void => {
    player.destroy();
    import14.renderStyles(element,view.renderer,import14.prepareFinalAnimationStyles(startStateStyles,endStateStyles));
  });
  new import12.AnimationSequencePlayer(previousPlayers).destroy();
  import14.renderStyles(element,view.renderer,import14.clearStyles(startStateStyles));
  view.animationContext.queueAnimation(element,'contentImageState',player);
  return new import11.AnimationTransition(player,currentState,nextState,totalTime);
}
var TraverseItemComponent_contentTextState_states:any = {
  'active': {
    'opacity': '1',
    'hidden': 'false'
  }
  ,
  'inactive': {
    'opacity': '0',
    'hidden': 'true'
  }
  ,
  '*': {}
}
;
function TraverseItemComponent_contentTextState_factory(view:import2.AppView<any>,element:any,currentState:any,nextState:any):import11.AnimationTransition {
  var previousPlayers:any = view.animationContext.getAnimationPlayers(element,((nextState == 'void')? (null as any): 'contentTextState'));
  var collectedStyles:any = {};
  var player:any = (null as any);
  var totalTime:any = 0;
  var defaultStateStyles:any = TraverseItemComponent_contentTextState_states['*'];
  var startStateStyles:any = TraverseItemComponent_contentTextState_states[currentState];
  if ((startStateStyles == (null as any))) { (startStateStyles = defaultStateStyles); }
  var endStateStyles:any = TraverseItemComponent_contentTextState_states[nextState];
  if ((endStateStyles == (null as any))) { (endStateStyles = defaultStateStyles); }
  if (((player == (null as any)) && ((currentState == 'inactive') && (nextState == 'active')))) {
      player = new import12.AnimationSequencePlayer([view.renderer.animate(element,new import13.AnimationStyles(import14.collectAndResolveStyles(collectedStyles,[
        startStateStyles,
        {'opacity': '0'}
      ]
      )),import14.balanceAnimationKeyframes(collectedStyles,endStateStyles,[
        new import15.AnimationKeyframe(0,new import13.AnimationStyles(import14.collectAndResolveStyles(collectedStyles,[{}]))),
        new import15.AnimationKeyframe(1,new import13.AnimationStyles(import14.collectAndResolveStyles(collectedStyles,[{}])))
      ]
    ),1000,0,(null as any),previousPlayers)]);
    totalTime = 1000;
  }
  if ((player == (null as any))) { (player = new import16.NoOpAnimationPlayer()); }
  player.onDone(():void => {
    player.destroy();
    import14.renderStyles(element,view.renderer,import14.prepareFinalAnimationStyles(startStateStyles,endStateStyles));
  });
  new import12.AnimationSequencePlayer(previousPlayers).destroy();
  import14.renderStyles(element,view.renderer,import14.clearStyles(startStateStyles));
  view.animationContext.queueAnimation(element,'contentTextState',player);
  return new import11.AnimationTransition(player,currentState,nextState,totalTime);
}
class View_TraverseItemComponent1 extends import2.AppView<any> {
  _el_0:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any,declaredViewContainer:import17.ViewContainer) {
    super(View_TraverseItemComponent1,renderType_TraverseItemComponent,import6.ViewType.EMBEDDED,viewUtils,parentView,parentIndex,parentElement,import7.ChangeDetectorStatus.CheckAlways,declaredViewContainer);
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    this._el_0 = import3.createRenderElement(this.renderer,(null as any),'img',new import3.InlineArray4(4,'class','item-content--toggle-state--img','src','../../Content/Images/close.ico'),(null as any));
    var disposable_0:Function = import3.subscribeToRenderElement(this,this._el_0,new import3.InlineArray2(2,'click',(null as any)),this.eventHandler(this.handleEvent_0));
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [this._el_0]),[disposable_0]);
    return (null as any);
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
  handleEvent_0(eventName:string,$event:any):boolean {
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    if ((eventName == 'click')) {
      const pd_sub_0:any = ((<any>this.parentView.context.toggleImageMode()) !== false);
      result = (pd_sub_0 && result);
    }
    return result;
  }
}
var renderType_TraverseItemComponent:import4.RenderComponentType = import3.createRenderComponentType('',0,import5.ViewEncapsulation.Emulated,styles_TraverseItemComponent,{
  'flyInOut': TraverseItemComponent_flyInOut_factory,
  'modalState': TraverseItemComponent_modalState_factory,
  'contentImageState': TraverseItemComponent_contentImageState_factory,
  'contentTextState': TraverseItemComponent_contentTextState_factory
}
);
export class View_TraverseItemComponent0 extends import2.AppView<import0.TraverseItemComponent> {
  _text_0:any;
  _el_1:any;
  _text_2:any;
  _el_3:any;
  _text_4:any;
  _el_5:any;
  _text_6:any;
  _text_7:any;
  _el_8:any;
  _text_9:any;
  _anchor_10:any;
  /*private*/ _vc_10:import17.ViewContainer;
  _TemplateRef_10_5:any;
  _NgIf_10_6:import18.Wrapper_NgIf;
  _text_11:any;
  _text_12:any;
  _el_13:any;
  _text_14:any;
  _el_15:any;
  _text_16:any;
  _text_17:any;
  _el_18:any;
  _text_19:any;
  _text_20:any;
  _text_21:any;
  _el_22:any;
  _text_23:any;
  _el_24:any;
  _text_25:any;
  _el_26:any;
  _text_27:any;
  _el_28:any;
  _text_29:any;
  _el_30:any;
  _text_31:any;
  _el_32:any;
  _text_33:any;
  _text_34:any;
  _el_35:any;
  _text_36:any;
  _text_37:any;
  _el_38:any;
  _text_39:any;
  _text_40:any;
  _text_41:any;
  _text_42:any;
  _el_43:any;
  _el_44:any;
  _text_45:any;
  _text_46:any;
  /*private*/ _expr_50:any;
  /*private*/ _expr_51:any;
  /*private*/ _expr_52:any;
  /*private*/ _expr_53:any;
  /*private*/ _expr_54:any;
  _pipe_safeResource_0:import19.SafeResourcePipe;
  _pipe_safeResource_0_0:any;
  /*private*/ _expr_57:any;
  _pipe_safeResource_0_1:any;
  /*private*/ _expr_59:any;
  /*private*/ _expr_60:any;
  /*private*/ _expr_61:any;
  /*private*/ _expr_62:any;
  _pipe_safeResource_0_2:any;
  /*private*/ _expr_64:any;
  _pipe_safeResource_0_3:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_TraverseItemComponent0,renderType_TraverseItemComponent,import6.ViewType.COMPONENT,viewUtils,parentView,parentIndex,parentElement,import7.ChangeDetectorStatus.CheckAlways);
    this._expr_50 = import1.UNINITIALIZED;
    this._expr_51 = import1.UNINITIALIZED;
    this._expr_52 = import1.UNINITIALIZED;
    this._expr_53 = import1.UNINITIALIZED;
    this._expr_54 = import1.UNINITIALIZED;
    this._expr_57 = import1.UNINITIALIZED;
    this._expr_59 = import1.UNINITIALIZED;
    this._expr_60 = import1.UNINITIALIZED;
    this._expr_61 = import1.UNINITIALIZED;
    this._expr_62 = import1.UNINITIALIZED;
    this._expr_64 = import1.UNINITIALIZED;
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    const parentRenderNode:any = this.renderer.createViewRoot(this.parentElement);
    this._text_0 = this.renderer.createText(parentRenderNode,'\n',(null as any));
    this._el_1 = import3.createRenderElement(this.renderer,parentRenderNode,'div',new import3.InlineArray2(2,'class','row item-wrp text-center'),(null as any));
    this._text_2 = this.renderer.createText(this._el_1,'\n\n    ',(null as any));
    this._el_3 = import3.createRenderElement(this.renderer,this._el_1,'div',new import3.InlineArray2(2,'class','col-lg-12 text-center'),(null as any));
    this._text_4 = this.renderer.createText(this._el_3,'\n        ',(null as any));
    this._el_5 = import3.createRenderElement(this.renderer,this._el_3,'div',new import3.InlineArray2(2,'class','item-content'),(null as any));
    this._text_6 = this.renderer.createText(this._el_5,'\n            ',(null as any));
    this._text_7 = this.renderer.createText(this._el_5,'\n            ',(null as any));
    this._el_8 = import3.createRenderElement(this.renderer,this._el_5,'div',new import3.InlineArray2(2,'class','item-content--toggle-state'),(null as any));
    this._text_9 = this.renderer.createText(this._el_8,'\n\n                ',(null as any));
    this._anchor_10 = this.renderer.createTemplateAnchor(this._el_8,(null as any));
    this._vc_10 = new import17.ViewContainer(10,8,this,this._anchor_10);
    this._TemplateRef_10_5 = new import20.TemplateRef_(this,10,this._anchor_10);
    this._NgIf_10_6 = new import18.Wrapper_NgIf(this._vc_10.vcRef,this._TemplateRef_10_5);
    this._text_11 = this.renderer.createText(this._el_8,'\n            ',(null as any));
    this._text_12 = this.renderer.createText(this._el_5,'\n\n            ',(null as any));
    this._el_13 = import3.createRenderElement(this.renderer,this._el_5,'img',new import3.InlineArray4(4,'alt','','class','item-content--img'),(null as any));
    this._text_14 = this.renderer.createText(this._el_5,'\n            ',(null as any));
    this._el_15 = import3.createRenderElement(this.renderer,this._el_5,'div',new import3.InlineArray2(2,'class','item-content--card-text'),(null as any));
    this._text_16 = this.renderer.createText(this._el_5,'\n        ',(null as any));
    this._text_17 = this.renderer.createText(this._el_3,'\n\n        ',(null as any));
    this._el_18 = import3.createRenderElement(this.renderer,this._el_3,'div',new import3.InlineArray2(2,'class','item-caption pointer'),(null as any));
    this._text_19 = this.renderer.createText(this._el_3,'\n\n    ',(null as any));
    this._text_20 = this.renderer.createText(this._el_1,'\n\n',(null as any));
    this._text_21 = this.renderer.createText(parentRenderNode,'\n\n\n\n',(null as any));
    this._el_22 = import3.createRenderElement(this.renderer,parentRenderNode,'div',new import3.InlineArray16(10,'aria-labelledby','myModalLabel','class','modal','data-backdrop','false','role','dialog','tabindex','-1'),(null as any));
    this._text_23 = this.renderer.createText(this._el_22,'\n    ',(null as any));
    this._el_24 = import3.createRenderElement(this.renderer,this._el_22,'div',new import3.InlineArray4(4,'class','modal-dialog','role','document'),(null as any));
    this._text_25 = this.renderer.createText(this._el_24,'\n        ',(null as any));
    this._el_26 = import3.createRenderElement(this.renderer,this._el_24,'div',new import3.InlineArray2(2,'class','modal-content'),(null as any));
    this._text_27 = this.renderer.createText(this._el_26,'\n            ',(null as any));
    this._el_28 = import3.createRenderElement(this.renderer,this._el_26,'div',new import3.InlineArray2(2,'class','modal-header'),(null as any));
    this._text_29 = this.renderer.createText(this._el_28,'\n                ',(null as any));
    this._el_30 = import3.createRenderElement(this.renderer,this._el_28,'button',new import3.InlineArray8(6,'aria-label','Close','class','close','type','button'),(null as any));
    this._text_31 = this.renderer.createText(this._el_30,'\n\n                    ',(null as any));
    this._el_32 = import3.createRenderElement(this.renderer,this._el_30,'img',new import3.InlineArray2(2,'src','../../Content/Images/close.ico'),(null as any));
    this._text_33 = this.renderer.createText(this._el_30,'\n                ',(null as any));
    this._text_34 = this.renderer.createText(this._el_28,'\n                ',(null as any));
    this._el_35 = import3.createRenderElement(this.renderer,this._el_28,'h4',new import3.InlineArray4(4,'class','modal-title text-center','id','myModalLabel'),(null as any));
    this._text_36 = this.renderer.createText(this._el_28,'\n            ',(null as any));
    this._text_37 = this.renderer.createText(this._el_26,'\n            ',(null as any));
    this._el_38 = import3.createRenderElement(this.renderer,this._el_26,'div',new import3.InlineArray2(2,'class','modal-body'),(null as any));
    this._text_39 = this.renderer.createText(this._el_38,'\n\n            ',(null as any));
    this._text_40 = this.renderer.createText(this._el_26,'\n\n        ',(null as any));
    this._text_41 = this.renderer.createText(this._el_24,'\n    ',(null as any));
    this._text_42 = this.renderer.createText(this._el_22,'\n    ',(null as any));
    this._el_43 = import3.createRenderElement(this.renderer,this._el_22,'div',new import3.InlineArray2(2,'class','modal-feature'),(null as any));
    this._el_44 = import3.createRenderElement(this.renderer,this._el_43,'iframe',new import3.InlineArray16(10,'allowfullscreen','','frameborder','0','height','315','src','https://www.youtube.com/embed/ss7EJ-PW2Uk','width','560'),(null as any));
    this._text_45 = this.renderer.createText(this._el_43,' ',(null as any));
    this._text_46 = this.renderer.createText(this._el_22,'\n',(null as any));
    var disposable_0:Function = import3.subscribeToRenderElement(this,this._el_13,new import3.InlineArray2(2,'click',(null as any)),this.eventHandler(this.handleEvent_13));
    this._pipe_safeResource_0 = new import19.SafeResourcePipe(this.parentView.injectorGet(import9.DataService,this.parentIndex),this.parentView.injectorGet(import9.CacheManager,this.parentIndex),this.parentView.injectorGet(import21.DomSanitizer,this.parentIndex));
    this._pipe_safeResource_0_0 = import3.pureProxy2(this._pipe_safeResource_0.transform.bind(this._pipe_safeResource_0));
    var disposable_1:Function = import3.subscribeToRenderElement(this,this._el_18,new import3.InlineArray2(2,'click',(null as any)),this.eventHandler(this.handleEvent_18));
    this._pipe_safeResource_0_1 = import3.pureProxy2(this._pipe_safeResource_0.transform.bind(this._pipe_safeResource_0));
    var disposable_2:Function = import3.subscribeToRenderElement(this,this._el_30,new import3.InlineArray2(2,'click',(null as any)),this.eventHandler(this.handleEvent_30));
    this._pipe_safeResource_0_2 = import3.pureProxy2(this._pipe_safeResource_0.transform.bind(this._pipe_safeResource_0));
    this._pipe_safeResource_0_3 = import3.pureProxy2(this._pipe_safeResource_0.transform.bind(this._pipe_safeResource_0));
    this.init((null as any),((<any>this.renderer).directRenderer? (null as any): [
      this._text_0,
      this._el_1,
      this._text_2,
      this._el_3,
      this._text_4,
      this._el_5,
      this._text_6,
      this._text_7,
      this._el_8,
      this._text_9,
      this._anchor_10,
      this._text_11,
      this._text_12,
      this._el_13,
      this._text_14,
      this._el_15,
      this._text_16,
      this._text_17,
      this._el_18,
      this._text_19,
      this._text_20,
      this._text_21,
      this._el_22,
      this._text_23,
      this._el_24,
      this._text_25,
      this._el_26,
      this._text_27,
      this._el_28,
      this._text_29,
      this._el_30,
      this._text_31,
      this._el_32,
      this._text_33,
      this._text_34,
      this._el_35,
      this._text_36,
      this._text_37,
      this._el_38,
      this._text_39,
      this._text_40,
      this._text_41,
      this._text_42,
      this._el_43,
      this._el_44,
      this._text_45,
      this._text_46
    ]
    ),[
      disposable_0,
      disposable_1,
      disposable_2
    ]
    );
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import20.TemplateRef) && (10 === requestNodeIndex))) { return this._TemplateRef_10_5; }
    if (((token === import22.NgIf) && (10 === requestNodeIndex))) { return this._NgIf_10_6.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const valUnwrapper:any = new import1.ValueUnwrapper();
    const currVal_51:any = this.context.contentImageState;
    if (import3.checkBinding(throwOnChange,this._expr_51,currVal_51)) {
      var animationTransition_contentImageState:any = this.componentType.animations['contentImageState'](this,this._el_13,((this._expr_51 == import1.UNINITIALIZED)? 'void': this._expr_51),((currVal_51 == import1.UNINITIALIZED)? 'void': currVal_51));
      this._expr_51 = currVal_51;
    }
    const currVal_52:any = this.context.contentTextState;
    if (import3.checkBinding(throwOnChange,this._expr_52,currVal_52)) {
      var animationTransition_contentTextState:any = this.componentType.animations['contentTextState'](this,this._el_15,((this._expr_52 == import1.UNINITIALIZED)? 'void': this._expr_52),((currVal_52 == import1.UNINITIALIZED)? 'void': currVal_52));
      this._expr_52 = currVal_52;
    }
    const currVal_60:any = this.context.modalState;
    if (import3.checkBinding(throwOnChange,this._expr_60,currVal_60)) {
      var animationTransition_modalState:any = this.componentType.animations['modalState'](this,this._el_22,((this._expr_60 == import1.UNINITIALIZED)? 'void': this._expr_60),((currVal_60 == import1.UNINITIALIZED)? 'void': currVal_60));
      this._expr_60 = currVal_60;
    }
    const currVal_10_0_0:boolean = !this.context.isImageMode;
    this._NgIf_10_6.check_ngIf(currVal_10_0_0,throwOnChange,false);
    this._NgIf_10_6.ngDoCheck(this,this._anchor_10,throwOnChange);
    this._vc_10.detectChangesInNestedViews(throwOnChange);
    const currVal_50:any = this.context.traverseItem.Image_Url;
    if (import3.checkBinding(throwOnChange,this._expr_50,currVal_50)) {
      this.renderer.setElementProperty(this._el_13,'src',this.viewUtils.sanitizer.sanitize(import23.SecurityContext.URL,currVal_50));
      this._expr_50 = currVal_50;
    }
    const currVal_53:any = this.context.isImageMode;
    if (import3.checkBinding(throwOnChange,this._expr_53,currVal_53)) {
      this.renderer.setElementProperty(this._el_15,'hidden',currVal_53);
      this._expr_53 = currVal_53;
    }
    valUnwrapper.reset();
    const currVal_54:any = valUnwrapper.unwrap(import3.castByValue(this._pipe_safeResource_0_0,this._pipe_safeResource_0.transform)(this.context.traverseItem.Text,0));
    if ((valUnwrapper.hasWrappedValue || import3.checkBinding(throwOnChange,this._expr_54,currVal_54))) {
      this.renderer.setElementProperty(this._el_15,'innerHTML',this.viewUtils.sanitizer.sanitize(import23.SecurityContext.HTML,currVal_54));
      this._expr_54 = currVal_54;
    }
    valUnwrapper.reset();
    const currVal_57:any = valUnwrapper.unwrap(import3.castByValue(this._pipe_safeResource_0_1,this._pipe_safeResource_0.transform)(this.context.traverseItem.Title,0));
    if ((valUnwrapper.hasWrappedValue || import3.checkBinding(throwOnChange,this._expr_57,currVal_57))) {
      this.renderer.setElementProperty(this._el_18,'innerHTML',this.viewUtils.sanitizer.sanitize(import23.SecurityContext.HTML,currVal_57));
      this._expr_57 = currVal_57;
    }
    const currVal_59:any = this.context.modalState;
    if (import3.checkBinding(throwOnChange,this._expr_59,currVal_59)) {
      this.renderer.setElementStyle(this._el_22,'display',((this.viewUtils.sanitizer.sanitize(import23.SecurityContext.STYLE,currVal_59) == null)? (null as any): this.viewUtils.sanitizer.sanitize(import23.SecurityContext.STYLE,currVal_59).toString()));
      this._expr_59 = currVal_59;
    }
    const currVal_61:any = ('myModal' + this.context.traverseItem.ID);
    if (import3.checkBinding(throwOnChange,this._expr_61,currVal_61)) {
      this.renderer.setElementProperty(this._el_22,'id',currVal_61);
      this._expr_61 = currVal_61;
    }
    valUnwrapper.reset();
    const currVal_62:any = valUnwrapper.unwrap(import3.castByValue(this._pipe_safeResource_0_2,this._pipe_safeResource_0.transform)(this.context.traverseItem.Title,0));
    if ((valUnwrapper.hasWrappedValue || import3.checkBinding(throwOnChange,this._expr_62,currVal_62))) {
      this.renderer.setElementProperty(this._el_35,'innerHTML',this.viewUtils.sanitizer.sanitize(import23.SecurityContext.HTML,currVal_62));
      this._expr_62 = currVal_62;
    }
    valUnwrapper.reset();
    const currVal_64:any = valUnwrapper.unwrap(import3.castByValue(this._pipe_safeResource_0_3,this._pipe_safeResource_0.transform)(this.context.traverseItem.Text,0));
    if ((valUnwrapper.hasWrappedValue || import3.checkBinding(throwOnChange,this._expr_64,currVal_64))) {
      this.renderer.setElementProperty(this._el_38,'innerHTML',this.viewUtils.sanitizer.sanitize(import23.SecurityContext.HTML,currVal_64));
      this._expr_64 = currVal_64;
    }
  }
  destroyInternal():void {
    this._vc_10.destroyNestedViews();
  }
  detachInternal():void {
    var animationTransition_contentImageState:any = this.componentType.animations['contentImageState'](this,this._el_13,this._expr_51,'void');
    var animationTransition_contentTextState:any = this.componentType.animations['contentTextState'](this,this._el_15,this._expr_52,'void');
    var animationTransition_modalState:any = this.componentType.animations['modalState'](this,this._el_22,this._expr_60,'void');
  }
  createEmbeddedViewInternal(nodeIndex:number):import2.AppView<any> {
    if ((nodeIndex == 10)) { return new View_TraverseItemComponent1(this.viewUtils,this,10,this._anchor_10,this._vc_10); }
    return (null as any);
  }
  handleEvent_13(eventName:string,$event:any):boolean {
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    if ((eventName == 'click')) {
      const pd_sub_0:any = ((<any>this.context.toggleImageMode()) !== false);
      result = (pd_sub_0 && result);
    }
    return result;
  }
  handleEvent_18(eventName:string,$event:any):boolean {
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    if ((eventName == 'click')) {
      const pd_sub_0:any = ((<any>this.context.toggleImageMode()) !== false);
      result = (pd_sub_0 && result);
    }
    return result;
  }
  handleEvent_30(eventName:string,$event:any):boolean {
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    if ((eventName == 'click')) {
      const pd_sub_0:any = ((<any>this.context.toggleModalState('none')) !== false);
      result = (pd_sub_0 && result);
    }
    return result;
  }
}