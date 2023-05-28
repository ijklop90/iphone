import view from "./view.js";
import { data } from "../../local-server/data.js";
import { calculate } from "./controller.js";
import { counter } from "./controller.js";



export default counter(view, calculate);