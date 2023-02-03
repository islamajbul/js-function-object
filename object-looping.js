var shoppingCart = {
    books: 3,
    sunglass: 1,
    Keyboard: 5,
    mouse: 1,
    pen: 25,
    shoes: 2    
}

 var shoppingItems = ['books','sunglass', 'shoes', 'pen'];

 var friendAge = [12, 45, 78, 55, 25];
 var friendAge = {
    rahim: 12,
    samad: 45,
    karim: 78,
    jamal: 55,
    robi: 25
 }

 const keys = Object.keys(shoppingCart);
 console.log(keys);

 const values = Object.values(shoppingCart);
 console.log(values);

 for(var i = 0; i < keys.length; i++){
    var propertyName = keys[i];
    var propertyValue = shoppingCart[propertyName];
    /* console.log(keys[i]) 
    console.log(propertyName, propertyValue); */
 }

//  for in loop

for(var propertyName in shoppingCart){
    const value = shoppingCart[propertyName];
    console.log(propertyName, value);

}




