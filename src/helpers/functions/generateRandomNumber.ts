export const generateRandomNumber = (max: number, exclude?: number[]) => {
if (exclude && exclude.length >= max) {
    throw new Error("Exclusion range must be smaller than the max number");
  }

  let randomNumber;
  do {
    randomNumber = Math.floor(Math.random() * max) + 1;
  } while (exclude && exclude.includes(randomNumber));
  return randomNumber;
};
