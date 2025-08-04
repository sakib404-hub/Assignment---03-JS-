/** Problem 06 :  (Current Salary )  */
var experience = 40;
var startingSalary = 30000;

for (var i = 1; i <= experience; i++) {
  var salaryIncrementPerYear = startingSalary * (5 / 100);
  var presentSalary = salaryIncrementPerYear + startingSalary;
  startingSalary = presentSalary;
}

var salaryFloat = parseFloat(startingSalary.toFixed(2));
console.log(salaryFloat);
