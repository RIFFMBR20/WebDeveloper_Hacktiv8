/**
 * @typedef {object} user
 * @property {string} name
 * @property {number} age
 * @property {boolean} isMarriage
 * @property {number} studentScore
 */

let user = {
  name: "Ceces",
  age: 22,
  isMarriage: false,
  studentScore: 80,
  scholl : {
    name : "binus"
  },
};

let user2 = {
    ...user,
}

/**
 * A = 90 - 100
 * B = 80 - 89
 * C = 70 - 79
 * D = 60 - 69
 * E = 50 - 59
 * f = < 50
 */

function getGrade(score) {
  let grade = "F";
  if (score >= 90 && score <= 100) {
    grade = "A";
  } else if (score >= 80 && score <= 89) {
    grade = "B";
  } else if (score >= 70 && score <= 79) {
    grade = "C";
  } else if (score >= 60 && score <= 69) {
    grade = "D";
  } else if (score >= 50 && score <= 59) {
    grade = "E";
  } else {
    grade = "F";
  }
  return grade;
}

function checkIfMarriage(isMarriage) {
  return isMarriage == true;
}

console.log('${user.name}, Score : ' , getGrade(user.studentScore));
