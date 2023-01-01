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
function lengthOfLongestSubstring(s) {
    var result = 0;
    var i = 0;
    var set = new Set();
    for (var j = 0; j < s.length; j++) {
        if (!set.has(s[j])) {
            set.add(s[j]);
            result = Math.max(result, set.size);
        }
        else {
            set["delete"](s[i]);
            i++;
        }
        console.log("j: " + j);
        console.log("i: " + i);
        console.log(set.values);
        console.log("---------");
    }
    return result;
}
;
lengthOfLongestSubstring("aab");
