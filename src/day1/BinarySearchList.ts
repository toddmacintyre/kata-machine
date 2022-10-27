function bs_list(haystack: number[], needle: number): boolean {
  const indexToCheck: number = Math.floor(haystack.length / 2);

  if (haystack[indexToCheck] === needle) {
    return true;
  } else if (haystack.length === 1) {
    return false;
  } else if (haystack[indexToCheck] > needle) {
    const newList: number[] = haystack.slice(0, indexToCheck);
    return bs_list(newList, needle);
  } else {
    return bs_list(haystack.slice(indexToCheck, haystack.length), needle);
  }
}

function byWhileLoop(haystack: number[], needle: number): boolean {
  let arrToCheck = [...haystack];

  while (haystack.length > 1) {
    const indexToCheck = Math.floor(arrToCheck.length / 2);
    const numberToCheck = arrToCheck[indexToCheck];
    if (numberToCheck === needle) {
      return true;
    }
    if (arrToCheck.length === 1) {
      return false;
    }

    if (numberToCheck < needle) {
      arrToCheck = arrToCheck.slice(indexToCheck, arrToCheck.length);
    } else {
      arrToCheck = arrToCheck.slice(0, indexToCheck);
    }
  }
  return false;
}











// [1, 3, 4, 69, 71, 81, 90, 99, 420, 1337, 69420];
function byWhileLoop2(haystack: number[], needle: number): boolean {
  let array = [...haystack];

  do {
    const indexToCheck = Math.floor(array.length / 2);
    const valueToCheck = array[indexToCheck];

    if (valueToCheck === needle) {
      return true;
    }

    if (valueToCheck > needle) {
      if (needle !< array[0]) {
        return false;
      }
      array = array.slice(0, indexToCheck);
      continue;
    }

    if (valueToCheck < needle) {
      if (needle !> array[array.length - 1]) {
        return false;
      }
      array = array.slice(indexToCheck + 1);
      continue;
    }

    if (array.length === 1) {
      break;
    }

  } while (true);


  return false;
}





// [1,2,3,4,5]
function byLowMidHigh(haystack: number[], needle: number): boolean {
  let lowIndex = 0;
  let highIndex = haystack.length;
  
  do {
    const midIndex = lowIndex + Math.floor((highIndex - lowIndex) / 2);
    const midValue = haystack[midIndex];

    if (needle === midValue) {
      return true;
    }

    if (needle < midValue) {
      highIndex = midIndex;
    } else {
      lowIndex = midIndex + 1;
    }

  } while (lowIndex < highIndex)

  return false;
}













// [1,2]
// [1,2,3,4,5]
function byLowMidHigh2(haystack: number[], needle: number): boolean {

  let low = 0;
  let high = haystack.length;

  do {
    const mid = low + Math.floor((high - low) / 2);

    if (haystack[mid] === needle) {
      return true;
    }

    if (needle < haystack[mid]) {
      high = mid;
    } else {
      low = mid + 1
    }
  } while (low < high)

  return false;
}













function byLowMidHigh3(haystack: number[], needle: number): boolean {
let lowIndex = 0;
let highIndex = haystack.length;

  do {
    const midIndex = lowIndex + Math.floor((highIndex - lowIndex) / 2)
    const midValue = haystack[midIndex];

    if (needle === midValue) {
      return true;
    } else if (needle < midValue) {
      // take the lower half
      highIndex = midIndex;
    } else {
      // take the higher half
      lowIndex = midIndex + 1
    }
  } while (lowIndex < highIndex)

  return false;
}








function byRecursion(haystack: number[], needle: number): boolean {
  const midIndex = ~~(haystack.length / 2);
  const midValue = haystack[midIndex];

  if (needle === midValue) {
    return true;
  }

  if (haystack.length <= 1) {
    return false;
  }

  if (needle < midValue) {
    return byRecursion(haystack.slice(0, midIndex), needle);
  } else {
    return byRecursion(haystack.slice(midIndex+1), needle);
  }
}


































export default byRecursion;


// key thing to remember is that whenever there are two numbers, you check the bottom (lower) one. This means that the upper index must be the highest possible index + 1, or haystack.length... NOT haystack.length - 1