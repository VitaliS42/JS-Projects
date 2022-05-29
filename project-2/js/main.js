class ProductList{
    constructor(container='.products'){
        this.container = container;
        this.goods = [];
        this._fetchProducts();//рекомендация, чтобы метод был вызван в текущем классе
        this.render();//вывод товаров на страницу
    }
    _fetchProducts(){
        this.goods = [
            {id: 1, title: 'Notebook', price: 2000},
            {id: 2, title: 'Mouse', price: 20},
            {id: 3, title: 'Keyboard', price: 200},
            {id: 4, title: 'Gamepad', price: 50},
        ];
    }
    
    render(){
        const block = document.querySelector(this.container);
        for(let product of this.goods){
            const item = new ProductItem(product);
            block.insertAdjacentHTML("beforeend",item.render());
             // block.innerHTML += item.render();
        }
    }

    totalCount(){ // метод, считающий сумму всех стоимостей товаров
        let totalAmount = 0;
        for(let i = 0; i < this.goods.length; i++) {
            totalAmount += this.goods[i].price;
        }
        return totalAmount;
    }
}

class ProductItem{
    constructor(product,img='https://via.placeholder.com/200x150'){
        this.title = product.title;
        this.id = product.id;
        this.price = product.price;
        this.img = img;
    }
    render(){
            return `<div class="product-item">
                <img src="${this.img}">
                <h3>${this.title}</h3>
                <p>${this.price}</p>
                <button class="buy-btn">Купить</button>
            </div>`
    }
}

class Basket { // класс корзины
    constructor()

    render(){} // отрисовывает корзину
    clear(){} // удалить все товары из корзины
    makeOrder(){} // сделать заказ (наверно как то будет связан с clear)
    countSum(){} // посчитать общуюю стоимость корзины
}

class BasketItem { // класс товара в корзине
    constructor()

    render(){} // отрисовывает товар в корзине
    remove(){} // удалить товар из корзины
    increaseQuantity(){} // увеличить количество товара в корзине
    decreaseQuantity(){} // уменьшить количество товара в корзине
    countSum(){} // посчитать стоимость товара с учетом количества
}

let list = new ProductList();


//const products = [
//    {id: 1, title: 'Notebook', price: 2000},
//    {id: 2, title: 'Mouse', price: 20},
//    {id: 3, title: 'Keyboard', price: 200},
//    {id: 4, title: 'Gamepad', price: 50},
//];
//
//const renderProduct = (product,img='https://placehold.it/200x150') => {
//    return `<div class="product-item">
//                <img src="${img}">
//                <h3>${product.title}</h3>
//                <p>${product.price}</p>
//                <button class="buy-btn">Купить</button>
//            </div>`
//};
//const renderPage = list => document.querySelector('.products').innerHTML = list.map(item => renderProduct(item)).join('');
//
//renderPage(products);