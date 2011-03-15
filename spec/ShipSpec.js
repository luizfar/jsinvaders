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

  function fakePlateau() {
    return {
      add: function() {},
      initialShipPosition: function () {
        return point(10, 20);
      }
    };
  }
});