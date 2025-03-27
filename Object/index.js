/* function nakaUser(name, age) {
	return {
		name: name,
		age: age,
	}
}
//Это можно переписать в...
function makeUser(name, age) {
	return { name, age }
}

let obj = {
	name: 'Aleksey',
	age: 20,
}

//проверка существования ключа
// console.log('name' in obj)

//перебор ключей объекта
for (let key in obj) {
	console.log(key)
	console.log(obj[key])
}
 */

// ! Напишите код, выполнив задание из каждого пункта отдельной строкой:

// Создайте пустой объект user.
// Добавьте свойство name со значением John.
// Добавьте свойство surname со значением Smith.
// Измените значение свойства name на Pete.
// Удалите свойство name из объекта. */

// /* let user = {}

// user.name = 'John'
// user.surname = 'Smith'
// user.name = 'Pete'
// delete user.name

// for (let key in user) {
// 	console.log(`${key}: ${user[key]}`)
// }

// !   Проверка на пустоту
// Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false.

// Должно работать так:

// let schedule = {};

// alert( isEmpty(schedule) ); // true

// schedule["8:30"] = "get up";

// alert( isEmpty(schedule) ); // false

// let isEmpty = obj => {
// 	for (let key in obj) {
// 		return false
// 	}
// 	return true
// }

// let schedule = {}

// // schedule['8:30'] = 'get up'

// console.log(isEmpty(schedule))

// ! Сумма свойств объекта
// У нас есть объект, в котором хранятся зарплаты нашей команды:

// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130
// }
// Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. Должно получиться 390.

// Если объект salaries пуст, то результат должен быть 0.

// let salaries = {
// John: 100,
// Ann: 160,
// Pete: 130,
// }

// let sum = 0

// for (let key in salaries) {
// 	sum += salaries[key]
// }

// console.log(sum)

// ! Умножаем все числовые свойства на 2
// Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2.

// Например:

// // до вызова функции
// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu"
// };

// multiplyNumeric(menu);

// // после вызова функции
// menu = {
//   width: 400,
//   height: 600,
//   title: "My menu"
// };
// Обратите внимание, что multiplyNumeric не нужно ничего возвращать. Следует напрямую изменять объект.

// P.S. Используйте typeof для проверки, что значение свойства числовое.

let menu = {
	width: 200,
	height: 300,
	title: 'My menu',
}

const multiplyNumeric = obj => {
	for (let key in obj) {
		if (typeof obj[key] === 'number') {
			obj[key] *= 2
		}
	}
}

multiplyNumeric(menu)
console.log(menu)

