class Employee {
    #name2
    #salary2
    constructor(name, salary) {
        this.name = name
        this.salary = salary
        this.#name2 = name
        this.#salary2 = salary
    }

    printName() {
        console.log(this.#name2)
    }

    printSurn() {
        console.log(this.salary)
    }

    surnPlus() {
        console.log(this.salary + (this.salary / 100 * 10))
    }
}

new Employee('alex', 100000).surnPlus()

class Employee2 {
	constructor(name, salary) {
		this.name = name;
		this.salary = salary;
	}
	
	getSalary() {
		return this.#addSign(this.salary);
	}
	
	#addSign(num) {
		return num + '$';
	}
}

class Employee3 {
    
	constructor(name, salary) {
		this._name = name;
		this._salary = salary;
	}
	
	getName() {
		return this._name;
	}
	getSalary() {
		return this._salary;
	}
}

class Employee4 {
	constructor(name, salary) {
		this.name = name;
		this.salary = salary;
	}
	
	getSalary() {
		return this._addSign(this.salary);
	}
	
	_addSign(num) {
		return num + '$';
	}
}
