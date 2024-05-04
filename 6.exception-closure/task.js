function parseCount(v) {
	if (isNaN(v)) {
		throw new Error('Невалидное значение');
	} else {
		return Number.parseFloat(v);
	}
}

function validateCount(v) {
	try {
		return parseCount(v);
	} catch (Error) {
		return Error;
	}
}

class Triangle {
	constructor(a, b, c) {
		this.a = a;
		this.b = b;
		this.c = c;
		if ((this.a + this.b) < this.c || (this.c + this.b) < this.a || (this.a + this.c) < this.b) {
			throw new Error('Треугольник с такими сторонами не существует');
		}
	}
	getPerimeter() {
		return (this.a + this.b + this.c);
	}
	getArea() {
		const p = getPerimeter() / 2;
		const s = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
		return s.toFixed(3);
	}

}

function getTriangle(a, b, c) {
	try {
		return new Triangle(a, b, c);
	} catch (e) {
		return {
			getArea: function() {
				return "Ошибка! Треугольник не существует"
			},
			getPerimeter: function() {
				return "Ошибка! Треугольник не существует"
			}
		}
	}
}﻿
