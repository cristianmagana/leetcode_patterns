/**
 * 
 * Given an array of zeros and ones, find the longest subarray of contiguous 
 * ones such that at most k many zeros can be "flipped" to a one.
 * 
 * @param nums - an array of ones and zeros 
 * @returns the length of the longest substring. 
 */

const slidingWindow = (nums: number[]): number => {
	
	let result = 0;

	// how many changes available?
	// digits flipped/removed etc
	let k = 0;

	// slow pointer
	let i = 0

	// fast pointer 
	for(let j = 0; j < nums.length; j++) {
		
		// checks if fast pointer encounters a 0. 
		// if so decrement threshold value.
		if(nums[j] == 0) {
			k--;
		}

		// moves window to right
		while(k < 0) {
			if(nums[i] == 0) {
				k++;
			}	
			i++;
		}
		result = Math.max(result, j - i);
	}
	return result;
}
