/* let name = 'Aleksei'
let secondName = 'Alekseev'
let thirdName = 'Borisovich'

console.log(name ?? secondName ?? thirdName);
 */

/* перепешите код использую оператор нулевого слияния и присваивания 

let num1 = 10,
	num2 = 20,
	result

if (result === null || result === undefined) {
	if (num1 !== null && num1 !== undefined) {
		result = num1
	} else {
		result = num2
	}
}
*/

// let num1 = 10
// let num2 = 20
// let result

// result ??= num1 ?? num2

/* // При помощи цикла for выведете четные числа

for (let i = 2; i <= 10; i++) {
	if(i % 2 === 0){
		console.log(i);
	}
} */

/* Перепишите код, заменив цикл for на while, без изменения поведения цикла.

for (let i = 0; i < 3; i++) {
  alert( `number ${i}!` );
} */

let i = 0

while (i < 3) {
	console.log(`number ${i}!`)
	i++
}

/* 
Напишите цикл, который предлагает prompt ввести число, большее 100. Если посетитель ввёл другое число – попросить ввести ещё раз, и так далее.
Цикл должен спрашивать число пока либо посетитель не введёт число, большее 100, либо не нажмёт кнопку Отмена (ESC).
Предполагается, что посетитель вводит только числа. Предусматривать обработку нечисловых строк в этой задаче необязательно. 

let printUserNumber = +prompt('Введите число больше 100', '')

while (printUserNumber <= 100) {
	if (!printUserNumber) {
		break
	}
	printUserNumber = +prompt('Введите число еще раз', '')
}
*/

/*
Натуральное число, большее 1, называется простым, если оно ни на что не делится, кроме себя и 1.
Другими словами, n > 1 – простое, если при его делении на любое число кроме 1 и n есть остаток.
Например, 5 это простое число, оно не может быть разделено без остатка на 2, 3 и 4.
Напишите код, который выводит все простые числа из интервала от 2 до n.
Для n = 10 результат должен быть 2,3,5,7.
P.S. Код также должен легко модифицироваться для любых других интервалов.
 
-------------------------------Первое решение--------------------------------
printUserNumber = 10

for (let i = 0; i <= printUserNumber; i++) {
	let sum = 0

	for (let g = 0; g <= printUserNumber; g++) {
		if (i % g === 0) {
			sum++
		}
	}

	if (sum === 2) {
		console.log(i)
	}
}
-------------------------------Второе решение--------------------------------
n = 10

divider: for (let i = 2; i <= n; i++) {
	for (let g = 2; g < i; g++) {
		if (i % g === 0) continue divider
	}

	console.log(i)
}

*/
