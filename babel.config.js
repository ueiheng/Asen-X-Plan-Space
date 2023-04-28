module.exports = {
    plugins: [
      [
        "component",
        {
          "libraryName": "element-plus"
        }
      ],
      [
        "import",
        {
          "libraryName": "element-plus",
          "customStyleName": (name) => {
            return `element-plus/lib/theme-chalk/${name}.css`;
          }
        }
      ]
    ]
  };