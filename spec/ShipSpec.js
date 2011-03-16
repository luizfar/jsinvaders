describe("ship", function() {
  it("should have an element with absolute position", function() {
    var s = ship(fakePlateau());

    expect(s.element.css("position")).toEqual("absolute");
  });

  it("should be added to a plateau", function() {
    var p = fakePlateau();
    spyOn(p, 'add');

    var s = ship(p);

    expect(p.add).toHaveBeenCalledWith(s);
  });

  it("should be positioned on the plateau's initial ship position", function() {
    var s = ship(fakePlateau());

    expect(s.corner.x).toEqual(10);
    expect(s.corner.y).toEqual(20);
  });

  describe("moving", function () {

    describe("left", function () {
      it("should shift left by 10 pixels", function () {
        var s = ship(fakePlateau());

        s.moveLeft();

        expect(s.corner.x).toEqual(0);
      });
      it("should not go beyond plateau's right most limit", function() {
        var p = fakePlateau();
        spyOn(p, 'contains').andCallFake(function(corner) {
          return !(corner.equals(s.corners()[1]));
        });
        spyOn(p, 'corners').andReturn(
          [null, point(40, 45)]
        );

        var s = ship(p);
        s.moveRight();

        expect(s.position().x).toBe(26);
      });
      it("should not go beyond plateau's left most limit", function() {
        var p = fakePlateau();
        spyOn(p, 'contains').andCallFake(function(corner) {
          return !(corner.equals(s.corners()[0]));
        });
        spyOn(p, 'corners').andReturn(
          [point(5, 15), point(19, 15)]
        );

        var s = ship(p);
        s.moveLeft();

        expect(s.position().x).toBe(5);
      });
    });

    describe("right", function () {
      it("should shift right by 10 pixels", function () {
        var s = ship(fakePlateau());

        s.moveRight();

        expect(s.corner.x).toEqual(20);
      });
    });
  });

  function fakePlateau() {
    return {
      side: 31,
      add: function() {},
      initialShipPosition: function () {
        return point(10, 20);
      },
      corner: point(5, 15),
      contains: function() {
        return true;
      },
      corners: function() {}
    };
  }
});