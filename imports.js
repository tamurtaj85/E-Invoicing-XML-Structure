import builder from "xmlbuilder";
import { CAC_TAGS, CBC_TAGS } from "./constants/tagsList.js";
import { ATT_KEY_LIST, ATT_VAL_LIST } from "./constants/attributesList.js";

function addNodesToParent(parentNode, childNode) {
  parentNode.importDocument(childNode);
}

function addSubChildToChild(childNode, subChildNode) {
  return childNode.importDocument(subChildNode);
}

export default {
  builder,
  CAC_TAGS,
  CBC_TAGS,
  ATT_KEY_LIST,
  ATT_VAL_LIST,

  addNodesToParent,
  addSubChildToChild,
};
