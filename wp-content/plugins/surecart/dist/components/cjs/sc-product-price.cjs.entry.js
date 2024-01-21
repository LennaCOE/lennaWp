'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-f1e4d53b.js');
const watchers = require('./watchers-fe3ffcd3.js');
const price = require('./price-801e92ef.js');
require('./index-00f0fc21.js');
require('./utils-a086ed6e.js');
require('./util-efd68af1.js');
require('./index-13ba9385.js');
require('./currency-ba038e2f.js');

const scProductPriceCss = ":host{display:block}.price{display:flex;flex-direction:column;gap:var(--sc-spacing-xxx-small);text-align:var(--sc-product-price-alignment, left);justify-content:var(--sc-product-price-alignment, left)}.price__amounts{display:inline-flex;flex-wrap:wrap;align-items:baseline;gap:var(--sc-spacing-xx-small);justify-content:var(--sc-product-price-alignment, left);text-align:var(--sc-product-price-alignment, left)}.price__scratch{text-decoration:line-through;opacity:0.75}.price__interval{font-size:min(var(--sc-font-size-small), 16px);opacity:0.75}.price__details{font-size:min(var(--sc-font-size-small), 16px);opacity:0.75}.price__sale-badge{font-size:min(1em, 14px);align-self:center}";

const ScProductPrice = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.prices = undefined;
    this.saleText = undefined;
    this.productId = undefined;
  }
  renderRange() {
    var _a, _b, _c, _d;
    if (((_b = (_a = watchers.state[this.productId]) === null || _a === void 0 ? void 0 : _a.prices) === null || _b === void 0 ? void 0 : _b.length) === 1) {
      return this.renderPrice((_c = watchers.state[this.productId]) === null || _c === void 0 ? void 0 : _c.prices[0]);
    }
    return index.h("sc-price-range", { prices: (_d = watchers.state[this.productId]) === null || _d === void 0 ? void 0 : _d.prices });
  }
  renderVariantPrice(selectedVariant) {
    var _a, _b;
    const variant = (_b = (_a = watchers.state[this.productId]) === null || _a === void 0 ? void 0 : _a.variants) === null || _b === void 0 ? void 0 : _b.find(variant => (variant === null || variant === void 0 ? void 0 : variant.id) === (selectedVariant === null || selectedVariant === void 0 ? void 0 : selectedVariant.id));
    return this.renderPrice(watchers.state[this.productId].selectedPrice, variant === null || variant === void 0 ? void 0 : variant.amount);
  }
  renderPrice(price$1, variantAmount) {
    var _a;
    const amount = (_a = variantAmount !== null && variantAmount !== void 0 ? variantAmount : price$1 === null || price$1 === void 0 ? void 0 : price$1.amount) !== null && _a !== void 0 ? _a : 0;
    if (price$1 === null || price$1 === void 0 ? void 0 : price$1.ad_hoc) {
      return wp.i18n.__('Custom Amount', 'surecart');
    }
    return (index.h(index.Fragment, null, index.h("div", { class: "price", id: "price" }, index.h("div", { class: "price__amounts" }, !!(price$1 === null || price$1 === void 0 ? void 0 : price$1.scratch_amount) && (price$1 === null || price$1 === void 0 ? void 0 : price$1.scratch_amount) !== amount && (index.h(index.Fragment, null, (price$1 === null || price$1 === void 0 ? void 0 : price$1.scratch_amount) === 0 ? (wp.i18n.__('Free', 'surecart')) : (index.h(index.Fragment, null, index.h("sc-visually-hidden", null, wp.i18n.__('The price was', 'surecart'), " "), index.h("sc-format-number", { class: "price__scratch", part: "price__scratch", type: "currency", currency: price$1.currency, value: price$1 === null || price$1 === void 0 ? void 0 : price$1.scratch_amount }), index.h("sc-visually-hidden", null, " ", wp.i18n.__('now discounted to', 'surecart')))))), amount === 0 ? wp.i18n.__('Free', 'surecart') : index.h("sc-format-number", { class: "price__amount", type: "currency", value: amount, currency: price$1 === null || price$1 === void 0 ? void 0 : price$1.currency }), index.h("div", { class: "price__interval" }, (price$1 === null || price$1 === void 0 ? void 0 : price$1.recurring_period_count) && 1 < (price$1 === null || price$1 === void 0 ? void 0 : price$1.recurring_period_count) && (index.h("sc-visually-hidden", null, ' ', wp.i18n.__('This is a repeating price. Payment will happen', 'surecart'), ' ', price.intervalString(price$1, {
      showOnce: true,
      abbreviate: false,
      labels: {
        interval: wp.i18n.__('every', 'surecart'),
        period: 
        /** translators: used as in time period: "for 3 months" */
        wp.i18n.__('for', 'surecart'),
      },
    }))), index.h("span", { "aria-hidden": "true" }, price.intervalString(price$1, {
      showOnce: true,
      abbreviate: false,
      labels: {
        interval: '/',
        period: 
        /** translators: used as in time period: "for 3 months" */
        wp.i18n.__('for', 'surecart'),
      },
    }))), !!(price$1 === null || price$1 === void 0 ? void 0 : price$1.scratch_amount) && (index.h("sc-tag", { type: "primary", pill: true, class: "price__sale-badge" }, this.saleText || (index.h(index.Fragment, null, index.h("sc-visually-hidden", null, wp.i18n.__('This product is available for sale.', 'surecart'), " "), index.h("span", { "aria-hidden": "true" }, wp.i18n.__('Sale', 'surecart'))))))), (!!(price$1 === null || price$1 === void 0 ? void 0 : price$1.trial_duration_days) || (!!(price$1 === null || price$1 === void 0 ? void 0 : price$1.setup_fee_enabled) && (price$1 === null || price$1 === void 0 ? void 0 : price$1.setup_fee_amount))) && (index.h("div", { class: "price__details" }, !!(price$1 === null || price$1 === void 0 ? void 0 : price$1.trial_duration_days) && (index.h(index.Fragment, null, index.h("sc-visually-hidden", null, wp.i18n.sprintf(wp.i18n.__('You have a %d-day trial before payment becomes necessary.', 'surecart'), price$1.trial_duration_days)), index.h("span", { class: "price__trial", "aria-hidden": "true" }, wp.i18n.sprintf(wp.i18n._n('Starting in %s day.', 'Starting in %s days.', price$1.trial_duration_days, 'surecart'), price$1.trial_duration_days)))), !!(price$1 === null || price$1 === void 0 ? void 0 : price$1.setup_fee_enabled) && (price$1 === null || price$1 === void 0 ? void 0 : price$1.setup_fee_amount) && (index.h("span", { class: "price__setup-fee" }, index.h("sc-visually-hidden", null, wp.i18n.__('This product has', 'surecart'), " "), index.h("sc-format-number", { type: "currency", value: Math.abs(price$1.setup_fee_amount), currency: price$1 === null || price$1 === void 0 ? void 0 : price$1.currency }), ' ', (price$1 === null || price$1 === void 0 ? void 0 : price$1.setup_fee_name) || ((price$1 === null || price$1 === void 0 ? void 0 : price$1.setup_fee_amount) < 0 ? wp.i18n.__('Discount', 'surecart') : wp.i18n.__('Setup Fee', 'surecart')), ".")))))));
  }
  render() {
    return (index.h(index.Host, { role: "paragraph" }, (() => {
      var _a, _b;
      if ((_a = watchers.state[this.productId]) === null || _a === void 0 ? void 0 : _a.selectedVariant) {
        return this.renderVariantPrice((_b = watchers.state[this.productId]) === null || _b === void 0 ? void 0 : _b.selectedVariant);
      }
      if (watchers.state[this.productId].selectedPrice) {
        return this.renderPrice(watchers.state[this.productId].selectedPrice);
      }
      if (watchers.state[this.productId].prices.length) {
        return this.renderRange();
      }
      return index.h("slot", null);
    })()));
  }
};
ScProductPrice.style = scProductPriceCss;

exports.sc_product_price = ScProductPrice;

//# sourceMappingURL=sc-product-price.cjs.entry.js.map