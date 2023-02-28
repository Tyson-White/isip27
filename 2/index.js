class Student {
    name = 'Максим'
    surn = 'Вилкин'
    upperCase() {
        return this.name.charAt(0).toUpperCase() + this.name.slice(1)
    }

    iniciali() {
        return `${this.name.charAt(0)}. ${this.surn.charAt(0)}.`
    }
}

const student1 = new Student()

console.log(student1.upperCase())
console.log(student1.iniciali())