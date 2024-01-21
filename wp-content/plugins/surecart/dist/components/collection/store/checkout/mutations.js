import state from"./store";import{clearCheckout as clearSavedCheckout}from"../checkouts/mutations";import{updateFormState}from"@store/form/mutations";import{createErrorNotice}from"@store/notices/mutations";import{addLineItem,removeLineItem,updateLineItem}from"../../services/session";export const clearCheckout=()=>clearSavedCheckout(state.formId,state.mode);export const lockCheckout=t=>state.locks=[...state.locks,t];export const unLockCheckout=(t="")=>state.locks=t?state.locks.filter((e=>e!==t)):[];export const updateCheckoutLineItem=async({id:t,data:e})=>{try{updateFormState("FETCH"),state.checkout=await updateLineItem({id:t,data:e}),updateFormState("RESOLVE")}catch(t){console.error(t),createErrorNotice(t),updateFormState("REJECT")}};export const removeCheckoutLineItem=async t=>{try{updateFormState("FETCH"),state.checkout=await removeLineItem({checkoutId:state.checkout.id,itemId:t}),updateFormState("RESOLVE")}catch(t){console.error(t),createErrorNotice(t),updateFormState("REJECT")}};export const addCheckoutLineItem=async t=>{try{updateFormState("FETCH"),state.checkout=await addLineItem({checkout:state.checkout,data:t,live_mode:"live"===(null==state?void 0:state.mode)}),updateFormState("RESOLVE")}catch(t){console.error(t),createErrorNotice(t),updateFormState("REJECT")}};