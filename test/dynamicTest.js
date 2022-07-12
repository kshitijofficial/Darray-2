const Dynamic = artifacts.require("Dynamic");

contract("Dynamic", () => {
  let dynamic = null;

  before(async () => {
    dynamic = await Dynamic.deployed();
  });

  it("Should get all the elements of arr", async () => {
    const arr = await dynamic.getAll();

    const elements = arr.map((element) => element.toNumber());

    assert.deepEqual(elements, []);
  });
});
