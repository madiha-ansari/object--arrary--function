// Assignment 1: Building Your Friend List
// Learning Objective: Practice working with objects and arrays in TypeScript to create a data
// structure.
// Task: Create a program that manages a simple friend list.
// 1. Define an object named people containing an empty array called friends.
// 2. Create three separate objects, each representing a friend, with properties like firstName,
// lastName, and optionally id.
// 3. Add these friend objects to the friends array within the people object.
// 4. Output the entire people object to the console, displaying your information and your
// friend list.
var friend1 = {
    firstName: "Khatija",
    lastName: "Ahmed",
    id: 4533,
};
var friend2 = {
    firstName: "Fatima",
    lastName: "Ali",
    id: 9876,
};
var friend3 = {
    firstName: "Zainab",
    lastName: "Ali",
    id: 1234,
};
var people = {
    friends: [friend1, friend2, friend3]
};
console.log(people);
// Assignment 02: Manipulating an Array: Rearranging Words
// Objective:
// Rearrange an array using array methods to form the sentence "I am a student of GIAIC".
// Steps:
// 1. Scrambled Array:
// o Start with an array of elements in a scrambled order, like:
// const scrambledArray = ["student", "of",true, 123, "am", "a", "GIAIC", "I"];
// • Modify the Array:
// • Use methods like split(), join(), push(), pop(), shift(), and unshift() to: 
// o Convert non-strings (booleans, numbers) to strings if needed.
// o Split elements into character arrays (optional).
// o Rearrange characters or elements in the desired order (modify original array or 
// create temporary arrays).
// • Output the Result:
// • Use join() to combine elements back into a single string: "I am a student of GIAIC
var scrambledArray = ["student", "of", true, 123, "am", "a", "GIAIC", "I"];
scrambledArray.splice(2, 2);
scrambledArray.pop();
scrambledArray.unshift("I");
scrambledArray[1] = "am";
scrambledArray[2] = "a";
scrambledArray[3] = "student";
scrambledArray[4] = "of";
scrambledArray[5] = "GIAIC";
console.log(scrambledArray.join(" "));
var product = {
    name: "Bykia",
    model: 2021,
    cost: 9000,
    quantity: 5,
};
var product1 = {
    name: "Ashrafi Parlour",
    model: 2022,
    cost: 8000,
    quantity: 7,
};
var product2 = {
    name: "Inshara's Beauty Parlour",
    model: 2023,
    cost: 2000,
    quantity: 4,
};
var inventory = {
    Product: [product, product1, product2]
};
console.log("Quantity of the third product:", inventory.Product[2].quantity);
var product3 = {
    name: "Madiha",
    model: 2016,
    cost: 10000,
    quantity: 4,
};
inventory.Product.push(product3);
console.log("Name of the fourth product:", inventory.Product[3].name);
console.log("Cost of the first product:", inventory.Product[0].cost);
;
var students = [
    {
        name: "Madiha",
        isSenior: true,
        hasCompletedAssignment: true,
    },
    {
        name: "Batool",
        isSenior: false,
        hasCompletedAssignment: true,
    },
    {
        name: "Noor Ul Arsh",
        isSenior: true,
        hasCompletedAssignment: false,
    },
    {
        name: "Laiba",
        isSenior: false,
        hasCompletedAssignment: true,
    },
    {
        name: "Ghousia",
        isSenior: true,
        hasCompletedAssignment: false,
    }
];
console.log(students);
var findSenior = function (students) {
    return students.filter(function (student) { return student.isSenior && student.hasCompletedAssignment === true; });
};
console.log(findSenior(students));
var removeStudent = function (students) {
    return students.filter(function (student) { return student.hasCompletedAssignment === false; });
};
console.log(removeStudent(students));
