//===========================================================بخش اول===================================================//


// انواع خروجی انواع
// انواع خروجی انواع

// document.getElementById("output").innerHTML = 10;
// document.write(9);
// alert(5);
// console.log(2);
 

//array
// let numbers = [3,1,4,5];
// console.log(numbers);
// numbers[2] = 9;
// console.log(numbers);


//object
// person = {
//     name: "elahe",
//     age: 38,
//     address :{
//         country : "iran",
//         city : "tehran"
//     },
//     hobbies :["watching movies","learning"]

// }
// console.log(person);
// console.log(person.address.city);
// console.log(person.hobbies[1]);


//function
// function sayHello(name){
//     console.log("hello " + name);
// }
// sayHello("eli");
//-----------------------------------------

//return
// function sqaure(num){
//        return num*num;
// }
// let nu = sqaure(5);
// console.log(nu);
// console.log(sqaure(7));
//-----------------------------------------

//normal assign for array
// let num=[1,2,3];
// let anum;
// anum = Object.assign([],num);
// anum[2] = 4;
// console.log(num);
// console.log(anum);

//normal assign for object
// let person={name:"mahdi"};
// let aperson;
// aperson = Object.assign({},person);
// aperson.name="bahram";
// console.log(person);
// console.log(aperson);
//-----------------------------------------

//template string
// let name = "elahe";
// let result = `my name is ${name}`;
// console.log(result);


//string
// let result;
//  name = "elahe";
//  str = "my name is elehe";
//  result = name.length;
//  result = name.toLowerCase();
//  result = name.toUpperCase();
//  result = name[2];
//  result = name.length;
//  result = name[name.length - 1];
//  result = name.indexOf('h');
//  result = str.split(" ");
//  result = name.replace("el","am");
//  result = name.includes("el");
// console.log(result);
//-----------------------------------------

//switch
// let num = 1;
// switch(num){
//     case 1:
//     alert("yes");
//     break;
//     case 2:
//     alert("no");
//     break;
//     case 3:
//     alert("nooo");
// }
//-----------------------------------------

//loop1 >> while
// let i = 0;
// while(i < 5){
//     console.log(i);
//     i++;
// }


//اعداد فرد کوچکتر از 50
// let i = 0 ;
// while (i < 50){
//     if (i % 2 !== 0){
//         console.log(i);
//     }
//     i++;
// }


//loop2 >> for
// for(i=0 ; i<50 ; i++){
//     if (i %2 !== 0){
//         console.log(i);
//     }
// }
//-----------------------------------------

//نمایش محتوای ارایه 
// let arr = [1,2,3,4,5];
// for(let i=0 ; i < arr.length ; i++){
//     console.log(arr[i]);
// }


//  نمایش محتوای ارایه به روش  جاوااسکریپت روش اول 
// let numbers = [2,4,6,8];
// for(let number of numbers){
//     console.log(number);
// }


//  نمایش محتوای ارایه به روش  جاوااسکریپت روش دوم 
// let numbers = [2,4,6,8];
// for(let number in numbers){
//     console.log(`${number}:${numbers[number]}`);
// }
//-----------------------------------------


//  نمایش محتوای object به روش  جاوااسکریپت 
// let person = {
//     name : "eli",
//     age : 25 ,
//     country : "tehran"
// }

// for (let pkey in person){
//     console.log(`${pkey} : ${person[pkey]}`)
// }
//-----------------------------------------


//array
// let numbers = new Array(-5,-10,1,2,3);
// let numbers2 = new Array(4,5,3);
// let result;
//  result = numbers.length;
//  result = numbers.indexOf(3);
//   numbers.push(150); 
// numbers.pop();
// numbers.unshift(3);
// numbers.shift();
// numbers.splice(1,0,100);
// numbers.splice(1,2);
// result = numbers.concat(numbers2);
// result = numbers2.sort((x,y) => x - y) ;
// result = numbers.filter((x) => x > 0) ;

// result = numbers.map((x) => `<li> ${x} <li>`);
// result = `<ul> ${result.join(" ")} </ul>`;

// result = numbers
// .filter((x) => x > 0)
// .map((x) => `<li> ${x} <li>`);

// result = numbers.reduce( (x,y) => x+y)

// console.log(numbers);
// console.log(result);
//-----------------------------------------


