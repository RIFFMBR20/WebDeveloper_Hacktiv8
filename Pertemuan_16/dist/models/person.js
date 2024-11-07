"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = exports.Zodiac = exports.Gender = void 0;
var Gender;
(function (Gender) {
    Gender["female"] = "Female";
    Gender["male"] = "Male";
})(Gender || (exports.Gender = Gender = {}));
var Zodiac;
(function (Zodiac) {
    Zodiac["Aries"] = "Aries";
    Zodiac["Taurus"] = "Taurus";
    Zodiac["Gemini"] = "Gemini";
    Zodiac["Cancer"] = "Cancer";
    Zodiac["Leo"] = "Leo";
    Zodiac["Virgo"] = "Virgo";
    Zodiac["Libra"] = "Libra";
    Zodiac["Scorpio"] = "Scorpio";
    Zodiac["Sagittarius"] = "Sagittarius";
    Zodiac["Capricorn"] = "Capricorn";
    Zodiac["Aquarius"] = "Aquarius";
    Zodiac["Pisces"] = "Pisces";
})(Zodiac || (exports.Zodiac = Zodiac = {}));
class Person {
    calculateBMI() {
        return (this.weight / (this.height * this.height)) * 10000;
    }
}
exports.Person = Person;
