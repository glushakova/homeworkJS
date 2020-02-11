var student1 = {
  firstName: "Ivan",
  lastName: "Inanov",
  age: 15,
  grades: [3, 5, 2, 2, 5],
  course: 1,
  gender: "male"
};
var student2 = {
  firstName: "Ira",
  lastName: "Petrova",
  age: 21,
  grades: [3, 3, 3, 3, 4],
  course: 4,
  gender: "female"
};
var student3 = {
  firstName: "Liza",
  lastName: "Koroleva",
  age: 17,
  grades: [4, 5, 1, 4, 3],
  course: 2,
  gender: "female"
};
var student4 = {
  firstName: "Petya",
  lastName: "Sidorov",
  age: 26,
  grades: [1, 2, 1, 1, 3],
  course: 6,
  gender: "male"
};
var student5 = {
  firstName: "Ivan",
  lastName: "Antonov",
  age: 18,
  grades: [4, 2, 2, 4, 1],
  course: 3,
  gender: "male"
};
var student6 = {
  firstName: "Nastya",
  lastName: "Kotova",
  age: 22,
  grades: [4, 5, 3, 4, 5],
  course: 5,
  gender: "female"
};
var student7 = {
  firstName: "Sasha",
  lastName: "Horoshova",
  age: 17,
  grades: [5, 4, 3, 2, 1],
  course: 1,
  gender: "female"
};
var student8 = {
  firstName: "Sasha",
  lastName: "Rokotov",
  age: 19,
  grades: [2, 3, 4, 1, 3],
  course: 3,
  gender: "male"
};
var student9 = {
  firstName: "Vova",
  lastName: "Losh",
  age: 26,
  grades: [3, 4, 4, 5, 5],
  course: 5,
  gender: "male"
};
var student10 = {
  firstName: "Liza",
  lastName: "Koleda",
  age: 22,
  grades: [5, 3, 1, 2, 5],
  course: 4,
  gender: "female"
};

var arr = [
  student1,
  student2,
  student3,
  student4,
  student5,
  student6,
  student7,
  student8,
  student9,
  student10
];

for (let i = 0; i < arr.length; i++) {
  var notes = 0;
  for (let j = 0; j < arr[i].grades.length; j++) {
    notes += arr[i].grades[j];
  }
  if (
    arr[i].gender === "male" &&
    notes / arr[i].grades.length < 3 &&
    arr[i].age >= 18 &&
    arr[i].age < 27
  ) {
    arr[i].isReadyForArmy = true;
    delete arr[i].grades;
    delete arr[i].course;
  }
}

var army = [];

for (let i = 0; i < arr.length; i++) {
  if (arr[i].isReadyForArmy === true) {
    army.push(arr[i]);
  }
}
console.log(army);
