import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";


/** @type {import('eslint').Linter.Config[]} */
export default [
  {files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"]},
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
];

// plugins: [
//     'i18next',
//      'react-hooks'
// ]

// extends: [
//     'plugin:i18next/recommended'
// ]

// rules: {
//     "i18next/no-literal-string": ['error', {markupOnly: true}],
//      "react-hooks/rules-of-hooks": "error",
//      "react-hooks/exhaustive-deps": "error"
// }