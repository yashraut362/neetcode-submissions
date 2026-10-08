class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let arraytoset = new Set(nums)
        if(arraytoset.size === nums.length){
            return false
        }else{
            return true
        }
    }
}
