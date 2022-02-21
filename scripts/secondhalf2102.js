/*function findUser(user){
if(active)
return user.filter((item)=>item.loginCount>300)
else
return "not active"
}
let users=[
    {
        username:"user1",
        currentLogin:"uk",
        email:"user1@gmail.com",
        loginCount:100,
        role:"admin"
    },
    {
        username:"user2",
        currentLogin:"usa",
        email:"user2@gmail.com",
        loginCount:500,
        role:"trainee"
    },
    {
        username:"user3",
        currentLogin:"india",
        email:"user3@gmail.com",
        loginCount:350,
        role:"trainee"
    }
]

console.log(findUser(users,"false"))

let fun1=()=>{
    console.log("test")
}
fun1()*/

/*let user= {
    username:{
        fName:"john",
        lName:"XYZ"
    },
    currentLogin:"usa",
    email:"user2@gmail.com",
    loginCount:500,
    role:"trainee",
    
}
let {username:{fName,lname},currentLogin,email,loginCount,role}=user
console.log(email)

let coursePrice=["ReactJs",12000,"author"]

let [cname,cprice]=coursePrice
console.log(cname)*/

//rest spread ...
//rest
/*function displayDetails(uname,role,count){
    console.log(uname)
    console.log(role)
    console.log(count)
}
let input=["john","admin",90]
displayDetails(...input)
let obj1={
    username:"user2",
    currentLogin:"usa",
    email:"user2@gmail.com",
    loginCount:500,
    role:"trainee"
}
let obj2={
    username:"user3",
    currentLogin:"india",
    email:"user3@gmail.com",
}
let newobj={...obj2,...obj1}
console.log(newobj)
function sample(){
    console.log("test")
}
sample()
const testfun=(...data)=>
{
    console.log(data)
}
testfun("john","admin",90)

let count=[90,95,100,123]

const checkLoginCount=(item)=>item>=90

let res=count.every(checkLoginCount)
console.log(res)*/


