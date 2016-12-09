function VehicleConstructor(name, wheels, passengers, speed){

  var updateDistanceTravelled = function(){
    self.distance_traveled += self.speed;
    console.log(self.distance_traveled);
  }

  this.name = name;
  this.wheels = wheels;
  this.passengers = passengers;
  this.speed = speed;
  this.distance_traveled = 0;
  this.vinNum = vin()
}
  VehicleConstructor.prototype.makeNoise = function(sound){
    console.log("I am a " + name + " and I have " + wheels + " wheels. I can transport " + passengers + " and make the sound " + sound + " when I move.");
    // return this;
  }
  // VehicleConstructor.prototype.move = function(){
  //   if(updateDistanceTravelled>1){
  //     this.sound = "toot toot";
  //     return this;
  //   }
  // }
  VehicleConstructor.prototype.checkMiles = function(){
    console.log(this.distance_traveled);
    // return this;
  }
  VehicleConstructor.prototype.vin = function(){
    var vin = '';
    this.vinNum = Math.floor(Math.random()*1000000);
    console.log(this.vinNum);
    // return this;
  }


var car = new VehicleConstructor('car', 4, 5, 45);
// car.move();
car.checkMiles();
car.makeNoise();
console.log(car.speed);
