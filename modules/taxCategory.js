import utils from "../imports.js";
import { setID } from "./id.js";
const { builder, CBC_TAGS, addNodesToParent } = utils;

export default function (categoryType, id, percent) {
  const parentEle = builder.create(categoryType);

  addNodesToParent(parentEle, setID(id));

  parentEle.ele(CBC_TAGS.PERCENT).text(percent);

  return parentEle;
}
