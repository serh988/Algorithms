let people = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 20 },
    { name: "Charlie", age: 30 },
    { name: "David", age: 35 },
    { name: "Eve", age: 28 }
];

function mergeObjects(left, right) {
    let result = [];
    while (left.length && right.length) {
        if (left[0].age > right[0].age) {
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    }
    return result.concat(left).concat(right);
}

// Функция сортировки объектов слиянием (Merge Sort)
function mergeSortObjects(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    const mid = Math.floor(arr.length / 2);
    const left = mergeSortObjects(arr.slice(0, mid));
    const right = mergeSortObjects(arr.slice(mid));
    return mergeObjects(left, right);
}

const sortedPeople = mergeSortObjects(people);
console.log(sortedPeople);



// Level 2: Сортировка объектов Person по возрасту
// Функция mergeSortObjects сортирует объекты по полю age в порядке убывания
// Используется Merge Sort, разделяя массив на части и объединяет их обратно
// в отсортированном виде