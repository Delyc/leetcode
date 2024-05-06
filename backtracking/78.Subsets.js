var subsets = function (nums) {

    const res = []

    const backTrack = (i, nums, slate) => {
        if (i === nums.length) {
            res.push(slate.slice())
            return
        }
        //including
        slate.push(nums[i])
        backTrack(i + 1, nums, slate)
        slate.pop()

        //exclude
        backTrack(i + 1, nums, slate)

    }
    backTrack(0, nums, [])

    return res

};