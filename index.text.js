test("Example test", () => {
     expect(1 + 1 ).toBe(2);
});
const { expect } = require("chai");
const { distanceTravelledInFeet, calculatesFarePrice } = require('./index');

describe("distanceTravelledInFeet", () => {
    test("returns distance in feet", () => {
        expect(distanceTravelledInFeet(34, 38)).toBe(1056);
    });
});

describe("calculatesFarePrice", () => {
    test("calculates the correct fare", () => {
        expect(calculatesFarePrice(34, 32)).toBe(0);
        expect(calculatesFarePrice(34, 50)).toBeCloseto(25)
        expect(calculatesFarePrice(34,60)),toBe("cannot travel that far");
    });
});