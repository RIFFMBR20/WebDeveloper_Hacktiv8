function gcd(firstNumber, secondNumber){
  let hcf;
  for (let i = 1; i <= firstNumber && i <= secondNumber; i++) {

    if( firstNumber % i == 0 && secondNumber % i == 0) {
        hcf = i;
    }
  }
  return hcf
}

console.log(gcd(12,16))
console.log(gcd(50,40))
console.log(gcd(22,99))
console.log(gcd(24,36))
console.log(gcd(17,23))