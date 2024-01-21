import{c as o}from"./p-25433d0f.js";import{g as i}from"./p-f70181c4.js";import{g as d}from"./p-4d73f82a.js";import{m as n}from"./p-7ef0f71c.js";import{g as l,b as v,a as t}from"./p-1c2e2695.js";const u=(o,i)=>{try{return JSON.parse(o.getItem(i))}catch{return null}},e=o=>{let i=!1;return()=>{i||(i=!0,setTimeout((()=>{o(),i=!1}),0))}},c=(i,n,t,d=!1)=>{var l;const r=o(null!==(l=u(i,n))&&void 0!==l?l:t,((o,i)=>JSON.stringify(o)!==JSON.stringify(i))),a=e((()=>i.setItem(n,JSON.stringify(r.state))));return a(),d&&window.addEventListener("storage",(()=>{const o=u(i,n);if(null!==o)for(const i in o)r.set(i,o[i])})),r.use({set:a,reset:a}),r},r=(o,i,n=!1)=>c(localStorage,o,i,n);function s(o){const i=o.indexOf("?");if(-1===i)return o;const n=l(o),t=o.substr(0,i);for(var d=arguments.length,e=new Array(d>1?d-1:0),u=1;u<d;u++)e[u-1]=arguments[u];e.forEach((o=>delete n[o]));const r=v(n);return r?t+"?"+r:t}const{checkout:a}=i(),w="browser"!==(null==a?void 0:a.persist)||!!d(window.location.href,"no_cart"),m=w?o({live:{},test:{}}):r("surecart-local-storage",{live:{},test:{}},!0),{state:f,onChange:p,on:b,set:C,get:S,dispose:h}=m;window.scStore=m;const{checkout:_}=i(),{state:k,onChange:g,on:y,set:U,get:D,dispose:O}=o({formId:null,groupId:null,mode:"live",locks:[],product:null,checkout:null,currencyCode:"usd",abandonedCheckoutEnabled:!0,initialLineItems:[],isCheckoutPage:!1,validateStock:!1,persist:"browser",..._},((o,i)=>JSON.stringify(o)!==JSON.stringify(i)));g("checkout",(o=>N(o,k.formId))),y("get",(o=>{if("checkout"===o){const o=J(k.formId,k.mode);(null==o?void 0:o.id)&&(k.checkout=o)}})),b("set",((o,i,n)=>Object.keys(i||{}).forEach((o=>E(i[o],null==n?void 0:n[o])))));const E=(o,i)=>{var n,t;const d=(null===(n=null==o?void 0:o.line_items)||void 0===n?void 0:n.data)||[],e=(null===(t=null==i?void 0:i.line_items)||void 0===t?void 0:t.data)||[];if(d.forEach((o=>{const i=e.find((i=>i.id===o.id));if(!i||(null==i?void 0:i.quantity)<(null==o?void 0:o.quantity)){const n=new CustomEvent("scAddedToCart",{detail:{...o,quantity:o.quantity-((null==i?void 0:i.quantity)||0)},bubbles:!0});document.dispatchEvent(n)}})),e.forEach((o=>{const i=d.find((i=>i.id===o.id));if(!i||(null==o?void 0:o.quantity)>(null==i?void 0:i.quantity)){const n=new CustomEvent("scRemovedFromCart",{detail:{...o,quantity:o.quantity-((null==i?void 0:i.quantity)||0)},bubbles:!0});document.dispatchEvent(n)}})),JSON.stringify(d)!==JSON.stringify(e)){const n=new CustomEvent("scCartUpdated",{detail:[o,i],bubbles:!0});document.dispatchEvent(n)}};y("set",((o,i,t)=>{var d,e,l,u,r;if("checkout"!==o)return;if(null==t?void 0:t.id)return;if(!(null==i?void 0:i.id))return;if(!k.isCheckoutPage)return;const a=new CustomEvent("scCheckoutInitiated",{detail:{transaction_id:i.id,value:n(null==i?void 0:i.total_amount,(null==i?void 0:i.currency)||"USD"),currency:(i.currency||"").toUpperCase(),...(null===(e=null===(d=null==i?void 0:i.discount)||void 0===d?void 0:d.promotion)||void 0===e?void 0:e.code)?{coupon:null===(u=null===(l=null==i?void 0:i.discount)||void 0===l?void 0:l.promotion)||void 0===u?void 0:u.code}:{},...(null==i?void 0:i.tax_amount)?{tax:n(null==i?void 0:i.tax_amount,(null==i?void 0:i.currency)||"USD")}:{},items:((null===(r=null==i?void 0:i.line_items)||void 0===r?void 0:r.data)||[]).map((o=>{var t,d,e;return{item_name:(null===(d=null===(t=null==o?void 0:o.price)||void 0===t?void 0:t.product)||void 0===d?void 0:d.name)||"",discount:(null==o?void 0:o.discount_amount)?n((null==o?void 0:o.discount_amount)||0,(null==i?void 0:i.currency)||"USD"):0,price:n((null===(e=null==o?void 0:o.price)||void 0===e?void 0:e.amount)||0,(null==i?void 0:i.currency)||"USD"),quantity:(null==o?void 0:o.quantity)||1}}))},bubbles:!0});document.dispatchEvent(a)})),y("set",((o,i,n)=>{var t;if("checkout"!==o)return;if(!(null==i?void 0:i.status)||(null==n?void 0:n.status)===(null==i?void 0:i.status))return;if(!["paid","processing"].includes(i.status))return;const d=new CustomEvent("scOrderPaid",{detail:i,bubbles:!0});document.dispatchEvent(d);const e=new CustomEvent("scCheckoutCompleted",{detail:i,bubbles:!0});document.dispatchEvent(e);const l=((null===(t=null==i?void 0:i.line_items)||void 0===t?void 0:t.data)||[]).filter((o=>{var i;return(null===(i=null==o?void 0:o.price)||void 0===i?void 0:i.trial_duration_days)>0}));if(l.length>0){const o=new CustomEvent("scTrialStarted",{detail:l,bubbles:!0});document.dispatchEvent(o)}})),window.addEventListener("scAddedToCart",(function(o){var i,t,d,e,l,u,r,a,c;if(!(null===window||void 0===window?void 0:window.dataLayer)&&!(null===window||void 0===window?void 0:window.gtag))return;const s=o.detail;if(!(null===(i=null==s?void 0:s.price)||void 0===i?void 0:i.product))return;const v=[{item_id:null===(d=null===(t=s.price)||void 0===t?void 0:t.product)||void 0===d?void 0:d.id,item_name:null===(l=null===(e=s.price)||void 0===e?void 0:e.product)||void 0===l?void 0:l.name,item_variant:(s.variant_options||[]).join(" / "),price:n((null===(u=null==s?void 0:s.price)||void 0===u?void 0:u.amount)||0,(null===(r=s.price)||void 0===r?void 0:r.currency)||"USD"),currency:null===(a=s.price)||void 0===a?void 0:a.currency,quantity:s.quantity,discount:(null==s?void 0:s.discount_amount)?n((null==s?void 0:s.discount_amount)||0,(null===(c=s.price)||void 0===c?void 0:c.currency)||"USD"):0}];(null===window||void 0===window?void 0:window.gtag)&&window.gtag("event","add_to_cart",{items:v}),(null===window||void 0===window?void 0:window.dataLayer)&&(window.dataLayer.push({ecommerce:null}),window.dataLayer.push({event:"add_to_cart",ecommerce:{data:{items:v}}}))})),window.addEventListener("scCheckoutCompleted",(function(o){var i,t,d,e,l;if(!(null===window||void 0===window?void 0:window.dataLayer)&&!(null===window||void 0===window?void 0:window.gtag))return;const u=o.detail,r={transaction_id:null==u?void 0:u.id,value:n(null==u?void 0:u.total_amount,(null==u?void 0:u.currency)||"USD"),currency:(u.currency||"").toUpperCase(),...(null===(t=null===(i=null==u?void 0:u.discount)||void 0===i?void 0:i.promotion)||void 0===t?void 0:t.code)?{coupon:null===(e=null===(d=null==u?void 0:u.discount)||void 0===d?void 0:d.promotion)||void 0===e?void 0:e.code}:{},...(null==u?void 0:u.tax_amount)?{tax:n(null==u?void 0:u.tax_amount,(null==u?void 0:u.currency)||"USD")}:{},items:((null===(l=null==u?void 0:u.line_items)||void 0===l?void 0:l.data)||[]).map((o=>{var i,t,d,e,l,r,a;return{item_id:null===(t=null===(i=null==o?void 0:o.price)||void 0===i?void 0:i.product)||void 0===t?void 0:t.id,currency:(u.currency||"").toUpperCase(),item_name:(null===(e=null===(d=null==o?void 0:o.price)||void 0===d?void 0:d.product)||void 0===e?void 0:e.name)||"",discount:(null==o?void 0:o.discount_amount)?n((null==o?void 0:o.discount_amount)||0,(null===(l=null==o?void 0:o.price)||void 0===l?void 0:l.currency)||"USD"):0,price:n((null===(r=null==o?void 0:o.price)||void 0===r?void 0:r.amount)||0,(null===(a=null==o?void 0:o.price)||void 0===a?void 0:a.currency)||"USD"),quantity:(null==o?void 0:o.quantity)||1,item_variant:(o.variant_options||[]).join(" / ")}}))};(null===window||void 0===window?void 0:window.gtag)&&window.gtag("event","purchase",r),(null===window||void 0===window?void 0:window.dataLayer)&&(window.dataLayer.push({ecommerce:null}),window.dataLayer.push({event:"purchase",ecommerce:r}))}));const J=(o,i)=>{var n;return(null===(n=m.state[i])||void 0===n?void 0:n[o])||{}},N=(o,i)=>{const n=(null==o?void 0:o.live_mode)?"live":"test";m.set(n,{...m.state[n],[i]:o}),k.formId===i&&k.mode===n&&(k.checkout=o),"url"===k.persist&&(null==o?void 0:o.id)&&window.history.replaceState({},document.title,t(window.location.href,{checkout_id:null==o?void 0:o.id}))},j=(o,i)=>{const{[o]:n,...t}=m.state[i];return window.history.replaceState({},document.title,s(window.location.href,"redirect_status","coupon","line_items","confirm_checkout_id","checkout_id")),m.set(i,t)};export{N as a,p as b,j as c,y as d,J as g,g as o,s as r,k as s};