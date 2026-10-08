class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let hashmap = new Map();
        for (const num of nums) {
            if (hashmap.has(num)) {
                let currentval = hashmap.get(num);
                hashmap.set(num, (currentval = currentval + 1));
            } else {
                hashmap.set(num, 1);
            }
        }
        const result = [...hashmap]
            .sort((a, b) => b[1] - a[1])
            .slice(0, k)
            .map((x) => x[0]);

        return result;
    }
}
