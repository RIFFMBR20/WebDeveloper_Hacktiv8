// ga di compile di js
interface user {
  name: String;
  age: Number;
  hobby: String[];
}

enum SchoolType {
  negeri = "negeri",
  swasta = "swasta",
}

function isValidSchoolType(type: string): boolean {
  return Object.values(SchoolType).includes(type as SchoolType);
}

function validationSchool(type: string): SchoolType {
  if (!isValidSchoolType(type)) {
    const allowedTypes = Object.values(SchoolType).join(", ");
    throw new Error(`Invalid school type: ${type}. Allowed: ${allowedTypes}`);
  }
  return type as SchoolType;
}

type School = {
  name: string;
  type: SchoolType;
  adress: string;
};

class Car {
  public brand: string;
  public name: string;

  constructor(brand: string, name: string) {
    this.brand = brand;
    this.name = name;
  }
}

const car: Car = new Car("wuling", "almaz");
car.brand = "toyota";
car.name = "innova";

const user: user = {
  name: "nando",
  age: 60,
  hobby: ["Godain Resepsioni"],
};

function main(args?: any[]) {
  console.log("asdas");

  console.log(car);

  var School: School = {
    name: "UB",
    type: SchoolType.negeri,
    adress: "Malang",
  };

  console.log(School);

  let nilai = 10;

  nilai = 10;

  let item: String | Number = "105";
  item = "105";

  //   declare Object
  let person: Object = { name: "John", age: 30 };

  let person2: Record<string, any> = {
    name: "John",
    age: 30,
  };

  let person3: {
    nama: String;
    age: Number;
  } = {
    nama: "John",
    age: 30,
  };

  let tuple: [String, number] = ["john", 30];

}

function hello(name: string = ""): string | null {
    if (name == '') {
      return null
    }
    return "hello: " + name
  }

main();
