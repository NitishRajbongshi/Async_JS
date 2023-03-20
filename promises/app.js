let stocks = {
    Fruits: ["strawberry", "grapes", "banana", "apple"],
    liquid: ["water", "ice"],
    holder: ["cone", "cup", "stick"],
    toppings: ["chocolate", "peanuts"]
  };

  const is_shop_open = false;

  // implement the relation between time and work
  const order = (time, work) => {
    return new Promise((resolve, reject) => {
        if(is_shop_open) {
            setTimeout(() => {
                resolve(work());
            }, time);
        }
        else {
            reject(console.log("Shop is closed"));
        }
    });
  }

  // implement of promises
  order(2000, () => {console.log(`${stocks.Fruits[0]} has selected`)})
  .then(() => {
    return order(0000, () => {console.log("Production has started")})
  })
  .then(() => {
    return order(2000, () => {console.log("The fruits have been chopped");})
  })
  .then(() => {
    return order(1000, () => {console.log(`Add ${stocks.liquid[0]} and ${stocks.liquid[1]}`);})
  })
  .then(() => {
    return order(1000, () => {console.log("The machine has started");})
  })
  .then(() => {
    return order(2000, () => {console.log(`${stocks.holder[0]} was selected`);})
  })
  .then(() => {
    return order(3000, () => {console.log(`${stocks.toppings[0]} was selected`);})
  })
  .then(() => {
    return order(2000, () => {console.log("Ice cream has served");})
  })
  .catch((error) => {
    console.log("Buyer has returned sadly", error);
  })
  .finally(() => console.log("End of the day"));