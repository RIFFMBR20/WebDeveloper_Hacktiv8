var SchoolType;
(function (SchoolType) {
  SchoolType["negeri"] = "negeri";
  SchoolType["swasta"] = "swasta";
})(SchoolType || (SchoolType = {}));
var Car = /** @class */ (function () {
  function Car(brand, name) {
    this.brand = brand;
    this.name = name;
  }
  return Car;
})();
var car = new Car("wuling", "almaz");
car.brand = "toyota";
car.name = "innova";
var user = {
  name: "nando",
  age: 60,
  hobby: ["Godain Resepsioni"],
};
function main(args) {
  console.log("asdas");
  console.log(car);
  var School = {
    name: "Ub",
    type: SchoolType.negeri,
    adress: "Malang",
  };
  console.log(School);
  var nilai = 10;
  nilai = 10;
}
main();
