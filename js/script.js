'use strict';


class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    calArea() {
        return this.height * this.width;
    }
}

class ColoredRectangleWithText extends Rectangle {
    constructor(height, width, text, bgColor) {
        super(height, width);
        this.text = text;
        this.bgColor = bgColor;
    }

    showMyProps() {
        console.log(`Текст: ${this.text}, Цвет: ${this.bgColor}`)
    }
}

const div = new ColoredRectangleWithText(25, 10, "Hello World", 'red');

div.showMyProps();
console.log(div.calArea())

// const square = new Rectangle(10, 10);
// const long = new Rectangle(20, 100);
//
// console.log(long.calArea());
// console.log(square.calArea());