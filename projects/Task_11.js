function convertObjectToArray(obj) {
    return Object.entries(obj);
}

//Функция Object.entries принимает объект в качестве аргумента и
// возвращает массив с его ключами и значениями в виде вложенных массивов.

console.log(convertObjectToArray({ a: 1, b: 2 }));
