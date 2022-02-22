/*let number1:number;
let logIn:boolean;
let fname:string;
let User:{
    fname:string,
    logInCount:number|string,
    role:string,
    active:boolean
}={
    fname:"john",
    logInCount:"900",
    role:"admin",
    active:true,
}
//array 
let users:(string|number)[]=[90,"xyz","abc",true]
// 1. number of elements 2. order of type
//tuple
let tech:[string,string,number?]
tech=["reactjs","express"]
enum Role{
    ADMIN,TRAINEE,PM,TL
}
let User:{
    fname:string,
    logInCount:number|string,
    role:Role,
    active:boolean
}={
    fname:"john",
    logInCount:"900",
    role:Role.ADMIN,
    active:true,
}

console.log(test(2,3,false,"result is"))
function test(n1:number,n2:number,showLoginStatus:boolean,message:string="the message is "):void|string{
    const dataresult:number=n1+n2
    if(showLoginStatus){
        console.log(message+dataresult)
    }
    else{
        return "please login"
    }
}
test(23,25,true)
//function types
let add:(n1:number,n2:number)=>number
add=(n1,n2)=>{return n1+n2}
function printName(initial:string,fname:string,lname?:string){
    if(lname===undefined){
        return initial+fname
    }
    else
return initial+fname+lname
}
console.log(printName("Er","Peter"))
function sample(...numbers:(number|string)[]){

}
sample(10,20,30,"john")
class User{
  protected fname:string;
  private role:string;
    constructor(fn:string,role:string){
        this.fname=fn;
        this.role=role
    }
    getDetails():string{
        return `${this.fname} - ${this.role}`
    }
}
class Person extends User{
    count:number
    constructor(fn:string,role:string,count:number){
        super(fn,role)
        this.count=count
    }
}
const obj1=new Person("john","admin",90)
interface User{
    fname:string,
    lname:string,
    count:number
    displayExp:()=>number
}
let userobj:User={
    fname:"peter",
    lname:"Er",
    count:90,
    displayExp:():number=>{return }

}*/









