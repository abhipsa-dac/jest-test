import { findDuplicateNumbers } from './array-duplicate';

describe('findDuplicateNumbers', () => {
  it('should return an array of duplicate numbers if array have multiple duplicate numbers', () => {
    const arr = [12, 21, 31, 41, 51, 21, 71, 81, 81, 10];
    const duplicateNumbers = findDuplicateNumbers(arr);
    expect(duplicateNumbers).toEqual([21, 81]);
  });

  it('should return an empty array when there are no duplicate numbers in the array', () => {
    const arr = [0, 6, 7, 8, 90];
    const duplicateNumbers = findDuplicateNumbers(arr);
    expect(duplicateNumbers).toEqual([]);
  });

  it('should return an empty array for an empty array is passed as input', () => {
    const arr: number[] = [];
    const duplicateNumbers = findDuplicateNumbers(arr);
    expect(duplicateNumbers).toEqual([]);
  });

  it('should return an empty array for an array with 1 element', () => {
    const arr = [50];
    const duplicateNumbers = findDuplicateNumbers(arr);
    expect(duplicateNumbers).toEqual([]);
  });

  it('should handle array with all duplicates', () => {
    const arr = [9, 9, 9, 9, 9];
    const duplicateNumbers = findDuplicateNumbers(arr);
    expect(duplicateNumbers).toEqual([9]);
  });
});
