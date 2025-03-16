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
