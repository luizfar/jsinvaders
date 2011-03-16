function missile(initialPosition, containingPlateau) {
  var self = square(initialPosition, missile.missileSize);
  self.position = function(newPosition) {
    return self.corner = newPosition || self.corner;
  };
  self.size = function() {
    return missile.missileSize;
  };

  self.element = $("<div>")
    .css("position", "absolute")
    .css("width", self.side)
    .css("height", self.side)
    .css("background", "#00ffff url(img/fire.png)");

  function updatePosition() {
    self.element
      .css("top", self.corner.y)
      .css("left", self.corner.x);
  }
  updatePosition();

  self.move = function() {
    self.position(self.position().shift({ x: 0, y: -1}));
    updatePosition();
  };
  self.update = self.move;

  containingPlateau.add(self);

  return self;
}

missile.missileSize = 15;
