let arr2D = [[1,4,5],[1,3,4],[2,6]];
let arr1D = [].concat(...arr2D);
arr1D.sort();
console.log(arr1D);