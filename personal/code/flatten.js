

const arr = [1, [2, 3, [4, 5], 8], 9, 10, 11, 14]


function flatten(arr, map) {
    for (let item of arr) {
        if (Array.isArray(item)) {
            flatten(item, map)
        } else {
            map.push(item)
        }
    }

    return map
}

function getFlatten(arr) {
    let map = []
    flatten(arr, map);
    return map
}



console.log(getFlatten(arr))