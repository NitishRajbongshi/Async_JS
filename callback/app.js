let stocks = {
  Fruits: ["strawberry", "grapes", "banana", "apple"],
  liquid: ["water", "ice"],
  holder: ["cone", "cup", "stick"],
  toppings: ["chocolate", "peanuts"]
};


function order(index, callback) {
    setTimeout(() => {
        console.log(`${stocks.Fruits[index]} was selected`);
        callback();
    }, 2000);
}

// this is the place where callback hell is happening 
function production() {
    setTimeout(()=>{
        console.log("Production has started");
        setTimeout(() => {
            console.log("The fruits have been chopped");
            setTimeout(() => {
                console.log(`Add ${stocks.liquid[0]} and ${stocks.liquid[1]}`);
                setTimeout(() => {
                    console.log("The machine has started");
                    setTimeout(() => {
                        console.log(`${stocks.holder[0]} was selected`);
                        setTimeout(() => {
                            console.log(`${stocks.toppings[0]} was selected`);
                            setTimeout(() => {
                                console.log("Ice cream has served");
                            }, 2000);
                        }, 3000);
                    }, 2000);
                }, 1000)
            }, 1000);
        }, 2000);
    }, 0000);
}

// calling the function with one callback function
order(0, production);
