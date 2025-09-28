
const treeList = [
    { id: 1, value: '111', parentId: null },
    { id: 2, value: '222', parentId: null },

    { id: 3, value: '333', parentId: 1 },
    { id: 5, value: '555', parentId: 1 },

    { id: 4, value: '444', parentId: 2 },
    { id: 6, value: '666', parentId: 2 },

    { id: 7, value: '777', parentId: 4 },
]

// map 推荐解法
function createTree(data) {
    const resData = [];
    const map = {};

    for (let item of data) {
        map[item.id] = { ...item, children: [] };
    }

    for (let item of data) {
        if (item.parentId && map[item.parentId]) {
            const parentItem = map[item.parentId];
            //建立map中父子集关系
            parentItem.children.push(map[item.id]);
        } else {
            resData.push(map[item.id]);
        }
    }
    return resData
}
// 创建一个map与data相互对照，遍历data, 建立map中的父子集关系，最后再把map中的顶级节点放到resData中，就是完成了tree.

console.log(JSON.stringify(createTree(treeList)));


// 递归的性能消耗高
function listToTree(list, parentId = null) {
    const tree = [];
    for (const item of list) {
        if (item.parentId === parentId) {
            const children = listToTree(list, item.id);
            if (children.length > 0) {
                item.children = children;
            }
            tree.push(item);
        }
    }
    return tree;
}