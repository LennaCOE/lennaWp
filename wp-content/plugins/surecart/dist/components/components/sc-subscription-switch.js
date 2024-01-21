import{proxyCustomElement,HTMLElement,h,Fragment}from"@stencil/core/internal/client";import{a as apiFetch}from"./fetch.js";import{o as onFirstVisible}from"./lazy.js";import{i as intervalString}from"./price.js";import{d as defineCustomElement$g}from"./sc-alert2.js";import{d as defineCustomElement$f}from"./sc-block-ui2.js";import{d as defineCustomElement$e}from"./sc-button2.js";import{d as defineCustomElement$d}from"./sc-choice2.js";import{d as defineCustomElement$c}from"./sc-choices2.js";import{d as defineCustomElement$b}from"./sc-dashboard-module2.js";import{d as defineCustomElement$a}from"./sc-flex2.js";import{d as defineCustomElement$9}from"./sc-form2.js";import{d as defineCustomElement$8}from"./sc-form-control2.js";import{d as defineCustomElement$7}from"./sc-format-number2.js";import{d as defineCustomElement$6}from"./sc-icon2.js";import{d as defineCustomElement$5}from"./sc-skeleton2.js";import{d as defineCustomElement$4}from"./sc-spinner2.js";import{d as defineCustomElement$3}from"./sc-tag2.js";import{d as defineCustomElement$2}from"./sc-visually-hidden2.js";import{a as addQueryArgs}from"./add-query-args.js";const scSubscriptionSwitchCss=":host{display:block;position:relative}[hidden]{display:none !important}.subscriptions-switch{display:grid;gap:0.5em}.subscriptions-switch__switcher{background:rgba(0, 0, 0, 0.035);padding:2px;line-height:1;border-radius:var(--sc-border-radius-small)}",ScSubscriptionSwitch$1=proxyCustomElement(class extends HTMLElement{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.query=void 0,this.heading=void 0,this.productGroupId=void 0,this.productId=void 0,this.subscription=void 0,this.filterAbove=4,this.selectedPrice=void 0,this.products=[],this.prices=void 0,this.filter="month",this.hasFilters=void 0,this.showFilters=void 0,this.loading=void 0,this.busy=void 0,this.error=void 0}componentWillLoad(){onFirstVisible(this.el,(async()=>{try{this.loading=!0,await Promise.all([this.getGroup(),this.getProductPrices()])}catch(i){console.error(i),(null==i?void 0:i.message)?this.error=i.message:this.error=wp.i18n.__("Something went wrong","surecart")}finally{this.loading=!1}})),this.handleSubscriptionChange()}handleProductsChange(){var i;this.prices=this.products.map((i=>{var e;return null===(e=null==i?void 0:i.prices)||void 0===e?void 0:e.data})).flat().filter(((i,e,t)=>t.findIndex((e=>e.id===i.id))===e)).filter((i=>!(null==i?void 0:i.archived))),this.showFilters=(null===(i=this.prices)||void 0===i?void 0:i.length)>this.filterAbove}handlePricesChange(i,e){!(null==e?void 0:e.length)&&(null==i?void 0:i.length)&&(this.selectedPrice=i.find((i=>{var e,t;return i.id===(null===(t=null===(e=this.subscription)||void 0===e?void 0:e.price)||void 0===t?void 0:t.id)}))),this.hasFilters={...this.hasFilters,split:this.prices.some((i=>!!(null==i?void 0:i.recurring_period_count)&&!(null==i?void 0:i.archived))),month:this.prices.some((i=>"month"===i.recurring_interval&&!(null==i?void 0:i.recurring_period_count)&&!(null==i?void 0:i.archived))),year:this.prices.some((i=>"year"===i.recurring_interval&&!(null==i?void 0:i.recurring_period_count)&&!(null==i?void 0:i.archived))),never:this.prices.some((i=>!("never"!==i.recurring_interval&&i.recurring_interval||(null==i?void 0:i.archived))))}}handleSubscriptionChange(){var i,e;this.filter=(null===(e=null===(i=this.subscription)||void 0===i?void 0:i.price)||void 0===e?void 0:e.recurring_interval)||"month"}async getGroup(){if(!this.productGroupId)return;const i=await await apiFetch({path:addQueryArgs("surecart/v1/products/",{product_group_ids:[this.productGroupId],expand:["prices"],...this.query})});this.products=[...this.products,...i]}async getProductPrices(){if(!this.productId)return;const i=await await apiFetch({path:addQueryArgs(`surecart/v1/products/${this.productId}`,{expand:["prices"]})});this.products=[...this.products,i]}async handleSubmit(i){var e,t,s,r,o;const{plan:n}=await i.target.getFormJson(),l=this.prices.find((i=>i.id===n)),c=null===(e=this.subscription)||void 0===e?void 0:e.price;if((null==l?void 0:l.id)!==c.id||(null==l?void 0:l.ad_hoc)||(null===(s=null===(t=this.subscription)||void 0===t?void 0:t.variant_options)||void 0===s?void 0:s.length)){if(null===(o=null===(r=this.subscription)||void 0===r?void 0:r.variant_options)||void 0===o?void 0:o.length)return this.busy=!0,window.location.assign(addQueryArgs(window.location.href,{action:"confirm_variation",price_id:n}));if(null==l?void 0:l.ad_hoc)return this.busy=!0,window.location.assign(addQueryArgs(window.location.href,{action:"confirm_amount",price_id:n}));this.busy=!0,window.location.assign(addQueryArgs(window.location.href,{action:"confirm",price_id:n}))}}renderSwitcher(){if(Object.values(this.hasFilters||{}).filter((i=>!!i)).length>1&&this.showFilters)return h("sc-flex",{slot:"end",class:"subscriptions-switch__switcher"},this.hasFilters.month&&h("sc-button",{onClick:()=>this.filter="month",size:"small",type:"month"===this.filter?"default":"text"},wp.i18n.__("Monthly","surecart")),this.hasFilters.week&&h("sc-button",{onClick:()=>this.filter="week",size:"small",type:"week"===this.filter?"default":"text"},wp.i18n.__("Weekly","surecart")),this.hasFilters.year&&h("sc-button",{onClick:()=>this.filter="year",size:"small",type:"year"===this.filter?"default":"text"},wp.i18n.__("Yearly","surecart")),this.hasFilters.never&&h("sc-button",{onClick:()=>this.filter="never",size:"small",type:"never"===this.filter?"default":"text"},wp.i18n.__("Lifetime","surecart")),this.hasFilters.split&&h("sc-button",{onClick:()=>this.filter="split",size:"small",type:"split"===this.filter?"default":"text"},wp.i18n.__("Payment Plan","surecart")))}renderLoading(){return h("sc-choice",{name:"loading",disabled:!0},h("sc-skeleton",{style:{width:"60px",display:"inline-block"}}),h("sc-skeleton",{style:{width:"80px",display:"inline-block"},slot:"price"}),h("sc-skeleton",{style:{width:"120px",display:"inline-block"},slot:"description"}))}isHidden(i){if(!this.showFilters)return!1;let e=this.filter!==i.recurring_interval;return"never"!==this.filter||(null==i?void 0:i.recurring_interval)||(e=!1),"split"===this.filter&&(null==i?void 0:i.recurring_period_count)&&(e=!1),e}renderContent(){return this.loading?this.renderLoading():h("sc-choices",{required:!0},h("div",null,(this.prices||[]).filter((i=>!i.archived)).filter((i=>{var e;return(null==i?void 0:i.currency)===(null===(e=this.subscription)||void 0===e?void 0:e.currency)})).map((i=>{var e,t;const s=(null===(t=null===(e=this.subscription)||void 0===e?void 0:e.price)||void 0===t?void 0:t.id)===(null==i?void 0:i.id),r=this.products.find((e=>e.id===(null==i?void 0:i.product)));return h("sc-choice",{key:null==i?void 0:i.id,checked:s,name:"plan",value:null==i?void 0:i.id,hidden:this.isHidden(i),onScChange:e=>{e.detail&&(this.selectedPrice=this.prices.find((e=>e.id===(null==i?void 0:i.id))))}},h("div",null,h("strong",null,null==r?void 0:r.name," ",(null==i?void 0:i.name)&&h(Fragment,null," — ",null==i?void 0:i.name))),h("div",{slot:"description"},(null==i?void 0:i.ad_hoc)?`${wp.i18n.__("Custom amount","surecart")} ${intervalString(i)}`:h(Fragment,null,h("sc-format-number",{type:"currency",currency:(null==i?void 0:i.currency)||"usd",value:null==i?void 0:i.amount})," ",intervalString(i,{showOnce:!0}))),s&&h("sc-tag",{type:"warning",slot:"price"},wp.i18n.__("Current Plan","surecart")))}))))}buttonText(){var i,e,t,s,r,o,n,l,c;return(null===(e=null===(i=this.subscription)||void 0===i?void 0:i.variant_options)||void 0===e?void 0:e.length)?(null===(t=this.selectedPrice)||void 0===t?void 0:t.id)===(null===(r=null===(s=this.subscription)||void 0===s?void 0:s.price)||void 0===r?void 0:r.id)?wp.i18n.__("Update Options","surecart"):wp.i18n.__("Choose Options","surecart"):(null===(o=this.selectedPrice)||void 0===o?void 0:o.ad_hoc)?(null===(n=this.selectedPrice)||void 0===n?void 0:n.id)===(null===(c=null===(l=this.subscription)||void 0===l?void 0:l.price)||void 0===c?void 0:c.id)?wp.i18n.__("Update Amount","surecart"):wp.i18n.__("Choose Amount","surecart"):wp.i18n.__("Next","surecart")}buttonDisabled(){var i,e,t,s,r;return!(null===(i=this.subscription)||void 0===i?void 0:i.variant_options)&&(null===(t=null===(e=this.subscription)||void 0===e?void 0:e.price)||void 0===t?void 0:t.id)===(null===(s=this.selectedPrice)||void 0===s?void 0:s.id)&&!(null===(r=this.selectedPrice)||void 0===r?void 0:r.ad_hoc)}render(){var i,e,t,s,r,o;return!this.loading&&(null===(i=this.prices)||void 0===i?void 0:i.length)<2&&!(null===(t=null===(e=this.prices)||void 0===e?void 0:e[0])||void 0===t?void 0:t.ad_hoc)&&!(null===(r=null===(s=this.subscription)||void 0===s?void 0:s.variant_options)||void 0===r?void 0:r.length)?null:(null===(o=this.subscription)||void 0===o?void 0:o.finite)?h("sc-alert",{type:"info",open:!0},wp.i18n.__("To make changes to your payment plan, please contact us.","surecart")):h("sc-dashboard-module",{heading:this.heading||wp.i18n.__("Update Plan","surecart"),class:"subscription-switch",error:this.error},h("span",{slot:"end"},this.renderSwitcher()),h("sc-form",{class:"subscriptions-switch",onScFormSubmit:i=>this.handleSubmit(i)},this.renderContent(),h("sc-button",{type:"primary",full:!0,submit:!0,loading:this.loading||this.busy,disabled:this.buttonDisabled()},this.buttonText()," ",h("sc-icon",{name:"arrow-right",slot:"suffix"})),this.busy&&h("sc-block-ui",{style:{zIndex:"9"}})))}get el(){return this}static get watchers(){return{products:["handleProductsChange"],prices:["handlePricesChange"],subscription:["handleSubscriptionChange"]}}static get style(){return scSubscriptionSwitchCss}},[1,"sc-subscription-switch",{query:[16],heading:[1],productGroupId:[16],productId:[1,"product-id"],subscription:[16],filterAbove:[2,"filter-above"],selectedPrice:[32],products:[32],prices:[32],filter:[32],hasFilters:[32],showFilters:[32],loading:[32],busy:[32],error:[32]}]);function defineCustomElement$1(){"undefined"!=typeof customElements&&["sc-subscription-switch","sc-alert","sc-block-ui","sc-button","sc-choice","sc-choices","sc-dashboard-module","sc-flex","sc-form","sc-form-control","sc-format-number","sc-icon","sc-skeleton","sc-spinner","sc-tag","sc-visually-hidden"].forEach((i=>{switch(i){case"sc-subscription-switch":customElements.get(i)||customElements.define(i,ScSubscriptionSwitch$1);break;case"sc-alert":customElements.get(i)||defineCustomElement$g();break;case"sc-block-ui":customElements.get(i)||defineCustomElement$f();break;case"sc-button":customElements.get(i)||defineCustomElement$e();break;case"sc-choice":customElements.get(i)||defineCustomElement$d();break;case"sc-choices":customElements.get(i)||defineCustomElement$c();break;case"sc-dashboard-module":customElements.get(i)||defineCustomElement$b();break;case"sc-flex":customElements.get(i)||defineCustomElement$a();break;case"sc-form":customElements.get(i)||defineCustomElement$9();break;case"sc-form-control":customElements.get(i)||defineCustomElement$8();break;case"sc-format-number":customElements.get(i)||defineCustomElement$7();break;case"sc-icon":customElements.get(i)||defineCustomElement$6();break;case"sc-skeleton":customElements.get(i)||defineCustomElement$5();break;case"sc-spinner":customElements.get(i)||defineCustomElement$4();break;case"sc-tag":customElements.get(i)||defineCustomElement$3();break;case"sc-visually-hidden":customElements.get(i)||defineCustomElement$2()}}))}const ScSubscriptionSwitch=ScSubscriptionSwitch$1,defineCustomElement=defineCustomElement$1;export{ScSubscriptionSwitch,defineCustomElement};