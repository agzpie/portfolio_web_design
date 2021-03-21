// first code
console.log('world');

let name = 'aga';
console.log(name);

const interestRate = 0.3;
// interestRate = 3;
console.log(interestRate);

function greet(name) {
    console.log(`Hello again, ${name}`);
}

greet('aga');

function square(number) {
    return number * number;
}

console.log(square(5));

const circle1 = {
    radius: 1,
    location: {
        x: 1,
        y: 1,
    },

    draw: function() {
        console.log('draw');
    }
};

// cicrle.draw();


function Circle(radius) {
    this.radius = radius;   // public
    let location = { x: 0, y: 0 };    // private
    this.draw = function() {
        console.log('draw circle');
        
    };

    this.getLocation = function() {
        return location;
    };

    Object.defineProperty(this, 'location', {
        get: function() {
            return location;
        },

        set: function(value) {
            if (!value.x || !value.y)
               

            location = value;
        }
    });
}

const circle = new Circle(10);
circle.location = 1;
circle.draw();

 
// refrence types

let obj = {value: 10};
function increase(obj) {
    obj.value++;
}
increase(obj);
console.log(obj); // obj = {value: 11}


let now = new Date();
console.log(now);