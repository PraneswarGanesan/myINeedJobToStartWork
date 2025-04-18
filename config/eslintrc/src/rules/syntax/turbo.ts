/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import EslintTurbo from "eslint-plugin-turbo";
import globals from "globals";

import { filesTS, isTs, languageOptionsTS, tsParserOptions } from "../helpers";
import { defineFlatConfig } from "eslint-flat-config-utils";

const files = (() => filesTS(["**/*.js", "**/*.jsx", "**/*.mjs", "**/*.ejs"]))();

const languageOptions = (() =>
	languageOptionsTS({
		ecmaVersion: "latest",
		sourceType: "module",
		globals: { ...globals.node },
		...(isTs ? tsParserOptions : {})
	}))();

export default defineFlatConfig({
	name: "Turbo",
	files: files,
	languageOptions: languageOptions,
	plugins: { "@EslintTurbo": EslintTurbo },
	rules: {
		"@EslintTurbo/no-undeclared-env-vars": "error"
	}
});
