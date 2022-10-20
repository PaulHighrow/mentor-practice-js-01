// A Narcissistic Number is a positive number which is the sum of its own digits, each raised to the power of the number of digits in a given base. In this Kata, we will restrict ourselves to decimal (base 10).

// For example, take 153 (3 digits), which is narcisstic:

//     1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
// and 1652 (4 digits), which isn't:

//     1^4 + 6^4 + 5^4 + 2^4 = 1 + 1296 + 625 + 16 = 1938
// The Challenge:

// Your code must return true or false (not 'true' and 'false') depending upon whether the given number is a Narcissistic number in base 10. This may be True and False in your language, e.g. PHP.

// Error checking for text strings or other invalid inputs is not required, only valid positive non-zero integers will be passed into the function.


// function narcissistic(value) {
//     let sum = 0;
//     const exp = value.toString().length;
//     const digits = value.toString().split('');
//     digits.forEach(digit => sum += Math.pow(digit, exp));
//     return sum === value;
// }

// narcissistic(153);
// narcissistic(1652);

// const students = [
//     'Миронюк Софія Богданівна, студентка 2 курсу програми «Етика - Політика - Економіка»',
//     'Зюбровська Юлія Євгенівна, студентка 3 курсу програми «Етика - Політика - Економіка»',
//     'Микитчин Ольга Володимирівна, студентка 4 курсу програми «Соціальна робота»',
//     'Даньчак Марія Любомирівна, студентка 4 курсу програми «Історія та археологія»',
//     'Павлусик Олена Василівна, студентка 3 курсу програми «Культурологія»',
//     'Дудич Юліянія Андріївна, студентка 4 курсу програми «Філологія»',
//     'Булига Вікторія, студентка 2 курсу програми «Етика - Політика - Економіка»',
//     'Римська Христина, студентка 1 курсу програми «Культурологія»',
//     'Дмитришин Христина Романівна, студентка 3 курсу програми «Етика - Політика - Економіка»',
//     'Ісайович Анастасія Ігорівна, студентка 2 курсу програми «Соціальна робота»',
//     'Тузяк Галина Володимирівна, студентка	2 курсу програми «Етика - Політика - Економіка»',
//     'Колмик Дарина Юріївна, студентка 4 курсу програми «Соціологія»',
//     'Литвинів Аліна Михайлівна, студентка 3 курсу програми «Філологія»',
//     'Комар Марта Степанівна, студентка 2 курсу програми «Богословя»',
//    'Баран Надія Олегівна, студентка 3 курсу програми «Соціальна робота»',
//     'Чорна Анастасія Тарасівна, студентка 3 курсу програми «Психологія»',
//     'Деліта Мирослава Олександрівна, студентка 1 курсу програми «Право»',
//     'Ковбаснюк Марія Ярославівна, студентка 2 курсу програми «Соціальна робота»',
//     'Раб Іванна - Таміла Володимирівна, студентка 3 курсу програми «Право»'
// ]

// const sortStudents = students => students.sort((firstStudent, secondStudent) => firstStudent.localeCompare(secondStudent));

// console.log(sortStudents(students));