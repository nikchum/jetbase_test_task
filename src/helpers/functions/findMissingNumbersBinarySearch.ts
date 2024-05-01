export const findMissingNumbersBinarySearch = (sequenceArray: number[]) => {
  if (!Array.isArray(sequenceArray)) {
    throw new Error("Invalid data type");
  }

  if (sequenceArray.length === 0) {
    return [1, 2];
  }

  let low = 0;
  let high = sequenceArray.length - 1;
  let sum = 0;
  let gaussSum = 0;

  for (let i = 0; i < sequenceArray.length; i++) {
    sum += sequenceArray[i];
    gaussSum += i + 1;
  }

  gaussSum += sequenceArray.length + 1;
  gaussSum += sequenceArray.length + 2;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    let expected = mid + 1;

    if (sequenceArray[mid] !== expected) {
      if (mid > 0 && sequenceArray[mid - 1] === mid) {
        let secondElement = gaussSum - sum - expected;
        return [expected, secondElement];
      } else {
        high = mid - 1;
      }
    } else if (sequenceArray[mid] === expected) {
      if (mid < sequenceArray.length - 1 && sequenceArray[mid + 1] !== mid + 2) {
        let secondElement = gaussSum - sum - mid - 2;
        return [mid + 2, secondElement];
      } else {
        low = mid + 1;
      }
    }
  }

  return [0];
};
