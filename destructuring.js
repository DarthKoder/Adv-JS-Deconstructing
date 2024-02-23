/**
 * To run this file in Gitpod, use the 
 * command node destructuring.js in the terminal
 */

// Destructuring arrays
/**
 * Let's take a look at how that works in this  video. We’ll look at four different scenarios:
 * destructuring arrays, destructuring objects, destructuring subsets, and using destructuring with the rest parameter syntax.
 * Destructuring gives us a faster way to take an array of items and turn those items into distinct, individual variables.
 * Instead of referencing each element of the  array by its index and declaring each variable individually, we can use destructuring  to do it all on a single line of code.
 * The same is true for unpacking - or destructuring  - the properties and values of JavaScript objects.
 * Let’s take a look at how it works. First I'm going to create a simple array called ages, and populate it with the values 30,  26 and 27. 
 * If I wanted to assign the first number in the array as John's age, I can simply  create a variable, john, and assign it ages[0].
 * Likewise I can assign ages to Mary and  Joe by assigning them ages[1] and ages[2] respectively.
 * If I log john, mary and joe to the  console, everything works fine. 
 * This method does not use destructuring. 
 * We have to declare each variable individually on its own line of code, and we also need to reference the index of the item  in the array we want to assign to each variable.
 * Destructuring gives you a more elegant  way to accomplish the same thing. 
 * Let me comment out the three variable assignments here and instead define an array of variable names, john, mary and joe. I'll set it equal to ages, and through destructuring assignment, 
 * ES6 automatically assigns the first value in the array to the variable john, the second to the variable mary, and the third to the variable joe. 
 * Using ES6 destructuring assignment, we were able to reduce the three variable  assignments above to just a single line of code. 
 */
let ages = [30, 26, 27];
//let john = ages[0];
//let mary = ages[1];
//let joe = ages[2];
let [john, mary, joe] = ages 
console.log(john, mary, joe);


// Destructuring objects
/**
 * The same works for objects. Let's define an  object called jobs with three properties, mike, jill and alicia, and their respective  jobs: designer, developer and accountant.
 * To destructure this object, we can  simply use the property names mike, jill and alicia, wrapped in curly braces,  and set it equal to jobs. 
 * Now I can log mike, jill and alicia to the console and see  that their respective jobs have been assigned.
 * Notice in both of the above situations, while it looks like you're defining an array or an object, by putting the square brackets or curly braces on the left side of the expression,
 * ES6 understands that you are trying to create three separate variables using destructuring. 
  
 */
let jobs = {
    mike: "designer",
    jill: "developer",
    alicia: "accountant",
};
let {mike, jill, alicia} = jobs;
console.log(mike, jill, alicia);

// Destructuring subsets
/**
 * It's also possible to destructure only a subset of an array or object. Let's look at a new array called languages. 
 * It has five elements, english, french, spanish, german and japanese.
 * Let's say John speaks two languages and we want those assigned to two separate variables. 
 * Easy enough: let johnNative,  johnSecondary = languages.  
 * What happens here is the first two values of the array are assigned to the two variables, and the rest of the array is ignored. 
 * If I log johnNative and johnSecondary to the console, I can see that the values english and french have been assigned as expected. 
 */
let languages = ["english", "french", "spanish", "german", "japanese"]; 
let [johnNative, johnSecondary] = languages;
console.log("John:", johnNative, johnSecondary);

/**
 * Further, you can skip values by leaving the commas in place of the values you want to skip.  
 * For example, if Mary speaks spanish and german, you can easily assign those two specific values to maryNative and marySecondary. 
 * If I were to leave this as is, the first two values would be assigned. To skip them, I'll just place two commas in front of maryNative, one to skip English and one to skip French. 
 * Now, I can console log maryNative and marySecondary and see that they have  the values spanish and german as expected.
 */
let [, , maryNative, marySecondary] = languages;
console.log("Mary:", maryNative, marySecondary);

/**
 * When working with objects, destructuring subsets is even easier. 
 * I'll create a new object called languages2 which has four languages, firstLanguage, secondLanguage, thirdLanguage and fourthLanguage, with the values of
 * english, french, german and japanese respectively. 
 * Since the values in an object are represented by their property names, I can destructure only the things I need, such as firstLanguage and thirdLanguage, just by using their property names.

 */
let languages2 = {
    firstLanguage: "english",
    secondLanguage: "french",
    thirdLanguage: "german",
    fourthLanguage: "japanese"
};
let { firstLanguage, thirdLanguage } = languages2;
console.log("Languages2:", firstLanguage, thirdLanguage);
// Using rest parameter syntax
/**
 * Here's an array of fruits, including apple,  orange, banana, peach and cherry. 
 * I'm now going to assign the first two values to two  variables called favorite and secondFavorite, and then I'll use the rest parameter syntax on the others.
 * If I log all three of these to the console now, you can see that favorite has a value of apple, secondFavorite has a value of orange, and others is an array of the remaining elements.
 * Similarly, if I create an object of people - brian, anna, sarah and andrea - and their favorite foods, pizza, pasta, vegetarian and steak respectively, I can destructure the object just like above. 
 * I'll use the object destructuring syntax  using the first two property names of brian, and anna, and bundle up the rest using the rest parameter syntax. 
 * Again, if I log these three items to  the console, Brian has a value of pizza, anna has a value of pasta, and rest is  an object containing the remaining items.
 */
let fruits = ["apple", "orange", "banana", "peach", "cherry"];
let [favourite, secondFavourite, ...others] = fruits;
console.log(favourite);
console.log(secondFavourite);
console.log(others);

let favouriteFoods = {
    brian: "pizza",
    anna: "pasta",
    sarah: "vegetarian",
    andrea: "steak"
};
let {brian, anna, ...rest} = favouriteFoods;
console.log(brian);
console.log(anna);
console.log(rest);
