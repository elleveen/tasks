var arr1 = [1, 2, 3, 6, 8, 1, 6, 3, 2, 1, 0, 4];
var arr2 = ['one', 'two', 'three'];

// Сортировка массива методом пузырька
for (var i = 0; i < arr1.length-1; i++) {
    for (var j = 0; j < arr1.length-1-i; j++) {
        if (arr1[j] > arr1[j+1]) {
            var temp = arr1[j];
            arr1[j] = arr1[j+1];
            arr1[j+1] = temp;
        }
    }
}

// Склеивание массивов, сохраняя их изменённый порядок
var mergedArray = arr1.concat(arr2);
console.log(mergedArray);
