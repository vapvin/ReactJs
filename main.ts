class People {
    public name: string;
    public age: number;
    public gender: string;
    constructor(name: string, age: number, gender: string){
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}

const geowoo = new People("test", 25, "tests");

const sayHi = (geowoos: People):string => {
    return `you are ${geowoos.name}, and ${geowoos.age} year, ${geowoos.gender}`;
}

console.log(sayHi(geowoo))