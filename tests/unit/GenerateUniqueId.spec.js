const GenerateUniqueId = require("../../src/utils/GenerateUniqueId");

describe("Generate Unique ID", () => {
  it("Should generate an unique ID", () => {
    const id = GenerateUniqueId();

    expect(id).toHaveLength(8);
  });
});
