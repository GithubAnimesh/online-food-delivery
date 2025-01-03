import sum from "../sum";

test("should test for sum of two value", () => {
  const result = sum(3, 4);
  expect(result).toBe(7);
});
