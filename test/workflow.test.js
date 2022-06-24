const { sum } = require("../files/workflow");

test('Check if 2 + 2 equals 4', ()=> expect(sum(2,2)).toBe(4));