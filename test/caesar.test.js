
const { expect } = require("chai");
const { caesar } = require("../src/caesar");

describe("caesar()", () => {
    it("should return false if the shift value is equal to 0", () => {
      const message = "Zebra Magazine";
      const shift = 0;
      const actual = caesar(message, shift);

      expect(actual).to.be.false;
    });

    it("should return false if the shift amount is less than -25", () => {
        const message = "Zebra Magazine";
        const shift = -26;
        const actual = caesar(message, shift);
  
        expect(actual).to.be.false;
    });

    it("should return false if the shift amount is above 25", () => {
      const message = "Zebra Magazine";
      const shift = 26;
      const actual = caesar(message, shift);

      expect(actual).to.be.false;
    });

    it("should return false if the shift amount is not presnt", () => {
        const message = "zebra magazine";
        const shift = -null;
        const actual = caesar(message, shift);
  
        expect(actual).to.be.false;
    });
  });
