function ship(plateau) {
  var self = square(point(0, 0), 10);

  self.element = $("<div />");
  self.element
    .css("position", "absolute")
    .css("width", self.side)
    .css("height", self.side);

  plateau.addShip(self);

  return self;
}