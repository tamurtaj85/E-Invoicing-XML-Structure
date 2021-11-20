import utils from "../imports.js";
const { builder, CAC_TAGS, CBC_TAGS } = utils;

function setDelivery(deliveryDate) {
  return builder
    .create(CAC_TAGS.DELIVERY)
    .ele(CBC_TAGS.ACTUAL_DELIVERY_DATE)
    .text(deliveryDate);
}

export default {
  setDelivery,
};
