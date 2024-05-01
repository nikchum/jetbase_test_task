export const generateSequenceWithMissingNumbers = (
  sequenceLength: number,
  missingNumbers: [number, number]
) => {
  if (!Number(sequenceLength) || !Array.isArray(missingNumbers) || missingNumbers.length !== 2) {
    throw new Error("Invalid input");
  }

  const sortedMissingNumbers = missingNumbers.sort((a, b) => a - b);

  const sequence = [];
  let missingIndex = 0;

  for (let i = 1; i <= sequenceLength; i++) {
    if (i === sortedMissingNumbers[missingIndex]) {
      missingIndex++;
    } else {
      sequence.push(i);
    }
  }

  return sequence;
};
