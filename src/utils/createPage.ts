import { nanoid } from "nanoid";
import { Page } from "./types";

export const createPage = ({
  h1 = "",
  h2 = "",
  content = "",
  bg = "",
  layout = "",
} = {}): Page => {
  return {
    id: nanoid(),
    h1,
    h2,
    content,
    bg,
    layout,
  };
};
