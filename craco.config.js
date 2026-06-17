const path = require("path");

// react-day-and-night-toggle ships its "compiled" output with raw,
// un-transpiled JSX (both esm and cjs builds), which Create React App's
// default webpack config can't parse since babel-loader excludes
// node_modules. This rule teaches babel-loader to transpile just that one
// package. (React version deduping is handled separately via the
// package.json "overrides" field, not here.)
module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      // Newer webpack 5 patch versions enforce fully-specified extensions when
      // resolving ESM imports (e.g. `import "react/jsx-runtime"` inside
      // react-parallax-tilt's ESM build). CRA's packages weren't built with
      // that in mind, so relax it project-wide.
      webpackConfig.module.rules.push({
        test: /\.m?js$/,
        resolve: { fullySpecified: false },
      });

      const oneOfRule = webpackConfig.module.rules.find((rule) => rule.oneOf);
      oneOfRule.oneOf.unshift({
        test: /\.jsx$/,
        include: path.resolve(
          __dirname,
          "node_modules/react-day-and-night-toggle"
        ),
        use: {
          loader: require.resolve("babel-loader"),
          options: {
            presets: [require.resolve("babel-preset-react-app")],
          },
        },
      });
      return webpackConfig;
    },
  },
};
