describe("square", function() {
  it("should be built from its corner and side", function() {
    var topLeftCorner = point(2, 3);
    var side = 4;

    var s = square(topLeftCorner, side);

    expect(s.corner).toEqual(point(2, 3));
    expect(s.side).toEqual(4);
    expect(s.corners()[0]).toEqual(point(2, 3));
    expect(s.corners()[1]).toEqual(point(5, 3));
    expect(s.corners()[2]).toEqual(point(5, 6));
    expect(s.corners()[3]).toEqual(point(2, 6));
  });
});