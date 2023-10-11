function merge(arr1, arr2){
  let i = 0;
  let j = 0;
  let results = [];

  while (i < arr1.length && j < arr2.length ) {
    if ( arr2[j] > arr1[i] ) {
      results.push(arr1[i]);
      i++;
    } else {
      results.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length ) {
    results.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    results.push(arr2[j]);
    j++;
  }

  return results;
}

function mergeSort(arr){

if (arr.length <= 1) return arr;

let mid = Math.floor(arr.length / 2);
let left = mergeSort(arr.slice(0,mid))
let right = mergeSort(arr.slice(mid));

return merge(left, right);

}


let testArray = [36,25,19,459,63,25,84,76,35,19,25,48,36,12,10];

console.log(mergeSort(testArray));
console.log(mergeSort([0,6,3,2,1,7,3,3]));
console.log(mergeSort([]));