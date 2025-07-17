// import ahihi, { b as _b, c } from "../modules/home.js";
// import { b as _b, c } from "../modules/home.js";
// console.log(ahihi);
// console.log(_b, c);

import * as home from "../modules/home.js";
const { default: ahihi, b, c } = home;
console.log(b, c);
ahihi();
