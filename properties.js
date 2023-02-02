var shoppingCart = {
    books: 3,
    sunglass: 1,
    Keyboard: 5,
    mouse: 1,
    pen: 25
}

// when you know the property name, use dot notation to get property value
var penCount = shoppingCart.pen;
// alternative system
// when you know the property name, use dot notation to get property value
var penCount2 = shoppingCart['pen'];

var propertyName = 'books';

var propertiesValue = shoppingCart[propertyName]
// console.log(propertyName, propertiesValue);


var properties = Object.keys(shoppingCart);
var propertiesValues = Object.values(shoppingCart)
// console.log(properties);
// console.log(propertiesValues);
console.log(shoppingCart);


// set property values
shoppingCart.mouse = 15;
console.log(shoppingCart);
shoppingCart['mouse'] = 29;
console.log(shoppingCart);
shoppingCart[propertyName] = 89;
console.log(shoppingCart);

