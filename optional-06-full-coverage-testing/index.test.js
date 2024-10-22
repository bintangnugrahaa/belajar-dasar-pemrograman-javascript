import { test } from "node:test";
import assert from "node:assert/strict";
import sum from "./index.js";

test("sum function tests", async (t) => {
  await t.test("should return the sum of two positive numbers", () => {
    assert.strictEqual(sum(3, 4), 7);
    assert.strictEqual(sum(10, 20), 30);
  });

  await t.test("should return the sum of a positive number and zero", () => {
    assert.strictEqual(sum(0, 5), 5);
    assert.strictEqual(sum(5, 0), 5);
  });

  await t.test("should return zero when both numbers are zero", () => {
    assert.strictEqual(sum(0, 0), 0);
  });

  await t.test(
    "should return zero when one or both numbers are negative",
    () => {
      assert.strictEqual(sum(-1, 2), 0);
      assert.strictEqual(sum(2, -1), 0);
      assert.strictEqual(sum(-1, -1), 0);
    }
  );

  await t.test(
    "should return zero when one or both inputs are non-numeric",
    () => {
      assert.strictEqual(sum("a", 2), 0);
      assert.strictEqual(sum(2, "b"), 0);
      assert.strictEqual(sum("a", "b"), 0);
    }
  );
});
