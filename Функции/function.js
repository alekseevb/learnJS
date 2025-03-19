/* function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('Родители разрешили?');
  }
}

Перепишите функцию, чтобы она делала то же самое, но без if, в одну строку.
Сделайте два варианта функции checkAge:
    Используя оператор ?
    Используя оператор ||

function checkAge(age) {
	return age > 18 ? true : confirm('Родители решили?')
}

function checkAge(age) {
	return age > 18 || confirm('Родители решили?')
}

console.log(checkAge(18)) */

/* Напишите функцию min(a,b), которая возвращает меньшее из чисел a и b.
Пример вызовов:

min(2, 5) == 2
min(3, -1) == -1
min(1, 1) == 1

function minNumber(a, b) {
	if (a > b) {
		return b
	} else {
		return a
	}
}

function minNumber(a, b) {
	return a > b ? b : a
}

console.log(minNumber(2, -1)) */

/* Напишите функцию pow(x,n), которая возводит x в степень n и возвращает результат.

pow(3, 2) = 3 * 3 = 9
pow(3, 3) = 3 * 3 * 3 = 27
pow(1, 100) = 1 * 1 * ...* 1 = 1

Создайте страницу, которая запрашивает x и n, а затем выводит результат pow(x,n).

P.S. В этой задаче функция обязана поддерживать только натуральные значения n, 
т.е. целые от 1 и выше. */

let number = prompt('Введите число', '')
let degree = prompt('Введите степень', '')

checkNumberAndDegree(number, degree)

function checkNumberAndDegree(x, n) {
	if (x >= 1 && n >= 1) {
		pow(x, n)
	} else {
		alert(`Степень ${n} не поддерживается, используйте натуральные числа`)
	}
}

function pow(x, n) {
	let exponentiation = x ** n
	console.log(exponentiation)
	return exponentiation
}
