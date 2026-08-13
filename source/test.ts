import { strictEqual, throws } from "node:assert";
import { test } from "node:test";
import { someFunction } from "./mod.ts";

test("simple string input", () => {
	strictEqual(someFunction("unicorns"), "unicorns & rainbows");
});

test("javascript users without typings get error on number", () => {
	throws(
		() => {
			// @ts-expect-error someFunction expects a string not a number
			someFunction(123);
		},
		TypeError,
		"Expected a string, got number",
	);
});
