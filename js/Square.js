function square(corner, side) {
  var self = {};
  self.corner = point(corner.x, corner.y);
  self.side = side;

  self.corners = function() {
    return [point(corner.x, corner.y),
            point(corner.x + side - 1, corner.y),
            point(corner.x + side - 1, corner.y + side - 1),
            point(corner.x, corner.y + side - 1)];
  };

  return self;
}