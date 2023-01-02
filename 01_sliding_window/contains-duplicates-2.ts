/**
 * 
 * Given an integer array nums and an integer k, 
 *  return true if there are two distinct indices i and j in the array 
 *  such that nums[i] == nums[j] and abs(i - j) <= k.
 * 
 * @param nums - array of unsigned digits
 * @param k - number of spaces distinct digits can be apart
 * @returns 
 */
function containsNearbyDuplicate(nums: number[], k: number): boolean {

    let set = new Set();

    for(let j = 0; j < nums.length; j++) {
        if(set.has(nums[j])) return true
        set.add(nums[j]);
        if(j>=k) set.delete(nums[j-k]);
    }
    return false;
};