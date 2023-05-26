/*JavaScript Array Methods*/

// Array Declaration
let arr = [45, 74, 58, 6, 12, 3];
console.log("Main Array:-\n", arr);

//JavaScript Array length
let size = arr.length;
console.log(
  "JavaScript Array Length:-",
  size,
  "\nThe length() method return the length of an array\n"
);

//Array.map
let newarr = arr.map((value, index, same_arr) => {
  return {
    key: index,
    values: value,
    same_array: same_arr,
  };
});
console.log(
  "JavaScript Array Map:-\n",
  newarr,
  "\narray.map(function(currentValue, index, arr), thisValue).\n"
);

//Array.shift
arr.shift();
console.log(
  "JavaScript Array Shift:-\n",
  arr,
  "\nThe shift() method removes the first element of an array.\n"
);

//Array.unshift
arr.unshift(12, 63);
console.log(
  "JavaScript Array Unshift(12,63):-\n",
  arr,
  "\nThe unshift() method adds new elements to the beginning of an array.\n"
);

//Array.Find
check_Array = (arr) => {
  return arr > 65;
};
console.log(
  "JavaScript Array Find:-\n",
  arr.find(check_Array),
  "\nfind() returns the value of the first element in an array that passes a test (provided by a function).\n"
);

//Array.Reduce

const array = [25, 50, 75];
console.log(
  "JavaScript Array Reduce:-\n",
  "\n",
  "total-:The initialValue, or the previously returned value of the function.\n",
  "currentValue-: The value of the current element.\n",
  "currentIndex-: The index of the current element.\n",
  "currentArray-: The array the current element belongs to.\n"
);
console.log("Sum of array=", array.reduce(arraySum, 0));

function arraySum(total, currentValue, currentIndex, currentArray) {
  console.log(
    "Total=",
    total,
    "\n",
    "currentValue=",
    currentValue,
    "\n",
    "currentIndex=",
    currentIndex,
    "\n",
    "currentArray=",
    currentArray,
    "\n"
  );
  return total + currentValue;
}
