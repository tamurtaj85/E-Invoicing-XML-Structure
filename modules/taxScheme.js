import utils from "../imports.js";
import { setID } from "./id.js";
const { builder, CAC_TAGS, CBC_TAGS, addNodesToParent } = utils;

export default function setTaxScheme(schemeType) {
  const parentEle = builder.create(CAC_TAGS.TAX_SCHEME);

  addNodesToParent(parentEle, setID(schemeType));

  return parentEle;
}