//rest
// function sum(...result){
//     let sum = 0;
//     for (let i of result){
//         sum += i;
//     }
//   return sum;
// }
// console.log(sum(1,2,3,4))
//-----------------------------------------


//objectروش قدیمی
// function Person(fName,lName){
//   this.firstName = fName;
//   this.lastName = lName;

//   this.getFullName = function(){
//       return `${this.firstName} ${this.lastName}` 
//   }

// }

// let eli = new Person("eli","giti");
// let ali = new Person("ali","saly");

// console.log(eli.firstName);
// console.log(ali.lastName);
// console.log(ali.getFullName());


//-----------------------------------------
//objectروش جدید
// class Person{
//     constructor(fName, lName, age){
//         this.firstName = fName;
//         this.lastName = lName;
//         this.age = age;
//     }

//     sayHello(){
//         return(`${this.firstName} ${this.lastName} ${this.age}`)
//     }
// }

// let eli = new Person("eli","giti","33");
// let ali = new Person("ali","sisi","65");

// console.log(eli);
// console.log(eli.firstName);
// console.log(ali.sayHello());

//-----------------------------------------
//وراثت
// class Animal{
//  constructor(fName, lName){
//      this.firstName = fName;
//      this.lastName = lName;
//  }

//     eat(){
//         console.log(`${this.firstName} ${this.lastName} is eating`)
//     }
//     walk(){
//         console.log(`${this.firstName} ${this.lastName} is walking`)
//     }
// }

// class Dog extends Animal{
//     constructor(fName, lName){
//         super(fName, lName);
// }
// }

// class Cat extends Animal{
//     constructor(fName, lName, age, color){
//         super(fName, lName);
//         this.cAge = age;
//         this.cColor = color;
// }

//     meww(){
//         console.log("meww");
//     }
// }

// let myDog = new Dog("tt","gg");
// let myCat = new Cat("tt","gg", 22, "brown");
// console.log(myDog);
// console.log(myCat);
// console.log(myCat.meww());
//-----------------------------------------

//Date
// const birthday = new Date(1985, 10, 3, 17, 35, 24);
// console.log(birthday.getFullYear());
// console.log(birthday.getMonth());
// console.log(birthday.getDate());
// console.log(birthday.getDay());
// //getDay روز هفته
// console.log(birthday.getHours());
// console.log(birthday.getMinutes());
// console.log(birthday.getSeconds());
// console.log(birthday.getTime());
//بر حسب میلی ثانیه از ژانویه 1970
//-----------------------------------------

//مقایسه دو تاریخ
// const birthday = new Date(1985, 10, 3, 17, 35, 24);
// const birthday1 = new Date(1985, 10, 3, 17, 35, 24);

// if(birthday.getTime() == birthday1.getTime()){
//     console.log("same")
// } else
// {
//     console.log("not same")
// }

//----------------------------------------------
//استفاده از کتابخانه تاریخ
// const myDate = dayjs();
// console.log(myDate.format("YYYY/M/D h:mm A"));


//===========================================================بخش دوم===================================================//

//window

// const result = window.console.log("hello");
// console.log(result);

// const result = window.alert("hello");
// console.log(result);

// const result = window.prompt("enter a number");
// console.log(result);

// let result
// if(window.confirm("are you sure")){
//      result = "yes"
// }else{
//      result = "no"
// }
// console.log(result);

// let result = window.location;
// console.log(result);

// let result = window.navigator;
// console.log(result);

// let result = window.navigator.appName;
// console.log(result);

// result = window.document;
// console.log(result);
//----------------------------------------------

//حرکت در DOM
//این بخش اچ تی ام ال هم دارد

// const a = document.getElementById('book-list');
// console.log(a);

// const a = document.getElementsByClassName('name');
// console.log(a);
// console.log(a[1]);

// const a = document.getElementsByTagName('li');
// console.log(a);
// console.log(a[1]);
// for(let i of a){
//     console.log(i);
// }

// const a = document.querySelectorAll('#book-list li .name')[2];
// console.log(a);


// const list = document.querySelector('ul');
// result = list.children;
// console.log(list);
// console.log(result);

// result = list.children[2];
// console.log(result);

// result = list.children[2].children;
// console.log(result);

// result = list.firstElementChild;
// console.log(result);

// result = list.lastElementChild;
// console.log(result);

// result = list.childElementCount;
// console.log(result);

