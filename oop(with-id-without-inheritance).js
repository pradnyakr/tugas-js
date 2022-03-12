class Cookies {
    constructor(id, name, price, ingredients, type, isSweet) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.ingredients = ingredients;
        this.type = type;
        this.isSweet = isSweet;
    }
}


class Kitchen {
    constructor(cakes) {
        this.cakes = cakes;
    }
    showCookies() {
        console.log("Cookies List:")
        this.cakes.forEach((cake,i) => {
            console.log(`${cake.id}. Name: ${cake.name}, Price: ${cake.price}, Ingredients: ${cake.ingredients}, Type: ${cake.type}, Sugar: ${cake.isSweet}`);
        })
    }
    bake(task, price, ingredients, type) {
        let id;
        if (this.cakes.length === 0) {
            id = 1;
        } else {
            id = this.cakes[this.cakes.length - 1].id + 1;
        }
        let todo = new Cookies(id, task, price, ingredients, type, "False")
        this.cakes.push(todo)
    }
    updateCookies(id, name) {
        this.cakes = this.cakes.map(cake => {
            if (cake.id === id) {
                cake.name = name
            }
            return cake
        })
    }
    eat(id) {
        // ES5
        // let tempArray = []
        // for(let i = 0; i < this.cakes.length; i++) {
        //     if(this.cakes[i].id !== id) {
        //         tempArray.pus h(this.cakes[i])
        //     }
        // }
        // this.cakes = tempArray
        //ES6
        this.cakes = this.cakes.filter(cake => cake.id !== id)
    }
    addSugar(id) {
        this.cakes = this.cakes.map(cake => {
            if (cake.id === id) {
                if (cake.isSweet === 'False') {
                    cake.isSweet = 'True'
                } else if (cake.isSweet === 'True') {
                    cake.isSweet = 'False'
                }
            }
            return cake
        })
    }
}
const cake = new Kitchen([])

cake.bake("Chocolate Cake", 1500, ["coklat","tepung terigu"], "cake")
cake.bake("Strawberry Cake", 1500, "coklat", "cake")
cake.eat(2)
// cake.updateCookies(1, "Kue Coklat")
cake.addSugar(1)
// cake.addSugar(2)
cake.showCookies()