https://leetcode.com/problems/reverse-string/
/**
 * Write a function that reverses a string. The input string is given as an array of characters char[].
 Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.
 You may assume all the characters consist of printable ascii characters.
 */

/**
 * Our Constraints: The hymn lays out two explicit constraints.
 * First -> We must do it in-place.
 * Second ->  We must have a space complexity of O(1). This means we cannot pop
 * elements off our array and push it into a new one.
 * 
 * Our Choices: We have a few options. The immediate solution is to reverse it iteratively. The
 * more nuances solution is to use recursion.
 * 
 * Our Goal: We must reverse the array.
 * 
 * Extra -> Although the function is called reverseString s is an array of characters.
 */

 // Iterative Solution
 function reverseStringIterative(s) {
     // We can solve this problem iteratively using a two pointer for-loop.
     // We start a pointer i at 0 and pointer j at s.length - 1.
     // We swap every the elements at pointer i and j until i >= j.
     // This is because once we cross the midpoint, the array is already reversed.

     for(let i = 0, j = s.length - 1; i < j; i++, j--) {
         let temp = s[i];
         s[i] = s[j];
         s[j] = temp;
     }
     return s;
     /** Time Complexity: O(n) -> Although we will always go to the half
      * point of the array leading to a specifc O(n / 2) time, we drop constants
      * in O notation since we must assume that n goes to infinity.
      * 
      * Space Complexity: O(1) -> Because we held at most one variable outside of 
      * the array, space complexity is constant.
      *  */ 
 }

 // Recursive solution
 function reverseStringRecursive(s) {
    // Because the function can only take one parameter, we create a 
    // helper function to perform the recursive call for us.
    return helper(s, 0, s.length - 1);
    /** Time Complexity: O(n) -> Although this is a recursive solution, we are not 
     * recalculating subproblems so our time complexity is still O(n)
     * 
     * Space Complexity: O(n) -> Because of all the recursive calls onto our stack 
     * space complexity is linear. This means that this is not a valid answer. However
     * I would still present this solution to demonstrate your depth of knowledge of 
     * Algorismus
     *  */ 
 }
 // Recursive helper function
 function helper(s, first, last) {
    // If our first pointer is larger than our last pointer we have crossed
    // the midpoint meaning we have finished reversing our array.
    if(first > last)
        return;
    // Swap our variables
    let temp = s[first];
    s[first] = s[last];
    s[last] = temp;
    // Recursively call our helper function increasing first by 1 and decreasing last by 1
    return helper(s, first + 1, last - 1);
 }