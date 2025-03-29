// function User(name) {
// 	this.name = name
// 	this.isAdmin = false
// }

// let user = new User('Alex')
// let user1 = new User('Dima')

// console.log(user)
// console.log(user1)

// * Возможно ли создать функции A и B, чтобы new A() == new B()?

// let obj = {}

// function A() {
// 	return obj
// }
// function B() {
// 	return obj
// }

// console.log(new A() == new B()) // true

// * Создайте калькулятор при помощи конструктора, new Calculator
// Создайте функцию-конструктор Calculator, которая создаёт объекты с тремя методами:

// read() запрашивает два значения при помощи prompt и сохраняет их значение в свойствах объекта.
// sum() возвращает сумму этих свойств.
// mul() возвращает произведение этих свойств.
// Например:

// function Calculator() {
// 	this.read = function () {
// 		this.a = +prompt('Введите первое значение', 4)
// 		this.b = +prompt('Введите второе значение', 5)
// 	}
// 	this.sum = function () {
// 		return this.a + this.b
// 	}
// 	this.mul = function () {
// 		return this.a * this.b
// 	}
// }

// let calculator = new Calculator()
// calculator.read()

// console.log('Sum=' + calculator.sum())
// console.log('Mul=' + calculator.mul())

// * Создайте new Accumulator
// Создайте функцию-конструктор Accumulator(startingValue).

// Объект, который она создаёт, должен уметь следующее:

// Хранить «текущее значение» в свойстве value. Начальное значение устанавливается в аргументе конструктора startingValue.
// Метод read() должен использовать prompt для считывания нового числа и прибавления его к value.
// Другими словами, свойство value представляет собой сумму всех введённых пользователем значений, с учётом начального значения startingValue.

// Ниже вы можете посмотреть работу кода:

function Accumulator(startingValue) {
	this.value = startingValue
	this.read = function () {
		this.printNumber = +prompt('Введите число', '2')
		this.value += this.printNumber
	}
}

let accumulator = new Accumulator(1) // начальное значение 1

accumulator.read() // прибавляет введённое пользователем значение к текущему значению
accumulator.read() // прибавляет введённое пользователем значение к текущему значению

alert(accumulator.value) // выведет сумму этих значений

