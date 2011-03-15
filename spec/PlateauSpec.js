describe("plateau", function() {
  it("should have an element with relative position", function() {
    var p = plateau();

    expect(p.element.css("position")).toEqual("relative");
  });
});