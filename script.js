function threeSum(arr, target) {
  // Sort the array in ascending order
  arr.sort((a, b) => a - b);

  let closestSum = Infinity;

  // Iterate over each element as the first number in the triplet
  for (let i = 0; i < arr.length - 2; i++) {
    let left = i + 1; // Pointer for the second number
    let right = arr.length - 1; // Pointer for the third number

    while (left < right) {
      const sum = arr[i] + arr[left] + arr[right];

      // If the current sum is equal to the target, return the sum
      if (sum === target) {
        return sum;
      }

      // Update the closestSum if the current sum is closer to the target
      if (Math.abs(sum - target) < Math.abs(closestSum - target)) {
        closestSum = sum;
      }

      // Adjust the pointers based on the current sum
      if (sum < target) {
        left++; // Increase the second number to get a larger sum
      } else {
        right--; // Decrease the third number to get a smaller sum
      }
    }
  }

  return closestSum;
}

module.exports = threeSum;