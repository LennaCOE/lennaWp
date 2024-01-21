import{getElement,getRenderingRef}from"@stencil/core/internal/client";var multiverse=new Map,updateConsumer=function(e,t){var n=e.fields,a=e.updater;n.forEach((function(e){a(e,t[e])}))},Universe={create:function(e,t){var n=getElement(e),a=new Map,l={wormholes:a,state:t};multiverse.set(e,l);var c=e.connectedCallback;e.connectedCallback=function(){multiverse.set(e,l),c&&c.call(e)};var o=e.disconnectedCallback;e.disconnectedCallback=function(){multiverse.delete(e),o&&o.call(e)},n.addEventListener("openWormhole",(function(e){e.stopPropagation();var t=e.detail,n=t.consumer,c=t.onOpen;if(!a.has(n)){if("symbol"!=typeof n){var o=n.connectedCallback,r=n.disconnectedCallback;n.connectedCallback=function(){a.set(n,e.detail),o&&o.call(n)},n.disconnectedCallback=function(){a.delete(n),r&&r.call(n)}}a.set(n,e.detail),updateConsumer(e.detail,l.state),null==c||c.resolve((function(){a.delete(n)}))}})),n.addEventListener("closeWormhole",(function(e){var t=e.detail;a.delete(t)}))},Provider:function(e,t){var n=e.state,a=getRenderingRef();if(multiverse.has(a)){var l=multiverse.get(a);l.state=n,l.wormholes.forEach((function(e){updateConsumer(e,n)}))}return t}};export{Universe as U};