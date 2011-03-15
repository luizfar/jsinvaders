function plateau(container) {
  var self = square(point(0, 0), 420);
  var ships = [];
  
  self.element = $("<div/>");
  self.element
    .css("position", "relative")
    .css("width", self.side)
    .css("height", self.side)
    .css("background", "black");

  container.append(self.element);

  self.add = function(ship) {
    ships.push(ship);
    self.element.append(ship.element);
  };

  self.ships = function() {
    return ships;
  };

  self.initialShipPosition = function() {
    return point(210, 400);
  };

  return self;
}