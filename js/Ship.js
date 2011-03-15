function ship(plateau) {
  var self = square(plateau.initialShipPosition(), 15);

  self.element = $("<div />");
  self.element
    .css("position", "absolute")
    .css("width", self.side)
    .css("height", self.side)
    .css("background", "red")
    .css("top", self.corner.y)
    .css("left", self.corner.x);

  plateau.add(self);

  return self;
}