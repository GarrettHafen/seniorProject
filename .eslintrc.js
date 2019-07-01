module.exports = {
  globals: {
    window: true
  },
  env: {
    browser: true,
    es6: true,
    node: true
  },
  extends: ["eslint:recommended", "prettier", "plugin:react/recommended"],
  settings: {
    react: {
      createClass: "createReactClass",
      pragma: "React",
      version: "16.3",
      flowVersion: "0.53"
    }
  },
  parserOptions: {
    ecmaVersion: 8,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    },
    sourceType: "module"
  },
  plugins: ["react"],
  rules: {
    "no-console": "off",
    indent: [2, 2, { SwitchCase: 1 }],
    "linebreak-style": ["error", "unix"],
    quotes: ["error", "double"],
    semi: ["error", "always"],
    "space-before-function-paren": 0,
    "comma-dangle": 0,
    "no-undef": "error",
    "no-unused-vars": [
      "error",
      { vars: "all", args: "after-used", ignoreRestSiblings: false }
    ],
    "react/prop-types": [0]
  }
};
