<<<<<<< HEAD
//console.log(window);

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.interimResults=true;
const p=document.createElement('p');
const words = document.querySelector('.words');
words.appendChild(p);

//this is for printing content..

//events

recognition.addEventListener('result', e =>
{
    const transcript =[...e.results]
    .map(result=>result[0])
    .map(result=>result.transcript)
    .join('');
    p.innerHTML=transcript;//p.textcontent=transcript;
    if(e.result[0].isFinal){
        p=document.createElement('p');
        words.appendChild(p);
        p.textContent=transcript;
    }
});

recognition.addEventListener('end',recognition.start);
recognition.start();
=======
// ----------------------   02-10-2019  --------------------------------

// var str="JavaScript";
// var str1='Nodejs';
// var str2=`hello javascript and nodejs`;

// console.log (str + str1 + str2);

// var str3=`
// <h1> hello </h1>
// <p> lorem asdfghgfdsaDFGHJ</P>
// <button> submit </button>

// <input type="text" placeholder="enter text">

// ${2+2}

// `;

// document.write(str3);


// var name="nithin";
// var age=20;
// var company = "infosys";
// var salary = 10000;

// console.log( " my name is " +name+" my age is "+age+" i wotk for "+company+" and i am getting "+salary);//es5 way


// document.write(`my name is <strong> ${name} </strong>
//  my age is ${age}
//   i work for ${company}
//    and i am getting ${salary}`);


//    console.log(typeof name);
//    console.log(typeof age);
//    console.log(typeof company);
//    console.log(typeof salary);

// //number
//    var num = 10;
//    var num1=10.10;
//    var num2 = 1/1;
//    console.log(typeof num);
//    console.log(typeof num1);
//    console.log(typeof num2);


// console.log('nithin'/0);
// //Nan-> not a number
// console.log(1/0);
// //Infinity


//----------------- 03-10-2019 --------------------------------------------

// var language=['java' ,'node','python',undefined,null,true];

 //console.log(language[0]);
// console.log(language);

/*

var language=['java','c#','ruby'];//SQUARE Braces method

var array = new Array('mango','apple','banana');//constructor method

var array3=Array.of('nitin','athul','abhi');//ECMA-6 onwards using this method

var array4=Array(7);//mension size of array

var array5="nithin";


console.log(array);
console.log(language);
console.log(array3);
console.log(array4);



console.log(typeof(array) , typeof(language ) ,typeof( array3) ,typeof( array4));//Check Datatype of array


console.log(Array.isArray(array));//Check this is array
console.log(Array.isArray(array3));
console.log(Array.isArray(array4));
console.log(Array.isArray(language));
console.log(Array.isArray(array5));

*/


/*
var str ="hello nodejs and javascript";//convert string into array using split method

var strwithArray = str.split('');//ES5
console.log(strwithArray);


var strwithArray = str.split(' ');//convert each word is converted into array(single space)
console.log(strwithArray);


var strwithArray = str.split('  ');//convert entire sentance into array(double space)
console.log(strwithArray);




var es6way = Array.from(str);//ES6 onwards from method
console.log(es6way);


let [...spread]=str;//easy way spread operator(000000000...)

console.log(spread);

console.log(spread.toString(''));//convert array into string but string lik this (h,e,l,l,o,......)

console.log(spread.join(''));//convert array into string instead of using tostring it convert each word as a string like ("hello nodejs")


*/

/*
let array1 = ['java','pyhton'];
let array2 = ['nodejs','angular','expressjs'];

let concatearray = array1.concat(array2, 'athul');
console.log(concatearray);

let totalArray = [...array1, ...array2, 'ntihin',true];//ES6..
console.log(totalArray);
*/


//----------------- 4-10-2019 ---------------------------------------

/*
let users={name:'vinu',
            age:18,
            company:'CGI',
            salary:1000
        }   //objects in the form of 'key :value' pair 


        console.log(users.name);
        console.log(users.company);
        console.log(users.age);
        console.log(users['age']);
    
        
let obj = new Object();
obj.name="manu";
obj.age=20;
obj.salary=50000;

console.log(obj);
----------------------------------------------*/


/*
// ECMA-5
let name ="viany";
let age=30;
let company = "Google";

let user={
    name:name,
    age:age,
    company:company,
    Salary:2000
}

console.log(user);


// ECMA-6

//let name1 ="viany";
//let age1=30;
//let company1 = "Google";

//let userda{name1,age1,comapny1,salary=20000}; 
 //console.log(userda);

 

 let userData={
    name,
    age,
    company,
    Salary  :2000
};

console.log(userData);

*/

/*

{
    console.log('hii nithin');//block of code
}//immediate invoking function expresion in ES-6


var obj = {
    key: value
}// this is object

*/



/*

var userObject = [{
    name:'sachin',
    age:21,
    company:'Google',
    designation:'nodejs developer'
    photo:'https://pixabay.com/photos/woman-grown-up-within-people-3083377/'
},
{
    name:'manu',
    age:22,
    company:'microsoft',
    designation:'UI developer'
    photo:'https://pixabay.com/photos/robot-mech-machine-technology-2301646/'
},
{
    name:'anu',
    age:20,
    company:'Apple',
    designation:'Java developer'
    photo:'https://pixabay.com/photos/woman-grown-up-within-people-3083384/'
}]

*/

