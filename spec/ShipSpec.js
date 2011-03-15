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

  function fakePlateau() {
    return {
      add: function() {}
    };
  }
});
