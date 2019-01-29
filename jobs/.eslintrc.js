module.exports = {
  "extends": [
    "airbnb",
    "prettier",
    "prettier/react"
  ],
  "parser": "babel-eslint",
  "rules": {
    "class-methods-use-this": [0, 'never'],
    'no-console': 'off',
    "react/jsx-filename-extension": [
      1,
      {
        "extensions": [
          ".js",
          ".jsx"
        ]
      }
    ],
    "react/destructuring-assignment": [1, 'never'],
    "prettier/prettier": [
      "error",
      {
        "trailingComma": "es5",
        "singleQuote": true,
        "printWidth": 100
      }
    ],
    "prefer-const": [0, {"destructuring": "all"}],
    "react/prop-types": [
      "enabled",
      { "ignore": "ignore", "customValidators": "customValidator" }
    ],
    "react/prefer-stateless-function": [0, { "ignorePureComponents": false }],
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "no-use-before-define": ["error", { "variables": false, "functions": true, "classes": true }]
  },
  "plugins": [
    "prettier"
  ]
}