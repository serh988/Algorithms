function quickSort(str) {
    if (str.length <= 1) {
        return str;
    }

    let pivot = str[Math.floor(str.length / 2)];
    let left = [];
    let right = [];

    for (let i = 0; i < str.length; i++) {
        if (i === Math.floor(str.length / 2)) continue; // Пропустить опорный элемент
        if (str[i].toUpperCase() < pivot.toUpperCase()) {
            left.push(str[i]);
        } else {
            right.push(str[i]);
        }
    }

    return quickSort(left.join('')) + pivot + quickSort(right.join(''));
}

let inputStr = "poiuytrewqlkjhgfdsamnbvcxz";
let sortedStr = quickSort(inputStr);
console.log(sortedStr.toUpperCase()); // Вывод: ABCDEFGHIJKLMNOPQRSTUVWXYZ
