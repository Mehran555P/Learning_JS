///////////////////////////////////////////////////////

// // Value(primitives) vs references types

// // primitives are copied by their value
// let x = 10;
// let y = x;
// x = 20;


// // Objects are copied by their reference
// let x = {value: 10};
// let y = x;
// x.value = 20;

let obj = {value: 10};

function increase(obj) {
    obj.value++;
}

increase(obj);
console.log(obj.value);


///////////////////////////////////////////////////////

// // Functions are Objects in JS!

// function Circle(radius) {
//     this.radius = radius;
//     this.draw = function() {
//         console.log("draw");
//     }
// }

// Circle.call({}, 1);
// Circle.apply({}, [1]);


// const another = new Circle(1);

// const circle = new Circle1(1);

// const Circle1 = new Function('radius', `
//     this.radius = radius;
//     this.draw = function() {
//         console.log("draw");
//     }
//     `);

///////////////////////////////////////////////////////

// // Factories

// // Factory Function

// function createCircle(radius) {
//     return {
//         radius,
//         draw: function() {
//             console.log("draw");
//         }
//     };
// }

// const newCircle = createCircle(1);
// newCircle.draw();

// // Constructors

// function Circle(radius) {
//     this.radius = radius;
//     this.draw = function() {
//         console.log("draw");
//     }
// }

// const anotherCircle = new Circle(1);
// anotherCircle.draw();

///////////////////////////////////////////////////////

// const circle = {
//     radios: 1,
//     location: {
//         x: 1,
//         y: 1
//     },
//     draw: function() {
//         console.log("draw")
//     }
// };

// circle.draw();

///////////////////////////////////////////////////////


// let employee = {
//         baseSalary: 30000,
//         overTime: 10,
//         rate: 20,
//         getWage: function() {
//             return this.baseSalary + (this.overTime * this.rate);
//         }

// };

// const wage = employee.getWage();
// console.log(wage);

// console.log(employee.baseSalary);
// console.log(employee.overTime);
// console.log(employee.rate);

// console.log(typeof(employee));