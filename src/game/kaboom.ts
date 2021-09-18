import kaboom from "kaboom";
import { isDebug } from "./helpers";

export const k = kaboom({
    global: false,
    touchToMouse: true,
    debug: isDebug(),
});
export default k;
