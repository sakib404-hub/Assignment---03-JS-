// Problem - 01  Divide the Asset

var area = 2060;
var assetEachBrother = area / 2; //logic for finding what each brother will get
console.log(assetEachBrother);

// Problem - 02  Cycle or  Laptop

var money = 45000;

if (money < 10000) {
  //Logic fo findng if the money is less then 10000 taka
  console.log("Chocolate");
} else if (money >= 10000 && money < 25000) {
  //logic for finding if the money is between 10000 to less then 25000 taka
  console.log("Cycle");
} else if (money >= 25000) {
  //logic for finding if the money is greater or equal to 25000 taka
  console.log("Laptop");
}

// Problem 03 - Medicine Planner

var lastDay = 6;

for (var day = 1; day <= lastDay; day++) {
  if (day % 3 === 0) {
    //if the day(iteraor) is divisable by 3 therefore its medicine day
    console.log(day, "- medicine");
  } else {
    //Otherwise its rest day
    console.log(day, "- rest");
  }
}

// Problem 04 - Delete / Store
var fileName = "slipdf.txt";

//getting the extension from the file
var extension = fileName.split(".").pop();

if (fileName[0] === "#") {
  //checking if the first character is # then we are storing the value
  console.log("Store");
} else if (extension === "pdf" || extension === "docx") {
  //checking is the file extension is pdf and docx therefore we are storing the value of that
  console.log("Store");
} else {
  //If not theredfore we are deleting the value
  console.log("Delete");
}

// Problem 05 - PH Email Generator
var student = {
  name: "mewo",
  roll: 96,
  department: "swe",
};

var phEmail =
  student.name + student.roll + "." + student.department + "@ph.ac.bd";
//concating string and adding if needed
console.log(phEmail);

// Problem 06 :  Current Salary ( Challenge Problem )
var experience = 40;
var startingSalary = 30000;

for (var i = 1; i <= experience; i++) {
  var salaryIncrementPerYear = startingSalary * (5 / 100); //Getting the salary increment
  var presentSalary = salaryIncrementPerYear + startingSalary; //updating as present salaryu
  startingSalary = presentSalary; //updating starting salary after the iteration
}

var salaryFloat = parseFloat(startingSalary.toFixed(2));
console.log(salaryFloat);
