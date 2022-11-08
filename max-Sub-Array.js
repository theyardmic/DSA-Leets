//Given an integer array [nums], find the subarray which has the largest sum and return its sum.

function maxSubArray(nums) {
let max = nums[0], pre = nums[0];

for(let i = 1; i < nums.length; i++){
    pre = Math.max(nums[i], pre + nums[i]);
    max = Math.max(pre, max);
} 
return max;
}
