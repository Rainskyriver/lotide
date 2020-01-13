const head = require('../head.js')
const assert = require('chai').assert;

describe("#Head", () => {
  it("returns 5 when passed [5, 6, 7]", () => {
    assert.strictEqual(head([5,6,7]), 5);
  })
  it("returns '5' when passed ['5']", () => {
    assert.strictEqual(head(['5']), '5');
  })
})
