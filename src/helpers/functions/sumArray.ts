export const sumArray = (numbers: number[]) => {
  if (!Array.isArray(numbers)) {
    throw new Error("Invalid data type");
  }

  return numbers.reduce((sum, number) => sum + number, 0);
};
