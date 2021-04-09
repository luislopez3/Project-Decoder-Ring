
const { expect } = require("chai");
const { polybius } = require("../src/polybius");

describe("polybius()", () => {
  describe("encoding a message", () => {
    it("should translate both 'i' and 'j' to 42", () => {
      const message = "jiggle";
      const actual = polybius(message);
      const expected = "424222221351";

      expect(actual).to.equal(expected);
    });

    it("should leave spaces as is", () => {
      const message = "my message";
      const actual = polybius(message);
      const expected = "2345 23513434112251";

      expect(actual).to.equal(expected);
    });

      it("should ignore capital letters", () => {
        const message = "My Message";
        const actual = polybius(message);
        const expected = "2345 23513434112251";
  
        expect(actual).to.equal(expected);
      });
  });

  describe("decoding a message", () => {
    it("should translate 42 to both 'i' and 'j'", () => {
      const message = "424222221351";
      const actual = polybius(message, false);

      expect(actual).to.include("i");
      expect(actual).to.include("j");
    });
  });
});
