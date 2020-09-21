let myname = "lana"
myname+=" bot"

myage = 21

let cars = ["mercedes","audi","BMW"]

for(let i = 0; i<cars.length; i++) {
    console.log("My car: "+cars[i])
}

cars.push("Tesla")
cars.pop() //hover
cars.unshift("Tesla") 
cars.shift()

let i = 0
while(i < cars.length){
    console.log("My car: "+cars[i])
    i++
}

for (let i in cars) {
    console.log("i: "+i+" cars[i]: "+cars[i])
}

for (let car of cars) {
    console.log("Car "+car)
}

let obj = {
    name: "Max",
    balance: 1000,
    education: ["high school", "bachelor"],
    isemployed: true
}

console.log("Name "+obj.name)
console.log("Name " + obj["name"])
obj.balance = 2000
obj.married = false // assign a new property
delete obj.education

console.log(obj)

console.log(1===true) //types should equal too

console.log(1 + "12")
console.log(1 + Number.parseInt("12"))