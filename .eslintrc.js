module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  rules: {
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/interface-name-prefix": "off",
    '@typescript-eslint/naming-convention': [
      "error",
      {
        selector: "interface",
        format: ["PascalCase"],
        prefix: ["I"],
        format: ["StrictPascalCase"],
      },
    ],
  },
};
