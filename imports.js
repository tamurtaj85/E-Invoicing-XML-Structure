import builder from "xmlbuilder";
import {
  CAC_TAGS,
  CBC_TAGS,
  EXT_TAGS,
  SIG_TAG,
  SAC_TAG,
  SBC_TAG,
  DS_TAGS,
  XADES_TAGS,
} from "./constants/tagsList.js";
import {
  ATT_KEY_LIST,
  ATT_VAL_LIST,
  xmlnsTG,
} from "./constants/attributesList.js";

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
  EXT_TAGS,
  SIG_TAG,
  SAC_TAG,
  SBC_TAG,
  DS_TAGS,
  XADES_TAGS,
  ATT_KEY_LIST,
  ATT_VAL_LIST,
  xmlnsTG,

  addNodesToParent,
  addSubChildToChild,
};
