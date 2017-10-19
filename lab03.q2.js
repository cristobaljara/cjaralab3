
function sumArray(arr){
var sum = 0

  for (let row = 0; row < arr.length; row++){
    for (let col = 0; col < arr[row].length; col++){
      sum = sum + arr[row][col];
    }
  }
  return sum;
}

var numbers = [[1,2,3,4,5],
               [2,3,4,5,6],
               [3,4,5,6,7],
               [4,5,6,7,8],
               [5,6,7,8,9]];

console.log(sumArray(numbers)); 
