function shoppingCart(item, price, quantity) {
  let total = price * quantity;

  return `The total price of ${quantity} ${item} is KES. ${total}`;
}
console.log(shoppingCart("banana", 5, 20));

function greetings(name, sal = "Hello") {
  console.log(`${sal} ${name}`);
}
greetings("Jane");
