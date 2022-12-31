const slidingWindow = (nums: number[]): number => {
	
	// how many changes available?
	// digits flipped/removed etc
	int k = 0;

	// slow pointer
	int i = 0

	for(let j = 0; j < nums.length; j++) {
		
		if(nums[j] == 0) {
			k--;
		}
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
