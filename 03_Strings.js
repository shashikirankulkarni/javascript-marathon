// Strings
console.log("Hello");
let firstName = "Shashi";
let lastName = "Kulkarni";
console.log(firstName, lastName);
// String Concatination
console.log(firstName+" "+lastName);
let fullName = `${firstName} ${lastName}`; //Template Literal
console.log("Full Name is", fullName);

//Get String Charater
console.log(firstName[0]);

//String Methods
console.log(firstName.toLowerCase());
console.log(lastName.indexOf('k'));

let hobbies = "         coding reading running        ";
let result = hobbies.trim();

let hobbiesArray = result.split(' ');
console.log(hobbiesArray);
console.log(result.lastIndexOf('i'));
console.log(result.includes("coding")); //case sensitive

//slice(Non-Mutating)
let myFullName = "shashikiran";
console.log(myFullName.slice(0,6)); //6 is excluded

//splice (Mutating)
let nameArray = ["Shashi","Sandeep","Nikhil","Manik"];
console.log(nameArray.splice(1,0,"Vasant"));
//add Vasant at position 1, 0 says dont remove any elemnts right side
console.log(nameArray);

//Strings are immutable
let str = "Hello";
str[0] = 'i';
console.log(str);