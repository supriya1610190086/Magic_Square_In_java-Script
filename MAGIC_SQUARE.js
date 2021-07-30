const list = [
    [1, 1, 1],
    [1, 1, 1],
    [1, 1, 1]
]
var i = 0
var sum1 = 0
var sum2 = 0
var sum3 = 0
var sum4 = 0
while (i < list.length) {
    var row = 0
    var sum = 0
    while (row < list.length) {
        sum += list[i][row]
        row += 1
    }
    var digonal = 0
    while (digonal < list.length) {
        if (i == digonal) {
            sum1 += list[i][digonal]
        }
        digonal += 1
    }
    var col1 = 0
    while (col1 < 1) {
        sum2 += list[i][col1]
        col1 += 1
    }
    var col2 = 1
    while (col2 < 2) {
        sum3 += list[i][col2]
        col2 += 1
    }
    var col3 = 2
    while (col3 < list.length) {
        sum4 += list[i][col3]
        col3 += 1
        i += 1
    }
}
if (sum == sum1) {
    if (sum2 == sum3) {
        if (sum3 == sum4) {
            console.log("magic square")
        }
    }
} else {
    console.log("not magic square")
}