// const test = document.querySelector('li');
// const result = test.parentElement;
// const result2 = test.parentElement.parentElement;
// console.log(result);
// console.log(result2);

// result = list.children[2].children[0];
// console.log(result);

// const list = document.querySelector('li');
// console.log(list);

// const list = document.querySelectorAll('li');
// console.log(list);


// const heading = document.createElement ('h2');
// heading.className = 'test';
// heading.id = "myId";
// heading.setAttribute('attr','attrVal');
// heading.className += ' newClass'
// console.log(heading);

// heading.innerHTML = 'hello';
// heading.innerHTML = `
// <ul><li>test</li></ul>
// `

// heading.appendChild(document.createTextNode('hello'));
// const ul = document.createElement('ul');
// const li1 = document.createElement('li');
// const li2 = document.createElement('li');
// li1.appendChild(document.createTextNode('mahdi'));
// li2.appendChild(document.createTextNode('kamn'));
// ul.appendChild(li1);
// ul.appendChild(li2);
// console.log(ul);

// const newHeading = document.createElement('h1');
// newHeading.className = 'title';
// newHeading.innerHTML = 'لیست کتابها';
// const oldHeading = document.querySelector('h1');
// const parentHeading = oldHeading.parentElement;
// parentHeading.replaceChild(newHeading, oldHeading);


// const li = document.querySelectorAll('li')[2];
// li.remove();

// const ul = document.querySelector('ul');
// ul.children[2].remove();

//----------------------------------------------
//addEventListener mouse

// document.querySelector('.button2').addEventListener('click', function(e){
//     console.log("hello");
//     e.preventDefault();
//     console.log(e.target);
//     console.log(e.type);
// });

// document.querySelector('.button2').addEventListener('dblclick', function(e){
//     console.log("dblclick");
//     e.preventDefault();
// });

// document.querySelector('.button2').addEventListener('mousedown', function(e){
//     console.log("mousedown");
//     e.preventDefault();
// });

// document.querySelector('.button2').addEventListener('mouseup', function(e){
//     console.log("mouseup");
//     e.preventDefault();
// });

// document.querySelector('.button2').addEventListener('mouseenter', function(e){
//         console.log("mouseenter");
//         e.preventDefault();
//     });

// document.querySelector('.button2').addEventListener('mouseout', function(e){
//     console.log("mouseout");
//     e.preventDefault();
// });

// document.querySelector('.button2').addEventListener('mousemove', function(e){
//     console.log("mousemove");
//     e.preventDefault();
// });


//نمایش مختصات موس بجای کتابهای اخیر
// const heading = document.querySelector('#book-list h1');
// document.body.addEventListener('mousemove' , function(e){
//     heading.innerHTML = `mouseX : ${e.offsetX}, mouseY : ${e.offsetY}`;
//     e.preventDefault();
// })

//----------------------------------------------
//دریافت نام کتابهای اضافه شده از اینپوت و نمایش در کنسول
// const link = document.querySelector('.button2');
// const inputText = document.querySelector('#add-book input');

// link.addEventListener('click', function(e){
//     console.log(inputText.value);
//     inputText.value= ' ';
//     e.prevantDefault;
// });

//----------------------------------------------
//مخفی و ظاهر کردن لیست با کلیک روی چک باکس

// const heading = document.querySelector('#book-list h1');
// const checkbox = document.querySelector('#hide input');
// const ul = document.querySelector('ul');
// checkbox.addEventListener('change', function(e){
//     if(checkbox.checked){
//         heading.style.display = 'none';
//         ul.style.display = 'none';
//     }else{
//         heading.style.display = 'block';
//         ul.style.display = 'block';
//     }
// });
//----------------------------------------------
//===========localStorage===============
// localStorage.setItem('mahdi', 'kazemi');
// const name = localStorage.getItem('mahdi');
// console.log(name);

// localStorage.removeItem('mahdi');
// localStorage.clear();

//===========localStorage array===========
// const arr = ['mahdi1', 'mahdi2'];
// const obj = {name : 'mahdi', age : 30};
// localStorage.setItem('array', arr);
// const myArray = localStorage.getItem('array').split(',');
// console.log(myArray);

//===========localStorage object===========
// const obj = {name:"mahdi", age:30 };
// localStorage.setItem('object', JSON.stringify(obj));
// const myObject = JSON.parse(localStorage.getItem('object'));
// console.log(myObject);

//===========================================================بخش سوم===================================================//
