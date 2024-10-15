// Определение узла односвязного списка
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

// Функция для проверки симметричности списка
function isSymmetric(head) {
    if (!head) return true; // Пустой список является симметричным

    const stack = [];
    const queue = [];

    // Подсчет длины списка
    let length = 0;
    let current = head;
    while (current) {
        length++;
        current = current.next;
    }

    current = head;
    // Заносим элементы первой половины в стек и второй половины в очередь
    for (let i = 0; i < length; i++) {
        if (i < Math.floor(length / 2)) {
            stack.push(current.value);
        } else if (i >= Math.ceil(length / 2)) {
            queue.push(current.value);
        }
        current = current.next;
    }

    // Сравниваем элементы стека и очереди
    while (stack.length > 0) {
        if (stack.pop() !== queue.shift()) {
            return false; // Если элементы не совпадают, список не симметричный
        }
    }

    return true; // Если все элементы совпали, список симметричный
}

// Пример создания односвязного списка
let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(2);
head.next.next.next.next = new Node(1);

console.log(isSymmetric(head)); // Вывод: true

// Пример с несимметричным списком
let head2 = new Node(1);
head2.next = new Node(2);
head2.next.next = new Node(3);
head2.next.next.next = new Node(4);

console.log(isSymmetric(head2)); // Вывод: false


// Level 2: Проверка симметричности односвязного списка с использованием стека и очереди
// Элементы первой половины списка помещаются в стек, второй половины - в очередь
// Если все пары элементов равны, список симметричен (возвращает true); иначе - false