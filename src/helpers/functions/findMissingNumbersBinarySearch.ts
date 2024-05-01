export const findMissingNumbersBinarySearch = (sequenceArray: number[]) => {
  if (!Array.isArray(sequenceArray)) {
    throw new Error("Invalid data type");
  }

  if (!sequenceArray.length) {
    return [1, 2];
  }

  let low = 0;
  let high = sequenceArray.length - 1;
  let sum = sequenceArray.reduce((a, b) => a + b, 0);
  let n = sequenceArray.length + 2;
  let gaussSum = (n * (n + 1)) / 2;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (sequenceArray[mid] !== mid + 1) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  let missing1 = low + 1;
  let missing2 = gaussSum - sum - missing1;

  return [missing1, missing2];
};
