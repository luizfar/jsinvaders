function ship(plateau) {
  var shipSize = 15;
  var self = square(plateau.initialShipPosition(), shipSize);
  self.position = function(newPosition) {
    return self.corner = newPosition || self.corner;
  };
  self.size = function() {
    return shipSize;
  };
  
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
  }
  updatePosition();

  function fixBoundaries() {
    if (!plateau.contains(self.corners()[1])) {
      self.position().x = plateau.corners()[1].x- self.size() + 1;
    }
    if (!plateau.contains(self.position())) {
      self.position().x = plateau.corner.x;
    }
  }

  self.moveLeft = function() {
    self.position(self.position().shift({x: -10, y: 0}));
    fixBoundaries();
    updatePosition();
  };

  self.moveRight = function() {
    self.position(self.position().shift({x: 10, y: 0}));
    fixBoundaries();
    updatePosition();
  };

  self.fire = function() {
    var missilePosition = point(self.position().x + (self.size() - missile.missileSize) / 2, self.position().y - missile.missileSize);
    var m = missile(missilePosition, plateau);
    return m;
  };

  return self;
}