import { Layout } from "../../utils/types";
import { Layout1 } from "./layout-1/Layout1";
import { Layout2 } from "./layout-2/Layout2";
import { Layout3 } from "./layout-3/Layout3";
import { Layout4 } from "./layout-4/Layout4";

const Layouts: Record<string, React.ComponentType<Layout>> = {
  "layout-1": Layout1,
  "layout-2": Layout2,
  "layout-3": Layout3,
  "layout-4": Layout4,
};

export default Layouts;
