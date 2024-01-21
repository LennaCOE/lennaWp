"use strict";const index=require("./index-00f0fc21.js"),utils=require("./utils-a086ed6e.js"),getQueryArg=require("./get-query-arg-53bf21e2.js"),currency=require("./currency-ba038e2f.js"),addQueryArgs=require("./add-query-args-17c551b6.js"),safeRead=(e,t)=>{try{return JSON.parse(e.getItem(t))}catch{return null}},debounce=e=>{let t=!1;return()=>{t||(t=!0,setTimeout((()=>{e(),t=!1}),0))}},createStorageStore=(e,t,o,n=!1)=>{var i;const d=index.createStore(null!==(i=safeRead(e,t))&&void 0!==i?i:o,((e,t)=>JSON.stringify(e)!==JSON.stringify(t))),u=debounce((()=>e.setItem(t,JSON.stringify(d.state))));return u(),n&&window.addEventListener("storage",(()=>{const o=safeRead(e,t);if(null!==o)for(const e in o)d.set(e,o[e])})),d.use({set:u,reset:u}),d},createLocalStore=(e,t,o=!1)=>createStorageStore(localStorage,e,t,o);function removeQueryArgs(e){const t=e.indexOf("?");if(-1===t)return e;const o=addQueryArgs.getQueryArgs(e),n=e.substr(0,t);for(var i=arguments.length,d=new Array(i>1?i-1:0),u=1;u<i;u++)d[u-1]=arguments[u];d.forEach((e=>delete o[e]));const r=addQueryArgs.buildQueryString(o);return r?n+"?"+r:n}const{checkout:checkout$1}=utils.getSerializedState(),notPersistCart="browser"!==(null==checkout$1?void 0:checkout$1.persist)||!!getQueryArg.getQueryArg(window.location.href,"no_cart"),store=notPersistCart?index.createStore({live:{},test:{}}):createLocalStore("surecart-local-storage",{live:{},test:{}},!0),{state:state$1,onChange:onChange$1,on:on$1,set:set$1,get:get$1,dispose:dispose$1}=store;window.scStore=store;const{checkout:checkout}=utils.getSerializedState(),{state:state,onChange:onChange,on:on,set:set,get:get,dispose:dispose}=index.createStore({formId:null,groupId:null,mode:"live",locks:[],product:null,checkout:null,currencyCode:"usd",abandonedCheckoutEnabled:!0,initialLineItems:[],isCheckoutPage:!1,validateStock:!1,persist:"browser",...checkout},((e,t)=>JSON.stringify(e)!==JSON.stringify(t)));onChange("checkout",(e=>setCheckout(e,state.formId))),on("get",(e=>{if("checkout"===e){const e=getCheckout(state.formId,state.mode);(null==e?void 0:e.id)&&(state.checkout=e)}})),on$1("set",((e,t,o)=>Object.keys(t||{}).forEach((e=>handleCheckoutLineItemChange(t[e],null==o?void 0:o[e])))));const handleCheckoutLineItemChange=(e,t)=>{var o,n;const i=(null===(o=null==e?void 0:e.line_items)||void 0===o?void 0:o.data)||[],d=(null===(n=null==t?void 0:t.line_items)||void 0===n?void 0:n.data)||[];if(i.forEach((e=>{const t=d.find((t=>t.id===e.id));if(!t||(null==t?void 0:t.quantity)<(null==e?void 0:e.quantity)){const o=new CustomEvent("scAddedToCart",{detail:{...e,quantity:e.quantity-((null==t?void 0:t.quantity)||0)},bubbles:!0});document.dispatchEvent(o)}})),d.forEach((e=>{const t=i.find((t=>t.id===e.id));if(!t||(null==e?void 0:e.quantity)>(null==t?void 0:t.quantity)){const o=new CustomEvent("scRemovedFromCart",{detail:{...e,quantity:e.quantity-((null==t?void 0:t.quantity)||0)},bubbles:!0});document.dispatchEvent(o)}})),JSON.stringify(i)!==JSON.stringify(d)){const o=new CustomEvent("scCartUpdated",{detail:[e,t],bubbles:!0});document.dispatchEvent(o)}};on("set",((e,t,o)=>{var n,i,d,u,r;if("checkout"!==e)return;if(null==o?void 0:o.id)return;if(!(null==t?void 0:t.id))return;if(!state.isCheckoutPage)return;const l=new CustomEvent("scCheckoutInitiated",{detail:{transaction_id:t.id,value:currency.maybeConvertAmount(null==t?void 0:t.total_amount,(null==t?void 0:t.currency)||"USD"),currency:(t.currency||"").toUpperCase(),...(null===(i=null===(n=null==t?void 0:t.discount)||void 0===n?void 0:n.promotion)||void 0===i?void 0:i.code)?{coupon:null===(u=null===(d=null==t?void 0:t.discount)||void 0===d?void 0:d.promotion)||void 0===u?void 0:u.code}:{},...(null==t?void 0:t.tax_amount)?{tax:currency.maybeConvertAmount(null==t?void 0:t.tax_amount,(null==t?void 0:t.currency)||"USD")}:{},items:((null===(r=null==t?void 0:t.line_items)||void 0===r?void 0:r.data)||[]).map((e=>{var o,n,i;return{item_name:(null===(n=null===(o=null==e?void 0:e.price)||void 0===o?void 0:o.product)||void 0===n?void 0:n.name)||"",discount:(null==e?void 0:e.discount_amount)?currency.maybeConvertAmount((null==e?void 0:e.discount_amount)||0,(null==t?void 0:t.currency)||"USD"):0,price:currency.maybeConvertAmount((null===(i=null==e?void 0:e.price)||void 0===i?void 0:i.amount)||0,(null==t?void 0:t.currency)||"USD"),quantity:(null==e?void 0:e.quantity)||1}}))},bubbles:!0});document.dispatchEvent(l)})),on("set",((e,t,o)=>{var n;if("checkout"!==e)return;if(!(null==t?void 0:t.status)||(null==o?void 0:o.status)===(null==t?void 0:t.status))return;if(!["paid","processing"].includes(t.status))return;const i=new CustomEvent("scOrderPaid",{detail:t,bubbles:!0});document.dispatchEvent(i);const d=new CustomEvent("scCheckoutCompleted",{detail:t,bubbles:!0});document.dispatchEvent(d);const u=((null===(n=null==t?void 0:t.line_items)||void 0===n?void 0:n.data)||[]).filter((e=>{var t;return(null===(t=null==e?void 0:e.price)||void 0===t?void 0:t.trial_duration_days)>0}));if(u.length>0){const e=new CustomEvent("scTrialStarted",{detail:u,bubbles:!0});document.dispatchEvent(e)}})),window.addEventListener("scAddedToCart",(function(e){var t,o,n,i,d,u,r,l,c;if(!(null===window||void 0===window?void 0:window.dataLayer)&&!(null===window||void 0===window?void 0:window.gtag))return;const a=e.detail;if(!(null===(t=null==a?void 0:a.price)||void 0===t?void 0:t.product))return;const s=[{item_id:null===(n=null===(o=a.price)||void 0===o?void 0:o.product)||void 0===n?void 0:n.id,item_name:null===(d=null===(i=a.price)||void 0===i?void 0:i.product)||void 0===d?void 0:d.name,item_variant:(a.variant_options||[]).join(" / "),price:currency.maybeConvertAmount((null===(u=null==a?void 0:a.price)||void 0===u?void 0:u.amount)||0,(null===(r=a.price)||void 0===r?void 0:r.currency)||"USD"),currency:null===(l=a.price)||void 0===l?void 0:l.currency,quantity:a.quantity,discount:(null==a?void 0:a.discount_amount)?currency.maybeConvertAmount((null==a?void 0:a.discount_amount)||0,(null===(c=a.price)||void 0===c?void 0:c.currency)||"USD"):0}];(null===window||void 0===window?void 0:window.gtag)&&window.gtag("event","add_to_cart",{items:s}),(null===window||void 0===window?void 0:window.dataLayer)&&(window.dataLayer.push({ecommerce:null}),window.dataLayer.push({event:"add_to_cart",ecommerce:{data:{items:s}}}))})),window.addEventListener("scCheckoutCompleted",(function(e){var t,o,n,i,d;if(!(null===window||void 0===window?void 0:window.dataLayer)&&!(null===window||void 0===window?void 0:window.gtag))return;const u=e.detail,r={transaction_id:null==u?void 0:u.id,value:currency.maybeConvertAmount(null==u?void 0:u.total_amount,(null==u?void 0:u.currency)||"USD"),currency:(u.currency||"").toUpperCase(),...(null===(o=null===(t=null==u?void 0:u.discount)||void 0===t?void 0:t.promotion)||void 0===o?void 0:o.code)?{coupon:null===(i=null===(n=null==u?void 0:u.discount)||void 0===n?void 0:n.promotion)||void 0===i?void 0:i.code}:{},...(null==u?void 0:u.tax_amount)?{tax:currency.maybeConvertAmount(null==u?void 0:u.tax_amount,(null==u?void 0:u.currency)||"USD")}:{},items:((null===(d=null==u?void 0:u.line_items)||void 0===d?void 0:d.data)||[]).map((e=>{var t,o,n,i,d,r,l;return{item_id:null===(o=null===(t=null==e?void 0:e.price)||void 0===t?void 0:t.product)||void 0===o?void 0:o.id,currency:(u.currency||"").toUpperCase(),item_name:(null===(i=null===(n=null==e?void 0:e.price)||void 0===n?void 0:n.product)||void 0===i?void 0:i.name)||"",discount:(null==e?void 0:e.discount_amount)?currency.maybeConvertAmount((null==e?void 0:e.discount_amount)||0,(null===(d=null==e?void 0:e.price)||void 0===d?void 0:d.currency)||"USD"):0,price:currency.maybeConvertAmount((null===(r=null==e?void 0:e.price)||void 0===r?void 0:r.amount)||0,(null===(l=null==e?void 0:e.price)||void 0===l?void 0:l.currency)||"USD"),quantity:(null==e?void 0:e.quantity)||1,item_variant:(e.variant_options||[]).join(" / ")}}))};(null===window||void 0===window?void 0:window.gtag)&&window.gtag("event","purchase",r),(null===window||void 0===window?void 0:window.dataLayer)&&(window.dataLayer.push({ecommerce:null}),window.dataLayer.push({event:"purchase",ecommerce:r}))}));const getCheckout=(e,t)=>{var o;return(null===(o=store.state[t])||void 0===o?void 0:o[e])||{}},setCheckout=(e,t)=>{const o=(null==e?void 0:e.live_mode)?"live":"test";store.set(o,{...store.state[o],[t]:e}),state.formId===t&&state.mode===o&&(state.checkout=e),"url"===state.persist&&(null==e?void 0:e.id)&&window.history.replaceState({},document.title,addQueryArgs.addQueryArgs(window.location.href,{checkout_id:null==e?void 0:e.id}))},clearCheckout=(e,t)=>{const{[e]:o,...n}=store.state[t];return window.history.replaceState({},document.title,removeQueryArgs(window.location.href,"redirect_status","coupon","line_items","confirm_checkout_id","checkout_id")),store.set(t,n)};exports.clearCheckout=clearCheckout,exports.getCheckout=getCheckout,exports.on=on,exports.onChange=onChange,exports.onChange$1=onChange$1,exports.removeQueryArgs=removeQueryArgs,exports.setCheckout=setCheckout,exports.state=state;