module.exports = {
  root: true,
  extends: '@react-native',
    "env": {
      "browser": true,
      "es2021": true,
      "node": true
    },
    "extends": [
      "eslint:recommended",
      "plugin:react/recommended",
      "plugin:react-native/all",
      "plugin:@typescript-eslint/recommended"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
      "ecmaFeatures": {
        "jsx": true
      },
      "ecmaVersion": 12,
      "sourceType": "module"
    },
    "plugins": [
      "react",
      "react-hooks",
      "react-native",
      "@typescript-eslint"
    ],
    "rules": {
      "react/react-in-jsx-scope": "off", // React 17+ için gerekli değil
      "react-native/no-unused-styles": "warn",
      "react-native/split-platform-components": "warn",
      "react-native/no-inline-styles": "warn",
      "react-native/no-color-literals": "warn"
    }
  
  
};
