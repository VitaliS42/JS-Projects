class Burger {
    constructor(size = "a", stuffing = "a", spiceTopping = false, mayoTopping = false) {
        this.size = prompt('Выберите размер гамбургера:'+
        '\na. Маленький'+ 
        '\nb. Большой', ["a"]);
        this.stuffing = prompt('Выберите начинку гамбургера:'+
        '\na. Сыр'+ 
        '\nb. Салат'+
        '\nс. Картофель', ["a"]);
        this.spiceTopping = confirm('Добавить специй?');
        this.mayoTopping = confirm('Полить майонезом?');
    }

    calculatePrice() { // Узнать цену
        let price = 0;
        if(this.size == "a") {
            price = 50;
        } else {
            price = 100;
        };
        if(this.stuffing == "a") {
            price += 10;
        } else if(this.stuffing == "b") {
            price += 20;
        } else {
            price += 15;
        }
        if(this.spiceTopping == true) {
            price += 15;
        }
        if(this.mayoTopping == true) {
            price += 20;
        }
        return price;
    }
    calculateCalories() { // Узнать калорийность 
        let calories = 0;
        if(this.size == "a") {
            calories = 20;
        } else {
            calories = 40;
        };
        if(this.stuffing == "a") {
            calories += 20;
        } else if(this.stuffing == "b") {
            calories += 5;
        } else {
            calories += 10;
        }
        if(this.mayoTopping == true) {
            calories += 5;
        }
        return calories;
    }
}
let mac = new Burger();

alert (`Ваш бургер будет стоить ${mac.calculatePrice()}, \
в нём ${mac.calculateCalories()} калорий`);
