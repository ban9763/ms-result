



const nums = [0, 1, 0, 3, 12];

var moveZeroes = function (nums) {
    let index = 0;
    const resData = [];
    const nullList = [];
    while (index < nums.length) {
        const num = nums[index];
        if (num) {
            resData.push(num)
        } else if (num === 0) {
            nullList.push(num)
        }
        index++;
    }

    return [...resData, ...nullList]
};

console.log(moveZeroes(nums))