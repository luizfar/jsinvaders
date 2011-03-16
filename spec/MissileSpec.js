describe("missile", function() {
  it("should have a size", function() {
    var m = missile(point(0, 0), fakePlateau());

    expect(m.size()).toBe(15);
  });

  it("should be contained by its plateau", function() {
    var p = fakePlateau();
    spyOn(p, 'add');

    var m = missile(point(0, 0), p);

    expect(m.size()).toBe(15);
    expect(p.add).toHaveBeenCalledWith(m);
  });

  it("should move up", function() {
    var m = missile(point(100, 100), fakePlateau());

    m.move();

    expect(m.position()).toBeEqual(point(100, 99));
  });

  function fakePlateau() {
    return {
      add: function() {}
    };
  }
});