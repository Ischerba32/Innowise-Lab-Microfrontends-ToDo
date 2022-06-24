const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react-ts");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "Innowise",
    projectName: "todo",
    webpackConfigEnv,
    argv,
  });

  return merge(defaultConfig, {
    // modify the webpack config however you'd like to by adding to this object
    module: {
      rules: [
        // {
        //   test: /\.(scss|css)$/,
        //   use: ['style-loader', 'css-loader', 'sass-loader'],
        //   module: true,
        // },
        {
          test: /\.scss$/i,
          include: /src/,
          exclude: /node_modules/,
          use: [
            {
              loader: require.resolve('style-loader', {
                paths: [require.resolve('webpack-config-single-spa')],
              }),
            },
            {
              loader: require.resolve('css-loader', {
                paths: [require.resolve('webpack-config-single-spa')],
              }),
            },
            {
              loader: require.resolve('sass-loader', {
                paths: [require.resolve('webpack-config-single-spa')],
              }),
              options: {
                importLoaders: 1,
                sourceMap: true,
                module: true,
              },
            },
          ],
        },
      ],
    },
  });
};
