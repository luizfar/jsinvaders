describe("point", function() {
  it("should contain x and y attributes", function() {
    var p = point(1, 3);
    expect(p.x).toBe(1);
    expect(p.y).toBe(3);
  });

  it("should be equal to another point with the same attributes", function() {
    var p1 = point(1, 3);
    var p2 = point(1, 3);

    expect(p1).toEqual(p2);
  });

  it("should not be equal to another point with different attributes", function() {
    var p1 = point(1, 3);
    var p2 = point(2, 3);

    expect(p1).not.toEqual(p2);
  });

  it("should create other points based on a shifting object", function() {
    var p1 = point(10, 15);

    var p2 = p1.shift({ x: 3, y: -1 });

    expect(p2).toEqual(point(13, 14));
  });
});