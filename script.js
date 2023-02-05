// Условие
// Пример 1
// Если переменная num = 5, то выведите 'true' в console.log, иначе выведите 
//'false'.
// let num = 5;
// if(num === 5){
//     console.log(true);
// }else{
//     console.log(false);
// }
// Пример 2
// У вас есть дом. В доме 3 подъезда, в каждом подъезде по 10 квартир.
// 1 подъезд = 1 - 10;
// 2 подъезд = 11 - 20;
// 3 подъезд = 21 - 30;
// При введении номера квартиры в консоль должно выводиться номер подъезда
// Если вводить не существующую квартиру должно выводиться 'нет такой квартиры'
// let number = 100;
// if (number > 0 && number <= 10){
//     console.log('1 подъезд');
// }else if(number > 10 && number <=20){
//     console.log('2 подъезд');
// }else if(number > 20 && number <=30){
//     console.log('3 подъезд');
// }else{
//     console.log('нет такой квартиры');
// }
// Циклы
// Пример 3
// Выведите столбец чисел от 1 до 10.
// let i = 1;
// while(i <= 10){
//     console.log(i);
//     i++;
// }
// Пример 4
// Дан массив с элементами [1,2,3]. C помощью цикла for выведите все 
// эти элементы.
// let arr = [1,2,3];
// for(let i = 0; i < arr.length; i++){
//     console.log(arr[i]);
// }
// Пример 5
// Дан массив с элементами [2,3,4,5]. С помощью цикла for найдите произведение
// элементов этого массива.
// let result = 1;
// let arr = [2,3,4,5];
// for(let i = 0; i < arr.length; i++){
//     result = result * arr[i];
//     // 1*2 = 2
//     //2*3 = 6
//     // 6 * 4 = 24
//     // 24 * 5 = 120
// }
// console.log(result);

// Домашнее задание
// Условия
// Пример 1
// В переменной minute лежит число от 0 до 59. 
// Определите в какую четверть часа попадает это число 
// (в первую, вторую, третью или четвертую).

let minute = -14;
if(minute > 0 & minute <= 15){
    console.log ("Первую");
}else if(minute > 15 & minute <= 30){
    console.log("Вторую");
}else if(minute >30 & minute <= 45){
    console.log("Третью");
}else if(minute > 45 & minute <=59){
    console.log("Четвертую");
}else {
    console.log(" Число не попадает в минутный интервал");
}

// Пример 2
// Переменная lang может принимать 2 значения: 'ru' 'en'. 
// Если она имеет значение 'ru', то в переменную arr 
// запишем массив дней недели на русском языке, 
// а если имеет значение 'en' – то на английском. 
// для ru - arr = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс']
// для en - arr = ['mn', 'ts', 'wd', 'th', 'fr', 'st', 'sn'];

let lang = 'en';
let arr = (lang == 'ru')?['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс']:['mn', 'ts', 'wd', 'th', 'fr', 'st', 'sn'];
console.log (arr);

// Пример 3 
// Напишите код, который предлагает пользователю ввести целое 
// число. Нужно вывести на экран сколько в этом числе цифр, 
// а также положительное оно или отрицательное. Например, 
// "Число " + num + " однозначное положительное". 
// Достаточно будет определить, является ли число однозначным, 
// двузначным или трехзначным и более.
let input = prompt("Введите целое число: ");
    if (input > 0){
        if (String(input).length == 1){
            console.log (`Число ${input} однозначное и положительное` );
        }
        else if (String(input).length == 2){
            console.log (`Число ${input} двухзначное и положительное` );
        
        }else if (String(input).length >= 3){
            console.log (`Число ${input} трехзначное и более положительное` );
        }
    } else {
        if (String(input*-1).length == 1){
            console.log (`Число ${input} однозначное и отрицательное` );
        }
        else if (String(input*-1).length == 2){
            console.log (`Число ${input} двухзначное и отрицательное` );
        
        }else if (String(input*-1).length >= 3){
            console.log (`Число ${input} трехзначное и более отрицательное` );
        }
    };
// Пример 4
// Создаются переменные red и yellow для красного и 
// жёлтого сигналов светофора соответственно.
// В том случае, если переменным red или yellow присвоены 
// значения "нет", горит зелёный сигнал светофора и 
// выводиться сообщение, разрешающее переходить дорогу.
let red = 'нет';
let yello = 'нет';
if (yello == 'нет' || red == 'нет'){
    console.log ('Горит зеленый!');
}else{
    console.log('Горит желтый или красный светофор');
};



// Циклы
// Пример 5
// Выведите столбец чисел от 1 до 12.

for(let i=1;i<=12;i++){
    console.log(i);
};

// Пример 6
// Выведите столбец чисел от 5 до 13.
    for(let y=5; y<=13; y+=2){
        console.log(y);
    }
// Пример 7
// Выведите столбец четных чисел в промежутке от 0 до 16.
for (let t=0; t<=16; t++){
    if(t%2 == 0){
        console.log(t);
    }
}

// Пример 8 
// С помощью цикла найдите сумму чисел arr = [2,5,8,3,6]
let sum = 0;
arr = [2, 5, 8, 3, 6];
for (i=0; i<arr.length; i++){
    sum +=arr[i];
}
console.log(`Сумма чисел равна ${sum}`);