/*
let user = {
    'user-name' : 'shashi',
for : 'hey for',
while:'hey while',
if:'hey if'

}
console.log(user);

*/

//----------------05-10-2019----------------
/*
let user ={
    name:'nithin',
    age:21,
    company:'Google',
    salary:500000

}

user.name='ATHUL';

//console.log(user);


let  me=Object.create(user);
me.name='abhi';
me.age=25;
me.company='testyantra';
me.salary=50000;
me.desig='developer';//posiible to add new things

console.log(user);
console.log(me);
*/
/*
let emp={
    id:1,
    'emp-name':'manoj',
    'emp-age':20,
    'emp-salary':20000
};

let empconvertasArray = Object.entries(emp);//it convert array like object
empconvertasArray.forEach(element => {
    console.log(element)
});

*/
//not getting output---------------------

/*
let emp={
    id:1,
    'emp-name':'abhi',
    'emp-age':25,
    'emp-salary':22000
};

let checkandObject = Object.freeze(emp);

emp['emp-age']='shashi';

console.log(emp);
*/

/*
let emp={
    id:1,
    'emp-name':'manoj',
    'emp-age':20,
    'emp-salary':20000,
alldata(){
    console.log(`${this['emp-name']}
    and ${this['emp-age']}
    ${this["emp-salary"]}`);
}

};
console.log(emp.alldata);

*/
/*
let student ={
    name:'nithin',
    age:24,
    address:'asdfg'
};

let ArrayValues=Object.values(student);
let ArrayKey = Object.keys(student);
console.log(ArrayValues);
console.log(ArrayKey);

*/

//----------------07-10-2019--------------------------

/*
(function(){
    console.log('hello');
    alert(2+2);
    var username='shashi';
    var password=234;//these 2 variable available in nearest scope
                        // function not available outside this scope
})();
console.log(username,password);//uncaught ReferenceError :username is not defined.

*/

//---------------ES-6------------------

/*
{
    console.log('hello');
    alert(2+2);
    var username='shashi';
    var password=123;
}
*/

/*

// ---naming function---
function User(){
    console.log('shashi');
    console.log('manu');
    var username='ntihin';
    var password=123;

}

User();//calling function
*/

/*
var user= new Function(console.log('hello fullstack developers'));

user();
*/

/*

function usersname(name){
    return name;
}
console.log(usersname('shashi'));
console.log(usersname('manu'));
console.log(usersname('keerthi'));


//without retuen statement


function usersname(name,password)
{
    console.log(name+password);
}

usersname('nithin',123);


*/

//-------09-10-19-------------------------------

/*


function number()
{
    let args=arguments;
    console.log(args);
    console.log(Array.isArray(args));//false
    let[...checkspread]=args;
    let ArrayFrom =Array.from(args);

    console.log(typeof checkspread);//object

    console.log(Array.isArray(checkspread));//true
    console.log(arguments);
}

number(100,70,20,40);


var array =[1,4,5,50];
console.log(array);

*/




//*------function closure----------

/*

var simple='hello nithin'; //global scope

function JSpiders()
{
    jtext='hello jspiders'; //local scope
    console.log(jtext);

    function Qspiders()
    {
        let qtext='hello qspiders'; //local scope
        console.log(qtext);
        console.log(jtext); //closure here..
    } //this is qspiders block //called
    QSpiders();//calling jsiders  // it show error y bcz its calling local scope in out side the loop
 }
JSpiders();//calling Jspiders function   // it show error y bcz its calling local scope in out side the loop
 
*/


/*

//--------callback function--------


function jspiders(callback)
{
    console.log('jsp here');
    callback();
}

jspiders(function(){
    alert('hello')
});

*/

//------function hiosting---------

/*
sachin();

function sachin(){
    console.log('hey sachin how r u?');

}//called // name function is working


dravid();

var dravid =function()
{
    console.log('hey dravid how r u?');

};//callled //function expression is not working....

*/


//----------10-10-19--------------------


//fat arrow doesnt support 'this'

/*
let users={
    name:'nithin',
    age:20,
    comapny:'Google',
    details:function(){
        console.log(`hii my name is ${this.name} 
        and my age is${this.age} 
        and i work for ${this.comapny}`);
    }
};

users.details();//ES-5 way

//es6 way
let users1={
    name:'nithin',
    age:20,
    comapny:'Google',
    details:()=>{
        console.log(`hii my name is ${this.name} 
        and my age is${this.age} 
        and i work for ${this.comapny}`);
    }
};
users1.details();


*/


//--------ES6 is not support arguments-----------
/*

let numbers=()=>{
    console.log(arguments);
};

numbers(10,10,20,30,50,60);//Es-6 way



let numberES5=function()
{
    console.log(arguments);
};

numberES5(10,10,20,60,30,50);
*/


/*

// -----------rest parameter-----------


let numbers=(...rest)=>{
    console.log(rest);
    console.log(typeof rest);
    console.log(Array.isArray(rest));
};
numbers(10,10,20,30,50);//es6 way this is the array


let es5=function()
{
    console.log(arguments);
    console.log(typeof arguments);
    console.log(Array.isArray(arguments));
};
es5(10,20,30,80,15,10);//Es5 way this is Array like object so this is Showing error

*/
>>>>>>> 245dd805c2ffc4238e30cd817f979ffd4c6d44ed
