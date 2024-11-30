//Через функцію конструктор створити об'єкт People з полями: name, f_name, old, isMarried, hasPossition, children Вивести об'єкт в консоль.
console.log('1. Через функцію конструктор створити обєкт People з полями:name, f_name, old, isMarried, hasPossition, children. Вивести обєкт в консоль.');
function People() {
    this.name = 'Yaroslav'
    this.f_name = 'Filatov'
    this.old = 30
    this.isMarried = true
    this.hasPossition = 'student'
    this.children = false
}
console.log(new People());
//Через прототайп створити власні методи масивів: filter, find, includes, join, slice
console.log('2. Через прототайп створити власні методи масивів: filter, find, includes, join, slice');
let arr = [1, 2, 3, true, null, 'hello'];
console.log(arr);
//filter
Array.prototype.myFilter = function(cb) {
    for(let i = 0; i < this.length; i++) {
        if(cb(this[i], i, this)) {
            return this[i]
        }
    } return undefined;
}
const f1 = arr.myFilter(el => el > 2);
console.log('filter', f1);
// find
Array.prototype.myFind = function(cb) {
    for(let i = 0; i < this.length; i++) {
        if(cb(this[i], i, this)) {
            return this[i];
        } 
    } return undefined;
}
const f2 = arr.myFind(el => el === true);
console.log('find', f2);
//includes
Array.prototype.myIncludes = function(el) {
    for(let i = 0; i < this.length; i++) {
        if(this[i] === el) {
            return true;
        }
    } return false;
}
const f3 = arr.myIncludes(null);
console.log('includes', f3);
//join
Array.prototype.myJoin = function(sep = ',') {
    let res = ''
    for(let i = 0; i < this.length; i++) {
        res += this[i];
        if(i < this.length - 1) {
            res += sep;
        }
    } return res;
}
const f4 = arr.myJoin('. ');
console.log('join', f4);
//slice
Array.prototype.mySlice = function(start = 0, end = this.length) {
    let resultat = [];
    for(let i = start; i < end; i++) {
        resultat.push(this[i]);
    } return resultat;
}
const f5 = arr.mySlice(1, 5);
console.log('slice', f5);
//Через функцію конструктор створити об'єкт Car з полями: name, model, year, isNew, cost, wheels Вивести об'єкт в консоль.
console.log('3. Через функцію конструктор створити обєкт Car з полями:name, model, year, isNew, cost, wheels Вивести обєкт в консоль.');
function Car(name = '', model = '', year = 0, isNew = false, cost = 0, wheels = 0) {
    this.name = name
    this.model = model
    this.year = year
    this.isNew = isNew
    this.cost = cost
    this.wheels = wheels
}
const car1 = new Car('Nissan', 'Rogue', 2020, true, 12, 18);
console.log(car1);
//Через функцію конструктор створити об'єкт Animal, створити мінімум 3 поля, та додати через прототайп поведінку для об'єкту (мінімум 2 методи).
console.log('4. Через функцію конструктор створити обєкт Animal, створити мінімум 3 поля,та додати через прототайп поведінку для обєкту (мінімум 2 методи).');
function Animal(cat = '', squirrl = '', fox = '') {
    this.cat = cat
    this.squirrl = squirrl
    this.fox = fox
}
Animal.prototype.run = function() {
    console.log('animal run');
}
Animal.prototype.thereAre = function() {
    console.log('animal there are');
}
const ani1 = new Animal('cat', 'squirrl', 'fox')
console.log(ani1)
ani1.run()
ani1.thereAre()
//Створити об'єкт Dog, через прототип унаслідувати поведінку від об'єкту Animal та додати власну поведінку (мінімум 2 методи).
console.log('5. Створити обєкт Dog, через прототип унаслідувати поведінку від обєкту Animal та додати власну поведінку (мінімум 2 методи).');
function Dog(dog = '', color = '', age = '') {
    this.dog = dog
    this.color = color
    this.age = age
}
Dog.prototype = {...Animal.prototype}
const doge = new Dog('Funky', 'grey', 7);
Dog.prototype.sleeping = function() {
    console.log('dog sleeping');
}
Dog.prototype.playing = function() {
    console.log('dog playing');
}
console.log(doge);
doge.sleeping()
doge.playing()

