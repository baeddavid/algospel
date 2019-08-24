// Given two strings s and t , write a function to determine if t is an anagram of s.
// Example Output: Input: s = "anagram", t = "nagaram"
// Output: true

// Map solution
// Time: O(n)
// Space: O(n)
function isAnagram(s, t) {
    // If the lengths are different they are not anagrams
    if(s.length != t.length) return false;
    // Initialize a new Map
    let map = new Map();
    
    // Begin adding key value pairs to our map using our first string.
    // Use character codes as keys and count the instances
    for(let i = 0; i < s.length; i++) {
        if(map.has(s.charCodeAt(i)))
            map.set(s.charCodeAt(i), map.get(s.charCodeAt(i)) + 1);
        else
            map.set(s.charCodeAt(i), 1);
    }
    
    // Iterate through the second string
    for(let i = 0; i < t.length; i++) {
        // If the map has the character code, subtract it by 1
        if(map.has(t.charCodeAt(i)))
            map.set(t.charCodeAt(i), map.get(t.charCodeAt(i)) - 1);
        // If the map doesn't have the character code they are not anagrams
        else
            return false;
    }
    
    // Iterate through the map
    for(let key of map)
        // If the value for any key-value pair is not 0 return false
        if(key[1] != 0)
            return false;

    // It is an anagram
    return true;
}
// Sort solution
// Time: O(n log n)
// Space: O(1)
function isAnagram(s, t) {
    // Convert our strings to character arrays, reverse them, and then join them.
    s = s.split('').sort().join('');
    t = t.split('').sort().join('');
    // If they are not equal return false, else return true
    return s == t
}