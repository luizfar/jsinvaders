function ship(plateau) {
  var self = square(point(0, 0), 15);

  self.element = $("<div />");
  self.element
    .css("position", "absolute")
    .css("width", self.side)
    .css("height", self.side)
    .css("background", "red");

  plateau.add(self);

  return self;
}