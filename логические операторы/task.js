/* Используя конструкцию if..else, напишите код, который будет спрашивать: „Какое «официальное» название JavaScript?“
Если пользователь вводит «ECMAScript», то показать: «Верно!», в противном случае – отобразить: «Не знаете? ECMAScript!» 

let officialNameCompany = prompt('Какое официальное название JavaScript ?', '')

if (officialNameCompany === 'ECMAScript') {
	alert('Верно')
} else {
	alert('Не знаете? ECMAScript!')
}

*/

/* Используя конструкцию if..else, напишите код, который получает число через prompt, а затем выводит в alert:

    1, если значение больше нуля,
    -1, если значение меньше нуля,
    0, если значение равно нулю.

Предполагается, что пользователь вводит только числа. 

let number = +prompt('Введите число', '')

if (number > 0) {
	alert('1')
} else if (number < 0) {
	alert('-1')
} else {
	alert('0')
}

*/

/* Перепишите конструкцию if с использованием условного оператора '?': 

----------------------задача 1-------------------------
let result;

if (a + b < 4) {
  result = 'Мало';
} else {
  result = 'Много';
}

-------------------------------------------------------

let a = 1
let b = 1

let result = a + b < 4 ? 'мало' : 'Много'
console.log(result)

----------------------задача 2-------------------------
let message;

if (login == 'Сотрудник') {
  message = 'Привет';
} else if (login == 'Директор') {
  message = 'Здравствуйте';
} else if (login == '') {
  message = 'Нет логина';
} else {
  message = '';
}
*/

let hasJhonCar = false

hasJhonCar ||= 'у джона нет машины'

if (hasJhonCar == false) {
	;('у джона нет машины')
}

-------------------------------------------------------
	let login = prompt('Введите логин', '')

if (!login) {
	alert('Отменено')
} else if (login === 'Админ') {
	let password = prompt('Введите пароль', '')

	if (!password) {
		alert('Отменено')
	} else if (password === 'Я главный') {
		alert('Здравствуйте')
	} else {
		alert('Неверный пароль')
	}
} else {
	alert('Я вас не знаю')
}
