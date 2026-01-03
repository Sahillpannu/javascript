function sayMyName(){
    console.log("s");
      console.log("a");
        console.log("h");
          console.log("i");
            console.log("l");
    
}

//sayMyName()

//function addTwoNumber(number1, number2){
  //  console.log(number1 + number2);
    
//}

function addTwoNumber(number1, number2){
   //let result = number1 + number2
   //return result
   return number1 + number2
    
}

const result = addTwoNumber(3 ,5)
//console.log("result:", result);

function loginUserMessage(username = "Sahil"){
              if(!username){
                console.log("Please enter a username");
                return 
              }
              return `${username} just logged in`
}
//console.log(loginUserMessage());

function calculatecarprice(...num1){
    return num1 
}
//console.log(calculatecarprice(200,400,500))

const user = {
    username: "Sahil",
    price: 1000

}

function handleobject(anyobject){
console.log(`username is ${anyobject.username} and price is ${anyobject.price}.`);

}
//handleobject(user)

handleobject({
    username: "sahil",
    price: 399
})

const myarry = [1000, 28983, 82389, 8389, 38238]
function returnSecondValue(myNewArry){
    return myNewArry[1]
}
console.log(returnSecondValue(myarry));
