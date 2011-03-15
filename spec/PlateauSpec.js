describe("plateau", function() {
  it("should have an element with relative position", function() {
    var p = plateau();

    expect(p.element.css("position")).toEqual("relative");
  });

  it("should contain ships", function() {
    var p = plateau();

    var s1 = {ship: 1};
    var s2 = {ship: 2};

    p.addShip(s1);
    p.addShip(s2);

    expect(p.ships()).toContain(s1);
    expect(p.ships()).toContain(s2);
  });
});