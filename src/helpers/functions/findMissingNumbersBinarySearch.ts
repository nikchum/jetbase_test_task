// import { gaussSumOfArithmeticProgression } from "./gaussSumOfArithmeticProgression";
// import { sumArray } from "./sumArray";

export const gaussSumOfArithmeticProgression = (length: number, firstNumber: number, lastNumber: number) => {
  if (Number.isNaN(length) || Number.isNaN(firstNumber) || Number.isNaN(lastNumber))
    throw new Error("Invalid data type");

  return (length * (firstNumber + lastNumber)) / 2;
};

export const sumArray = (numbers: number[]) => {
  if (!Array.isArray(numbers)) {
    throw new Error("Invalid data type");
  }

  return numbers.reduce((sum, number) => sum + number, 0);
};

// export const findMissingNumbersBinarySearch = (numbers: number[]) => {
//   if (!Array.isArray(numbers) || numbers.length === 0) {
//     throw new Error("Invalid data type");
//   }

//   const gaussSum = gaussSumOfArithmeticProgression(
//     numbers.length + 2,
//     numbers[0],
//     numbers[numbers.length - 1]
//   );

//   const realSum = sumArray(numbers);
//   let low = 0;
//   let high = numbers.length - 1;

//   while (low <= high) {
//     let mid = Math.floor((low + high) / 2);

//     let expected = mid + 1;

//     if (numbers[mid] !== expected) {
//       if (mid > 0 && numbers[mid - 1] === mid) {
//         let secondElement = gaussSum - realSum - expected;
//         return [expected, secondElement];
//       } else {
//         high = mid - 1;
//       }
//     } else if (numbers[mid] === expected) {
//       if (mid < numbers.length - 1 && numbers[mid + 1] !== mid + 2) {
//         let secondElement = gaussSum - realSum - mid - 2;
//         return [mid + 2, secondElement];
//       } else {
//         low = mid + 1;
//       }
//     }
//   }

//   return [0];
// };

export const findMissingNumbersBinarySearch = (sequenceArray: number[]) => {
  if (!Array.isArray(sequenceArray)) {
    throw new Error("Invalid data type");
  }

  if (sequenceArray.length === 0) {
    return [1, 2];
  }

  // if (sequenceArray.length === 1) { }

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
