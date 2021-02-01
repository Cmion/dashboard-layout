const CracoLessPlugin = require("craco-less");

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              "@primary-color": "#3E82FF",
              "@border-radius-base": "4px",
              "@font-family": 'Poppins, Muli, "Segoe UI", sans-serif',
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
