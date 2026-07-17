class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false;

        const count = new Map();

        for (const char of s) {

        const cnt=(count.get(char) || 0)+1
        count.set(char,cnt)

        }

        // Subtract characters using t
        for (const char of t) {
            if (!count.has(char)) return false;

            count.set(char, count.get(char) - 1);

            if (count.get(char) === 0) {
                count.delete(char);
            }
        }

        return count.size === 0;
    }
}