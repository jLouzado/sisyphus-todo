import {double} from './utils'
import {assert} from "chai";

describe("double", () => {
    it("should return 2 when given 1", () => {
        const actual = double(1)
        const expected = 2
        assert.strictEqual(actual, expected)
    })
})