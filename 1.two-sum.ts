/*
 * @lc app=leetcode id=1 lang=typescript
 *
 * [1] Two Sum
 */

// @lc code=start
function twoSum(nums: number[], target: number): number[] {
  const map: Map<number, number> = new Map;

  for(let i = 0; i < nums.length; i++){
    if(map.has(nums[i])){
      return [map.get(nums[i]), i];
    }
    map.set(target - nums[i], i);
  }
  return []
};
// @lc code=end

