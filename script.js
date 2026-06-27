//complete this code
class Animal {
	constructor(species){
		this.species=species;
	}
	get species(){
		return this.species;
	}
	get makeSound(){
		 console.log(`The ${this.species} makes a sound`);
	} 
	
}

class Dog extends Animal {
	super(species);
	void purr(){
		console.log("purr");
	}
}

class Cat extends Animal {
	super(species);
	void bark(){
		console.log("woof");
	}
}

const dog=new Dog();
const cat=new Cat();

dog.purr();
cat.bark();

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
