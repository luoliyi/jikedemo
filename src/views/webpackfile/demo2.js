class Person {
  constructor (name, age) {
    this.name = name
    this.age = age
  }
}
Person.prototype.say = function () {
  console.log(`${this.name}向你问好`)
}

const name = 'jack'
export {
  Person,
  name as JackName
}
