var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
sample(10,20,30,"john")*/
var User = /** @class */ (function () {
    function User(fn, role) {
        this.fname = fn;
        this.role = role;
    }
    User.prototype.getDetails = function () {
        return "".concat(this.fname, " - ").concat(this.role);
    };
    return User;
}());
var Person = /** @class */ (function (_super) {
    __extends(Person, _super);
    function Person(fn, role, count) {
        var _this = _super.call(this, fn, role) || this;
        _this.count = count;
        return _this;
    }
    return Person;
}(User));
var obj1 = new Person("john", "admin", 90);
