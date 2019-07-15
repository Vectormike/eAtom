module.exports = {
  "extends": ["airbnb", "prettier"],
  "env": {
      "node": true,
      "browser": true,
      "es6": true,
      "mocha": true
  },
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },  
  rules: {
    "class-methods-use-this": 0,
    "object-curly-newline": 0,
    "array-callback-return": 0,
    "consistent-return": 0,
    "prefer-destructuring": 0
  }
};
