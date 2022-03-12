
class Vector {
    constructor (x, y) {
        this.x = x;
        this.y = y;
    }

    plus (otherVector) {
        let plusX = this.x + otherVector.x;
        let plusY = this.y + otherVector.y;
        return new Vector(plusX, plusY);
    };
    minus (otherVector){
        let minusX = this.x - otherVector.x;
        let minusY = this.y - otherVector.y;
        return new Vector(minusX, minusY);       
    }

    length () {
        let distance = (((0 - this.x ) ** 2) + 
                ((0 - this.y) ** 2)) ** 0.5;
        return distance;
    }
};

console.log(new Vector(1, 2).plus(new Vector(2, 3)));
console.log(new Vector(1, 2).minus(new Vector(2, 3)));
console.log(new Vector(3, 4).length());