describe("ship", function() {
  it("should have an element with absolute position", function() {
    var s = ship(plateau(point(0, 0), 100));

    expect(s.element.css("position")).toEqual("absolute");
  });

  it("should be added to a plateau", function() {
    var p = plateau(point(0, 0), 100);

    var s = ship(p);

    expect(p.ships()).toContain(s);
  });
});