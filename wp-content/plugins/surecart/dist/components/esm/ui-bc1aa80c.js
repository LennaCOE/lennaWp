import{c as createStore}from"./index-1046c77e.js";import{s as speak}from"./index-b0f661a7.js";const store=createStore((()=>({cart:{open:!1}})),((t,e)=>JSON.stringify(t)!==JSON.stringify(e))),{state:state}=store,toggleCart=(t=null)=>store.set("cart",{...state.cart,open:null!==t?t:!state.cart.open}),{on:on}=store;on("set",((t,e)=>{"cart"===t&&((null==e?void 0:e.open)?speak(wp.i18n.__("Cart Opened","surecart"),"assertive"):speak(wp.i18n.__("Cart Closed","surecart"),"assertive"))}));export{store as s,toggleCart as t};