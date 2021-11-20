import utils from "../imports.js";
const { builder, CAC_TAGS, CBC_TAGS, ATT_KEY_LIST } = utils;

function setLegalMonetaryTotal() {
  return builder.create(CAC_TAGS.LEGAL_MONETARY_TOTAL);
}

function setLineExtensionAmount(currencyCode, amount) {
  return builder
    .create(CBC_TAGS.LINE_EXT_AMOUNT)
    .att(ATT_KEY_LIST.CURRENCY_ID, currencyCode)
    .text(amount);
}

function setTaxExclusiveAmount(currencyCode, amount) {
  return builder
    .create(CBC_TAGS.TAX_EXC_AMOUNT)
    .att(ATT_KEY_LIST.CURRENCY_ID, currencyCode)
    .text(amount);
}

function setTaxInclusiveAmount(currencyCode, amount) {
  return builder
    .create(CBC_TAGS.TAX_INC_AMOUNT)
    .att(ATT_KEY_LIST.CURRENCY_ID, currencyCode)
    .text(amount);
}

function setAllowanceTotalAmount(currencyCode, amount) {
  return builder
    .create(CBC_TAGS.ALLOWANCE_TOTAL_AMOUNT)
    .att(ATT_KEY_LIST.CURRENCY_ID, currencyCode)
    .text(amount);
}

function setPayableAmount(currencyCode, amount) {
  return builder
    .create(CBC_TAGS.PAYABLE_AMOUNT)
    .att(ATT_KEY_LIST.CURRENCY_ID, currencyCode)
    .text(amount);
}

export default {
  setLegalMonetaryTotal,
  setLineExtensionAmount,
  setTaxExclusiveAmount,
  setTaxInclusiveAmount,
  setAllowanceTotalAmount,
  setPayableAmount,
};
