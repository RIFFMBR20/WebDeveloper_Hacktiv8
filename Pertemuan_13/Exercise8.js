function isPrime(number) {
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) return false;
  }
  return number > 1;
}

function listPrima(angkaPertama, angkaKedua){
  let prima=[]
  for(let i= angkaPertama; i<= angkaKedua; i++){
    if(isPrime(i)){
      prima.push(i)
    }
  }
  return prima
}

console.log(listPrima(1,5))
console.log(listPrima(5,10))
console.log(listPrima(10,20))
