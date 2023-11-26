import { strictEqual, throws } from "node:assert";
import { test } from "node:test";
import { moduleName } from "./mod.ts";

test("simple string input", () => {
	strictEqual(moduleName("unicorns"), "unicorns & rainbows");
});

test("javascript users without typings get error on number", () => {
	throws(
		() => {
			// @ts-expect-error moduleName expects a string not a number
			moduleName(123);
		},
		TypeError,
		"Expected a string, got number",
	);
});
