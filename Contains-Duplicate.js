
/**
 * @param {number[]} nums
 * @return {boolean}
 */
let containsDuplicate = function(nums) {
    let uniqueArray = new Set(nums);
    return uniqueArray.size !== nums.length;
};
