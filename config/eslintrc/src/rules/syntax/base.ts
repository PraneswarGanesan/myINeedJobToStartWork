/* eslint-disable max-lines */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

// @ts-expect-error: No type declaration for module
import EslintPrefArrayFunc from "eslint-plugin-array-func";
// @ts-expect-error: No type declaration for module
import EslintNoUnsanitized from "eslint-plugin-no-unsanitized";
// @ts-expect-error: No type declaration for module
import EslintOptRegConf from "eslint-plugin-optimize-regex";
// @ts-expect-error: No type declaration for module
import EslintPii from "eslint-plugin-pii";
// @ts-expect-error: No type declaration for module
import EslintPromise from "eslint-plugin-promise";
import EslintSecurity from "eslint-plugin-security";

import EslintSonar from "eslint-plugin-sonarjs";
import EslintUnicorn from "eslint-plugin-unicorn";
// @ts-expect-error: No type declaration for module
import EslintImports from "eslint-plugin-import";
// @tsw-expect-error: No type declaration for module
import EslintUnusedImports from "eslint-plugin-unused-imports";
import globals from "globals";
import { filesTS, languageOptionsTS } from "../helpers";
import { defineFlatConfig } from "eslint-flat-config-utils";

const files = (() => filesTS(["**/*.js", "**/*.jsx", "**/*.mjs", "**/*.ejs"]))();
const languageOptions = (() =>
	languageOptionsTS({
		ecmaVersion: "latest",
		sourceType: "module",
		globals: { ...globals.node }
	}))();

