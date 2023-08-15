// //ES6-Destructuring-Assignment

// //....................Array Destructuring....................
console.log('-----Array Destructuring-----'); 

let arr = [1,2,3];
let [one,two,three] = arr
console.log(two); //2
console.log(three+two); //5

//by Function
let b = ()=>{
    return[1,2,3];
}
let[een,twee,dree] = b();
console.log(dree); //2



// Example 2
console.log('-----Example 2'); 

let A, B, C = 4, D = 8;
[A, B = 7] = [2];

console.log(A); //2
console.log(B); //6
console.log(C); //4
console.log(D); //8

[C,D] = [D,C]


console.log('-----C,D >><< D,C'); 
console.log(C); //8
console.log(D); //4



// //....................Object Destructuring....................
console.log('-----Object Destructuring-----');

let obj1 = {h:100, s:true};
let {h,s} = obj1;
console.log(h); //100
console.log(s); //true



// Example 2 ... تخصیص بدون اعلام نیاز به الزامات دستوری دارد
console.log('-----Example 2'); 

let e, f;
({e,f} = {e:'Hi', f:'Dear'});
console.log(e +" "+ f);


// Example 3 ... 
console.log('-----Example 3'); 

let{g,i} = {g:'Hello', i:'Ehsan'};
console.log(g +" "+ i);


// Example 4 ... اختصاص مقدار ابجکت به متغییرهای جدید
console.log('-----Example 4'); 

var o = {k:42, l:true};
var {k:foo , l:bar} = o;
//   console.log(k)  //Error
console.log(foo) //42

// Example 5 ... اختصاص مقادیر پیش فرض به متغییر، اگر مقدار باز شده از ابجکت تعریف شده باشد
console.log('-----Example 5'); 

var obj2 = {id:42, name:'Jack'};
let{id=10, age=20} = obj2;
console.log(id); //42
console.log(age); //20
