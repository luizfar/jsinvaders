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
});