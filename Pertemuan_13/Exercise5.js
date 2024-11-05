function threeStepsAB(text){
  splitText = text.split('')
  console.log(splitText)
  result = false
  let hurufAB = 0
  for (let i = 0; i < splitText.length; i++){
    if (splitText[i] == 'a' || splitText[i] == 'b'){
      hurufAB = hurufAB + 1
    }
    if (splitText[i] == 'a' ){

    }
  }
  return result
}

console.log(threeStepsAB('lane borrowed'))

// console.log(threeStepsAB('i am sick'))

// console.log(threeStepsAB('you are boring'))

// console.log(threeStepsAB('barbarian'))

// console.log(threeStepsAB('bacon and meat'))