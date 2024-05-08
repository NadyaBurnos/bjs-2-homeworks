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
	} catch (error) {
		return error;
	}
}
class Triangle {
	constructor(a, b, c) {
		this.a = a;
		this.b = b;
		this.c = c;
		if ((a + b) < c || (c + b) < a || (a + c) < b) {
			throw new Error('Треугольник с такими сторонами не существует');
		}
	}
	get perimeter() {
		return (this.a + this.b + this.c);
	}
	get area() {
		let p = this.perimeter / 2;
		let s = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
        return parseFloat(s.toFixed(3));
	}

}

function getTriangle(a, b, c) {
	try {
		return new Triangle(a, b, c);
	} catch (error) {
		return {
           get area() { 
                return "Ошибка! Треугольник не существует";
            } , 
           get perimeter() { 
                return "Ошибка! Треугольник не существует"; 
            } 
        }
	}
}
