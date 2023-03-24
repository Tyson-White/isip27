class Validator {
    constructor(email, domain, number) {
        this.email = email
        this.domain = domain
        this.number = number
    }

    isEmail() {
        if (this.email.match(
            /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )) {
            return true
        } else {
            return false
        }
    }

    isDomain() {
        if (/^[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9]\.[a-zA-Z]{2,}$/.test(this.domain)) {
            return true
        } else {
            return false
        }
    }

    isNumber() {
        if (this.number.match(/^\d+$/)) {
            return true
        } else {
            return false
        }
    }
}

const test = new Validator('sd', 'jlk.fg', '5234234234')

console.log(test.isEmail())
console.log(test.isDomain())
console.log(test.isNumber())

class Position {
    constructor(pos) {
        this.pos = pos
    }
}

class Department {
    constructor(dep) {
        this.dep = dep
    }
}

const posi = new Position('programmer')

const depart = new Department('testers')


class Employee {
    constructor(name, position, department) {
        this.name = name;
        this.position = position.pos;
        this.department = department.dep;
    }
}

const emp = new Employee('John', posi, depart)

console.log(emp.name, emp.position, emp.department)


const users = [
    new Employee('Alex', 33000, 'qwewqe'),
    new Employee('John', 45000, 'qwewqe'),
    new Employee('Kane', 80000, 'qwewqe')
]

for (let user of users) {
    console.log(user.name)
}

class EmployeeCollection {
    constructor() {
        this.users = []
        this.sum = 0
        this.mid = 0
    }

    addUser(user) {
        this.users.push(user)
    }

    printUsers() {
        console.log(this.users)
    }

    printSum() {
        for (let user of this.users) {
            this.sum += user.position
        }
        console.log(this.sum)
    }

    middle() {
        for (let user of this.users) {
            this.mid += user.position
        }
        console.log(this.mid / this.users.length)
    }
}



