function defaultForLoop(){
    let counter = 0;

    for(let i = 0; i < 10; i++) {
        counter = i;

        console.log(i)
    }
    console.log("last counter", counter)
}

function loopForEach(){
    const studentList = [
        {
            name : "joshua"
        },
        {
            name : "Nuki"
        }
    ];

    studentList.forEach((value, index) => {
        console.log("Nama: ", value, "index: ", index)
    });
}

function loopRepeat(){
    let message = "Saya"

    console.log(message.repeat(10))
}

function loopWhile(){
    let counter = 0;

    while (counter<10) {
        counter++; //tidak bileh lupa
        console.log(counter)
    }
}

function loopDoWhile(){
    let counter = 0;
    do{
        counter++;
        console.log("perulangan ke:", counter)
    }while(counter<10)
}

let input = [80, 30, 60, 55, 32, 60, 10, 65, 90, 12]
// search : 100
// output : [90,10]

function findNumber(number, search){
    const map = {}
    const result = {}

    for (let i = 0; i < number.lenght; i++){
        const number = number[i]

        const complement = search-number;

        if (map(complement) !== undefined){
            result.push([complement,number]);
        }

        map[number] = i;
        
    }
    return result;
}

console.log(findNumber(input, 100))