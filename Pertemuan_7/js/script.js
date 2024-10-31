/**
 * JsDoc
 * sum : sum a + b
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */

function sum(a, b) {
  return a + b;
}

// Array
function sumVariadic(...b) {
  let total = 0;

  b.forEach((value) => (total += value));

  return total;
}

function sumVariadicReduce(...b) {
  const total = b.reduce((prev, current) => prev + current, 0);

  return total;
}

const sumWIthArrow = (...b) => {
  return b.reduce((prev, current) => prev + current, 0);
};

const sumWIthArrowInline = (...b) =>
  b.reduce((prev, current) => prev + current, 0);

console.log(sumVariadic(10, 20, 30, 40, 50, 60));
console.log(sumVariadicReduce(10, 20, 30, 40, 50, 60));
console.log(sumWIthArrow(10, 20, 30, 40, 50, 60));
console.log(sumWIthArrowInline(10, 20, 30, 40, 50, 60));

function toggleImage() {
  const johnImage = document.getElementById("johnImage");

  if (johnImage.classList.contains("hidden")) {
    johnImage.classList.remove("hidden");
  } else {
    johnImage.classList.add("hidden");
  }
}

// Fungsi akan dijalankan ketika html sudah ke load
// document.onload(() => {});

const submitForm = document.querySelector("#submitForm");
const inputName = document.querySelector("#inputName");
const selectEdu = document.querySelector("#selectEdu");
const inputGender = document.querySelectorAll("[name='gender']");

inputName.addEventListener("input", function (event) {
  const value = event.target.value;

  const displayName = document.querySelector("#displayName");
  displayName.textContent = value;
});

selectEdu.addEventListener("change", function (event) {
  const value = event.target.value;

  const displayEdu = document.querySelector("#displayEdu");
  displayEdu.textContent = value;
});

inputGender.forEach((value) => {
  value.addEventListener("change", function (event) {
    const value = event.target.value;

    const displayEdu = document.querySelector("#displayGender");
    displayEdu.textContent = value;
  });
});
// inputGender.addEventListener("change", function(event){
//     const value = event.target.value;

//     const displayEdu = document.querySelector("#displayGender");
//     displayEdu.textContent = value;
// });


submitForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const form = event.target;

  const data = new FormData(form);
  for (const [name, value] of data) {
    console.log(name, ":", value);
  }

  console.log(event);
});

// const checkedGender = document.querySelector("[name='gender] : checked").value;
