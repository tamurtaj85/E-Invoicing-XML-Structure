import utils from "../imports.js";
const { builder, CBC_TAGS } = utils;

export const setID = (id) => builder.create(CBC_TAGS.ID).text(id);
