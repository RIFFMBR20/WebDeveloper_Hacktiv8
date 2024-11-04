// Mapping with for loop
function mapWithForLoop() {
  const harga = [19.99, 4.95, 25, 3.5];
  let hargaSekarang = [];
  for (let i = 0; i < harga.length; i++) {
    hargaSekarang.push(harga[i] * 1.06);
  }
  return hargaSekarang;
}

// mapping with es6
function mapWithS6() {
  const harga = [19.99, 4.95, 25, 3.5];
  return harga.map((harga) => harga * 1.06);
}

console.log(mapWithForLoop());
console.log(mapWithS6());

function filterWithForLoop() {
  const bilangan = [1, 2, 3, 4, 5, 6, 7, 8];
  let ganjil = [];
  for (let i = 0; i < bilangan.length; i++) {
    if (bilangan[i] % 2 == 1) {
      ganjil.push[bilangan[i]];
    }
  }
  return ganjil;
}

function filterWithES6() {
  const bilangan = [1, 2, 3, 4, 5, 6, 7, 8];
  let ganjil = bilangan.filter((num) => num % 2);

  return ganjil;
}

console.log(filterWithForLoop());
console.log(filterWithES6());

const studentList = [
  {
    id: 1,
    name: "Jhon",
    score: 90,
    isGraduated: true,
  },
  {
    id: 2,
    name: "Jon",
    score: 80,
    isGraduated: false,
  },
  {
    id: 3,
    name: "Jhn",
    score: 60,
    isGraduated: false,
  },
];

function findStudent(id) {
  return studentList.find((og) => og.id === id);
}

console.log(findStudent(1));

// operasi and
function isAllPass() {
  return studentList.every((student) => student.score >= 70);
}
console.log(isAllPass());

// operasi or
function isAnyGraduated() {
  return studentList.some((student) => student.isGraduated == true);
}
console.log(isAnyGraduated());

function sumWithForLoop() {
  const sumbangan = [1000, 2000, 3000];
  let total = 0;
  for (let i = 0; i < sumbangan.length; i++) {
    total += sumbangan[i];
  }
  return total;
}
console.log(sumWithForLoop());

function sumWithReduce() {
  const sumbangan = [1000, 2000, 3000];
  let total = sumbangan.reduce((total, sumbangan) => total + sumbangan, 0);
  return total;
}
console.log(sumWithReduce());

function sumScoreWithReduce() {
  return studentList.reduce((total, student) => total + student.score, 0);
}
console.log(sumScoreWithReduce());

function sumScoreWithReduceObject() {
  return studentList.reduce((prev, student) => (prev.score || prev) + student.score);
}
console.log(sumScoreWithReduceObject());
