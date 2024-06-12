let login = "logged in";

if (login) {
    console.log("You are logged in")
} else {
    console.log('You are not logged in')
}

let items = [
    {id: 1, name: "chicken", price: 10},
    {id: 2, name: "eggs", price: 4},
    {id: 3, name: "beef", price: 9},
    {id: 4, name: "milk", price: 3}
];
let cart = [];

console.log("Items Available:")

for (let item of items) {
    console.log(`${item.id}. ${item.name} are $${item.price}`)
}

if (login) {
    cart.push(items[1]);
    cart.push(items[3]);
    console.log("Items added to cart");
} else {
    console.log("Log in to add to cart")
}

console.log(cart)

if (cart.length > 0) {
    let cost = cart.reduce((total, item) => total + item.price, 0);
    console.log("Items in cart:");
    for (let item of cart) {
        console.log(`${item.name} - $${item.price}`);
    }
    console.log(`Total: $${cost}`);
} else {
    console.log("Your cart is empty.");
}






const account = {
    balance: 0,

    deposit: function(amount) {
        if (amount > 0) {
            this.balance += amount;
            console.log(`You have deposited: $${amount}. balance is now: $${this.balance}`)
        } else {
            console.log("must deposit more than 0")
        }
    },
    withdraw: function(amount) {
        if (amount > 0) {
            if (amount <= this.balance) {
                this.balance -= amount;
                console.log(`withdrawn: $${amount} balance is now: $${this.balance}`);
            } else {
                console.log("error, insufficient funds");
            }
        } else {
            console.log("cannot withdraw 0");
        }
    },

    viewBalance: function() {
        console.log(`current balance is: $${this.balance}`);
    }
};


console.log(account.deposit(100)); 
console.log(account.withdraw(20));
console.log(account.viewBalance());
console.log(account.deposit(0)); 
console.log(account.withdraw(0));
