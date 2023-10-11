function fibs (n) {
  let fibArr = [];
  for ( let i = 0; i < n; i++) {
    if ( i === 0 ) {
      fibArr.push(0);
    } else if ( i === 1) {
      fibArr.push(1);
    } else {
      fibArr.push(fibArr[i-1] + fibArr[i-2]);
    }
  }    
  
  return fibArr;

}

function fibsRec (n){

  return n <= 0 
  ? 'Enter valid number for fibonacci sequence' 
  : n === 1 ? [0] 
  : n === 2 ? [0,1]
  : [...fibRec(n-1), fibRec(n-1)[n-2] + fibRec(n-1)[n-3]]; // ensures ending index of one less than n to keep length at n
}
