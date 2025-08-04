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
