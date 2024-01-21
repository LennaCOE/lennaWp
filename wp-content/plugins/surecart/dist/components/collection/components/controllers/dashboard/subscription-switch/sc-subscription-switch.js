import{Fragment,h}from"@stencil/core";import{__}from"@wordpress/i18n";import{addQueryArgs}from"@wordpress/url";import apiFetch from"../../../../functions/fetch";import{onFirstVisible}from"../../../../functions/lazy";import{intervalString}from"../../../../functions/price";export class ScSubscriptionSwitch{constructor(){this.query=void 0,this.heading=void 0,this.productGroupId=void 0,this.productId=void 0,this.subscription=void 0,this.filterAbove=4,this.selectedPrice=void 0,this.products=[],this.prices=void 0,this.filter="month",this.hasFilters=void 0,this.showFilters=void 0,this.loading=void 0,this.busy=void 0,this.error=void 0}componentWillLoad(){onFirstVisible(this.el,(async()=>{try{this.loading=!0,await Promise.all([this.getGroup(),this.getProductPrices()])}catch(i){console.error(i),(null==i?void 0:i.message)?this.error=i.message:this.error=__("Something went wrong","surecart")}finally{this.loading=!1}})),this.handleSubscriptionChange()}handleProductsChange(){var i;this.prices=this.products.map((i=>{var t;return null===(t=null==i?void 0:i.prices)||void 0===t?void 0:t.data})).flat().filter(((i,t,e)=>e.findIndex((t=>t.id===i.id))===t)).filter((i=>!(null==i?void 0:i.archived))),this.showFilters=(null===(i=this.prices)||void 0===i?void 0:i.length)>this.filterAbove}handlePricesChange(i,t){!(null==t?void 0:t.length)&&(null==i?void 0:i.length)&&(this.selectedPrice=i.find((i=>{var t,e;return i.id===(null===(e=null===(t=this.subscription)||void 0===t?void 0:t.price)||void 0===e?void 0:e.id)}))),this.hasFilters={...this.hasFilters,split:this.prices.some((i=>!!(null==i?void 0:i.recurring_period_count)&&!(null==i?void 0:i.archived))),month:this.prices.some((i=>"month"===i.recurring_interval&&!(null==i?void 0:i.recurring_period_count)&&!(null==i?void 0:i.archived))),year:this.prices.some((i=>"year"===i.recurring_interval&&!(null==i?void 0:i.recurring_period_count)&&!(null==i?void 0:i.archived))),never:this.prices.some((i=>!("never"!==i.recurring_interval&&i.recurring_interval||(null==i?void 0:i.archived))))}}handleSubscriptionChange(){var i,t;this.filter=(null===(t=null===(i=this.subscription)||void 0===i?void 0:i.price)||void 0===t?void 0:t.recurring_interval)||"month"}async getGroup(){if(!this.productGroupId)return;const i=await await apiFetch({path:addQueryArgs("surecart/v1/products/",{product_group_ids:[this.productGroupId],expand:["prices"],...this.query})});this.products=[...this.products,...i]}async getProductPrices(){if(!this.productId)return;const i=await await apiFetch({path:addQueryArgs(`surecart/v1/products/${this.productId}`,{expand:["prices"]})});this.products=[...this.products,i]}async handleSubmit(i){var t,e,r,s,o;const{plan:n}=await i.target.getFormJson(),l=this.prices.find((i=>i.id===n)),d=null===(t=this.subscription)||void 0===t?void 0:t.price;if((null==l?void 0:l.id)!==d.id||(null==l?void 0:l.ad_hoc)||(null===(r=null===(e=this.subscription)||void 0===e?void 0:e.variant_options)||void 0===r?void 0:r.length)){if(null===(o=null===(s=this.subscription)||void 0===s?void 0:s.variant_options)||void 0===o?void 0:o.length)return this.busy=!0,window.location.assign(addQueryArgs(window.location.href,{action:"confirm_variation",price_id:n}));if(null==l?void 0:l.ad_hoc)return this.busy=!0,window.location.assign(addQueryArgs(window.location.href,{action:"confirm_amount",price_id:n}));this.busy=!0,window.location.assign(addQueryArgs(window.location.href,{action:"confirm",price_id:n}))}}renderSwitcher(){if(Object.values(this.hasFilters||{}).filter((i=>!!i)).length>1&&this.showFilters)return h("sc-flex",{slot:"end",class:"subscriptions-switch__switcher"},this.hasFilters.month&&h("sc-button",{onClick:()=>this.filter="month",size:"small",type:"month"===this.filter?"default":"text"},__("Monthly","surecart")),this.hasFilters.week&&h("sc-button",{onClick:()=>this.filter="week",size:"small",type:"week"===this.filter?"default":"text"},__("Weekly","surecart")),this.hasFilters.year&&h("sc-button",{onClick:()=>this.filter="year",size:"small",type:"year"===this.filter?"default":"text"},__("Yearly","surecart")),this.hasFilters.never&&h("sc-button",{onClick:()=>this.filter="never",size:"small",type:"never"===this.filter?"default":"text"},__("Lifetime","surecart")),this.hasFilters.split&&h("sc-button",{onClick:()=>this.filter="split",size:"small",type:"split"===this.filter?"default":"text"},__("Payment Plan","surecart")))}renderLoading(){return h("sc-choice",{name:"loading",disabled:!0},h("sc-skeleton",{style:{width:"60px",display:"inline-block"}}),h("sc-skeleton",{style:{width:"80px",display:"inline-block"},slot:"price"}),h("sc-skeleton",{style:{width:"120px",display:"inline-block"},slot:"description"}))}isHidden(i){if(!this.showFilters)return!1;let t=this.filter!==i.recurring_interval;return"never"!==this.filter||(null==i?void 0:i.recurring_interval)||(t=!1),"split"===this.filter&&(null==i?void 0:i.recurring_period_count)&&(t=!1),t}renderContent(){return this.loading?this.renderLoading():h("sc-choices",{required:!0},h("div",null,(this.prices||[]).filter((i=>!i.archived)).filter((i=>{var t;return(null==i?void 0:i.currency)===(null===(t=this.subscription)||void 0===t?void 0:t.currency)})).map((i=>{var t,e;const r=(null===(e=null===(t=this.subscription)||void 0===t?void 0:t.price)||void 0===e?void 0:e.id)===(null==i?void 0:i.id),s=this.products.find((t=>t.id===(null==i?void 0:i.product)));return h("sc-choice",{key:null==i?void 0:i.id,checked:r,name:"plan",value:null==i?void 0:i.id,hidden:this.isHidden(i),onScChange:t=>{t.detail&&(this.selectedPrice=this.prices.find((t=>t.id===(null==i?void 0:i.id))))}},h("div",null,h("strong",null,null==s?void 0:s.name," ",(null==i?void 0:i.name)&&h(Fragment,null," — ",null==i?void 0:i.name))),h("div",{slot:"description"},(null==i?void 0:i.ad_hoc)?`${__("Custom amount","surecart")} ${intervalString(i)}`:h(Fragment,null,h("sc-format-number",{type:"currency",currency:(null==i?void 0:i.currency)||"usd",value:null==i?void 0:i.amount})," ",intervalString(i,{showOnce:!0}))),r&&h("sc-tag",{type:"warning",slot:"price"},__("Current Plan","surecart")))}))))}buttonText(){var i,t,e,r,s,o,n,l,d;return(null===(t=null===(i=this.subscription)||void 0===i?void 0:i.variant_options)||void 0===t?void 0:t.length)?(null===(e=this.selectedPrice)||void 0===e?void 0:e.id)===(null===(s=null===(r=this.subscription)||void 0===r?void 0:r.price)||void 0===s?void 0:s.id)?__("Update Options","surecart"):__("Choose Options","surecart"):(null===(o=this.selectedPrice)||void 0===o?void 0:o.ad_hoc)?(null===(n=this.selectedPrice)||void 0===n?void 0:n.id)===(null===(d=null===(l=this.subscription)||void 0===l?void 0:l.price)||void 0===d?void 0:d.id)?__("Update Amount","surecart"):__("Choose Amount","surecart"):__("Next","surecart")}buttonDisabled(){var i,t,e,r,s;return!(null===(i=this.subscription)||void 0===i?void 0:i.variant_options)&&(null===(e=null===(t=this.subscription)||void 0===t?void 0:t.price)||void 0===e?void 0:e.id)===(null===(r=this.selectedPrice)||void 0===r?void 0:r.id)&&!(null===(s=this.selectedPrice)||void 0===s?void 0:s.ad_hoc)}render(){var i,t,e,r,s,o;return!this.loading&&(null===(i=this.prices)||void 0===i?void 0:i.length)<2&&!(null===(e=null===(t=this.prices)||void 0===t?void 0:t[0])||void 0===e?void 0:e.ad_hoc)&&!(null===(s=null===(r=this.subscription)||void 0===r?void 0:r.variant_options)||void 0===s?void 0:s.length)?null:(null===(o=this.subscription)||void 0===o?void 0:o.finite)?h("sc-alert",{type:"info",open:!0},__("To make changes to your payment plan, please contact us.","surecart")):h("sc-dashboard-module",{heading:this.heading||__("Update Plan","surecart"),class:"subscription-switch",error:this.error},h("span",{slot:"end"},this.renderSwitcher()),h("sc-form",{class:"subscriptions-switch",onScFormSubmit:i=>this.handleSubmit(i)},this.renderContent(),h("sc-button",{type:"primary",full:!0,submit:!0,loading:this.loading||this.busy,disabled:this.buttonDisabled()},this.buttonText()," ",h("sc-icon",{name:"arrow-right",slot:"suffix"})),this.busy&&h("sc-block-ui",{style:{zIndex:"9"}})))}static get is(){return"sc-subscription-switch"}static get encapsulation(){return"shadow"}static get originalStyleUrls(){return{$:["sc-subscription-switch.scss"]}}static get styleUrls(){return{$:["sc-subscription-switch.css"]}}static get properties(){return{query:{type:"unknown",mutable:!1,complexType:{original:"object",resolved:"object",references:{}},required:!1,optional:!1,docs:{tags:[],text:"Customer id to fetch subscriptions"}},heading:{type:"string",mutable:!1,complexType:{original:"string",resolved:"string",references:{}},required:!1,optional:!1,docs:{tags:[],text:""},attribute:"heading",reflect:!1},productGroupId:{type:"unknown",mutable:!1,complexType:{original:"ProductGroup",resolved:"ProductGroup",references:{ProductGroup:{location:"import",path:"../../../../types"}}},required:!1,optional:!1,docs:{tags:[],text:""}},productId:{type:"string",mutable:!1,complexType:{original:"string",resolved:"string",references:{}},required:!1,optional:!1,docs:{tags:[],text:""},attribute:"product-id",reflect:!1},subscription:{type:"unknown",mutable:!1,complexType:{original:"Subscription",resolved:"Subscription",references:{Subscription:{location:"import",path:"../../../../types"}}},required:!1,optional:!1,docs:{tags:[],text:""}},filterAbove:{type:"number",mutable:!1,complexType:{original:"number",resolved:"number",references:{}},required:!1,optional:!1,docs:{tags:[],text:""},attribute:"filter-above",reflect:!1,defaultValue:"4"}}}static get states(){return{selectedPrice:{},products:{},prices:{},filter:{},hasFilters:{},showFilters:{},loading:{},busy:{},error:{}}}static get elementRef(){return"el"}static get watchers(){return[{propName:"products",methodName:"handleProductsChange"},{propName:"prices",methodName:"handlePricesChange"},{propName:"subscription",methodName:"handleSubscriptionChange"}]}}