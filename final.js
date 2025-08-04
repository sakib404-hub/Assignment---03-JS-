// Problem - 01  Divide the Asset

var area = 2060;
var assetEachBrother = area / 2; //logic for finding what each brother will get
console.log(assetEachBrother);

// Problem - 02  Cycle or  Laptop

var money = 45000;

if (money < 10000) {
  console.log("Chocolate");
} else if (money >= 10000 && money < 25000) {
  console.log("Cycle");
} else if (money >= 25000) {
  console.log("Laptop");
}

// Problem 03 - Medicine Planner

var lastDay = 6;

for (var day = 1; day <= lastDay; day++) {
  if (day % 3 === 0) {
    console.log(day, "- medicine");
  } else {
    console.log(day, "- rest");
  }
}

// Problem 04 - Delete / Store
var fileName = "slipdf.txt";

var extension = fileName.split(".").pop();

if (fileName[0] === "#") {
  console.log("Store");
} else if (extension === "pdf" || extension === "docx") {
  console.log("Store");
} else {
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
console.log(phEmail);

// Problem 06 :  Current Salary ( Challenge Problem )
var experience = 40;
var startingSalary = 30000;

for (var i = 1; i <= experience; i++) {
  var salaryIncrementPerYear = startingSalary * (5 / 100);
  var presentSalary = salaryIncrementPerYear + startingSalary;
  startingSalary = presentSalary;
}

var salaryFloat = parseFloat(startingSalary.toFixed(2));
console.log(salaryFloat);
