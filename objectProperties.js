// Object Properties

// key  - properties
// value - properties value

// const student = {
//   name: "Raju",
//   age: 23,
//   city: "Bihar",
// };

// // // student.country = "India";

// // // delete student.department;

// // student["country"] = "India";
// // console.log("department" in student);

// for (let key in student) {
//   console.log(key + ":" + student[key]);
// }

// Object Method

// const student = {
//   name: "Raju",
//   age: 23,
//   city: "Bihar",
//   department: "CSE",

//   //   greet: function () {
//   //     return `Hello , my name is ${this.name} and i study in ${this.department}`;
//   //   },

//   //   greet() {
//   //     return `Hello , my name is ${this.name} and i study in ${this.department}`;
//   //   },

//   //   getDetails() {
//   //     return `${this.name} ${this.age}`;
//   //   },
// };

// console.log(student.getDetails());

// const counter = {
//   count: 0,

//   increment() {
//     this.count++;

//     return this.count;
//   },

//   decrement() {
//     this.count--;

//     return this.count;
//   },
// };

// console.log(counter.increment());
// console.log(counter.increment());
// console.log(counter.decrement());

// const user = {
//   name: "Raju",
//   ag: 23,
//   email: "amirfaysal0471@gmail.com",

//   details() {
//     for (let key in this) {
//       if (typeof this[key] !== "function") {
//         console.log(key + ":" + this[key]);
//       }
//     }
//   },
// };

// user.details();
