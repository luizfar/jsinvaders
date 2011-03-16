describe("square", function() {
  it("should be built from its corner and side", function() {
    var topLeftCorner = point(2, 3);
    var side = 4;

    var s = square(topLeftCorner, side);

    expect(s.corner).toBeEqual(point(2, 3));
    expect(s.side).toEqual(4);
    expect(s.corners()[0]).toBeEqual(point(2, 3));
    expect(s.corners()[1]).toBeEqual(point(5, 3));
    expect(s.corners()[2]).toBeEqual(point(5, 6));
    expect(s.corners()[3]).toBeEqual(point(2, 6));
  });
  it("should know when a point is inside of it", function() {
    var s = square(point(1, 1), 2);

    expect(s.contains(point(1, 1))).toBeTruthy();
    expect(s.contains(point(2, 2))).toBeTruthy();
  });
  it("should know when a point is not inside of it", function() {
    var s = square(point(1, 1), 2);

    expect(s.contains(point(0, 1))).toBeFalsy();
    expect(s.contains(point(3, 2))).toBeFalsy();
  });
});