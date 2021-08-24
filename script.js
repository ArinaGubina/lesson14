'use strict';

let square = {
    selector: '.red_square',
    height: '140px',
    width: '140px',
    bg: 'red',
    fontSize: '16px'
};

let rectangle = {
    selector: '#rectangle',
    height: '30px',
    width: '240px',
    bg: 'orange',
    fontSize: '16px'
};

class DomElement {
    constructor(options) {
        this.selector = options.selector;
        this.height = options.height;
        this.width = options.width;
        this.bg = options.bg;
        this.fontSize = options.fontSize;
    }
    
    create(text) {
        let element;
        if (this.selector[0] === '.') {
            element = document.createElement('div');
            element.className = this.selector.slice(1);
        }
        if (this.selector[0] === '#') {
            element = document.createElement('p');
            element.id = this.selector.slice(1);
        }
        element.innerHTML = text;
        document.body.append(element);
        element.style.cssText = 'background-color:' + this.bg + ';width:' + this.width +
            ';height: ' + this.height + ';font-size:' + this.fontSize +
            ';display:flex;justify-content:center;align-items:center;';
    }
}


let dom = new DomElement(square);
dom.create('Это квадрат');

let dom2 = new DomElement(rectangle);
dom2.create('Это прямоугольник');