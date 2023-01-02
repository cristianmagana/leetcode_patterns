/**
 * Find a contiguous subarray whose length is equal to k that has the maximum average value and return this value. 
 * Input: nums = [1,12,-5,-6,50,3], k = 4
 * Output: 12.75000
 * Explanation: Maximum average is (12 - 5 - 6 + 50) / 4 = 51 / 4 = 12.75
 * 
 * @param nums - input array of digits (signed and/or unsigned)
 * @param k - length of maximum average array
 */


function findMaxAverage(nums: number[], k: number): number {

    let sum = 0;
    let maxAvg = 0;
    let i = 0;

    // calculate max average of first 4 elements of array.
    for (i = 0; i < k; i++) {
        sum += nums[i];
    }
    maxAvg = sum / k;

    // compare against remain elements by adding element to end and removing from front. 
    for (i = k; i < nums.length; i++) {
        sum = sum + nums[i] - nums[i - k];
        maxAvg = Math.max(maxAvg, sum / k);
    }
    
    return maxAvg; 
};