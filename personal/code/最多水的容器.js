



const data = [1, 8, 6, 2, 5, 4, 8, 3, 7];

var maxArea = function (height) {
    let currentIndex = 0;
    let aHeight = 0;
    let maxArea = 0;
    while (currentIndex < height.length) {
        aHeight = height[currentIndex];
        height.forEach((item, index) => {
            if (index !== currentIndex) {
                let h = Math.min(aHeight, item);
                let w = Math.abs(index - currentIndex);
                if (h * w > maxArea) {
                    maxArea = h * w;
                }
            }
        })
        currentIndex++;
    }
    return maxArea;
}

console.log(maxArea(data))