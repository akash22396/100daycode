/**************************JavaScript***********************/

/*
An array is collection of items stored at contiguous memory locations. The idea is to store multiple items of same type together.
This makes it easier to calculate the position of each element by simply adding an offset to a base value, i.e., the memory location of
the first element of the array (generally denoted by the name of the array).

*/

/*************************** Array Methods ********************************/

let users = [
  { name: "Akash", age: 24 },
  { name: "Ankit", age: 23 },
  { name: "Jai", age: 26 },
  { name: "Vinod", age: 23 },
];
let arr = [2, 5, 1, 5, 3, 11, 44, 12];

/*************  for-loop  Method  *************/
function forLoopMethod() {
  for (let i = 0; i < users.length; i++) {
    console.log(users[i].name, users[i].age);
  }
}
// forLoopMethod()

/************** forEach Method ******************/

function forEachMethod() {
  users.forEach((user) => {
    console.log(user.name, user.age);
  });
}
// forEachMethod()

/****** Find Method ******/
function userFindByAge(age) {
  return users.find((user) => user.age === age);
}

function userFindByName(name) {
  return users.find((user) => user.name === name);
}

// console.log(userFindByAge(23))
// console.log(userFindByName('Jai'))

/****** Filter Method ******/

const userFilterByAge = (age) => {
  return users.filter((user) => user.age === age);
};

const userFilterByName = (name) => {
  return users.filter((user) => user.name === name);
};

// console.log(userFilterByAge(23))
// console.log(userFilterByName('Akash'))

/********** Map Method **************/
const forMapMethod = () => {
  users.map((user) => {
    console.log(user.name, user.age);
  });
};

// forMapMethod()
/*********** Sort Method*************/
const arraySortMethod = (a, b) => {
  // return arr.sort((a,b)=>a-b)
  // return arr.sort()
  // return users.sort((a,b)=>b.age-a.age)  // Desc Order
  return users.sort((a, b) => a.age - b.age); // Asc Order
};
// console.log(arraySortMethod())

/************ Reverse Method ************/
const arrayReverseMethod = () => {
    return arr.reverse((a,b)=>a-b)
};
console.log(arrayReverseMethod())

/************************/
/************************/
