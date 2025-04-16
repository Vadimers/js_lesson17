console.log('#1. Приклад домашнього завдання з JavaScript');

// #1 Змінні
const myNum = 10;
const myStr = 'some string';
const myBool = true;
const myArr = [1, 2, 3, 4, 5];
const myObj = {
    first: 'First Name',
    last: 'Last Name'
};
console.log('myNum:', myNum);
console.log('myStr:', myStr);
console.log('myBool:', myBool);
console.log('myArr:', myArr);
console.log('myObj:', myObj);

// #2 Форматування числа
const decimal2 = myNum.toFixed(2);
console.log('decimal2:', decimal2);

// #3 Інкремент/декремент
let i = 0;
console.log('Початкове i:', i);
console.log('Префіксний інкремент:', ++i);  
console.log('Після префікса:', i);         
console.log('Постфіксний інкремент:', i++); 
console.log('Після постфікса:', i);        
console.log('Префіксний декремент:', --i); 
console.log('Постфіксний декремент:', i--); 
console.log('Кінцеве i:', i); 

// #4 Оператори присвоєння
let myTest = 20;
console.log('Початкове myTest:', myTest);
myTest += myNum;    
console.log('myTest +=:', myTest);
myTest -= 5;        
console.log('myTest -=:', myTest);
myTest *= 2;        
console.log('myTest *=:', myTest);
myTest /= 4;        
console.log('myTest /=:', myTest);
myTest %= 3;        
console.log('myTest %=:', myTest);

// #5 Math об'єкт
const myPi = Math.PI;
const myRound = Math.round(89.279);
const myRandom = Math.floor(Math.random() * 11);
const myPow = Math.pow(3, 5);
console.log('myPi:', myPi);
console.log('myRound:', myRound);
console.log('myRandom (0-10):', myRandom);
console.log('myPow (3^5):', myPow);

// #6 Об'єкт з рядком
const strObj = {
    str: "Мама мыла раму, рама мыла маму",
    length: "Мама мыла раму, рама мыла маму".length
};
console.log('strObj:', strObj);

// #7 Перевірка підрядка
const isRamaPos = strObj.str.indexOf('рама');
const isRama = strObj.str.includes('рама');
console.log('isRamaPos:', isRamaPos);
console.log('isRama:', isRama);

// #8 Заміна підрядка
const strReplace = strObj.str
    .replace('мыла', 'моет')
    .replace('рама', 'Рама')
    .replace('мыла', 'держит');
console.log('strReplace:', strReplace);

// #9 Регістр
const someStr = 'some STRING';
const upperStr = someStr.toUpperCase();
const lowerStr = someStr.toLowerCase();
console.log('upperStr:', upperStr);
console.log('lowerStr:', lowerStr);