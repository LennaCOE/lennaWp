import{h,Host}from"@stencil/core";import{__}from"@wordpress/i18n";import{FormSubmitController}from"../../../functions/form-data";import{isRtl}from"../../../functions/page-align";let id=0;export class ScChoice{constructor(){this.inputId="choice-"+ ++id,this.labelId=`choice-label-${id}`,this.hasFocus=!1,this.isStacked=!1,this.name=void 0,this.size="medium",this.value=void 0,this.type="radio",this.disabled=!1,this.checked=!1,this.required=!1,this.invalid=!1,this.showLabel=!0,this.showPrice=!0,this.showControl=!0,this.hasDefaultSlot=void 0,this.hasPrice=void 0,this.hasPer=void 0,this.hasDescription=void 0}async triggerClick(){this.input.click()}async triggerFocus(){this.input.focus()}async reportValidity(){return this.invalid=!this.input.checkValidity(),this.required&&(this.getAllChoices().some((e=>e.checked))?(this.input.setCustomValidity(""),this.invalid=!this.input.checkValidity()):(this.input.setCustomValidity("radio"===this.type?__("Please choose one.","surecart"):__("Please choose at least one.","surecart")),this.invalid=!this.input.checkValidity())),this.input.reportValidity()}handleCheckedChange(){this.input.setCustomValidity(""),"radio"===this.type&&this.checked&&this.getSiblingChoices().map((e=>e.checked=!1)),this.input.checked=this.checked}handleBlur(){this.hasFocus=!1,this.scBlur.emit()}handleFocus(){this.hasFocus=!0,this.scFocus.emit()}async setCustomValidity(e){this.input.setCustomValidity(e),this.invalid=!this.input.checkValidity()}getAllChoices(){const e=this.el.closest("sc-choices")||this.el.parentElement;return e?[...e.querySelectorAll("sc-choice")]:[]}getSiblingChoices(){return this.getAllChoices().filter((e=>e!==this.el))}handleKeyDown(e){if(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(e.key)){const t=this.getAllChoices().filter((e=>!e.disabled)),i=["ArrowUp","ArrowLeft"].includes(e.key)?-1:1;let s=t.indexOf(this.el)+i;s<0&&(s=t.length-1),s>t.length-1&&(s=0),t[s].triggerFocus(),t[s].checked=!0,e.preventDefault()}"Enter"!==e.key&&" "!==e.key||this.handleClickEvent()}handleMouseDown(e){e.preventDefault(),this.input.focus()}componentDidLoad(){this.handleResize(),this.formController=new FormSubmitController(this.el,{value:e=>e.checked?e.value:void 0}).addFormData()}disconnectedCallback(){var e;null===(e=this.formController)||void 0===e||e.removeFormData()}handleResize(){(null===window||void 0===window?void 0:window.ResizeObserver)&&new window.ResizeObserver((e=>{for(let t of e)if(t.contentBoxSize){const e=Array.isArray(t.contentBoxSize)?t.contentBoxSize[0]:t.contentBoxSize;setTimeout((()=>this.isStacked=(null==e?void 0:e.inlineSize)<350),0)}})).observe(this.el)}handleSlotChange(){this.hasPrice=!!this.el.querySelector('[slot="price"]'),this.hasPer=!!this.el.querySelector('[slot="per"]'),this.hasDescription=!!this.el.querySelector('[slot="description"]'),this.hasDefaultSlot=!!this.el.querySelector('[slot="default"]')}handleClickEvent(){"checkbox"===this.type?(this.checked=!this.checked,this.scChange.emit(this.input.checked)):this.checked||(this.checked=!0,this.scChange.emit(this.input.checked))}render(){return h(Host,{tabindex:"0",onFocus:()=>this.input.focus()},h("div",{part:"base",class:{choice:!0,"choice--checked":this.checked,"choice--disabled":this.disabled,"choice--focused":this.hasFocus,"choice--layout-columns":!this.isStacked,"choice--is-rtl":isRtl(),[`choice--size-${this.size}`]:!0},onKeyDown:e=>this.handleKeyDown(e),onMouseDown:e=>this.handleMouseDown(e)},h("slot",{name:"header"}),h("label",{class:"choice__content",part:"content",htmlFor:this.inputId},h("span",{part:"control",class:{choice__control:!0,choice__checkbox:"checkbox"===this.type,choice__radio:"radio"===this.type},hidden:!this.showControl},h("span",{part:"checked-icon",class:"choice__icon"},"checkbox"===this.type?h("svg",{viewBox:"0 0 16 16"},h("g",{stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd","stroke-linecap":"round"},h("g",{stroke:"currentColor","stroke-width":"2"},h("g",{transform:"translate(3.428571, 3.428571)"},h("path",{d:"M0,5.71428571 L3.42857143,9.14285714"}),h("path",{d:"M9.14285714,0 L3.42857143,9.14285714"}))))):h("svg",{viewBox:"0 0 16 16"},h("g",{stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"},h("g",{fill:"currentColor"},h("circle",{cx:"8",cy:"8",r:"3.42857143"}))))),h("input",{id:this.inputId,ref:e=>this.input=e,type:this.type,name:this.name,value:this.value,checked:this.checked,disabled:this.disabled,"aria-checked":this.checked?"true":"false","aria-disabled":this.disabled?"true":"false","aria-labelledby":this.labelId,tabindex:"0",onBlur:()=>this.handleBlur(),onFocus:()=>this.handleFocus(),onChange:()=>this.handleClickEvent()})),h("span",{part:"label",id:this.labelId,class:"choice__label"},h("span",{class:"choice__label-text",hidden:!this.showLabel},h("span",{class:"choice__title",part:"title"},h("slot",{onSlotchange:()=>this.handleSlotChange()})),h("span",{class:"choice__description description",part:"description",hidden:!this.hasDescription},h("slot",{name:"description",onSlotchange:()=>this.handleSlotChange()}))),h("span",{class:"choice__price",hidden:!this.showPrice||!this.hasPrice&&!this.hasPer},h("span",{class:"choice__title"},h("slot",{name:"price",onSlotchange:()=>this.handleSlotChange()}))," ",h("span",{class:"choice__description"},h("slot",{name:"per",onSlotchange:()=>this.handleSlotChange()}))))),h("slot",{name:"footer"})))}static get is(){return"sc-choice"}static get encapsulation(){return"shadow"}static get originalStyleUrls(){return{$:["sc-choice.scss"]}}static get styleUrls(){return{$:["sc-choice.css"]}}static get properties(){return{name:{type:"string",mutable:!1,complexType:{original:"string",resolved:"string",references:{}},required:!1,optional:!1,docs:{tags:[],text:"The choice name attribute"},attribute:"name",reflect:!1},size:{type:"string",mutable:!1,complexType:{original:"'small' | 'medium' | 'large'",resolved:'"large" | "medium" | "small"',references:{}},required:!1,optional:!1,docs:{tags:[],text:"The size."},attribute:"size",reflect:!1,defaultValue:"'medium'"},value:{type:"string",mutable:!1,complexType:{original:"string",resolved:"string",references:{}},required:!1,optional:!1,docs:{tags:[],text:"The choice value"},attribute:"value",reflect:!0},type:{type:"string",mutable:!1,complexType:{original:"'radio' | 'checkbox'",resolved:'"checkbox" | "radio"',references:{}},required:!1,optional:!1,docs:{tags:[],text:"The choice name attribute"},attribute:"type",reflect:!1,defaultValue:"'radio'"},disabled:{type:"boolean",mutable:!0,complexType:{original:"boolean",resolved:"boolean",references:{}},required:!1,optional:!1,docs:{tags:[],text:"Is the choice disabled"},attribute:"disabled",reflect:!0,defaultValue:"false"},checked:{type:"boolean",mutable:!0,complexType:{original:"boolean",resolved:"boolean",references:{}},required:!1,optional:!1,docs:{tags:[],text:"Draws the choice in a checked state."},attribute:"checked",reflect:!0,defaultValue:"false"},required:{type:"boolean",mutable:!1,complexType:{original:"boolean",resolved:"boolean",references:{}},required:!1,optional:!1,docs:{tags:[],text:"Is this required"},attribute:"required",reflect:!0,defaultValue:"false"},invalid:{type:"boolean",mutable:!0,complexType:{original:"boolean",resolved:"boolean",references:{}},required:!1,optional:!1,docs:{tags:[],text:"This will be true when the control is in an invalid state. Validity is determined by the `required` prop."},attribute:"invalid",reflect:!0,defaultValue:"false"},showLabel:{type:"boolean",mutable:!1,complexType:{original:"boolean",resolved:"boolean",references:{}},required:!1,optional:!1,docs:{tags:[],text:"Show the label"},attribute:"show-label",reflect:!1,defaultValue:"true"},showPrice:{type:"boolean",mutable:!1,complexType:{original:"boolean",resolved:"boolean",references:{}},required:!1,optional:!1,docs:{tags:[],text:"Show the price"},attribute:"show-price",reflect:!1,defaultValue:"true"},showControl:{type:"boolean",mutable:!1,complexType:{original:"boolean",resolved:"boolean",references:{}},required:!1,optional:!1,docs:{tags:[],text:"Show the radio/checkbox control"},attribute:"show-control",reflect:!1,defaultValue:"true"}}}static get states(){return{hasFocus:{},isStacked:{},hasDefaultSlot:{},hasPrice:{},hasPer:{},hasDescription:{}}}static get events(){return[{method:"scBlur",name:"scBlur",bubbles:!0,cancelable:!0,composed:!0,docs:{tags:[],text:"Emitted when the control loses focus."},complexType:{original:"void",resolved:"void",references:{}}},{method:"scChange",name:"scChange",bubbles:!0,cancelable:!0,composed:!0,docs:{tags:[],text:"Emitted when the control's checked state changes."},complexType:{original:"boolean",resolved:"boolean",references:{}}},{method:"scFocus",name:"scFocus",bubbles:!0,cancelable:!0,composed:!0,docs:{tags:[],text:"Emitted when the control gains focus."},complexType:{original:"void",resolved:"void",references:{}}}]}static get methods(){return{triggerClick:{complexType:{signature:"() => Promise<void>",parameters:[],references:{Promise:{location:"global"}},return:"Promise<void>"},docs:{text:"Simulates a click on the choice.",tags:[]}},triggerFocus:{complexType:{signature:"() => Promise<void>",parameters:[],references:{Promise:{location:"global"}},return:"Promise<void>"},docs:{text:"",tags:[]}},reportValidity:{complexType:{signature:"() => Promise<boolean>",parameters:[],references:{Promise:{location:"global"}},return:"Promise<boolean>"},docs:{text:"Checks for validity and shows the browser's validation message if the control is invalid.",tags:[]}},setCustomValidity:{complexType:{signature:"(message: string) => Promise<void>",parameters:[{tags:[],text:""}],references:{Promise:{location:"global"}},return:"Promise<void>"},docs:{text:"Sets a custom validation message. If `message` is not empty, the field will be considered invalid.",tags:[]}}}}static get elementRef(){return"el"}static get watchers(){return[{propName:"checked",methodName:"handleCheckedChange"}]}static get listeners(){return[{name:"click",method:"handleClickEvent",target:void 0,capture:!1,passive:!1}]}}