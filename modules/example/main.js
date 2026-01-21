import { add, subtract } from "./math.js";
import { username, getUser } from "./user.js";
import { calculate } from "./helper.js";

console.log(add(5, 3));        // 8
console.log(subtract(10, 4));  // 6
console.log(username);         // John
console.log(getUser());        // User: John
console.log(calculate());      // 15
