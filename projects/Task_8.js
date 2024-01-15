function selectionSort(arr) {
    const len = arr.length;

    for (let i = 0; i < len - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < len; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
        }
    }

    return arr;
}

const unsortedArray = [6, 1, 7, 3, 5, 8, 0, -1, 3, 2, 4, 5];
const sortedArray = selectionSort([...unsortedArray]);

console.log("Отсортированный массив:", sortedArray);

function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            return mid; // Найден искомый элемент
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return -1; 
}

const targetNumber = 0;
const index = binarySearch(sortedArray, targetNumber);

console.log(`Искомое число ${targetNumber} найдено по индексу ${index}.`);