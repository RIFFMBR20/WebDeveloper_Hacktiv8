import { Gender, Person, Zodiac } from "./models/person";
import Geometry from "./helpers/geometry";

function main() {
  const person: Person = new Person();
  person.name = "Nando";
  person.age = 30;
  person.weight = 60;
  person.height = 165;
  person.gender = Gender.male;
  person.zodiac = Zodiac.Gemini;
  person.isMarriage = false;
  person.isDating = false;

  console.log(person.calculateBMI());
  console.log(Geometry.calculateArea(18))

  // const baseResponse = new BaseResponse<string>("data", "ini adalah pesan error", 400, true);
  // console.log(baseResponse.data.name);

}

main();
