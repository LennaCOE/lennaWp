import{s as o}from"./p-c06b2e12.js";import{c as s}from"./p-25433d0f.js";import{g as r}from"./p-f70181c4.js";import{s as e}from"./p-49b14288.js";const{processors:t}=r(),{state:a,onChange:i,on:n,dispose:l}=s({processors:[],methods:[],manualPaymentMethods:[],disabled:{processors:[]},sortOrder:{processors:["stripe","paystack","paypal"],manualPaymentMethods:[],paymentMethods:{mollie:["creditcard","paypal"]}},config:{stripe:{paymentElement:!1}},...t},((e,s)=>JSON.stringify(e)!==JSON.stringify(s))),d=()=>o(a.processors,"processor_type",a.sortOrder.processors).filter((s=>(null==s?void 0:s.live_mode)===("live"===(null==e?void 0:e.mode)))).filter((e=>!(a.disabled.processors||[]).includes(e.processor_type))).filter((s=>{var o;return!(null===(o=null==e?void 0:e.checkout)||void 0===o?void 0:o.reusable_payment_method_required)||!!(null==s?void 0:s.recurring_enabled)})).filter(((e,s,o)=>!o.some((e=>"mollie"===e.processor_type))||"mollie"===e.processor_type)),p=e=>d().find((({processor_type:s})=>s===e)),c=e=>d().some((({processor_type:s})=>s!==e&&"paypal"!==s)),v=()=>{var s;return(null===(s=null==e?void 0:e.checkout)||void 0===s?void 0:s.reusable_payment_method_required)?[]:o(a.manualPaymentMethods,"id",a.sortOrder.manualPaymentMethods).filter((e=>!(a.disabled.processors||[]).includes(null==e?void 0:e.id)))},m=()=>o(a.methods,"id",a.sortOrder.paymentMethods.mollie),u=()=>[...d(),...v()],y=()=>{var e;return(null===(e=[...d(),...v()])||void 0===e?void 0:e.length)>1},f=()=>[...m(),...v()],h=()=>{var e;return(null===(e=[...m(),...v()])||void 0===e?void 0:e.length)>1};export{d as a,v as b,m as c,y as d,h as e,p as g,c as h,i as o,a as s};