// link : https://leetcode.com/problems/contains-duplicate/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
    const resultSet = new Set();
    for (let i = 0; i < nums.length; i++) {
        if(resultSet.has(nums[i])){
            return true
        }
        resultSet.add(nums[i]);
    }
    return false;
};
