"use strict";(self.webpackChunk_surecart_surecart=self.webpackChunk_surecart_surecart||[]).push([[3032],{9587:function(t,r,i){i.d(r,{a:function(){return m}});var e=i(3144),n=i(5671);function o(t){return"string"!=typeof t||""===t?(console.error("The namespace must be a non-empty string."),!1):!!/^[a-zA-Z][a-zA-Z0-9_.\-\/]*$/.test(t)||(console.error("The namespace can only contain numbers, letters, dashes, periods, underscores and slashes."),!1)}function c(t){return"string"!=typeof t||""===t?(console.error("The hook name must be a non-empty string."),!1):/^__/.test(t)?(console.error("The hook name cannot begin with `__`."),!1):!!/^[a-zA-Z][a-zA-Z0-9_.-]*$/.test(t)||(console.error("The hook name can only contain numbers, letters, dashes, periods and underscores."),!1)}function a(t,r){return function(i,e,n){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:10,d=t[r];if(c(i)&&o(e))if("function"==typeof n)if("number"==typeof a){var u={callback:n,priority:a,namespace:e};if(d[i]){var s,l=d[i].handlers;for(s=l.length;s>0&&!(a>=l[s-1].priority);s--);s===l.length?l[s]=u:l.splice(s,0,u),d.__current.forEach((function(t){t.name===i&&t.currentIndex>=s&&t.currentIndex++}))}else d[i]={handlers:[u],runs:0};"hookAdded"!==i&&t.doAction("hookAdded",i,e,n,a)}else console.error("If specified, the hook priority must be a number.");else console.error("The hook callback must be a function.")}}function d(t,r){var i=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return function(e,n){var a=t[r];if(c(e)&&(i||o(n))){if(!a[e])return 0;var d=0;if(i)d=a[e].handlers.length,a[e]={runs:a[e].runs,handlers:[]};else for(var u=a[e].handlers,s=function(t){u[t].namespace===n&&(u.splice(t,1),d++,a.__current.forEach((function(r){r.name===e&&r.currentIndex>=t&&r.currentIndex--})))},l=u.length-1;l>=0;l--)s(l);return"hookRemoved"!==e&&t.doAction("hookRemoved",e,n),d}}}function u(t,r){return function(i,e){var n=t[r];return void 0!==e?i in n&&n[i].handlers.some((function(t){return t.namespace===e})):i in n}}function s(t,r){var i=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return function(e){var n=t[r];n[e]||(n[e]={handlers:[],runs:0}),n[e].runs++;for(var o=n[e].handlers,c=arguments.length,a=new Array(c>1?c-1:0),d=1;d<c;d++)a[d-1]=arguments[d];if(!o||!o.length)return i?a[0]:void 0;var u={name:e,currentIndex:0};for(n.__current.push(u);u.currentIndex<o.length;){var s=o[u.currentIndex],l=s.callback.apply(null,a);i&&(a[0]=l),u.currentIndex++}return n.__current.pop(),i?a[0]:void 0}}function l(t,r){return function(){var i,e,n=t[r];return null!==(i=null===(e=n.__current[n.__current.length-1])||void 0===e?void 0:e.name)&&void 0!==i?i:null}}function p(t,r){return function(i){var e=t[r];return void 0===i?void 0!==e.__current[0]:!!e.__current[0]&&i===e.__current[0].name}}function v(t,r){return function(i){var e=t[r];if(c(i))return e[i]&&e[i].runs?e[i].runs:0}}var h=new((0,e.Z)((function t(){(0,n.Z)(this,t),this.actions=Object.create(null),this.actions.__current=[],this.filters=Object.create(null),this.filters.__current=[],this.addAction=a(this,"actions"),this.addFilter=a(this,"filters"),this.removeAction=d(this,"actions"),this.removeFilter=d(this,"filters"),this.hasAction=u(this,"actions"),this.hasFilter=u(this,"filters"),this.removeAllActions=d(this,"actions",!0),this.removeAllFilters=d(this,"filters",!0),this.doAction=s(this,"actions"),this.applyFilters=s(this,"filters",!0),this.currentAction=l(this,"actions"),this.currentFilter=l(this,"filters"),this.doingAction=p(this,"actions"),this.doingFilter=p(this,"filters"),this.didAction=v(this,"actions"),this.didFilter=v(this,"filters")}))),m=(h.addAction,h.addFilter,h.removeAction,h.removeFilter,h.hasAction,h.hasFilter,h.removeAllActions,h.removeAllFilters,h.doAction,h.applyFilters);h.currentAction,h.currentFilter,h.doingAction,h.doingFilter,h.didAction,h.didFilter,h.actions,h.filters},3751:function(t,r,i){i.d(r,{g:function(){return n},s:function(){return e}});var e=function(){var t,r,i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1?arguments[1]:void 0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"fit=scale-down,format=auto";return i.includes("surecart.com")&&(null===(t=window.scData)||void 0===t?void 0:t.cdn_root)?"".concat(null===(r=window.scData)||void 0===r?void 0:r.cdn_root,"/").concat(n,",width=").concat(e,"/").concat(i):i},n=function(t,r){var i,e,n,o=null==t?void 0:t.featured_product_media,c=null==r?void 0:r.image,a={alt:(null===(i=null==o?void 0:o.media)||void 0===i?void 0:i.alt)||(null==t?void 0:t.name),url:(null===(e=null==o?void 0:o.media)||void 0===e?void 0:e.url)||(null==t?void 0:t.image_url),title:(null===(n=null==o?void 0:o.media)||void 0===n?void 0:n.title)||""};return(null==c?void 0:c.url)&&(a.url=c.url,a.alt=a.alt||c.alt,a.title=a.title||c.title),a}},3032:function(t,r,i){i.r(r),i.d(r,{sc_product_item_image:function(){return s},sc_product_item_price:function(){return l},sc_product_item_title:function(){return p}});var e=i(4942),n=i(5671),o=i(3144),c=i(8860),a=i(3751),d=i(9587);function u(t,r){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);r&&(e=e.filter((function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable}))),i.push.apply(i,e)}return i}var s=function(){function t(r){(0,n.Z)(this,t),(0,c.r)(this,r),this.product=void 0,this.sizing=void 0}return(0,o.Z)(t,[{key:"getSrc",value:function(){var t,r,i,e,n,o,c,u,s,l;return(null===(r=null===(t=this.product)||void 0===t?void 0:t.featured_product_media)||void 0===r?void 0:r.url)?null===(e=null===(i=this.product)||void 0===i?void 0:i.featured_product_media)||void 0===e?void 0:e.url:(null===(c=null===(o=null===(n=this.product)||void 0===n?void 0:n.featured_product_media)||void 0===o?void 0:o.media)||void 0===c?void 0:c.url)?(0,a.s)(null===(l=null===(s=null===(u=this.product)||void 0===u?void 0:u.featured_product_media)||void 0===s?void 0:s.media)||void 0===l?void 0:l.url,(0,d.a)("surecart/product-list/media/size",900)):""}},{key:"render",value:function(){var t=(0,a.g)(this.product),r=t.alt,i=t.title;return(0,c.h)(c.H,{style:{borderStyle:"none"}},(0,c.h)("div",{class:{"product-img":!0,is_contained:"contain"===this.sizing,is_covered:"cover"===this.sizing}},this.getSrc()?(0,c.h)("img",function(t){for(var r=1;r<arguments.length;r++){var i=null!=arguments[r]?arguments[r]:{};r%2?u(Object(i),!0).forEach((function(r){(0,e.Z)(t,r,i[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):u(Object(i)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(i,r))}))}return t}({src:this.getSrc(),alt:r},i?{title:i}:{})):(0,c.h)("div",{class:"product-img_placeholder"})))}}]),t}();s.style=":host{border-style:none}.product-img{max-width:100%;aspect-ratio:var(--sc-product-image-aspect-ratio);padding-top:var(--sc-product-image-padding-top, 0);padding-bottom:var(--sc-product-image-padding-bottom, 0);padding-left:var(--sc-product-image-padding-left, 0);padding-right:var(--sc-product-image-padding-right, 0);margin-top:var(--sc-product-image-margin-top, 0);margin-bottom:var(--sc-product-image-margin-bottom, 0);margin-left:var(--sc-product-image-margin-left, 0);margin-right:var(--sc-product-image-margin-right, 0);border:solid var(--sc-product-image-border-width) var(--sc-product-image-border-color);border-radius:var(--sc-product-image-border-radius);overflow:hidden}.product-img>img{width:100%;height:100%;box-sizing:border-box;object-fit:contain;display:block;transition:transform var(--sc-transition-medium) ease}.product-img.is_covered>img{object-fit:cover}.product-img.is_contained>img{object-fit:contain}.product-img_placeholder{width:100%;height:100%;background-color:var(--sc-color-gray-300)}.product-img:hover img{transform:scale(1.05)}";var l=function(){function t(r){(0,n.Z)(this,t),(0,c.r)(this,r),this.prices=void 0,this.range=!0,this.metrics=void 0}return(0,o.Z)(t,[{key:"componentWillLoad",value:function(){var t,r,i,e,n,o;this.range&&(null===(t=this.metrics)||void 0===t?void 0:t.min_price_amount)!==(null===(r=this.metrics)||void 0===r?void 0:r.max_price_amount)&&(this.prices=[{amount:null===(i=this.metrics)||void 0===i?void 0:i.min_price_amount,currency:null===(e=this.metrics)||void 0===e?void 0:e.currency},{amount:null===(n=this.metrics)||void 0===n?void 0:n.max_price_amount,currency:null===(o=this.metrics)||void 0===o?void 0:o.currency}])}},{key:"render",value:function(){var t,r=(this.prices||[]).sort((function(t,r){return(null==t?void 0:t.position)-(null==r?void 0:r.position)})).find((function(t){return!(null==t?void 0:t.archived)}));return(0,c.h)("div",{class:"product-price",part:"base"},!this.range&&(null===(t=this.prices)||void 0===t?void 0:t.length)?(0,c.h)("sc-format-number",{type:"currency",currency:(null==r?void 0:r.currency)||"usd",value:null==r?void 0:r.amount}):(0,c.h)("sc-price-range",{prices:this.prices}))}}]),t}();l.style=":host{display:block;line-height:1}.product-price{padding-top:var(--sc-product-price-padding-top, 0);padding-bottom:var(--sc-product-price-padding-bottom, 0);padding-left:var(--sc-product-price-padding-left, 0);padding-right:var(--sc-product-price-padding-right, 0);margin-top:var(--sc-product-price-margin-top, 0);margin-bottom:var(--sc-product-price-margin-bottom, 0);margin-left:var(--sc-product-price-margin-left, 0);margin-right:var(--sc-product-price-margin-right, 0);text-align:var(--sc-product-price-align);font-size:var(--sc-product-price-font-size);font-weight:var(--sc-product-price-font-weight);color:var(--sc-product-price-text-color)}";var p=function(){function t(r){(0,n.Z)(this,t),(0,c.r)(this,r)}return(0,o.Z)(t,[{key:"render",value:function(){return(0,c.h)(c.H,null,(0,c.h)("div",{class:{"product-item-title":!0}},(0,c.h)("slot",null)))}}]),t}();p.style=".product-item-title{padding-top:var(--sc-product-title-padding-top, 0);padding-bottom:var(--sc-product-title-padding-bottom, 0);margin-top:var(--sc-product-title-margin-top, 0);margin-bottom:var(--sc-product-title-margin-bottom, 0);font-size:var(--sc-product-title-font-size);text-align:var(--sc-product-title-align);font-weight:var(--sc-product-title-font-weight);color:var(--sc-product-title-text-color);line-height:1.2}"},4942:function(t,r,i){function e(t,r,i){return r in t?Object.defineProperty(t,r,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[r]=i,t}i.d(r,{Z:function(){return e}})}}]);