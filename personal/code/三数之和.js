

const nums = [-1, 0, 1, 2, -1, -4];

var threeSum = function (nums) {
    const result = [];
    const n = nums.length;

    // 先对数组排序
    nums.sort((a, b) => a - b);

    for (let i = 0; i < n - 2; i++) {
        // 早期终止优化：如果最小的三个数都大于0，不可能有解
        if (nums[i] > 0) break;

        // 跳过重复的元素
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }

        // 早期终止优化：如果当前数加上最大的两个数都小于0，跳过
        if (nums[i] + nums[n - 1] + nums[n - 2] < 0) {
            continue;
        }

        let left = i + 1;
        let right = n - 1;

        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];

            if (sum === 0) {
                result.push([nums[i], nums[left], nums[right]]);

                // 跳过重复的元素
                while (left < right && nums[left] === nums[left + 1]) {
                    left++;
                }
                while (left < right && nums[right] === nums[right - 1]) {
                    right--;
                }

                left++;
                right--;
            } else if (sum < 0) {
                left++;
            } else {
                right--;
            }
        }
    }

    return result;
};

console.log(threeSum(nums));