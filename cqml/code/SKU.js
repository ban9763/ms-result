

const attributes = [
    { name: "颜色", values: ["红", "蓝", "绿"] },
    { name: "尺寸", values: ["S", "M", "L"] }
]

// 推荐
function getAllSKU(data) {
    const resData = [];
    const getSKU = (index, path) => {
        if (index === data.length) {
            resData.push(path);
            return
        }
        for (let value of data[index].values) {
            getSKU(index + 1, [...path, value])
        }
    }
    getSKU(0, []);
    return resData
}

const skuCombinations = getAllSKU(attributes);
console.log("SKU组合总数:", skuCombinations);

// 问题记录？

// index === data.length 与 index === data.length + 1的区别？

// 需要再结束时添加到返回体中，而不是最后一次循环就结束。

// index + 1 与 ++ index的区别？

// index + 1 : 是表达式，运算返回结果，不改变原来的值
// ++index：是先运算再返回改变后的计算结果，会改变index的值
// 这里在传递过程中，横向计算不能改变index的值




