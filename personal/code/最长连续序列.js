

var longestConsecutive = function (nums) {
    if (nums.length === 0) return 0;

    // 使用 Set 去重并提高查找效率
    const numSet = new Set(nums);
    let maxLength = 0;

    for (let num of numSet) {
        // 只有当 num-1 不存在时，才从当前数字开始计算连续序列
        // 这样可以避免重复计算
        if (!numSet.has(num - 1)) {
            let currentNum = num;
            let currentLength = 1;

            // 向右扩展，寻找连续的数字
            while (numSet.has(currentNum + 1)) {
                currentNum++;
                currentLength++;
            }

            // 更新最大长度
            maxLength = Math.max(maxLength, currentLength);
        }
    }

    return maxLength;
};

const nums = [0, 3, 7, 2, 5, 8, 4, 6, 0, 1];

// 测试用例
console.log('输入数组:', nums);
console.log('最长连续序列长度:', longestConsecutive(nums));

// 更多测试用例
console.log('\n=== 更多测试用例 ===');
console.log('空数组:', longestConsecutive([]));
console.log('单个元素:', longestConsecutive([1]));
console.log('无连续序列:', longestConsecutive([1, 3, 5, 7]));
console.log('完全连续:', longestConsecutive([1, 2, 3, 4, 5]));
console.log('包含重复:', longestConsecutive([1, 2, 2, 3, 4]));