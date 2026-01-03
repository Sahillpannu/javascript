const marvelHeros = ["thor", "Ironman", "spiderman"]
const dcHeros = ["superman", "flash", "batman"]

//marvelHeros.push(dcHeros)

//console.log(marvelHeros);
//console.log(marvelHeros[3][1]);

//const allHeroes = marvelHeros.concat(dcHeros)
//console.log(allHeroes);

const all_new_heros =[...marvelHeros, ...dcHeros]
//console.log(all_new_heros);

const anotherArray = [1, 2, [3,[4,5,[6]]]]
const realAnotherArray = anotherArray.flat(Infinity)
//console.log(realAnotherArray);

console.log(Array.isArray("Sahil"));
console.log(Array.from("Sahil"));
//console.log(Array.from({name:"Sahil"}));

let score1 = 456
let score2 = 5757
let score3 = 7876

console.log(Array.of(score1, score2, score3));



