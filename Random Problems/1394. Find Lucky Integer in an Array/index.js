// link : https://leetcode.com/problems/find-lucky-integer-in-an-array/

/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function(arr) {
    let largest = {}
      for(let i = 0; i < arr.length; i ++){
          if(!largest[arr[i]]){
              largest[arr[i]] = 1;
          }else{
              largest[arr[i]] = largest[arr[i]] + 1;
          }
      }
      
      let number = -1;
      Object.keys(largest).forEach(element => {
          if(parseInt(element) > number && parseInt(element) === largest[element]){
              number = element;
          }
      });
      return number
  };