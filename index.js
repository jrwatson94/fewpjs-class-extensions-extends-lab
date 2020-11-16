// Your code here
class Polygon {
    constructor(integers){
        this.sides = integers
    }

    get countSides() {
        return this.sides.length;
    }

    get perimeter() {
        return this.sides.reduce(function(a,b){
            return a + b;
        },0);
    }
}

class Triangle extends Polygon {
    get isValid(){
        for (let i = 0; i < this.sides.length; i++) {
            if (this.sides[i] > (this.perimeter - this.sides[i])){
                return false
            }else{
                return true
            }
        }
    }
}

class Square extends Polygon {
    get checkSides(){
        let flag = true
        for (let i = 0; i < this.sides.length; i++) {
            if (this.sides[i]!=this.sides[0]){
                flag = false
            }
        }
        return flag
    }

    get isValid(){
        if (this.sides.length == 4 && this.checkSides){
            return true
        }else{
            return false
        }
    }

    get area(){
        return this.sides[0]*this.sides[0]
    }
}