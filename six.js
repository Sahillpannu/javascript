const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//const newNumber = myNums.filter( (num)=> num > 5 )

const newNums = []

//myNums.forEach( (num)=> {
      //      if (num>5) {
    //            newNums.push(num)
  //          }
//} )

//console.log(newNums);


const books = [{
    tittle: "book one", genre: "history", publish: 1999, edition: 2007
},
{
    tittle: "book two", genre: "science", publish: 1990, edition: 2000
},
{
    tittle: "book three", genre: "physics", publish: 2000, edition: 2011
},
{
    tittle: "book four", genre: "history", publish: 2005, edition: 2010
},
{
    tittle: "book five", genre: "geography", publish: 1995, edition: 2001
}
]

let newBook = books.filter( (bk)=> bk.edition >= 2000  )

console.log(newBook);
