const mysym = Symbol("key1")



const jsUser = {
    Name: "Sahil" ,
    "Full name": "Sahil Pannu" ,
    [mysym] : "key1",
    Email : "sahil@gmail.com" ,
    age: 24 ,
    isLoggedIn: false ,
    lsatLogingDays: ["Monday", "Sunday"]
}

//console.log(jsUser.Name);
//console.log(jsUser["Full name"]);
//console.log(jsUser[mysym]);

jsUser.Email = "sahil@google.com"
//Object.freeze(jsUser)
jsUser.Email = "sahil@chtgbt"
//console.log(jsUser);

jsUser.greeting = function(){
    console.log("Hello js User");
    
}

jsUser.greetingTwo = function(){
    console.log(`Hello js User ${this.name}`);
    
}
console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());


