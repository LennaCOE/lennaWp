import{h}from"@stencil/core";import{__}from"@wordpress/i18n";export class ScLicensesList{constructor(){this.licenses=[],this.activations=[],this.heading=void 0,this.copied=void 0}renderStatus(e){return"active"===e?h("sc-tag",{type:"success"},__("Active","surecart")):"revoked"===e?h("sc-tag",{type:"danger"},__("Revoked","surecart")):h("sc-tag",{type:"info"},"inactive"===e?__("Inactive","surecart"):e)}async copyKey(e){try{await navigator.clipboard.writeText(e),this.copied=!0,setTimeout((()=>{this.copied=!1}),2e3)}catch(e){console.error(e),alert(__("Error copying to clipboard","surecart"))}}render(){return h("sc-dashboard-module",{class:"purchase",part:"base"},h("span",{slot:"heading"},h("slot",{name:"heading"},this.heading||__("License Keys","surecart"))),h("sc-card",{"no-padding":!0},h("sc-table",null,h("sc-table-cell",{slot:"head"},__("Key","surecart")),h("sc-table-cell",{slot:"head",style:{width:"100px"}},__("Status","surecart")),h("sc-table-cell",{slot:"head",style:{width:"100px"}},__("Activations","surecart")),this.licenses.map((({key:e,status:t,activations:s,activation_limit:i})=>{var a;return h("sc-table-row",{style:{"--columns":"3"}},h("sc-table-cell",null,h("sc-input",{value:e,readonly:!0},h("sc-button",{type:"default",size:"small",slot:"suffix",onClick:()=>this.copyKey(e)},this.copied?__("Copied!","surecart"):__("Copy","surecart")))),h("sc-table-cell",null,this.renderStatus(t)),h("sc-table-cell",null,null===(a=null==s?void 0:s.pagination)||void 0===a?void 0:a.count," / ",i||h("span",null,"∞")))})))))}static get is(){return"sc-licenses-list"}static get encapsulation(){return"shadow"}static get originalStyleUrls(){return{$:["sc-licenses-list.css"]}}static get styleUrls(){return{$:["sc-licenses-list.css"]}}static get properties(){return{licenses:{type:"unknown",mutable:!1,complexType:{original:"License[]",resolved:"License[]",references:{License:{location:"import",path:"../../../../types"}}},required:!1,optional:!1,docs:{tags:[],text:""},defaultValue:"[]"},activations:{type:"unknown",mutable:!1,complexType:{original:"Activation[]",resolved:"Activation[]",references:{Activation:{location:"import",path:"../../../../types"}}},required:!1,optional:!1,docs:{tags:[],text:""},defaultValue:"[]"},heading:{type:"string",mutable:!1,complexType:{original:"string",resolved:"string",references:{}},required:!1,optional:!1,docs:{tags:[],text:""},attribute:"heading",reflect:!1},copied:{type:"boolean",mutable:!1,complexType:{original:"boolean",resolved:"boolean",references:{}},required:!1,optional:!1,docs:{tags:[],text:""},attribute:"copied",reflect:!1}}}}