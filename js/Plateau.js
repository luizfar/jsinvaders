function plateau() {
  var self = square(point(0, 0), 200);

  self.element = $("<div/>");
  self.element
    .css("position", "relative")
    .css("width", self.side)
    .css("height", self.side)

  return self;
}