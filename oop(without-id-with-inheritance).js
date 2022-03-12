class Cookie {
    constructor(name, price, ingredients, type) {
        this.name = name;
        this.price = price;
        this.ingredients = ingredients;
        this.type = type; // by default
    }
}

// Children Class
class Chocolate extends Cookie {
    constructor(name, price, ingredients, type, isSweet) {
        super(name, price, ingredients, type);
        this.isSweet = isSweet
    }
}
class Sweet extends Cookie {
    constructor(name, price, ingredients, type, isSweet) {
        super(name, price, ingredients, type);
        this.isSweet = isSweet
    }
}
class Strawberry extends Cookie {
    constructor(name, price, ingredients, type, isSweet) {
        super(name, price, ingredients, type);
        this.isSweet = isSweet
    }
}
const coklat = new Chocolate("Chocolate Cake", 1500, ['coklat','gula'], "cake", "False")
const manis = new Sweet("Cotton Candy", 2500, ['gula','pewarna'], "candy", "False")
const stroberi = new Strawberry("Strawberry Cake", 5000, ['tepung terigu','gula','stroberi'], "cake", "False")

// console.log(coklat)
// console.log(manis)
// console.log(stroberi)

// Factory Class => Class yang lebih berfokus terhadap method
// CRUD => Create Read Update Delete

class Kitchen {
    constructor(cake) {
        this.cake = cake || [];
    }
    bake(cookie) {
        this.cake.push(cookie);
    }
    showCookies() {
        console.log("List Cookies:")
        this.cake.forEach((kue,i) => {
            console.log(`${i+1}. ${kue.name}, price: ${kue.price}, ingredients: ${kue.ingredients}, type: ${kue.type}, Sweet: ${kue.isSweet}`)
        })
    }
    eat(cookiesName){
        this.cake = this.cake.filter(kue => kue.name !== cookiesName)
        console.log(`(History Log : ${cookiesName} has been eaten) \n`)
    }
    editCookies(cookiesName, isSweet){
        this.cake = this.cake.map(kue => {
            if(kue.name === cookiesName){
                kue.isSweet = isSweet
            }
            return kue
        })
        console.log(`(History Log : ${cookiesName} has been updated) \n`)
    }
    addSugar(cookiesName) {
        this.cake = this.cake.map(kue => {
            if (kue.name === cookiesName) {
                if (kue.isSweet === 'False') {
                    kue.isSweet = 'True'
                } else if (kue.isSweet === 'True') {
                    kue.isSweet = 'False'
                }
            }
            return kue
        })
    }
}

// cookies.cake // berisi array of instances
const kitchen = new Kitchen();

kitchen.bake(coklat)
kitchen.bake(manis)
kitchen.bake(stroberi)
// console.log(kitchen.cake)
kitchen.eat("Chocolate Cake")
// kitchen.editCookies("Cotton Candy", "True")
kitchen.addSugar("Strawberry Cake")
kitchen.showCookies()