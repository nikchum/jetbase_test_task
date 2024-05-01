export const gaussSumOfArithmeticProgression = (length: number, firstNumber: number, lastNumber: number) => {
  if (Number.isNaN(length) || Number.isNaN(firstNumber) || Number.isNaN(lastNumber))
    throw new Error("Invalid data type");

  return (length * (firstNumber + lastNumber)) / 2;
};