export default defineFlatConfig({
	files: files,
	languageOptions: languageOptions,
	name: "Default",
	plugins: {
		"@EslintOptRegConf": EslintOptRegConf,
		"@EslintPii": EslintPii,
		"@EslintSecurity": EslintSecurity as any,
		"@EslintPromise": EslintPromise,
		"@EslintUnicorn": EslintUnicorn,
		"@EslintSonar": EslintSonar as any,
		"@EslintNoUnsanitized": EslintNoUnsanitized,
		"@EslintUnusedImports": EslintUnusedImports,
		"@EslintImports": EslintImports,
		"@EslintPrefArrayFunc": EslintPrefArrayFunc
	},
	rules: {
		"array-callback-return": "error",
		"constructor-super": "error",
		"for-direction": "error",
		"getter-return": "error",
		"no-async-promise-executor": "error",
		"no-await-in-loop": "error",
		"no-class-assign": "error",
		"no-compare-neg-zero": "error",
		"no-cond-assign": "error",
		"no-const-assign": "error",
		"no-constant-binary-expression": "error",
		"no-constant-condition": "error",
		"no-constructor-return": "error",
		"no-control-regex": "warn",
		"no-debugger": "warn",
		"no-dupe-args": "error",
		"no-dupe-class-members": "error",
		"no-dupe-else-if": "error",
		"no-dupe-keys": "error",
		"no-duplicate-case": "error",
		// "no-duplicate-imports": "error", <--- provided by eslint-plugin-import cuz it doesnt support ts
		"no-empty-character-class": "error",
		"no-empty-pattern": "warn",
		"no-ex-assign": "error",
		"no-fallthrough": "error",
		"no-func-assign": "error",
		"no-import-assign": "warn",
		"no-inner-declarations": "warn",
		"no-invalid-regexp": "error",
		"no-irregular-whitespace": "warn",
		"no-loss-of-precision": "error",
		"no-misleading-character-class": "warn",
		"no-new-native-nonconstructor": "error",
		"no-new-symbol": "error",
		"no-obj-calls": "error",
		"no-promise-executor-return": "error",
		"no-prototype-builtins": "warn",
		"no-self-assign": "warn",
		"no-self-compare": "error",
		"no-setter-return": "error",
		"no-sparse-arrays": "warn",
		disallowArithmeticOperators: 0,
		"no-template-curly-in-string": "error",
		"no-this-before-super": "error",
		"no-undef": "warn",
		"no-unexpected-multiline": "off",
		"no-unmodified-loop-condition": "warn",
		"no-unreachable": "error",
		"no-unreachable-loop": "error",
		"accessor-pairs": "warn",
		"no-unsafe-finally": "error",
		"arrow-body-style": ["error", "as-needed"],
		"no-unsafe-negation": "error",
		"block-scoped-var": "error",
		"no-unsafe-optional-chaining": "error",
		camelcase: [
			"error",
			{
				ignoreDestructuring: true,
				ignoreGlobals: true,
				ignoreImports: true,
				properties: "always"
			}
		],
		"no-unused-private-class-members": "error",
		// "capitalized-comments": ["error", "never"],
		"no-unused-vars": "warn",
		"class-methods-use-this": "error",
		"no-use-before-define": "off",
		complexity: ["error", 16],
		"no-useless-backreference": "error",
		// "consistent-return": "error",
		"require-atomic-updates": "warn",
		"consistent-this": "error",
		"use-isnan": "error",
		curly: ["error", "multi-line"],
		"valid-typeof": "error",
		"default-case": "error",
		"default-case-last": "error",
		"default-param-last": "off", // Security Problems at Serverside
		"dot-notation": "error",
		eqeqeq: ["off", "smart"],
		"func-name-matching": "off",
		"func-style": "off",
		"grouped-accessor-pairs": "off",
		"guard-for-in": "error",
		"id-denylist": "off",
		"id-length": "off",
		"init-declarations": "off",
		"logical-assignment-operators": "off",
		"new-cap": "error",
		"no-alert": "error",
		"no-array-constructor": "error",
		"no-bitwise": "error",
		"no-caller": "error",
		"no-case-declarations": "off",
		"no-console": "off",
		"no-continue": "off",
		"no-delete-var": "error",
		"no-div-regex": "warn",
		"no-else-return": ["error", { allowElseIf: false }],
		"no-empty": "error",
		"no-empty-function": "warn",
		"no-empty-static-block": "error",
		"no-eval": "error",
		"no-extend-native": "error",
		"no-extra-bind": "warn",
		"no-extra-boolean-cast": "error",
		"no-extra-label": "error",
		"no-global-assign": "warn",
		"no-implicit-coercion": "warn",
		"no-implicit-globals": "off",
		"no-implied-eval": "error",
		"no-inline-comments": "off",
		"no-invalid-this": "off",
		"no-iterator": "error",
		"no-label-var": "error",
		"no-labels": "error",
		"no-lone-blocks": "error",
		"no-lonely-if": "error",
		"no-loop-func": "warn",
		"no-magic-numbers": "off",
		"no-multi-assign": "error",
		"no-multi-str": "error",
		"no-negated-condition": "warn",
		"no-nested-ternary": "warn",
		"no-new": "error",
		"no-new-func": "off",
		"no-new-wrappers": "error",
		"no-nonoctal-decimal-escape": "error",
		"no-object-constructor": "warn",
		"no-octal": "warn",
		"no-octal-escape": "error",
		"no-param-reassign": "error",
		"no-plusplus": "off",
		"no-proto": "error",
		"no-redeclare": "off",
		"no-regex-spaces": "error",
		"no-restricted-exports": "off",
		"no-restricted-globals": "off",
		"no-restricted-imports": "off",
		"no-restricted-properties": "off",
		"no-restricted-syntax": "off",
		"no-return-assign": "error",
		"func-names": ["off"],
		"max-classes-per-file": ["error", { ignoreExpressions: true }],
		"max-depth": ["error", 5],
		"capitalized-comments": ["off"],
		"max-lines": [
			"error",
			{
				max: 300,
				skipBlankLines: true
			}
		],
		"consistent-return": ["error", { treatUndefinedAsUnspecified: false }],
		"no-script-url": "error",
		"no-sequences": "error",
		"max-params": ["error", 4],
		"no-shadow": "off",
		"no-shadow-restricted-names": "error",
		"no-ternary": "off",
		"no-throw-literal": "error",
		"no-undef-init": "error",
		"no-undefined": "off",
		"no-underscore-dangle": "off",
		"no-unneeded-ternary": "error",
		"no-unused-expressions": "error",
		"no-unused-labels": "error",
		"no-useless-call": "error",
		"no-useless-catch": "error",
		"no-useless-computed-key": "error",
		"no-useless-concat": "error",
		"no-useless-constructor": "error",
		"no-useless-escape": "error",
		"no-useless-rename": "error",
		"no-useless-return": "error",
		"no-var": "error",
		"no-void": "off",
		"no-warning-comments": "off",
		"no-with": "off",
		"object-shorthand": "off",
		"one-var": "off",
		"operator-assignment": "off",
		"prefer-arrow-callback": "off",
		"prefer-const": "off",
		"prefer-destructuring": "off",
		"prefer-exponentiation-operator": "warn",
		"prefer-named-capture-group": "off",
		"prefer-numeric-literals": "error",
		"prefer-object-has-own": "warn",
		"prefer-object-spread": "error",
		// "sort-keys": "warn", // No because some scripts can depends on keys order
		"prefer-promise-reject-errors": "error",
		"prefer-regex-literals": "error",
		"prefer-rest-params": "error",
		"prefer-spread": "error",
		"prefer-template": "error",
		"line-comment-position": "off",
		radix: "off",
		"require-await": "warn",
		"require-unicode-regexp": "warn",
		"require-yield": "error",
		"no-eq-null": "error",
		"sort-imports": "off", // used in other
		"sort-vars": "off",
		strict: "off",
		"symbol-description": "warn",
		"vars-on-top": "warn",
		yoda: "error",

		"unicode-bom": "error",

		"@EslintPii/no-email": "error",
		"@EslintPii/no-ip": "error",
		"@EslintPii/no-phone-number": "error",
		"@EslintPii/no-dob": "off",

		"@EslintOptRegConf/optimize-regex": "error",
		"@EslintSecurity/detect-unsafe-regex": "error",

		"@EslintSecurity/detect-object-injection": "off", // Many errors, not big benefits
		"@EslintSecurity/detect-non-literal-regexp": "error",
		"@EslintSecurity/detect-bidi-characters": "error",

		// "@EslintSecurity/detect-no-unsafe-regex": "error",
		"@EslintSecurity/detect-non-literal-require": "error",

		"@EslintSecurity/detect-child-process": "warn",
		"@EslintSecurity/detect-new-buffer": "error",
		"@EslintSecurity/detect-disable-mustache-escape": "error",
		"@EslintSecurity/detect-possible-timing-attacks": "error",
		"@EslintSecurity/detect-eval-with-expression": "error",
		"@EslintSecurity/detect-buffer-noassert": "error",
		"@EslintSecurity/detect-pseudoRandomBytes": "error",
		"@EslintSecurity/detect-no-csrf-before-method-override": "error",
		"@EslintSecurity/detect-non-literal-fs-filename": "warn",

		"@EslintPromise/always-return": "error",
		"@EslintPromise/no-return-wrap": "error",
		"@EslintPromise/param-names": "error",
		"@EslintPromise/catch-or-return": "error",
		"@EslintPromise/no-native": "off",
		"@EslintPromise/no-nesting": "error",
		"@EslintPromise/no-promise-in-callback": "error",
		"@EslintPromise/no-callback-in-promise": "error",
		"@EslintPromise/avoid-new": "off",
		"@EslintPromise/no-new-statics": "error",
		"@EslintPromise/no-return-in-finally": "error",
		"@EslintPromise/valid-params": "error",

		"@EslintUnicorn/better-regex": "error",
		"@EslintUnicorn/catch-error-name": "warn", // ?
		"@EslintUnicorn/consistent-destructuring": "warn",
		"@EslintUnicorn/consistent-empty-array-spread": "error",
		"@EslintUnicorn/consistent-function-scoping": "off",
		"@EslintUnicorn/custom-error-definition": "error",
		"@EslintUnicorn/empty-brace-spaces": "off", // off cuz other plugin have same thing
		"@EslintUnicorn/error-message": "error",
		"@EslintUnicorn/escape-case": "warn",
		"@EslintUnicorn/expiring-todo-comments": "error",
		"@EslintUnicorn/explicit-length-check": "off",
		"@EslintUnicorn/filename-case": ["error", { case: "camelCase" }],
		"@EslintUnicorn/import-style": "off",
		"@EslintUnicorn/new-for-builtins": "error",
		"@EslintUnicorn/no-abusive-eslint-disable": "error",
		"@EslintUnicorn/no-anonymous-default-export": "error",
		"@EslintUnicorn/no-array-callback-reference": "error",
		"@EslintUnicorn/no-array-for-each": "warn",
		"@EslintUnicorn/no-array-method-this-argument": "warn",
		"@EslintUnicorn/no-array-push-push": "error",
		"@EslintUnicorn/no-array-reduce": "warn",
		"@EslintUnicorn/no-await-expression-member": "error",
		"@EslintUnicorn/no-await-in-promise-methods": "error",
		"@EslintUnicorn/no-console-spaces": "error",
		"@EslintUnicorn/no-document-cookie": "error",
		"@EslintUnicorn/no-empty-file": "warn",
		"@EslintUnicorn/no-for-loop": "error",
		"@EslintUnicorn/no-hex-escape": "error",
		"@EslintUnicorn/no-instanceof-array": "error",
		"@EslintUnicorn/no-invalid-fetch-options": "error",
		"@EslintUnicorn/no-invalid-remove-event-listener": "error",
		"@EslintUnicorn/no-keyword-prefix": "error",
		"@EslintUnicorn/no-lonely-if": "error",
		"@EslintUnicorn/no-magic-array-flat-depth": "error",
		"@EslintUnicorn/no-negated-condition": "error",
		"@EslintUnicorn/no-negation-in-equality-check": "error",
		"@EslintUnicorn/no-nested-ternary": "error",
		"@EslintUnicorn/no-new-array": "off",
		"@EslintUnicorn/no-new-buffer": "error", // have in other but it can fix
		"@EslintUnicorn/no-null": "error",
		"@EslintUnicorn/no-object-as-default-parameter": "off",
		"@EslintUnicorn/no-process-exit": "error",
		"@EslintUnicorn/no-single-promise-in-promise-methods": "error",
		"@EslintUnicorn/no-static-only-class": "error",
		"@EslintUnicorn/no-thenable": "error",
		"@EslintUnicorn/no-this-assignment": "error",
		"@EslintUnicorn/no-typeof-undefined": "error",
		"@EslintUnicorn/no-unnecessary-await": "error",
		"@EslintUnicorn/no-unnecessary-polyfills": "off",
		"@EslintUnicorn/no-unreadable-array-destructuring": "error",
		"@EslintUnicorn/no-unreadable-iife": "warn",
		"@EslintUnicorn/no-unused-properties": "warn",
		"@EslintUnicorn/no-useless-fallback-in-spread": "error",
		"@EslintUnicorn/no-useless-length-check": "warn", // Security check?
		"@EslintUnicorn/no-useless-promise-resolve-reject": "error",
		"@EslintUnicorn/no-useless-spread": "error",
		"@EslintUnicorn/no-useless-switch-case": "error",
		"@EslintUnicorn/no-useless-undefined": "error",
		"@EslintUnicorn/no-zero-fractions": "error",
		"@EslintUnicorn/number-literal-case": "error",
		"@EslintUnicorn/numeric-separators-style": "error",
		"@EslintUnicorn/prefer-add-event-listener": "off",
		"@EslintUnicorn/prefer-array-find": "error", // ah
		"@EslintUnicorn/prefer-array-flat-map": "error", // ah
		"@EslintUnicorn/prefer-array-flat": "error", // ah
		"@EslintUnicorn/prefer-array-index-of": "error",
		"@EslintUnicorn/prefer-array-some": "error", // ?
		"@EslintUnicorn/prefer-at": "error",
		"@EslintUnicorn/prefer-blob-reading-methods": "error",
		"@EslintUnicorn/prefer-code-point": "error",
		"@EslintUnicorn/prefer-date-now": "error",
		"@EslintUnicorn/prefer-default-parameters": "error",
		"@EslintUnicorn/prefer-dom-node-append": "off", // can have some issues
		"@EslintUnicorn/prefer-dom-node-dataset": "error",
		"@EslintUnicorn/prefer-dom-node-remove": "off", // can have some issues
		"@EslintUnicorn/prefer-dom-node-text-content": "off", // can have some issues
		"@EslintUnicorn/prefer-event-target": "error",
		"@EslintUnicorn/prefer-export-from": "error",
		"@EslintUnicorn/prefer-includes": "error",
		"@EslintUnicorn/prefer-json-parse-buffer": "error",
		"@EslintUnicorn/prefer-keyboard-event-key": "error",
		"@EslintUnicorn/prefer-logical-operator-over-ternary": "error",
		"@EslintUnicorn/prefer-math-trunc": "off", // I am not sure about this
		"@EslintUnicorn/prefer-modern-dom-apis": "error",
		"@EslintUnicorn/prefer-modern-math-apis": "error",
		"@EslintUnicorn/prefer-module": "error",
		"@EslintUnicorn/prefer-native-coercion-functions": "error",
		"@EslintUnicorn/prefer-negative-index": "error",
		"@EslintUnicorn/prefer-node-protocol": "error",
		"@EslintUnicorn/prefer-number-properties": "error",
		"@EslintUnicorn/prefer-object-from-entries": "error",
		"@EslintUnicorn/prefer-optional-catch-binding": "error",
		"@EslintUnicorn/prefer-prototype-methods": "error",
		"@EslintUnicorn/prefer-query-selector": "error", // prob worse speed
		"@EslintUnicorn/prefer-reflect-apply": "error",
		"@EslintUnicorn/prefer-regexp-test": "error",
		"@EslintUnicorn/prefer-set-has": "error",
		"@EslintUnicorn/prefer-set-size": "error", // ?
		"@EslintUnicorn/prefer-spread": "error",
		"@EslintUnicorn/prefer-string-raw": "error",
		"@EslintUnicorn/prefer-string-replace-all": "error",
		"@EslintUnicorn/prefer-string-slice": "error",
		"@EslintUnicorn/prefer-string-starts-ends-with": "error",
		"@EslintUnicorn/prefer-string-trim-start-end": "error",
		"@EslintUnicorn/prefer-structured-clone": "error",
		"@EslintUnicorn/prefer-switch": ["error", { minimumCases: 4 }],
		"@EslintUnicorn/prefer-ternary": ["error", "only-single-line"], // I am not sure i configured this like i wanted to.
		"@EslintUnicorn/prefer-top-level-await": "off", // Can have issues
		"@EslintUnicorn/prefer-type-error": "error",
		"@EslintUnicorn/prevent-abbreviations": "off", // No idea
		"@EslintUnicorn/relative-url-style": "error",
		"@EslintUnicorn/require-array-join-separator": "error",
		"@EslintUnicorn/require-number-to-fixed-digits-argument": "error",
		"@EslintUnicorn/require-post-message-target-origin": "error",
		"@EslintUnicorn/string-content": "off", // idc, if u want to configure that, gl
		"@EslintUnicorn/switch-case-braces": "error",
		"@EslintUnicorn/template-indent": "error",
		"@EslintUnicorn/text-encoding-identifier-case": "error",
		"@EslintUnicorn/throw-new-error": "error",

		"@EslintSonar/no-all-duplicated-branches": "error",
		"@EslintSonar/no-collapsible-if": "error",
		"@EslintSonar/no-collection-size-mischeck": "error",
		"@EslintSonar/no-duplicate-string": "off", // Bruh
		"@EslintSonar/no-duplicated-branches": "error",
		"@EslintSonar/no-element-overwrite": "error",
		"@EslintSonar/no-empty-collection": "error",
		"@EslintSonar/no-extra-arguments": "error",
		"@EslintSonar/no-gratuitous-expressions": "error",
		"@EslintSonar/no-identical-conditions": "error",
		"@EslintSonar/no-identical-expressions": "error",
		"@EslintSonar/no-identical-functions": "error",
		"@EslintSonar/no-ignored-return": "error",
		"@EslintSonar/no-inverted-boolean-check": "error",
		"@EslintSonar/no-nested-switch": "error",
		"@EslintSonar/no-nested-template-literals": "error",
		"@EslintSonar/no-one-iteration-loop": "error",
		"@EslintSonar/no-redundant-boolean": "off",
		"@EslintSonar/no-redundant-jump": "error",
		"@EslintSonar/no-same-line-conditional": "error",
		"@EslintSonar/no-small-switch": "error",
		"@EslintSonar/no-unused-collection": "error",
		"@EslintSonar/no-use-of-empty-return-value": "error",
		"@EslintSonar/no-useless-catch": "off",
		"@EslintSonar/non-existent-operator": "error",
		"@EslintSonar/prefer-immediate-return": "off",
		"@EslintSonar/prefer-object-literal": "error",
		"@EslintSonar/prefer-single-boolean-return": "off",
		"@EslintSonar/prefer-while": "error",

		// Security
		"@EslintNoUnsanitized/property": "error",
		"@EslintNoUnsanitized/method": "error",

		"@EslintUnusedImports/no-unused-vars": "error",
		"@EslintUnusedImports/no-unused-imports": "error",

		// Imports
		"@EslintImports/no-unresolved": "off", // [2, { caseSensitiveStrict: true }] Off cuz can have issues with bundlers
		"@EslintImports/named": "off",
		"@EslintImports/default": "off", // ERRORS ["error"]
		"@EslintImports/no-namespace": "off", // needed in some libs
		"@EslintImports/export": "error",
		"@EslintImports/exports-lats": "off",
		// "@EslintImports/no-mutable-exports"
		"@EslintImports/namespace": "off", // ERRORS ["error"]
		"@EslintImports/no-mutable-exports": "error",
		"@EslintImports/extensions": "off", // Don't want to configure
		"@EslintImports/no-restricted-paths": "off",
		"@EslintImports/no-internal-modules": "off", // Need to be setup manually per project
		"@EslintImports/group-exports": "off",
		"@EslintImports/no-relative-packages": "off", // Maybe problems
		"@EslintImports/no-relative-parent-imports": "off",
		"@EslintImports/consistent-type-specifier-style": ["error", "prefer-top-level"],
		"@EslintImports/no-self-import": "error",
		"@EslintImports/no-cycle": "error", // Maybe off
		"@EslintImports/no-named-default": "error",
		"@EslintImports/no-named-as-default": "off",
		"@EslintImports/no-anonymous-default-export": "off",
		"@EslintImports/no-unused-modules": "off", // Need to be setup manually per project,
		"@EslintImports/no-commonjs": "off", // Only ESM but sometimes needed
		"@EslintImports/no-duplicates": ["error", { considerQueryString: true }],
		"@EslintImports/first": "error",
		"@EslintImports/max-dependencies": "off",
		"@EslintImports/no-extraneous-dependencies": "off", // Need strong config
		"@EslintImports/no-absolute-path": "warn", // Sometimes needed
		"@EslintImports/no-nodejs-modules": "off", //
		"@EslintImports/no-webpack-loader-syntax": "error", // Webpack
		"@EslintImports/order": "off",
		"@EslintImports/newline-after-import": ["error", { count: 1 }],
		"@EslintImports/prefer-default-export": "off",
		"@EslintImports/no-default-export": "off",
		"@EslintImports/no-named-export": "off",
		"@EslintImports/no-dynamic-require": "warn",
		"@EslintImports/unambiguous": "warn",
		"@EslintImports/no-unassigned-import": "warn", // Maybe off
		"@EslintImports/no-useless-path-segments": [
			"error",
			{
				noUselessIndex: true
			}
		],
		"@EslintImports/dynamic-import-chunkname": "off", // Webpack, not sure about config
		"@EslintImports/no-import-module-exports": "off",
		"@EslintImports/no-empty-named-blocks": "error",
		"@EslintImports/exports-last": "off",
		"@EslintImports/no-deprecated": "off", // ERRORS ["error"]
		"@EslintImports/no-named-as-default-member": "off",
		"@EslintImports/no-amd": "off",
		"@EslintPrefArrayFunc/from-map": "error",
		"@EslintPrefArrayFunc/no-unnecessary-this-arg": "error",
		"@EslintPrefArrayFunc/prefer-array-from": "error",
		"@EslintPrefArrayFunc/avoid-reverse": "error",
		"@EslintPrefArrayFunc/prefer-flat-map": "error",
		"@EslintPrefArrayFunc/prefer-flat": "error"
	}
});
