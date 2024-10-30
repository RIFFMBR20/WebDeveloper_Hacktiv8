console.log("Hello from");

// // let message = "Hello my name is john";
// // alert(message);

// // let test = prompt("Username")

// // let isok = confirm("are you sure?");
// // alert(isok);

// // string
// let message = "my name is john";
// // int
// let age = 20;
// //float
// let pi = 10.5;
// // Boolean
// let islogin = true
// // Object
// let user = {
//     name : "john",
//     age : 25,
//     islogin : True
// }
// // Array of string
// let hobbies = ['coding', 'music'];
// // array of Object
// let studentList =[
//     {
//         name : "John",
//         age : 25,
//         islogin : True
//     }
//     {
//         name : "John",
//         age : 25,
//         islogin : True
//     }
//     {
//         name : "John",
//         age : 25,
//         islogin : True
//     }
// ]
// // null
// let empty = null;
// // undefined
// // non variabel

let result = document.getElementById("result1");
console.log(result);
result.innerHTML = "<h1>Hello</h1>";

let resultWithSelector = document.querySelector("#result2");
console.log(resultWithSelector);

const paragraphElement = document.createElement("p");
paragraphElement.innerText = "ini Paragraf";

resultWithSelector.appendChild(paragraphElement);