module.exports = function (){
  return {
    add: function(num1, num2) {
         var sum = num1+num2;
         console.log(sum);
    },
    multiply: function(num1, num2) {
         var sum = num1*num2;
         console.log(sum);
    },
    square: function(num) {
         var sum = num*num;
         console.log(sum);
    },
    random: function() {
         var random = Math.floor(Math.random()*35)+1;
         console.log(random);
    }
  }
};
