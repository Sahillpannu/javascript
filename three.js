const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
   // console.log(num);
}

const greeting = "Hello world!"

for (const greet of greeting) {
    //console.log(`each char is ${greet}`);
}

const map = new Map()

map.set("In", "India")
map.set("fr", "france")
map.set("usa", "united state of india")
map.set("In", "India")

//console.log(map);

for (const [key, value] of map) {
    console.log(key, ":-" , value);
    }


