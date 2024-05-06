var subsetsWithDup = function(nums) {
    const res = []
 
    const backTrack = (i, nums, slate) => {
     if(i === nums.length){
         res.push(slate.slice())
         return
     }
 
     //include
     slate.push(nums[i])
     backTrack(i+1, nums, slate)
     slate.pop()
 
     //exclude
     backTrack(i+1, nums, slate)
    }
 
 backTrack(0, nums, [])
     console.log(res)
 
     const map = {}
 
     for(let i=0; i<res.length; i++){
         if(!map[res[i]]){
             map[res[i]] = res[i]
         }
     }
     return Object.values(map)
    
 };