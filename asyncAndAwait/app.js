let stocks = {
  Fruits: ["strawberry", "grapes", "banana", "apple"],
  liquid: ["water", "ice"],
  holder: ["cone", "cup", "stick"],
  toppings: ["chocolate", "peanuts"],
};

const is_shop_open = true;

function time(ms) {
    return new Promise((resolve, reject) => {
        if(is_shop_open) {
            setTimeout(resolve, ms);
        }
        else {
            reject(console.log("Shop is closed"));
        }
    })
}

async function kitchen() {
    try {
        await time(2000);
        console.log(`${stocks.Fruits[0]} has selected`);

        await time(0000);
        console.log("Production has started");

        await time(2000);
        console.log("The fruits have been chopped");

        await time(1000);
        console.log(`Add ${stocks.liquid[0]} and ${stocks.liquid[1]}`);

        await time(1000);
        console.log("The machine has started");

        await time(2000);
        console.log(`${stocks.holder[0]} was selected`);

        await time(3000);
        console.log(`${stocks.toppings[0]} was selected`);
 
        await time(2000);
        console.log("Ice cream has served");
    }
    catch {
        console.log("Customer left");
    }
    finally {
        console.log("Day ended");
    }
}

kitchen();