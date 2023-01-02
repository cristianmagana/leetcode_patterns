/**
 * You are given a 0-indexed integer array nums, where nums[i] represents the score of the ith student. 
 * You are also given an integer k.
 * Pick the scores of any k students from the array so that the difference 
 *  between the highest and the lowest of the k scores is minimized.
 * @param nums - array of unsigned ints
 * @param k - number of elements to compare for min value
 * @returns 
 */
function minimumDifference(nums: number[], k: number): number {

    // base case
    if(nums.length === 1) return 0;

    //sort the array to make it easy O(logn) using merge
    nums.sort((a,b)=>a-b)

    // set the min and max on a sorted array
    // checks the min value for 0 - k elements.
    let min=nums[0], max=nums[k-1], minValue=max-min

    // uses lsiding window for the remaining array to find minValue of k students
    for(let i=k; i<nums.length; i++){
                                    
        // minValue of head (i) and previous k elements. 
        minValue=Math.min(minValue, nums[i]-nums[i-k+1])
    }

    return minValue;
};