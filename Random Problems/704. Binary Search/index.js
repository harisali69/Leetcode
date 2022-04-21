// link : https://leetcode.com/problems/binary-search/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

//The time complexity of the binary search algorithm is O(log n).
var search = function(nums, target) {
    var left = 0;
    var right = nums.length - 1;

    while (left <= right) {
        var mid = parseInt((left + right) / 2);
        if (nums[mid] == target) {
            return mid;
        } else if (target < nums[mid]) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return -1;
};
