"use strict";const t=require("vue"),f=require("./CdxLabel.cjs"),h=require("./useLabelChecker.js"),k=require("./useModelWrapper.cjs"),c=require("./useGeneratedId.cjs"),C=require("./useFieldData.cjs"),u=require("./constants.js"),y=require("./_plugin-vue_export-helper.js");require("./Icon.js");require("./useComputedDirection.cjs");require("./useComputedLanguage.cjs");require("./useSplitAttributes.cjs");require("./useSlotContents.js");require("./useWarnOnce.cjs");require("./useComputedDisabled.cjs");const q=u.makeStringTypeValidator(u.ValidationStatusTypes),$=t.defineComponent({name:"CdxCheckbox",components:{CdxLabel:f},props:{modelValue:{type:[Boolean,Array],default:!1},inputValue:{type:[String,Number,Boolean],default:!1},disabled:{type:Boolean,default:!1},indeterminate:{type:Boolean,default:!1},inline:{type:Boolean,default:!1},status:{type:String,default:"default",validator:q}},emits:["update:modelValue"],setup(e,{emit:o,slots:s,attrs:n}){var a;h.useLabelChecker((a=s.default)==null?void 0:a.call(s),n,"CdxCheckbox");const{computedDisabled:l,computedStatus:r}=C(t.toRef(e,"disabled"),t.toRef(e,"status")),d=t.computed(()=>({"cdx-checkbox--inline":e.inline,["cdx-checkbox--status-".concat(r.value)]:!0})),i=t.ref(),p=c("checkbox"),b=c("description"),m=k(t.toRef(e,"modelValue"),o);return{rootClasses:d,computedDisabled:l,input:i,checkboxId:p,descriptionId:b,wrappedModel:m}}});const v=["id","aria-describedby","value","disabled",".indeterminate"],x=t.createElementVNode("span",{class:"cdx-checkbox__icon"},null,-1);function V(e,o,s,n,l,r){const d=t.resolveComponent("cdx-label");return t.openBlock(),t.createElementBlock("span",{class:t.normalizeClass(["cdx-checkbox",e.rootClasses])},[t.withDirectives(t.createElementVNode("input",{id:e.checkboxId,ref:"input","onUpdate:modelValue":o[0]||(o[0]=i=>e.wrappedModel=i),class:"cdx-checkbox__input",type:"checkbox","aria-describedby":e.$slots.description&&e.$slots.description().length>0?e.descriptionId:void 0,value:e.inputValue,disabled:e.computedDisabled,".indeterminate":e.indeterminate},null,40,v),[[t.vModelCheckbox,e.wrappedModel]]),x,e.$slots.default&&e.$slots.default().length?(t.openBlock(),t.createBlock(d,{key:0,class:"cdx-checkbox__label","input-id":e.checkboxId,"description-id":e.$slots.description&&e.$slots.description().length>0?e.descriptionId:void 0,disabled:e.computedDisabled},t.createSlots({default:t.withCtx(()=>[t.renderSlot(e.$slots,"default")]),_:2},[e.$slots.description&&e.$slots.description().length>0?{name:"description",fn:t.withCtx(()=>[t.renderSlot(e.$slots,"description")]),key:"0"}:void 0]),1032,["input-id","description-id","disabled"])):t.createCommentVNode("",!0)],2)}const g=y._export_sfc($,[["render",V]]);module.exports=g;
