class Employee {
    constructor(name, salary, age) {
        this.name = name
        this.salary = salary
        this.age = age
    }

    getName() {
        return this.name
    }

    getSalary() {
        return `${this.salary}$`
    }

    getAge() {
        return this.age
    }

    setName(name) {
        this.name = name
        return this
    } 

    setSalary(salary) {
        this.salary = salary
        return this
    }

    setAge(age) {
        if (age > 0 && age < 120) {
            this.age = age
        }
       return this
    }
}

class Student {
	constructor(name) {
		this.name = name;
	}
}
class Employee2 {
	constructor(name) {
		this.name = name;
	}
}

let users = [
	new Student('user1'),
	new Employee2('user2'),
	new Student('user3'),
	new Employee2('user4'),
	new Student('user5'),
	new Employee2('user6'),
	new Student('user7'),
];

for (let user of users) {
    console.log(user.name)
}

new Employee().setName('Alex').setAge('20')