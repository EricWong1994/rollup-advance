// import answer from "the-answer";
// import {name} from './modules/myModule'
// import { named } from 'my-lib';
import _ from 'lodash'
const arr = _.concat([1, 2], 3, 4, [5]);
console.log('arr: ', arr);

// console.log('named: ', named);



// export default function () {
//   console.log("the answer is " + answer);
// }

// Uncaught ReferenceError: require is not defined
// 浏览器不识别 是因为本来就不支持commonjs