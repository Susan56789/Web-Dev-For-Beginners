//Grading System
let allStudents = ["A", "B", 1, 4, 5, 2, "C-", 3, "C"];

let studentsWhoPass = [
  allStudents.forEach((el) => {
    if (el == "A" || el == "A-" || el == "B" || el == "B-" || el >= 3) {
      console.log("Passed");
    }
  }),
];

let studentsWhoFail = [
  allStudents.forEach((el) => {
    if (el == "C" || el == "C-" || el < 3) {
      console.log("Failed");
    }
  }),
];

return studentsWhoPass, studentsWhoFail;
