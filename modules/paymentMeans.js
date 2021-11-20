import utils from "../imports.js";
const { builder, CAC_TAGS, CBC_TAGS } = utils;

function setPaymentMeans(code) {
  return builder
    .create(CAC_TAGS.PAYMENT_MEANS)
    .ele(CBC_TAGS.PAYMENT_MEANS_CODE)
    .text(code);
}
export default {
  setPaymentMeans,
};
