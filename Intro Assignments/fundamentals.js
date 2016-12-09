// var movement = {};
// movement = {
//   name : 'Abbey',
//   distance_traveled : 0,
//   say_name : function(){
//     console.log(`${movement.name}`)},
//   say_something : function(string){
//     console.log(`${movement.name} says ${string}`)},
//   walk : function(){
//     console.log(`${movement.name} is walking!`);
//     movement.distance_traveled += 3;
//     console.log(movement.distance_traveled);},
//   run : function(){
//     console.log(`${movement.name} is running!`);
//     movement.distance_traveled += 10;
//     console.log(movement.distance_traveled);},
//   crawl : function(){
//     console.log(`${movement.name} is crawling!`);
//     movement.distance_traveled += 1;
//     console.log(movement.distance_traveled);},
// }


function personConstructor(name){
  var person;
  person = {
    name : name,
    distance_traveled : 0,
    say_name : function(){
      console.log(`${person.name}`)},
    say_something : function(string){
      console.log(`${person.name} says ${string}`)},
    walk : function(){
      console.log(`${person.name} is walking!`);
      person.distance_traveled += 3;
      console.log(person.distance_traveled);},
    run : function(){
      console.log(`${person.name} is running!`);
      person.distance_traveled += 10;
      console.log(person.distance_traveled);},
    crawl : function(){
      console.log(`${person.name} is crawling!`);
      person.distance_traveled += 1;
      console.log(person.distance_traveled);},
  }
  return person;
}

var josh = personConstructor('Josh')
var shera = personConstructor('She-Ra')

shera.say_name()

josh.say_name()
josh.say_something('I am so cool!')
josh.walk()
josh.run()
josh.crawl()

function ninjaCreator(name, cohort){
  var ninja;
  ninja = {
    name : name,
    cohort: cohort,
    belt : 'yellow',
    levelUp : function(){
      if(ninjaCreator.belt = 'yellow'){
        ninjaCreator.belt == 'red'
      }
      else{ninjaCreator.belt == 'black'}
      }
    }
    return ninja;
  }

var beatrix = ninjaCreator('Beatrix', 'MEAN')

console.log(beatrix.name)
console.log(beatrix.cohort)
console.log(beatrix.belt)
console.log(beatrix.levelUp)
