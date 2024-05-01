export const findMissingNumbersWithBruteForce = (sequenceArray: number[], sequenceLength: number) => {
  if (!Array.isArray(sequenceArray) || !Number(sequenceLength)) {
    throw new Error("Invalid data type");
  }

  if (sequenceArray.length === 0) return [1, 2];

  const missingNumbers = [];

  let count = 0;

  if (sequenceArray[0] !== 1) {
    missingNumbers.push(1);
    count++;
  }

  if (sequenceArray[sequenceArray.length - 1] !== sequenceLength) {
    missingNumbers.push(sequenceLength);
  }

  for (let i = 0; i < sequenceLength - 1; i++) {
    if (missingNumbers.length === 2) break;

    count++;

    const isEqual = sequenceArray[i] === count;

    if (!isEqual) {
      missingNumbers.push(count);
      count++;
    }
  }

  return missingNumbers.sort((a, b) => a - b);
};
