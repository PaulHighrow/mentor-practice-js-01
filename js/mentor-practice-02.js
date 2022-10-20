//Напиши функцию findSmallerNumber(numbers)
//которая ищет самое маленькое число в массиве
//Добавь проверку что функция получает массив

// const numbers = [1, 5, 35, 56, 12, 24, 7, 80, 3];

// const findSmallerNumber = numbers => {
//     if (Array.isArray(numbers)) {
//         let smallestNumber = numbers[0]
//         for (const number of numbers) {
//             if (number < smallestNumber) {
//                 smallestNumber = number
//             }
//         }
//     return smallestNumber;
//     }
//     return "(numbers) is not array"
// }

// const findSmallerNumberByMath = numbers =>
// Array.isArray(numbers) ? Math.min(...numbers) : "(numbers) is not array";
// // {
// // if (Array.isArray(numbers)) {
//     //     return Math.min(...numbers)
//     // }
//     // return "(numbers) is not array"
// // }

// console.log(findSmallerNumber(numbers));
// console.log(findSmallerNumberByMath(numbers));

//Напишите функцию caclculateAverage()
//которая принимает произвольное количество
//аргументов и возвращает их среднее значение.
//Добавить проверку, что аргументы это числа.

// const calculateAverage = (...args) => {
//     let total = 0;
//     let counter = 0;
//     for (const arg of args) {
//         if (typeof arg === 'number') {
//             total += arg;
//             counter += 1;
//         }
//     }
//     return total / counter;
// }

// const calculateAverage = (...args) => {
//     const filteredArray = args.filter(arg => typeof arg === 'number')
//     return filteredArray.reduce((total, arg) => total += arg, 0) / filteredArray.length;
// };

// const calculateAverage = (...args) => args.filter(arg => typeof arg === 'number').reduce((average, arg, i, arr) => average += arg / arr.length, 0);

// console.log(calculateAverage(1, 2, 3, 4, 5));
// console.log(calculateAverage(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
// console.log(calculateAverage(4, 7, 9, 11, 67, 85));
// console.log(calculateAverage('a', 'b', 'c', 'd', 'e', 5, 3, 4));

/*
  |==============================
  | Напишите ф-цию calcTotalPrice(stones, stonesName),
  |которая принимает массив объектов и
  |строку с названием камня.
  |Функция считает м возвращает общую стоимость камней
  |с таким именем, ценой и количеством из объекта
  |==============================
*/

// const stones = [
//   { name: 'Изумруд', price: 1300, quantity: 4 },
//   { name: 'Бриллиант', price: 2700, quantity: 6 },
//   { name: 'Сапфир', price: 400, quantity: 7 },
//   { name: 'Щебень', price: 150, quantity: 100 },
// ];

// const calcTotalPrice = (stones, stoneName) => stones.filter(({ name }) => name === stoneName).reduce((acc, { price, quantity }) => price * quantity, 0);

// console.log(calcTotalPrice(stones, 'Изумруд'));
// console.log(calcTotalPrice(stones, 'Бриллиант'));
// console.log(calcTotalPrice(stones, 'Сапфир'));
// console.log(calcTotalPrice(stones, 'Щебень'));


/*
  |==============================
  | Создайте объект calculator с тремя методами
  | read(a, b) - принимает два аргумента и сохраняет их как свойства объекта
  | sum() возвращает сумму сохраненных значений
  | mult() перемножает сохраненные значения и возвращает результат
  |==============================
*/

// const calculator = {
//     read(a, b) {
//         this.firstValue = a
//         this.secondValue = b
//     },
    
//     sum() {
//         return this.firstValue && this.secondValue ? this.firstValue + this.secondValue : "Чёт не";
//     },

//     mult() {
//         return this.firstValue && this.secondValue ? this.firstValue * this.secondValue : "Чёт не";
//      },
// }


// console.log(calculator.read(5, 10));
// console.dir(calculator);
// console.log(calculator.sum());
// console.log(calculator.mult());



// class StringBuilder {
//   constructor(initialValue) {
//     this.#value = initialValue;
//   }

  

//   getValue() {
//     return this.#value;
//   }

//   padEnd(str) {
//     this.#value += str;
//   }

//   padStart(str) {
//     this.#value = str + this.#value;
//   }

//   padBoth(str) {
//     this.padStart(str);
//     this.padEnd(str);
//   }

//   #value;
// }
// console.log(StringBuilder);
// const builder = new StringBuilder(".");
// console.log(builder.getValue()); // "."
// builder.padStart("^");
// console.log(builder.getValue()); // "^."
// builder.padEnd("^");
// console.log(builder.getValue()); // "^.^"
// builder.padBoth("=");
// console.log(builder.getValue()); // "=^.^="



// class Car {
  
//   #price;

//   constructor({ price }) {
//     this.#price = price;
//   }

//   get price() {
//     return this.#price;
//   }

//   set price(newPrice) {
//     if (newPrice <= Car.MAX_PRICE) {
//       this.#price = newPrice;
//     }
//   }

//   static MAX_PRICE = 50000;
//   // Change code above this line
// }

// console.log(Car.MAX_PRICE); // 35000

// const audi = new Car({ price: 35000 });

// console.log(audi.price); // 35000

// audi.price = 49000;
// console.log(audi.price); // 49000

// audi.price = 51000;
// console.log(audi.price); // 49000


// const guest = {
//   name: "John",
//   surname: "Smith",
//   date: "12.10.2022",
//   time: "18:00",
// }

// const personell = {
//   name: "John",
//   surname: "Smith",
//   date: "12.10.2022",
// }

// const getFirstName = name => console.log(`Ласкаво просимо, ${name}.`);
// const getLastName = surname => console.log(`Номер заброньовано на прізвище ${surname}.`);
// const getDateTime = (date, time) => console.log(`Обрана дата заселення - ${date} о ${time}.`);

// function registerGuest({ name, surname, date, time }, greet1, greet2, greet3) {
//   console.log(`Реєструємо гостя ${name} ${surname}.`);
//   greet1(name);
//   greet2(surname);
//   greet3(date, time);
// }

// registerGuest(guest, getFirstName, getLastName, getDateTime);

