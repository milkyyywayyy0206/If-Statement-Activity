// prompt the user to enter their age
let age = parseInt(prompt("Enter your age: "));

// Check the age and assign a category
if (age < 13) {
    console.log("You are a child");   
} else if (age >= 13 && age < 20) {
    console.log("You are a teenager");
} else if (age >= 20) {
    console.log("You are a young adult");
}