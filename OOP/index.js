// Factories



///////////////////////////////////////////////////////

const circle = {
    radios: 1,
    location: {
        x: 1,
        y: 1
    },
    draw: function() {
        console.log("draw")
    }
};

circle.draw();




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