function ship(plateau) {
  var self = square(plateau.initialShipPosition(), 15);
  self.position = function(newPosition) {
    return self.corner = newPosition || self.corner;
  }
  
  self.element = $("<div>")
    .css("position", "absolute")
    .css("width", self.side)
    .css("height", self.side)
    .css("background", "red");

  plateau.add(self);

  function updatePosition() {
    self.element
      .css("top", self.corner.y)
      .css("left", self.corner.x);
  };
  updatePosition();

  self.moveLeft = function() {
    self.position(self.position().shift({x: -10, y: 0}));
    updatePosition();
  };

  return self;
}