import { expect, test } from "vitest";
import { hello } from "./frontend/index";

test("", async () => {
	const result = await hello();
	console.log(result.text);
	expect(result.text).toBe('HelloWorld');
});
