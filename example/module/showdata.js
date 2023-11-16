

import sum, { a, b } from "./data"
console.log(a, b);
console.log(sum(a, b));
// hàm sum dùng export deflaut thì ko import chung với a và b
// mà phải import riêng