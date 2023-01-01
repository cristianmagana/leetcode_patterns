/**
 * 
 * Given a string s, find the length of the longest substring without repeating characters.
 * Input: s = "abcabcbbabcde"
 * Output: 3
 * Explanation: The answer is "abc", with the length of 3.
 * 
 * @param s - given string of random characters
 * @returns - longest substring without repeating characters
 */

function lengthOfLongestSubstring(s: string): number {

    let result = 0;
    let i = 0;

    let set = new Set();

    for (let j = 0; j < s.length; j++) {

        if (!set.has(s[j])) {
            set.add(s[j])
            result = Math.max(result, set.size);
        }
        else {
            set.delete(s[i]);
            i++;
        }
    }
    
    return result;

};