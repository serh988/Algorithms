// Данные предметов
const items = [
    { id: 1, weight: 2, value: 10 },
    { id: 2, weight: 3, value: 15 },
    { id: 3, weight: 5, value: 25 },
    { id: 4, weight: 7, value: 35 }
];

// Функция для вычисления максимальной стоимости с использованием жадного алгоритма
function greedyKnapsack(capacity, items) {
    // Вычисляем ценность предметов и сортируем по убыванию ценности
    items.sort((a, b) => (b.value / b.weight) - (a.value / a.weight));

    let totalWeight = 0;
    let totalValue = 0;
    let selectedItems = [];

    // Проходим по отсортированным предметам и добавляем их в рюкзак
    for (let item of items) {
        if (totalWeight + item.weight <= capacity) {
            totalWeight += item.weight;
            totalValue += item.value;
            selectedItems.push(item);
        }
    }

    console.log("Выбранные предметы:", selectedItems);
    console.log("Суммарный вес:", totalWeight);
    console.log("Суммарная стоимость:", totalValue);
}

// Пример использования
greedyKnapsack(10, items);


// Выбранные предметы: [ { id: 1, weight: 2, value: 10 }, { id: 2, weight: 3, value: 15 }, { id: 3, weight: 5, value: 25 } ]
// Суммарный вес: 10
// Суммарная стоимость: 50
