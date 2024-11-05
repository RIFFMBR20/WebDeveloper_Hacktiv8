function isArithmeticProgression (numbers){
  increment = numbers[1] - numbers[0]
  tmp = numbers.length - 1
  tumbal = 0
  for (let i=numbers.length; i >= 0; i--){
    if (numbers[i]-numbers[i-1] == increment){
      tumbal = tumbal+1
    }
  }
  return tumbal == tmp
}

console.log(isArithmeticProgression([1,2,3,4,5,6]))
console.log(isArithmeticProgression([2,4,6,12,24]))
console.log(isArithmeticProgression([2,4,6,8]))
console.log(isArithmeticProgression([2,6,18,54]))
console.log(isArithmeticProgression([1,2,3,4,7,9]))
