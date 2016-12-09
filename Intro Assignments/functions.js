function runningLogger(){
  console.log('I am running!')
}
runningLogger()

function multiplyByTen(num){
  var multiple;
  multiple = num*10
  return multiple;
}
console.log(multiplyByTen(5));

function stringReturnOne(){
  var stringOne = 'This is string one!';
  console.log(stringOne);
}
stringReturnOne();

function stringReturnTwo(){
  var stringTwo = 'This is string two!';
  console.log(stringTwo);
}
stringReturnTwo();

function caller(num){
  if (typeof num === 'function'){
    pass;
  }
}
caller(4);

function myDoubleConsoleLog(stripes, dots){
  if (typeof stripes === 'function'){
    console.log(stripes(4));
  }
  if (typeof dots === 'function'){
    console.log(dots(12));
  }
}
myDoubleConsoleLog((function stripes(num){var add; add=num+2; return add;}), function dots(num){var mult; mult=num*3; return mult;})

function caller2(func){
  console.log('Starting');
  var timer;
  timer = setTimeout(func, 2000);
}
caller2(function solids(){var num; num = 'This is a string'; return num;})
console.log('ending?')
