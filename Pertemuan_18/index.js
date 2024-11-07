function main(param1, param2, callback) {
  console.log(param1, param2);
  callback();
}

function myCallback() {
  console.log("halloooowww");
}

main(1, 2, myCallback);

function sumWithCallback(nilai1, nilai2, callback) {
  callback(nilai1, nilai2);
}

function myCallback_1(nilai1, nilai2) {
  console.log(nilai1 + nilai2);
}

sumWithCallback(1, 2, myCallback_1);

sumWithCallback(5, 10, (nilai1, nilai2) => console.log(nilai1 * nilai2));
sumWithCallback(5, 10, (nilai1, nilai2) => console.log(nilai1 + nilai2));
sumWithCallback(5, 10, (nilai1, nilai2) => console.log(nilai1 / nilai2));
sumWithCallback(5, 10, (nilai1, nilai2) => console.log(nilai1 - nilai2));

function sumWithCallbackReturn(nilai1, nilai2, callbackParam){
    return callbackParam(nilai1, nilai2)
}
console.log(
  "sum with return : ",
  sumWithCallbackReturn(5, 10, (nilai1, nilai2) => nilai1 + nilai2)
);
