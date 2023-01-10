function sortArray(arrayToSort, command) {
  if (command === "asc") {
    return (arrayToSort = arrayToSort.sort((a, b) => a - b));
  } else if (command === "desc") {
    return (arrayToSort = arrayToSort.sort((a, b) => b - a));
  } else {
    return undefined;
  }
}


console.log(sortArray([14, 7, 17, 6, 8], 'desc'));