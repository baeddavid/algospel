// Given a non-empty array of integers, every element appears twice except for one. Find that single one.
// Example Output: 
// Input: [2,2,1]
// Output: 1

// For-loop solution
// Time: O(n log n)
// Space: O(1)
function singleNumber(arr) {
    // Sort the array first so that we can check for pairs
    arr = arr.sort((a,b) => a - b);
    // Begin checking our array incrementing our index by 2 since we check for pairs
    for(let i = 0; i < arr.length - 2; i += 2)
        // If at any point the value at i is not equal to i + 1 we have found the single number
        if(arr[i] != arr[i + 1])
            return arr[i];
}

// Map solution
// Time: O(n)
// Space: O(n)
function singleNumber(arr) {    
    // Initalize a new Map
    let map = new Map();
    // Begin adding elements to our map using the element as a key and the value as the count
    for(let number of arr) {
        if(map.has(number))
            map.put(number, map.get(number) + 1);
        else
            map.put(number, 1);
    }
    // Iterate through our array again, this time checking the values of our map
    for(let number of arr)
        // If at any point our map key has a value of 1 return that key.
        if(map.get(number) == 1)
            return number;
}

// XOR Solution
// Time: O(n)
// Space: O(1)
function singleNumber(arr) {
    // Initalize our answer to the first element
    let answer = arr[0];
    // Being comparing bits using the XOR operator. If the bits don't line up, those bits wil be set.
    for(let i = 1; i < arr.length; i++)
        answer ^= arr[i];
    // Return our answer
    return answer;
}