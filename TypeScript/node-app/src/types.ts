// type User = {
// 	firstName: string;
// 	lastName: string;
// 	age: number
// }

// !types let  you define multiple types 
// !you can not do this using interfaces
// ?Union
// type StringOrNumber = string | number | boolean; //here we can take the  number either number or string

// function printId(id: StringOrNumber) {
//   console.log(`ID: ${id}`);
// }

// printId(101); // ID: 101
// printId("202"); // ID: 202

//! What if you want to create a type that has every property of multiple 
//? Intersection

type Employee = {
  name: string;
  startDate: Date;
};

type Manager = {
  name: string;
  department: string;
};

type TeamLead = Employee & Manager;

const teamLead: TeamLead = {
  name: "harkirat",
  startDate: new Date(),
  department: "Software developer"
};

type Student = {
    name:string;
    Department:String;
    RollNo:Number;
}

interface Teacher  {
    name:string;
    Address:String;
}
type Details=Student & Teacher;
const College: Details={
    name:"Saurabh",
    Department:"CSAIML",
    RollNo:22,
    Address:"Gorakhpur"
}
