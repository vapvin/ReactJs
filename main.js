var People = /** @class */ (function () {
    function People(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    return People;
}());
var geowoo = new People("test", 25, "tests");
var sayHi = function (geowoos) {
    return "you are " + geowoos.name + ", and " + geowoos.age + " year, " + geowoos.gender;
};
console.log(sayHi(geowoo));
