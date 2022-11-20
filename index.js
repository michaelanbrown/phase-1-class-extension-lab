class Polygon {
    constructor(integers) {
        this.sides = integers;
    }
    get countSides() {
        return this.sides.length;
    }
    get perimeter() {
        let count = 0;
        for (let side in this.sides) {
            count += this.sides[side];
        }
        return count
    }
}

class Triangle extends Polygon {
    get isValid() {
        if (this.sides[0] + this.sides[1] <= this.sides[2]) {
            return false
        } else if (this.sides[0] + this.sides[2] <= this.sides[1]) {
            return false
        } else if (this.sides[1] + this.sides[2] <= this.sides[0]) {
            return false;
        } else {
            return true;
        }
    }
}

class Square extends Polygon {
    get isValid() {
        if (this.sides[0] === this.sides[1] && this.sides[2] === this.sides[3] && this.sides[0] === this.sides[2]) {
            return true;
        } else {
            return false;
        }
    }

    get area() {
        return this.sides[0] ** 2
    }
}