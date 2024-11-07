"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const person_1 = require("./models/person");
const geometry_1 = __importDefault(require("./helpers/geometry"));
function main() {
    const person = new person_1.Person();
    person.name = "Nando";
    person.age = 30;
    person.weight = 60;
    person.height = 165;
    person.gender = person_1.Gender.male;
    person.zodiac = person_1.Zodiac.Gemini;
    person.isMarriage = false;
    person.isDating = false;
    console.log(person.calculateBMI());
    console.log(geometry_1.default.calculateArea(18));
}
main();
