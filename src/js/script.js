'use strict'

let sType = prompt("Тип сайта: 1 - Визитка. 2 - Интернет магазин. 3 - Корпоративный сайт ","");
let design = prompt("Дизайн: 1 - Классический. 2 - Минимализм. 3 - Флэт","");
let adaptive = prompt("Адаптивность: 1 - Адаптивный. 2 - Не адапивный","");
let price = parseInt(sType);
let priceD = parseInt(design);
let priceA = parseInt(adaptive);

switch(price){
    case 1:
        price = 1000;
        console.log(price);
        break;
    case 2:
        price = 2000;
        console.log(price);
        break;
    case 3:
        price = 3000;
        console.log(price);
        break;
};
switch(priceD){
    case 1:
        priceD = 2000;
        console.log(priceD);
        break;
    case 2:
        priceD = 1000;
        console.log(priceD);
        break;
    case 3:
        priceD = 3000;
        console.log(priceD);
        break;
};
switch(priceA){
    case 1:
        priceA = 3000;
        console.log(priceA);
        break;
    case 2:
        priceA = 1000;
        console.log(priceA);
        break;
};
alert("Стоимость: "+(price + priceD + priceA)+"!");
