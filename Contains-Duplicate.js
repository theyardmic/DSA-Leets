//Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

let containsDuplicate = function(nums) {
    let uniqueArray = new Set(nums);
    return uniqueArray.size !== nums.length;
};

