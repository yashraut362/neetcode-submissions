class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let hashmap = new Map()
        for(let i =0 ; i < s.length;i++){
            if(hashmap.has(s[i])){
               let currentcount = hashmap.get(s[i])
                hashmap.set(s[i],currentcount = currentcount + 1)
            }else{
                hashmap.set(s[i],1)
            }
        }

        for(let j=0;j<t.length;j++){
            if(hashmap.has(t[j])){
                let currentcount = hashmap.get(t[j])
                hashmap.set(t[j], currentcount = currentcount - 1)
            }else{
                return false
            }
        }
        for (const value of hashmap.values()) {
            if(value !== 0){
                return false
            }
        }
        return true
    }
}
