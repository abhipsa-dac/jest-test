function findDuplicateNumbers(numbers: number[]): number[] {
  const sortedNumbers = numbers.slice().sort((a, b) => a - b);

  const duplicateNumbers = sortedNumbers.filter((num, i) => {
    return num === sortedNumbers[i + 1] && num !== sortedNumbers[i - 1];
  });

  return duplicateNumbers;
}

export { findDuplicateNumbers };
