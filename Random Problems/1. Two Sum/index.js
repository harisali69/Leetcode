// link : https://leetcode.com/problems/two-sum/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// Solved using object/dictionary

var twoSum = function (nums, target) {
  const map = {};

  for (let i = 0; i < nums.length; i++) {
    const remaining = target - nums[i];

    if (remaining in map) {
      return [map[remaining], i];
    }

    map[nums[i]] = i;
  }
};