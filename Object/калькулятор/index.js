// ! Создайте калькулятор
// важность: 5
// Создайте объект calculator (калькулятор) с тремя методами:

// read() (читать) запрашивает два значения и сохраняет их как свойства объекта с именами a и b.
// sum() (суммировать) возвращает сумму сохранённых значений.
// mul() (умножить) перемножает сохранённые значения и возвращает результат.

let calculator = {
	read(a, b) {
		this.a = a
		this.b = b
	},
	sum() {
		return this.a + this.b
	},
	mul() {
		return this.a * this.b
	},
}

calculator.read(2, 4)
console.log(calculator)
console.log(calculator.sum())
console.log(calculator.mul())
