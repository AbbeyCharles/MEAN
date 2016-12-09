var _ = {
   map: function(array, callback) {
     var output = [];
     for(var i = 0; i<array.length; i++){
       output.push(callback(array[i]));
     }
     return output;
   },
   reduce: function(array, callback){
     var output = 0;
     for (var i =0; i<array.length; i++){
       output += callback(array[i]);
     }
     return output;
   },
   filter: function(array, callback){
     var output = [];
     for (var i = 0; i<array.length; i++){
       if(callback(array[i])){
         output.push(array[i]);
       }
       else{
         continue;
       }
     }
     return output;
   },
   find: function(array, callback){
     var output = 0;
     for (var i = 0; i<array.length; i++){
       if(callback(array[i])){
         output = array[i];
       }
       else{
         continue;
       }
     }
     return output;
   },
   reject: function(array, callback){
     var output = [];
     for (var i=0; i<array.length; i++){
       if(callback(array[i])){
         output.push(array[i]);
       }
       else{
         continue;
       }
     }
     return output;
   }

 }

 var doubled = _.map([2,6,4], function(num){return num*2; })
 console.log(doubled);

 var number = _.reduce([2,6,4], function(num){return num})
 console.log(number);

 var filter = _.filter([2,3,7,4], function(num){return num % 2 != 0; })
 console.log(filter);

 var even = _.find([2,3,7,4], function(num){return num % 2 == 0; })
 console.log(even);

 var odds = _.reject([2,3,7,4], function(num){return num % 2 == 0; })
 console.log(odds);
