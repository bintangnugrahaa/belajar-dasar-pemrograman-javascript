// index.test.js
import { test } from "node:test";
import assert from "node:assert";
import { sum } from "./index.js";

test("sum should add two numbers correctly", async (t) => {
  await t.test("sum(1, 2) should return 3", async () => {
    assert.strictEqual(sum(1, 2), 3);
  });

  await t.test("sum(-1, -2) should return -3", async () => {
    assert.strictEqual(sum(-1, -2), -3);
  });

  await t.test("sum(0, 0) should return 0", async () => {
    assert.strictEqual(sum(0, 0), 0);
  });
});
