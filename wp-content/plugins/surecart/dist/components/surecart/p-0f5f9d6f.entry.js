import{r as i,h as o,a as s,H as t}from"./p-cc7ce8c7.js";import{s as e}from"./p-a197cba9.js";import"./p-25433d0f.js";import"./p-f70181c4.js";import"./p-e0280c41.js";import"./p-49b14288.js";import"./p-4d73f82a.js";import"./p-1c2e2695.js";import"./p-7ef0f71c.js";import"./p-c06b2e12.js";import"./p-5d943fb0.js";import"./p-f47b68d0.js";import"./p-c27fae79.js";import"./p-09484d0e.js";import"./p-05fc1ee0.js";import"./p-7e81081d.js";import"./p-18e45a13.js";const r=":host{display:block}.sc-product-donation-choices{display:grid;gap:2em;position:relative;--columns:4}.sc-product-donation-choices__form{display:grid;gap:var(--sc-spacing-small)}.sc-donation-recurring-choices{display:grid;gap:var(--sc-spacing-small);position:relative;--columns:2}";const c=class{constructor(o){i(this,o);this.productId=undefined;this.label=undefined;this.recurring=undefined}state(){return e[this.productId]}updateState(i){e[this.productId]={...e[this.productId],...i}}render(){var i,s,e,r;const c=(((e=(s=(i=this.state())===null||i===void 0?void 0:i.product)===null||s===void 0?void 0:s.prices)===null||e===void 0?void 0:e.data)||[]).filter((i=>this.recurring?(i===null||i===void 0?void 0:i.recurring_interval)&&(i===null||i===void 0?void 0:i.ad_hoc):!(i===null||i===void 0?void 0:i.recurring_interval)&&(i===null||i===void 0?void 0:i.ad_hoc))).filter((i=>!(i===null||i===void 0?void 0:i.archived)));if(!(c===null||c===void 0?void 0:c.length)){return o(t,{style:{display:"none"}})}return o("sc-recurring-price-choice-container",{prices:c.sort(((i,o)=>(i===null||i===void 0?void 0:i.position)-(o===null||o===void 0?void 0:o.position))),product:(r=this.state())===null||r===void 0?void 0:r.product,selectedPrice:this.state().selectedPrice,showDetails:false,showAmount:false,onScChange:i=>{var o,s;const t=(((s=(o=this.state().product)===null||o===void 0?void 0:o.prices)===null||s===void 0?void 0:s.data)||[]).find((({id:o})=>o==i.detail));this.updateState({selectedPrice:t})},"aria-label":this.recurring?wp.i18n.__("If you want to make your donation recurring then Press Tab once & select the recurring interval from the dropdown. ","surecart"):wp.i18n.__("If you want to make your donation once then Press Enter. ","surecart"),style:{"--sc-recurring-price-choice-white-space":"wrap","--sc-recurring-price-choice-text-align":"left"}},o("slot",null,this.label))}get el(){return s(this)}};c.style=r;export{c as sc_product_donation_choices};
//# sourceMappingURL=p-0f5f9d6f.entry.js.map