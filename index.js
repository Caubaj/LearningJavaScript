// Sort() = method used to sort eleemts of an array in place. 


// let fruits = ["apple", "orange", "banana", "coconut", "pineapple"];

// console.log(fruits)


// let nums = [1,5, 3, 67, 8, 9, 0];

// nums.sort((a, b) => b - a);

// console.log(nums);

// const people = [{name: "spange", age: 30, gpa: 3.0},
//                 {name: "patricio", age: 37, gpa: 1.3},
//                 {name: "sandy", age: 27, gpa: 4.0}]


// people.sort((a, b) => a.name.localeCompare(b.name));

// console.log(people);


//DATES 


// const date1 = new Date("2023-12-31");
// const date2 = new Date("2021-01-01");

// if(date1 < date2)
// {
//     console.log("Happy New Year!")
// }
// else{
//     console.log("No Happy New Year")
// }

// console.log();

//////
//////
//////
//////
//CLOSURE = A function defined inside another function, the inner function has access to to
//          the variables and scope of the outer functin. 
//          Allow for the private variables and state maintance used frequently in JS 
//          FrameWorks: React, Vue, Angular 


// function outer()
// {
//     let message = "hello";

//     function inner()
//     {
//         console.log(message);
//     }
//     inner();
// }



//     outer();
//     console.log(message);


// function createCounter()
// {
//     let count = 0;

//     function increment()
//     {
//         count++;
//         console.log(`Counter: ${count}`);
//     }

//     function getCount()
//     {
//         return count;
//     }

//     return {increment, getCount};
// }
// const counter = createCounter();
// counter.increment();
// counter.increment();
// counter.increment();
// counter.increment();

// console.log(counter.getCount());



// function game()
// {
//     let score = 0;

//     function increaseScore(points)
//         {
//             score += points;
//             console.log(`+${points} pts`);
//         }
//     function decreaseScore(points)
//     {
//         score -= points;
//         console.log(`-${points} pts`);
//     }

//     function getScore(points)
//     {
//         return score;
//     }

//     return {increaseScore, decreaseScore, getScore};
// }

// score= 1000;


//     const gameScore = game();


//     gameScore.increaseScore(5);
//     gameScore.increaseScore(8);
//     gameScore.decreaseScore(2);

//     console.log(`You score: ${gameScore.getScore()} pts`);
    
    








