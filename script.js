console.log('#3. JavaScript homework example file');

// #1
const userObj = {
  firstName: 'Іван',
  lastName: 'Шевченко',
  age: 30,
  fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};
console.log(userObj);

// #2
console.log(userObj.fullName()); // 'Іван Шевченко'

// #3
function defUpperStr(str) {
  return (str || 'default text').toUpperCase();
}
console.log(defUpperStr('My text')); // 'MY TEXT'
console.log(defUpperStr()); // 'DEFAULT TEXT'

// #4
function evenFn(n) {
  const res = [];
  for (let i = 1; i <= n; i++) {
    if (i % 2 === 0) res.push(i);
  }
  return res;
}
console.log(evenFn(10));
console.log(evenFn(15));
console.log(evenFn(20));

// #5
function weekFn(n) {
  switch (n) {
    case 1: return 'Понеділок';
    case 2: return 'Вівторок';
    case 3: return 'Середа';
    case 4: return 'Четвер';
    case 5: return 'Пʼятниця';
    case 6: return 'Субота';
    case 7: return 'Неділя';
    default: return null;
  }
}
console.log(weekFn(1));
console.log(weekFn(3));
console.log(weekFn(7));
console.log(weekFn(9));
console.log(weekFn(1.5));
console.log(weekFn('2'));

// #6
function ageClassification(n) {
  return n < 0 || n > 122 ? null :
         n <= 24 ? 'Дитинство' :
         n <= 44 ? 'Молодість' :
         n <= 65 ? 'Зрілість' :
         n <= 75 ? 'Старість' :
         n <= 90 ? 'Довголіття' :
         'Рекорд';
}
console.log('     1 :', ageClassification(1));
console.log('   122 :', ageClassification(122));
console.log('122.01 :', ageClassification(122.01));

// #7
function oddFn(n) {
  const res = [];
  let i = 1;
  while (i <= n) {
    if (i % 2 !== 0) res.push(i);
    i++;
  }
  return res;
}
console.log(oddFn(10));
console.log(oddFn(15));
console.log(oddFn(20));

// #8
function mainFunc(a, b, cb) {
  return typeof cb === 'function' ? cb(a, b) : false;
}

function cbRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function cbPow(num, pow) {
  return Math.pow(num, pow);
}

function cbAdd(a, b) {
  return a + b;
}

console.log(mainFunc(2, 5, cbRandom)); // випадкове між 2 і 5
console.log(mainFunc(2, 5, cbPow));    // 32
console.log(mainFunc(2, 5, cbAdd));    // 7
console.log(mainFunc(2, 5, 'not a func')); // false
