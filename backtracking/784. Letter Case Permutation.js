var letterCasePermutation = function (s) {
    let res = []
    const backTrack = (i, slate, s) => {
        if (i === s.length) {
            res.push(slate.join(''))
            return
        }
        let current = s[i]
        if (!Number.isInteger(parseInt(current))) {
            slate.push(current.toLowerCase())
            backTrack(i + 1, slate, s)
            slate.pop()

            slate.push(current.toUpperCase())
            backTrack(i + 1, slate, s)
            slate.pop()
        } else {
            slate.push(current)
            backTrack(i + 1, slate, s)
            slate.pop()
        }
    }
    backTrack(0, [], s)
    return res
};



/**Question
784. Letter Case Permutation
Medium
Topics
Companies
Given a string s, you can transform every letter individually to be lowercase or uppercase to create another string.

Return a list of all possible strings we could create. Return the output in any order.

 

Example 1:

Input: s = "a1b2"
Output: ["a1b2","a1B2","A1b2","A1B2"]
Example 2:

Input: s = "3z4"
Output: ["3z4","3Z4"]
 

Constraints:

1 <= s.length <= 12
s consists of lowercase English letters, uppercase English letters, and digits.


// explanation



 */