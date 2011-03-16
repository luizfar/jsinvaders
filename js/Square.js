function square(corner, side) {
  var self = {};
  self.corner = point(corner.x, corner.y);
  self.side = side;

  self.corners = function() {
    return [point(self.corner.x, self.corner.y),
            point(self.corner.x + self.side - 1, self.corner.y),
            point(self.corner.x + self.side - 1, self.corner.y + self.side - 1),
            point(self.corner.x, self.corner.y + self.side - 1)];
  };

  self.contains = function(aPoint) {
    return aPoint.x >= self.corner.x &&
        aPoint.x < self.corner.x + side;
  };

  return self;
}