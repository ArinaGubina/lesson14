'use strict';

let square = {
    selector: '.red_square',
    height: '100px',
    width: '100px',
    bg: 'red',
    fontSize: '16px',
};

let rectangle = {
    selector: '#rectangle',
    height: '30px',
    width: '240px',
    bg: 'orange',
    fontSize: '16px'
};

let squareOptions = {
    position: 'absolute',
    top: 'calc(50% - 50px)',
    left: 'calc(50% - 50px)'
};

class DomElement {
    constructor(options) {
        this.selector = options.selector;
        this.height = options.height;
        this.width = options.width;
        this.bg = options.bg;
        this.fontSize = options.fontSize;
    }
    
    create(text, addOptions) {
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

        let styles = 'background-color:' + this.bg + ';width:' + this.width +
            ';height: ' + this.height + ';font-size:' + this.fontSize +
            ';display:flex;justify-content:center;align-items:center;';
         
        if(addOptions) {              
            this.eventArrow(function(arrow) {
                if(arrow === 'ArrowUp') {
                    let top = +window.getComputedStyle(element).top.slice(0, -2);
                    element.style.top = (top - 10) + 'px';
                }
                if(arrow === 'ArrowDown') {
                    let top = +window.getComputedStyle(element).top.slice(0, -2);
                    element.style.top = (top + 10) + 'px';
                }
                if(arrow === 'ArrowLeft') {
                    let left = +window.getComputedStyle(element).left.slice(0, -2);
                    element.style.left = (left - 10) + 'px';
                }
                if(arrow === 'ArrowRight') {
                    let left = +window.getComputedStyle(element).left.slice(0, -2);
                    element.style.left = (left + 10) + 'px';
                }
            });
        }
        for (const key in addOptions) {
            styles += key + ':' + addOptions[key] + ';';
        }
        element.style.cssText = styles;
    }
    eventArrow(callback) {
        document.body.addEventListener('keydown', function (event) {
            callback(event.code);
        });
    }
}

document.addEventListener("DOMContentLoaded", function(event) {
    let dom = new DomElement(square);
    dom.create('Это квадрат', squareOptions);

    let dom2 = new DomElement(rectangle);
    dom2.create('Это прямоугольник');
});

