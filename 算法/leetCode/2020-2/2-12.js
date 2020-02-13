// 这里有一幅服务器分布图，服务器的位置标识在 m * n 的整数矩阵网格 grid 中，1 表示单元格上有服务器，0 表示没有。

// 如果两台服务器位于同一行或者同一列，我们就认为它们之间可以进行通信。

// 请你统计并返回能够与至少一台其他服务器进行通信的服务器的数量
var arr = [
    [1, 0],
    [0, 1]
]



var countServer = function (grid) {
    var k = grid.length;
    var g = grid[0].length;
    var count = 0;
    for (let i = 0; i < k; i++) {
        for (let j = 0; j < g; j++) {
            var num = 0;
            if (grid[i][j] == 1) {
                for (let heng = 0; heng < g; heng++) {
                    if (grid[i][heng] == 1 && heng != j) {
                        num++;
                    }
                }
                for (let shu = 0; shu < k; shu++) {
                    if (grid[shu][j] == 1 && shu != i) {
                        num++
                    }
                }
                if (num >= 1) {
                    count++;
                }
            }
        }
    }

    return count
}
console.log(countServer(arr));