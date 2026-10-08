class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let hashmap = new Map();
       for(let i=0;i<nums.length;i++){
        let required = target - nums[i]
        
        if(hashmap.has(required)){
            return [hashmap.get(required),i]
        }else{
hashmap.set(nums[i],i)
        }
       } 
    }
}
