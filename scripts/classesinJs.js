/*class User{
    constructor(un,count,role){
        this.username=un,
        this.logInCount=count,
        this.role=role
    }
    get role(){
        return this._role;
    }
    set role(value){
        if(value==="admin"|| value==="user")
        this._role=value
        else{
            console.log("roles doesnt match")
        }
    }
    getUserDetails(){
        console.log(`${this.username} has logged in ${this.logInCount} times`)
    }
}
const obj1=new User("userxyz",500,"admin")
console.log(typeof obj1)

//obj1.getUserDetails()
function User(un,role,count){
    this.uname=un;
    this.role=role;
    this.count=count;
}
User.prototype.getDetails=function(){
    console.log(`${this.uname} has logged in ${this.count} times`)
}
const obj1=new User("userxyz","admin",900)
console.log(obj1)*/

