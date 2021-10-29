"use strict"

class Rectangle {
    constructor(height, width){
        this.height = height;
        this.width = width;
    }

    calcAria() { 
        return this.height *this.width;
    }
}

class ColoredRectangeWithText extends Rectangle {
    constructor(height, width, text, bgColor){
        super(height, width);
        this.text = text;
        this.bgColor = bgColor;
    }

    showMyProps() {
        console.log(`Text ${this.text}, bgColor: ${this.bgColor}`);
    }
}
const square = new Rectangle(10, 10);
console.log(square.calcAria());
const redSquere = new ColoredRectangeWithText(10, 10, "Hello World", "yellow");
redSquere.showMyProps();