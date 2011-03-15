describe("plateau", function() {
  it("should have an element with relative position", function() {
    var p = plateau(stubContainer());

    expect(p.element.css("position")).toEqual("relative");
  });

  it("should contain ships", function() {
    var p = plateau(stubContainer());

    var s1 = {ship: 1};
    var s2 = {ship: 2};

    p.add(s1);
    p.add(s2);

    expect(p.ships()).toContain(s1);
    expect(p.ships()).toContain(s2);
  });

  it("should append ship to container when it is added", function() {
    var p = plateau(stubContainer());
    spyOn(p.element, 'append');

    var s1 = {element: {id: 1}};
    p.add(s1);

    expect(p.element.append).toHaveBeenCalledWith(s1.element);
  });

  it("should belong to a container", function() {
    var container = stubContainer();
    spyOn(container, 'append');

    var p = plateau(container);

    expect(container.append).toHaveBeenCalledWith(p.element);
  });

  it("should tell its ship's initial position", function() {
    var p = plateau(stubContainer());

    expect(p.initialShipPosition()).toEqual(point(210, 400));
  });

  function stubContainer() {
    return {
      append: function() {}
    };
  }
});