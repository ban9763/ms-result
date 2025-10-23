
// 输入: 
const strs = ["eat", "tea", "tan", "ate", "nat", "bat"]

// 输出: [["bat"],["nat","tan"],["ate","eat","tea"]]

const azAZ = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

var groupAnagrams = function (strs) {
    const map = new Map();

    for (let str of strs) {
        // 将字符串转换为字符数组，排序后重新组合作为key
        const sortedStr = str.split('').sort().join('');

        if (map.has(sortedStr)) {
            map.get(sortedStr).push(str);
        } else {
            map.set(sortedStr, [str]);
        }
    }

    // 返回所有分组
    return Array.from(map.values());
};

console.log(groupAnagrams(strs))

// split: 分割字符串，返回数组
// sort: 可以根据Unicode排列字母
// join：重新聚合成字符串。