class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const hashmap = new Map();
        for (const str of strs) {
            const key = str.split("").sort().join("");
            if (hashmap.has(key)) {
                hashmap.get(key).push(str);
            } else {
                hashmap.set(key, [str]);
            }
        }
        return [...hashmap.values()];
    }
}
