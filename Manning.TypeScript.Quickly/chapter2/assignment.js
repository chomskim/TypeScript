var Dog = /** @class */ (function () {
    function Dog(name) {
        this.name = name;
    }
    Dog.prototype.sayHello = function () {
        return 'Dog says hello!';
    };
    return Dog;
}());
var Fish = /** @class */ (function () {
    function Fish(name) {
        this.name = name;
    }
    Fish.prototype.dive = function (howDeep) {
        return "Diving " + howDeep + " feet";
    };
    return Fish;
}());
var Frog = /** @class */ (function () {
    function Frog(name) {
        this.name = name;
    }
    return Frog;
}());
function talkToPet(pet) {
    if (pet instanceof Dog) {
        return pet.sayHello();
    }
    else if (pet instanceof Fish) {
        return 'Fish cannot talk, sorry.';
    }
    else if (pet instanceof Frog) {
        return 'Frog cannot talk, sorry.';
    }
    else {
        // A hack to make sure that all union members are processed
        // Try adding the Frog as a member of the union in line 21
        // and you'll see an error in the line 36 stating that
        // Frog is not assignable to never. Add another else if
        // and the error will go away
        var ifOtherAnimalBecomesPet = pet;
        return ifOtherAnimalBecomesPet;
    }
}
var myDog = new Dog('Sammy');
var myFish = new Fish('Marry');
console.log(talkToPet(myDog));
console.log(talkToPet(myFish));
