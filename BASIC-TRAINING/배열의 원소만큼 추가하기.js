/* My Answer 01 */
function solution(arr) {
  var result = [];
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    for (let j = 0; j < element; j++) {
      result.push(element);
    }
  }
  return result;
}
/* 



*/
/* My Answer 02 */
function solution(arr) {
  return arr.reduce((list, num) => [...list, ...new Array(num).fill(num)], []);
}
/* 



*/
/* My Answer 03 */
function solution(arr) {
  return arr.reduce((a, c) => a.concat(Array(c).fill(c)), []);
}
