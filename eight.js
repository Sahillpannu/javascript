const myNums = [1, 2, 3]

//const myTotal = myNums.reduce(function (acc, curval) {
  //  console.log(`acc value : ${acc} & curval value : ${curval}`);
    
    //return acc + curval
//},0)

const myTotal = myNums.reduce( (acc,curr)=> acc + curr,0 )

//console.log(myTotal);


const course = [
    {
        courseName : "js course",
        price : 2999
    },
     {
        courseName : "mobile dev course",
        price : 5999
    },
     {
        courseName : "py course",
        price : 999
    },
     {
        courseName : "data science course",
        price : 12999
    },
]

const payToBill = course.reduce( (acc ,item)=> acc + item.price,0  )

console.log(payToBill);
