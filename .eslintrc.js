module.exports = {
    "extends": "airbnb",
    "rules": {
      "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
      "object-curly-spacing": 0,
    },
    "globals": {
      "it": true,
      "__PROD__": true,
    },
    "plugins": [
        "react",
        "jsx-a11y",
        "import"
    ]
};
