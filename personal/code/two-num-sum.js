// 两数之和
nums = [2, 7, 11, 15], target = 9;

var twoSum = function (nums, target) {
    let currentIndex = 0;
    let findIndex;

    while (currentIndex < nums.length && !findIndex) {
        const distValue = target - nums[currentIndex];

        const targetIndex = nums.findIndex((value, index) => {
            if (index !== currentIndex) {
                return value === distValue
            }
            return false
        })
        if (targetIndex > 0) {
            findIndex = targetIndex;
            break;
        };
        currentIndex++;
    }
    return [currentIndex, findIndex]

};

console.log(twoSum(nums, target));

// 问题记录
// 循环条件熟悉，认真的去判定？
// while的打断，findIndex的找到的返回值，没找到的返回值，如何判断是否成功。