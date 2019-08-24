/*
Given an array of integers, return indices of the two numbers such that they add up to a specific target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.

Given nums = [2, 7, 11, 15], target = 9,
Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
*/

// Brute Force Solution
// Time: O(n ^ 2)
// Space: O(1)
function twoSumBruteForce(arr, target) {
    // Begin iterating through array
    for(let i = 0; i < arr.length; i++) {
        // Start j at i + 1, because we have already checked previous combinations
        for(let j = i + 1; j < arr.length; j++) {
            // If values at i + j is equal to target return the indices
            if(arr[i] + arr[j] == target)
                return [i, j];
        }
    }
    // If there are no combinations return pair of -1s.
    return [-1, -1];
}

// Sort Solution
// Time: O(n log n)
// Space: O(1)
function twoSumSort(arr, target) {
    // This solution is more like a modified sliding window solution
    // Sort the array
    arr = arr.sort((a, b) => a - b);
    // Initialize two pointers
    let i = 0, j = arr.length - 1;
    // As long as i is less than j
    while(i < j) {
        // Get the sum of the values of i and j
        let sum = arr[i] + arr[j];
        // If the sum is equal to the target return i and j
        if(sum == target)
            return [i, j];
        // If the sum is larger than the target, decrease j by 1
        else if(sum > target)
            j--;
        // If the sum is larger than the target, increase i by 1
        else
            i++;
    }
    // No pair exists so return a pair of -1s
    return [-1, - 1];
}

// Map Solution
// Time: O(n)
// Space: O(1)
function twoSumFast(arr, target) {
    // Initialize our map
    let map = new Map();
    // Iterate through our map
    for(let i = 0; i < arr.length; i++) {
        // Find the complement for the target and value at index i
        let complement = target - arr[i];
        // If our map has the complement we have found the pair
        if(map.has(complement))
            // Return i and the value for key complement
            return [i, map.get(complement)];
        // If our map doesn't have the complement, add it to the map as a key with the index as the value
        else
            map.set(arr[i], i);
    }
    // No pair exists so return pair of -1s
    return [-1, -1];
}