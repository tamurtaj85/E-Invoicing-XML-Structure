import utils from "../imports.js";
const { builder, CBC_TAGS, CAC_TAGS, addNodesToParent } = utils;

import { setID } from "./id.js";

// // // // // // // // // // // // // //
// Signature component
// // // // // // // // // // // // // //
function setSignature(id, method) {
  const parentEle = builder.create(CAC_TAGS.SIGNATURE);

  addNodesToParent(parentEle, setID(id));
  parentEle.ele(CBC_TAGS.SIGNATURE_METHOD).text(method);

  return parentEle;
}

export default {
  setSignature,
};
