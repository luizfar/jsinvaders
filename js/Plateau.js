function plateau() {
  var self = square(point(0, 0), 200);
  var ships = [];
  
  self.element = $("<div/>");
  self.element
    .css("position", "relative")
    .css("width", self.side)
    .css("height", self.side)

  self.addShip = function(ship) {
    ships.push(ship);
  };

  self.ships = function() {
    return ships;
  };

  return self;
}