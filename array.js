var lang=['java','python','ruby','reactjs','mongodb'];



//--foreach only works with array..

lang.forEach(function(item)
{
console.log(item);    
});

/*

//---for loop

for(var i=0;i<lang.length;i++){
    console.log(lang[i]);
}

//---spread operator

 var str='hello javascript';

 [...str].forEach(function(item){
     console.log(item);
 });

// for each to get value index array

 lang.forEach(function(value,index,array)
 {
     console.log(value);
     console.log(index);
     console.log(array);
 });

 //for of loop


 for(let x of lang)
 {
     console.log(x);
 }

 for (let z of lang)
 {
     console.log(z);
     document.write(z+'<br>');
 }


 // for of loop for string

 var str1='hello node js';
console.log(typeof y);

 for (let y of str1)
 {
     console.log(typeof y);
     console.log(y);

 }

*/

/*

// --- pop operation -- delete only last index elements

var pop=lang.pop();
const length=lang.length;
console.log(pop);
console.log(length);   //---its showing 5 elements

// -- delelte opa -- it delete  elements but empty space is remaining
delete lang[4];
const length2=lang.length;
console.log(length2);  //its showing 6 elements including one empty space
console.log(lang);

*/




