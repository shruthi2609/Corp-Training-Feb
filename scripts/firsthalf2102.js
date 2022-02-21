//const let var
//Number String BigInt Boolean   -
// Objects
/*let fname="admin"
fname="user"
console.log(fname)
const role="admin"
role="Trainee"
console.log(role)
var password="test123"
password="newtest123"
console.log(password)
let salary=120000
console.log(typeof salary)
let loginIn=true
console.log(typeof loginIn)
let users=["user1","user2","user3"]
console.log(users)
let salary=120000
console.log(salary.__proto__)
password="newtest123"
console.log(password.indexOf("n"))
let users=["user1","user2","user3"]
console.log(users.__proto__.__proto__.__proto__)
let user={
    username:"user xyz",
    currentLogin:"uk",
    email:"user@gmail.com",
    loginCount:50,
    role:"admin",
    getDetails:function(){
        console.log(`${this.username} has logged in ${this.loginCount} times , currently active `)
    }
}
let logger={
    username:"admin",
    currentLogin:"india"
}
logger.__proto__=user
user.getDetails()
logger.getDetails()
console.log(logger.email)
let date=21
let today="21"
console.log(date===today)*/
//while , do while , for 
//array methods 
let course=[3000,1000,12000,15000]
let courselist=["react","nodejs","js"]
/*let updatedCourse=course.concat(["java","html"])
console.log(updatedCourse)*/
/*console.log("org",course)
course.push("java")
course.push("html")
course.pop()
course.shift()
course.unshift("react")
console.log("new",course)
//course.forEach((item)=>{console.log(item)})
let res=course.filter((item)=>item>3000)
console.log(res)
//for foreach
let res=course.map((item)=>item)
console.log(res)*/
let user=[
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
/*let userdata=user.find((item)=>item.username==="user3")
console.log(userdata)*/
let userdata=user.filter((item)=>item.loginCount>=300)
console.log(userdata)
user.map((item)=>console.log(item.username,item.role))
// for foreach map





















