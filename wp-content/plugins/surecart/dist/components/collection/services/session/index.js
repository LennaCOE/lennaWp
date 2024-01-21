import{state as checkoutState}from"@store/checkout";import{addQueryArgs,getQueryArg}from"@wordpress/url";import apiFetch from"../../functions/fetch";import{__}from"@wordpress/i18n";export const baseUrl="surecart/v1/checkouts/";export const expand=["line_items","line_item.price","line_item.fees","line_item.variant","variant.image","price.product","product.featured_product_media","product_media.media","customer","customer.shipping_address","payment_intent","discount","discount.promotion","recommended_bumps","bump.price","product.variants","discount.coupon","shipping_address","tax_identifier","manual_payment_method","shipping_choices","shipping_choice.shipping_method"];export const withDefaultData=(t={})=>{var e,a,o,i,d,c;return{live_mode:"test"!==checkoutState.mode,group_key:checkoutState.groupId,abandoned_checkout_enabled:checkoutState.abandonedCheckoutEnabled,metadata:{...(null==t?void 0:t.metadata)||{},...(null===(e=null===window||void 0===window?void 0:window.scData)||void 0===e?void 0:e.page_id)&&{page_id:null===(a=null===window||void 0===window?void 0:window.scData)||void 0===a?void 0:a.page_id},...(null===(o=null==checkoutState?void 0:checkoutState.product)||void 0===o?void 0:o.id)&&{buy_page_product_id:null===(i=null==checkoutState?void 0:checkoutState.product)||void 0===i?void 0:i.id},page_url:window.location.href},...(null===(d=null==checkoutState?void 0:checkoutState.checkout)||void 0===d?void 0:d.email)&&{email:null===(c=null==checkoutState?void 0:checkoutState.checkout)||void 0===c?void 0:c.email},...t}};export const withDefaultQuery=(t={})=>{var e,a;return{...!!(null==checkoutState?void 0:checkoutState.formId)&&{form_id:null==checkoutState?void 0:checkoutState.formId},...!!(null===(e=null==checkoutState?void 0:checkoutState.product)||void 0===e?void 0:e.id)&&{product_id:null===(a=null==checkoutState?void 0:checkoutState.product)||void 0===a?void 0:a.id},...t}};export const findInitialCheckoutId=()=>{var o,i;return getQueryArg(window.location.href,"checkout_id")||((null===(t=null==checkoutState?void 0:checkoutState.checkout)||void 0===t?void 0:t.id)?null===(e=null==checkoutState?void 0:checkoutState.checkout)||void 0===e?void 0:e.id:null)};export const parsePath=(t,e="")=>{let a=t?`${baseUrl}${t}`:baseUrl;return a=`${a}${e}`,addQueryArgs(a,{expand:expand})};export const fetchCheckout=async({id:t,query:e={}})=>await apiFetch({path:addQueryArgs(parsePath(t),withDefaultQuery(e))});export const createOrUpdateCheckout=async({id:t=null,data:e={},query:a={}})=>{return t=t||getQueryArg(window.location.href,"checkout_id")||((null===(o=null==checkoutState?void 0:checkoutState.checkout)||void 0===o?void 0:o.id)?null===(i=null==checkoutState?void 0:checkoutState.checkout)||void 0===i?void 0:i.id:null),await apiFetch({method:t?"PATCH":"POST",path:addQueryArgs(parsePath(t),withDefaultQuery(a)),data:withDefaultData(e)});var o,i};export const updateCheckout=async({id:t,data:e={},query:a={}})=>await apiFetch({method:"PATCH",path:addQueryArgs(parsePath(t),withDefaultQuery(a)),data:withDefaultData(e)});export const finalizeCheckout=async({id:t,data:e={},query:a={},processor:o})=>await apiFetch({method:"POST",path:addQueryArgs(parsePath(t,"/finalize"),withDefaultQuery({...(null==o?void 0:o.manual)?{manual_payment:!0,manual_payment_method_id:null==o?void 0:o.id}:{processor_type:null==o?void 0:o.id},...a})),data:withDefaultData(e)});export const addLineItem=async({checkout:t,data:e,live_mode:a=!1})=>{var o;const i=((null===(o=null==t?void 0:t.line_items)||void 0===o?void 0:o.data)||[]).find((t=>{var a;return(null===(a=null==t?void 0:t.variant)||void 0===a?void 0:a.id)?t.variant.id===e.variant&&t.price.id===e.price:t.price.id===e.price}));if(!(null==t?void 0:t.id))return await apiFetch({method:"POST",path:addQueryArgs(parsePath(null)),data:{line_items:[e],live_mode:a}});if(i)return await updateLineItem({id:null==i?void 0:i.id,data:{...e,quantity:(null==i?void 0:i.quantity)+(null==e?void 0:e.quantity)}});const d=await apiFetch({path:addQueryArgs(`surecart/v1/line_items/${(null==i?void 0:i.id)?null==i?void 0:i.id:""}`,{consolidate:!0,expand:[...(expand||[]).map((t=>t.includes(".")?t:`checkout.${t}`)),"checkout"]}),method:"POST",data:{...e,checkout:t.id}});return null==d?void 0:d.checkout};export const removeLineItem=async({checkoutId:t,itemId:e})=>{const{deleted:a}=await apiFetch({path:`surecart/v1/line_items/${e}`,method:"DELETE"});if(!a)throw{code:"error",message:__("Failed to delete","surecart")};return await fetchCheckout({id:t})};export const updateLineItem=async({id:t,data:e})=>{const a=await apiFetch({path:addQueryArgs(`surecart/v1/line_items/${t}`,{expand:[...(expand||[]).map((t=>t.includes(".")?t:`checkout.${t}`)),"checkout"]}),method:"PATCH",data:e});return null==a?void 0:a.checkout};