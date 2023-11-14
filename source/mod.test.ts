import { assertEquals, assertThrows } from "./deps.test.ts";
import { moduleName } from "./mod.ts";

Deno.test("simple string input", () => {
	assertEquals(moduleName("unicorns"), "unicorns & rainbows");
});

Deno.test("javascript users without typings get error on number", () => {
	assertThrows(
		() => {
			// @ts-expect-error moduleName expects a string not a number
			moduleName(123);
		},
		TypeError,
		"Expected a string, got number",
	);
});
