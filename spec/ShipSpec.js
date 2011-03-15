describe("ship", function() {
  it("should have an element with absolute position", function() {
    var s = ship(fakePlateau());

    expect(s.element.css("position")).toEqual("absolute");
  });

  it("should be added to a plateau", function() {
    var p = fakePlateau();
    spyOn(p, 'addShip');

    var s = ship(p);

    expect(p.addShip).toHaveBeenCalledWith(s);
  });

  function fakePlateau() {
    return {
      addShip: function() {}
    };
  }
});
