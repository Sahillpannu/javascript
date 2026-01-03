const tinderUser = {}

tinderUser.id = "13234"
tinderUser.name = "sahil"
tinderUser.isLogeedIn = false

//console.log(tinderUser);

const regularUser = {
    email : "some@gmail.com",
    fullname : {
        userfullname: {
            firstname: "sahil",
            lastname: "pannu"
        }
    }
}
//console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1:"a",2:"b",3:"c"}
const obj2 = {4:"d",5:"e"}

//const obj3 = Object.assign({},obj1,obj2)
//console.log(obj3);

const obj3 = {...obj1,...obj2}
//console.log(obj3);

const user = [
    {
        id: 1,
        email: "h@nkxj"

    }, {
        id: 1,
        email: "h@nkxj"

    }, {
        id: 1,
        email: "h@nkxj"

    },

]
user[1].email
//console.log(tinderUser);

//console.log(Object.keys(tinderUser));
//console.log(Object.values(tinderUser));
//console.log(Object.entries(tinderUser));

//console.log(tinderUser.hasOwnProperty("isLoggedIn"));


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructer: "sahil"
}

const {courseInstructer: instructor} = course

//console.log(courseInstructer);
console.log(instructor);


//{
//    name: "pannu",
//    coursenae: "js in hindi",
//    price: "free"

//}


