const user = {
    username : "Sahil Pannu",
    price : 99,
    welcomemessage : function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
        
    }

}
//user.welcomemessage()
//user.username = "Hitesh"
//user.welcomemessage()
//console.log(this);


//function chai(){
    //let username = "sahil"
  //  console.log(this.username);
    
//}
//chai()

//const chai = function(){
  //  let username = "sahil"
   // console.log(this.username);
    
//}
//chai()

const chai = () =>{
    let username = "sahil"
    console.log(this);
    
}

//chai()

//const addTwoNumber = (num1 ,num2) => {
//    return num1 + num2
//}
//console.log(addTwoNumber(3,4));

//const addTWO = (num1, num2) => (num1 + num2) 

const addTWO = (num1, num2) => ({username: "sahil"})
console.log(addTWO(3,4));




