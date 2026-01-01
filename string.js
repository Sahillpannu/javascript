const  name = "Sahil"
const repoCount = 50
console.log(`Hello my name is ${name} and my repo count is ${repoCount} `);

const gameName = new String("sahil-pannu")

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf("h"));

const newString = gameName.substring(0,5)
console.log(newString);

const anotherString = gameName.slice(-8,5)
console.log(anotherString);

const newStringOne = "    Spannu    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://sahil.com/sahil%20pannu"

console.log(url.replace("%20" ,"-"));

console.log(url.includes("sudesh"));

console.log(gameName.split("-"));







