import Add from "../src/Add";
import { expect } from "chai";

const sut = new Add();

describe("calculator/add", () => {
  it("should return a number when parameters are passed to `add()`", () => {
    expect(sut.add(2, 1)).to.be.a("number");
  });
});
