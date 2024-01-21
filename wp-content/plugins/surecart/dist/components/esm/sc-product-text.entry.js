import { r as registerInstance, h, H as Host } from './index-644f5478.js';
import { s as state } from './watchers-bfae40eb.js';
import './index-1046c77e.js';
import './utils-00526fde.js';
import './util-64ee5262.js';
import './index-b0f661a7.js';

const scProductTextCss = ":host{display:block}p{margin-block-start:0;margin-block-end:1em}";

const ScProductText = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.text = 'name';
    this.productId = undefined;
  }
  render() {
    const product = state[this.productId].product;
    if (product === null || product === void 0 ? void 0 : product[this.text]) {
      return h("span", { style: { whiteSpace: 'pre-line' }, innerHTML: product[this.text] });
    }
    return (h(Host, null, h("slot", null)));
  }
};
ScProductText.style = scProductTextCss;

export { ScProductText as sc_product_text };

//# sourceMappingURL=sc-product-text.entry.js.map