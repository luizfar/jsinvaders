function point(x, y) {
  var self = {
    x: x,
    y: y
  };

  self.shift = function(delta) {
    return point(self.x + delta.x, self.y + delta.y);
  };

  self.equals = function(anotherPoint) {
    return self.x == anotherPoint.x && self.y == anotherPoint.y;
  };

  return self;
}