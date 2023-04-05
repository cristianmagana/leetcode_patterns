function twoSumOptimal(nums: number[], target: number): number[] {
    
    const map = new Map();
    
    for(let i = 0; i < nums.length; i++){
        let num = nums[i];
        
        if(map.get(num) === undefined) map.set(target-num, i);
        else return [map.get(num),i];
    }
    return []
};

function twoSumBrute(nums: number[], target: number): number[] {
    
    const result: number[] = [];
    for(let i = 0; i < nums.length; i++){
        for(let j = i+1; j < nums.length; j++){
            if(nums[i] + nums[j] === target){
                result.push(i, j);
                return result;
            }
        }
    } 
};