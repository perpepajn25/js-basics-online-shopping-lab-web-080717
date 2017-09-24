var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var newItem = {}
  newItem[item]= Math.floor(Math.random() * 100) + 1
  cart.push(newItem)
  console.log(`${item} has been added to your cart.`)
  return cart
}

function viewCart() {
  if (cart.length === 0){
    console.log("Your shopping cart is empty.")
  } else if (cart.length === 1) {
    var firstItem = Object.keys(cart[0])[0]
    console.log(`In your cart, you have ${firstItem} at $${cart[0][firstItem]}.`)
  } else if (cart.length === 2){
    var firstItem = Object.keys(cart[0])[0]
    var secondItem = Object.keys(cart[1])[0]
    console.log(`In your cart, you have ${firstItem} at $${cart[0][firstItem]} and ${secondItem} at $${cart[1][secondItem]}.`)
  } else {
    var beginSentence = "In your cart, you have "
    var listOfItems = []
    for (let i=0; i < cart.length-1; i++){
      var item = Object.keys(cart[i])[0]
      listOfItems.push(`${item} at $${cart[i][item]}, `)
    }
    var lastItem = Object.keys(cart[cart.length-1])[0]
    var lastItemString = `and ${lastItem} at $${cart[cart.length-1][lastItem]}.`
    console.log(beginSentence + listOfItems.join("") + lastItemString)
  }
}

function total() {
  var sum = 0
  for (let i=0; i < cart.length; i++ ){
    var item = Object.keys(cart[i])[0]
    sum+=cart[i][item]
  }
  return sum
}

function removeFromCart(item) {
  for (let i=0; i < cart.length; i++){
    if (item === Object.keys(cart[i])[0]){
      cart.splice(i,1)
      return cart
    }
  }
  console.log("That item is not in your cart.")
}

function placeOrder(cardNumber) {
  if (cardNumber){
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    cart = []
  } else {
    console.log("Sorry, we don't have a credit card on file for you.")
  }
}
