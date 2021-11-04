class Polygon {
    constructor (numberOfSides){
        this.number = numberOfSides.length
        this.sides = numberOfSides
    }

    get countSides() {
        return this.number
    }
    get perimeter(){
        const reducer = (sumOfSides, side) => sumOfSides + side
        return this.sides.reduce(reducer)
    }
}

class Triangle extends Polygon {
    get isValid(){
        let sideOne = this.sides[0]
        let sideTwo = this.sides[1]
        let sideThree = this.sides[2]
        if (sideOne + sideTwo < sideThree){
        return false
        }
        if (sideOne + sideThree < sideTwo){
            return false
        }
        if (sideTwo + sideThree < sideOne){
            return false
        }
        return true
    }
}

class Square extends Polygon{
    get isValid(){
        let sideOne = this.sides[0]
        let sideTwo = this.sides[1]
        let sideThree = this.sides[2]
        if (sideOne + sideTwo < sideThree){
        return true
        }
        if (sideOne + sideThree < sideTwo){
            return true
        }
        if (sideTwo + sideThree < sideOne){
            return true
        }
        return false
    }
    get area(){
        return this.sides[0] ** 2
        }
}