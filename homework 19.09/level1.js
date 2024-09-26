// слияния двух массивов в порядке убывания
function merge(left, right) {
    let result = [];
    while (left.length && right.length) {
        if (left[0] > right[0]) {
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    }
    return result.concat(left).concat(right);
}

function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));
    return merge(left, right);
}

const grades = [3, 8, 1, 9, 4, 2, 7, 6, 5];
const sortedGrades = mergeSort(grades);
console.log(sortedGrades);


// Level 1: Сортировка оценок студентов
// Функция mergeSort сортирует массив оценок в порядке убывания
// Сложность алгоритма O(n log n)