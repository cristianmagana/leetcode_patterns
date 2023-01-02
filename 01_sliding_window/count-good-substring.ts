/**
 * 
 * Input: s = "aababcabc"
 * Output: 4
 * Explanation: There are 7 substrings of size 3: "aab", "aba", "bab", "abc", "bca", "cab", and "abc".
 * The good substrings are "abc", "bca", "cab", and "abc".
 * 
 * @param s 
 * @returns 
 */
function countGoodSubstrings(s: string): number {

    let count = 0;
    let i = 0;

    let set = new Set();

    for (let j = 0; j < s.length; j++) {
        while (set.has(s[j])) {
            set.delete(s[i]);
            i++;
        }

        set.add(s[j]);

        if (set.size === 3) {
            set.delete(s[i]);
            i++;
            count++;
        }
    }

    return count;

};